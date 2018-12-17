import { AsyncState } from '../../core/entities';

const asyncReducerFactory = (token, initialState) =>
    (state = new AsyncState(false, initialState, null), action) => {
    switch (action.type) {
        case `${token}_PENDING`:
            return new AsyncState(true, state.data, null);
        case `${token}_DONE`:
            return new AsyncState(false, action.payload, null);
        case `${token}_REJECTED`:
            return new AsyncState(false, state.data, action.payload);
        default:
            return state;
    }
};

export default asyncReducerFactory;