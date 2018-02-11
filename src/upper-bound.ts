import { SearchCallback, compareInequality } from "./binary-search";

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
export function upperBound<T>(arr: T[], predicate: SearchCallback<T>, left?: number, right?: number, size?: number): number;

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
// tslint:disable-next-line:unified-signatures
export function upperBound<T>(arr: T[], searchValue: T, left?: number, right?: number,  size?: number): number;

/**
 * Binary search algorithm to find the last value in a given sorted array.
 * Returns index of found item, otherwise -1 if value is not found
 * 
 * @param arr Array to be searched.
 * @param search Value to search or a callback to determine value to be searched in array, 
 *  callback should return 0 if item is found, <0 if item is less than search value, or >0 if item is greater than search value.
 * @param left Beginning of where array will be searched. Defaults to 0
 * @param right End of where array will be searched. Defaults to end of given array.
 * @param size Size of the array
 */
// tslint:disable-next-line:max-line-length
export function upperBound<T>(arr: T[], search: SearchCallback<T> | T, left: number = 0, right: number = arr.length - 1, size: number = arr.length)
{
    if (right >= left)
    {
        const mid = Math.floor(left + (right - left) / 2);

        if (typeof search === "function")
        {
            if ((mid === size - 1 || search(arr[mid + 1]) > 0) && search(arr[mid]) === 0) 
                return mid;

            if (search(arr[mid]) > 0) return upperBound(arr, search, left, mid - 1, size);
            
            return upperBound(arr, search, mid + 1, right, size);
        }
        else
        {
            const predicate: SearchCallback<T> = (ele: T) => {
                return compareInequality<T>(ele, search);
            };

            return upperBound(arr, predicate, left, right, size);
        }
    }

    return -1;
}
