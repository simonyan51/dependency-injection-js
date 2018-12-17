 import UserService from './services/user-service';
 import API from './services/api';

 const injectionConfig = injector => {
    injector.registerInjection('UserService', UserService);
    injector.registerInjection('API', API);
 }

 export default injectionConfig;