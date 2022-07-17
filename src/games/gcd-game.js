import getRandomNum, { getCommonDivider } from '../helpers.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const startRound = () => {
  const firstNumber = getRandomNum(1, 100);
  const secondNumber = getRandomNum(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getCommonDivider(firstNumber, secondNumber);
  // console.log(oneQuestion, correctAnswer);
  return [question, correctAnswer.toString()];
};

export default startRound;
