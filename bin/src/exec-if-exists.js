"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_null_or_undefined_1 = require("./is-null-or-undefined");
/**
 * Executes a given function with params (if any) if the function that
 * is passed in is not null or undefined.
 * Also type checks that function is of function type at runtime.
 * --- Returns boolean if function was sucessfully executed or not ---
 *
 * @param func Function to be executed if exists
 * @param params parameters to pass to executing function
 */
exports.execIfExists = function (func) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    if (is_null_or_undefined_1.isNullOrUndefined(func))
        return false;
    if (typeof func === "function") {
        params.length > 0 ? func.call.apply(func, [null].concat(params)) : func();
        return true;
    }
    return false;
};
