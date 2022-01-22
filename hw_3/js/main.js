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
const calculateLetterForm = document.getElementById('calculate-letter-form');
const calculateLetterResult = document.getElementById ('calculate-letter-result');
const calculateLetterError = document.getElementById ('calculate-letter-error')
calculateLetterForm.addEventListener('submit',(event)=>{
	event.preventDefault();
	const string = event.target[0].value;
	calculateLetterResult.innerHTML = '';
	calculateLetterError.innerHTML = '';
	if('a'==='a'){
	calculateLetterResult.innerHTML = countReplace(string)
}else{
	calculateLetterError.innerHTML = 'please,wright in english'
}

})
function countReplace (str) {
    return (str.split('a').length) - 1;
};

////////////////////////////////////////////////
const calculateDegreeForm = document.getElementById('calculate-degree-form');
const calculateDegreeResult = document.getElementById ('calculate-degree-result');
calculateDegreeForm.addEventListener('submit',(event)=>{
	event.preventDefault();
	const number = event.target[0].value;
	const power = event.target[1].value;
    calculateLetterResult.innerHTML = '';
	calculateLetterError.innerHTML = '';
	calculateDegreeResult.innerHTML = exponentiation(number, power)

})

const exponentiation = (number, power) => {
    let result = number;
        if(power > 0){
            for(let i = 0; i < power - 1; i++) {
                result *= number;
            }
        } else if(power === 0){
            result = 1;
        }
        else{
            for(let i = 0; i <(power*-1) - 1; i++) {
                result *= number;
            }
            result = 1 / result
        }
		return result;      
}



/////////////////////////////////////////////////
// const numberLest = prompt('enter');
// const getRandomPass = () => Math.floor(1000 + Math.random() * numberLest)
// const result = getRandomPass();
// console.log(result)
/////////////////////////////////////////////////
const word = 'blablabla';
const str = 'a';
const deletingLetterA = word - str.substring('a')
const result = deletingLetterA;
console.log(result)
