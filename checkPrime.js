//calculate prime number using loop
/*var n = 1228;
for( i = 2; i < n; i++){
    //console.log(i, n % i);
    if(n % i == 0){
        console.log('not a prime number');
        break;
    }
}
console.log('your number is a prime number');*/

//calculate prime number using function
function isPrimeNumber(n){
    for( i = 2; i < n; i++){
        //console.log(i, n % i);
        if(n % i == 0){
            return 'not a prime number';
            
        }
    }
    return 'your number is a prime number';
}
var result = isPrimeNumber(128);
console.log(result);