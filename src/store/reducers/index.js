import { combineReducers } from 'redux';
import asyncReducerFactory from '../helpers/async-reducer-factory';
import usersActionTypes from '../action-types/users';

const rootReducer = combineReducers({
    users: asyncReducerFactory(usersActionTypes.GET_USERS, []),
});

export default rootReducer;