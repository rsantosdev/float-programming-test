'use strict';

/*
 * finder
 *
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 *
 */
module.exports = (input, test) => {
  let result = [];

  if (typeof input !== 'object') {
    return result;
  }

  if (Array.isArray(input)) {
    for (let item of input) {
      if (typeof item === 'object') {
        continue;
      }

      if (test(item)) {
        result.push(item);
      }
    }
  }
  else {
    for (let key in input) {
      let item = input[key];
      if (typeof item === 'object') {
        continue;
      }

      if (test(item)) {
        result.push(item);
      }
    }
  }

  return result;
};