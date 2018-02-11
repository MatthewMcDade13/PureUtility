import { isNullOrUndefined } from "./is-null-or-undefined";


/**
 * First checks if passed variable is null or undefined, then checks if given object is empty.
 * If object, checks length of enumerable keys, if array checks length.
 * 
 * Returns true if bal is null, undefined, or of length 0, false otherwise.
 * 
 * @param obj Object to be checked
 */
export const isEmpty = function<T>(obj: T): boolean
{
    if (isNullOrUndefined(obj)) return true;

    if (obj instanceof Array)
        return obj.length === 0;
    else if (obj instanceof Object)
        return Object.keys(obj).length === 0;
    else
        return false;
}
