---
title: File naming
description:
---

One the server level, use `camelCase` for controllers, routes, services, and the likes, with the exception being models which are named with PascalCase.

The client side uses PascalCase for component names, and any other functions or helper modules are named with camelCase.

The file name should reflect its purpose, after the main “thing” that is defined inside the file(class, component, service, resource) and exported.

If the export is a non-OOP “thing”(like a group of functions…), name the file to describe the purpose of the entire file, like a service, …

The context rule applies here as well, in the sense that a file named `UserProfile` within a `user` directory is redundant and should be called `Profile`, like `user/Profile` .

```bash
components/
|_ user/
   |_ Profile.tsx
   |_ Create.tsx

api/
|_ routes/
	 |_ auth.ts
```
