'use strict'

const CrudController = require('./crud');
const authCookie = '__service_token';

class UserController extends CrudController{
    constructor(userService){
        super(userService);

        this.routes = {
            '/': [
                { method: 'get', cb: this.readAll },
            ],
            '/:login': [
                { method: 'get', cb: this.read },
                { method: 'put', cb: this.update },
                { method: 'delete', cb: this.delete }
            ]
        };

        this.registerRoutes();
    }

    async read(req, res){
        let data = await this.service.readByLogin(req.params.login);
        res.json(data);
    }

    async delete(req, res){
        const token = req.cookies[authCookie];
        let data = await this.service.delete(req.params.login, token);
        res.json(data);
    }

    async update(req, res){
        const token = req.cookies[authCookie];
        let data = await this.service.update(req.params.login, token, req.data);
        res.json(data);
    }
}

module.exports = (userService) => {
    const controller = new UserController(
        userService
    );
    return controller.router;
};