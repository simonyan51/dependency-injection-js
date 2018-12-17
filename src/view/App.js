import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Inject } from '../core/utils/decorators';

@Inject('UserService', 'Loader', 'User')
class App extends Component {
    
    constructor(userService, Loader, User, props) {
        super(props);
        this.userService = userService;
        this.Loader = Loader;
        this.User = User;
    }
    
    render() {
        const { name, usersState } = this.props;
        const {
            Loader,
            User,
        } = this;
        return (
            <div>
                <h1>{name}</h1>
                <div className="users-container">
                    <Loader asyncState={usersState}>
                        {
                            users => users && users.map((item, index) => (
                                <User key={`${item.id.phone}-${index}`} user={item} />
                            ))
                        }
                    </Loader>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.userService.getUsers();
    }
}

export default connect(state => ({
    usersState: state.users,
}))(App);