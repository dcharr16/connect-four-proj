/*-------------------------------- Constants --------------------------------*/


const winningCombos = [
// Rows
  [0,1,2,3],
  [1,2,3,4],
  [2,3,4,5],
  [3,4,5,6],

  [7,8,9,10],
  [8,9,10,11],
  [9,10,11,12],
  [10,11,12,13],

  [14,15,16,17],
  [15,16,17,18],
  [16,17,18,19],
  [17,18,19,20],
  
  [21,22,23,24],
  [22,23,24,25],
  [23,24,25,26],
  [24,25,26,27],
  
  [28,29,30,31],
  [29,30,31,32],
  [30,31,32,33],
  [31,32,33,34],

  [35,36,37,38],
  [36,37,38,39],
  [37,38,39,40],
  [38,39,40,41],

  // columns
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14,21,28,35],

  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16,23,30,37],
  
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17,24,31,38],

  [4, 11, 18, 25],
  [11,18,25,32],
  [18,25,32,39],

  [5, 12, 19, 26],
  [12,19,26,33],
  [19,26,33,40],

  [6, 13, 20, 27],
  [13,20,27,34],
  [20,27,34,41],

  //  diagnals
  [0,8,16,24],
  [8,16,24,32],
  [16,24,32,40],

  [1,9,17,25],
  [9,17,25,33],
  [17,25,33,41],

  [2,10,18,26],
  [10,18,26,34],

  [3,11,19,27],
  [3,9,15,21],

  [4,10,16,22],
  [10,16,22,28],

  [5,11,17,23],
  [11,17,23,29],
  [17,23,29,35],

  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
]

let winner, 
message, 
boardArray, 
playerTurn = 1

const messageEl = document.getElementById("message")
const circles = document.querySelectorAll(".circ")
const resetBtn = document.getElementById("reset-button") 

resetBtn.addEventListener('click', init)

circles.forEach(function(circle){circle.addEventListener("click", handleClick)});

init()
function init(){
  boardArray = [null, null, null, null, null, null, null,
                null, null, null, null, null, null, null,
                null, null, null, null, null, null, null,
                null, null, null, null, null, null, null,
                null, null, null, null, null, null, null,
                null, null, null, null, null, null, null]
  playerTurn = 1
  winner = null
  messageEl.innerText = "Player 1's turn"
  render ()
}

function render (){
  for (let i = 0; i < boardArray.length; i++){
  getWinner()  
    if (boardArray[i]=== 1){
      circles[i].style.background = "red"
     }else if (boardArray[i] === -1){
     circles[i].style.background= "black"
    }else{
      circles[i].style.background= "white"
    }
  }
}

function handleClick(evt){
  let cellIdx = parseInt(evt.target.id);
  const topRow = [0,1,2,3,4,5,6]
  if (topRow.includes(cellIdx)=== false){
    return
  }
  if (boardArray[cellIdx]!== null){
    return
  }
  const correctIdx = checkPlacement(cellIdx);
  if(winner !==null){
    return
  }
  boardArray[correctIdx] = playerTurn;
  playerTurn *= -1
  if(playerTurn === 1){
    messageEl.innerText = "Player 1's turn"
  }
  if(playerTurn === -1){
    messageEl.innerText = "Player 2's turn"
  }
  render()
}

function checkPlacement(idx){
  for (let i = idx + 35; i<= 41 && i>=0; i-=7){
    if (boardArray[i] === null){
      console.log(i)
      return i;
    }
  }
}

function reset(){
init()
}

function getWinner(){
  winningCombos.forEach(combo=>{
    if(Math.abs(boardArray[combo[0]] + boardArray[combo[1]] + boardArray[combo[2]] + boardArray[combo[3]]) === 4){
      if (playerTurn === 1){
        messageEl.innerText = "Player 2 Wins!"
        winner = 1
      }else if (playerTurn === -1){
        messageEl.innerText = "Player 1 Wins!"
        winner = -1
      }
      }else if(boardArray.every(circ => circ !== null) && !winner){
        messageEl.innerText = "tie";
        winner = "t"      
      }
  })
}




