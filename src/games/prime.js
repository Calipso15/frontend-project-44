import gameHexlet, { generateYesOrNoAnswerRound } from '../index.js';

const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
const MAX_VALUE = 20;

const generateRound = () => generateYesOrNoAnswerRound(MAX_VALUE, isPrime);

const primeGame = () => gameHexlet(mainQuestion, generateRound);

export default primeGame;
