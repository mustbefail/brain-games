export const isEven = (num) => num % 2 === 0;
export const translateToYesNo = (bool) => (bool ? 'yes' : 'no');

export const getRandomNumber = (range) => Math.floor(Math.random() * range + 1);

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
