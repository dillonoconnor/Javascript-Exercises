function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (array) {
	const sum = array.reduce((total,arg) => total+=arg,0);
	return sum;
}

function multiply (array) {
	const mult = array.reduce((running,item) => running*=item);
	return mult;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
	if (n == 0) return 1;
	else {
		let product = [n];
		for (let i=1; i<n; i++) {
			product.push(i);
		}
		const result = product.reduce((running,item) => running*=item);
		return result;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}