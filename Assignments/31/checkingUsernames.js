var current_users = ["Ibrahim", "Jhon", "trevor", "admin", "josh"];
var new_users = ["Ibrahim", "Jhon", "mohsin", "Farooq", "Jawad"];
function validate(curUsrs, newUsrs) {
    var existingUsernames = curUsrs.map(function (user) {
        return user.toLowerCase();
    });
    newUsrs.map(function (user) {
        if (existingUsernames.indexOf(user.toLowerCase()) > 0) {
            console.log("Username not available.");
        }
        else {
            console.log("Username available, creating account.");
        }
    });
}
;
validate(current_users, new_users);
