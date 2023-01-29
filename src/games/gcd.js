import returnBooleanValueOfFunc from '../index.js';
import getRandomInRange from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const lookingForCommonDivisor = (number1, number2) => {
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

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(lookingForCommonDivisor(number1, number2));
  return [question, answer];
};
const isCommoDivisorGame = () => returnBooleanValueOfFunc(gameInstruction, generateRound);

export default isCommoDivisorGame;
