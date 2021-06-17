import { combineReducers } from 'redux';

import graphReducer from './graph/graph-reducer';

const rootReducer = combineReducers({
    graph: graphReducer
});
export default rootReducer;