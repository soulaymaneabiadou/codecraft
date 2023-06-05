---
title: Enums
description:
---

## Declaring enums

They are treated as a class with constants(fully uppercase)

```ts
enum Status {
  ACTIVE, // here the value will be 0
  BLOCKED,
  DISABLED
}

// or, for setting the values
enum Status {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  DISABLED = 'DISABLED'
}
```
