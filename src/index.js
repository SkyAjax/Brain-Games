import readlineSync from 'readline-sync';
import userName from './cli.js';

export const maxRounds = 3;

// Describe the game
export const gameDescription = (description) => {
  console.log(description);
};

export const getRandomNum = () => Math.floor(Math.random() * 10);

// Answer the question
export const oneRound = (question, answer) => {
  console.log(`Question: ${question}`);
  const userAsnwer = readlineSync.question('Your answer: ');

  if (Number(userAsnwer) === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAsnwer}' is wrong answer ;(. Correct answer was '${answer}'.
 Let's try again, ${userName}!`);
  return false;
};

export const runRounds = (round) => {
  for (let i = 0; i < maxRounds; i += 1) {
    if (round === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
