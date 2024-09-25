import { Expect, Equal } from "@total-typescript/helpers"

const setRange = (range: [number, number]) => {
    const x = range[0];
    const y = range[1];
  
    // Do something with x and y in here
    // x and y should both be numbers!
  
    type tests = [
      Expect<Equal<typeof x, number>>,
  //Type 'false' does not satisfy the constraint 'true'.
      Expect<Equal<typeof y, number>>,
 // Type 'false' does not satisfy the constraint 'true'.
    ];
  };