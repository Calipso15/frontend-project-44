function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randArray(array) {
  return Math.floor(Math.random() * array.length);
}

export default getRandomInRange;
