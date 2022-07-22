import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const randomNumber = getRandomNum(0, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runPrimeGame = () => {
  startGame(startRound, gameDescription);
};

export default runPrimeGame;
