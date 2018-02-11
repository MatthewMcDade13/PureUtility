/**
 * Executes a given function with params (if any) if the function that
 * is passed in is not null or undefined.
 * Also type checks that function is of function type at runtime.
 * --- Returns boolean if function was sucessfully executed or not ---
 *
 * @param func Function to be executed if exists
 * @param params parameters to pass to executing function
 */
export declare const execIfExists: <F extends Function>(func: F, ...params: any[]) => boolean;
