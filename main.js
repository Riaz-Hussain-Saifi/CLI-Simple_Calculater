import inquirer from "inquirer";
import chalk from "chalk";
// let calculater: number;
let condition = true;
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "numberOne",
        message: "Enter a number: ",
    },
    {
        type: "input",
        name: "numberTwo",
        message: "Enter another number: ",
    },
    {
        type: "list",
        name: "operator",
        message: "Select an operator",
        choices: ["+", "-", "*", "/"],
    }
]);
let { numberOne, operator, numberTwo } = answer;
let result;
switch (answer.operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log(chalk.redBright("Invilled oprator"));
}
console.log(chalk.yellowBright(`${numberOne} ${operator} ${numberTwo} = ${result}`));
