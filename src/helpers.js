// Create random number between selected range
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const isEvenNum = (number) => number % 2 === 0;

export const generateExpression = (mathOperator, firstNumber, secondNumber) => {
  switch (mathOperator) {
    case 0:
      return firstNumber + secondNumber;
    case 1:
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

export const getCommonDivider = (firstNumber, secondNumber) => {
  let correctAnswer;
  for (let i = secondNumber; i > 0; i -= 1) {
    if (secondNumber % i === 0 && firstNumber % i === 0) {
      // console.log(`here is the ${firstNumber} ${secondNumber}`);
      correctAnswer = i;
      break;
    }
  }
  return correctAnswer;
};

export const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const getProgressionRow = (firstNumber) => {
  const progressionArray = [];
  for (let i = firstNumber; i <= 100; i += firstNumber) {
    if (progressionArray.length < 10) {
      progressionArray.push(i);
    }
  }
  return progressionArray;
};

export const getHiddenNum = (progression) => Math.floor(Math.random() * progression.length);

export const getFinalProgression = (number, progression) => {
  const finalProgression = progression;
  finalProgression[number] = '..';

  return finalProgression.join(' ');
};

export default getRandomNum;
