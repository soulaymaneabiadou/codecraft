---
title: Better Commits
description: writing good commits
---

### The Anatomy of a Commit Message

- Basic:

```bash
git commit -m <message>
```

- Detailed:

```bash
git commit -m <title> -m <description>
```

#### Conventional Commits

- Capitalize the first word and do not end in punctuation. And remember to use all lowercase.
- Use imperative mood in the subject line. Imperative mood gives the tone you are giving an order or request. Example – `Add fix for dark mode toggle state` .
- Specify the type of commit. It is recommended and can be even more beneficial to have a consistent set of words to describe your changes. Example: Bugfix, Update, Refactor, Bump, and so on.
- Length: The first line should ideally be no longer than 50 characters, and the body should be restricted to 72 characters.
- Make it clear *why* that change was made, and note if it may be crucial for the functionality or not.
- Follow **Conventional Commits,** Conventional Commit is a formatting convention that provides a set of rules to formulate a consistent commit message structure, example

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit type can include the following:

- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `docs` – updates to documentation such as a the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit

- The commit description line should be all lowercase with a character limit
- The optional commit body should be used to provide further detail that cannot fit within the character limitations of the subject line description.
- The footer is also optional. Which can be used to link the story or ticket that would be closed with these changes for example: `Closes [#ID]`.
- If the commit contains a breaking change, utilize the body to mention it, or add a `!` to emphasize it

{% callout type="note" title="Why conventional commits?" %}
It discourages moving fast in a disorganized way. It helps you be able to move fast long term across multiple projects with varied contributors.
{% /callout %}

#### Examples

```bash
# Commit message with all sections
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz.

BREAKING CHANGE: behavior <x> changed from <old> to <new>

Closes [#12345]

# Commit message with description and breaking change footer
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files

# Commit message with ! to draw attention to breaking change
feat(api)!: send an email to the customer when a product is shipped

# Commit message with no body
docs: correct spelling of CHANGELOG

# Commit message with multi-paragraph body and multiple footers
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

#### Specification

[conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification)

#### How does this relate to SemVer?

`fix` type commits should be translated to `PATCH` releases. `feat` type commits should be translated to `MINOR` releases. Commits with `BREAKING CHANGE` in the commits, regardless of type, should be translated to `MAJOR` releases.

#### How to handle revert commits?

One recommendation is to use the `revert`
 type, and a footer that references the commit SHAs that are being reverted

```bash
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

---

### Enforcing commit rules

Utilize a tool, like [commitizen](https://commitizen-tools.github.io/commitizen/) or [commitlint](https://commitlint.js.org/#/) to achieve this goal.

Use the `commit-msg` git hook to validate the commit message based on a specific regular expression
