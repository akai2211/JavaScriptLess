/*домашее задание 6*/

let open = document.getElementById('open-btn'),
		name_value = document.getElementsByClassName('name-value')[0],
		budget_value = document.getElementsByClassName('budget-value')[0],
		goods_value = document.getElementsByClassName('goods-value')[0],
		items_value = document.getElementsByClassName('items-value')[0],
		employers_value = document.getElementsByClassName('employers-value')[0],
		discount_value = document.getElementsByClassName('discount-value')[0],
		isopen_value = document.getElementsByClassName('isopen-value')[0],

		goods_item = document.getElementsByClassName('goods-item'),
		goods_btn = document.getElementsByTagName('button')[1],
		budget_btn = document.getElementsByTagName('button')[2],
		employers_btn = document.getElementsByTagName('button')[3],
		choose_item = document.querySelector('.choose-item'),
		time_value = document.querySelector('.time-value'),
		count_budget_value = document.querySelector('.count-budget-value'),
		employers = document.querySelectorAll('.hire-employers-item');


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
		name = prompt("Название вашего магазина?", "").toUpperCase();
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
		shopName: name,
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
			let items = prompt("Перечислите через запятую товары", "");

			mainList.shopItems = items.split(",");
			mainList.shopItems.push(prompt("Подождите, ещё ", ""));
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