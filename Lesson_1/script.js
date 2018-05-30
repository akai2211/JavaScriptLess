/*домашее задание 1*/

var budgetMonth = prompt("Ваш бюджет на месяц?");
var nameShop = prompt("Название вашего магазина?");

var typeProduct1 = prompt("Какой тип товаров будем продавать?");
var typeProduct2 = prompt("Какой тип товаров будем продавать?");
var typeProduct3 = prompt("Какой тип товаров будем продавать?");

var employers1 = prompt("Имя сотрудника:");
var employers2 = prompt("Имя сотрудника:");
var employers3 = prompt("Имя сотрудника:");

/*var i = 0;
while(i<3){
	prompt("Какой тип товаров будем продавать?");
	i++;
}*/



mainList = {
	budget: budgetMonth,
	nameShop: nameShop,
	shopGoods: [typeProduct1, typeProduct2, typeProduct3],
	employers: [employers1, employers2, employers3],
	open: true
};

alert("Бюджет на 1 день: " + budgetMonth/30);