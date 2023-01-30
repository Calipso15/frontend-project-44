import runGame from '../index.js';
import { getRandomInRange, getRandomIndexInArray } from '../utils.js';

const gameInstruction = 'What is the result of the expression?';

const evaluateExpression = (number1, number2, sign) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${sign}'!`);
  }
};

const getRandomNumberOperator = () => {
  const signs = ['+', '-', '*'];
  return signs[getRandomIndexInArray(signs)];
};

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const gettingRandomOperator = getRandomNumberOperator();
  const question = `${number1} ${gettingRandomOperator} ${number2}`;
  const answer = String(evaluateExpression(number1, number2, gettingRandomOperator));
  return [question, answer];
};
const runCalcGame = () => runGame(gameInstruction, generateRound);

export default runCalcGame;
