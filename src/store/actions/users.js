import usersActionTypes from '../action-types/users';

const getUsersPending = () => ({
    type: usersActionTypes.GET_USERS_PENDING,
});
const getUsersDone = payload => ({
    type: usersActionTypes.GET_USERS_DONE,
    payload,
});
const getUsersRejected = payload => ({
    type: usersActionTypes.GET_USERS_REJECTED,
    payload,
});

export default {
    getUsersPending,
    getUsersDone,
    getUsersRejected,
};