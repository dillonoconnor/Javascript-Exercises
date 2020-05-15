const sumAll = function(numOne, numTwo) {
    let totalSum = [];
    if (typeof numOne !== 'number' || typeof numTwo !=='number' || numOne < 0 || numTwo < 0) {
        return 'ERROR';
    }
    else {
        if (numOne < numTwo) {
            for (numOne;numOne<=numTwo;numOne++) {
                    totalSum.push(numOne);
            }
        }
        else {
            for (numTwo;numTwo<=numOne;numTwo++) {
                totalSum.push(numTwo);
            }
        }
        const add = (a,b) => a+b;
        const sum=totalSum.reduce(add);
        return sum;
    }
}

module.exports = sumAll
