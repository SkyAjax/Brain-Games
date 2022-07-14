#!/usr/bin/env node

import startRound, { gameDescription } from '../src/games/calc-game.js';
import { startGame } from '../src/index.js';

startGame(startRound, gameDescription);
