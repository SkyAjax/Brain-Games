import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runEvenGame = () => {
  startGame(generateRound, description);
};

export default runEvenGame;
