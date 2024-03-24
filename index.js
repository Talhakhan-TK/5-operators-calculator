#! /usr/bin/env node
import inquirer from "inquirer";
let Answer = await inquirer.prompt([
    { message: "Enter first number", type: Number, name: "FirstNumber" },
    { message: "Enter second number", type: Number, name: "SecondNumber" },
    { message: "Chose operation to perform", type: "list", name: "operator", choices: ["Multiply", "Add", "Subtract", "Divide", "Power of first number"],
    },
]);
console.log("Your Answer is");
if (Answer.operator === "Multiply") {
    console.log(Answer.FirstNumber * Answer.SecondNumber);
}
else if (Answer.operator === "Add") {
    console.log(+Answer.FirstNumber + +Answer.SecondNumber);
}
else if (Answer.operator === "Subtract") {
    console.log(Answer.FirstNumber - Answer.SecondNumber);
}
else if (Answer.operator === "Divide") {
    console.log(Answer.FirstNumber / Answer.SecondNumber);
}
else if (Answer.operator === "Power of first number") {
    console.log(Answer.FirstNumber ** Answer.SecondNumber);
}
else {
    console.log("Please select the right operator");
}
