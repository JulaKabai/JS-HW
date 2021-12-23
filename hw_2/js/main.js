const form = document.getElementById("input-area");
const result = document.getElementById("result");
const error = document.getElementById("error");

const calculateFactorial = (firstValue, secondValue, useEvenNumbers) => {
  let sum = 0;

  for (let i = firstValue; i <= secondValue; i++) {
    if (!useEvenNumbers || i % 2 === 1) {
      sum += i;
    }
  }
  return sum
};

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const firstValue = parseInt(event.target[0].value);
	const secondValue = parseInt(event.target[1].value);
	const useEvenNumbers = event.target[2].checked;
  result.innerHTML = '';
	error.innerHTML = '';
	if (secondValue < firstValue){
  error.innerHTML = 'please,choose another numbers!';
	} else {
		result.innerHTML = calculateFactorial(firstValue, secondValue, useEvenNumbers)
	}
})
