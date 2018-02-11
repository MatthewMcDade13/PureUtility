import { SearchCallback } from "./binary-search";
/**
 * Uses binary search lowerbound and upperbound functions to find start and ending of
 * range of like values then returns a shallow copy of them
 *
 * @param arr Array to take from
 * @param predicate Result of this will be evaluated against each element that is being iterated
 */
export declare function takeSortedRange<T>(arr: T[], predicate: SearchCallback<T>): T[];
/**
 * Uses binary search lowerbound and upperbound functions to find start and ending of
 * range of like values then returns a shallow copy of them
 *
 * @param arr Array to take from
 * @param searchValue Value to compare against
 */
export declare function takeSortedRange<T>(arr: T[], searchValue: T): T[];
