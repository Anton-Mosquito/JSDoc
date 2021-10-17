/**
 *  @type {string}
 */
const foo1 = 123;

console.log(foo1.toUpperCase());

"123".toUpperCase();
//123.toUpperCase(); // ! error digit dosen't have this methods

//@ts-check
/**
 *  @type {(string | number)[]}
 */
const foo3 = [];

foo3.push("123");
foo3.push(true);
foo3.push(5346);
foo3.push({});

/**
 * @type {{
 *       array: (string | number)[],
 *       title?: string,
 * }}
 */
let foo4;

foo4 = {
  title: "Title",
  array: [123, "432"],
};

/**
 * @typedef {Object} Foo5
 * @property {string} [title]
 * @property {(string | number)[]} array
 * @property {Object[]} persons
 * @property {string} persons[].name
 * @property {number} persons[].age
 */

/**
 * @type {Foo5}
 */
let foo5;

foo5 = {
  title: "asd",
  array: [123],
  persons: [
    {
      name: 1,
      age: "12",
    },
  ],
};

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 */

/**
 * @callback Foo6
 * @param {number} param
 * @returns {Person}
 */

/**
 * @type {Foo6}
 */
export function foo6(param) {
  return {
    name: "John",
    age: 42,
  };
}
