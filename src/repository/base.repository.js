const { Inject } = require('../core/utils/decorators');
const { DB_CONTEXT } = require('../helpers/tokens');

@Inject(DB_CONTEXT)
class BaseRepository {
    constructor(dbContext, repoName) {
        this.dbContext = repoName ? dbContext[repoName] : dbContext;
    }
}

module.exports = BaseRepository;