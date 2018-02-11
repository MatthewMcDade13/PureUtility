import { isNullOrUndefined } from "./is-null-or-undefined";
import { SearchCallback } from "./binary-search";


/**
 * 
 * @param arr Array to take from 
 * @param index  Starting index for array, algorithm will look forwards and backwards linearly
 * @param predicate Result of this will be evaluated against each element that is being iterated
 */
export function takeSurroundingDuplicates<T>(arr: T[], index: number, predicate: (val: T) => boolean): T[];


/**
 * 
 * @param arr Array to take from 
 * @param index Starting index for array, algorithm will look forwards and backwards linearly
 * @param searchValue Value to compare against
 */
export function takeSurroundingDuplicates<T>(arr: T[], index: number, searchValue: T): T[];


/**
 * Takes adjacent duplicate values from array, given a start index
 * 
 * @param arr Array to take from 
 * @param index Starting index for array, algorithm will look forwards and backwards linearly
 * @param searchValue Value to compare against
 * @param objPropName Optional. Use if given array is an array of objects
 */
export function takeSurroundingDuplicates<T>(arr: T[], index: number, search: (val: T) => boolean): T[]
{

    if (index < 0 || isNullOrUndefined(index)) return [];

    let beginIndex = index;
    let endIndex = index;

    if (typeof search === "function")
    {
        while (arr[beginIndex - 1] && search(arr[beginIndex - 1]))
            beginIndex--;
        while (arr[endIndex + 1] && search(arr[endIndex + 1]))
            endIndex++;
    }
    else
    {
        while (arr[beginIndex - 1] && arr[beginIndex - 1] === search)
            beginIndex--;
        while (arr[endIndex + 1] && arr[endIndex + 1] === search)
            endIndex++;
    }

    return arr.slice(beginIndex, endIndex + 1);
}
