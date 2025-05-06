// index.mjs o index.js (si tienes "type": "module" en package.json)
import chalk from 'chalk';

const themes = {
    hacker: chalk.bold.bgBlack.green,
    kitty: chalk.bold.bgWhite.hex('#ff69b4'), // rosa
    neon: chalk.bold.bgBlackBright.cyan,
    ocean: chalk.bold.bgBlue.white
};

function changeColor(themeSelected) {
    if (!themeSelected || !themes[themeSelected]) {
        console.log("Tema no encontrado");
        console.log(chalk.blue("Temas disponibles: "), Object.keys(themes).join(', '));
        process.exit(0);
    }
    console.log(themes[themeSelected]("tema aplicado: " + themeSelected));
}

export { changeColor };
