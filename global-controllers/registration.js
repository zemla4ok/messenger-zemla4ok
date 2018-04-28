'use strict'

const CrudController = require('../controllers/crud');

class RegistrationController extends CrudController {
    constructor(userService) {
        super(userService);

        this.registrationCredentialsCheck = this.registrationCredentialsCheck.bind(this);

        this.routes = {
            '/credentials-check': [
                { method: 'post', cb: this.registrationCredentialsCheck }
            ]
        }

        this.registerRoutes();
    }

    async registrationCredentialsCheck(req, res) {
        let data = await this.service.checkCredentials(req.body);
        console.log(data);
        res.json(data);
    }

}

module.exports = (userService) => {
    const controller = new RegistrationController(
        userService
    );
    return controller.router;
}