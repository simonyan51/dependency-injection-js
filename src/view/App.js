import React, { Component } from 'react';
import { Inject } from '../core/utils/decorators';

@Inject('UserService')
class App extends Component {
    
    constructor(userService, props) {
        super(props);
        this.state = {
            users: [],
        };
        this.userService = userService;
    }
    
    render() {
        const {
            users,
        } = this.state;
        const {
            name,
        } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {
                        users.map(item => <li key={item.name}>{item.name}</li>)
                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            users: this.userService.getUsers(),
        })
    }
}

export default App;