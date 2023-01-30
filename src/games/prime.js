import runGame from '../index.js';
import { generateDataForRound } from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const MAX_VALUE = 20;
const MIN_VALUE = 1;

const generateRound = () => generateDataForRound(MIN_VALUE, MAX_VALUE, isPrimeNumber);

const runPrimeGame = () => runGame(gameInstruction, generateRound);

export default runPrimeGame;
