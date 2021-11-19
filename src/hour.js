const hour = ()=>{	
    let today = new Date();

    let hour = today.getHours() + ':' + today.getMinutes();

    return hour;
};
module.exports={
    hour,
}