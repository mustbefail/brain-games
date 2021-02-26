#! /usr/bin/env node

import app from '../src/index.js';
import calc from '../src/games/calc.js';

const gameName = 'calc';

app(gameName, calc);
