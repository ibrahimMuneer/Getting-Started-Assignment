const magicians:string[] = ["David Copperfield", "Doug Henning", "Siegfried and Roy"];


const show_magicians = (arr:string[]) => {
    arr.splice(0, 3, `the great ${}`);
    return arr;
}

console.log(show_magicians(magicians));
console.log(magicians);