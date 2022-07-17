import getRandomNum, { generateExpression } from '../helpers.js';

export const gameDescription = 'What is the result of the expression?';

const startRound = () => {
  const firstNumber = getRandomNum(0, 100);
  const secondNumber = getRandomNum(0, 100);

  const getRandomInt = Math.floor(Math.random() * 3);
  const typeOfMath = ['+', '-', '*'];
  const correctAnswer = generateExpression(getRandomInt, firstNumber, secondNumber);
  const question = `${firstNumber} ${typeOfMath[getRandomInt]} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

export default startRound;
