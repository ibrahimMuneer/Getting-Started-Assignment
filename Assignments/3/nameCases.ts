const name:string = `ibrahim Muneer`;

function nameCases() {
    const lowerCase:string = name.toLowerCase();
    const upperCase:string = name.toUpperCase();
    const titleCased:string = titleCase();
    return `Name in lower case: ${lowerCase}\nName in upper case: ${upperCase}\nName in title case: ${titleCased}`;
};

function titleCase() {
    return name
    .toLowerCase()  //Converting to lower case
    .split(' ')     //Splitting name into parts: returns an array
    .map(nme => {
        return nme.charAt(0).toUpperCase() + nme.slice(1);
    })      /*  1. Loops over the array returned by the split method.
                2. gets first character of each element.
                3. converts the character to upper case
                4. slices each element of the array from 2nd character
                5. concatenates uppercased letter with sliced string
                6. returns new array*/
    .join(' '); // joins the returned array by map method and then the function is returning complete title cased name.
};

titleCase();

console.log(nameCases());


export{};