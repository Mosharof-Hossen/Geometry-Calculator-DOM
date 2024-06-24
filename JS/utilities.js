function getValueFromInput(id) {
    const elementValue = parseFloat(document.getElementById(id).value);
    return elementValue;
}

function setValue(area, id) {
    let areaLocation = document.getElementById(id);
    if (isNaN(area)) {
        alert("Enter Number")
        return;
    } else {
        areaLocation.innerText = area;
    }
}

function setValueInList(name, area) {
    if (isNaN(area)) {
        return;
    }
    let parent = document.getElementById('list-div');
    let p = document.createElement('p');
    p.classList.add('py-1', 'pl-2')
    let newElement = `
    ${parent.childElementCount + 1}. ${name} :&ensp; <span id = 'list-${parent.childElementCount + 1}'>${area}</span> cm<sup>2</sup> &emsp;<button onclick="converter('list-${parent.childElementCount + 1}')" class="px-2 ml-auto rounded bg-blue-600 hover:bg-blue-700 text-white">Convert to m<sup>2</sup></button>
    `
    p.innerHTML = newElement;
    parent.appendChild(p);
}


function converter(id) {
    let cmArea = document.getElementById(id);
    let meterArea = cmArea.innerText / 100;
    cmArea.innerText = meterArea;
}