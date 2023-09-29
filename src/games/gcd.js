import getRandomNum from '../random.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (firstNumber, secondNumber) => {
  const firstDivisorArr = [];
  const secondDivisorArr = [];
  const duplicates = [];

  for (let i = 1; i <= 10; i += 1) {
    if (firstNumber % i === 0) {
      firstDivisorArr.push(i);
    }
  }

  for (let i = 1; i <= 10; i += 1) {
    if (secondNumber % i === 0) {
      secondDivisorArr.push(i);
    }
  }

  for (let i = 0; i < firstDivisorArr.length; i += 1) {
    if (secondDivisorArr.includes(firstDivisorArr[i])) {
      duplicates.push(firstDivisorArr[i]);
    }
  }
  return Math.max(...duplicates);
};

const divisorGame = () => {
  const firstNumber = getRandomNum(1, 10);
  const secondNumber = getRandomNum(1, 10);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGreatestDivisor(firstNumber, secondNumber);
  return [question, answer];
};

const start = () => startGame(divisorGame, description);

export default start;
