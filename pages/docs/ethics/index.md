---
title: Ethics
description: the programmer's unwritten oath
---

{% quote owner="Unknwon" %}
Because the default in the world, in anything is chaos and to insure order, we must have rules, ethics and principles. We present the oath.
{% /quote %}

{% callout type="note" title="Notice" %}
These ethics have been taken strait, as is from the programmer’s oath coined by Robert Martin in the Clean coder blog: [TheProgrammersOath](https://blog.cleancoder.com/uncle-bob/2015/11/18/TheProgrammersOath.html)
{% /callout %}

### The Programmer's Oath

_18 November 2015_

In order to defend and preserve the honor of the profession of computer programmers,

**I Promise that, to the best of my ability and judgement:**

1. I will not produce harmful code.
2. The code that I produce will always be my best work. I will not knowingly allow code that is defective either in behavior or structure to accumulate.
3. I will produce, with each release, a quick, sure, and repeatable proof that every element of the code works as it should.
4. I will make frequent, small, releases so that I do not impede the progress of others.
5. I will fearlessly and relentlessly improve my creations at every opportunity. I will never degrade them.
6. I will do all that I can to keep the productivity of myself, and others, as high as possible. I will do nothing that decreases that productivity.
7. I will continuously ensure that others can cover for me, and that I can cover for them.
8. I will produce estimates that are honest both in magnitude and precision. I will not make promises without certainty.
9. I will never stop learning and improving my craft.

---

### Other unwritten rules

- You're responsible for code quality, use meaningful names and write code that expresses intent.
- Code should speak for itself. Less comments = less maintenance. **Comments are often lies waiting to happen**.
- The boy scout rule: Leave the code better than you found it.
- Single-responsibility code, i.e A function does only 1 thing well. Less arguments = better function. cohesiveness; most methods use most of the class properties.
- Write and test every line of code (TDD); integration and unit tests
- Work on big picture skeleton, then fill in the details later; interface first, implementation later.
- Always aim to create independent components that can be used in different places.
- Never allow bad code to stay.
- Master your craft.
