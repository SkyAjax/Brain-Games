#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import startRound from '../src/games/gcd-game.js';
import { startGame } from '../src/index.js';

// gameDescription('Find the greatest common divisor of given numbers.');
startGame(startRound);
