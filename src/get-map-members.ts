import { Pair } from "../types/pair";

/**
 * Iterates over given map and returns new array of its values.
 * 
 * @param map Map to get values from
 */
export const getMapValues = function<K, V>(map: Map<K, V>): V[]
{
    const values: V[] = new Array(map.size);
    let i: number = 0;
    
    map.forEach(value => { 
        values[i] = value;
        i++;
    });

    return values;
};

/**
 * Iterates over given map and returns new array of its keys.
 * 
 * @param map Map to get keys from
 */
export const getMapKeys = function<K, V>(map: Map<K, V>): K[]
{
    const keys: K[] = new Array(map.size);
    let i: number = 0;

    map.forEach((value, key) => {
        keys[i] = key;
        i++;
    });
    return keys;
};

/**
 * Iterates over given map and returns new array of its pairs where
 * pair.first is key and pair.second is value
 * 
 * @param map Map to get pairs from
 */
export const getMapPairs = function<K, V>(map: Map<K, V>): Pair<K, V>[]
{
    const pairs: Pair<K, V>[] = new Array(map.size);
    let i: number = 0;
    
    map.forEach((value, key) => {
        pairs[i] = new Pair(key, value);
        i++;
    });
    return pairs;
};
