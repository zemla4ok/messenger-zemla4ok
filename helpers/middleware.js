'use strict';

const express = require('express');
const middleware = express.Router();

middleware.all('/*', (req, res, next) => {
    res.sendStatus(200);
})

module.exports = middleware;