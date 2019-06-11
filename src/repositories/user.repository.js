const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository {
    constructor() {
        super('User');
        console.log(this.dbContext);
    }
}

module.exports = UserRepository;