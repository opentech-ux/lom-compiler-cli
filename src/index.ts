#!/usr/bin/env node

import clear from "clear";
import { Command } from "commander";

const program = new Command();

clear();

program
  .version("0.0.0", "-v, --version", "Output the version number")
  .description("Compiler to generate playable HTML wireframe site from layout description model")
  .option(
    "-s, --source [directory or file]",
    "Select the file from which create the simulation",
    "./**.json"
  )
  .option(
    "-o, --output [directory name]",
    "Folder name where to save the compilation result files",
    "lom-compiler"
  )
  .parse();

console.log(program.opts());
