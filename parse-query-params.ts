/**
 * Parses a given url and returns its query parameters as a map, if any.
 * 
 * @param urlSubstring URL to parse, preffered to be given substring containing mostly only the query params,
 *                     but will still work with full urls
 */
export const parseQueryParams = function(urlSubstring: string): Map<string, string> | null
{
    const params = new Map<string, string>();

    // Search for beginning of query string
    const queryStartInd = urlSubstring.indexOf('?');
    // Get the query string
    const queryString = decodeURIComponent(urlSubstring.slice(queryStartInd + 1));
    // Separate queries
    const queries = queryString.split('&');

    // Get pairs from queries
    for (let i = 0; i < queries.length; i++)
    {
        const pair = queries[i].split('=');
        params.set(pair[0], pair[1]);
    }

    return params.size > 0 ? params : null;
};

