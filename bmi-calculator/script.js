
let bereken = document.getElementById('bereken');
let lengte = document.getElementById('lengte');
let gewicht = document.getElementById('gewicht');
let resultaat = document.getElementById("resultaat");
let input = document.getElementById("input");
gewicht.addEventListener('focus', function() {})
lengte.addEventListener('focus', function() {})
bereken.addEventListener('click', berekenBMI);

function berekenBMI() {
	ajax(gewicht.value, lengte.value);
}

function clearResuslt() {
	// body...
}