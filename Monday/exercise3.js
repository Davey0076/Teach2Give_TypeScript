"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example4 = exports.example3 = exports.example2 = exports.example1 = void 0;
exports.example1 = "Hello World!";
exports.example2 = 42;
//Type 'number' is not assignable to type 'string'.
exports.example3 = true;
//Type 'boolean' is not assignable to type 'string'.
exports.example4 = Symbol();
//Type 'symbol' is not assignable to type 'string'.
var example5 = 123n;
//Type 'bigint' is not assignable to type 'string'.
console.log(exports.example1);
console.log(exports.example2);
console.log(exports.example3);
console.log(exports.example4);
console.log(example5);
