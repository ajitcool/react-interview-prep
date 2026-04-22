# System Design

**System design** is the process of defining the architecture, components, and data flow of a system to satisfy given requirements.

"System Design matlab ek high level blueprint banana — jisme hum decide karte hain ki system ke components kaise design honge, kaise scale honge, aur kaise ek doosre se communicate karenge. Iska goal hota hai ki system reliable, scalable aur fast rahe."

## Key Concepts

- **Scalability** — handling growth in users/data (horizontal vs vertical scaling)
- **Reliability** — staying up despite failures (redundancy, failover)
- **Availability** — uptime guarantees (e.g., 99.9%)
- **Performance** — low latency, high throughput
- **Data storage** — choosing SQL vs NoSQL, caching strategies
- **Communication** — REST, gRPC, message queues (Kafka, RabbitMQ)
- **Trade-offs** — CAP theorem, consistency vs availability

# Types of System Design

---

## High Level Design (HLD)

**HLD** is the overall system architecture — a bird's-eye view of how major components interact, without diving into implementation details.

### What HLD Covers:
- **Architecture style** — Monolithic, Microservices, Event-driven
- **Major components** — Web servers, databases, caches, CDN, load balancers
- **Data flow** — How data moves between components
- **Technology choices** — Which DB, which queue, which cloud service
- **APIs** — High-level endpoint definitions between services
- **Scaling strategy** — How the system handles increased load

### Common HLD Components:
| Component | Purpose |
|---|---|
| Load Balancer | Distributes traffic across servers |
| CDN | Serves static assets closer to users |
| API Gateway | Single entry point for all client requests |
| Cache (Redis) | Reduces DB load, speeds up reads |
| Message Queue (Kafka) | Async communication between services |
| Database | Persistent data storage (SQL / NoSQL) |

### HLD Interview Steps:
1. Clarify requirements (functional + non-functional)
2. Estimate scale (users, requests/sec, storage)
3. Define APIs
4. Draw high-level architecture diagram
5. Identify bottlenecks and how to solve them

---

## Low Level Design (LLD)

**LLD** is the detailed design — how each individual component or module is implemented internally.

### What LLD Covers:
- **Class diagrams** — Classes, interfaces, relationships
- **Database schema** — Tables, columns, indexes, relationships
- **API contracts** — Request/response structure, status codes
- **Algorithms & logic** — Exact business logic implementation
- **Design patterns** — Singleton, Factory, Observer, Strategy, etc.
- **Code structure** — How modules/functions are organized

### Common Design Patterns in LLD:
| Pattern | Use Case |
|---|---|
| Singleton | Single DB connection instance |
| Factory | Creating objects without exposing logic |
| Observer | Event listeners, pub-sub systems |
| Strategy | Swappable algorithms (sorting, payments) |
| Repository | Abstracting data access layer |

### LLD Interview Steps:
1. Identify entities/objects in the system
2. Define classes and their relationships
3. Design the database schema
4. Write API contracts (request/response)
5. Apply relevant design patterns

---

### Architecture: Internal desing details for building the applications.

**Microservices Architecture**  is a design where the application is broken into small, independent services — each responsible for a single business function, deployed and scaled independently.

**Monolithic Architecture** is a design where the entire application is built as a single, unified unit — all features (UI, business logic, database access) are tightly coupled in one codebase and deployed together.

**Distributed System** Work is spread across multiple machines/processes that communicate over a network to appear as one system.

---

## Monolithic vs Distributed Systems — Key Differences

| | Monolithic | Distributed |
|---|---|---|
| **Location** | Single machine | Multiple machines/nodes |
| **Communication** | In-process function calls | Network calls (HTTP, gRPC, queues) |
| **Scaling** | Scale entire app | Scale individual nodes |
| **Failure** | One point of failure | Partial failures possible |
| **Data** | Single database | Data spread across nodes |
| **Latency** | No network overhead | Network latency exists |
| **Consistency** | Easy (single DB) | Hard (CAP theorem applies) |
| **Complexity** | Simple | Complex |

### Key Challenges in Distributed Systems:
- **Network failures** — nodes can't always talk to each other
- **Partial failures** — one node dies, others keep running
- **CAP Theorem** — can't have Consistency + Availability + Partition tolerance all at once
- **Clock skew** — machines don't have perfectly synced clocks
- **Data consistency** — keeping data in sync across nodes

**NOTE:** distributed system ek problem tha data loss but humne usse thik  ka rliya replication ke through

---

## Latency in System Design

**Latency** is the time taken for a request to travel from the client to the server and get a response back — measured in milliseconds (ms).

> Simple formula: **Latency = Time to first byte received - Time request was sent**

### Types of Latency:
| Type | Description |
|---|---|
| **Network latency** | Time data takes to travel over the network |
| **Disk I/O latency** | Time to read/write from storage |
| **DB query latency** | Time for database to process a query |
| **Application latency** | Time spent in business logic/code |
| **Cold start latency** | Delay when a service starts for the first time |


### How to Reduce Latency:

- **Caching** — Store frequently accessed data in memory (Redis, Memcached), avoid hitting DB every request
- **CDN** — Serve static assets from servers closest to the user, reduces geographic distance
- **Load Balancing** — Distribute requests evenly, no single server gets overwhelmed
- **Database Optimization** — Add indexes, use read replicas, avoid N+1 query 

### Latency vs Throughput:
| | Latency | Throughput |
|---|---|---|
| Definition | Time for one request | Requests handled per second |
| Goal | Make it low | Make it high |
| Trade-off | Sometimes reducing latency reduces throughput |

---

## Availability in System Design

**Availability** is the percentage of time a system is operational and accessible to users.

> Formula: **Availability = (Uptime / Total Time) × 100**


### How to Achieve High Availability:
- **Redundancy** — Run multiple instances, no single point of failure
- **Load Balancing** — If one server dies, others take over
- **Failover** — Automatically switch to backup when primary fails
- **Replication** — Keep copies of data across multiple nodes
- **Health Checks** — Continuously monitor services, restart if down
- **Auto-scaling** — Spin up new instances under heavy load

### Availability vs Reliability:
| | Availability | Reliability |
|---|---|---|
| Definition | System is accessible | System works correctly without failure |
| Metric | Uptime % | MTBF (Mean Time Between Failures) |
| Example | Site loads | Site loads AND gives correct data |

### Availability vs Consistency (CAP Theorem):
- In a distributed system, during a network partition you must choose:
  - **High Availability** — always respond, even if data may be stale
  - **High Consistency** — only respond when data is guaranteed correct