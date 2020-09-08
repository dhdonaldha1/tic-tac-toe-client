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
  $('.board').show()
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
store.user=response.user
  $('#sign-out-message').text('You have successfully signed out ' + response.user.email)
$('#sign-out-form').trigger('reset')
}
const onSignOutFailure = function(error) {
  console.log('not signed out')
  $('#sign-out-message').text('Sign out failed try again')
}


module.exports= {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,

}
