#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Welcome message
console.log(
  chalk.cyanBright(`\n\t\t Welcome to Saifi Developer's CLI Calculator`)
);
console.log(chalk.greenBright("*".repeat(66)));

console.log(
  chalk.yellow(
    `\n This is a simple CLI calculator that can perform addition, subtraction, multiplication and division \n`
  )
);

// Function to perform calculation
async function calculate() {
  const answer: {
    numberOne: number;
    numberTwo: number;
    operator: string;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "numberOne",
      message: "Enter the first number: ",
      validate: (value: string) => {
        const isValid = parseFloat(value);
        return isNaN(isValid) ? " Please enter a valid number." : true;
      },
    },
    {
      type: "input",
      name: "numberTwo",
      message: "Enter the second number: ",
      validate: (value: string) => {
        const isValid = parseFloat(value);
        return isNaN(isValid) ? " Please enter a valid number." : true;
      },
    },
    {
      type: "list",
      name: "operator",
      message: "Select an operator",
      choices: ["+", "-", "*", "/"],
    },
  ]);

  let { numberOne, operator, numberTwo } = answer;
  let result: number;

  // Performing calculation based on operator
  switch (answer.operator) {
    case "+":

      result = Number(numberOne) + Number(numberTwo);
      break;
    case "-":
      result = numberOne - numberTwo
      break;
    case "*":
      result = numberOne * numberTwo
      break;
    case "/":
      result = parseFloat((numberOne / numberTwo).toFixed(2));
      break;
    default:
      // Handling invalid operator
      console.log(chalk.redBright("\n\t Invalid operator\n"));
      process.exit(1); // Exiting with an error code
  }

  // Displaying the result
  console.log(
    chalk.yellowBright(
      `\n\t ${chalk.greenBright(numberOne)} ${chalk.blueBright(
        operator
      )} ${chalk.greenBright(numberTwo)} = ${result} \n`
    )
  );

  // Asking user if they want to calculate again
  let calculateAgain = await inquirer.prompt([
    {
      type: "confirm",
      name: "useAgain",
      message: "Do you want to calculate again?",
      default: false, // Default value is false
    },
  ]);

  if (calculateAgain.useAgain) {
    // If user selects yes, calculate again
    await calculate();
  } else {
    // If user selects no, exit
    console.log(chalk.redBright("\n\t Thank you for using our calculator\n"));
  }
}

// Starting the calculator
calculate();
