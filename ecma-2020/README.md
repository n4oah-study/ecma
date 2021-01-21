# ECMAScript 2020 Features 🎈

## Table of Contents

- [BigInt](#BigInt)
- [import()](#import())
- [import.meta](#import.meta)
- [nullish coalescing (?? 연산자)](#nullish-coalescing-??-연산자)
- [optional chaining](#optional-chaining)
- [Promise.allSettled](#Promise.allSettled)
- [for-in mechanics](#for-in-mechanics)
- [String.prototype.matchAll](#String.prototype.matchAll)
- [globalThis](#globalThis)

## BigInt

- BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 253 - 1보다 큰 정수를 표현할 수 있는 내장 객체
```js
const theBiggestInt = 9007199254740991n; // 리터럴
const alsoHuge = BigInt(9007199254740991);
const hugeString = BigInt("9007199254740991");
const hugeHex = BigInt("0x1fffffffffffff");
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// output: 9007199254740991n

console.log(typeof 1n) // output: 'bigint'
```
- 일반 Number 타입과 비교 연산자 사용 가능 <, >, <=, >=, ==

## import()

- Promise 기반의 import() 문법은 javascript 모듈을 동적으로 로딩한다.
```js
import('mathjs')
  .then(module => {
    console.log('pi', module.pi);
  });
```

## import.meta

- 현재 실행 중인 모듈에 호스트에서 사용 가능한 메타데이터 객체를 설정한다
```js
<script type="module">  
  import './index.mjs?someURLInfo=5';
</script>

new URL(import.meta.url).searchParams.get('someURLInfo'); // 5  
```

## nullish coalescing ?? 연산자

- 좌항 값이 null|undefined일 경우 우항 구문 실행
```js
null ?? 'hi' // 'hi'

undefined ?? 'hi' // 'hi'

false ?? 'hi' // false
```

## optional chaining

- 좌항 값이 null이 아닐경우 우항으로 chaining execute
```js

const data = {
  article: {
    title: 'hello title'
  }
}

// before
const title = data && data.article && data.article.title;

// after
const title2 = data?.article?.title;
```

## Promise.allSettled

- 배열이나 나열 가능한 객체를 통해 나열 된 Promise 모음이 resolve하거나 reject한 상황들을 배열로 리턴해줌
```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"
```
- resolve시 status=fulfilled, value=resolve value
- reject시 status=rejected, reason=reason value

## for-in mechanics

- 기존 for-in의 iterator order는 명확하지 않음
- 표준이 없었기 때문에 브라우저마다 다르게 작동
- 이번에 표준이 잡혔다.

## String.prototype.matchAll

- String.prototype.match()은 정규식에식 검사에 통과 된 부분을 array로 반환하는 반면
- String.prototype.matchAll()은 정규식 검사에 통과 된 부분의 세부 정보를 iterator로 반환
```js
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

let array = [...str.matchAll(regexp)];

console.log(str.match(regexp));

console.log(array[0]);
// ["test1", "e", "st1", "1"]

console.log(array[1]);
// ["test2", "e", "st2", "2"]
```

## globalThis

- 기존 브라우저, node native 등 global 접근하는 변수명이 달랐음
- 브라우저: window, node native: global
- globalThis 하나로 동일한 명으로 global에 접근 가능하도록 변경 됨

## epxort ns from

- 모듈을 모두 import한 후, 새로운 이름(namespace)로 export할 수 있게 하는 문법
```js
export * as ns from "mod";
```