let x = 1;
let y = 2;

// x가 존재 한다면 x에 y 대입
console.log('x', x, 'y', y);
console.log('x &&= y', x &&= y);

console.log();

x = false;
y = 2;

// x가 false(==) 라면 y대입
console.log('x', x, 'y', y);
console.log('x ||= y', x ||= y);

console.log();

x = undefined;
y = 2;

// x가 null/undefined 면 y대입
console.log('x', x, 'y', y);
console.log('x ??= y', x ??= y);