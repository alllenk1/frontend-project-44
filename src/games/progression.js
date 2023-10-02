import getRandomNum from '../random.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const findNumber = (arrOfNumbers, interval, skippedNum) => arrOfNumbers[skippedNum - 1] + interval;

const progressionGame = () => {
  const arrOfNumbers = [];
  const interval = getRandomNum(1, 10);
  const skippedNum = getRandomNum(1, 10);
  let numberOfProgression = getRandomNum(1, 10);

  for (let i = 0; i < 10; i += 1) {
    arrOfNumbers.push(numberOfProgression);
    numberOfProgression += interval;
  }

  arrOfNumbers[skippedNum] = '..';

  const question = arrOfNumbers.join(' ');
  const answer = findNumber(arrOfNumbers, interval, skippedNum);
  return [question, answer];
};

const start = () => startGame(progressionGame, description);

export default start;
