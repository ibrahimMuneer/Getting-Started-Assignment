"use strict";
const makeSandwich = (items) => {
    return `Your sandwich with ${items.map(item => { return item; })} is ready.`;
};
console.log(makeSandwich(["cheese", "tomato"]));
console.log(makeSandwich(["cheese"]));
console.log(makeSandwich(["cheese", "tomato", "onion", "egg"]));
