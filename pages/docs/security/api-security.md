---
title: API Security
description: securing APIs
---

API Security is a broad field with many vulnerabilities, threats and protection practices to take into consideration, following is a list of the most common to take into account and some helpful tips to adopt when designing and coding APIs

### Threats to counter

- **Software bugs**: a matter of ensuring the usage of good and solid coding guidelines, tests, and code reviews and having penetration testing in place.
- **Injections**: such as cross site scripting, SQL/NoSQL injections and remote code execution, for this we must employ consistent input validation and sanitization.
- **Service availability**: this targets APIs with a flood of requests to commit a _DOS(DDOS)_ attack, to protect against it, an API must have rate limiting, load balancing, request and response size limits through pagination and quota policies.
- **User identity**: Utilize JWTs, API keys and OAuth, just to name a few, integrated within an API Gateway to validate and ensure authentication and authorization(RBAC/ABAC). Also insure to have refresh tokens when using JWTs. This ensures a safe net against privilege escalation attack. This might lead to a breach of the GDPR guidelines.
- **Spam and abuse**: Since a considerable amount of API traffic comes from automated actors for brute forcing, credential stuffing and scraping, for this, you need to establish API traffic visibility to observe both good and bad actors.

### Aspects to consider

- think like a bad guy, how could someone misuse and abuse the API, infrastructure and data. Watch other people screw up, talk to legal teams,
- Only expose interfaces that we need.
- Only collect and share the data that you need, you can not leak things you do not collect or share at all.
- Only grant access to the people and systems you need.
- Stick to the standard, and do not implement your own auth system.
- Respect the **OpenAPI** specification, but do not implement it yourself.
- Avoid OWASP’s top 10 security issues; [owasp api security](https://owasp.org/www-project-api-security/).
- Adopt a Zero-trust Philosophy.
- Extensively test the API; [methods of api security testing](https://brightsec.com/blog/api-security/#methods-of-api-security-testing).
- Implement logging and monitoring.
- Utilize an **API Gateway**; which is a facade(abstraction layer/service) that sits between a client facing app and a microservices system, routing traffic between the two, without the outside world knowing any details about the microservices architecture. Examples include Zuul, NGINX, and AWS Gateway.
