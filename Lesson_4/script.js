/*домашее задание 4*/

// Объявление переменных
let money,
		name,
		time,
		price;

function start() {
	money = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?");
	}

	time = 19;
}
start();

// Имя магазина
function askNameShop() {
	for (let i = 0; i < 1; i++) {
		name = prompt("Название вашего магазина?", "");
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
		discount: false,
		shopItems: [],
		choseGoods: function choseGoods() {
			for (let i = 0; i < 5; i++) {
				let a = prompt("Какой тип товаров будем продавать?", "");
				if ((typeof(a)) === "string" && isNaN(a) && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
					console.log("Все верно!");
					mainList.shopGoods[i] = a;
				} else {
						i--; 
				}
				}
		},
		workTime: function workTime() {
			if (time < 0) {
				console.log("Такого просто не моет быть");
			} else if(time > 8 && time < 20) {
					console.log("Время работать");
					mainList.open =true;
				} else if(time < 24) {
						console.log("Уже слишком поздно!");
					} else {
							console.log("В сутках только 24 часа!")
					}
		},
		diurnalBudjet: function diurnalBudjet() {
			alert(mainList.budget / 30);
		},
		makeDiscount: function makeDiscount() {
			if (mainList.discount == true) {
				price = (price/100)*80;
			}
		},
		hireEmployers: function hireEmployers() {
			for (let i = 0; i < 4; i++) {
					let a = prompt("Ваше имя сотрудника?", "");
					if ((typeof(a)) === "string" && isNaN(a) && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
						console.log("Все верно!");
						mainList.employers[i] = i+1 + " - " + a;
					} else {
							i--;
					}
			}
		},
		choseShopItems: function choseShopItems() {
			for (let i = 0; i < 1; i++) {
				let items = prompt("Перечислите через запятую товары", "");
				if ((typeof(items)) === "string" && isNaN(items) && (typeof(items)) !== null && items !== "" && items.length < 50 ) {
					let w = items.split(",");
					let q = 0;
					while(q < w.length) {
						if (w[q] !== "") {
							mainList.shopItems[q] = w[q];
						}
						q++;
					}
				}
				
			}
			
			let items1 = prompt("Подождите, ещё ", "");
			if (items1 == null || items1 == ""){
				
			}else {
				mainList.shopItems.push(items1);
			}
			mainList.shopItems.sort();
			mainList.shopItems.forEach( function(items, i, choseShopItems) {
				alert("У нас вы купили: " + (i+1).toString() + " - " + items);
			});
				for (let key in mainList.shopItems) {
					console.log("Наш магазин включает в себя: " + mainList.shopItems[key]);
				};
		}
};

mainList.choseShopItems();

console.log(mainList);