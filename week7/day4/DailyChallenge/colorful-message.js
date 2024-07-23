// require the chalk package and use it to create and display a colorful message in the terminal.

import chalk from "chalk";

export const colorfulText = (Text) => {
    console.log(chalk.blue(Text));
    console.log(chalk.yellow(Text));
}