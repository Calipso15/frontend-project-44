import gameHexlet, { generateYesOrNoAnswerRound } from '../index.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const everOrOdd = (number) => number % 2 === 0;

const MAX_VALUE = 100;

const generateRound = () => generateYesOrNoAnswerRound(MAX_VALUE, everOrOdd);

const evenGame = () => gameHexlet(mainQuestion, generateRound);

export default evenGame;
