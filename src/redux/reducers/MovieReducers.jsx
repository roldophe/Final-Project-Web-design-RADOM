import { ActionTypes } from "../actions/ActionTypes";

const initialState = {
    movies: [],
}
export const MovieReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        //statement
        case ActionTypes.FECTCH_MOVIES:
            return {...state, movies: payload}
        default:
            return state
    }
} 