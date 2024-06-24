function getValueFromInput(id) {
    const elementValue = parseFloat(document.getElementById(id).value);
    return elementValue;
}

function setValue(area,id) {
    let areaLocation = document.getElementById(id);
    if (isNaN(area)) {
        alert("Enter Number")
        return;
    } else {
        areaLocation.innerText = parseFloat(area).toFixed(2);
    }
}