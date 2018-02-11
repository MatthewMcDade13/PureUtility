"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_null_or_undefined_1 = require("./is-null-or-undefined");
/**
 * Takes adjacent duplicate values from array, given a start index
 *
 * @param arr Array to take from
 * @param index Starting index for array, algorithm will look forwards and backwards linearly
 * @param searchValue Value to compare against
 * @param objPropName Optional. Use if given array is an array of objects
 */
function takeSurroundingDuplicates(arr, index, search) {
    if (index < 0 || is_null_or_undefined_1.isNullOrUndefined(index))
        return [];
    var beginIndex = index;
    var endIndex = index;
    if (typeof search === "function") {
        while (arr[beginIndex - 1] && search(arr[beginIndex - 1]))
            beginIndex--;
        while (arr[endIndex + 1] && search(arr[endIndex + 1]))
            endIndex++;
    }
    else {
        while (arr[beginIndex - 1] && arr[beginIndex - 1] === search)
            beginIndex--;
        while (arr[endIndex + 1] && arr[endIndex + 1] === search)
            endIndex++;
    }
    return arr.slice(beginIndex, endIndex + 1);
}
exports.takeSurroundingDuplicates = takeSurroundingDuplicates;
