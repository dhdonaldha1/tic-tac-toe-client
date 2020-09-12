const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
console.log(data)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGame = function(event){
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // currentPlayer = 'X'
  // winner = 'O'
  // gameOver=false
  api.newGame(data)
  .then(ui.onNewGameSuccess)
  // .then(onGetStats())
  .catch(ui.onNewGameFailure)
}

const onReset = function(event){
  event.preventDefault()
  console.log('board is reset')
  $('.square').html('')

}
// const onGetStats = function (){
//   api.getStats()
//   .then(ui.onGetStatsSuccess)
//   .catch(ui.onGetStatsFailure)
// }
// const startGame = function()
// // const viewGames = function()
// let board = [ '','','','','','','','','']
// const isGameOver = function (gameBoard) {
//   if(isGameWin(gameBoard === true){
//     console.log(true)
//     return true
//   }else if (isGameWon(gameBoard) === false && gameBoard.filter(x => x === '').length ===0){
//     console.log(true)
//     return true
//   } else {
//     console.log(false)
//     return false
//   }
// }

// const gameWin = function (gameBoard){
//   if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== ''){
//     return true
//   } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== ''){
//     return true
//   } else if  (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== ''){
//     return true
//   } else if  (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== ''){
//     return true
//   } else if  (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== ''){
//     return true
//   } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== ''){
//     return true
//   } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== ''){
//     return true
//   } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== ''){
//     return true
//   } else {
//     return false
//   }
// }

// if (gameEnd){
//   return
// }else{
//
// }


module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,

  onNewGame: onNewGame,
  onReset: onReset,
}
