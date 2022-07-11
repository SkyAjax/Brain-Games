/* eslint-disable no-console */
import getRandomNum from '../src/helpers.js';

// Function that starts a round
const startRound = () => {
  const getExpression = () => {
    const randomNumber = getRandomNum(100);
    console.log(randomNumber);

    let correctAnswer;
    for (let i = randomNumber - 1; i >= 0; i -= 1) {
      if (randomNumber % i === 0 && randomNumber > 3) {
        correctAnswer = 'no';
        break;
      }
      correctAnswer = 'yes';
    }

    return [randomNumber, correctAnswer];
  };
  const dataArray = getExpression();
  return dataArray;
};

export default startRound;
