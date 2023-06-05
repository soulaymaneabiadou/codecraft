---
title: Naming
description: Naming is hard, that is why we should take time to come up with a good name, but do not spend unreasonably long time at it
---

## Introduction

{% quote owner="Phil Karlton" %}
There are only two hard things in Computer Science: cache invalidation and _naming things_.
{% /quote %}

Naming is hard, that is why we should take time to come up with a good name, but do not spend unreasonably long time at it, after a few minutes, use the best you can come up with or ask for help(it does not hurt you or bother anyone)

{% quote owner="Unknown" %}
You should name a variable using the same care with which you name a first-born child.
{% /quote %}

It is ok to break the conventions if you have to, this is not a bible.
Just keep in mind the most important thing, which is making the code readable and easy to understand for the next person.
With that being said, let’s jump into it.

{% callout title="Language preference" %}
The primary language used for naming everything is English(American English to be precise, _en_us_).
{% /callout %}

---

## Casing

As a convention, we stick to the following, UPPERCASE for constants such as `env vars` and enums(`snake_case` for `enum` is also possible, but not recomanded), `camelCase` for all mutable/immutables variables, `PascalCase` for class and interface names, kabab-case for URLs.

---

## Names composition

Use full words, names **should be self-descriptive**, a long name is better than a short non descriptive one(but conciseness is preferred, if a short name will have the same meaning than a long name, go with it), with the exception of loop’s scoped variables such as _`i`_ and _`j`_. This is also a good approach for creating searchable names(to look for using the editor’s search ability and getting a moderate number of hits).

```typescript
// bad
let d; // day
let firstname = 'John';
let first_name = 'John';

// good
let firstName = 'John';

// good
const FIRST_NAME = 'John';

// bad
const FIRSTNAME = 'John';
```

---

## Recommandations

Avoid reserved keywords for any names(such as `delete`), and never start with a number.

Only use acronyms(which are uppercased, like JSON, HTML,…) if they are very common, std(standard) or app(application) are more likely to be understood than depl(deployment).

Context matters, `Users.createUser` and `Users.create` are the same, the User suffix on the method in the former call is redundant in this instance.

Compound words should be written as one word, like `callback` .

Prefer semantic naming; name a variable after its purpose, what it does and how it does it, in that order.

```ts
interface Logger {}

class ELKLogger implements Logger {}

// good, it tells that it is a users collection, regardless of its underlaying DS.
let users;

// bad, we have to reflect the type of DS in the name, which will introduce overhead
// if we decided to go with a map instead of a list in the future.
let userList;
```

Use pronounceable and naturally readable names, names should be easy to read out loud, example `HorizontalAlignment` is better than `AlignmentHorizontal`.

Make meaningful distinctions, avoid names that seem to be the same, like `userInfo` and `userData` and pick one word per concept throughout the code base, for example use either `fetch`, `get` or `retrieve` for the same operation(getting data). Pick one and stick with it.

Avoid offensive or slang terms, and never pun(different possible meanings of a word), for example having `add()` that adds two numbers, and `add()` which adds into a list is not good.

If a property is intended to be private, in an OOP context, utilize the _private_ keyword explicitly, and in the functional context, do not export it from its module. Do not rely on the underscore rule.
