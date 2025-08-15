function willScoure(marks) {
    if (typeof marks == "string" || marks == "number") {
        return "Invalid";
    }
    if (marks < 50) {
        return "false";
    }
    if (marks > 50) {
        return "true";
    }
    if (marks > 49) {
        return "false";
    }
    else {
        return "true";
    }
    let passmark = 50;
    let failmark = 49;
}
console.log(willScoure([48, 48, 92, 100]));