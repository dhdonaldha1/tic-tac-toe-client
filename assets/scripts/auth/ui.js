const store =require ('./../store')
const onSignUpSuccess = function(response) {
console.log('YESSSS')
  $('#sign-up-message').text('Thanks for signing up ' + response.user.email)
$('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function(error) {
  console.log('oops i fked up somewhere')
  $('#sign-up-message').text('Sign up failed try again')
}



module.exports= {
  onSignUpSuccess,
  onSignUpFailure,

}
