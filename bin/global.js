#!/usr/bin/env node
const {changeColor}=require('../src/index.js');
const themeSelected = process.argv[2];
changeColor(themeSelected);