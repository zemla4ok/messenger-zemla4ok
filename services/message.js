'use strict'

const CrudService = require('./crud');

class MessageService extends CrudService{
    constructor(repository){
        super(repository);
    }
}

module.exports = MessageService;