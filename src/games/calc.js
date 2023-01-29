import isArchitectureForGames from '../index.js';
import getRandomInRange, { randArray } from '../utils.js';

const gameInstructions = 'What is the result of the expression?';

function evaluateExpression(number1, number2, sign) {
  let result;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Unknown order state: '${sign}'!`);
  }
  return result;
}

const generateRound = () => {
  const number1 = getRandomInRange(100, 1);
  const number2 = getRandomInRange(100, 1);
  const signs = ['+', '-', '*'];
  const sign = signs[randArray(signs)];
  const question = `${number1} ${sign} ${number2}`;
  const answer = String(evaluateExpression(number1, number2, sign));
  return [question, answer];
};
const isGameCalculateExpression = () => isArchitectureForGames(gameInstructions, generateRound);

export default isGameCalculateExpression;
