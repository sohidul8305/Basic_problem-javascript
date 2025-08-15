function countVowels(str) {
    let count = 0;
    if (typeof str !== "string") {
        return "Invalid";
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
        {

        }
    }
    return count;
}

let result = countVowels("8");
console.log(result);