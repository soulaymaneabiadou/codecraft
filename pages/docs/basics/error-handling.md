---
title: Error handling
description:
---

When an error is thrown, it looks for the closest catch block, it can be in the same function, or in any of its parents(within the stack). Thus they should be checked and handled gracefully at all times.

Do error checking first, and handle it at the earliest possible.

Insure that the code continues to execute correctly, or completely terminate it in case of unhandled errors(not uncaught ones) or critical ones.

## Ways to handle the error

{% callout type="note" title="Decision making" %}
Consider if the bug is recoverable, the user experience, and the resources it takes to deal/respond to it before making a choice.
{% /callout %}

- Crashing, so the program does not do the wrong thing, it makes the crash closer to the faulty code, which helps with debugging.
- Recovering from it and continue execution

---

## Examples

- Error in add to cart → notify the user, and continue.
- An animation not playing → ignore and continue
- A banking or driving system → recover(**_offensive/defensive programming_**); backups, monitor, …
- A race condition → retry the operation.
