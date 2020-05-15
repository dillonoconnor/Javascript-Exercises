const caesar = function(str,shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const split = str.split('');
    let finalStr = [];
    let splitIndex = [];

    for (let i = 0; i<split.length; i++) {
        /[^A-Za-z]/.test(split[i]) ? splitIndex.push(split[i]) : splitIndex.push(alphabet.findIndex(letter => letter == split[i].toLowerCase()));
    }

    for (let i=0; i<splitIndex.length; i++) {
        if (/[^A-Za-z]/.test(split[i])) {
            finalStr.push(split[i]);
        }
        else if (splitIndex[i] + shift > alphabet.length-1) {
            splitIndex[i] += shift;
            while (splitIndex[i] > alphabet.length-1) {
                splitIndex[i] -= 26;
            }
            finalStr.push(alphabet[splitIndex[i]]);
        }
        else if (splitIndex[i] + shift < 0) {
            splitIndex[i] += shift;
            while (splitIndex[i] < 0) {
                splitIndex[i] += 26;
            }
            finalStr.push(alphabet[splitIndex[i]]);
        }
        else {
            splitIndex[i] += shift;
            finalStr.push(alphabet[splitIndex[i]]);
        }  
    }

    for (let i = 0; i<str.length; i++) {
        if (str[i] !== str[i].toLowerCase()) {
            finalStr.splice(i,1,finalStr[i].toUpperCase());
        }
    }

    finalStr = String(finalStr.join(''));
    return finalStr;
}

module.exports = caesar
