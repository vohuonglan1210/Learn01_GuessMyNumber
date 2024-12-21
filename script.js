'use strict';

let score;
let number;

function start() {
  number = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.secret-number').textContent = '?';
  score = document.querySelector('.score').textContent = 10;
  document.querySelector('.guess-input').value = '';
  document.querySelector('body').style.backgroundColor = '#FFFFEA';
  document.querySelector('.msg').textContent = 'Starting..';
}

const text = function (textGuess) {
  document.querySelector('.msg').textContent = textGuess;
  score--;
  if (score === 0) {
    document.querySelector('.msg').textContent = 'You lost the game!!!';
    document.querySelector('.secret-number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#FBE0E0';
  }
  document.querySelector('.score').textContent = score;
};

start();

document.querySelector('.check-btn').addEventListener('click', function () {
  if (score > 0) {
    const guess = Number(document.querySelector('.guess-input').value);

    if (!guess) {
      document.querySelector('.msg').textContent = 'No Number???';
    } else if (guess > number) {
      text('Too high!!!');
    } else if (guess < number) {
      text('Too low!!!');
    } else if (guess === number) {
      document.querySelector('.msg').textContent = 'Correct Number!!!';
      document.querySelector('.top-score').textContent = score;
      document.querySelector('.secret-number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#D7F9F8';
    }
  }
});

document.querySelector('.again-btn').addEventListener('click', function () {
  start();
});
