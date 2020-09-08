/** @format */
var txt = '{"name": "John",  "age": 30, "city": "New York"}';
var obj = JSON.parse(txt);
document.getElementById('demo').innerHTML = `${obj.name} ${obj.age}`;

//  Stringify

var obj2 = { name: 'Fradely', age: 25, city: 'New York' };
var myJSON = JSON.stringify(obj2);
document.getElementById('demos').innerHTML = myJSON;
