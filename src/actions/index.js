import axios from 'axios';
import {LOAD_MATCHES_SUCCESS} from './types';
const BASE='http://localhost:3000/';
export function loadMatches(){
    const request=axios.get(BASE+'matches/');
    return function(dispatch){
        return request.then(
            (matches) => dispatch(loadMatchesSuccess(matches)),
            (error) => console.log(error)
        )
    }
}

export function loadMatchesSuccess(matches){
    return {
        payload:matches,
        type:LOAD_MATCHES_SUCCESS
    }
}