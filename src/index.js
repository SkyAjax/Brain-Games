import readlineSync from 'readline-sync';
import userName from './cli.js';

const startGame = (getRoundData, description) => {
  const maxRoundsCount = 3;
  console.log(description);
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const [roundQuestion, correctAnswer] = getRoundData();
    console.log(`Question: ${roundQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
