import { Inject } from '../core/utils/decorators';


@Inject('API')
class UserService {
    constructor(api) {
        this.api = api;
    }
    getUsers() {
        return [
            {
                name: 'Bob'
            }
        ];
    }
}

export default UserService;