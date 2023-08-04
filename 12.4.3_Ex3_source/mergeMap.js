`use strict`

const { of, map, mergeMap, interval } = require("rxjs");
const { merge } = require("rxjs/operators");

const letters = of('a', 'b', 'c');

/**
 * MeregeMap est un opératuer de tansformation 
 * qui fusionne plusieurs observables 
 * en un seul flux continu
 */

const results = letters.pipe(
    mergeMap(x => interval(1000).pipe(map(i => x + i)))
);

results.subscribe({
    next: val => console.log(val)
})