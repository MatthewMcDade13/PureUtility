"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_search_1 = require("./binary-search");
var lower_bound_1 = require("./lower-bound");
var upper_bound_1 = require("./upper-bound");
/**
 * Uses binary search lowerbound and upperbound functions to find start and ending of
 * range of like values then returns a shallow copy of them
 *
 * @param arr Array to take from
 * @param search predicate used for searching sorted array or primitive value to use to search array.
 */
function takeSortedRange(arr, search) {
    if (typeof search === "function") {
        var lowerIndex = lower_bound_1.lowerBound(arr, search);
        if (lowerIndex === -1)
            return [];
        var upperIndex = upper_bound_1.upperBound(arr, search);
        if (upperIndex === -1)
            return [];
        return arr.slice(lowerIndex, upperIndex + 1);
    }
    else {
        var predicate = function (ele) {
            return binary_search_1.compareInequality(ele, search);
        };
        return takeSortedRange(arr, predicate);
    }
}
exports.takeSortedRange = takeSortedRange;
