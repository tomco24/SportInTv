import {LOAD_MATCHES_SUCCESS,SELECT_MATCHES_FROM_SPORT_SUCCESS} from '../actions/types';

const INITIAL_STATE={
    loading:true,
    data:[]
}
export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case LOAD_MATCHES_SUCCESS:
            return{
                loading:false,
                data:action.payload
            }
        case SELECT_MATCHES_FROM_SPORT_SUCCESS:
            return{
                loading:true,
                data:action.payload
            }
            
    }
    return state;
}