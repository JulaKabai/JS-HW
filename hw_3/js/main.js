const form = document.getElementById("input-area");
const result = document.getElementById("result");

const number = 3;
const power = 3;

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
        console.log(result)
}

exponentiation(number, power);

// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	const valueOfNumber = parseInt(event.target[0].value);
// 	const valueOfPower = parseInt(event.target[1].value);
	
// })

let string = "julia";
function capFirst(str){
    return str.charAt(0).toUpperCase() + str.slice (1) ;
}
console.log(capFirst)
