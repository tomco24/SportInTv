import {
    LOAD_MATCHES_SUCCESS,
    SELECT_MATCHES_FROM_SPORT_SUCCESS,
    START_LOADING

} from '../actions/types';
import {convertDate} from '../utils';

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
        const data=action.payload.map((match)=>{
            match.date=convertDate(match.date)
            return match;
        })
            return{
                loading:false,
                data:data
            }
        case START_LOADING:
            return{
                loading:true,
                data:[]
            }
            
    }
    return state;
}