import gameHexlet from '../index.js';

const mainQuestion = 'What is the result of the expression?';

function calculation(number1, number2, sign) {
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
      result = 'error';
  }
  return result;
}

const generateRound = () => {
  const number1 = Math.floor(Math.random() * (100 - 1)) + 1;
  const number2 = Math.floor(Math.random() * (100 - 1)) + 1;
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];
  const question = `${number1} ${sign} ${number2}`;
  const answer = String(calculation(number1, number2, sign));
  return [question, answer];
};
const calcGame = () => gameHexlet(mainQuestion, generateRound);

export default calcGame;
