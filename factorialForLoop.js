//3!= 1*2*3
//4!= 1*2*3*4
//5!= 1*2*3*4*5
//10!= 1*2*3*4*5*6*7*8*9*10

/**var factorial = 1;
for(let i =1; i <= 10; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}*/

//factorial using function
function factorial(n){
    var factorial = 1;
        for(var i =1; i <= n; i++){
            factorial = factorial * i;
}
return factorial;
}
var result = factorial(10);
console.log(result);
