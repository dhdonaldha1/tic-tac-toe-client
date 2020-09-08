'use strict'
const authEvents = require('./auth/events')



$(() => {
  // $('#newGame').hide()
  // $('#signOut').hide()
  $('.board').hide()
$('#change-password').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})


//   $(".square").click(function(){
//     $(".square").text("X");
//
// });

// let sqr = $('.square');
// sqr.on('click', function(a){
// $('.square').text('X')
// })
//
// let sqr1 = $('.squareother');
// sqr1.on('click', function(b){
// $('.squareother').text('O')
// })

let player1= "X";
let player2= "O";
let turn=1;
let move=0;
let sqr= $('.square');
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
});

$('#signOut').on("click", function(e){

	location.reload();

});
