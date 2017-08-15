import {SELECT_DATE} from '../actions/types';
import moment from 'moment';

const INITIAL_STATE={
    date:moment().unix()
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