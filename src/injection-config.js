const { USER_REPOSITORY, APP } = require('./helpers/tokens');
const UserRepository = require('./repositories/user.repository');


const injectionConfig = (injector, app) => {
    injector.registerInjection(APP, app);
    injector.registerInjection(USER_REPOSITORY, UserRepository);
}

 module.exports = injectionConfig;