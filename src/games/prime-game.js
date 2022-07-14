import getRandomNum from '../helpers.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Function that starts a round
const startRound = () => {
  // Launch function that returns game data
  const getExpression = () => {
    const randomNumber = getRandomNum(1, 100);
    // console.log(randomNumber);
    let correctAnswer;

    if (randomNumber < 4) {
      correctAnswer = 'yes';
    }
    const isPrime = (number) => {
      for (let i = number - 1; i > 1; i -= 1) {
        if (number % i === 0) {
          correctAnswer = 'no';
          break;
        }
        correctAnswer = 'yes';
      }
    };
    isPrime(randomNumber);
    return [randomNumber, correctAnswer];
  };
  const dataArray = getExpression();
  return dataArray;
};

export default startRound;
