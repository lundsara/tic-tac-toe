##Technical Discussion

* used Javascript, HTML, and CSS
## User Stories
:x: :o: :x: :o:

## Necessary UX Elements

* instructions :page_with_curl:
* start button
* declare turns
* declare winner
* ask user if they would like to play again
* clear board
* score board
* score total wins

## Tic-Tac-Wants

* customize x and o to a player avatar
* play against AI :robot:
* customize board design
* set a timer on player turns :hourglass_flowing_sand:
* sound effects :loudspeaker:
* strike-through on winning combination
* animations at point of win / tie game

## Wire-Frames

###### Start Game
<img style='width: 600px' src="FullSizeRender.jpg"></img>

###### Instructions
<img style='width: 600px' src="FullSizeRender_1.jpg"></img>

###### Pick a Player
<img style='width: 600px' src="FullSizeRender_2.jpg"></img>

###### Game Start State
<img style='width: 600px' src="FullSizeRender_3.jpg"></img>

###### Game Play State
<img style='width: 600px' src="FullSizeRender_4.jpg"></img>

###### Declare Winner
<img style='width: 600px' src="FullSizeRender_5.jpg"></img>

###### Restart Game
<img style='width: 600px' src="FullSizeRender_6.jpg"></img>


## Difficult Code Snippet

`const nodeArray = [].slice.call(document.querySelectorAll('.cell'));

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
    }`


