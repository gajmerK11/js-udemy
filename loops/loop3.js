const prompt = require('prompt-sync')();

let teaCollection = [];
let askUser;
do {
    askUser = prompt("Enter your favorite tea:");
    if (askUser !== "stop") {
        teaCollection.push(askUser);
    }
} while(askUser !== "stop");
console.log(teaCollection);