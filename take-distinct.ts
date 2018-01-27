import { getMapValues } from "./get-map-members";

interface TakeDescriptor<T>
{
    /**
     * Returns new array with all distinct values of given primitive array.
     * Will result in unexpected behavior if array is a collection of
     * objects. (Will compare by reference) For object arrays use takeDistinctObj().
     */
    prim(): Array<T>;
    /**
     * Returns new array with all distinct values of given object array.
     * Will result in unexpected behavior if array is a collection of
     * primitives. For primitive arrays use takeDistinctPrim().
     * 
     * @param propName Property name of object that contains the value you wish to get distinct values of
     */
    obj<V extends keyof T>(propName: V): Array<T[V]>;
}

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
export const takeDistinct = function<T>(arr: T[], ignoreFalsey: boolean = false): TakeDescriptor<T>
{
    // local function to keep this as DRY as possible
    const checkMap = <MV>(map: Map<MV, MV>, val: MV) => {
        if (map.get(val) === undefined)
            map.set(val, val);
    };

    return new class {
        prim() {
            const valueMap = new Map<T, T>();

            for (const item of arr)
            {
                if (ignoreFalsey && !item) continue;
                checkMap(valueMap, item);
            }                
            
            return getMapValues(valueMap);
        }
        obj<V extends keyof T>(propName: V) {
            const valueMap = new Map<T[V], T[V]>();
            for (const item of arr)
            {
                const val = item[propName];
                if (ignoreFalsey && !val) continue;
                checkMap(valueMap, val);
            }
            return getMapValues(valueMap);
        }
    };
};
