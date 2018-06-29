window.addEventListener("DOMContentLoaded", () => {

// Modal btn
	let popup_engineer_btn = document.querySelector(".popup_engineer_btn"),
			popEng = document.querySelector(".popup_engineer"),
			popLink = document.querySelector(".popup"),
			close = document.querySelectorAll(".popup_close"),

			phLink = document.querySelectorAll(".phone_link"),
			body = document.querySelector(".body");

	popup_engineer_btn.addEventListener("click", () => {
		popEng.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	body.addEventListener("click", (event) => {
		if (event.target && event.target.className == "phone_link") {
			popLink.style.display = "block";
		};
	});

	close[1].addEventListener("click", () => {
		popEng.style.display = "none";
		document.body.style.overflow = "";
	});

	popEng.addEventListener("click", () => {
		popEng.style.display = "none";
	});

	close[0].addEventListener("click", () => {
		popLink.style.display = "none";
		document.body.style.overflow = "";
	});

	popLink.addEventListener("click", () => {
		popLink.style.display = "none";
	});

	setTimeout(() => {
		popLink.style.display = "block";
	}, 60000);

});
