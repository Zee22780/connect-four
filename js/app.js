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

/*-------------------------------- Functions --------------------------------*/