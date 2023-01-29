const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndexInArray = (array) => Math.floor(Math.random() * array.length);

export const generateDataForRound = (min, maxValueForRandomGen, checkQuestionStatment) => {
  const number = getRandomInRange(min, maxValueForRandomGen);
  const question = `${number}`;
  const answer = checkQuestionStatment(question) ? 'yes' : 'no';
  return [question, answer];
};

export default getRandomInRange;
