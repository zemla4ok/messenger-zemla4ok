'use strict'

const CrudService = require('./crud');

class ChatService extends CrudService{
    constructor(repository){
        super(repository);
    }


}

module.exports = ChatService;