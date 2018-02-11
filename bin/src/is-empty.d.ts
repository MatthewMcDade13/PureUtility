/**
 * First checks if passed variable is null or undefined, then checks if given object is empty.
 * If object, checks length of enumerable keys, if array checks length.
 *
 * Returns true if bal is null, undefined, or of length 0, false otherwise.
 *
 * @param obj Object to be checked
 */
export declare const isEmpty: <T>(obj: T) => boolean;
