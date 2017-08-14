import moment from 'moment';

export function convertDate(timestamp){
    return {
        date: moment.unix(timestamp).format("DD.MM.YYYY"),
        time: moment.unix(timestamp).format("HH:MM"),
        full: moment.unix(timestamp)
    }
}