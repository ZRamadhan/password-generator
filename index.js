#!/usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

const log = console.log

program.version("1.0.0").description("Simple Password Generator");

program
    .option("-t , --title <title>", "password title/description")
    .option("-l, --length <number>", "length of password", "10")
    .option("-s, --save", "save password to password.txt")
    .option("-nn, --no-numbers", "remove numbers")
    .option("-ns , --no-symbols", "remove symbols")
    .parse();

const {length, save, numbers, symbols, title} = program.opts()

// get generated password
const generatedPassword = createPassword(length, numbers, symbols )

// save to a file
if(save) {
    savePassword(generatedPassword, title)
}

// copy to clipboard
clipboardy.writeSync(generatedPassword)

// output generated password
if(title !== '') {
    log(chalk.blueBright('Password for: ') + chalk.bold(title))
}
log(chalk.red('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellowBright('Password copied to clipboard '))