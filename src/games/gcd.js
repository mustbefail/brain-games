import readlineSync from 'readline-sync';
import { getRandomNumber } from '../helpers.js';

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

export default () => {
  const firstNumber = getRandomNumber(10);
  const secondNumber = getRandomNumber(10);
  const correctAnswer = gcd(firstNumber, secondNumber);

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const userInput = readlineSync.question('Your answer: ');

  if (parseInt(userInput, 10) !== correctAnswer) return 'lose';
  return 'won';
};
