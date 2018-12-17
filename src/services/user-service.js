import { Inject } from '../core/utils/decorators';


@Inject('API', 'dispatch', 'usersActions')
class UserService {
    
    constructor(api, dispatch, usersActions) {
        this.api = api;
        this.dispatch = dispatch;
        this.usersActions = usersActions;
    }
    
    async getUsers() {
        const {
            getUsersPending,
            getUsersDone,
            getUsersRejected,
        } = this.usersActions;
        try {
            
            this.dispatch(getUsersPending());
            
            const { results } = await this.api.getUsers('results=20');
            
            this.dispatch(getUsersDone(results));
            
            return results;
        
        } catch(err) {
            
            this.store.dispatch(getUsersRejected(err));
        
        }
    }
}

export default UserService;