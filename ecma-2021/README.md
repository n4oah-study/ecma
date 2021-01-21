# ECMAScript 2021 Features 🎈

## Table of Contents

- [String.prototype.replaceAll](#String.prototype.replaceAll)
- [private method](#private-method)
- [private accessors](#private-accessors)
- [WeakRef and Finalizers](#WeakRef-and-Finalizers)
- [Logical Assignment Operators](#Logical-Assignment-Operators)
- [Promise.any](#Promise.any)

## String.prototype.replaceAll

- 기존 replace나 split, join을 활용하여 replaceAll을 처리 했었는데 표준 메소드가 생김
```js
// before1
const queryString1 = 'q=query+string+parameters';
const withSpaces1 = queryString1.replace(/\+/g, ' ');

// before2
const queryString2 = 'q=query+string+parameters';
const withSpaces2 = queryString2.split('+').join(' ');

// after
const queryString3 = 'q=query+string+parameters';
const withSpaces3 = queryString3.replaceAll('+', ' ');

// output
// q=query string parameters
```

## private method

- #으로 private method를 정의 할 수 있음
```js
class Person {
  // Private method
  #setType() {
    console.log('I am Private');
  }

  // Public method
  show() {
    this.#setType();
  }
}

const personObj = new Person();
personObj.show(); // 'I am Private';
personObj.setType(); // TypeError: personObj.setType is not a function
```

## private accessors

- private getter, setter를 만들 수 있음
```js
class Person {
  // Public accessor
  get name() { return "Backbencher" }
  set name(value) {}

  // Private accessor
  get #age() { return 42 }
  set #age(value) {}
}

const obj = new Person();
console.log(obj.name); // "Backbencher"
console.log(obj.age); // undefined
```

## WeakRef

- WeapMap, WeapSet과 같이 약한 참조를 갖는 객체이다.
- WeakRef(reference) 로 사용
- WeakRef and finalizers 참고

## Logical Assignment Operators

```js
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
```

## Promise.any()

- 순환 가능한 Promise 객체 집합에서 가장 빨리 성공(resolve)한 resolve값 반환
- 모두 reject되면 throw AggregateError: All promises were rejected
```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('A'), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('B'), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('C'), Math.floor(Math.random() * 1000));
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject('D'), Math.floor(Math.random() * 1000));
});

(async function() {
  const result = await Promise.any([p1, p2, p3, p4]);
  console.log(result); // Prints 'A' or 'B' or 'C'
})();
```
- ~~이걸 어따쓰지~~