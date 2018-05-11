'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');
const errors = require('./helpers/error');
//services
const UserService = require('./services/user');
const ChatService = require('./services/chat');
const UserChatService = require('./services/user-chat');

module.exports = (db, config) => {
    const app = express();
    //services
    const userService = new UserService(
        db.user,
        errors
    );
    const chatService = new ChatService(
        db.chat,
        errors
    );
    const userChatService = new UserChatService(
        db.userChat,
        errors
    );

    //controllers
    const error = require('./global-controllers/error');
    const registration = require('./global-controllers/registration')(
        userService
    );
    /*const authController = require('./global-controllers/authentication')(
        userService
    );*/
    const apiController = require('./controllers/api')(
        chatService,
        userChatService,
        userService
    );

    //Mounting
    app.use(cookieParser());
    app.use(bodyParse.json());

    //app.use('/', authController);

    app.use(express.static(__dirname + '/public/images'));
    app.use(express.static(__dirname + '/public/styles'));
    app.use(express.static(__dirname + '/public/scripts'));

    app.get('/main/im', (req, res) => {        
        res.sendFile(__dirname + '/public/pages/im.html');
    });

    app.get('/login', (req, res) => {
        res.sendFile(__dirname + '/public/pages/login-page.html');
    });
    
    app.get('/registration', (req, res) => {
        res.sendFile(__dirname + '/public/pages/registration-page.html');
    });

    app.use('/', registration);
    app.use('/api/v1', apiController);
    //app.use('/', error);

    return app;
};