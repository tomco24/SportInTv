import axios from 'axios';
import {
    LOAD_MATCHES_SUCCESS,
    SELECT_MATCHES_FROM_SPORT_SUCCESS,
    START_LOADING    
} from './types';
const BASE='http://10.10.10.22:3000/';

// BASIC LOAD MATCHES
export function loadMatches(){
    const request=axios.get(BASE+'matches/');
    console.log('Action');
    return function(dispatch){
        return request.then(
            (matches) => dispatch(loadMatchesSuccess(matches.data)),
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

// SELECT MATCH FROM SPORT

export function selectMatchesFromSport(sport){
    const request=axios.get(BASE+'matches/?sport='+sport);
    return function(dispatch){
        return request.then(
            (matches) => dispatch(selectMatchesFromSportSuccess(matches.data)),
            (error) => console.log(error)
        )
    }
}

export function selectMatchesFromSportSuccess(data){
    return {
        payload:data,
        type:SELECT_MATCHES_FROM_SPORT_SUCCESS
    }
}

export function startLoading(){
    return {
        type:START_LOADING,
        payload:true
    }
}