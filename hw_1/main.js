const dress = 15.678;
const bag = 123.965;
const shoe = 90.2345;
const maxPrice = Math.max (dress,bag,shoe);
console.log(maxPrice);
const minPrice = Math.min (dress, bag, shoe);
console.log (minPrice)
const summa = dress + bag + shoe;
console.log (summa)
const roundedDress = Math.floor (dress)
console.log (roundedDress);
const roundedBag = Math.floor (bag)
console.log (roundedBag)
const roundedShoe = Math.floor (shoe)
console.log (roundedShoe)
const roundedSumma =  Math.ceil (summa /100) *100;
console.log(roundedSumma);
const isEven = (summa % 2) == 0
console.log(isEven)
const change = (500-summa)
console.log(change)
const averagePrice =(summa/3).toFixed(2);
console.log(averagePrice)
const sale = Math.random () *50
console.log(sale)
const discountedPrice = (summa - sale).toFixed(2)
console.log(discountedPrice)
const profit = discountedPrice / 2;
console.log(profit);