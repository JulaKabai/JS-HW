



const n = prompt("please enter your number");
function maxDigit(n) {
	if (n == 0) {
		return 0;
	} else {
		return Math.max(n % 10, maxDigit(n / 10));
	}
}
const ceil = Math.floor(maxDigit(n));
console.log(ceil);

////////////////////////////////////////////
// let str = prompt ("enter your name");
// function capitalizeFirstLetter(str){
//     return str[0].toUpperCase()+str.substring(1).toLowerCase();
// }
// // console.log(capitalizeFirstLetter('vItaLIk') );
// console.log(capitalizeFirstLetter(str));
///////////////////////////////////////////
// const salary = prompt('enter your salary');
// const tax = prompt('enter your tax');
// // var calcPercent = (salary, tax) => salary / 100 * tax;
// // calcPercent(salary, tax);
// // result = salary - calcPercent;
// // console.log(result);
// calcPercent = salary/ 100 * tax ;
// result = salary - calcPercent;
// console.log(result);
/////////////////////////////////////////////
// let min = 10;
// let max = 20;
// function getRandomNumber(min, max){
//     return Math.round(Math.random() * (max - min)+ min);
// }console.log(getRandomNumber(min, max));
//////////////////////////////////////////////
// let string = prompt("enter rhe word,that we count how many letter 'a' used in it ");
// let letter = 'a';
// var count = string.split("a").length - 1;
// console.log(count);
////////////////////////////////////////////////
// const form = document.getElementById("input-area");
// const result = document.getElementById("result");

// const number = 3;
// const power = 3;

// const exponentiation = (number, power) => {
//     let result = number;
//         if(power > 0){
//             for(let i = 0; i < power - 1; i++) {
//                 result *= number;
//             }
//         } else if(power === 0){
//             result = 1;
//         }
//         else{
//             for(let i = 0; i <(power*-1) - 1; i++) {
//                 result *= number;
//             }
//             result = 1 / result
//         }
//         console.log(result)
// }

// exponentiation(number, power);

// // form.addEventListener("submit", (event) => {
// // 	event.preventDefault();
// // 	const valueOfNumber = parseInt(event.target[0].value);
// // 	const valueOfPower = parseInt(event.target[1].value);

// // })
/////////////////////////////////////////////////
// const name = "julia";
// function capFirst(str){
//     return str.charAt(0).toUpperCase() + str.slice (1) ;
// }
// console.log(capFirst)
//////////////////////////////////////////////////
