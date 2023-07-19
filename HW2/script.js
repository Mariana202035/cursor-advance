// Get a number n :
var n = prompt ("Enter first number", '');

var n1 = Number(n);
console.log(typeof Number (n1),n1,isNaN(n1));
//Get a number m :
var m = prompt ("Enter second number", '');

var m1 = Number(m);
console.log(typeof Number (m1),m1,isNaN(m1));
//THe sum of odd numers n & m :
var sum = 0;
for(var a=1; a<=n; a++){
    if(a%2 !== 0){
        sum=sum + a
    }
}
for(var b=1; b<=m; b++){
    if(b%2 !== 0){
        sum=sum+b
    }
}
console.log("Total of all Odd Numbers: "+sum)





