//1
const getRandomArray = function (length, min, max) {
    let randomArr = [];
        for (i = 0; i < length; i++) randomArr.push(Math.floor(Math.random()*(max-min) + min))
    return randomArr
}
    
console.log(getRandomArray(15, 1, 100) )

//   #6.
const arr = [1, -1, 2, -2, 3 ,0];
let positiveNumbers = arr.filter(function(number){
        return number > 0;   
});
console.log(positiveNumbers.length);

//#5
const numbersArr = [1, 3, 4, 6, 8, 3, 9, 10, 22];
let evenNumber = numbersArr.filter(function(filterEvenNumber){
    return filterEvenNumber % 2 === 1
})
console.log(evenNumber)

//#7
const arrNumber = [22, 20, 25, 6, 8, 55, 9, 10, 22];
let dividedBeFive = arrNumber.filter(function(dividedBeFive){
    return dividedBeFive % 5 === 0;
})
console.log(dividedBeFive)

//3
const midNumbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2.2, 2.1];
const integerNumber = midNumbers.filter(num => Number.isInteger(num))
let result = integerNumber.reduce(function(sum, current){
        return sum + current
})
console.log(result / integerNumber.length)

//8
const str = 'Are you fucking kidding?';
const arr1 = str.split([" "]);
const replaceBadWords = (arr1) => {
let result = arr1.join(" ")
return result.replace('fuck','****').replace('shit','****')
}
console.log(replaceBadWords(arr1))

