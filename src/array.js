// alert them of the beta
alert("this is the beta version and is still under development. some futures might not appear.")

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

let yString = createYString(128);

let nig = document.getElementById('stringContainer');

nig.innerHTML = yString;