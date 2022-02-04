// const min = 3;
// const max = 15;
// const length = 8;
//   #1
// const getRandomNumber = Math.round(Math.random() * (max - min) );
// const getRandomArr = () => {
//     const numbers = [];
//     for(let i = 0;i < length; i++){
//         numbers.push(getRandomNumber)
//     }return numbers
// }
// console.log(getRandomArr());

//   #6.
// const arr = [1, -1, 2, -2, 3 ,0];
// let positiveNumbers = arr.filter(function(number){
//         return number > 0;   
// });
// console.log(positiveNumbers.length);

//#5
// const numbersArr = [1, 3, 4, 6, 8, 3, 9, 10, 22];
// let evenNumber = numbersArr.filter(function(filterEvenNumber){
//     return filterEvenNumber % 2 === 1
// })
// console.log(evenNumber)

//#7
// const arrNumber = [22, 20, 25, 6, 8, 55, 9, 10, 22];
// let dividedBeFive = arrNumber.filter(function(dividedBeFive){
//     return dividedBeFive % 5 === 0;
// })
// console.log(dividedBeFive)

//3
// const midNumbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2.2, 2.1];
// const integerNumber = midNumbers.filter(num => Number.isInteger(num))
// let result = integerNumber.reduce(function(sum, current){
//         return sum + current
// })
// console.log(result / integerNumber.length)

//8
const str = 'Are you fucking kidding?';
const arr1 = str.split([" "])
str.replace('fuck','****')
const replaceBadWords = (arr1) => {
let result = arr1.join(" ")
return result

}
console.log(str.replace('fucking','****'))
