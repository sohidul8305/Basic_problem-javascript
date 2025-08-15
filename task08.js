function validperson(person1, person2) {
    if (typeof person1 !== "object" || typeofperson2 !== "object") {
        return "Invalid"
    }

    if (person1.gender == person2.gender) {
        return false;
    }
    if (person1.name == person2.name) {
        return false;
    }
    if (Math.abs(person1.age - person2) > 7) {
        return false;
    }
    return true;
}
console.log(validperson(

    1, { name: "joy", gender: "male", age: 21 }
)
);
