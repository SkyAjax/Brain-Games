import getRandomNum from '../helpers.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

// Function that starts a round
const startRound = () => {
  const getExpression = () => {
    const randomNumber = getRandomNum(1, 100);
    const isEvenNum = (number) => number % 2 === 0;
    const correctAnswer = isEvenNum(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };
  const dataArray = getExpression();
  return dataArray;
};

export default startRound;
