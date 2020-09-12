'use strict'
const authEvents = require('./auth/events')



$(() => {
  // $('#newGame').hide()
  // $('#signOut').hide()
  // $('.board').hide()
$('#change-password').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('#reset').on('submit', authEvents.onReset)
})

let player1= "X";
let player2= "O";
let turn=1;
let move=0;
let sqr= $('.square');
let winnerContainer = $('.winner')

sqr.on('click',function(a){
  move++;

  if(turn === 1){
    event.target.innerHTML = player1;
    event.target.style.color = "blue";
    turn++;
  }else{
    event.target.innerHTML = player2;
    event.target.style.color = "red";
    turn--;
  }
  // if(checkWinner()){
  //   let theWinner = turn == 1?player2:player1;
  //   declareWinner(theWinner);
  // }
  checkWinner();
});
function checkWinner (){
  if(move > 4){
    let moves = Array.prototype.slice.call($('.square'))
    let results = moves.map(function(square){
      return square.innerHTML

    });
    console.log(results)
  }
}



// let winningCombos = [
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// ];

// const gameWin = function(square){
//
//     if (square[0] === square[1] && square[0] === square[2] && square[0] !== ''){
//       return true
//     } else if (square[3] === square[4] && square[3] === square[5] && square[3] !== ''){
//       return true
//     } else if  (square[6] === square[7] && square[6] === square[8] && square[6] !== ''){
//       return true
//     } else if  (square[0] === square[3] && square[0] === square[6] && square[0] !== ''){
//       return true
//     } else if  (square[1] === square[4] && square[1] === square[7] && square[1] !== ''){
//       return true
//     } else if (square[2] === square[5] && square[2] === square[8] && square[2] !== ''){
//       return true
//     } else if (square[0] === square[4] && square[0] === square[8] && square[0] !== ''){
//       return true
//     } else if (square[2] === square[4] && square[2] === square[6] && square[2] !== ''){
//       return true
//     } else {
//       return false
// }}

function declareWinner(winner) {
  winnerContainer('display', 'block');
  winner = winner === player1 ? 'X':'O';
  winnerContainer.html(winner + "wins!")
}
