import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const translateToYesNo = (bool) => (bool ? 'yes' : 'no');

const getRandomNumber = () => Math.floor(Math.random() * 100);

export default (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let roundNumber = 0;
  while (roundNumber < 3) {
    const randomNumber = getRandomNumber();

    console.log(`Question: ${randomNumber}`);

    const userInput = readlineSync.question('Your answer: ');
    const correctAnswer = translateToYesNo(isEven(randomNumber));

    if (userInput === translateToYesNo(isEven(randomNumber))) {
      roundNumber += 1;
      console.log('Correct!');
    } else {
      console.log(`${userInput} is wrong answer ;(.
Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again, Bill!");
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
