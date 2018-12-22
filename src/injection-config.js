import { USER_REPOSITORY, APP } from "./helpers/tokens";
import UserRepository from "./repository/user.repository";


const injectionConfig = (injector, app) => {
    injector.registerInjection(APP, app);
    injector.registerInjection(USER_REPOSITORY, UserRepository);
}

 export default injectionConfig;