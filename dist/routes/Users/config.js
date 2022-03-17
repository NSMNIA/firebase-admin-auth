"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutesConfig = void 0;
const UserController_1 = require("../../controllers/UserController");
const Authenticated_1 = require("../../middleware/Authenticated");
const Authorized_1 = require("../../middleware/Authorized");
function UserRoutesConfig(app) {
    app.post('/users', Authenticated_1.isAuthenticated, (0, Authorized_1.isAuthorized)({ hasRole: ['admin', 'manager'] }), UserController_1.create);
    // lists all users
    app.get('/users', [
        Authenticated_1.isAuthenticated,
        (0, Authorized_1.isAuthorized)({ hasRole: ['admin', 'manager'] }),
        UserController_1.all
    ]);
    // get :id user
    app.get('/users/:id', [
        Authenticated_1.isAuthenticated,
        (0, Authorized_1.isAuthorized)({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        UserController_1.get
    ]);
    // updates :id user
    app.patch('/users/:id', [
        Authenticated_1.isAuthenticated,
        (0, Authorized_1.isAuthorized)({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        UserController_1.patch
    ]);
    // deletes :id user
    app.delete('/users/:id', [
        Authenticated_1.isAuthenticated,
        (0, Authorized_1.isAuthorized)({ hasRole: ['admin', 'manager'] }),
        UserController_1.remove
    ]);
}
exports.UserRoutesConfig = UserRoutesConfig;
//# sourceMappingURL=config.js.map