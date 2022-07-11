/* eslint-disable no-console */
import getRandomNum from '../src/helpers.js';

// Function that starts a round
const startRound = () => {
  const getExpression = () => {
    const randomNumber = getRandomNum(100);
    const oddNum = randomNumber % 2;
    const correctAnswer = oddNum === 0 ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };
  const dataArray = getExpression();
  return dataArray;
};

export default startRound;
