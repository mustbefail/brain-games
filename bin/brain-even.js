#!/usr/bin/env node

import even from '../src/even.js';
import cli from '../src/cli.js';

const userName = cli();
even(userName);
