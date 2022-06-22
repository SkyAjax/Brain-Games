/* eslint-disable no-console */
import readlineSync from 'readline-sync';

// Wait for user's response.
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);

export default userName;
