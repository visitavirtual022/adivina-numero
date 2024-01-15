// configurar la aplicación
const mensajeInicial = 'Empieza a adivinar...'
let score = 20
let highScore = 0
const secretNumber = Math.trunc(Math.random() * 20) + 1

// seleccionar elementos del DOM
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// inicializar la aplicación
messageField.textContent = mensajeInicial
scoreField.textContent = score
highScoreField.textContent = highScore

// funcionalidad de la aplicación

// addEventListener es una función que recibe
// como argumento otra función
checkButton.addEventListener('click', () => {
  // obtener el valor del input
  const guessNumber = Number(guessNumberField.value)
  if (guessNumber > secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = score
    messageField.textContent = 'Te has pasado'
  } else if (guessNumber < secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = score
    messageField.textContent = 'Te has quedado corto'
  } else {
    // ha ganado...
    // cambiar fondo de pantalla
    document.body.style.backgroundColor = '#60b347'
    messageField.textContent = '¡ Has acertado !'
    checkButton.ariaDisabled = true
    // mostrar el número secreto
    secretNumberField.textContent = secretNumber
    // actualizar el highScore
    if (score > highScore) {
      highScore = score
      highScoreField.textContent = highScore
    }
  }

  // compararlo con el secretNumber
})
againButton.addEventListener('click', () => {}

)