/*домашее задание 3*/

// Объявление переменных
let money,
		name,
		time,
		price;

function start() {
	money = prompt("Ваш бюджет на месяц?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?");
	}

	time = 19;
}
start();

// Имя магазина
function askNameShop() {
	for (let i = 0; i < 1; i++) {
		name = prompt("Название вашего магазина?");
		if (name == "" || name == null) {
			alert("Некоректное имя!!");
			i--;
		} else if (!isNaN(name) || name.length > 50) {
			alert("Некоректное имя, или слишком длинное!!");
			i--;
		}
	}
}
askNameShop();

// Объект
let mainList = {
		budget: money,
		shopName: name.toUpperCase(),
		shopGoods: [],
		employers: {},
		open: false,
		discount: false
};

// функция-Цикл
function choseGoods() {
	for (let i = 0; i < 5; i++) {

			let a = prompt("Какой тип товаров будем продавать?");

			if ((typeof(a)) === "string" && isNaN(a) && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
				console.log("Все верно!");
				mainList.shopGoods[i] = a;
			} else {
				i--; 
			}
	}
}
choseGoods();

// не доконца понимаю что здесь и как работает :)
function workTime() {
	if (time < 0) {
			console.log("Такого просто не моет быть");
	} else if(time > 8 && time < 20) {
		console.log("Время работать");
		} else if(time < 24) {
			console.log("Уже слишком поздно!");
			} else {
				console.log("В сутках только 24 часа!")
			}
}
workTime(18);

function diurnalBudjet() {
	alert(mainList.budget / 30);
}
diurnalBudjet();


// Дсконтная система

function discountSys() {
	if (mainList.discount == true) {
		let percent = "20";//Необходимый процент
		let num_percent = price / 100 * percent;
		return price - num_percent;
	}
}
discountSys();

function employers() {
	for (let i = 0; i < 4; i++) {

			let a = prompt("Ваше имя сотрудника?");

			if ((typeof(a)) === "string" && isNaN(a) && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
				console.log("Все верно!");

				mainList.employers[i] = i+1 + " - " + a;
			} else {
				i--;
			}
	}
}
employers();

console.log(mainList);