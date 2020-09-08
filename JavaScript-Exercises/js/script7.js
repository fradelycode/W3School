/** @format */
// GETTER
let person = {
	firstName: 'Fradely',
	lastName: 'Dilone',
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

document.getElementById('demo').innerHTML = person.fullName;
