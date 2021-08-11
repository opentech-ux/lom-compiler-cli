#!/usr/bin/env node

//import {program} from "commander";

import chalk from "chalk";
import {program} from "commander";
import {clear} from "console";

const figlet = require('figlet');

clear();
console.log(chalk.red(figlet.textSync('pizza-cli', {horizontalLayout: 'full'})));

program
    .version('0.0.1')
    .description("An example CLI for ordering pizza's")
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq sauce')
    .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
    .option('-C, --no-cheese', 'You do not want any cheese')
    .parse();

console.log('you ordered a pizza with:');
console.log("peppers: ", program.getOptionValue("peppers")); // console.log('  - peppers');
console.log("pineapple: ", program.getOptionValue("pineapple")); // console.log('  - pineapple');
console.log("bbq: ", program.getOptionValue("bbq")); // console.log('  - bbq');
console.log("cheese: ", program.getOptionValue("cheese")); // ? 'marble' : program.getOptionValue("no-cheese") || 'no';
console.log("no-cheese: ", program.getOptionValue("no-cheese")); // ? 'marble' : program.getOptionValue("no-cheese") || 'no';
//console.log('  - %s cheese', cheese);
