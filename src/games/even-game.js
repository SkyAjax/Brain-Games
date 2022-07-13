/* eslint-disable no-console */
import getRandomNum from '../src/helpers.js';

// Function that starts a round
const startRound = () => {
  const getExpression = () => {
    const randomNumber = getRandomNum(100);
    const isEvenNum = (number) => number % 2 === 0;
    const correctAnswer = isEvenNum(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };
  const dataArray = getExpression();
  return dataArray;
};

export default startRound;
