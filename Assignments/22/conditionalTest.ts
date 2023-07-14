let car = 'subaru';
let pet = "CAT";

console.log("Is car == 'Nissan'? I predict False.");
console.log(car === "Nissan");

console.log("Is car == 'Subaru'? I predict False.");
console.log(car === "Subaru");

console.log("Is car == 'SUBARU'? I predict False.");
console.log(car === "SUBARU");

console.log("Is car == 'SubarU'? I predict False.");
console.log(car === "SubarU");

console.log("Is type of pet == number? I predict False.");
console.log(typeof(pet) === "number");

console.log("Is pet == 'CAT'? I predict True.");
console.log(pet === "CAT");

console.log("Is pet == 'cat'? I predict True.");
console.log(pet.toLowerCase() === "cat");

//Can't think of any other test without being provided with test cases.