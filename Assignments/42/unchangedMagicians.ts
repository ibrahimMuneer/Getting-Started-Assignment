const magicians:string[] = ["David Copperfield", "Doug Henning", "Siegfried and Roy"];


const show_magicians = (arr:string[]) => {
    return arr.map(name => {
        console.log(name);
    });
};

const make_great = (arr:string[]) => {
    const newMagicians = arr.map(name => {
        return `The great ${name}`;
    });
    return newMagicians;
};

console.log(make_great(magicians));
show_magicians(magicians);