"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var add = function (a, b) {
    return a + b;
    // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};
exports.add = add;
var result = (0, exports.add)(1, 2);
console.log(result);
