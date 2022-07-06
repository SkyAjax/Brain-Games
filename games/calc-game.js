/* eslint-disable no-console */
import { gameDescription, getRandomNum, oneRound, runRounds } from '../src/index.js';

// Wait for user's response.
gameDescription('What is the result of the expression?');

let correctAnswer;

// Function that starts a round
const startRound = () => {
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();

  // console.log(`${firstNumber} ${secondNumber}`);
  const getRandomInt = Math.floor(Math.random() * 3);
  const typeOfMath = ['+', '-', '*'];

  if (getRandomInt === 0) {
    correctAnswer = firstNumber + secondNumber;
  } else if (getRandomInt === 1) {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }
  const oneQuestion = `${firstNumber} ${typeOfMath[getRandomInt]} ${secondNumber}`;
  oneRound(oneQuestion, correctAnswer);
};

runRounds(startRound());
