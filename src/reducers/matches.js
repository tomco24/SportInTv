import {
    LOAD_MATCHES_SUCCESS,
    SELECT_MATCHES_FROM_SPORT_SUCCESS,
    START_LOADING

} from '../actions/types';
import {convertDate,filterForDate,mapMatches} from '../utils';

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
        console.log('TIme:'+action.payload.selectDate*100);
        const data=action.payload.data.filter((match)=>{
            console.log(match.date);
            return filterForDate(match.date,action.payload.selectDate)
            //return true;
        })
        data=data.map(mapMatches);
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