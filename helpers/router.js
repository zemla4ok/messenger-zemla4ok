'use strict';

const express = require('express');
const routes = express.Router();

routes.get('/login', (req, res) => {
    //res.send(login);
    res.sendStatus(200);
})

module.exports = routes;