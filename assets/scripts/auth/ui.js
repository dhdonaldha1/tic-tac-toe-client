const store =require ('./../store')

const onSignUpSuccess = function(response) {
console.log('YESSSS')
  $('#sign-up-message').text('Thanks for signing up ' + response.user.email)
$('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function(error) {
  console.log('oops')
  $('#sign-up-message').text('Sign up failed try again')
}

const onSignInSuccess = function(response) {
console.log('SIGNED IN')
store.user = response.user
  // $('.board').show()
  $('#signOut').show()
  $('#newGame').show()
  $('#sign-in-message').text('Thanks for signing in ' + response.user.email)
$('#sign-in-form').trigger('reset')
$('#change-password').show()
$('#sign-up-form').hide()
  $('#sign-in-form').hide()
}
const onSignInFailure = function(error) {
  console.log('failed sign in try again')
  $('#sign-in-message').text('Sign up failed try again')
}

const onChangePasswordSuccess = function(response) {

  $('#change-password-message').text('Password changed!!')
$('#change-password').trigger('reset')
}
const onChangePasswordFailure = function(error) {
  $('#change-password-message').text('Password change failed try again!')
}

const onSignOutSuccess = function(response) {
console.log('signed out')
  $('#sign-out-message').text('You have successfully signed out ' + store.user.email)
$('#sign-out-form').trigger('reset')
}
const onSignOutFailure = function(error) {
  console.log('not signed out')
  $('#sign-out-message').text('Sign out failed try again')
}
 const onNewGameSuccess = function(response) {
   console.log('started new game')
   $('#new-game-message').text('You have started a new game ')
   $('#new-game').trigger('reset')
 }
 const onNewGameFailure = function(error){
   console.log('failed to start new game')
    $('#new-game-message').text('failed to start new game?')
 }
 const onUpdateGameSuccess = function(response) {
   console.log('someones turn')
   $('#update-game-message').text('It is your turn')
   $('#update-game').trigger('reset')
 }
 const onUpdateGameFailure = function(error){
   console.log('no ones turn')
    $('#update-game-message').text('Invalid Move, try again')
 }

 const onViewGameSuccess = function(response) {
   console.log('games are shown')
   $('#view-game-message').text('Games played ... ')
   $('#view-game').trigger('reset')
 }
 const onViewGameFailure = function(error){
   console.log('cannot find games')
    $('#view-game-message').text('no games played')
 }

// const onGetStatsSuccess = function(res){
//   $('#game-history-message').text('You have played ${res.games.length} games!')
//   console.log('viewed games successfully')
// }
// const onGetStatsFailure = function(err){
//   console.log('cant view games')
// }

module.exports= {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onViewGameSuccess,
  onViewGameFailure,
  // onGetStatsSuccess,
  // onGetStatsFailure,

}
