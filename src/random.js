#!/usr/bin/env node

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default getRandomNum;
