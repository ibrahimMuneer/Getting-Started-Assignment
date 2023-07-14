const current_users = ["Ibrahim", "Jhon", "trevor", "admin", "josh"];
const new_users = ["Ibrahim", "Jhon", "mohsin", "Farooq", "Jawad"];

function validate(curUsrs:string[], newUsrs:string[]) {
    let existingUsernames:string[] = curUsrs.map(user => {
        return user.toLowerCase();
    });
    newUsrs.map(user => {
        if(existingUsernames.indexOf(user.toLowerCase()) > 0) {
            console.log("Username not available.");
        } else {
            console.log("Username available, creating account.")
        }
    });
};

validate(current_users, new_users);