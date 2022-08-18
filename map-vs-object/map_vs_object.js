// https://bretcameron.medium.com/how-javascript-maps-can-make-your-code-faster-90f56bf61d9d

let result;

let obj = {};
let map = new Map(), n = 1000000;
console.time('Object-create');
for (let i = 0; i < n; i++) {
  obj[i] = i;
}
console.timeEnd('Object-create');

console.time('Map-create');
for (let i = 0; i < n; i++) {
  map.set(i, i);
}
console.timeEnd('Map-create');

console.time('Object');
result = obj.hasOwnProperty('999999');
console.timeEnd('Object');
// console.log(Object.keys(obj).length);

console.time('Map');
result = map.has(999999);
console.timeEnd('Map');
// console.log(map.size);


