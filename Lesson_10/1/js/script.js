window.addEventListener("DOMContentLoaded", function() {
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

	info.addEventListener("click", function(event) {
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
					hours = "0" + hours;
			}
			if (minutes < 10) {
					minutes = "0" + minutes;
			}
			if (seconds < 10) {
					seconds = "0" + seconds;
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

infoDiv.addEventListener("click", function(event) {
	if (event.target && event.target.className == "description-btn") {
		des_btn.classList.add("more-splash");
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	}
})

close.addEventListener("click", function() {
	overlay.style.display = "none";
	more.classList.remove("more-splash");
	document.body.style.overflow = "";
});
});