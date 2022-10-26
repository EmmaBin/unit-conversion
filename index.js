const number = document.getElementById('number')
const btn = document.getElementById('convert-btn')
const lengthConversion = document.querySelector('.length-answer')
const volumeConversion = document.querySelector('.volume-answer')
const massConversion = document.querySelector('.mass-answer')

// let inputValue = Number(number.value)
// inputValue will always be 0, it won't change as the number.value changes

function length(number){
    let meterToFeet = (number*3.281).toFixed(3)
    let feetToMeter = (number/3.281).toFixed(3)
    lengthConversion.innerHTML = `
    ${number} meters = ${meterToFeet} feet | ${number} feet = ${feetToMeter} meters
    `   
}

function volume(number){
    let literToGallon = (number*0.264).toFixed(3)
    let gallonToLiter = (number/0.264).toFixed(3)
    volumeConversion.innerHTML = `
    ${number} liters = ${literToGallon} gallons | ${number} gallons = ${gallonToLiter} liters
    ` 
}

function mass(number){
    let kiloToPds = (number*2.204).toFixed(3)
    let pdsToKilo = (number/2.204).toFixed(3)
    massConversion.innerHTML = `
    ${number} kilos = ${kiloToPds} pounds | ${number} pounds = ${pdsToKilo} kilos
    ` 
}
btn.addEventListener('click',function(){
    length(Number(number.value))
    volume(Number(number.value))
    mass(Number(number.value))
    number.value=""
})


