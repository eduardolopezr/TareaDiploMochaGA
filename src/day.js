const day = (day)=>{
    let rDay="";
    switch(day){
        case 1:
            rDay="Domingo";
            break;
        case 2:
            rDay="Lunes";
            break;
        case 3: 
            rDay="Martes";
            break;
        case 4:
            rDay="Miércoles";
            break;
        case 5:
            rDay="Jueves";
            break;
        case 6:
            rDay="Viernes";
            break;
        case 7:
            rDay="Sábado";
            break;
    }
    return rDay;
};
console.log(day(8));

module.exports={
    day,
};
