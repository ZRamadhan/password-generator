const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password, title) => {
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 766, (e, id) => {
    fs.write(id, title + '= ' + password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.green("Password saved in to passgen folder passwords.txt"));
      });
    });
  });
};

module.exports = savePassword;
