function car(manufacturer:string, model:string, ...args:string[]) {
    if(args.length > 0) {
        return {
            manufacturer,
            model,
            extraFeatures: [...args]
        }
    } else {
        return {
            manufacturer,
            model
        }
    }
};

console.log(car("nissan", "1987"));
console.log(car("nissan", "1987", "red", "sun roof"));



/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/