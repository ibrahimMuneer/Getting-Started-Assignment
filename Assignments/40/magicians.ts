const magicians:string[] = ["David Copperfield", "Doug Henning", "Siegfried and Roy"];


const show_magicians = (arr:string[]) => {
    return arr.map(name => {
        console.log(name);
    });
}

show_magicians(magicians);