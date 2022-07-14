import getRandomNum from '../helpers.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const startRound = () => {
  // Launch function that returns game data
  const getExpression = () => {
    const firstNumber = getRandomNum(1, 100);
    const secondNumber = getRandomNum(1, 100);
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
    return [oneQuestion, correctAnswer.toString(), gameDescription];
  };
  const dataArray = getExpression();
  // console.log(dataArray);
  return dataArray;
};

export default startRound;
