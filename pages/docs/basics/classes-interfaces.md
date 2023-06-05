---
title: Classes & Interfaces
description:
---

## Classes

When there is a group of functions manipulating a group of variables, that is a class.

Are named as nouns, and declared with a PascalCase

A class attributes are treated the same as variables, and methods are the same as functions

Class names should provide the context

```tsx
class Person {
  age: number;
  firstName: string;

  // bad
  createPerson(input: Person): Person {
    // ...
  }

  // good
  create(input: Person): Person {
    // ...
  }
}
```

{% callout title="Components notice" type="warning" %}
This rule applies to components as well, while not everywhere in JavaScript, they are commonly found in frontend frameworks like [React](https://reactjs.org).
{% /callout %}

---

## Interfaces

The same rules of classes apply here.

They do not use the `I` prefix, but rely on the semantic naming convention

Inheritance hierarchy should not be more than 7 layers deep
