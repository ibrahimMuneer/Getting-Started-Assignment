let myArr = [21, 25, 27, 29, 32, 32, 34, 40];
// [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 32, 33, 34, 35, 36, 37, 38, 39, 40]

let findIndex = (arr: number[]) => {
    let ind: number[] = [];
    let diff: number;
    let count = 0;
    myArr.map((num, i) => {
        if(arr[i + 1]) {
            diff = (arr[i + 1] - num) - 1;
            if(diff > 0) {
                for(let x = 1; x <= diff; x++) {
                    ind.push(count + x);
                }
            }
            count = ind[ind.length - 1] + 1;
        };
    });
    return `Missing numbers indexes are ${ind}`;
};

console.log(findIndex(myArr));