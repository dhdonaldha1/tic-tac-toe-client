const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: "POST",
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: "POST",
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: "PATCH",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: "DELETE",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: "POST",
    data: data,
    headers: {Authorization: 'Bearer ' + store.user.token}
  })
}


// const gameOver = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/:over?',
//     method: "GET",
//     data: data,
//     headers: {Authorization: 'Bearer ' + store.user.token}
//   })
// }


// const getGame = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/:id',
//     method: "GET",
//     data: data,
//     headers: {Authorization: 'Bearer ' + store.user.token}
//   })
// }
//
// const updateGame = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/:id',
//     method: "PATCH",
//     headers: {Authorization: 'Bearer ' + store.user.token},
//     data: data
//   })



module.exports ={
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  newGame: newGame,
}
