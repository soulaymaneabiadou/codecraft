---
title: Environment variables management
description: create, access and secure environment variables
---

### Defining the variables

Defining the environment variables happens within an `.env.*` file created in the root of the directory preferably, following the UPPERCASE naming convention

{% callout type="warning" title="Source control" %}
The `.env` file _should never be committed_ to any source control repository
{% /callout %}

---

### Consuming the variables

- Using and consuming these variables from a file is not supported out of the box, for that reason, we utilize libraries to aid us in loading them and making them available for usage in our codebase, one of those libraries and the most used is [dotenv](https://www.npmjs.com/package/dotenv) which can be installed using `npm i dotenv` and configured as such

```ts
import { config } from 'dotenv';

// this can take an optional config object
// like
const opts = { path: '/custom/path/to/.env' };

config(opts);

// if you do not need it in production, you might write
if (process.env.NODE_ENV !== 'production') {
  config(); // you might pass the opts object
}
```

{% callout type="note" title="Variables in production" %}
In production this library might not be needed, due to how hosting platforms pass the values to the node command to run your software, but this is unlikely depending on the path you take in deploying the software
{% /callout %}

---

### Examples

#### Supplying env variables without the need for `dotenv`

```bash

# Here we set teh VAR value and node will make it accessible in `process.env.VAR`
VAR=value node index.js
```

#### Supplying env variables using `dotenv`

```bash
# Defining the variables in the `.env` file
VAR=value1
```

```tsx
// using it in the code, example is in `index.ts` file

// this will run in development only,
// assuming there is a different way of supplying the variables to the code in production
if (process.env.NODE_ENV !== 'production') {
  // this suppose the `.env` file is defined within the root of the repository
  require('dotenv').config();
}

// accessing a variable
console.log(process.env.VAR); // will output `value1`
```
