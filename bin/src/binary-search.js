"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Binary search algorithm to find value in a given sorted array.
 * Returns index of found item, otherwise -1 if value is not found
 *
 * @param arr Array to be searched.
 * @param search Value to search or a callback to determine value to be searched in array,
 *  callback should return 0 if item is found, <0 if item is less than search value, or >0 if item is greater than search value.
 * @param left Beginning of where array will be searched. Defaults to 0
 * @param right End of where array will be searched. Defaults to end of given array.
 * @returns Index of found item, or -1 if not found
 */
function binarySearch(arr, search, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (right >= left) {
        var mid = Math.floor(left + (right - left) / 2);
        if (typeof search === "function") {
            if (search(arr[mid]) === 0)
                return mid;
            if (search(arr[mid]) < 0)
                return binarySearch(arr, search, mid + 1, right);
            return binarySearch(arr, search, left, mid - 1);
        }
        else {
            var predicate = function (ele) {
                return compareInequality(ele, search);
            };
            return binarySearch(arr, predicate, left, right);
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
/**
 * Compares two values for inequality.
 * Returns 0 if equal, -1 if item is less than search value, 1 if item is greater than search value
 *
 * @param item Item to be compared to search value
 * @param searchValue Value to be searched for
 */
function compareInequality(item, searchValue) {
    if (item === searchValue)
        return 0;
    if (item < searchValue)
        return -1;
    return 1;
}
exports.compareInequality = compareInequality;
