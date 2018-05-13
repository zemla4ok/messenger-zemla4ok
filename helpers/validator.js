const Joi = require('joi');

const schemas = {
    'user': Joi.object().keys({
        name: Joi.string(),
        surname: Joi.string(),
        login: Joi.string(),
        password: Joi.string()
    }),
    'chat': Joi.object().keys({
        name: Joi.string()
    }),
    'user-chat': Joi.object().keys({
        UserId: Joi.number().integer(),
        ChatId: Joi.number().integer()
    })
}

exports.check = function (schema, body) {
    if(!schemas[schema])
        return {};
    return Joi.validate(body, schemas[schema], {presence: 'required'});
}