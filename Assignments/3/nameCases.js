"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "ibrahim Muneer";
function nameCases() {
    var lowerCase = name.toLowerCase();
    var upperCase = name.toUpperCase();
    var titleCased = titleCase();
    return "Name in lower case: ".concat(lowerCase, "\nName in upper case: ").concat(upperCase, "\nName in title case: ").concat(titleCased);
}
;
function titleCase() {
    return name
        .toLowerCase() //Converting to lower case
        .split(' ') //Splitting name into parts: returns an array
        .map(function (nme) {
        return nme.charAt(0).toUpperCase() + nme.slice(1);
    }) /*  1. Loops over the array returned by the split method.
                2. gets first character of each element.
                3. converts the character to upper case
                4. slices each element of the array from 2nd character
                5. concatenates uppercased letter with sliced string
                6. returns new array*/
        .join(' '); // joins the returned array by map method and then the function is returning complete title cased name.
}
;
titleCase();
console.log(nameCases());
