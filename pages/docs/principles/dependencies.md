---
title: Dependencies management
description: Rules and practices for picking dependencies to use in software
---

### Picking packages and libraries

While there are no hard set rules on what tools to use, Picking the right one for the job is critical to the success of adopting it, and to not turn it into a burden, with that being said, here are a few points to keep in mind when picking a library:

- **Security**: Consider a library published to the NPM ecosystem with a decent usage community and reputation.

Utilize services that scan for vulnerabilities in your code, such as [snyk.io](https://snyk.io/) and code-auditing services.

- **Performance**: A large JavaScript library can disrupt the performance of the entire software.

It is always good to check the bundle size before installing a package

- **Updates**: Does the library have a sensible release schedule, utilizing a standardized software versioning scheme with a good effort towards backward compatibility
- **Licensing**: Having the right license is crucial to adopting a package and using it, so be careful of software license you choose to use.
- **Documentation**: Make sure the package or library is well documented to ensure developer experience and ease of integration.

### Keeping dependencies up to date

- Check for outdated packages with `npm outdated` and update them to their latest version that is ok based on the semver standard using `npm update`
- Utilize a tool to ease that flow like `npm-check-updates`
