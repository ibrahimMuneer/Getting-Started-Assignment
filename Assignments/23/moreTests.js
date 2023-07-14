var a = 10;
var b = 10;
var c = "10";
var d = "IBRAHIM";
var myArr = ["Ibrahim"];
console.log("Is a = b ? | I predict true");
console.log(a === b);
console.log("Is a not = b ? | I predict false");
console.log(a != b);
console.log("Is IBRAHIM = ibrahim ? | I predict false");
console.log(d === "ibrahim");
console.log("Is a + b = b + a ? | I predict true");
console.log((a + b) === (b + a));
console.log("Is Ibrahim in array ? | I predict true");
for (var i = 0; i < d.length; i++) {
    if (myArr[i] === "Ibrahim")
        console.log(true);
}
