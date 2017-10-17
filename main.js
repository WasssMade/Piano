//Save, Load, and Reset

function saveGame() {
	var saveGame = {

	}
	localStorage.setItem("saveGame",JSON.stringify(saveGame));
}
window.setInterval(function() {
saveGame();
}, 30000);



function loadGame() {
	var saveGame = JSON.parse(localStorage.getItem("saveGame"));
}

function resetGame() {
	localStorage.removeItem("saveGame");
	location.reload();
}