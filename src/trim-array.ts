import { Pair } from "../types/pair";

type Comparer<T> = (ele: T) => boolean;

/**
 * Trims false values from beginning and end of given array.
 * Returns shallow copy of given array with begin and end false values trimmed off.
 * 
 * @param arr Array to trim
 * @param comparer Callback to determine what values should be trimmed.
 *                 Return true if given value should be trimmed, false if given value should be kept.
 *                 Defaults to trimming falsey values from array if not specified.
 */
export const trimArray = function<T>(arr: T[], comparer: Comparer<T> = (ele) => !ele): T[]
{
    const indices = getArrayBounds(arr, comparer);

    return arr.slice(indices.first , indices.second + 1);
};

/**
 * Gets the first and last index of given array with true values.
 * begin index is Pair.first, end index is Pair.second
 * 
 * @param arr Array to find bounds of
 * @param comparer Callback to determine what values should be treated as false.
 *                 Return true if given value should be treated as false, false if given value should be kept.
 *                 Defaults to ignoring falsey values in array if not specified.
 */
export const getArrayBounds = function<T>(arr: T[], comparer: Comparer<T> = (ele) => !ele): Pair<number, number>
{
    let i = 0;
    let j = arr.length - 1;
    let foundBegin: boolean = false;
    let foundEnd: boolean = false;

    while (i <= j)
    {
      if (comparer(arr[i])) i++;
      else foundBegin = true;

      if (comparer(arr[j])) j--;
      else foundEnd = true;

      if (foundEnd && foundBegin) break;
    }

    return new Pair(i, j);
};

