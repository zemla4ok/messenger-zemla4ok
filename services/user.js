'use strict'

const CrudService = require('./crud');
const bcrypt = require('bcrypt');
const validator = require('../helpers/validator');
const tokens = require('../helpers/tokens');

class UserService extends CrudService{
    constructor(repository, errors){
        super(repository, errors);
    }

    async update(login, token, data){
        const userToken = tokens.verifyToken(token);
        if(userToken.login === login){
            const user = await this.readByLogin(login);
            return await super.update(user.id, data);
        }
        else
            throw this.errors.accessDenied;
    }

    async delete(login, token){
        const userToken = tokens.verifyToken(token);
        if(userToken.login === login){
            const user = await this.readByLogin(login);
            return await super.delete(user.id);
        }
        else
            throw this.errors.accessDenied;
    }

    async checkCredentials(data){
        let users = await this.repository.findAll({
            where: {login: data.login}
        });
        if(users.length !== 0)
            throw this.errors.loginExist;
        else
            return true;
    }

    async create(data){
        console.log(data);
        data.password = bcrypt.hashSync(data.password, 8);
        const validRes = validator.check('user', data);
        
        if(validRes.error)
            throw this.errors.validationError;
        else
            return super.create(data);
    }

    async readByLogin(login){
        const user =  await this.repository.findOne({
            where: {
                login: login
            }
        });
        if(user)
            return user;
        else
            throw this.errors.notFound;
    }
}

module.exports = UserService;