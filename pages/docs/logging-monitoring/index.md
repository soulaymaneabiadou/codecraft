---
title: Logging & Monitoring
description:
---

{% quote owner="Unknown" %}
Having appropriate logs with exceptional search capabilities is similar to having an artificial lighting appliance in a dark room.
{% /quote %}

### Logging

Most software developers neglect the significance of logs in resolving software issues. However, the fact is, logs are indispensable when it comes to addressing software bugs and helping the developers to know the health status of the application. Also, logs are pivotal to the performance of an application.

Logging, simply put, is the idea of recording events that occur within the software, in an API context logging events helps in inspecting all the requests and responses that happen in it. We can add logs to a function, a controller or any unit that needs to record events that occurred during its execution.

If not done carefully, the addition of logs can add a handful of milliseconds to the application response time.

Logging can be achieved throughout a multitude of tools like _**Sentry**_ and _**Loggly**_, along side libraries such as `morgan` and `winston` to name a few.

---

### Monitoring

Monitoring allows you to have insights into a system and act on its anomalies before they reach its customers, such anomalies can be CPU utilization spicks, Network bottlenecks and more

Among the tools to achieve a proper monitoring integration and coverage there is the open sourced **ELK** stack with its cloud offering, along side other cloud providers unique solutions, among others.
