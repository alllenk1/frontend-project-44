#!/usr/bin/env node

import readlineSync from 'readline-sync';

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  const getRandom = () => Math.floor(Math.random() * 10);
  let randomNum = getRandom();
  let score = 0;
  let wrongAnswer;
  let correctAnswer;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      score += 1;
    } else if (randomNum % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      score += 1;
    } else {
      wrongAnswer = answer;
      if (wrongAnswer === 'no') {
        correctAnswer = 'yes';
      } else {
        correctAnswer = 'no';
      }
      console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
      break;
    }
    randomNum = getRandom();
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
brainEvenGame();
