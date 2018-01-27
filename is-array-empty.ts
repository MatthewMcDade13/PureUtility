import { isNullOrUndefined } from "./is-null-or-undefined";


/**
 * First checks if passed variable is null or undefined, then checks if
 * it has length greater than 0.
 * 
 * Returns true if var is null, undefined, or of length 0, false otherwise.
 * 
 * @param arr Array to be checked
 */
export const isArrayEmpty = function<T>(arr: T[]): boolean
{
    if (isNullOrUndefined(arr)) return true;

    return arr.length === 0;
}