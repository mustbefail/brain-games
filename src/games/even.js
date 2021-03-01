import readlineSync from 'readline-sync';
import { isEven, translateToYesNo, getRandomNumber } from '../helpers.js';

export default () => {
  const maxNumber = 10;
  const randomNumber = getRandomNumber(maxNumber);

  console.log(`Question: ${randomNumber}`);

  const userInput = readlineSync.question('Your answer: ');
  const correctAnswer = translateToYesNo(isEven(randomNumber));

  if (userInput !== translateToYesNo(isEven(randomNumber))) {
    console.log(`${userInput} is wrong answer ;(.\nCorrect answer was ${correctAnswer}.`);
    return 'lose';
  }
  console.log('Correct!');
  return 'won';
};
