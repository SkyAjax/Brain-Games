/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { startGame, userAsnwer } from '../src/index.js';

// Wait for user's response.
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
console.log(gameDescription);

// Function that starts a round
const startRound = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  userAsnwer();

  const oddNum = randomNumber % 2;
  const correctAnswer = oddNum === 0 ? 'yes' : 'no';
  const checkAnswer = () => {
    if (userAsnwer === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${userAsnwer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    return false;
  };
};

export default startGame();
