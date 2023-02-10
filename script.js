const convertNumEl = document.getElementById("convert-num")
const convertBtn = document.getElementById("convert-btn")

const metersFeetEl = document.getElementById("meters-feet-text")
const litersGallonsEl = document.getElementById("liters-gallons-text")
const kilosPoundsEl = document.getElementById("kilos-pounds-text")

function convertMetersFeet(num) {
    meters = (num / 3.281).toFixed(3)
    feet = (num * 3.281).toFixed(3)
    return [feet, meters]
}
function convertLitersGallons(num) {
    liters = (num / 0.264).toFixed(3)
    gallons = (num * 0.264).toFixed(3)
    return [gallons, liters]
}
function convertKilosPounds(num) {
    kilos = (num / 2.204).toFixed(3)
    pounds = (num * 2.204).toFixed(3)
    return [pounds, kilos]
}

convertBtn.addEventListener("click", function() {
    const convertNum = Number(convertNumEl.value)
    const metersFeet = convertMetersFeet(convertNum)
    const litresGallons = convertLitersGallons(convertNum)
    const kilosPounds = convertKilosPounds(convertNum)
    
    metersFeetEl.textContent = `
        ${convertNum} meters = ${metersFeet[0]} feet | ${convertNum} feet = ${metersFeet[1]} meters
    `
    litersGallonsEl.textContent = `
        ${convertNum} liters = ${litresGallons[0]} gallons | ${convertNum} gallons = ${litresGallons [1]} liters
    `
    kilosPoundsEl.textContent = `
        ${convertNum} kilos = ${kilosPounds[0]} pounds | ${convertNum} pounds = ${metersFeet[1]} kilos
    `
})
