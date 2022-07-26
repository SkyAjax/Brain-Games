import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (mathOperator, number1, number2) => {
  switch (mathOperator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return `Unexpected case of ${mathOperator}`;
  }
};

const generateRound = () => {
  const number1 = getRandomNum(0, 100);
  const number2 = getRandomNum(0, 100);
  const randomIndex = getRandomNum(0, operators.length - 1);
  const operator = operators[randomIndex];
  const correctAnswer = calculateExpression(operator, number1, number2);
  const question = `${number1} ${operators[randomIndex]} ${number2}`;
  return [question, correctAnswer.toString()];
};

const runCalcGame = () => {
  startGame(generateRound, description);
};

export default runCalcGame;
