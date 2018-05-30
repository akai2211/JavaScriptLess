/*домашее задание 1*/

var budgetMonth = prompt("Ваш бюджет на месяц?");
var nameShop = prompt("Название вашего магазина?");

var typeProduct1 = prompt("Какой тип товаров будем продавать?");
var typeProduct2 = prompt("Какой тип товаров будем продавать?");
var typeProduct3 = prompt("Какой тип товаров будем продавать?");

/*var i = 0;
while(i<3){
	prompt("Какой тип товаров будем продавать?");
	i++;
}*/

employers = {
	name: "Михаил",
	age: 24,
	isMerriad: true
}

mainList = {
	budget: budgetMonth,
	nameShop: nameShop,
	shopGoods: [typeProduct1, typeProduct2, typeProduct3],
	employers: ["name", "age", "isMerriad"],
	open: true
};

alert("Бюджет на 1 день: " + budgetMonth/30);