'use strict'

const CrudService = require('./crud');
const validator = require('../helpers/validator');

class UserChatService extends CrudService{
    constructor(repository, errors){
        super(repository, errors);
    }

}

module.exports = UserChatService;