---
title: Events & Events handlers
description:
---

## Events

As they refer to an action(created, deleted, …) they are named as verbs, if the event is triggered before an action starts, use the present tense(cancelling), if it will fire after it, use the past tense(cancelled).

An exception is the global events, like in a pub/sub buses(like rabbitmq), as they are global and cover a good part of the system, they use namespaces and separators, like `order:created` , the schema is `<resource>:<action>`

A similar use case is to describe access control permissions, like `manage:users` , `update:profile` or `read:posts` , the schema is `<action>:<resource>`

---

## Event Handlers

As they are functions(all function rules previously mentioned apply), they are named starting with a verb, like `handleCancelling` or `handleCancelled` and prefixed with the word **_handle_**. they can also be prefixed by `on` like `onClick` in the client side.
