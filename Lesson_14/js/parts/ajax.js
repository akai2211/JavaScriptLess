function ajax() {
	let form = document.getElementsByClassName("main-form")[0],
			input = form.getElementsByTagName("input"),
			statusMessage = document.createElement("div");

	let formFooter = document.getElementById("form"),
			iputFooter = formFooter.getElementsByTagName("input"),
			submitFooter =formFooter.getElementsByTagName("button");


	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжимся";
	message.failure = "Что-то пошло не так...";

	statusMessage.classList.add("status");

	function formCreate() {

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = () => {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					// Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				};
			};
		};
		for (let i = 0; i < input.length; i++) {
			input[i].value = "";
			// Очищаем поля ввода
		};
	};

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		form.appendChild(statusMessage);
		formCreate();
	});

	formFooter.addEventListener("submit", (event) => {
		event.preventDefault();
		formFooter.appendChild(statusMessage);
		formCreate();
	});
};

module.exports = ajax;