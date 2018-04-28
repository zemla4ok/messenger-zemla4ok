'use strict'

const CrudController = require('./crud');

class AuthenticationController extends CrudController{
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