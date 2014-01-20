//RandButton.js

function MoveButton()
{
	var height = window.innerHeight;
	var width = window.innerWidth;
	var yPos = Math.floor((Math.random() * height) + 1);
	var xPos = Math.floor((Math.random() * width) + 1);
	
	document.getElementById("ClickMeBtn").style.position="absolute";
	document.getElementById("ClickMeBtn").style.top= yPos;
	document.getElementById("ClickMeBtn").style.right= xPos;
}