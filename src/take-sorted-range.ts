import { isNullOrUndefined } from "./is-null-or-undefined";
import { SearchCallback, compareInequality } from "./binary-search";
import { lowerBound } from "./lower-bound";
import { upperBound } from "./upper-bound";


/**
 * Uses binary search lowerbound and upperbound functions to find start and ending of 
 * range of like values then returns a shallow copy of them
 * 
 * @param arr Array to take from 
 * @param predicate Result of this will be evaluated against each element that is being iterated
 */
export function takeSortedRange<T>(arr: T[], predicate: SearchCallback<T>): T[];


/**
 * Uses binary search lowerbound and upperbound functions to find start and ending of 
 * range of like values then returns a shallow copy of them
 * 
 * @param arr Array to take from 
 * @param searchValue Value to compare against
 */
export function takeSortedRange<T>(arr: T[], searchValue: T): T[];


/**
 * Uses binary search lowerbound and upperbound functions to find start and ending of 
 * range of like values then returns a shallow copy of them
 * 
 * @param arr Array to take from 
 * @param search predicate used for searching sorted array or primitive value to use to search array.
 */
export function takeSortedRange<T>(arr: T[], search: SearchCallback<T> | T): T[]
{
    if (typeof search === "function")
    {
        const lowerIndex: number = lowerBound(arr, search);
        if (lowerIndex === -1) return [];

        const upperIndex: number = upperBound(arr, search);
        if (upperIndex === -1) return [];

        return arr.slice(lowerIndex, upperIndex + 1);
    }
    else
    {
        const predicate: SearchCallback<T> = (ele: T) => {
            return compareInequality<T>(ele, search);
        };

        return takeSortedRange(arr, predicate);
    }
}
