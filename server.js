'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');
const middleware = require('./helpers/middleware');
const errors = require('./helpers/error');
//services


module.exports = (db, config) => {
    const app = express();
    //services


    //controllers
    const error = require('./global-controllers/error');
    const apiController = require('./controllers/api')(
        
    )

    //Mounting
    app.use(cookieParser());
    app.use(bodyParse.json());

    app.use('/*(api|main)', middleware);

    app.use(express.static(__dirname + '/public/images'));
    app.use(express.static(__dirname + '/public/styles'));
    app.use(express.static(__dirname + '/public/pages'));
    app.use(express.static(__dirname + '/public/scripts'));

    app.get('/main/im', (req, res) => {
        res.sendFile(__dirname + '/public/#/im.html');
    })
    
    app.use('/api/v1', apiController);
    app.use('/api/v1', error);

    return app;
};