import { ActionTypes } from "../actions/ActionTypes";

const initialState = {
    people: [],
}
export const PeopleReducers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ActionTypes.FECTCH_PEOPLE:
            return {...state, people: payload }
        default:
            return state;
    }
}