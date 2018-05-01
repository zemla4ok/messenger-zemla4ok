'use strict'

const CrudService = require('./crud');
const Sequelize = require('sequelize');
const validator = require('../helpers/validator');

class UserService extends CrudService{
    constructor(repository, errors){
        super(repository, errors);
    }

    async checkCredentials(data){
        let users = await this.repository.findAll({
            where: {login: data.login}
        })
        if(users.length != 0)
            throw this.errors.loginExist;
        else
            return true;
    }

    async create(data){
        console.log(data);
        const validRes = validator.check('user', data);
        if(validRes.error)
            throw this.errors.validationError;
        else
            return super.create(data);
    }
}

module.exports = UserService;