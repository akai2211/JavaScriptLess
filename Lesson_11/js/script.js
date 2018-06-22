window.addEventListener("DOMContentLoaded", () => {
// Табы
	let tab = document.getElementsByClassName("info-header-tab"),
			tabContent = document.getElementsByClassName("info-tabcontent"),
			info = document.getElementsByClassName("info-header")[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	}
	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			hideTabContent(0);
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	}

	info.addEventListener("click", (event) => {
		let target = event.target;
		if(target.className == "info-header-tab") {
			for (let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			};
		};
	});

// Таймер
	let deadline = "2018-06-20";

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( (t/(1000*60*60)) );

				if (hours < 10) {
						hours = `0${hours}`;
				}
				if (minutes < 10) {
						minutes = `0${minutes}`;
				}
				if (seconds < 10) {
						seconds = `0${seconds}`;
				}


				return {
					"total": t,
					"hours": hours,
					"minutes": minutes,
					"seconds": seconds
				};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector(".hours"),
				minutes = timer.querySelector(".minutes"),
				seconds = timer.querySelector(".seconds"),
				timeInterval = setInterval(updateClock, 1000);

				function updateClock() {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;

					if (t.total < 0 || t.total == 0) {
						clearInterval(timeInterval);
						hours.innerHTML = "00";
						minutes.innerHTML = "00";
						seconds.innerHTML = "00";
					}
				};
				updateClock();

	};
	setClock("timer", deadline);

// Модальное окно

	let more = document.querySelector(".more"),
			overlay = document.querySelector(".overlay"),
			close = document.querySelector(".popup-close"),

			des_btn = document.querySelector(".description-btn"),
			infoDiv = document.querySelector(".info");

	more.addEventListener("click", function() {
		this.classList.add("more-splash");
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	infoDiv.addEventListener("click", (event) => {
		if (event.target && event.target.className == "description-btn") {
			des_btn.classList.add("more-splash");
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
		}
	})

	close.addEventListener("click", () => {
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = "";
	});

// Form

let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо! Скоро мы с вами свяжимся";
message.failure = "Что-то пошло не так...";

let form = document.getElementsByClassName("main-form")[0],
		input = form.getElementsByTagName("input"),
		statusMessage = document.createElement("div");

		statusMessage.classList.add("status");

		form.addEventListener("submit", function (event) {
			event.preventDefault();
			form.appendChild(statusMessage);
			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function () {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Добавляем контент на страницу
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			for (let i = 0; i < input.length; i++) {
				input[i].value = "";
				// Очищаем поля ввода
			};
		});






// Slider
	let slideIndex = 1,
			slides = document.getElementsByClassName("slider-item"),
			prev = document.querySelector(".prev"),
			next = document.querySelector(".next"),
			dotsWrap = document.querySelector('.slider-dots'),
			dot = document.getElementsByClassName('dot');

			showSlides(slideIndex);

			function showSlides(n) {
				if (n > slides.length) {
					slideIndex = 1;
				};
				if (n < 1) {
					slideIndex = slides.length;
				};
				for (let i =0; i < slides.length; i++) {
					slides[i].style.display = "none";
				};
				for (let i = 0; i < dot.length; i++) {
					dot[i].classList.remove("dot-active");
				};

				slides[slideIndex - 1].style.display = "block";
				dot[slideIndex - 1].classList.add("dot-active");
			};

			function plusSlides (n) {
				showSlides(slideIndex += n);
			};

			function currentSlide(n) {
				showSlides(slideIndex = n);
			};

			prev.addEventListener("click", () => {
				plusSlides(-1);
			});
			next.addEventListener("click", () => {
				plusSlides(1);
			});

			dotsWrap.addEventListener("click", (event) => {
				for (let i = 0; i < dot.length + 1; i++) {
					if (event.target.classList.contains("dot") && event.target == dot[i-1]) {
						currentSlide(i);
					};
				};
			});

});