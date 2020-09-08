/** @format */

let person = {
	firstName: 'Fradely',
	lastName: 'Dilone',
	id: 1212,
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

document.getElementById('demo').innerHTML = person.fullName();
