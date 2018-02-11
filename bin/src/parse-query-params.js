"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parses a given url and returns its query parameters as a map, if any.
 *
 * @param urlSubstring URL to parse, preffered to be given substring containing mostly only the query params,
 *                     but will still work with full urls
 */
exports.parseQueryParams = function (urlSubstring) {
    var params = new Map();
    // Search for beginning of query string
    var queryStartInd = urlSubstring.indexOf('?');
    // Get the query string
    var queryString = decodeURIComponent(urlSubstring.slice(queryStartInd + 1));
    // Separate queries
    var queries = queryString.split('&');
    // Get pairs from queries
    for (var i = 0; i < queries.length; i++) {
        var pair = queries[i].split('=');
        params.set(pair[0], pair[1]);
    }
    return params.size > 0 ? params : null;
};
