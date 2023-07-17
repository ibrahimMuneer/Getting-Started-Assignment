var current_users = ["Ibrahim", "Jhon", "trevor", "admin", "josh"];
var new_users = ["Ibrahim", "Jhon", "mohsin", "Farooq", "Jawad"];
function validate(curUsrs, newUsrs) {
    var availableUsrNames = [];
    curUsrs.map(function (user, index) {
        if (user.toLowerCase() === newUsrs[index].toLowerCase()) {
            console.log("Username not available");
        }
        else {
            availableUsrNames.push(newUsrs[index]);
        }
    });
    return availableUsrNames;
}
;
var usrNames = validate(current_users, new_users);
for (var i = 0; i < usrNames.length; i++) {
    console.log("Creating user ".concat(usrNames[i]));
}
