 import UserService from './services/user-service';
 import API from './services/api';
 import store from './store';
 import {
     usersActions,
 } from './store/actions';
 import Loader from './view/components/Loader';
 import User from './view/components/User';

 const injectionConfig = injector => {
    const { dispatch } = store; 
    injector.registerInjection('UserService', UserService);
    injector.registerInjection('API', API);
    injector.registerInjection('dispatch', dispatch, null, true);
    injector.registerInjection('usersActions', usersActions);
    injector.registerInjection('Loader', Loader, true, true);
    injector.registerInjection('User', User, true, true);
    injector.registerInjection('API_URL', 'https://randomuser.me/api/');
 }

 export default injectionConfig;