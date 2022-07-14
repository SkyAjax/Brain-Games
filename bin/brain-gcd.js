#!/usr/bin/env node

import startRound, { gameDescription } from '../src/games/gcd-game.js';
import { startGame } from '../src/index.js';

startGame(startRound, gameDescription);
