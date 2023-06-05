---
title: Variables Declaration
description: Looking into how to create and declare variables, the right way.
---

## Declaration

Never use `var` , use `const` for most declarations and `let` if the variable will change its value down the line.

---

## Naming

Variables should be named as nouns, like `user`, `phoneNumber`, …

As mentioned previously, as a convention, variables are named in `camelCase` except for constants(immutable runtime independent values, like `PI=3.14`) which are fully written in uppercase with an underscore to separate the words like `MONGODB_URI` .

Boolean variables are named with a predicate, like `isAuthenticated`, `isOpen`, `canVote` with a prefix like *is*, *are*, _should_, or *has*.
