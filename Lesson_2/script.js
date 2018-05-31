/*домашее задание 2*/

let money = prompt("Ваш бюджет на месяц?"),
		name = prompt("Название вашего магазина?"),
		time = 19;


let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false
};

for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		} else {
			i--; 
		}
};

/*let i = 0;
while (i < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		} else {
			i--; 
		}
	i++;
}*/


/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		} else {
			i--; 
		}
		i++;
} while (i < 5);
console.log(mainList.shopGoods);*/

if (time < 0) {
		console.log("Такого просто не моет быть");
} else if(time > 8 && time < 20) {
	console.log("Время работать");
	} else if(time < 24) {
		console.log("Уже слишком поздно!");
		} else {
			console.log("В сутках только 24 часа!")
		};

alert(mainList.budget / 30);

console.log(mainList);