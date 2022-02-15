/*-------------------------------- Constants --------------------------------*/


// const winningCombos = 
//                       Rows
//                       [0,1,2,3]
//                       [1,2,3,4]
//                       [2,3,4,5]
//                       [3,4,5,6]

//                       [7,8,9,10]
//                       [8,9,10,11]
//                       [9,10,11,12]
//                       [10,11,12,13]

//                       [14,15,16,17]
//                       [15,16,17,18]
//                       [16,17,18,19]
//                       [17,18,19,20]
                      
//                       [21,22,23,24]
//                       [22,23,24,25]
//                       [23,24,25,26]
//                       [24,25,26,27]
                      
//                       [28,29,30,31]
//                       [29,30,31,32]
//                       [30,31,32,33]
//                       [31,32,33,34]

//                       [35,36,37,38]
//                       [36,37,38,39]
//                       [37,38,39,40]
//                       [38,39,40,41]

//                       columns
//                       [0, 7, 14, 21]
//                       [7, 14, 21, 28]
//                       [14,21,28,35]

//                       [1, 8, 15, 22]
//                       [8, 15, 22, 29]
//                       [15, 22, 29, 36]
                      
//                       [2, 9, 16, 23]
//                       [9, 16, 23, 30]
//                       [16,23,30,37]
                      
//                       [3, 10, 17, 24]
//                       [10, 17, 24, 31]
//                       [17,24,31,38]

//                       [4, 11, 18, 25]
//                       [11,18,25,32]
//                       [18,25,32,39]

//                       [5, 12, 19, 26]
//                       [12,19,26,33]
//                       [19,26,33,40]

//                       [6, 13, 20, 27]
//                       [13,20,27,34]
//                       [20,27,34,41]

//                        diagnals
//                        [0,8,16,24]
//                        [8,16,24,32]
//                        [16,24,32,40]
// 
//                        [1,9,17,25]
//                        [9,17,25,33]
//                        [17,25,33,41]

//                        [2,10,18,26]
//                        [10,18,26,34]

//                        [3,11,19,27]
//                        [3,9,15,21]

//                        [4,10,16,22]
//                        [10,16,22,28]

//                        [5,11,17,23]
//                        [11,17,23,29]
//                        [17,23,29,35]

//                        [6, 12, 18, 24]
//                        [12, 18, 24, 30]
//                        [18, 24, 30, 36]








/*-------------------------------- Variables --------------------------------*/
let winner, 
message, 
board, 
playerTurn = 1


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("message")

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

  playerTurn = 1
  winner = null
  messageEl.innerText = "player 1's turn"
}

function render (){

}
function columnHighlight(evt){
evt.target.style.background = "red"
}

function dropChip(){

}

function reset(){
init()
}

// function playerTurn(){
//   turn *= turn *-1
// }


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
