import getRandomNum, { getFinalProgression, getHiddenNum, getProgressionRow } from '../helpers.js';

export const gameDescription = 'What number is missing in the progression?';

const startRound = () => {
  const firstNumber = getRandomNum(1, 20);
  const progressionRow = getProgressionRow(firstNumber);
  const hideNum = getHiddenNum(progressionRow);
  const correctAnswer = progressionRow[hideNum];
  const finalProgression = getFinalProgression(hideNum, progressionRow);

  return [finalProgression, correctAnswer.toString()];
};

export default startRound;
