'use strict'

const CrudController = require('./crud');

class ChatController extends CrudController{
    constructor(chatService, userChatService){
        super(chatService);

        this.userChatService = userChatService;

        this.registerRoutes();
    }

    async create(req, res){
        let data = await this.service.create(req.data);

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