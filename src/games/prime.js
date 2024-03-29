import getRandomNum from '../random.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNum) => {
  if (randomNum < 2) {
    return false;
  }

  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  const randomNum = getRandomNum(1, 20);
  const question = `${randomNum}`;
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const start = () => startGame(isPrimeGame, description);

export default start;
