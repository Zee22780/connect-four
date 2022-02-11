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
    //checking rows would be simple, it would check for 4 in a row of either "1"s or "-1"s
    //checking columns could also check for 4 in a column?
    //checking diagonals would require math I think 

