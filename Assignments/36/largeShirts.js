"use strict";
const make_shirt = (size = "Large", text = "I love TypeScript") => {
    let myText = `The shirt is of ${size} size and the message printed on it is "${text}"`;
    return myText;
};
console.log(make_shirt());
console.log(make_shirt("Medium"));
console.log(make_shirt("Medium", "I have a hero I call him DAD!"));
