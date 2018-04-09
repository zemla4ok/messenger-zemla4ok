'use strict';

const express = require('express');
const Sequelize = require('sequelize');

const port = process.env.PORT || 3000;
const config = require('./config_m');

const dbcontext = require('./context/db')
  (Sequelize, config);

const app = express();

app.get('/', (req, res) =>{
  dbcontext.rand
  .findAll({ raw: true })
  .then((rands) => res.json(rands));
});
app.get('/generate', (req, res) => {
  dbcontext.rand
    .create({
      value: Math.random()
    })
    .then((rand) => res.json(rand));
});

dbcontext.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
        console.log(`Running on ${port} port`);
    });
  });