import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const gameHexlet = (mainQuestion, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(mainQuestion);
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
      break;
    }
    if (i === ROUNDS_COUNT - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export const generateYesOrNoAnswerRound = (maxValueForRandomGen, checkQuestionStatment) => {
  const number = Math.floor(Math.random() * (maxValueForRandomGen - 1)) + 1;
  const question = `${number}`;
  const answer = checkQuestionStatment(question) ? 'yes' : 'no';
  return [question, answer];
};

export default gameHexlet;
