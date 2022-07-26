import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const description = 'Find the greatest common divisor of given numbers.';

const getCommonDivider = (firstNumber, secondNumber) => {
  let correctAnswer;
  for (let i = secondNumber; i > 0; i -= 1) {
    if (secondNumber % i === 0 && firstNumber % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  return correctAnswer;
};

const generateRound = () => {
  const firstNumber = getRandomNum(1, 100);
  const secondNumber = getRandomNum(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getCommonDivider(firstNumber, secondNumber);
  return [question, correctAnswer.toString()];
};

const runGcdGame = () => {
  startGame(generateRound, description);
};

export default runGcdGame;
