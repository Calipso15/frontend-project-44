import returnBooleanValueOfFunc from '../index.js';
import getRandomInRange, { getRandomIndexInArray } from '../utils.js';

const gameInstruction = 'What is the result of the expression?';

function evaluateExpression(number1, number2, sign) {
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
}

const getRandomNumberOperator = () => {
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomIndexInArray(signs)];
  return sign;
};

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const gettingRandomOperator = getRandomNumberOperator();
  const question = `${number1} ${gettingRandomOperator} ${number2}`;
  const answer = String(evaluateExpression(number1, number2, gettingRandomOperator));
  return [question, answer];
};
const returnBoolValueOfCalcGame = () => returnBooleanValueOfFunc(gameInstruction, generateRound);

export default returnBoolValueOfCalcGame;
