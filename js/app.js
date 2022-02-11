/*-------------------------------- Constants --------------------------------*/





/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, playerOne, playerTwo, counter

//board will the values of each cell - it should start as null
//turn will track which players turn it is
//winner will track who the winner is and will start as null
//playerOne and playerTwo will be our players and they will each hold a value of 1 and -1 respectively (these are the values that will be going into the board array as the game is played)
//counter will count the number of clicks on the board. We need this for determining if there is a tie.


/*------------------------ Cached Element References ------------------------*/
const circles = document.querySelectorAll(".circle")
const replayBtn = document.getElementById("replay=button")
const message = document.getElementById("message")

/*----------------------------- Event Listeners -----------------------------*/
//circles.forEach(circle => circle.addEventListener("click", handleClick))
  //adds a click event listener to each circle - the forEach method handles all 41 circles!
//replayBtn.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/
//init function needs to:
  ////set all circles in board to null
  ////select playerOne to play
    ////assign 1 to playerOne 
    ////assign -1 to playerTwo
  //hide replay button
  ////start "turn" variable as null
  ////assign null to winner variable
  //call render function
  ////start counter at zero
  //we need to limit the playerOne to only choosing from the bottom row

  function inti() {
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
    turn = null
    winner = null
    counter = 0
  }
  
  //function checkBoard
  //Instead of a winning combos array, I want a function that checks the values of each circle to determine if there are 4 of playerOne or 4 of playerTwo in a winning combination. 
    // checking rows should be straightforward, it would check for 4 in a row of either "1"s or "-1"s. Basically i want it to iterate over each circle seeing 4 next to each other each hold a value of either 1 or -1. Need to decide whether I want to check each index against each other to determine if they are the same or whether it's easier to get a sum of 4 or -4 and then check to make sure they are next to each other somehow.
      //check board row indexes 0-6, 7-13, 14-20, 21-27, 28-34, 35-41
      
    //checking columns could also check for 4 in a column?
      //check board column indexes [0][7][14][21][28][35], [1][8][15][22][29][36], [2][9][16][23][30][37], [3][10][17][24][31][38], [4][11][18][25][32][39], [5][12][19][26][33][40], [6][13][20][27][34][41]

    //checking diagonals 
      //check board diagonal indexes 


  function checkBoard() {
    for(let i =0; i < board.length; i++){
      const a = board[i][0]
    }
  

  }

