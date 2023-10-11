var iterator = 0;
var range = 0;
var yourNumber = -1;

var play = function () {
  document.getElementById("button").innerHTML = "Submit";
  document.getElementById("prompt").innerHTML =
    "What is the range of your odds? (Enter a number greater than 1)";
  $("input").show();
  iterator += 1;
};

var submitRange = function () {
  range = $("input").val();
  document.getElementById("form").value = "";
  if (range > 1) {
    iterator += 1;
    document.getElementById("prompt").innerHTML =
      "Enter a number between 1 and " + range + "!";
  } else {
    alert("Your range must be greater than 1!");
  }
};

var submitYourNumber = function () {
  yourNumber = $("input").val();
  document.getElementById("form").value = "";

  if (yourNumber > 0 && yourNumber <= Number(range)) {
    iterator += 1;

    let min = Math.ceil(1);
    let max = Math.floor(range);
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive

    if (yourNumber == randomNumber) {
      document.getElementById("prompt").innerHTML =
        "You Lose! Your number was " +
        yourNumber +
        ", the random number was " +
        randomNumber +
        "<br> Want to play again?";
    } else {
      document.getElementById("prompt").innerHTML =
        "You Win! Your number was " +
        yourNumber +
        ", the random number was " +
        randomNumber +
        "<br> Want to play again?";
    }

    document.getElementById("button").innerHTML = "Play again?";

    iterator += 1;
    $("input").hide();
  } else {
    alert(
      "Your number must be between 1 and " +
        range +
        " inclusive! Your number was " +
        yourNumber +
        "!"
    );
  }
};

var playAgain = function () {
  iterator = 0;
  document.getElementById("prompt").innerHTML = "Want to play odds!?";
  document.getElementById("button").innerHTML = "Play";
};

/*

click play button

spawn X amount of headings 
  random color 
  random font sizes? 
  on position of original heading 
  move in random x y on curve 
  dissapear when past a certain part of the screen



Enter Range animation 
  PICK A NUMBER ABOVE RANGE OF YOUR ODDS 
  

enter your number animation
  Pick a number between 1 and range large 

COUNT DOWN SCREEN 3 2 1 

win/lose animation
  WIN balloon explosion nice you dont have to take that risk
  LOSE Devil explosion time to do that dare

animations ends play again screen pops up

play again


*/

var oddsAnimation = function () {
  var elem = document.querySelector("h1");
  var clone = elem.cloneNode(true);
  clone.id = "elem2";
  clone.classList.add("text-large");
  elem.after(clone);
  $("#elem2").toggle();
};

$("button").click(function () {
  switch (iterator) {
    case 0:
      play();
      break;
    case 1:
      submitRange();
      break;
    case 2:
      submitYourNumber();
      break;
    case 3:
      break;
    default:
      playAgain();
      break;
  }
});
