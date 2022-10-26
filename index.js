const number = document.getElementById('number')
const btn = document.getElementById('convert-btn')
const lengthConversion = document.querySelector('.length-answer')
let inputValue =Number(number.value)

btn.addEventListener('click',()=>{
    console.log(inputValue)
    // length(inputValue)
    // volume(inputValue)
    // mass(inputValue)
})

function length(number){
    let meterTofeet = (number*3.281).toFixed(3)
    let feetTometer = (number/3.281).toFixed(3)
    lengthConversion.innerHTML = `
    ${number} meters = ${meterTofeet} | ${number}feet = ${feetTometer} meters
    `

}