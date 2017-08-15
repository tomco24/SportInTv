import {SELECT_DATE} from '../actions/types';

const INITIAL_STATE={
    date:1502748894
}
export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case SELECT_DATE:
        return {
            ...state,
            date:action.payload
        }
    }
    return state;

}