document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

var player = true;

//declare player 1 starting place to count for clicks
var player=document.querySelectorAll('.cell');

//select all boxes and pushes them into an array - code from https://davidwalsh.name/nodelist-array
const collectorArr = new Array(9);
//add the function to what happens when someone clicks on a box using a for loop
  //select all cells
const nodeArray = [].slice.call(document.querySelectorAll('.cell'));
//iterate through the cells
for (let i=0; i<nodeArray.length; i++){
  nodeArray[i].addEventListener('click', controlOutput)
}


function controlOutput(event){
  if (collectorArr[event.target.id] != null) {
    alert('Not a valid move!');
  }
  else {
    if (player) {
      nodeArray[event.target.id].innerHTML = 'X';
      collectorArr[event.target.id] = 'X';
    }
    else {
     nodeArray[event.target.id].innerHTML = 'O';
     collectorArr[event.target.id] = 'O';
    }
  }

  player = !player;

  result = checkForWinner();
  if (result)
  {
    setTimeout(function(){
      alert("You won!"); }, 500);
    }
  }

 function checkForWinner () {
  //check fo == falser win
  if ((collectorArr[0] == 'X' && collectorArr[3] == 'X' && collectorArr[6] == 'X') ||
      (collectorArr[1] == 'X' && collectorArr[4] == 'X' && collectorArr[7] == 'X') ||
      (collectorArr[2] == 'X' && collectorArr[5] == 'X' && collectorArr[8] == 'X') ||
      (collectorArr[0] == 'X' && collectorArr[1] == 'X' && collectorArr[2] == 'X') ||
      (collectorArr[3] == 'X' && collectorArr[4] == 'X' && collectorArr[5] == 'X') ||
      (collectorArr[6] == 'X' && collectorArr[7] == 'X' && collectorArr[8] == 'X') ||
      (collectorArr[6] == 'X' && collectorArr[4] == 'X' && collectorArr[2] == 'X') ||
      (collectorArr[0] == 'X' && collectorArr[4] == 'X' && collectorArr[8] == 'X') ||
      (collectorArr[0] == "O" && collectorArr[3] == 'O' && collectorArr[6] == 'O') ||
      (collectorArr[0] == "O" && collectorArr[3] == 'O' && collectorArr[6] == 'O') ||
      (collectorArr[1] == "O" && collectorArr[4] == 'O' && collectorArr[7] == 'O') ||
      (collectorArr[2] == "O" && collectorArr[5] == 'O' && collectorArr[8] == 'O') ||
      (collectorArr[0] == "O" && collectorArr[1] == 'O' && collectorArr[2] == 'O') ||
      (collectorArr[3] == "O" && collectorArr[4] == 'O' && collectorArr[5] == 'O') ||
      (collectorArr[6] == "O" && collectorArr[7] == 'O' && collectorArr[8] == 'O') ||
      (collectorArr[6] == "O" && collectorArr[4] == 'O' && collectorArr[2] == 'O') ||
      (collectorArr[0] == "O" && collectorArr[4] == 'O' && collectorArr[8] == 'O'))
  {
    return true;
  }
  else {
    return false;
  }
}
});
