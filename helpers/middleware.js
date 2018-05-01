'use strict';

const express = require('express');
const middleware = express.Router();
const tokens = require('./tokens');
const authCookie = '__service_token';


middleware.use('/*', async (req, res, next) => {
    const token = req.cookies[authCookie];
    const userToken = tokens.verifyToken(token);
    if(userToken){
        next();
    }
    else{ 
        res.redirect('/login-page.html');
    }
});

middleware.get('/#/im', (req, res) => {
    res.sendStatus(200);
})



module.exports = middleware;