import getRandomInRange from '../utils.js';
import runGame from '../index.js';

const gameInstruction = 'What number is missing in the progression?';

const generateArithmeticSequence = (start, step, length) => {
  const arr = [];
  for (let i = 0; i <= length * step; i += step) {
    arr.push(start + i);
  }
  return arr;
};

const generateRound = () => {
  const start = getRandomInRange(1, 10);
  const step = getRandomInRange(1, 10);
  const length = getRandomInRange(5, 10);
  const progression = generateArithmeticSequence(start, step, length);
  const randomIndex = getRandomInRange(1, generateArithmeticSequence.length - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const answer = String(correctAnswer);
  return [question, answer];
};
const runProgressionGame = () => runGame(gameInstruction, generateRound);

export default runProgressionGame;
