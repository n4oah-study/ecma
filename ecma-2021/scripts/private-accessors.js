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