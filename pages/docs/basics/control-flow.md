---
title: Control flow statements
description: How to declare loops, if/else and switch/case blocks.
---

{% callout type="note" title="Control flows definition" %}
Control flow statements are loops, if/else and switch/case blocks.
{% /callout %}

Control flow statements spanning multiple lines always use blocks for the containing code.

```ts
for (let i = 0; i < x; i++) {
  doSomething(i);
  andMore();
}

// good
if (x) {
  doSomethingWithALongMethodName(x);
}

// bad
if (x) doSomethingWithALongMethodName(x);
```

The exception is that `if` statements fitting on one line may elide the block; If it respects the line length rule, it can get away with emitting the block.

```ts
if (x) x.doFoo();
```

All `switch` statements must contain a `default` statement group, even if it contains no code.

```ts
switch (x) {
  case Y:
    doSomething();
    break;
  default:
  // nothing to do.
}
```

Non-empty statement groups (`case ...`) shall not fall through; gets to execute the code in the next case.

```ts
switch (x) {
  case X:
    doSomething();
  // falling through not allowed!
  case Y:
  // ...
}
```

Empty statement groups are allowed to fall through

```ts
switch (x) {
  case X:
  case Y:
    doSomething();
    break;
  default: // nothing to do.
}
```

---

## Equality Checks

Always use triple equals (`===` and the likes `!==`) , and not double equality (`==`) operators, in order to avoid type coercion bugs/errors. With the e**xception** of comparisons to the literal `null` value, which may use the `==` and `!=` operators to cover both `null` and `undefined` values.

```tsx
// bad
if (foo == 'bar' || x != y) {
  // Hard to understand behaviour due to type coercion.
}

// good
if (foo === 'bar' || x !== y) {
  // All good here.
}

// good
if (x == null) {
  // Will trigger when x is null or undefined.
}
```
