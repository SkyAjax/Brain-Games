#!/usr/bin/env node

import startRound, { gameDescription } from '../src/games/prime-game.js';
import { startGame } from '../src/index.js';

startGame(startRound, gameDescription);
