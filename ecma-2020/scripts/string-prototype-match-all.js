let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

let array = [...str.matchAll(regexp)];

console.log(str.match(regexp));

// console.log(array[0]);
// ["test1", "e", "st1", "1"]

// console.log(array[1]);
// ["test2", "e", "st2", "2"]