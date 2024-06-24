document.getElementById("tri-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("tri-base");
    let secondValue = getValueFromInput("tri-height");
    
    let area = 0.5 * fastValue * secondValue;
    setValue(area,'tri-area')
})
// 2
document.getElementById("rec-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("rec-base");
    let secondValue = getValueFromInput("rec-height");
    let area = fastValue * secondValue;
    setValue(area,"rec-area")
})
// 3
document.getElementById("par-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("par-base");
    let secondValue = getValueFromInput("par-height");
    let area = fastValue * secondValue;
    setValue(area,"par-area");
})
// 4
document.getElementById("rho-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("rho-base");
    let secondValue = getValueFromInput("rho-height");
    let area = 0.5 * fastValue * secondValue;
    setValue(area,'rho-area')
})
// 5
document.getElementById("pen-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("pen-base");
    let secondValue = getValueFromInput("pen-height");
    let area = 0.5 * fastValue * secondValue;
    setValue(area,'pen-area')
})
// 6
document.getElementById("ell-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("ell-base");
    let secondValue = getValueFromInput("ell-height");
    let area = Math.PI * fastValue * secondValue;
    setValue(area,'ell-area')
})