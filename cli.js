#!/usr/bin/env node

import isHeroku from "is-heroku";
import process from "node:process";

if (!isHeroku) {
  process.exit(1);
}
