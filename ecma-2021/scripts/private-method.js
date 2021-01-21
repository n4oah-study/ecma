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
// personObj.setType(); // TypeError: personObj.setType is not a function