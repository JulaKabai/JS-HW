///////////////////////////////////////////////знаходить найбільшу цифру з числа
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


////////////////////////////////////////////редагує ім'я


const firstLetterCapitalizeForm = document.getElementById("first-letter-capitalize-form");
const firstLetterCapitalizeResult = document.getElementById("first-letter-capitalize-result");

firstLetterCapitalizeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target[0].value;
	firstLetterCapitalizeResult.innerHTML = capitalizeFirstLetter(name);
	
}) 

const capitalizeFirstLetter = str => str[0].toUpperCase()+str.substring(1).toLowerCase();


///////////////////////////////////////////вираховує податок з зарплати


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

/////////////////////////////////////////////знаходіть рандомне число
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

//////////////////////////////////////////////рахує кількість буков а
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

////////////////////////////////////////////////визначає ступінь числа
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



/////////////////////////////////////////////////випадковий пароль
const generatesRandomPassForm = document.getElementById('generates-random-pass-form');
const generatesRandomPassResult = document.getElementById ('generates-random-pass-result');
const generatesRandomPassError = document.getElementById ('generates-random-pass-error')
generatesRandomPassForm.addEventListener('submit',(event)=>{
	event.preventDefault();
	const numberLest = event.target[0].value;
    generatesRandomPassResult.innerHTML = '';
	generatesRandomPassError.innerHTML = '';
	generatesRandomPassResult.innerHTML = getRandomPass(numberLest)

})

const numberLest = 90000000;
const getRandomPass = () => Math.floor(1000 + Math.random() * numberLest)
/////////////////////////////////////////////////видаляє букви а
const replaceCharacterForm = document.getElementById('replace-character-form');
const replaceCharacterResult = document.getElementById ('replace-character-result');
const replaceCharacterError = document.getElementById ('replace-character-error')
replaceCharacterForm.addEventListener('submit',(event)=>{
	event.preventDefault();
	const str = event.target[0].value;
    replaceCharacterResult.innerHTML = '';
	replaceCharacterError.innerHTML = '';
	replaceCharacterResult.innerHTML = replaceCharacter(str)

})
const replaceCharacter = (str) => newString = str.replace(/a/gi,'');
///////////////////////////////////////////////////шукач поліндромів
const polindromSeekerForm = document.getElementById('polindrom-seeker-form');
const polindromSeekResult = document.getElementById ('polindrom-seek-result');
const polindromSeekError = document.getElementById ('polindrom-seek-error')
polindromSeekerForm.addEventListener('submit',(event)=>{
	event.preventDefault();
	const str = event.target[0].value;
    polindromSeekResult.innerHTML = '';
	polindromSeekError.innerHTML = '';
	polindromSeekResult.innerHTML = palindromesSeeker(str)

})

const palindromesSeeker = (string) => {
    const solidTerm = string.toLowerCase().split(" ").join("");
    return solidTerm === solidTerm.split('').reverse().join("");
    
}
