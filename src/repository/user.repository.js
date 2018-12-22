import BaseRepository from "./base.repository";

class UserRepository extends BaseRepository {
    constructor() {
        super('User');
        console.log(this.dbContext);
    }
}

export default UserRepository;