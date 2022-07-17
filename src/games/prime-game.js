import getRandomNum, { isPrime } from '../helpers.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startRound = () => {
  const randomNumber = getRandomNum(2, 100);
  // console.log(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default startRound;
