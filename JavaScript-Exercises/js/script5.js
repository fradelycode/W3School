/** @format */

var txt = '';
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById('demo').innerHTML = txt;

function myFunction(value) {
	txt += `${value} <br/>`;
}

// Map

var numbers1 = [45, 4, 9, 16, 25];

var numbers2 = numbers1.map(myFunction);

document.getElementById('demos').innerHTML = numbers2;

function myFunction(value) {
	return value * 2;
}

// Filter

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction2);

document.getElementById('demox').innerHTML = over18;

function myFunction2(value) {
	return value > 18;
}

// Reduce()

var numr = [45, 4, 9, 16, 25];
var suma = numr.reduce(myFunction);

document.getElementById('demor').innerHTML = suma;

function myFuncReduce(total, value) {
	return total + value;
}
