import isArchitectureForGames, { generateYesOrNoAnswerRound } from '../index.js';

const gameInstructions = 'Answer "yes" if the number is even, otherwise answer "no".';

const countEvenOrOddNumber = (number) => number % 2 === 0;

const MAX_VALUE = 100;

const generateRound = () => generateYesOrNoAnswerRound(MAX_VALUE, countEvenOrOddNumber);

const IsEvenOrOddNumberGame = () => isArchitectureForGames(gameInstructions, generateRound);

export default IsEvenOrOddNumberGame;
