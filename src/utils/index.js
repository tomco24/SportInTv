var moment=require('moment');

export function convertDate(timestamp){
    return {
        date: moment.unix(timestamp).format("DD.MM.YYYY"),
        time: moment.unix(timestamp).format("HH:mm"),
        full: moment.unix(timestamp)
    }
}
export function filterForDate(selectedDate,currentDate){
    const date=moment.unix(selectedDate);
    const today=moment.unix(currentDate);
    //console.log(today.toISOString());
    //console.log(date.format("DD.MM.YYYY HH:mm"));
    return today.isSame(date,'days');
}

export function formatDate(timestamp){
    return moment.unix(timestamp).format("DD.MM.YYYY");
}


export function mapMatches(match){
    match.date=convertDate(match.date);
    let genders=[];
    genders['M']=0;
    genders['Ž']=1;
    match.gender=genders[match.gender];
    if (match.sport==='Tenis'){
        match.title=match.title+" - " + match.round;
    }
    return match;
}


