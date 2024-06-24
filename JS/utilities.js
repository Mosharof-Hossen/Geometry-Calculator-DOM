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
        areaLocation.innerText = area;
    }
}

function setValueInList(name,area) {
    let parent = document.getElementById('list-div');
    let p = document.createElement('p');
    let newElement = `
    1. ${name} : &emsp; ${area} cm<sup>2</sup> &emsp;<button class=" px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white">Convert to m<sup>2</sup></button>
    `
    p.innerHTML = newElement;
    parent.appendChild(p);
}