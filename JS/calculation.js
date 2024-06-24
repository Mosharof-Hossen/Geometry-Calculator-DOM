document.getElementById("tri-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("tri-base");
    let secondValue = getValueFromInput("tri-height");

    let area = parseFloat(0.5 *fastValue * secondValue).toFixed(2);
    setValue(area, 'tri-area')
})
// 2
document.getElementById("rec-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("rec-base");
    let secondValue = getValueFromInput("rec-height");
    let area = parseFloat(fastValue * secondValue).toFixed(2);
    setValue(area, "rec-area")
})
// 3
document.getElementById("par-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("par-base");
    let secondValue = getValueFromInput("par-height");
    let area = parseFloat(fastValue * secondValue).toFixed(2);
    setValue(area, "par-area");
    setValueInList("Parallelogram", area)
})
// 4
document.getElementById("rho-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("rho-base");
    let secondValue = getValueFromInput("rho-height");
    let area = parseFloat(0.5 * fastValue * secondValue).toFixed(2);
    setValue(area, 'rho-area')
})
// 5
document.getElementById("pen-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("pen-base");
    let secondValue = getValueFromInput("pen-height");
    let area = parseFloat(0.5 * fastValue * secondValue).toFixed(2);
    setValue(area, 'pen-area')
})
// 6
document.getElementById("ell-cal").addEventListener('click', () => {
    let fastValue = getValueFromInput("ell-base");
    let secondValue = getValueFromInput("ell-height");
    let area = parseFloat(Math.PI * fastValue * secondValue).toFixed(2); 
    setValue(area, 'ell-area')
    setValueInList(area,"Ellipse")
})