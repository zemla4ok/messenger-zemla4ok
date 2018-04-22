'use strict'

const CrudService = require('./crud');

class UserService extends CrudService{
    constructor(repository){
        super(repository);
    }
}

module.exports = UserService;