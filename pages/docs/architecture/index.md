---
title: Architecture
description: designing better systems
---

### DevOps

Since software is composed of multiple pieces, front end, backend, database, …, defining a good architecture for it and how and where to host it is a crucial part of any design document, hence we will define a few rules to follow when deciding on such topics

- Separate the components and define their requirements and relations
- Package and deploy each component separately, using Docker(with an orchestration tool such as Kubernetes), CI/CD pipelines and a Cloud provider(Such as GCP or Digital Ocean)

---

### Codebase organization

A codebase, for instance an API, should be organized with one of the following schemas:

- By feature, each resource(feature, like orders, users, auth, …) gets its own directory with all of the functionality needed to operate(repository, controller, tests, …).
- By role: which means to group the files by their role rather than feature, and it will look as: **Routes → Validators + Middleware → Controllers → Services → Repositories → Database**. Although services do not have to always to talk to a repository, it might be the case where a service is an adapter of an external service or API, such as Stripe for Payments or a Mailing service.
