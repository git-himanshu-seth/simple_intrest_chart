import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './root-reducer'

const middileware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middileware))

export default store;