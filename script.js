var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var colorResult = document.querySelector("#color-result");
var	textBox = document.querySelector(".textValue");


//Function to set color result
function setColor(){
	colorResult.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ")";
	css.textContent = colorResult.style.background + ";";
};
	
color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);