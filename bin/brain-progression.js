#!/usr/bin/env node

import startRound, { gameDescription } from '../src/games/progression-game.js';
import { startGame } from '../src/index.js';

startGame(startRound, gameDescription);
