import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (mathOperator, firstNumber, secondNumber) => {
  switch (mathOperator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return `Unexpected case of ${mathOperator}`;
  }
};

const startRound = () => {
  const firstNumber = getRandomNum(0, 100);
  const secondNumber = getRandomNum(0, 100);
  const randomIndex = getRandomNum(0, operators.length - 1);
  const operator = operators[randomIndex];
  const correctAnswer = calculateExpression(operator, firstNumber, secondNumber);
  const question = `${firstNumber} ${operators[randomIndex]} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

const runCalcGame = () => {
  startGame(startRound, gameDescription);
};

export default runCalcGame;
