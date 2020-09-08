/** @format */
// setter
let person = {
	firstName: 'Fradely',
	lastName: 'Dilone',
	language: 'NO',
	get lang() {
		return this.language;
	},
	set lang(value) {
		this.language = value;
	},
};

person.lang = 'es';

document.getElementById('demo').innerHTML = person.lang;
