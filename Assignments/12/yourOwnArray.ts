const myList = ["Range Rover Sport SVR", "Lexus LX600", "Toyota Landcruiser LC300", "Nissan GTR"];

const myStatements = ["My most favorite SUV is", "I would like to buy", "Most favorite everyday ride is", "would love to have a"];

let index = 0;

myStatements.map(statement => {
    console.log(`${statement} ${myList[index]}`);
    index++;
});

export{}