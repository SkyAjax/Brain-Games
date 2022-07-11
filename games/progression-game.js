/* eslint-disable no-console */
import getRandomNum from '../src/helpers.js';

const startRound = () => {
  const progressionRow = [];
  const getExpression = () => {
    const firstNum = getRandomNum(20);
    for (let i = firstNum; i < 100; i += firstNum) {
      if (progressionRow.length < 10) {
        progressionRow.push(i);
      }
    }
    // console.log('this is '+ arr.length);
    // console.log(progressionRow);
    const getHiddenNum = () => Math.floor(Math.random() * progressionRow.length);
    const hideNum = getHiddenNum();
    const correctAnswer = progressionRow[hideNum];
    progressionRow[hideNum] = '..';
    const finalProgression = progressionRow.join(' ');
    // console.log(oneQuestion, correctAnswer);
    return [finalProgression, correctAnswer];
  };
  const dataArray = getExpression();
  // console.log(dataArray);
  return dataArray;
};

export default startRound;
