import getRandomNum from '../helpers.js';

export const gameDescription = 'What number is missing in the progression?';

const startRound = () => {
  // Create empty array
  const progressionRow = [];
  // Launch function that returns game data
  const getExpression = () => {
    // Generate first number in array
    const firstNum = getRandomNum(1, 20);
    for (let i = firstNum; i <= 100; i += firstNum) {
      if (progressionRow.length < 10) {
        progressionRow.push(i);
      }
    }
    // console.log(progressionRow);
    // Hide random number
    const getHiddenNum = () => Math.floor(Math.random() * progressionRow.length);
    const hideNum = getHiddenNum();
    const correctAnswer = progressionRow[hideNum];
    progressionRow[hideNum] = '..';
    // Get final progression
    const finalProgression = progressionRow.join(' ');
    // console.log(oneQuestion, correctAnswer);
    return [finalProgression, correctAnswer.toString()];
  };
  const dataArray = getExpression();
  // console.log(dataArray);
  return dataArray;
};

export default startRound;
