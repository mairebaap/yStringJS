const possibleStrings = [':girl_tone1:', 'yasmin', ':heart:', 'i love', 'more', 'so much', 'is so hot', 'is tight']

function createYString(len) {
    const str = Array.from({ length: len }, () => randomChoice(possibleStrings)).join(' ');
    return str;
}

function pick(array) {
    arLen = array.length;
    const strIndex = Math.floor(Math.random * arLen);
    return array[strIndex];
}

