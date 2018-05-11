'use strict'

const CrudController = require('./crud');
const { checkAuth } = require('../global-controllers/authentication');

class UserController extends CrudController{
    constructor(userService, chatService, userChatService){
        super(userService);

        const chatController = require('./chat')(
            chatService,
            userChatService
        );
        this.router.use('./:userId', chatController);

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
        const user = await this.service.readByLogin(req.params.login);
        const checkValue = await checkAuth(req.ability, 'delete', user);
        if(checkValue.access){
            await super.delete(user.id);
        }
        else{
            throw this.service.repository.errors.accessDenied;
        }
        res.sendStatus(200);
    }

    async update(req, res){
        const user = await this.service.readByLogin(req.params.login);
        const checkValue = await checkAuth(req.ability, 'update', user);
        if(checkValue.access){
            await super.update(user.id);
        }
        else{
            throw this.service.repository.errors.accessDenied;
        }
        res.sendStatus(200);
    }

    async update(req, res){

    }
}

module.exports = (userService, chatService, userChatService) => {
    const controller = new UserController(
        userService,
        chatService,
        userChatService
    );
    return controller.router;
};