import { Inject } from '../core/utils/decorators';

@Inject('API_URL')
class API {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    getUsers() {
        return fetch(`${this.apiUrl}?results=50`).then(item => item.json());
    }
}

export default API;