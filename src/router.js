import { createRoute } from "./helpers/route";
import UserController from "./controllers/user.controller";

const routerFactory = router => {
    createRoute(router, '/user', UserController);
};

export default routerFactory;
