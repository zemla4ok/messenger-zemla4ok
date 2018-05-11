'use strict'

const CrudController = require('./crud');

class ChatController extends CrudController{
    constructor(chatService){
        super(chatService);

        

        this.registerRoutes();
    }
}

module.exports = (chatService) => {
    const controller = new ChatController(
        chatService
    );
    return controller.router;
}