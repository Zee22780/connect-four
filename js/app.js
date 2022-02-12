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



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, playerOne, playerTwo, counter

//board will hold the values of each cell - it should start as null
//turn will track which players turn it is
//winner will track who the winner is and will start as null
//playerOne and playerTwo will be our players and they will each hold a value of 1 and -1 respectively (these are the values that will be going into the board array as the game is played)
//counter will count the number of clicks on the board. We need this for determining if there is a tie.


/*------------------------ Cached Element References ------------------------*/
const circles = document.querySelectorAll(".circle")
const replayBtn = document.getElementById("replay=button")
const message = document.getElementById("message")

/*----------------------------- Event Listeners -----------------------------*/
//adds a click event listener to each circle - the forEach method handles all 41 circles!
circles.forEach(circle => circle.addEventListener("click", handleClick))
  
//replayBtn.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/
//init function needs to:
  ////set all circles in board to null
  ////select playerOne to play
    ////assign 1 to playerOne 
    ////assign -1 to playerTwo
  //hide replay button
  ////start "turn" variable as 1 to represent that we start with playerOne
  ////assign null to winner variable
  //call render function
  ////start counter at zero
  //we need to limit the playerOne to only choosing from the bottom row

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
  }

  //function handleClick
  //this function listens for event (in this case a click on one of the circles) and then does something. 
    //does it call the render function?
  
  function handleClick(evt){
  //this removes the c from all of the circles id so that we just have a number (which also matches our board index number)
    const index = evt.target.id.replace("c","")
    board[index] = turn
    console.log(board)
  }


  //function checkBoard
  //This function will check the board for winners
    //uses the winningCombos array to look for winning combinations. Winning combos array is an array of arrays
  //Needs to assess if there is a sum of 4 or -4 in each of these indexes. 
    //if 4, playerOne has won
    //if -4, playerTwo has won
    //if any other sum, game should continue. Call render function to show player the game state?

  function checkBoard() {
  //this for loop will iterate through the columns of the winningCombos array checking the values stored in each index and looking for a winnding combination.
    for (let i = 0; i< winningCombos.length; i++){
      const a = winningCombos[i][0]
      const b = winningCombos[i][1]
      const c = winningCombos[i][2]
      const d = winningCombos[i][3]
    }
  }
  
  //function render()
  //we want it to store a value either 1 or -1 to show which player has played
    //we want the circle to change color to represent a "chip" being placed when a circle is "clicked"

