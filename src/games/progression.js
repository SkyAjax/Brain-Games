import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, rowLength) => {
  const progression = [];
  for (let i = firstNumber; i <= 100; i += step) {
    if (progression.length < rowLength) {
      progression.push(i);
    }
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomNum(1, 20);
  const progressionStep = getRandomNum(1, 20);
  const progressionLength = getRandomNum(5, 10);
  const progression = getProgression(firstNumber, progressionStep, progressionLength);
  const getHiddenNum = (row) => getRandomNum(0, row.length - 1);
  const hideNum = getHiddenNum(progression);
  const correctAnswer = progression[hideNum];
  progression[hideNum] = '..';

  return [progression.join(' '), correctAnswer.toString()];
};

const runProgressionGame = () => {
  startGame(generateRound, description);
};

export default runProgressionGame;
