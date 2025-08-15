
function sumOfArray(arr) {
    let big = 0;
    if (Array.isArray(arr) == false) {
        return "Invalid";

    }
    for (const num of arr) {
        if (typeof num !== "number") {
            return "Invalid"
        }
        big = big + num
    }
    return big;
}
const allnumber = sumOfArray([3, 5, "ekso", 3]);
console.log(allnumber);

