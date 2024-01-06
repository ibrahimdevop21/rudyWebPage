//! Drum kit Code
// 3 Function to handle button clicks
function handleButtonClick() {
  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
}
// 4 Function to handle key presses
function handleKeyPress(evt) {
  makeSound(evt.key);
}
// 1 Function to play sound based on key/button press
function makeSound(key) {
  switch(key) {
    case "a":
      let crash = new Audio("../assets/suonds/drumKit-sound/crash.mp3");
      crash.play();
      changeStyle(key);
      break;
    case "s":
      let kick = new Audio("../assets/suonds/drumKit-sound/kick-bass.mp3");
      kick.play();
      changeStyle(key);
      break;
    case "d":
      let snare = new Audio("../assets/suonds/drumKit-sound/snare.mp3");
      snare.play();
      changeStyle(key);
      break;
    case "f":
      let tom1 = new Audio("../assets/suonds/drumKit-sound/tom-1.mp3");
      tom1.play();
      changeStyle(key);
      break;
    case "g":
      let tom2 = new Audio("../assets/suonds/drumKit-sound/tom-2.mp3");
      tom2.play();
      changeStyle(key);
      break;
    case "h":
      let tom3 = new Audio("../assets/suonds/drumKit-sound/tom-3.mp3");
      tom3.play();
      changeStyle(key);
      break;
    case "j":
      let tom4 = new Audio("../assets/suonds/drumKit-sound/tom-4.mp3");
      tom4.play();
      changeStyle(key);
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
function changeStyle(key) {
  let buttonToChange = $(`.${key}`);
  buttonToChange.addClass("alpha-pressed");
  // buttonToChange.text("BanG"); // Change the text to "A" (or any desired text)
  setTimeout(function() {
    buttonToChange.removeClass("alpha-pressed");
    buttonToChange.text(key); // Revert back to the original text
  }, 200);
}

// This code sets up event listeners for both button clicks and key presses, triggering the `makeSound` function to play different sounds based on the key/button pressed.
//* simon game Code
// TODO: add some keyborde keypress event listener so it could be pleayed with 1 2 3 4 for example i think this will make it easier 
// todo: compare it to other simon game and find if there is something extra i could add like the scoring 
// todo: move the page to a different page or an isolated container
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("./assets/suonds/simon-sound/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}
 //* piano functionality -->
// TODO: java script code to add sound to key's -->
