/*-------------------------------- Constants --------------------------------*/





/*-------------------------------- Variables --------------------------------*/
let winner, message, board, playerTurn


/*------------------------ Cached Element References ------------------------*/
const columnSelect = document.querySelectorAll(".top-square")

columnSelect.forEach(column=> column.addEventListener("mouseover", columnHighlight))
const moveCommit = document.getElementById("r0c1")
moveCommit.addEventListener('click', function(dropChip){
  console.log(dropChip)
})


/*----------------------------- Event Listeners -----------------------------*/





/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  board = [null, null, null, null, null, null, null,
          null, null, null, null, null, null, null,
          null, null, null, null, null, null, null,
          null, null, null, null, null, null, null,
          null, null, null, null, null, null, null,
          null, null, null, null, null, null, null,
          null, null, null, null, null, null, null]

}

function render (){}
function columnHighlight(evt){
evt.target.style.background = "red"
}

function reset(){
init()
}


//Create a 7 x 6 grid 
//Create an array that represents the board
//Field for game title
//Track whose turn it is
//Message for State of Game (winner, turn, draw)

//init
//Game title
//Start of the game has empty board with player chips showing who goes first
//Reset button on bottom of board


//Cache items
//Message (state of game/ celebratory/ field not available)
//Click event listener for reset 
// mouse over event listener for showing relative column to make move
//Click event listener for making a move

//Functions
//Create game logic for tracking state of game (win, whose turn, draw)
//Making a move and keep track of valid cells that can be populated



//AAU
//AAU the player will be greeted with a starting screen consisting of a board player 1 & 2 chip //representative

//Will be instructed to place chip it top of board through a pulse highlighted indicator 

//The chip will fall to the bottom most cell
//Message  saying player 2’s turn will flash

//Game play will continue as such until 4 chips of the same color are in a row. And message //stating who the winner is will appear (confetti?)

//Reset button will then be clicked and the game will start over again
