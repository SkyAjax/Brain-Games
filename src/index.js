import readlineSync from 'readline-sync';
import userName from './cli.js';

export const maxRounds = 3;

// Description of the game
export const gameDescription = (description) => {
  console.log(description);
};

// Game Engine
export const startGame = (round) => {
  for (let i = 0; i < maxRounds; i += 1) {
    const gameData = round();
    console.log(`Question: ${gameData[0]}`);

    const userAsnwer = readlineSync.question('Your answer: ');

    if (userAsnwer.toString() === gameData[1].toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAsnwer}' is wrong answer ;(. Correct answer was '${gameData[1]}'.
 Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
