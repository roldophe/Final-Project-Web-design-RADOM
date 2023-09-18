import { combineReducers } from 'redux';
import { PeopleReducers } from './PeopleReducers';
import { MovieReducers } from './MovieReducers';
import { TrendingReducers } from './TrendingReducers';

export const RootReducer = combineReducers({
    movReducer: MovieReducers,
    peopleReducer: PeopleReducers,
    trendingReducer: TrendingReducers
})