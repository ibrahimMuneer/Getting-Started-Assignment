"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Ibrahim";
var message = "Hello ".concat(name, ", would you like to learn some TypeScript today?");
console.log(message);
/*
I have used empty export as a workaround because without using export{}
It gives error when I set name variable as TypeScript uses the DOM typings
for the global execution environment which is also showed in the following lines

Cannot redeclare block-scoped variable 'name'.ts(2451)
lib.dom.d.ts(27029, 15): 'name' was also declared here.

*/ 
