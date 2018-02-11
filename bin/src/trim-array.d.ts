import { Pair } from "../types/pair";
/**
 * Trims false values from beginning and end of given array.
 * Returns shallow copy of given array with begin and end false values trimmed off.
 *
 * @param arr Array to trim
 * @param comparer Callback to determine what values should be trimmed.
 *                 Return true if given value should be trimmed, false if given value should be kept.
 *                 Defaults to trimming falsey values from array if not specified.
 */
export declare const trimArray: <T>(arr: T[], comparer?: (ele: T) => boolean) => T[];
/**
 * Gets the first and last index of given array with true values.
 * begin index is Pair.first, end index is Pair.second
 *
 * @param arr Array to find bounds of
 * @param comparer Callback to determine what values should be treated as false.
 *                 Return true if given value should be treated as false, false if given value should be kept.
 *                 Defaults to ignoring falsey values in array if not specified.
 */
export declare const getArrayBounds: <T>(arr: T[], comparer?: (ele: T) => boolean) => Pair<number, number>;
