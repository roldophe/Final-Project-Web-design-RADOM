import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { RootReducer } from '../reducers/RootReducer';
import thunk from 'redux-thunk';
const middleWare =[thunk]
export const CentralStore = legacy_createStore(RootReducer,
    compose(applyMiddleware(...middleWare)));


