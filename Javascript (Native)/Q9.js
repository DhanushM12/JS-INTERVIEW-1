// Q9. Why do we need let and const in JS. Compare it with the problems in ES5
1. The const declaration creates a read-only reference to a value.
It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned.
For instance, in the case where the content is an object,
this means the object's contents (e.g., its properties) can be altered.

const MY_FAV = 7;
// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);

2. The let allows you to declare variables that are limited to a scope of a block statement, 
or expression on which it is used, unlike the var keyword, which defines a variable globally,
 or locally to an entire function regardless of block scope.
  The other difference between var and let is that the latter is initialized to a value 
  only when a parser evaluates it (see below).

Just like const the let does not create properties of the window object when declared globally 
(in the top-most scope).

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

3. ES5 problems solved in ES6
ES5 only had “function-level scope” (i.e. you wrap code in functions to create scope)
and caused a lot of issues. ES6 provides “block”-level scoping(i.e curly-braces to scope)
when we use “let” or “const” instead of “var”.
