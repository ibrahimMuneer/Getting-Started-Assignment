"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var name = "ibrahim Muneer";
function nameCases() {
    var lowerCase = name.toLowerCase();
    var upperCase = name.toUpperCase();
    return "Name in lower case: ".concat(lowerCase, "\nName in upper case: ").concat(upperCase);
}
;
function titleCase() {
    var myString = name.toLowerCase();
    var myArr = myString.split(' ');
    var nameInitials = myArr.map(function (name) {
        return name[0].toUpperCase();
    });
    var titleCaseName = myArr.map(function (word) {
        return word.split('');
    });
    var _a = __spreadArray([], titleCaseName, true), a = _a[0], b = _a[1];
    console.log(a, b);
}
;
titleCase();
console.log(nameCases());
