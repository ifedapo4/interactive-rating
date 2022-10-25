//TO DO
//-insert rating number into thank you page when submit is pressed
//-when submit is pressed, show thank you page and hide rating page ✔
//-bring user back to main page after thank you page has been shown ✔
//-when rating button is clicked, should be light grey before submitting ✔

let submitButton = document.getElementById("submit-button");
let placeholderNumber = 3;
let ratingNumber = document.querySelector(".rating-number");

//handles submit button----------------------------------

submitButton.addEventListener("click", pressedSubmit);

function pressedSubmit() {
	let thanksPage = document.getElementById("thank-you-page");
	thanksPage.style.display = "block";
	let ratingPage = document.getElementById("rating-start");
	ratingPage.style.display = "none";
	return true;
}

//page timeout

function returnToMain() {
	if (pressedSubmit() === true) {
		location.reload();
	}
}

setTimeout(returnToMain, 25000);

//insert rating number

let buttonOne = document.getElementById("button-one");
let buttonTwo = document.getElementById("button-two");
let buttonThree = document.getElementById("button-three");
let buttonFour = document.getElementById("button-four");
let buttonFive = document.getElementById("button-five");

buttonOne.addEventListener("click", numberOne);
buttonTwo.addEventListener("click", numberTwo);
buttonThree.addEventListener("click", numberThree);
buttonFour.addEventListener("click", numberFour);
buttonFive.addEventListener("click", numberFive);

function numberOne() {
	document.getElementById("rating-number").innerHTML = 1;
}

function numberTwo() {
	document.getElementById("rating-number").innerHTML = 2;
}

function numberThree() {
	document.getElementById("rating-number").innerHTML = 3;
}

function numberFour() {
	document.getElementById("rating-number").innerHTML = 4;
}

function numberFive() {
	document.getElementById("rating-number").innerHTML = 5;
}