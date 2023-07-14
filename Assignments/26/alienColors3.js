var alien_color1 = "green";
var alien_color2 = "yellow";
var alien_color3 = "red";
function green(color) {
    var result = "";
    if (color === "green") {
        result = "You have earned 5 points";
    }
    else if (color === "yellow") {
        result = "You have earned 10 points";
    }
    else {
        result = "You have earned 15 points";
    }
    return result;
}
;
console.log(green(alien_color1));
console.log(green(alien_color2));
console.log(green(alien_color3));
