import runGame from '../index.js';
import { generateDataForRound } from '../utils.js';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const MAX_VALUE = 100;
const MIN_VALUE = 1;

const generateRound = () => generateDataForRound(MIN_VALUE, MAX_VALUE, isEvenNumber);

const runEvenGame = () => runGame(gameInstruction, generateRound);

export default runEvenGame;
