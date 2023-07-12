const name:string = `ibrahim Muneer`;

function nameCases() {
    const lowerCase = name.toLowerCase();
    const upperCase = name.toUpperCase();
    return `Name in lower case: ${lowerCase}\nName in upper case: ${upperCase}`;
};

function titleCase() {
    let myString:string = name.toLowerCase();
    let myArr:string[] = myString.split(' ');
    let nameInitials:string[] = myArr.map(name => {
        return name[0].toUpperCase();
    });
    let titleCaseName = myArr.map(word=> {
        return word.split('');
    });
    let [a, b] = [...titleCaseName];
    console.log(a,b);
};

titleCase();

console.log(nameCases());


export{};