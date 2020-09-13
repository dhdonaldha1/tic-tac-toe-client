'use strict'
const authEvents = require('./auth/events')



$(() => {
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#reset').hide()
  $('#view-game').hide()
  $('.board').hide()
  $('#change-password').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('#reset').on('submit', authEvents.onReset)
  $('#update-game').on('submit', authEvents.onUpdateGame)
  $('#view-game').on('submit', authEvents.onViewGame)
})

let player1= "X";
let player2= "O";
let turn=1;
let move=0;
let sqr= $('.square');
let winnerContainer = $('.winner')

sqr.one('click',function(a){
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


  if(checkWinner()){
    let theWinner = turn == 1?player2:player1;
    declareWinner(theWinner);
  }
  // checkWinner();
});


function checkWinner() {
    if (move > 4) {
        var sqr = $('.square');
        var moves = Array.prototype.slice.call($(".square"));
        var results = moves.map(function(square) { return square.innerHTML; });
        var winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return winningCombos.find(function(combo) {
            if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
        });
    }
}

// let table = ['','','','','','','','','']
// let square = $('.square')

// function checkForWinner (){
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
// let board = $('.board')
// function checkForWinner(){
// if (board[0].textContent === "X" && board[1].textContent === "X" && board[2].textContent === "X"){
//   console.log('x wins')}}

// if(checkForWinner()) {
//   console.log('we have a winner')
// } else {
//   console.log('we dont have a winner')
// }

function declareWinner(winner) {
  winnerContainer.css('display', 'block');
  winner = winner === player1 ? 'X':'O';
  winnerContainer.html(winner + "wins!")
}
