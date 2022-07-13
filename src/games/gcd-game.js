/* eslint-disable no-console */
import getRandomNum from '../helpers.js';

const startRound = () => {
  // Launch function that returns game data
  const getExpression = () => {
    const gameDescription = 'Find the greatest common divisor of given numbers.';
    const firstNumber = getRandomNum(100);
    const secondNumber = getRandomNum(100);
    const oneQuestion = `${firstNumber} ${secondNumber}`;

    let correctAnswer;
    for (let i = secondNumber; i > 0; i -= 1) {
      if (secondNumber % i === 0 && firstNumber % i === 0) {
        // console.log(`here is the ${firstNumber} ${secondNumber}`);
        correctAnswer = i;
        break;
      }
    }
    // console.log(oneQuestion, correctAnswer);
    return [oneQuestion, correctAnswer, gameDescription];
  };
  const dataArray = getExpression();
  // console.log(dataArray);
  return dataArray;
};

export default startRound;
