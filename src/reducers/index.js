import {combineReducers} from 'redux';
import MatchesReducer from './matches';

const reducers=combineReducers({
    matches:MatchesReducer
});

export default reducers;