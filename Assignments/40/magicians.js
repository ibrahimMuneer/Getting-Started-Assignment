"use strict";
const magicians = ["David Copperfield", "Doug Henning", "Siegfried and Roy"];
const show_magicians = (arr) => {
    return arr.map(name => {
        console.log(name);
    });
};
show_magicians(magicians);
