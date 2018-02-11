import { SearchCallback } from "./binary-search";
/**
 * Binary search algorithm to find this last value in a given sorted array.
 * Returns index of found item, otherwise -1 if value is not found
 *
 * @param arr Array to be searched.
 * @param predicate Callback to determine value to be searched in array,
 *  callback should return 0 if item is found, <0 if item is less than search value, or >0 if item is greater than search value.
 * @param left Beginning of where array will be searched. defaults to 0 as an index
 * @param right End of where array will be searched. Defaults to end of given array as an index.
 * @param size Size of the array
 */
export declare function upperBound<T>(arr: T[], predicate: SearchCallback<T>, left?: number, right?: number, size?: number): number;
/**
 * Binary search algorithm to find the last value in a given sorted array.
 * Returns index of found item, otherwise -1 if value is not found
 *
 * @param arr Array to be searched.
 * @param searchValue Value to search in given array.
 * @param left Beginning of where array will be searched. Defaults to 0
 * @param right End of where array will be searched. Defaults to end of given array.
 * @param size Size of the array
 */
export declare function upperBound<T>(arr: T[], searchValue: T, left?: number, right?: number, size?: number): number;
