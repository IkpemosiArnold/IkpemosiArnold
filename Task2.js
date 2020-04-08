//Array declaration and Initialization
const data = [
    {
        principal: 2500, 
        time: 1.8
    }, 
    {
        principal: 1000, 
        time: 5
    }, 
    {
        principal: 3000, 
        time: 1
    }, 
    {
        principal: 2000, 
        time: 3
    }
];
        
//function interestCalculator with 'objectArray' as a single argument
function interestCalculator(objectArray){
    let interestData= [];
    let rate;

    for (let i= 0; i< objectArray.length; i++){

        if (objectArray[i].principal >= 2500 && (objectArray[i].time > 1 && objectArray[i].time < 3)){
            rate = 3;   
        }

        else if (objectArray[i].principal >= 2500 && objectArray[i].time >= 3){
            rate = 4;                    
        }

        else if (objectArray[i].principal < 2500 || objectArray[i].time <= 1){
            rate = 2;                    
        }
        
        else{
            rate = 1;
        }
        let interest = (objectArray[i].principal* rate * objectArray[i].time)/100;
        
        interestData.push({principal: objectArray[i].principal, rate: rate, time: objectArray[i].time, interest: interest});
    } 
    
    console.log(interestData);
    return interestData;          
}

interestCalculator(data);