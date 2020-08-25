 //leap year count 
 /*const year = 3788;
 const remainder = year % 4;
 console.log(remainder==0);*/

 /**const year = 3996;
 let remainder = year % 4;
 console.log(remainder == 0);*/

 /**const year = 3996;
 let remainder = year % 4;
 if(remainder == 0){
     console.log('Year year is a leap year');
 }
 else{
     console.log('Year year is not a leap year');
 }*/

 //leap year count using function
 function checkLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }else{
        return false;
    }
 }
 const check2000 = checkLeapYear(2020);
 console.log(check2000);

