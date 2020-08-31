'use strict'
const authEvents = require('./auth/events')

// $(() => {
//   // your JS code goes here
//   $('#change-password').hide()
// $('#sign-up-form').on('submit', authEvents.onSignUp)
// $('#sign-in-form').on('submit', authEvents.onSignIn)
// $('#change-password').on('submit', authEvents.onChangePass)
// })
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
})
