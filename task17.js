function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            return "is FixxBuzz";
        }
        if (i % 3 === 0) {
            return "id Fizz";
        }
        else if (i % 5 === 0) {
            return "is Buzz";
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz(100);