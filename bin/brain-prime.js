#! /usr/bin/env node

import app from '../src/index.js';
import prime from '../src/games/prime.js';

const gameName = 'prime';

app(gameName, prime);
