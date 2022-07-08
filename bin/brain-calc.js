#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
// import startRound from '../games/calc-game.js';
import startRound from '../games/calc-game.js';
import { gameDescription, startGame } from '../src/index.js';

gameDescription('What is the result of the expression?');
startGame(startRound);
