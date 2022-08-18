// literal declaration
// const obj = { a: 1, b: 2 };

// constructor
const obj = new Object();
obj.b = 1;
obj.c = 1;
obj.a = 1;
obj['1'] = 1;

console.log(Object.entries(obj));
// Object.entries(obj).map((key, val) => {
//     console.log(key, val);
// });