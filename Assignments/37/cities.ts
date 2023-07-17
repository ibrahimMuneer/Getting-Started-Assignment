const describe_city = (city:string, country:string = "Pakistan") => {
    return `${city} is in ${country}`;
};

console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Medina", "Saudi Arabia"));