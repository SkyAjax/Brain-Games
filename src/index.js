import readlineSync from 'readline-sync';
import userName from './cli.js';

const startGame = (getRoundData, getGameDescription) => {
  const maxRoundsCount = 3;
  console.log(getGameDescription);
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const [roundQuestion, correctAnswer] = getRoundData();
    console.log(`Question: ${roundQuestion}`);

    const userAsnwer = readlineSync.question('Your answer: ');

    if (userAsnwer !== correctAnswer) {
      console.log(`'${userAsnwer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
