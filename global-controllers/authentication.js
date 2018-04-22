'use strict'

const CrudController = require('./crud');

class AuthenticationController{
    constructor(userService){
       super(userService);

       

       this.registerRoutes();
    }

    
}

module.exports = (userService) => {
    const controller = new AuthenticationController(
        userService
    );
    return controller.router;
}