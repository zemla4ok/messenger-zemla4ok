'use strict';

const express = require('express');

module.exports = (
    chatService,
    userChatService,
    userService
) => {
    const router = express.Router();

    //defining cntroller
    const userController = require('./user')(
        userService,
        chatService,
        userChatService
    );

    const chatController = require('./chat')(
        chatService
    );

    //defining routers    
    router.use('/users', userController);
    router.use('/chats', chatController);

    return router;
}