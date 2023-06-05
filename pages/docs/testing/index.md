---
title: Testing
description: ensuring robustness throughout testing.
---

{% quote owner="Robert Martin" %}
It is unit tests that keep our code flexible, maintainable, and reusable. The reason is simple. If you have tests, you do not fear making changes to the code! Without tests every change is a possible bug.
{% /quote %}

{% quote owner="Robert Martin" %}
If you have a test suite that you trust, you can clean the code
{% /quote %}

While there is a multitude of types of testing, ranging from functional tests such as unit tests to non functional ones such as security tests along side code coverage and everything in between, following we will list them all for reference, although we only enforce doing **TDD** with the following tests **unit**, **integration** and **E2E** as a standard.

Other types of tests, such as **security**, **stress** and **performance** tests should be adopted to ensure the resilience and stability of the system, but are not required to be followed by all developers at all times.

In terms off tooling, from the vaste world of packages, _Jest_ and _Supertest_ will be sufficient for most use cases when it comes to unit, integration and API testing, for client side projects, _Cypress_ is a excellent choice for e2e testing.

{% callout type="note" title="TDD" %}
Test Driven Development refers to writing a test first, write the code to make it pass afterwards, and then refactor that code to adhere to the agreed upon rules.
{% /callout %}

Following is a list of types of testing to keep in mind when developing software.

### Functional Tests

- **Unit tests**: with the goal to validate the behavior of individual units of code, such as functions, components, …
- **Integration tests**: is the testing of how multiple units/modules work together, such as was a service function able to use a repository’s function to get data.
- **E2E tests**: with tools such as Cypress, with the goal of simulating actual user’s behavior while interacting with the app, to test its functionality, this is useful for client side apps
- **Acceptance tests**(test user requirements acceptance): a type of testing that ensures that the code meets all of the user’s requirements.
- **System tests**(test real world hardware): to insure that the software works on actual hardware/servers
- **Smoke tests**: which focuses on running a selected few of the tests, to insure the state of the software, before proceeding with the rest of the test suite(which might include a large number of tests that take a long time to run)

---

### Non functional tests

- **Performance tests**: aims at determining how software holds under a given workload, in terms of stability, speed and responsiveness.
- **Security tests**: ensures that the software system and application are free from any threats or risks that can cause a loss. by uncovering vulnerabilities of the system and determining if the data and resources of the system are protected from possible intruders.
- **Usability tests**: is generally the practice of testing how to easy design is to use on a group of representative users. It is typically done from an end user's perspective to determine if the system is easily usable.
- **Stress tests**: focuses on testing the capabilities of the infrastructure.

---

### Other practices

- **Mocking**: is a process used in unit testing when the unit being tested has external dependencies. it’s purpose is to isolate and focus on the code being tested, and not on the behavior or state of external dependencies, by replacing those dependencies by mocks that simulate their real behaviors.
- **Code coverage**: gives an idea of how well tests cover the actual source code, it is worth noting here that 100% coverage is a myth and does not mean that the test suite is solid.
