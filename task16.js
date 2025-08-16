function longestString(names) {
    let longestWord = '';

    for (name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['SOhidul islam', 'Sohidul with sohid', 'akash', 'saad', 'daily']));