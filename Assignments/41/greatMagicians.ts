const magicians:string[] = ["David Copperfield", "Doug Henning", "Siegfried and Roy"];


const show_magicians = (arr:string[]) => {
    return arr.map(name => {
        console.log(name);
    });
};

const make_great = (arr:string[]) => {
    for(let i = 0; i < arr.length; i++) {
        arr.splice(i, 1, `The great ${arr[i]}`);
    }
};

make_great(magicians);
show_magicians(magicians);