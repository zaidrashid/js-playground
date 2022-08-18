let map = new Map();
map.set('b', 123);
map.set('c', 123);
map.set('a', 123);
map.set('1', 123);

map.forEach((value, key) => {
    console.log(key);
});