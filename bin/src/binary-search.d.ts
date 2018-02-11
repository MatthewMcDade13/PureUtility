export declare type SearchCallback<T> = (ele: T) => number;
/**
 * Binary search algorithm to find value in a given sorted array.
 * Returns index of found item, otherwise -1 if value is not found
 *
 * @param arr Array to be searched.
 * @param predicate Callback to determine value to be searched in array,
 *  callback should return 0 if item is found, <0 if item is less than search value, or >0 if item is greater than search value.
 * @param left Beginning of where array will be searched. defaults to 0
 * @param right End of where array will be searched. Defaults to end of given array.
 */
export declare function binarySearch<T>(arr: T[], predicate: SearchCallback<T>, left?: number, right?: number): number;
/**
 * Binary search algorithm to find value in a given sorted array.
 * Returns index of found item, otherwise -1 if value is not found
 *
 * @param arr Array to be searched.
 * @param searchValue Value to search in given array.
 * @param left Beginning of where array will be searched. Defaults to 0
 * @param right End of where array will be searched. Defaults to end of given array.
 * @returns Index of found item, or -1 if not found
 */
export declare function binarySearch<T>(arr: T[], searchValue: T, left?: number, right?: number): number;
/**
 * Compares two values for inequality.
 * Returns 0 if equal, -1 if item is less than search value, 1 if item is greater than search value
 *
 * @param item Item to be compared to search value
 * @param searchValue Value to be searched for
 */
export declare function compareInequality<T>(item: T, searchValue: T): -1 | 0 | 1;
