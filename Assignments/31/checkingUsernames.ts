const current_users = ["Ibrahim", "Jhon", "trevor", "admin", "josh"];
const new_users = ["Ibrahim", "Jhon", "mohsin", "Farooq", "Jawad"];

function validate(curUsrs:string[], newUsrs:string[]):string[] {
    let availableUsrNames:string[] = [];
    curUsrs.map((user, index) => {
        if(user.toLowerCase() === newUsrs[index].toLowerCase()) {
            console.log(`Username not available`);
        } else {
            availableUsrNames.push(newUsrs[index]);
        }
    })
    return availableUsrNames;
};

let usrNames = validate(current_users, new_users);

for(let i = 0; i < usrNames.length; i++){
    console.log(`Creating user ${usrNames[i]}`);
}