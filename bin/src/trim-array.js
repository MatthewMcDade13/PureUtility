"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pair_1 = require("../types/pair");
/**
 * Trims false values from beginning and end of given array.
 * Returns shallow copy of given array with begin and end false values trimmed off.
 *
 * @param arr Array to trim
 * @param comparer Callback to determine what values should be trimmed.
 *                 Return true if given value should be trimmed, false if given value should be kept.
 *                 Defaults to trimming falsey values from array if not specified.
 */
exports.trimArray = function (arr, comparer) {
    if (comparer === void 0) { comparer = function (ele) { return !ele; }; }
    var indices = exports.getArrayBounds(arr, comparer);
    return arr.slice(indices.first, indices.second + 1);
};
/**
 * Gets the first and last index of given array with true values.
 * begin index is Pair.first, end index is Pair.second
 *
 * @param arr Array to find bounds of
 * @param comparer Callback to determine what values should be treated as false.
 *                 Return true if given value should be treated as false, false if given value should be kept.
 *                 Defaults to ignoring falsey values in array if not specified.
 */
exports.getArrayBounds = function (arr, comparer) {
    if (comparer === void 0) { comparer = function (ele) { return !ele; }; }
    var i = 0;
    var j = arr.length - 1;
    var foundBegin = false;
    var foundEnd = false;
    while (i <= j) {
        if (comparer(arr[i]))
            i++;
        else
            foundBegin = true;
        if (comparer(arr[j]))
            j--;
        else
            foundEnd = true;
        if (foundEnd && foundBegin)
            break;
    }
    return new pair_1.Pair(i, j);
};
