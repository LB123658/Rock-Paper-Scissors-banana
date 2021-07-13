function rock() {
var obj = "rock"; 
var choice = Math.floor(Math.random() * 3) + 1;
  if (choice == "1") {
    document.getElementById("demo").innerHTML = "Rock";
    notify("Tie");
  } else if (choice == "2") {
    document.getElementById("demo").innerHTML = "Paper";
    notify("You lose");
  } else if (choice == "3") {
    document.getElementById("demo").innerHTML = "Scissors";
    notify("You win");
  }
}
function paper() {
var obj = "paper";  
var choice = Math.floor(Math.random() * 3) + 1;
  if (choice == "1") {
    document.getElementById("demo").innerHTML = "Rock";
    notify("You win");
  } else if (choice == "2") {
    document.getElementById("demo").innerHTML = "Paper";
    notify("Tie");
  } else if (choice == "3") {
    document.getElementById("demo").innerHTML = "Scissors";
    notify("You lose");
  }
}
function scissors() {
var obj = "scissors";  
var choice = Math.floor(Math.random() * 3) + 1;
  if (choice == "1") {
    document.getElementById("demo").innerHTML = "Rock";
    notify("You lose");
  } else if (choice == "2") {
    document.getElementById("demo").innerHTML = "Paper";
    notify("You win");
  } else if (choice == "3") {
    document.getElementById("demo").innerHTML = "Scissors";
    notify("Tie");
  }
}
function notify(text) {
  document.getElementById("win_lose").innerHTML = text;
  if (text == "You win") {
    document.getElementById("win_lose").style.color = "green";
  } else if (text == "You lose") {
    document.getElementById("win_lose").style.color = "red";
  } else {
    document.getElementById("win_lose").style.color = "white";
  }
}
