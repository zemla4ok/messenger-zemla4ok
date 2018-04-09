const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');

//services


module.exports = (db, config) => {
    const app = express();
    //services


    //controllers


    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(bodyParse.json());

    app.use('/api', apiController);

    return app;
};