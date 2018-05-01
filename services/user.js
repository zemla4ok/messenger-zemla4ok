'use strict'

const CrudService = require('./crud');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
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
        //data.password = bcrypt.hashSync(data.password);
        const validRes = validator.check('user', data);
        
        if(validRes.error)
            throw this.errors.validationError;
        else
            return super.create(data);
    }

    async readByLogin(login){
        const user = await this.findOne({
            where: {
                login: login
            }
        })
        return user;
    }
}

module.exports = UserService;