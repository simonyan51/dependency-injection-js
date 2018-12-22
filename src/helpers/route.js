import * as express from 'express';

const BaseRoute = baseUrl => target => {
    const innerRouter = express.Router();
    innerRouter.use(baseUrl);
    target.prototype.getRouter = function() {
        innerRouter;
    }
    return target;
} 

const Get = url => (target, key, descriptor) => {
    new target.constructor().getRouter().get(url, new target()[key].bind(null));
    return descriptor;
}

const Post = url => (target, key, descriptor) => {
    new target.constructor().getRouter().post(url, new target.constructor()[key].bind(null));
    return descriptor;
}

const Put = url => (target, key, descriptor) => {
    new target.constructor().getRouter().put(url, new target.constructor()[key].bind(null));
    return descriptor;
}

const Delete = url => (target, key, descriptor) => {
    new target.constructor().getRouter().delete(url, new target.constructor()[key].bind(null));
    return descriptor;
}

export {
    Get,
    Post,
    Put,
    Delete,
    createRoute,
};