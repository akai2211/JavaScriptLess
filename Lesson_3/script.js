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

	name = prompt("Название вашего магазина?").toUpperCase();

	time = 19; // В 3 уроке здесь 21
}
start();

// Объект
let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false
};

// функция-Цикл
function choseGoods() {
	for (let i = 0; i < 5; i++) {

			let a = prompt("Какой тип товаров будем продавать?");

			if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
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
discountSys()

function employers() {
	for (let i = 0; i < 4; i++) {

			let a = prompt("Ваше имя сотрудника?");

			if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
				console.log("Все верно!");
				mainList.employers[i] = a;
			} else {
				i--;
			}
	}
}
employers()

console.log(mainList);
