import readlineSync from 'readline-sync';
import { getRandomNumber } from '../helpers.js';

export default () => {
  const maxNumber = 10;
  const operators = ['+', '-', '*'];
  const opCounts = operators.length;
  const opIndex = getRandomNumber(opCounts - 1);
  const operator = operators[opIndex];
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  let correctAnswer = 0;
  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);

  switch (operator) {
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  const userInput = readlineSync.question('Your answer: ');

  if (parseInt(userInput, 10) !== correctAnswer) return 'lose';

  return 'won';
};
