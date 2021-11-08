#!/usr/bin/env node

import { LomCompiler } from "@opentech-ux/lom-compiler";
import { bold, green, red } from "chalk";
import clear from "clear";
import { Command, Option } from "commander";
import path from "path";

const program = new Command();

clear();

const sourceOption = new Option(
  "-s, --source [directory or file]",
  "Select the file from which create the simulation"
).default(".", "Gets all JSON files in the current directory");

const outputOption = new Option(
  "-o, --output [directory name]",
  "Folder name where to save the compilation result files"
).default("OpenTech-UX LOM Compiler");

program
  .version("1.0.0", "-v, --version", "Output the version number")
  .description("Compiler to generate playable HTML wireframe site from layout description model")
  .addOption(sourceOption)
  .addOption(outputOption)
  .parse();

const options = program.opts();

const main = () => {
  try {
    new LomCompiler().source(options.source).outputDir(options.output).compile();
    console.log(green("Success!"));
    console.log("Compilation files created at:");
    console.log(bold(path.join(process.cwd(), options.output)));
  } catch (error) {
    console.log(red(bold("ERROR!")));
    console.log("Compilation failed with the current message:");
    console.log(error);
  }
};

main();
