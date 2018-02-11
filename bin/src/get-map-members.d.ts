import { Pair } from "../types/pair";
/**
 * Iterates over given map and returns new array of its values.
 *
 * @param map Map to get values from
 */
export declare const getMapValues: <K, V>(map: Map<K, V>) => V[];
/**
 * Iterates over given map and returns new array of its keys.
 *
 * @param map Map to get keys from
 */
export declare const getMapKeys: <K, V>(map: Map<K, V>) => K[];
/**
 * Iterates over given map and returns new array of its pairs where
 * pair.first is key and pair.second is value
 *
 * @param map Map to get pairs from
 */
export declare const getMapPairs: <K, V>(map: Map<K, V>) => Pair<K, V>[];
