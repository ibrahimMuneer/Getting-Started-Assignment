const myGuests = ["Irfan", "Hamid", "Daniyal"];
const invitations = [
    "You are cordially invited to a dinner party at my place. Join us for a night of great food and even better company.",
    "Lets celebrate the joy of togetherness with good food and great friends. Join us for a dinner party at our home.",
    "You are invited to a dinner party that promises to be an evening of delicious food, lively conversation, and wonderful company.",
    "Come join us for a night of laughter, great conversations, and mouth-watering dishes. We are hosting a dinner party and you are invited.",
    "Lets break bread together and celebrate the joy of togetherness. Join us for a dinner party at our place.",
    "We are hosting a dinner party and would be delighted if you could join us. Lets make it a night to remember.",
    "Come join us for a night of culinary delights and great conversation. We are hosting a dinner party and you are invited."
];

function greetings() {
    let index = 0;
    return invitations.map(greeting => {
        if(index < myGuests.length) {
            console.log(`Hello ${myGuests[index]}, ${greeting}`);
            index++;
        }
    });
};

greetings();

console.log(`Unfortunately Mr. ${myGuests[myGuests.length-1]} won't be able to join us in the evening.`);

myGuests.pop();

myGuests.push("Farooq");

greetings();

console.log(`Guys we have found a bigger dinner table therefore will be inviting more guests to the dinner!`);

myGuests.unshift("Jawad");
myGuests.splice(Math.ceil(myGuests.length/2), 0, "Mohsin");

/*As per instructions that we need to use append() method to add element at the end of the array, as per my
knowledge there isn't any method call append() for JS arrays instead we have push() method for that.
Kindly do correct me if I'm wrong when I upload my assignment.*/

myGuests.push("Hamza");

greetings();

console.log(`Sadly the new table delivery that we were expecting today has been delayed\ntherefore can only invite two guests only.`);

for(let i = 0; i < myGuests.length + 1; i++) {
    if(myGuests.length > 2) {
        console.log(`Sorry my friend ${myGuests.pop()}, we are unable to invite you for tonight's dinner.`);
    }
};

for(let i = 0; i < myGuests.length; i++) {
    console.log(`Hello ${myGuests[i]} you are still invited to the dinner tonight.`);
};

do {
    myGuests.shift();
} while (myGuests.length > 0);

console.log(myGuests);

export{};