#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import startRound from '../games/prime-game.js';
import { gameDescription, startGame } from '../src/index.js';

gameDescription('Answer "yes" if given number is prime. Otherwise answer "no".');
startGame(startRound);
