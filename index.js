// 3 Function to handle button clicks
function handleButtonClick() {
  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// 4 Function to handle key presses
function handleKeyPress(evt) {
  makeSound(evt.key);
  buttonAnimation(evt.key);
}

// 1 Function to play sound based on key/button press
function makeSound(key) {
  switch(key) {
    case "a":
      let crash = new Audio("./assets/img/sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      let kick = new Audio("./assets/img/sounds/kick-bass.mp3");
      kick.play();
      break;
    case "d":
      let snare = new Audio("./assets/img//sounds/snare.mp3");
      snare.play();
      break;
    case "f":
      let tom1 = new Audio("./assets/img//sounds/tom-1.mp3");
      tom1.play();
      break;
    case "g":
      let tom2 = new Audio("./assets/img//sounds/tom-2.mp3");
      tom2.play();
      break;
    case "h":
      let tom3 = new Audio("./assets/img//sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      let tom4 = new Audio("./assets/img//sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key);
  }
}

//2 Add event listeners to buttons
const numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
  let currentButton = document.querySelectorAll(".drum")[i];
  currentButton.addEventListener("click", handleButtonClick);
}

// Add event listener for key presses
document.addEventListener("keydown", handleKeyPress);
// ```

// This code sets up event listeners for both button clicks and key presses, triggering the `makeSound` function to play different sounds based on the key/button pressed.

function buttonAnimation(curentKey) {
  let activeButton = document.querySelector("."+curentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}