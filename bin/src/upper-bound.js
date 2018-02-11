"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_search_1 = require("./binary-search");
/**
 * Binary search algorithm to find the last value in a given sorted array.
 * Returns index of found item, otherwise -1 if value is not found
 *
 * @param arr Array to be searched.
 * @param search Value to search or a callback to determine value to be searched in array,
 *  callback should return 0 if item is found, <0 if item is less than search value, or >0 if item is greater than search value.
 * @param left Beginning of where array will be searched. Defaults to 0
 * @param right End of where array will be searched. Defaults to end of given array.
 * @param size Size of the array
 */
// tslint:disable-next-line:max-line-length
function upperBound(arr, search, left, right, size) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (size === void 0) { size = arr.length; }
    if (right >= left) {
        var mid = Math.floor(left + (right - left) / 2);
        if (typeof search === "function") {
            if ((mid === size - 1 || search(arr[mid + 1]) > 0) && search(arr[mid]) === 0)
                return mid;
            if (search(arr[mid]) > 0)
                return upperBound(arr, search, left, mid - 1, size);
            return upperBound(arr, search, mid + 1, right, size);
        }
        else {
            var predicate = function (ele) {
                return binary_search_1.compareInequality(ele, search);
            };
            return upperBound(arr, predicate, left, right, size);
        }
    }
    return -1;
}
exports.upperBound = upperBound;
