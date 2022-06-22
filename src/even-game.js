/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import userName from './cli.js';

// Wait for user's response.
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// Function that starts a round
const startRound = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const userAsnwer = readlineSync.question('Your answer: ');

  const oddNum = randomNumber % 2;
  const isOdd = oddNum === 0 ? 'yes' : 'no';
  if (userAsnwer === isOdd) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAsnwer}' is wrong answer ;(. Correct answer was '${isOdd}'.
Let's try again, ${userName}!`);
  return false;
};

// Function that counts answers
const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default startGame();
