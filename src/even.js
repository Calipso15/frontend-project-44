import readlineSync from 'readline-sync';

const everOrOdd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`${'Question: '}${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer) === 'no') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!'`);
      break;
    } else if (number % 2 === 0 && answer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!'`);
      break;
    } else {
      console.log(`is wrong answer ;(. \nLet's try again, ${userName}!'`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
export default everOrOdd;
