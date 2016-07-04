'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'BALANCED PARENTHESES: exports balancedParentheses method', t => {
    t.ok( fpt.balancedParentheses, 'has balancedParentheses export' );
    t.equal( typeof fpt.balancedParentheses, 'function', 'balancedParentheses is a function' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for balanced string', t => {
    const input = '(x + y)';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for balanced string with one not closing', t => {
    const input = '( lets test if this works (x + y)';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for string with no text between parentheses', t => {
    const input = '()';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for empty string', t => {
    const input = '';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false when calling without args', t => {
    const result = fpt.balancedParentheses( );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false when calling with null', t => {
    const result = fpt.balancedParentheses( null );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false when calling with undefined', t => {
    const result = fpt.balancedParentheses( undefined );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for string with no parentheses', t => {
    const input = 'x + y';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );