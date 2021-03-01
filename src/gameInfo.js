export default (gameName) => {
  switch (gameName) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      break;
  }
};
