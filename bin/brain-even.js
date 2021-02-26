#!/usr/bin/env node

import app from '../src/index.js';
import even from '../src/games/even.js';

const gameName = 'even';

app(gameName, even);
