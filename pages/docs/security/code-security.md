---
title: Code Security
description:
---

Writing secure code is the goal of every craftsman, but achieving it is not an easy path to take, for that reason we list, briefly, some of the most important attack vectors and some libraries that tackle them to aid you in your journey of securing your code.

### Possible attack vectors

- Deal with URL and HTML(ascii) encoding of characters(like a `.` is `%2e`)
- regex catastrophic backtracking(momentjs) → dos attack
- If it is not explicitly blocked, it is allowed. whitelist instead of blacklist
- remote memory exposure(mongoose) → to get data from memory, using buffer
- type manipulation(qs) → NoSQL attack
- Persistent threats
- Command injection → validate all inputs, no `eval()`
- XSS → Sanitize inputs, and encode output
- Set headers: Strict-Transport-Security, X-Frame-Options, X-XSS-Protection, X-Content-Type-Policy, Content-Security-Policy
- CSRF → https secure scoped cookies and hashing

---

### Libraries & packages

- express-validator
- helmetjs/helmet
- csurf
- passportjs
- node_acl
- bcryptjs + 2fa
- cookie-session
- retire-js
- nodesecurity/nsp
