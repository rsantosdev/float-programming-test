'use strict';

function searcher(input, test, result) {

  if (Array.isArray(input)) {
    arrayLoop(input, test, result);
  }
  else {
    objectLoop(input, test, result);
  }

};

function arrayLoop(array, test, result) {
  for (let item of array) {
    if (typeof item === 'object') {
      searcher(item, test, result);
      continue;
    }

    if (test(item)) {
      result.push(item)
    }
  }
}

function objectLoop(obj, test, result) {
  let objResult = [];
  for (let key in obj) {
    let item = obj[key];
    if (typeof item === 'object') {
      searcher(item, test, result);
      continue;
    }


    if (test(item)) {
      result.push(item)
    }
  }
}

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  let result = [];
  searcher(input, test, result);

  return result;
};