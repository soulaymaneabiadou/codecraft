---
title: Function rules
description:
---

## Naming

Functions are named with the `camcelCase` convention.

They either use the _function_ keyword, or are declared as arrow functions **if it has too be**.

Function names should start with a verb(since they do something) and describe exactly what it is that they do.

Transformers/converters functions, functions that transform from one type to another, should begin with `to` followed by the form they transform into, like `toArray()` , `toString()`

---

## Return values

They should have return values at all times, even void

Functions that return booleans should be written with a predicate, like `isSignedIn()`

```ts
function writeToFile(input: T): void {
  // ...
}

// good
function getFullName(firstName: string, secondName: string): string {
  return firstName + ' ' + secondName;
}
// bad
function fullName(firstName: string, secondName: string): string {
  return firstName + ' ' + secondName;
}

function isValid(x: T): boolean {
  // return after check...
}

function toPerson(input: T): Person {
  // return a person
}
```

---

## Recommandations

Functions should avoid side effects, such as changing a global variable, opening a file, or altering one of their parameters. As it requires building them in pairs; to reset the state(like closing a file after it got open).

The indentation level of a function should be no more than 1 or 2. And it should not exceed 80 characters per line(horizontally) and 24 lines(vertically).

A function should do one thing, a function is not doing one thing until/if you can still extract another function from it.

A function should have no more than 3 arguments, if you need more, then you probably need to pass an object.

Never pass boolean to functions as arguments, especially if it is going to be used as a testing flag; example `function func(’f’, true)` , here we do not know what the true means unless we go to the function’s definition. And if the boolean is a test flag, separate the two cases into two functions and call them in the two cases instead of a function. The exception to this rule is if you are dealing with a 3rd party function(built-in to the language or a library).

Use exceptions instead of error codes, and use try blocks to catch them
