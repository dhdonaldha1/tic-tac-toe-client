const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signUp(data)
    // handle successul response
    .then(ui.onSignUpSuccess)
    // handle failed response
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onSignUp: onSignUp,
}
