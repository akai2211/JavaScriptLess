function modal() {
	let more = document.querySelector(".more"),
			overlay = document.querySelector(".overlay"),
			close = document.querySelector(".popup-close"),

			des_btn = document.querySelectorAll(".description-btn"),
			infoDiv = document.querySelector(".info");

	more.addEventListener("click", function() {
		this.classList.add("more-splash");
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	infoDiv.addEventListener("click", (event) => {
		if (event.target && event.target.className == "description-btn") {
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
			// des_btn.classList.add("more-splash");
		};
	});

	close.addEventListener("click", () => {
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = "";
	});
};

module.exports = modal;