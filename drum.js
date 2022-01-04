// get drum
var drum = document.querySelectorAll("button.drum");

// get sound
var sound = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"];

// Make sound for click
// loop every drum on click
for(let i = 0; i < drum.length;i++ ){
	drum[i].addEventListener("click",function () {
		var audio = new Audio(sound[i]);
		audio.play();

		btnAnimation(drum[i].textContent)
	});
}


// make sound for keyboard

document.addEventListener("keydown",function (event) {
	makeSound(event.key);
	btnAnimation(event.key)
	// console.log(event);
});

function makeSound(key) {
	switch(key){
		case "w": 
		var audio = new Audio(sound[0]);
		audio.play();
		break;

		case "a":
		var audio = new Audio(sound[1]);
		audio.play();
		break;

		case "s":
		var audio = new Audio(sound[2]);
		audio.play();
		break;

		case "d":
		var audio = new Audio(sound[3]);
		audio.play();
		break;

		case "j":
		var audio = new Audio(sound[4]);
		audio.play();
		break;

		case "k":
		var audio = new Audio(sound[5]);
		audio.play();
		break;

		case "l":
		var audio = new Audio(sound[6]);
		audio.play();
		break;
	}
}

// Function for animation every key pressed
function btnAnimation(key) {
	var keyAnimate = document.querySelector("."+key);
	keyAnimate.classList.toggle("pressed");
	setTimeout(function () {
		keyAnimate.classList.toggle("pressed");
	},100);
}