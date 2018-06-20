let age = document.getElementById('age');

function showUser(surname, name) {
	this.name = name;
	this.surname = surname;
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
}
showUser("Лаптев", "Григорий");