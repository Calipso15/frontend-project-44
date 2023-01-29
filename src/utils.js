const getRandomInRange = (min, max) => {
  const formula = Math.floor(Math.random() * (max - min + 1)) + min;
  return formula;
};

export const getRandomIndexInArray = (array) => {
  const formula = Math.floor(Math.random() * array.length);
  return formula;
};

export const generateDataForRound = (min, maxValueForRandomGen, checkQuestionStatment) => {
  const number = getRandomInRange(min, maxValueForRandomGen);
  const question = `${number}`;
  const answer = checkQuestionStatment(question) ? 'yes' : 'no';
  return [question, answer];
};

export default getRandomInRange;
