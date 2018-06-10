let newMenuItem = document.createElement("li"),
		menuItem = document.getElementsByClassName("menu-item"),
		menu = document.getElementsByClassName("menu");

let titleId = document.getElementById("title");

let column = document.querySelectorAll(".column"),
		adv = document.querySelector(".adv");

let quastion = prompt("Как вы относитесь к техники Apple?"),
		prmt = document.getElementById("prompt");

newMenuItem.classList.add("menu-item");
newMenuItem.textContent = "Пятый пункт";
menu[0].appendChild(newMenuItem);
menu[0].insertBefore(menuItem[2], menuItem[1]);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

title.textContent = "Мы продаем только подлинную технику Apple";

column[1].removeChild(adv);

prmt.textContent = quastion;