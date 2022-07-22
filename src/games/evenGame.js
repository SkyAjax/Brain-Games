import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runEvenGame = () => {
  startGame(startRound, gameDescription);
};

export default runEvenGame;
