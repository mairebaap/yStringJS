
const possibleStrings = [':girl_tone1:', 'yasmin', ':heart:', 'i love', 'more', 'so much', 'is so hot', 'is tight']

function createYString(len) {
    const str = Array.from({ length: len }, () => pick(possibleStrings)).join(' ');
    return str;
}

function pick(array) {
    arLen = array.length;
    const strIndex = Math.floor(Math.random() * arLen);
    return array[strIndex];
}

function handleButtonClick() {
    let stringContainer = document.getElementById('stringContainer');
    if (stringContainer) {
        let yString = createYString(128);
        stringContainer.innerHTML = yString;
    } else {
        console.error("Element with ID 'stringContainer' not found.");
    }
} 

let yString = createYString(128);

let nig = document.getElementById('stringContainer');

nig.innerHTML = yString;