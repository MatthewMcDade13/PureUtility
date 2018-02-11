"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_map_members_1 = require("./get-map-members");
/**
 * Takes an array to get distinct values from and
 * returns a simple object with 2 functions that will operate on that array
 * and return the proper result.
 *
 * Object returned has 2 functions, one for getting distinct values from a primitive array,
 * (named prim()) and another for getting distinct values from an object array (named obj())
 *
 * @param arr Array to take distinct values from
 * @param ignoreFalsey Flag to ignore falsey values from array, defaults to false
 */
exports.takeDistinct = function (arr, ignoreFalsey) {
    if (ignoreFalsey === void 0) { ignoreFalsey = false; }
    // local function to keep this as DRY as possible
    var checkMap = function (map, val) {
        if (map.get(val) === undefined)
            map.set(val, val);
    };
    return new /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.prim = function () {
            var valueMap = new Map();
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var item = arr_1[_i];
                if (ignoreFalsey && !item)
                    continue;
                checkMap(valueMap, item);
            }
            return get_map_members_1.getMapValues(valueMap);
        };
        class_1.prototype.obj = function (propName) {
            var valueMap = new Map();
            for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
                var item = arr_2[_i];
                var val = item[propName];
                if (ignoreFalsey && !val)
                    continue;
                checkMap(valueMap, val);
            }
            return get_map_members_1.getMapValues(valueMap);
        };
        return class_1;
    }());
};
