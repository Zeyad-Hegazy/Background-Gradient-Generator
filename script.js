const changeBgMain = document.getElementsByTagName("main")[0];
const rightInputColor = document.getElementById("rightColor");
const leftInputColor = document.getElementById("leftColor");
const cssTxt = document.getElementById("cssTxt");
const selectDir = document.getElementById("selectDir");
const toCopy = document.getElementById("toCopy");

leftInputColor.addEventListener("input", () => {
	setGradient();
	window.localStorage.setItem("left", leftInputColor.value);
});
rightInputColor.addEventListener("input", () => {
	setGradient();
	window.localStorage.setItem("right", rightInputColor.value);
});

selectDir.addEventListener("change", () => {
	setGradient();
	window.localStorage.setItem("direction", selectDir.value);
});

if (window.localStorage.getItem("left")) {
	leftInputColor.value = window.localStorage.getItem("left");
}

if (window.localStorage.getItem("right")) {
	rightInputColor.value = window.localStorage.getItem("right");
}

if (window.localStorage.getItem("direction")) {
	selectDir.value = window.localStorage.getItem("direction");
}

function setGradient() {
	changeBgMain.style.cssText = `background-image: linear-gradient(${window.localStorage.getItem(
		"direction"
	)},${window.localStorage.getItem("left")},${window.localStorage.getItem(
		"right"
	)});`;
	cssTxt.innerHTML = changeBgMain.style.cssText;
	window.localStorage.setItem("background", cssTxt.innerHTML);
}

if (window.localStorage.getItem("background")) {
	changeBgMain.style.cssText = window.localStorage.getItem("background");
	cssTxt.innerHTML = window.localStorage.getItem("background");
}
