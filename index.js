#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter your User Id: ",
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your PIN: ",
        when(answers) {
            return answers.userId;
        },
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current Account", "Savings Account"],
        message: "Select your account type: ",
        when(answers) {
            return answers.userPin;
        },
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw Amount"],
        message: "Select your transaction method: ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000],
        message: "Choose the amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw Amount";
        },
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("Your remianing balance is: ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
