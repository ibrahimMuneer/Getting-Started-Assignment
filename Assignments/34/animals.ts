const animals = ["dog", "wolf", "panther"];

for(let i = 0; i < animals.length; i++) {
    if(animals[i].toLowerCase() === "dog") {
        console.log(`A dog would make a great pet.`);
    } else if(animals[i].toLowerCase() === "panther") {
        console.log(`A black panther is the melanistic colour variant of the leopard and the jaguar`)
    } else if(animals[i].toLowerCase() === "wolf") {
        console.log(`The wolf, also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America`);
    }
};

console.log(`Among these animals only dog is the one most loyal to who ever has adopted it as a pet.`);

