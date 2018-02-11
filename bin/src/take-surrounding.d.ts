/**
 *
 * @param arr Array to take from
 * @param index  Starting index for array, algorithm will look forwards and backwards linearly
 * @param predicate Result of this will be evaluated against each element that is being iterated
 */
export declare function takeSurroundingDuplicates<T>(arr: T[], index: number, predicate: (val: T) => boolean): T[];
/**
 *
 * @param arr Array to take from
 * @param index Starting index for array, algorithm will look forwards and backwards linearly
 * @param searchValue Value to compare against
 */
export declare function takeSurroundingDuplicates<T>(arr: T[], index: number, searchValue: T): T[];
