var concatTwoStrings = function (a, b) {
    // Parameter 'b' implicitly has an 'any' type.
    // Parameter 'a' implicitly has an 'any' type.
    return [a, b].join(" ");
};
var concatResults = concatTwoStrings("Hello", "World");
console.log(concatResults);
