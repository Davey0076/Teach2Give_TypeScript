"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFormData = void 0;
var handleFormData = function (e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var value = Object.fromEntries(data.entries());
    return value;
};
exports.handleFormData = handleFormData;
