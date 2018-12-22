import { Inject } from "../core/utils/decorators";
import { DB_CONTEXT } from "../helpers/tokens";

@Inject(DB_CONTEXT)
class BaseRepository {
    constructor(dbContext, repoName) {
        this.dbContext = repoName ? dbContext[repoName] : dbContext;
    }
}

export default BaseRepository;