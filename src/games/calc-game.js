import getRandomNum from '../helpers.js';

export const gameDescription = 'What is the result of the expression?';

// Get a round data
const startRound = () => {
  // Launch function that returns game data
  const getExpression = () => {
    const firstNumber = getRandomNum(0, 100);
    const secondNumber = getRandomNum(0, 100);

    const getRandomInt = Math.floor(Math.random() * 3);
    const typeOfMath = ['+', '-', '*'];
    const generateExpression = () => {
      if (getRandomInt === 0) {
        return firstNumber + secondNumber;
      } if (getRandomInt === 1) {
        return firstNumber - secondNumber;
      }
      return firstNumber * secondNumber;
    };
    const correctAnswer = generateExpression();
    const oneQuestion = `${firstNumber} ${typeOfMath[getRandomInt]} ${secondNumber}`;
    return [oneQuestion, correctAnswer.toString()];
  };
  const dataArray = getExpression();
  return dataArray;
};

export default startRound;
