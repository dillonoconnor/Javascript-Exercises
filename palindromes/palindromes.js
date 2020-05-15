const palindromes = function(string) {
    const reversed = string.toLowerCase().replace(/[^A-Za-z]/g,"").split("").reverse().join("");
    return reversed === string.toLowerCase().replace(/[^A-Za-z]/g,"") ? true:false;
}

module.exports = palindromes
