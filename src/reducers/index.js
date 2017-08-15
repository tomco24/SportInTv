import {combineReducers} from 'redux';
import MatchesReducer from './matches';
import StatusReducer from './status';

const reducers=combineReducers({
    matches:MatchesReducer,
    status:StatusReducer
});

export default reducers;