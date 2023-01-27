import lodash from 'lodash';
import gameHexlet from '../index.js';

const mainQuestion = 'What number is missing in the progression?';

function arithmeticPlusProgression() {
  const arr = [];
  const start = lodash.random(1, 10);
  const step = lodash.random(1, 10);
  const length = lodash.random(5, 10);
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
