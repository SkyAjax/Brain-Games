import getRandomNum, { isEvenNum } from '../helpers.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const startRound = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswer = isEvenNum(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default startRound;
