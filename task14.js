const numbers = [1, 2, 3, 4, 5, 5, 1, 6, 6];

const duplicate = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
});

console.log(duplicate);