function validContact(contact) {
    if (typeof conact !== "string") {
        return "Invalid";
    }
    if (contact.length != 11) {
        return false;
    }

    if (contact.startsWith("01") == false) {
        return false;
    }
    if (contact.includes(" ") == true) {
        return false;
    }
    return true;
}
console.log(validContact([]));