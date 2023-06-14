// Code your solution in this file!

//global variable scope
  const numberofblocks=50;
//global function
function distanceFromHqInBlocks (numberofblocks){
    if (numberofblocks < 42){
        return (42 - numberofblocks);
    }
    else{
        return(numberofblocks - 42)
    };
    
}
 //global variable
 let Blocks = 8;
 let feet = 2112
 function distanceFromHqInFeet(){
          distanceFromHqInBlocks(Blocks, feet);
          if (blocks > headquarter){
            return ((blocks -headquarter)*264);
        }
        else {
            return ((headquarter-blocks)*264);
        }
       }
 
 
//global variable
  let blocks = 50;
  let headquarter= 42;
 
   function distanceTravelledInFeet(blocks,headquarter){
    if (blocks > headquarter){
        return ((blocks -headquarter)*264);
    }
    else {
        return ((headquarter-blocks)*264);
    }
   }
     
function calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start,destination);
    if (distance<=400){
        return 0;
    }
    if (distance > 400 && distance<= 2000){
        return 2.56;
    }
    else if(distance> 2000 && distance<= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    };

}




