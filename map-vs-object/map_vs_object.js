// https://bretcameron.medium.com/how-javascript-maps-can-make-your-code-faster-90f56bf61d9d
// problem. if you switch around the cases, it does not work. Object is faster
let result;

let obj = {};
let map = new Map(), n = 1000000;
// console.time('ObjectCreate');
for (let i = 0; i < n; i++) {
  obj[i] = i;
}
// console.timeEnd('ObjectCreate');

// console.time('MapCreate');
for (let i = 0; i < n; i++) {
  map.set(i, i);
}
// console.timeEnd('MapCreate');

let start, end;

console.time('map');
start = performance.now();
result = map.has(999999);
end = performance.now();
console.log(end-start);
console.timeEnd('map');

console.time('Object');
start = performance.now();
result = obj.hasOwnProperty('999999');
end = performance.now();
console.log(end-start);
console.timeEnd('Object');








