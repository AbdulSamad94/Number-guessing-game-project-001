#! /usr/bin/env node
import inquirer from "inquirer";
let target = Math.floor(Math.random() * 3 + 1);
let message = await inquirer.prompt([{
        message: "Select any one of the number",
        type: "list",
        name: "Num1",
        choices: ["1", "2", "3"]
    }]);
if (message.Num1 == target) {
    console.log("You are Correct");
}
else {
    console.log("Please! try again");
}
