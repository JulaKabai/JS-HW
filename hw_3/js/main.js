const myInput = document.getElementById("input-area");
const result =document.getElementById("result");
const error = document.getElementById("error");
function maxDigit(n){
if(n==0){
    return 0;
}else{
    return Math.max(n%10, maxDigit(n/10));
    
}
}
const ceil=Math.floor(maxDigit(4694));
console.log(ceil);





