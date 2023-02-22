// 1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')

// 2do paso: crear las variables que necesitamos

const score = 20
const highscore = 0

// obtener un número aleatorio entre 1 y 20
const MIN_NUMBER = 1
const MAX_NUMBER = 20
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

const number = guessField.value

console.log(`El número secreto es ${secretNumber}`)
console.log(`El número ingresado es ${number}`)
