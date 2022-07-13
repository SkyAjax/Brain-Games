/* eslint-disable no-console */
import getRandomNum from '../src/helpers.js';

const startRound = () => {
  // Create empty array
  const progressionRow = [];
  // Launch function that returns game data
  const getExpression = () => {
    // Generate first number in array
    const firstNum = getRandomNum(20);
    for (let i = firstNum; i < 100; i += firstNum) {
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
    return [finalProgression, correctAnswer];
  };
  const dataArray = getExpression();
  // console.log(dataArray);
  return dataArray;
};

export default startRound;
