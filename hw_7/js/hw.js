const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
/////////////task 1////////////////
function getMyTaxes(){
    const taxPercent = (this.middleSalary / 100) * this.tax
    console.log(taxPercent)
    return taxPercent
};
getMyTaxes.call(ukraine);
getMyTaxes.call(latvia);
getMyTaxes.call(litva);
////////////task2///////////////////
function getMiddleTaxes(){
    const middleTax = this.tax * this.middleSalary
    console.log(middleTax)
    return middleTax
};
getMiddleTaxes.call(ukraine);
getMiddleTaxes.call(latvia);
getMiddleTaxes.call(litva);
////////////task 3//////////////////
function getTotalTaxes(){
    const totalTax = this.tax * this.middleSalary * this.vacancies
    console.log(totalTax)
    return totalTax
};
getTotalTaxes.call(ukraine);
getTotalTaxes.call(latvia);
getTotalTaxes.call(litva);
///////////task 4////////////////////
function getMySalary(){
    const getRandomNumber = () => Math.round(Math.random() * (2000 - 1500) + 1500);
    const salarys = getRandomNumber()
    return console.log({
        salary : salarys,
        taxes : this.tax,
        profit : salarys - this.tax,   
    })
}
setInterval(() => getMySalary.call(ukraine),10000)


