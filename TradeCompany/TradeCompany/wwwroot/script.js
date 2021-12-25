"use strict"

var btn = document.getElementById("theme-btn");
var link = document.getElementById("theme-link");
var lightTheme = "light1.css";
var darkTheme = "dark1.css";
var currTheme = link.getAttribute("href");

btn.addEventListener("click", function () {
	ChangeTheme();
});

function ChangeTheme() {
	var theme = "";
	if (currTheme == lightTheme) {
		currTheme = darkTheme;
		theme = "dark";
		localStorage.setItem("theme", theme);
	} else {
		currTheme = lightTheme;
		theme = "light";
		localStorage.setItem("theme", theme);
	}

	link.setAttribute("href", currTheme);
}

function LoadTheme(theme) {
	if (theme == "dark") {
		currTheme = darkTheme;
	} else {
		currTheme = lightTheme;
	}

	link.setAttribute("href", currTheme);
}

document.addEventListener("DOMContentLoaded", () => {
	var savedTheme = localStorage.getItem("theme") || "light";
	LoadTheme(savedTheme);
});