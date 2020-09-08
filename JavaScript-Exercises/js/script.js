/** @format */

let cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
let i, len, text;

for (i = 0, len = cars.length, text = ''; i < len; i++) {
	text += cars[i];
}

document.getElementById('demo').innerHTML = text;

// for in
let txto = '';
let person = { fname: 'John', lname: 'Doe', age: 25 };
let x;
for (x in person) {
	txto += person[x];
}

document.getElementById('demos').innerHTML = txto;

// For of

let carros = ['Misubishi', 'Volvo', 'Citroen'];
let y;

for (y of carros) {
	document.write(`${y} <br/>`);
}

// For of on string

let textString = 'Fradely';
let f;

for (f of textString) {
	document.write(`${f} <br/>`);
}

// do while loop

let whileLoop = '';
let iCount = 0;

do {
	whileLoop = `The number is  ${iCount}`;
	i++;
} while (i < 10);

document.getElementById('demos3').innerHTML = whileLoop;
