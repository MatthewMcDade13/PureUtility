"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pair_1 = require("../types/pair");
/**
 * Gets min and max of a given array.
 * --- Returns a pair object where pair.first is min and pair.second is max ---
 *
 * @param arr Array to get min and max from
 * @param comparer Callback whos return value will be compared against for
 *                 finding min and max value of given array, use this if
 *                 you need some custom calculations or are using an object array for comparing
 */
exports.getMinMax = function (arr, comparer) {
    var mm = new pair_1.Pair(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
    // Assumed to be working with object array if given valueField param
    if (comparer) {
        arr.forEach(function (i) {
            var currVal = comparer(i);
            if (currVal < mm.first)
                mm.first = currVal;
            if (currVal > mm.second)
                mm.second = currVal;
        });
    }
    else {
        arr.forEach(function (n) {
            if (typeof n === "number") {
                if (n < mm.first)
                    mm.first = n;
                if (n > mm.second)
                    mm.second = n;
            }
        });
    }
    return mm;
};
