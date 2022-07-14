// Create random number between selected range
function getRandomNum(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
export default getRandomNum;
