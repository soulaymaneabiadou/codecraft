---
title: API Design
description: designing better APIs
---

{% quote owner="Unknown" %}
When people disagree on the technology choice, it’s often because they don’t agree on the goals.
{% /quote %}

Following are some basic guidelines to ensure the design and creation of well structured and standardized APIs

### API Styles

- REST: Entity oriented (resource oriented), it does not layer concepts on top of HTTP, it uses it as is, unfortunately, HTTP only tells us how to do CRUD, it does not include other concepts (versioning, querying, …)
- **RPC**: Procedure oriented (function/method oriented)
- GraphQL

### HTTP Verbs

- **GET**: to retrieve a resource or a list of resources
- **POST**: to create a new resource
- **PATCH**: to partially update a resource
- **PUT**: to completely replace a resource
- **DELETE**: to destroy and remove a resource

### HTTP Status Codes

- **2xx** → success: 200: for GET and PATCH, 201: for POST and PUT and 204: for DELETE.
- **4xx** → client errors: 400, 401, 403, 404, 422, 429 for rate limiting.
- **5xx** → server errors: 500, 503.

---

Since REST has no specification, only guidelines, conforming to a set of rules when designing and building REST APIs is crucial to their success and ease of adoption, following are some points to adhere to when designing APIs:

### Naming resources and URLs

- Define the resource schemas, which is analogous to the definition of the database columns.
- Naming a resource URL should be done using **plural nouns**, written in kabab-case, example `/users`, getting a single resource is done through providing an identifier to the URI, example `/users/1`
- Avoid abstract naming, a noun must represent a single resource in the system, example `/projects` is better than `/services` .
- Define well-known URLs: `/users`, `/users/1`, `/users/1/orders`, `/orders`, `/auth/signin` .
- Nesting URLs should be limited to 3 levels max, to avoid complexity, example `/users/1/orders/1/products/1` is the deepest you can go.

### Use ISO 8601 formatted dates

When dealing with date and time, APIs should always return ISO 8601-formatted strings. Displaying dates in a specific time zone is generally a concern of client applications. Example: `2022-03-03T21:59:08Z`

### Authentication

In general, an API should utilize JWTs, with a transport mechanism such as cookies, to protect its private endpoints. But If an API needs to be called by a third party API(machine to machine), it makes sense to allow authentication via API keys.

### Filtering, Pagination and Sorting

- Filtering: `/users?status=active` → filtering by status
- Sorting: `/users?sort=+name` → sorting by name in ascending order
- Pagination: `/users?limit=10&offset=12` → requesting a list of resources, but limiting the results to 10, and getting records after the index 12, keep in mind that limit should have an upper bound (a max value like 20)

### Versioning

Make sure you version your API and pass the version on each request so that consumers aren't affected by any changes to another version. Example `/api/v1/resources`

### Response uniformity

Use consistent and standardized response formats, an example can be:

```json
{
  "errors": [],
  "data": [],
  "message": "",
  "success": true
}
```

### Be as specific as possible

it's generally a good idea to be *as specific as possible* when designing endpoints, naming fields, and deciding which requests and responses to accept and **validating** them.

### Caching

Using a data cache is also a great practice to improve the overall experience and performance of our API, which makes a lot of sense to serve data from to ease the load off of the database. One important thing you have to keep in mind when serving data from a cache is that this data can become outdated. So you have to make sure that the data inside the cache is always up to date. There are many different solutions out there. One appropriate example is to use [redis](https://www.npmjs.com/package/redis) or the express middleware [apicache](https://www.npmjs.com/package/apicache).

### Provide a health check endpoint

Provide an endpoint (for example **`GET /health`**) that determines whether or not a the API and its dependencies(such as the database and external services) are healthy. This endpoint can be called by other applications such as load balancers to act in case of a service outage.

### Document the API properly

Provide documentation for each API endpoint with examples if applicable, you may use a tool such as [Postman](http://postman.com) to achieve this goal.
