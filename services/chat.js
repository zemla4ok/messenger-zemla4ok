'use strict'

const CrudService = require('./crud');
const validator = require('../helpers/validator');

class ChatService extends CrudService{
    constructor(repository, errors){
        super(repository, errors);
    }

}

module.exports = ChatService;