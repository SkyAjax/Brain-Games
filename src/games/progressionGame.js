import getRandomNum from '../helpers.js';
import startGame from '../index.js';

export const gameDescription = 'What number is missing in the progression?';

const getProgressionRow = (firstNumber, step, rowLength) => {
  const progressionArray = [];
  for (let i = firstNumber; i <= 100; i += step) {
    if (progressionArray.length < rowLength) {
      progressionArray.push(i);
    }
  }
  return progressionArray;
};

const getHiddenNum = (progression) => getRandomNum(0, progression.length - 1);

const startRound = () => {
  const firstNumber = getRandomNum(1, 20);
  const progressionStep = getRandomNum(1, 20);
  const progressionLength = getRandomNum(5, 10);
  const progressionRow = getProgressionRow(firstNumber, progressionStep, progressionLength);
  const hideNum = getHiddenNum(progressionRow);
  const correctAnswer = progressionRow[hideNum];
  progressionRow[hideNum] = '..';

  return [progressionRow.join(' '), correctAnswer.toString()];
};

const runProgressionGame = () => {
  startGame(startRound, gameDescription);
};

export default runProgressionGame;
