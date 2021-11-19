const evenInArray = (array)=>{

    let result = true;
    let sResult="SI";
    array.forEach(number => {
        number%2==0?array.push(number):result=false
        
    });
    if(!result)sResult="NO";
    
    return sResult;
};
//console.log(evenInArray([12,34,32,12,6]));

module.exports={
    evenInArray,
}
