export let example1: string = "Hello World!";
export let example2: number = 42;
//Type 'number' is not assignable to type 'string'.
export let example3: boolean = true;
//Type 'boolean' is not assignable to type 'string'.
export let example4: symbol = Symbol();
//Type 'symbol' is not assignable to type 'string'.
export let example5: bigint = 123n;
//Type 'bigint' is not assignable to type 'string'.

console.log(example1)
console.log(example2)
console.log(example3)
console.log(example4)
console.log(example5)
