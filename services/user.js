'use strict'

const CrudService = require('./crud');
const Sequelize = require('sequelize');

class UserService extends CrudService{
    constructor(repository, errors){
        super(repository, errors);
    }

    async checkCredentials(data){
        let users = await this.repository.findAll({
            where: {[Sequelize.Op.or]: [{login: data.login}, {email: data.email}]}
        })
        if(users.length != 0)
            throw this.errors.wrongCredentials;
        else
            return true;
    }
}

module.exports = UserService;