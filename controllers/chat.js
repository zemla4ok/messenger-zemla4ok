'use strict'

const CrudController = require('./crud');
const { checkAuth } = require('./../global-controllers/authorisation');

class ChatController extends CrudController{
    constructor(chatService, userService){
        super(chatService, userService);

        this.userService = userService;
        this.addUser = this.addUser.bind(this);

        this.routes['/:id/adding/:newUserLogin']= [
                { method: 'post', cb: this.addUser }
            ]
        

        this.registerRoutes();
    }

    async addUser(req, res){//id(user), newUserLogin
        let data;
        const chat = await this.service.read(req.params.id);
        const users = await chat.getUsers();
        let isUser = false;
        for(let i = 0; i < users.length; i++){
            if(users[i].id == req.params.userId)
                isUser = true;
        };
        if(!isUser)
            throw this.service.errors.accessDenied;
        else{
           let user = await this.userService.readByLogin(req.params.newUserLogin)
           if(user)
                data = await chat.addUser(user);
            else
                throw this.service.errors.invalidId;
        }
        res.sendStatus(200);
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

    async delete(req, res){
        res.sendStatus(404);
    }

    async readAll(req, res){
        let resultChats = [];
        const chats = await this.service.readChunk();
        for(let i = 0; i < chats.length; i++){
            let users = await chats[i].getUsers();
            for(let j = 0; j < users.length; j++){
                if(users[j].id == req.params.userId)
                    resultChats.push(chats[i]);
            }
        }
        res.json(resultChats);
    }
}

module.exports = (chatService, userService) => {
    const controller = new ChatController(
        chatService,
        userService
    );
    return controller.router;
}