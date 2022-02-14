/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2, 3],
  [7, 8, 9, 10],
  [14, 15, 16, 17],
  [21, 22, 23, 24],
  [28, 29, 30, 31],
  [35, 36, 37, 38],
  [41, 40, 39, 38],
  [34, 33, 32, 31],
  [27, 26, 25, 24],
  [20, 19, 18, 17],
  [13, 12, 11, 10],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]

const a = []
const b = []
const c = []
const d = []

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, playerOne, playerTwo, counter

//board is an array and will hold the values of each cell - all should start as null
//turn will track which players turn it is by going back and forth from playerOne to playerTwo after each click
//winner will track who the winner is and will start as null
//playerOne and playerTwo will be our players and they will each hold a value of 1 and -1 respectively (these are the values that will be going into the board array as the game is played)
//counter will count the number of clicks on the board. We need this for determining if there is a tie.


/*------------------------ Cached Element References ------------------------*/
const circles = document.querySelectorAll(".circle")
const replayBtn = document.getElementById("replay-button")
const message = document.getElementById("message")

/*----------------------------- Event Listeners -----------------------------*/
circles.forEach(circle => circle.addEventListener("click", handleClick))
replayBtn.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/
  init()

  function init() {
    board = [
      null, null, null, null, null, null, null,
      null, null, null, null, null, null, null,
      null, null, null, null, null, null, null,
      null, null, null, null, null, null, null,
      null, null, null, null, null, null, null,
      null, null, null, null, null, null, null,
    ]
    playerOne = 1
    playerTwo = -1
    turn = 1
    winner = null
    counter = 0
    render()
    replayBtn.setAttribute("hidden", true)
  }

  function handleClick(evt){
    const index = parseInt(evt.target.id.replace("c",""))
    const correctIdx = checkPlacement(index)
    console.log(correctIdx)
  
    board[correctIdx] = turn

  
    //if board index has a value of 1 or -1 OR if there is a winner {
    //   if (board[index] === 1 || board[index] === -1){
    //     return
    //   }

    //   stop player from placing a chip
    // return
    // } 

    turn = turn * -1

    if(turn === 1){
      message.textContent = "Next: Player One Turn"
    } else if (turn === -1){
      message.textContent = "Next: Player Two Turn"
    }
    if(winner){
      return
    }

    render()
  }

  
  function render() {
    board.forEach(function (circle, i) {
      if(board[i] === 1){
        circles[i].style.backgroundColor = "#ee9b00"
      } else if (board[i] === -1){
        circles[i].style.backgroundColor = "#bb3e03"
      } else if (board[i] === null) {
        circles[i].style.backgroundColor = ""
      }
    })
  checkBoard()
  }

  function checkBoard() {
    for (let i = 0; i< winningCombos.length; i++){
      const a = winningCombos[i][0]
      const b = winningCombos[i][1]
      const c = winningCombos[i][2]
      const d = winningCombos[i][3]
    
      if(board[a]+board[b]+board[c]+board[d] === 4){
        winner = 1
        console.log("Player One Wins")
        message.textContent = "Player One Wins!"
      } else if(board[a]+board[b]+board[c]+board[d] === -4){
        winner = -1
        message.textContent = "Player Two Wins!"
      }
    }
    replayBtn.removeAttribute("hidden")
  }

    function checkPlacement(idx){
      console.log(idx)
      //we want to loop through column one from index + 35 down to zero
      for(let i = idx + 35; i <= 41 && i>= 0; i-=7){
        if(board[i] === null){
          return i
        }
      }
    }