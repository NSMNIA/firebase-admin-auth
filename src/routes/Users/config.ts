import { Application } from "express";
import { create, all, get, patch, remove } from "../../controllers/UserController";
import { isAuthenticated } from "../../middleware/Authenticated";
import { isAuthorized } from "../../middleware/Authorized";

export function UserRoutesConfig(app: Application) {
    app.post('/users',
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        create
    );

    // lists all users
    app.get('/users', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        all
    ]);
    // get :id user
    app.get('/users/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        get
    ]);
    // updates :id user
    app.patch('/users/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
        patch
    ]);
    // deletes :id user
    app.delete('/users/:id', [
        isAuthenticated,
        isAuthorized({ hasRole: ['admin', 'manager'] }),
        remove
    ]);
}