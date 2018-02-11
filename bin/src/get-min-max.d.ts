import { Pair } from "../types/pair";
/**
 * Gets min and max of a given array.
 * --- Returns a pair object where pair.first is min and pair.second is max ---
 *
 * @param arr Array to get min and max from
 * @param comparer Callback whos return value will be compared against for
 *                 finding min and max value of given array, use this if
 *                 you need some custom calculations or are using an object array for comparing
 */
export declare const getMinMax: <T>(arr: T[], comparer?: ((ele: T) => number) | undefined) => Pair<number, number>;
