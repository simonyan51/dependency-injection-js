import { BaseRoute, Get } from "../helpers/route";

@BaseRoute('/user')
class UserController {
    @Get('/')
    getUsers(request, response) {

    }
}

export default UserController;