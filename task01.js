const numbers = [15, 30, 85, 60];

function allnumber(number) {
    const min = numbers[0];
    if (min < numbers) {
        min = numbers
    }
    return min;
}

const reguler = allnumber(numbers);
console.log(reguler);