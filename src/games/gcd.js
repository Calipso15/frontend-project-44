import gameHexlet from '../index.js';

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const greatestСommonDivisor = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while ((num1 !== 0) && (num2 !== 0)) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const MAX_VALUE_OF_NUMBER = 100;

const generateRound = () => {
  const number1 = Math.floor(Math.random() * (MAX_VALUE_OF_NUMBER - 1)) + 1;
  const number2 = Math.floor(Math.random() * (MAX_VALUE_OF_NUMBER - 1)) + 1;
  const question = `${number1} ${number2}`;
  const answer = String(greatestСommonDivisor(number1, number2));
  return [question, answer];
};
const gcdGame = () => gameHexlet(mainQuestion, generateRound);

export default gcdGame;
