import readlineSync from 'readline-sync';
import { getRandomNumber } from '../helpers.js';

const progressionLength = 10;
const maxStep = 5;
const maxProgrStep = 50;
const maxSecretIdx = 10;

export default () => {
  const progressionArray = [];
  const progressionStep = getRandomNumber(maxStep);
  let progressionStart = getRandomNumber(maxProgrStep);
  const secretIndex = getRandomNumber(maxSecretIdx);

  for (let i = 0; i < progressionLength; i += 1, progressionStart += progressionStep) {
    progressionArray.push(progressionStart);
  }

  const correctAnswer = progressionArray[secretIndex];
  progressionArray[secretIndex] = '..';

  const question = progressionArray.join(' ');
  console.log(`Question: ${question}`);

  const userInput = readlineSync.question('Your answer: ');
  if (parseInt(userInput, 10) !== correctAnswer) {
    console.log(`${userInput} is wrong answer ;(.\nCorrect answer was ${correctAnswer}.`);
    return 'lose';
  }
  console.log('Correct!');
  return 'won';
};
