import isArchitectureForGames, { generateYesOrNoAnswerRound } from '../index.js';

const gameInstructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function calculatePrimeNumber(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
const MAX_VALUE = 20;

const generateRound = () => generateYesOrNoAnswerRound(MAX_VALUE, calculatePrimeNumber);

const isCalculatePrimeNumberGame = () => isArchitectureForGames(gameInstructions, generateRound);

export default isCalculatePrimeNumberGame;
