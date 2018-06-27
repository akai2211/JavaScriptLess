function calc() {
let persons = document.getElementsByClassName("counter-block-input")[0],
			restDays = document.getElementsByClassName("counter-block-input")[1],
			place = document.getElementById("select"),
			totalValue = document.getElementById("total"),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener("change", function () {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;;
				if (restDays.value == "" || restDays.value == "0" || persons.value == "" || persons.value == "0") {
					totalValue.innerHTML = 0;
				} else {
						totalValue.innerHTML = total;
				}
			});
			restDays.addEventListener("change", function () {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000 * place.options[place.selectedIndex].value;
				if (persons.value == "" || persons.value == "0" || restDays.value == "" || restDays.value == "0") {
					totalValue.innerHTML = 0;
				} else {
						totalValue.innerHTML = total;
				}
			});

			place.addEventListener("change", function () {
				if (restDays.value == "" || persons.value == "" || restDays.value == "0" || persons.value == "0") {
					totalValue.innerHTML = 0;
				} else {
						let a = (daysSum + personsSum) * 4000;
						totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});

			persons.onkeypress = (event) => {
				if (event.key === "." || event.key === "," || event.key === "+" || event.key === '-' || event.key === 'e')
					return false;
				};

			restDays.onkeypress = (event) => {
				if (event.key === "." || event.key === "," || event.key === "+" || event.key === '-' || event.key === 'e')
					return false;
				};

};

module.exports = calc;