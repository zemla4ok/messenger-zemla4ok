'use strict'

const CrudController = require('../controllers/crud');
const tokens = require('../helpers/tokens');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authCookie = '__service_token';

class AuthenticationController extends CrudController{
    constructor(userService){
       super(userService);

       this.routes = {
            '/*': [
                { method: 'use', cb: this.authenticate }
            ],
            '/login': [
                { method: 'post', cb: this.login }
            ]
        }

       this.registerRoutes();
    }

    async authenticate(req, res, next){
        const token = req.cookies[authCookie];
        const userToken = tokens.verifyToken(token);
        if(userToken){
            next();
        }
        else{ 
            res.redirect('/login-page.html');
        }
    }

    async login(req, res){
        const user = await this.repository.readByLogin(req.body.login);
        if(!user || !bcrypt.compareSync(req.body.password, user.password))
            res.json({code: 400, message: 'Invalid credentials'});
        else{
            const token = jwt.sign({
                'id': user.login
            }, 
            'secret',
            {
                expiresIn: 10*60    
            });
            res.cookie(authCookie, token);
            res.redirect('http://localhost:3000/main/im');
        }
    }
}

module.exports = (userService) => {
    const controller = new AuthenticationController(
        userService
    );
    return controller.router;
}