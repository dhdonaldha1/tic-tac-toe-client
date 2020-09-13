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
  .catch(ui.onNewGameFailure)
}

const gameOver = function(event){
  event.preventDefault()
console.log('game over message function')
}

const onUpdateGame = function(event){
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.updateGame(data)
  .then(ui.onUpdateGameSuccess)
  .catch(ui.onUpdateGameFailure)
}

const onViewGame = function(event){
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.viewGame(data)
  .then(ui.onViewGameSuccess)
  .catch(ui.onViewGameFailure)
}

const onReset = function(event){
  event.preventDefault()
  console.log('board is reset')
  $('.square').html('')

}





module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,

  onNewGame: onNewGame,
  onUpdateGame: onUpdateGame,
  onViewGame: onViewGame,
  onReset: onReset,
  gameOver: gameOver,
}
