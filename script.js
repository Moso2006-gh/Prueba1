var css = document.getElementsByTagName("h5")[0];
var Color1 = document.getElementById("Color1");
var Color2 = document.getElementById("Color2");
var body = document.getElementsByTagName("body")[0];

console.log(css);
console.log(body);
console.log(Color1);
console.log(Color2);

Color1.addEventListener("input", UpdateGradiant)
Color2.addEventListener("input", UpdateGradiant)

function UpdateGradiant(){
	console.log("hola");
	body.style.background = "linear-gradient(to right," + Color1.value + "," + Color2.value + ")";
	css.textContent = body.style.background + ";";
}
UpdateGradiant();