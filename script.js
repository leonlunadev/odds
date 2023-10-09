var iterator = 0;
var range = 0;
var yourNumber = -1;

var buttonClicked = function () {
  if (iterator == 0) {
    range = $("input").val();
    document.getElementById("form").value = "";
    iterator += 1;
    document.getElementById("prompt").innerHTML =
      "Enter a number between 1 and " + range + "!";
  } else if (iterator == 1) {
    yourNumber = $("input").val();
    document.getElementById("form").value = "";

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
    iterator = 0;
    document.getElementById("prompt").innerHTML =
      "What is the range of your odds? (Enter a number greater than 1)";
    document.getElementById("button").innerHTML = "Submit";
    $("input").show();
  }
};

$("button").click(function () {
  buttonClicked();
});
