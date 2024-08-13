
const accents = {
	"about": "#f232a6",
	"research": "#1679cd",
	"theses": "#55bb45",
	"contact": "#d0840e"
};

let menu = null;

function toggleMenu() {
	if (window.getComputedStyle(menu).display === "none") {
		menu.style.display = "block";
		toggle.src = "img/close.svg";
	} else {
		menu.style.display = "none";
		toggle.src = "img/menu.svg";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const toggle = document.querySelector("#toggle");
	const menuButton = document.querySelector("#menubutton");
	const header = document.querySelector("header");
	menu = document.querySelector("nav");
	document.documentElement.style.setProperty("--accent", accents[current]);

	const selected = document.querySelector(`nav li[data-content='${current}']`);
	if (selected) {
		selected.style.background = "#000000";
		const text = selected.querySelector("a");
		if (text) {
			text.style.color = accents[current];
		}
	}
});



