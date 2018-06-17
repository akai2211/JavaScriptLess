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
		make_discont_btn = document.getElementsByTagName('button')[4],
		choose_item = document.querySelector('.choose-item'),
		time_value = document.querySelector('.time-value'),
		count_budget_value = document.querySelector('.count-budget-value'),
		count_budget_btn = document.querySelector('.count-budget-btn'),
		hire_employers_item = document.querySelectorAll('.hire-employers-item'),
		make_discont_value = document.querySelector('.make-discont-value');
		make_discont_btn = document.querySelector('.make-discont-btn');


// Объявление переменных
let money,
		name,
		price;

// Объект
let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: []
};

function disabled() {
	if (mainList.open == false) {
		goods_item[0].disabled = true;
		goods_item[1].disabled = true;
		goods_item[2].disabled = true;
		goods_item[3].disabled = true;
		goods_btn.disabled = true;
		choose_item.disabled = true;
		time_value.disabled = true;
		count_budget_btn.disabled = true;
		hire_employers_item[0].disabled = true;
		hire_employers_item[1].disabled = true;
		hire_employers_item[2].disabled = true;
		make_discont_value.disabled = true;
		make_discont_btn.disabled = true;
		}
}
disabled();

// Действия при нажатии "открыть магазин"
open.addEventListener("click", () => {
// Код бюджета магазина
	money = prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?");
	}
	budget_value.textContent = money;
// Код названия магазина
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
	name_value.textContent = name;
	mainList.shopName = name;
	mainList.budget = money;
	mainList.open = true;

	if (mainList.open == true) {
		goods_item[0].disabled = false;
		goods_item[1].disabled = false;
		goods_item[2].disabled = false;
		goods_item[3].disabled = false;
		goods_btn.disabled = false;
		choose_item.disabled = false;
		time_value.disabled = false;
		count_budget_btn.disabled = false;
		hire_employers_item[0].disabled = false;
		hire_employers_item[1].disabled = false;
		hire_employers_item[2].disabled = false;
		make_discont_value.disabled = false;
		make_discont_btn.disabled = false;
		}


	console.log(mainList);
});


// Категории товара
goods_btn.addEventListener("click", () => {

	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;
		if (a == "") {
			continue;
		} else if (isNaN(a) && a.length < 50) {
			console.log("Все верно! Категории товара");
			mainList.shopGoods.push(a);
		} else {
			alert("Числа вводить нельзя, или слишком днинное имя");
		}
	}

	goods_value.textContent = mainList.shopGoods;

	console.log(mainList);
});

// Продукты чере запятую
choose_item.addEventListener("change", () => {
	let items = choose_item.value;
	if (isNaN(items) && items != "") {
		items = items.split(",");
		let q = 0;
		while(q < items.length) {
			if (items[q] !== "") {
				mainList.shopItems[q] = items[q];
				q++;
			} else {
				items.splice(q,1);
			}
		}
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;
	}

});

// Расписание работы магазина
time_value.addEventListener("change", () => {
	let time = time_value.value;
	if (time < 0) {
		console.log("Такого просто не моет быть");
		mainList.open = false;
	} else if(time > 8 && time < 20) {
			console.log("Время работать");
			mainList.open = true;
		} else if(time < 24) {
				console.log("Магазин закрыт.");
				mainList.open = false;
			} else {
					console.log("В сутках только 24 часа!");
					mainList.open = false;
				};

	if(mainList.open == true) {
		isopen_value.style.backgroundColor = "green"
	} else {
		isopen_value.style.backgroundColor = "red"
		}

});

// Дневной бюджет
budget_btn.addEventListener("click", () => {
	count_budget_value.value = money / 30;
});
document.getElementById("budget").disabled = true;

// Новые сотрудники
employers_btn.addEventListener("click", () => {
	for (let i = 0; i < hire_employers_item.length; i++) {
		let a = hire_employers_item[i].value;
		mainList.employers[i] = name;
		if ((typeof(a)) === "string" && isNaN(a) && (typeof(a)) !== null && a.length < 50 ) {
			console.log("Все верно! Новые сотрудники");
			mainList.employers[i] = i+1 + " - " + a;
		} else {
				i--;
			}

		employers_value.textContent += mainList.employers[i] + ",";
}
});

function checkBtnEmployers() {
	if (mainList.open == false || employers_value == '') {
		employers_btn.disabled = true;
	}
}
checkBtnEmployers();

hire_employers_item[0].addEventListener("change", () => {
	let a = hire_employers_item[0];
	if(isNaN(a) || a == "") {
		employers_btn.disabled = false;
	} else {
		employers_btn.disabled = true
	}

});

hire_employers_item[1].addEventListener("change", () => {
	let a = hire_employers_item[0];
	if(isNaN(a) || a == "") {
		employers_btn.disabled = false;
	} else {
		employers_btn.disabled = true
	}

});

hire_employers_item[2].addEventListener("change", () => {
	let a = hire_employers_item[0];
	if(isNaN(a) || a == "") {
		employers_btn.disabled = false;
	} else {
		employers_btn.disabled = true
	}

});


// Дисконтная система
make_discont_btn.addEventListener("click", () => {
	let price = make_discont_value.value;
	mainList.discount = true;
	if (mainList.discount == true && !isNaN(price) && price != "") {
		price = (price/100)*80;
		discount_value.textContent = "Сумма со скидкой: " + price + " руб";
		discount_value.style.backgroundColor = "green"
	} else {
		alert("Введите число");
	}
});

