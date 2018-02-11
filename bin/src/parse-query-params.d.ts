/**
 * Parses a given url and returns its query parameters as a map, if any.
 *
 * @param urlSubstring URL to parse, preffered to be given substring containing mostly only the query params,
 *                     but will still work with full urls
 */
export declare const parseQueryParams: (urlSubstring: string) => Map<string, string> | null;
