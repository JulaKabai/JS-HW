const biggestNumberForm = document.getElementById("biggest-number-form");
const biggestNumberResult = document.getElementById("biggest-number-result");
const biggestNumberError = document.getElementById("biggest-number-error");


biggestNumberForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const number = event.target[0].value;
	biggestNumberResult.innerHTML = "";
	biggestNumberError.innerHTML = ""
	if (+number >= 0) {
		biggestNumberResult.innerHTML = maxDigit(number);
	} else {
		biggestNumberError.innerHTML = "The number must be greater than null"
	}
})

const maxDigit = (number) => Math.max(...number.split(""));


////////////////////////////////////////////


const firstLetterCapitalizeForm = document.getElementById("first-letter-capitalize-form");
const firstLetterCapitalizeResult = document.getElementById("first-letter-capitalize-result");

firstLetterCapitalizeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target[0].value;
	firstLetterCapitalizeResult.innerHTML = capitalizeFirstLetter(name);
	
}) 

const capitalizeFirstLetter = str => str[0].toUpperCase()+str.substring(1).toLowerCase();


///////////////////////////////////////////


const calculatingSalaryDifferenceForm = document.getElementById("calculating-salary-difference-form");
const calculatingSalaryDifferenceResult = document.getElementById("calculating-salary-difference-result");
const calculatingSalaryDifferenceError = document.getElementById("calculating-salary-difference-error");

calculatingSalaryDifferenceForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const salary = event.target[0].value;
	const tax = event.target[1].value;
	calculatingSalaryDifferenceResult.innerHTML = '';
	calculatingSalaryDifferenceError.innerHTML = '';
	if (salary > 0 && tax > 0) {
	  calculatingSalaryDifferenceResult.innerHTML = calcPercent(salary, tax);
  } else{ 
	  calculatingSalaryDifferenceError.innerHTML = "The number must be greater than null";
  }
})

// true && true => true
// true && false => false
// false && true => false
// false && false => false

const calcPercent = (salary , tax) => salary - (salary / 100 * tax);

/////////////////////////////////////////////
const returnFirstRandomNumberForm = document.getElementById('return-random-number-form');
const returnRandomNumberResult = document.getElementById('return-random-number-result');
const ReturnRandomNumberError = document.getElementById('return-random-number-error');
returnFirstRandomNumberForm .addEventListener("submit", (event) => {
  event.preventDefault();
  const min = +event.target[0].value;
	const max = +event.target[1].value;
	returnRandomNumberResult.innerHTML = ' ';
	ReturnRandomNumberError.innerHTML = ' ';
	if(min < max) {
	  returnRandomNumberResult.innerHTML = getRandomNumber(min, max);
	}else{
		ReturnRandomNumberError.innerHTML = "the first number mast to be less then second"
	}
}) 

const getRandomNumber = (min, max) =>  Math.round(Math.random() * (max - min)+ min);

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
