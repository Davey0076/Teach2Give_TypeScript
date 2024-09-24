export const add = (a: number, b: number) => {
    return a + b;
 // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
  };

const result = add(1, 2);

console.log(result);