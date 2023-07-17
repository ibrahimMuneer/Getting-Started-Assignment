const city_country = (city:string, country:string) => {
    return `"${city}, ${country}"`;
}

console.log(city_country("Medina", "Saudi Arabia"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));