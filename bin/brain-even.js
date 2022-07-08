#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import startRound from '../games/even-game.js';
import { gameDescription, startGame } from '../src/index.js';

gameDescription('Answer "yes" if the number is even, otherwise answer "no"');

startGame(startRound);
