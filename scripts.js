window.onkeydown = function (){
	highlight();
};


function textColor() {
	document.getElementById("id1").style.color = "red";
}

function changeFont() {
	document.getElementById("2").style.fontFamily = "monospace";

}
function rot13() {
	//this is the alphabet array
	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//rot 13 array
	let alphabetRot13 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

	let text = document.getElementById("rot13").textContent;


	let rot13Text = "";


	for(let i = 0; i < text.length; i++) {

		for(let j = 0; j < alphabet.length; j++) {
			if(text[i] === alphabet[j]) {

				rot13Text = rot13Text + alphabetRot13[j];
			}
		}
		if(text[i] === " ") {
			rot13Text = rot13Text + " ";
		}
	}


		document.getElementById("rot13").textContent = rot13Text;

}


function highlight() {
	document.getElementById("highlight").style.backgroundColor = '#fdff32';
}