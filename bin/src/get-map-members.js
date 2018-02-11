"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pair_1 = require("../types/pair");
/**
 * Iterates over given map and returns new array of its values.
 *
 * @param map Map to get values from
 */
exports.getMapValues = function (map) {
    var values = new Array(map.size);
    var i = 0;
    map.forEach(function (value) {
        values[i] = value;
        i++;
    });
    return values;
};
/**
 * Iterates over given map and returns new array of its keys.
 *
 * @param map Map to get keys from
 */
exports.getMapKeys = function (map) {
    var keys = new Array(map.size);
    var i = 0;
    map.forEach(function (value, key) {
        keys[i] = key;
        i++;
    });
    return keys;
};
/**
 * Iterates over given map and returns new array of its pairs where
 * pair.first is key and pair.second is value
 *
 * @param map Map to get pairs from
 */
exports.getMapPairs = function (map) {
    var pairs = new Array(map.size);
    var i = 0;
    map.forEach(function (value, key) {
        pairs[i] = new pair_1.Pair(key, value);
        i++;
    });
    return pairs;
};
