import getRandomNum from '../random.js';
import startGame from '../index.js';

const arrOfOperators = ['-', '+', '*'];
const description = 'What is the result of the expression?';

const calc = (firstOperand, operator, secondOperand) => {
  let result;
  switch (operator) {
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  return result;
};

const calcGame = () => {
  const firstOperand = getRandomNum(1, 10);
  const secondOperand = getRandomNum(1, 10);
  const operator = arrOfOperators[getRandomNum(0, 2)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calc(firstOperand, operator, secondOperand);
  return [question, answer];
};

const start = () => startGame(calcGame, description);

export default start;
