var noteAmount = 10;

function getNote(number) {
	noteAmount = noteAmount + number;
	document.getElementById("noteAmount").innerHTML = noteAmount;
}

function save() {
	var save = {
		noteAmount: noteAmount
	}
	localStorage.setItem("save",JSON.stringify(save));
}
 
function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.noteAmount !== "undefined") noteAmount = savegame.noteAmount;
}