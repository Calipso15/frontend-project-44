import lodash from 'lodash';
import gameHexlet from '../index.js';

const mainQuestion = 'What number is missing in the progression?';

const MAX_VALUE_OF_START = 10;
const MAX_VALUE_OF_STEP = 10;
const MIN_VALUE_OF_SEQUENCE_LENGTH = 5;
const MAX_VALUE_OF_SEQUENCE_LENGTH = 10;

function arithmeticPlusProgression() {
  const arr = [];
  const start = lodash.random(1, MAX_VALUE_OF_START);
  const step = lodash.random(1, MAX_VALUE_OF_STEP);
  const length = lodash.random(MIN_VALUE_OF_SEQUENCE_LENGTH, MAX_VALUE_OF_SEQUENCE_LENGTH);
  for (let i = 0; i <= length * step; i += step) {
    arr.push(start + i);
  }
  const clone = arr.slice(0);
  const index = lodash.random(0, arr.length - 1);
  const answer1 = String(clone[index]);
  clone.splice(index, 1, '..');
  return [String(clone.join(' ')), answer1];
}

const generateRound = () => {
  const [question, answer] = arithmeticPlusProgression();
  return [question, answer];
};
const progressionGame = () => gameHexlet(mainQuestion, generateRound);

export default progressionGame;
