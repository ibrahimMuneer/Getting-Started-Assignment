let age = 13;

function checkAge():string {
    let message = "";
    if(age < 2) {
        message = "The person is a baby";
    } else if(age >= 64) {
        message = "The person is elder";
    } else if(age >= 2 && age < 4) {
        message = "The person is toddler";
    } else if(age >= 4 && age < 13) {
        message = "The person is kid";
    } else if(age >= 13 && age < 20) {
        message = "The person is teenager";
    } else if(age >= 20 && age < 65) {
        message = "The person is adult";
    }
    return message;
};

console.log(checkAge());


/*• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */