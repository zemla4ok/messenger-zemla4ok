'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');
const HTMLRouter = require('./helpers/router');
//services


module.exports = (db, config) => {
    const app = express();
    //services


    //controllers
    const apiController = require('./controllers/api')(
        
    )

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(bodyParse.json());

    app.use(express.static(__dirname + '/public/images'));
    app.use(express.static(__dirname + '/public/styles'));
    app.use(express.static(__dirname + '/public/pages'));

    app.use('/api', apiController);

    return app;
};