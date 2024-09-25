import {Expect, Equal} from "@total-typescript/helpers";
export const add = (a: number, b: number) => {
    return a + b;
 // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
  };

const result = add(1, 2);

type test = Expect<Equal<typeof result, number>>;

console.log(result);

