const users = [];

function greeting(usrs:string[]) {
    if(usrs.length > 0) {
        usrs.map(user => {
            if(user === "admin") {
                console.log(`Hello ${user}, would you like to see a status report?`)
            } else {
                console.log(`Welcome ${user}, thank you for logging in again.`);
            }
        });
    } else {
        console.log("We need to find some users");
    }
};
greeting(users);