#!/usr/bin/env node

import readlineSync from 'readline-sync';

const brainCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  const getRandom = () => Math.floor(Math.random() * 10);
  let randomNum1 = getRandom();
  let randomNum2 = getRandom();
  const operator = ['+', '-', '*'];
  let score = 0;
  let calculation = 0;

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomOperatorIndex = Math.floor(Math.random() * 3);
    let randomOperator = operator[randomOperatorIndex];
    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');
    const answerInt = parseInt(answer, 10);

    switch (randomOperator) {
      case '+':
        calculation = randomNum1 + randomNum2;
        break;
      case '-':
        calculation = randomNum1 - randomNum2;
        break;
      case '*':
        calculation = randomNum1 * randomNum2;
        break;
      default:
        calculation = null;
    }

    if (calculation === answerInt) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answerInt}' is wrong answer ;(. Correct answer was '${calculation}'. \nLet's try again, ${name}!`);
      break;
    }
    randomNum1 = getRandom();
    randomNum2 = getRandom();
    randomOperator = operator[randomOperatorIndex];
  }

  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
brainCalcGame();
