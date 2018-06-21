class options {
	constructor(height, width, background, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.background = background;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	};

	createDiv() {
		let div = document.createElement("div");
		document.body.appendChild(div);
		div.textContent = "Рыбный текст";

		div.style.cssText = `height: ${this.height}px;
		width: ${this.width}px;
		background: ${this.background};
		font-size: ${this.fontSize}em;
		text-align: ${this.textAlign};`;
	};
};

div = new options(200, 200, "red", 2, "center");
div.createDiv();