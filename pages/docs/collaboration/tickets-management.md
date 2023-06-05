---
title: Tickets management
description: tickets management
---

A look into a ticket's creation, acceptance criteria and life cycle. It is advised to utilize a template for creation, dev complete comment and qa comment/acceptance

#### Template for a bug report

```markdown
### Title: general summary

### Expected result

what should've happened
including any screenshots and recordings
include technical data, console logs and network data to help investigating
include test data if relevant

### Actual result

what happens instead of the expected behavior.

### Scenario/Steps to reporduce the bug

1. ...
2. ...

### Impact and context

How has this issue affected you? What are you trying to accomplish?
Providing context helps us come up with a solution that
is most useful in the real world Provide a general summary of the issue in the Title above.

### Enviroment

env info, browser, os, app version, reproducability rate, ...

---

Other fields to have:

### Reported by: <reporter name>

### Assignee

### Severity/Priority:

Critical, High, -> anything that impacts the normal user flow or blocks app usage
Medium, Normal, -> anything that negatively affects the user experience
Minor -> everything else (typos, missing icons, layout issues, etc.)

### Due date
```

---

#### Template for a task

```markdown
### desired behavior/summary:

As [the actor], I want [the something] so I can [the goal].

### Acceptance criteria

It’s done when, ...

### Requirement documents

Design or API docs

### Possible Solution

Not obligatory, but suggest a approach.

### Possible Implementation

Not obligatory, but suggest an idea for implementing addition or change.
Link to page and / or story.

---

other fields

### Priority

### Assignee

### Due date
```

---

#### Template for feature requests and user stories

```markdown
### desired behavior/description:

As [the actor],
I want [do something]
so that I can [achieve the goal].

### Acceptance criteria/definition of done:

Given that [some context],
when [some action is carried out]
then [a set of observable outcomes should occur].

---

other fields

### Size

### Assignee

### Due date

### Severity/Desirability

Critical, High, -> anything that impacts the normal user flow or blocks app usage
Medium, Normal, -> anything that negatively affects the user experience
Minor -> everything else (typos, missing icons, layout issues, etc.)
```

---

### Ticket life cycle

```markdown
Backlog(Created) -> Todo -> Doing -> Pending review -> Reviewed ->
Deployed -> Tested -> Approved
```
