#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import startRound from '../src/games/progression-game.js';
import { gameDescription, startGame } from '../src/index.js';

gameDescription('What number is missing in the progression?');
startGame(startRound);
