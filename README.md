# Command Line Password Generator
a NodeJS password generator run in command line

## How to use
Install dependencies
```
npm install
```

To run the file form anywhere (create symlink)
```
npm link

# then you can run
passgen (option)

# to remove symlink
npm unlink
```

To run the file, type in below from your preferred command line
```
passgen (option)
```

## Options

| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
| -t    | --title  <title>  | password title/description      |
| -l    | --length <numbers>| length of password (default: 10)|
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |
