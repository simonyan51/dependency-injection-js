const UserController = require('./controllers/user.controller');

const routerFactory = router => {
    router.get('/user', new UserController().getUsers);
};

module.exports = routerFactory;
