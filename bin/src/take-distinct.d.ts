export interface TakeDescriptor<T> {
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
export declare const takeDistinct: <T>(arr: T[], ignoreFalsey?: boolean) => TakeDescriptor<T>;
