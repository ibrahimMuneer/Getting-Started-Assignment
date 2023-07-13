"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myGuests = ["Irfan", "Hamid", "Daniyal"];
var invitations = [
    "You are cordially invited to a dinner party at my place. Join us for a night of great food and even better company.",
    "Lets celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.",
    "You are invited to a dinner party that promises to be an evening of delicious food, lively conversation, and wonderful company."
];
function greetings() {
    var index = 0;
    return invitations.map(function (greeting) {
        console.log("Hello ".concat(myGuests[index], ", ").concat(greeting));
        index++;
    });
}
;
greetings();
console.log("Unfortunately Mr. ".concat(myGuests[myGuests.length - 1], " won't be able to join us in the evening."));
myGuests.pop();
myGuests.push("Farooq");
greetings();
