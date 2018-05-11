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
        userService
    )

    //defining routers    
    router.use('/users', userController);

    return router;
}