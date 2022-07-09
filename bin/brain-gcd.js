#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import startRound from '../games/gcd-game.js';
import { gameDescription, startGame } from '../src/index.js';

gameDescription('Find the greatest common divisor of given numbers.');
startGame(startRound);
