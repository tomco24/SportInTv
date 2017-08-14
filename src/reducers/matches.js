import {LOAD_MATCHES_SUCCESS} from '../actions/types';

const INITIAL_STATE={
    loading:true
}
export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case LOAD_MATCHES_SUCCESS:
        return{
            loading:false,
            data:action.payload
        }
    }
    return state;
}