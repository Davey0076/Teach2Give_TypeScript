const concatTwoStrings = (a: string, b: string) => {
   // Parameter 'b' implicitly has an 'any' type.
   // Parameter 'a' implicitly has an 'any' type.
      return [a, b].join(" ");
};

const concatResults = concatTwoStrings("Hello", "World");

console.log(concatResults);