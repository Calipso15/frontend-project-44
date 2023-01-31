import runGame from '../index.js';
import { getRandomInRange } from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if ((num1 === 0) || (num2 === 0)) {
    return num1 + num2;
  }

  return getGCD(...(num1 > num2 ? [num1 % num2, num2] : [num1, num2 % num1]));
};
/* рекурсии, кстати, еще не было в программе, тяжело далось переписывание этой функции.
код красивее, конечно, но на мой взгляд, сложнее читается
*/

const generateRound = () => {
  const number1 = getRandomInRange(1, 30);
  const number2 = getRandomInRange(1, 30);
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  return [question, answer];
};
const runGСВGame = () => runGame(gameInstruction, generateRound);

export default runGСВGame;
