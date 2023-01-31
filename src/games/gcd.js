import runGame from '../index.js';
import { getRandomInRange } from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const remainder = num1 % num2;

  if (remainder === 0) {
    return num2;
  }

  return getGCD(num2, remainder);
};

const generateRound = () => {
  const number1 = getRandomInRange(1, 30);
  const number2 = getRandomInRange(1, 30);
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  return [question, answer];
};
const runGСВGame = () => runGame(gameInstruction, generateRound);

export default runGСВGame;
