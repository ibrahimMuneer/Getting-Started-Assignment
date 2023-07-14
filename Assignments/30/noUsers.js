var users = [];
function greeting(usrs) {
    if (usrs.length > 0) {
        usrs.map(function (user) {
            if (user === "admin") {
                console.log("Hello ".concat(user, ", would you like to see a status report?"));
            }
            else {
                console.log("Welcome ".concat(user, ", thank you for logging in again."));
            }
        });
    }
    else {
        console.log("We need to find some users");
    }
}
;
greeting(users);
