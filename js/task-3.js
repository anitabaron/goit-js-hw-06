class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value.padEnd(this.#value.length + str.length, str);
    // console.log(`${this.#value}${str}`);
  }

  padStart(str) {
    this.#value.padStart(this.#value.length + str.length, str);
    console.log(str);
    console.log(this.#value.length);
    console.log(str.length);
    // return `${str}, this.#value`;
    // console.log(`${str}${this.#value}`);
    // this.#value.padStart(this.#value.length + 1, str);
  }

  padBoth(str) {
    // this.#value.padEnd(str);
    // console.log(`${str}${this.#value}${str}`);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
