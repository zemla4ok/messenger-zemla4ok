'use strict'

const CrudController = require('./crud');
const { checkAuth } = require('./../global-controllers/authorisation');

class ChatController extends CrudController{
    constructor(chatService, userChatService){
        super(chatService);

        this.userChatService = userChatService;

        this.registerRoutes();
    }

    async create(req, res){
        let data;
        data = await this.service.create(req.body);
        const result = await this.userChatService.create(req.params.userId, data.id);
        res.json(data);
    }

    async update(req, res){
        let data;
        const chat = await this.service.read(req.params.id);
        if (chat){
            const users = await chat.getUsers();
            let flag = false;
            for(let i = 0; i < users.length; i++){
                if(users[i].id == req.params.userId)
                flag = true;
            }
            if (flag)
                data = await this.service.update(req.params.id, req.body);
            else
                throw this.service.errors.accessDenied;
        }
        else
            throw this.service.errors.invalidId;
        res.json(data);
    }

}

module.exports = (chatService, userChatService) => {
    const controller = new ChatController(
        chatService,
        userChatService
    );
    return controller.router;
}