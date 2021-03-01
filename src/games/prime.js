import readlineSync from 'readline-sync';

import { getRandomNumber, isPrime, translateToYesNo } from '../helpers.js';

export default () => {
  const number = getRandomNumber(100);
  const correctAnswer = translateToYesNo(isPrime(number));

  console.log(`Question: ${number}`);

  const userInput = readlineSync.question('Your answer: ');
  if (userInput !== correctAnswer) {
    console.log(`${userInput} is wrong answer ;(.\nCorrect answer was ${correctAnswer}.`);
    return 'lose';
  }
  console.log('Correct!');
  return 'won';
};
