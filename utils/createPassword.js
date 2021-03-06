const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "|;:[]{}`~!@#$%^&*_-+=";

const createPassword = (
  length = "10",
  hasNumbers = true,
  hasSymbols = true
) => {
  let chars = alpha;
  hasNumbers ? (chars = chars + numbers) : "";
  hasSymbols ? (chars = chars + symbols) : "";
  return generatePassword(length, chars);
};

generatePassword = (length, chars) => {
  let password = "";

  for (let i = 0; i < length; i++) {
    password =
      password + chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

module.exports = createPassword;
