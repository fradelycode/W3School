/** @format */

let person1 = {
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

let person2 = {
	firstName: 'Fradely',
	lastName: 'Dilone',
};

let x = person1.fullName.call(person2);
document.getElementById('demo').innerHTML = x;

let hello = () => 'Hi';
alert(hello());
