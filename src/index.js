import readlineSync from 'readline-sync';
import userName from './cli.js';

export const maxRoundsCount = 3;

export const getGameDescription = (description) => {
  console.log(description);
};

// Game Engine
export const startGame = (round, description) => {
  getGameDescription(description);
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const [roundQuestion, correctAnswer] = round();
    console.log(`Question: ${roundQuestion}`);

    const userAsnwer = readlineSync.question('Your answer: ');

    if (userAsnwer !== correctAnswer) {
      console.log(`'${userAsnwer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
 Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
