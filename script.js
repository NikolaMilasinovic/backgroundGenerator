var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



function genereteRandomNumbers(){
	var rgb1 =  Math.floor(Math.random() * 255);
	var rgb2 =  Math.floor(Math.random() * 255);
	var rgb3 =  Math.floor(Math.random() * 255);
	var rgb4 =  Math.floor(Math.random() * 255);
	var rgb5 =  Math.floor(Math.random() * 255);
	var rgb6 =  Math.floor(Math.random() * 255);

	var randomColors = rgb(rgb1,rgb2,rgb3) + rgb(rgb4,rgb5,rgb6);
	return 
}