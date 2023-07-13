"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myList = ["Range Rover Sport SVR", "Lexus LX600", "Toyota Landcruiser LC300", "Nissan GTR"];
var myStatements = ["My most favorite SUV is", "I would like to buy", "Most favorite everyday ride is", "would love to have a"];
var index = 0;
myStatements.map(function (statement) {
    console.log("".concat(statement, " ").concat(myList[index]));
    index++;
});
