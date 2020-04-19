
        
//function modulusCalculator with 'number' passed as argument
function modulusCalculator(number){
    let returnArray= [];
    

    for (let i= 1; i<=number; i++){

        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ){
            returnArray.push("yu-gi-oh");
        }


        else if ((i % 2 == 0 && i % 3 == 0) || (i % 2 == 0 && i % 5 == 0 ) || (i % 5 == 0 && i % 3 == 0 ) ){
          
               if(i % 2 == 0 && i % 3 == 0){
                returnArray.push("yu-gi");
               }   
               else if(i % 2 == 0 && i % 5 == 0 ){
                returnArray.push("yu-oh");
               } 
               else{
                returnArray.push("gi-oh");
               }
            }

        else if (i % 2 == 0){
            returnArray.push("yu");         
        }
    
       else if (i % 3 == 0){
                returnArray.push("gi");         
            }
       else if (i % 5 == 0){
                returnArray.push("oh");         
            }
             
        else{
            returnArray.push(i);   
        }

        
       
      
    } 
    
    console.log(returnArray);
    return returnArray;          
}

modulusCalculator(10);
