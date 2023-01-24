import gameHexlet from '../index.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const everOrOdd = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * (100 - 1)) + 1;
  const question = `${number}`;
  const answer = everOrOdd(question) ? 'yes' : 'no';
  return [question, answer];
};
const evenGame = () => gameHexlet(mainQuestion, generateRound);

export default evenGame;
