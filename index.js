import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let userfromcurrency = user_answer.from;
let usertocurrency = user_answer.to;
let fromamount = currency[userfromcurrency]; //exchange rate
let toamount = currency[usertocurrency]; //exchange rate
let amount = user_answer.amount;
let baseamount = amount / fromamount; //USD base currency   //4
let convertedamount = baseamount * toamount;
console.log(convertedamount);
