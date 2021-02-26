#! /usr/bin/env node

import app from '../src/index.js';
import gcd from '../src/games/gcd.js';

const gameName = 'gcd';

app(gameName, gcd);
