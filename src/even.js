import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const toYesNoTranslate = (bool) => (bool ? 'yes' : 'no');

const randomNumber = () => Math.floor(Math.random() * 10);

export default (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let roundNumber = 0;
  while (roundNumber < 3) {
    const rNumber = randomNumber();
    console.log(`Question: ${rNumber}`);
    const userInput = readlineSync.question('Your answer: ');
    const correctAnswer = toYesNoTranslate(isEven(rNumber));

    if (userInput === toYesNoTranslate(isEven(rNumber))) {
      roundNumber += 1;
      console.log('Correct!');
    } else {
      console.log(`${userInput} is wrong answer ;(.
        Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again, Bill!");
    }
  }
  console.log(`Congratulations, ${userName}`);
};
