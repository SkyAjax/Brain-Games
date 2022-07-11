/* eslint-disable no-console */
import getRandomNum from '../src/helpers.js';

// Get a round data
const startRound = () => {
  const getExpression = () => {
    const firstNumber = getRandomNum(100);
    const secondNumber = getRandomNum(100);

    const getRandomInt = Math.floor(Math.random() * 3);
    const typeOfMath = ['+', '-', '*'];
    let correctAnswer;

    if (getRandomInt === 0) {
      correctAnswer = firstNumber + secondNumber;
    } else if (getRandomInt === 1) {
      correctAnswer = firstNumber - secondNumber;
    } else {
      correctAnswer = firstNumber * secondNumber;
    }
    const oneQuestion = `${firstNumber} ${typeOfMath[getRandomInt]} ${secondNumber}`;
    return [oneQuestion, correctAnswer];
  };
  const dataArray = getExpression();
  return dataArray;
};

export default startRound;
