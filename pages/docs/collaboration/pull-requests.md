---
title: Pull Requests
description: making merging a breaze
---

For better pull requests keep your commits small and utilize a template

#### Template example

```markdown
### Summary
Explain the changes you made and the reason behind them, at a high level,
it does not have to be fancy, and you do not have to get technical yet.
this is where you let the reviewer know the overall effect of the PR.

### Details
Explain the technical changes that have been made, the what, why, how.
the PR diff will tell most of the story of the “how”,
but make sure to draw attention to the significant design decisions.
How a bug was fixed and a description for the solution,
or a description or summary of a new feature
You should also include all unit test cases covered and any testing details

### References
Reference the tickets(tasks and stories if applicable) in your issue tracker if appropriate,
but by all means, don’t just reference the ticket,
It’s important to explain what the change is and then and only then reference the ticket.
You can include screenshots if necessary.

### Notes
Any other notes that you might have. like if the code introduces a breaking change,
or of any chanllenges that the solution is not covering...

### Testing
List here the test cases that got covered, and the devices/browsers that got used.
were unit test or e2e test cases covered here or just manual testing.

### Checks
- [] Tested -> Whether it was tested in all devices and browsers
- [] Approved
```
