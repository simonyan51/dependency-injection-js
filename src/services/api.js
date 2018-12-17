import { Inject } from '../core/utils/decorators';

@Inject('API_URL')
class API {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    getUsers(queryParams) {
        return fetch(`${this.apiUrl}?${queryParams}`).then(item => item.json());
    }
}

export default API;