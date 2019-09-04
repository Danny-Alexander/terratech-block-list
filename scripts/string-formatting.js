//https://repl.it/@jafkoop/Capitalize-first-letter-of-every-word-using-regex
function upperCase(str) {
    return str.toUpperCase();
}
function titleCase(str) {
    let firstLetterRx = /(^|\s)[a-z]/g;
    return str.replace(firstLetterRx, upperCase);
}

function everythingFollowingLastDot(str) {
    let i = str.lastIndexOf('.');
    return (i != -1)
        ? str.substr(i + 1)
        : str
}

// Return a human readable title given a data path
// e.g
// return "Damage Per Second"
// when data = "ModuleDrill.damage_per_second"
function columnTitleFromDataPath(data) {
    let title = everythingFollowingLastDot(data);
    title = title.replace(/_/g, " ");
    title = titleCase(title);
    return title
}