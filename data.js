// LEAP Recap – Complete Q&A Dataset

const SPRINTS = [
  {
    id: 3,
    title: "Sprint 3",
    name: "Data Systems & Data Modelling",
    icon: "🗄️",
    accent: "s3",
    blurb: "SQL, ACID, normalization, keys, indexes, ER design",
    cards: [
      {
        q: "What are the main types of SQL joins?",
        a: "SQL joins combine rows from two or more tables: `INNER JOIN` returns matching rows, `LEFT JOIN` includes unmatched left rows, `RIGHT JOIN` includes unmatched right rows, and `FULL OUTER JOIN` includes unmatched rows from both tables.",
        code: "SELECT a.id, b.name FROM table_a a\nINNER JOIN table_b b ON a.id = b.id;"
      },
      {
        q: "What does ACID mean?",
        a: "ACID is a set of database transaction properties: `Atomicity` ensures all-or-nothing execution, `Consistency` maintains valid state, `Isolation` prevents concurrent conflicts, and `Durability` guarantees committed data persists."
      },
      {
        q: "What is database normalization?",
        a: "Normalization reduces data redundancy by organizing tables into normal forms. First Normal Form (1NF) eliminates repeating groups, Second Normal Form (2NF) removes partial dependencies, and Third Normal Form (3NF) removes transitive dependencies."
      },
      {
        q: "What's the difference between a primary key and a foreign key?",
        a: "A `primary key` uniquely identifies each row in a table and cannot be NULL. A `foreign key` references a primary key in another table and establishes relationships between tables."
      },
      {
        q: "What are database indexes and why do they matter?",
        a: "Indexes speed up data retrieval by creating a sorted structure pointing to table rows. They accelerate WHERE clauses and JOIN conditions but slow down INSERT/UPDATE/DELETE operations due to index maintenance overhead."
      },
      {
        q: "Explain an Entity-Relationship (ER) diagram",
        a: "An ER diagram visualizes database structure showing entities (tables), attributes (columns), and relationships. Cardinality (1:1, 1:N, M:N) indicates how entities relate. It's essential for database design planning."
      },
      {
        q: "What are aggregation functions in SQL?",
        a: "Common aggregation functions include `COUNT()` for row count, `SUM()` for totals, `AVG()` for averages, `MIN()`/`MAX()` for extremes, and `GROUP_CONCAT()` for concatenation. They compute values across multiple rows.",
        code: "SELECT category, COUNT(*), AVG(price)\nFROM products\nGROUP BY category;"
      },
      {
        q: "What are CTEs and subqueries?",
        a: "A `Common Table Expression (CTE)` is a temporary result set defined with a WITH clause, improving readability. A `subquery` is a nested SELECT within another query. Both enable complex queries with intermediate results."
      },
      {
        q: "What is data quality?",
        a: "Data quality measures accuracy, completeness, consistency, and timeliness. Poor data quality stems from missing values, duplicates, incorrect formats, and outdated records, requiring validation and cleaning processes."
      },
      {
        q: "What's the difference between SQL and NoSQL?",
        a: "`SQL` uses structured tables with schemas and ACID guarantees, ideal for consistent transactional data. `NoSQL` uses flexible structures (documents, key-value pairs) with eventual consistency, ideal for scalable unstructured data."
      }
    ]
  },
  {
    id: 4,
    title: "Sprint 4",
    name: "Financial Services & Data Analytics",
    icon: "🐍",
    accent: "s4",
    blurb: "Python fundamentals, Pandas, EDA, statistics, machine learning",
    cards: [
      {
        q: "What are Python's basic data types?",
        a: "Python includes `int` (integers), `float` (decimals), `str` (text), `bool` (true/false), `list` (ordered mutable), `tuple` (ordered immutable), `dict` (key-value pairs), and `set` (unique unordered values)."
      },
      {
        q: "What's the difference between lists, tuples, and sets?",
        a: "`Lists` are mutable ordered collections, `tuples` are immutable ordered collections (hashable for dict keys), and `sets` are unordered unique value collections. Lists use `[]`, tuples use `()`, sets use `{}`."
      },
      {
        q: "What do *args and **kwargs mean?",
        a: "`*args` allows functions to accept variable positional arguments as a tuple, `**kwargs` allows variable keyword arguments as a dictionary. Both enable flexible function signatures.",
        code: "def func(*args, **kwargs):\n    print(args)  # tuple\n    print(kwargs)  # dict"
      },
      {
        q: "How does exception handling work in Python?",
        a: "Use `try-except` blocks to catch exceptions. `try` contains risky code, `except` handles specific errors, `else` runs if no exception occurs, and `finally` executes regardless. Multiple `except` blocks can handle different error types.",
        code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nfinally:\n    print('Cleanup')"
      },
      {
        q: "What is pandas and when should you use it?",
        a: "Pandas is a Python library for data manipulation and analysis. Use it for cleaning, transforming, and analyzing structured data. It provides `DataFrames` (2D) and `Series` (1D) for efficient data operations."
      },
      {
        q: "What's a DataFrame vs a Series?",
        a: "A `Series` is 1D labeled array (single column), a `DataFrame` is 2D labeled structure (multiple columns). DataFrames are like SQL tables or Excel sheets with rows and columns."
      },
      {
        q: "How do you filter and group data in pandas?",
        a: "Use boolean indexing to filter: `df[df['column'] > 5]`. Use `groupby()` to aggregate: `df.groupby('category').sum()`. Combine with aggregation functions like `mean()`, `count()`, `max()`.",
        code: "df[df['price'] > 100].groupby('category').mean()"
      },
      {
        q: "What are merge and concat operations?",
        a: "`merge()` combines DataFrames on common columns (like SQL JOIN), `concat()` stacks DataFrames vertically (rows) or horizontally (columns). Merge is better for relational joins, concat for appending."
      },
      {
        q: "How do you handle missing values?",
        a: "Detect with `isnull()` or `isna()`. Remove with `dropna()`, fill with `fillna()` (forward-fill, backward-fill, or constant), or interpolate. Choose strategy based on data importance and analysis goals."
      },
      {
        q: "What is Exploratory Data Analysis (EDA)?",
        a: "EDA investigates dataset characteristics through statistics, visualization, and pattern detection. It reveals missing values, outliers, distributions, correlations, and trends before formal analysis or modeling."
      }
    ]
  },
  {
    id: 5,
    title: "Sprint 5",
    name: "Software Engineering, Java & OOAD",
    icon: "☕",
    accent: "s5",
    blurb: "OOP pillars, SOLID, OOAD, UML, TDD, JUnit, clean code",
    cards: [
      {
        q: "What are the four pillars of OOP?",
        a: "`Encapsulation` hides internal state, `Abstraction` exposes essential features, `Inheritance` enables code reuse, `Polymorphism` allows multiple implementations of the same interface."
      },
      {
        q: "What do SOLID principles mean?",
        a: "`S` Single Responsibility, `O` Open/Closed, `L` Liskov Substitution, `I` Interface Segregation, `D` Dependency Inversion. They guide maintainable, flexible, testable code design."
      },
      {
        q: "What is OOAD?",
        a: "Object-Oriented Analysis and Design models systems using objects and relationships. It involves identifying entities (classes), their properties (attributes), behaviors (methods), and interactions before coding."
      },
      {
        q: "What is UML?",
        a: "Unified Modeling Language provides standard diagrams for system design: class diagrams show structure, sequence diagrams show interactions, use case diagrams show user workflows, state diagrams show state transitions."
      },
      {
        q: "What is Test-Driven Development (TDD)?",
        a: "TDD follows the Red-Green-Refactor cycle: write failing tests first, implement minimal code to pass, then refactor. This ensures testability, documents behavior, and catches bugs early."
      },
      {
        q: "What is JUnit and how does it work?",
        a: "JUnit is a Java testing framework. Annotate methods with `@Test`, use assertions like `assertEquals()`, `assertTrue()`. Organize with `@Before`/`@After` for setup/teardown. Run tests to validate code correctness.",
        code: "@Test\npublic void testAddition() {\n    assertEquals(4, calculator.add(2, 2));\n}"
      },
      {
        q: "What is the AAA testing pattern?",
        a: "`Arrange` sets up test conditions, `Act` executes the code under test, `Assert` verifies the result. This structure makes tests clear, maintainable, and easy to understand."
      },
      {
        q: "What makes code 'clean'?",
        a: "Clean code is readable, maintainable, and testable. Use meaningful names, keep functions small, apply DRY principle, handle errors properly, write tests, and refactor regularly. Document complex logic."
      },
      {
        q: "What's the difference between composition and inheritance?",
        a: "`Inheritance` creates is-a relationships via class hierarchies, `composition` creates has-a relationships by containing objects. Composition is more flexible and avoids fragile base class problems."
      },
      {
        q: "What is dependency injection?",
        a: "Pass dependencies to objects via constructor/setter rather than creating them internally. This improves testability, reduces coupling, and enables easy mock injection for testing."
      }
    ]
  },
  {
    id: 6,
    title: "Sprint 6",
    name: "Software Architecture & Enterprise Java",
    icon: "🌱",
    accent: "s6",
    blurb: "Microservices, Spring Boot, REST APIs, JWT, Docker, integration testing",
    cards: [
      {
        q: "What are microservices?",
        a: "Microservices architecture decomposes applications into small, independent services each handling specific business capabilities. They communicate via APIs, scale independently, and enable parallel development."
      },
      {
        q: "What are Spring Boot layers?",
        a: "Spring Boot typically uses Controller (API endpoints) → Service (business logic) → Repository (data access) layers. This separation ensures maintainability, testability, and clear responsibility boundaries."
      },
      {
        q: "What is REST and what are HTTP methods?",
        a: "REST (Representational State Transfer) uses HTTP for APIs. Methods include `GET` (retrieve), `POST` (create), `PUT` (full update), `PATCH` (partial update), `DELETE` (remove). Stateless and resource-oriented."
      },
      {
        q: "What are HTTP status codes?",
        a: "`2xx` Success (200 OK, 201 Created), `3xx` Redirection, `4xx` Client error (400 Bad Request, 404 Not Found), `5xx` Server error (500 Internal Error). Use correct codes for clear API communication."
      },
      {
        q: "What is OpenAPI and contract-first design?",
        a: "OpenAPI (Swagger) defines REST API specifications in YAML/JSON. Contract-first means designing the API contract before implementation, enabling parallel client/server development and documentation."
      },
      {
        q: "What are DTOs and validation?",
        a: "`Data Transfer Objects` (DTOs) represent data between layers, decoupling internal models from API contracts. Use annotations like `@NotNull`, `@Email` for validation to ensure data quality."
      },
      {
        q: "What's the difference between MyBatis and JPA/Hibernate?",
        a: "`MyBatis` is SQL-focused with manual query mapping, good for complex queries. `JPA`/`Hibernate` provides ORM abstraction with less SQL, better for CRUD operations and portability."
      },
      {
        q: "What is JWT (JSON Web Token)?",
        a: "JWT is a compact, stateless authentication token containing header, payload, and signature. Clients include JWT in requests, servers verify without session storage. Ideal for microservices.",
        code: "header.payload.signature\n{\"alg\": \"HS256\", \"typ\": \"JWT\"}.{user data}.{HMAC signature}"
      },
      {
        q: "How do you secure JWT tokens?",
        a: "Use HTTPS to encrypt in transit, include expiration (`exp`), refresh tokens for renewal, store secrets securely, validate signature on every request, implement token revocation lists for logout."
      },
      {
        q: "What is Docker and why use it?",
        a: "Docker containers package applications with dependencies in isolated environments. Ensures consistency across dev/test/prod, simplifies deployment, enables microservices, improves resource efficiency."
      }
    ]
  },
  {
    id: 7,
    title: "Sprint 7",
    name: "Enterprise Data & Engineering Excellence",
    icon: "🔄",
    accent: "s7",
    blurb: "Technical debt, Kafka, ETL, code quality, CI/CD, DevSecOps",
    cards: [
      {
        q: "What is technical debt?",
        a: "Technical debt represents the cost of poor code/design choices taken for short-term speed. Accumulates over time, slows development, increases bugs. Manage with refactoring, quality gates, and strategic paydown."
      },
      {
        q: "What's the difference between events and requests?",
        a: "`Requests` are synchronous, expect immediate responses (REST APIs). `Events` are asynchronous notifications of something that happened (Kafka topics). Events decouple systems; requests are simpler but create coupling."
      },
      {
        q: "What are batch and real-time processing?",
        a: "`Batch` processes large data volumes at scheduled intervals (nightly jobs), good for non-urgent analytics. `Real-time` processes data immediately upon arrival (streaming), good for immediate insights/alerts."
      },
      {
        q: "What is Kafka?",
        a: "Kafka is a distributed event streaming platform. It stores immutable event logs in topics, enables multiple consumers, provides durability, and handles massive throughput. Central to event-driven architectures."
      },
      {
        q: "What are Kafka topics, partitions, and consumer groups?",
        a: "`Topics` are categories of events, `partitions` parallelize data across brokers enabling scalability, `consumer groups` allow multiple applications to independently consume the same topic."
      },
      {
        q: "What is ETL?",
        a: "`Extract` retrieves data from sources, `Transform` cleans/reshapes/enriches data, `Load` writes to destinations. Essential for data warehousing, analytics, and data integration across systems."
      },
      {
        q: "What are code smells?",
        a: "Code smells indicate potential issues: duplicated code, long methods, large classes, unclear names, deep nesting. They're not bugs but suggest refactoring opportunities to improve maintainability."
      },
      {
        q: "What is CI/CD?",
        a: "`Continuous Integration` automatically tests code changes, `Continuous Deployment` automatically releases to production. Enables rapid, reliable delivery with quality gates and automated testing."
      },
      {
        q: "What is DevSecOps and Shift-left security?",
        a: "`DevSecOps` integrates security into development pipeline. `Shift-left` means addressing security early (requirements, code review, testing) rather than late (production incidents)."
      },
      {
        q: "What are characterization tests?",
        a: "Tests that document current system behavior without asserting correctness. Useful for legacy code, capture how code currently works, enable safe refactoring while preserving behavior."
      }
    ]
  },
  {
    id: 8,
    title: "Sprint 8",
    name: "JavaScript & TypeScript",
    icon: "🟨",
    accent: "s8",
    blurb: "Closures, promises, async/await, TypeScript, Node.js, NestJS",
    cards: [
      {
        q: "What's the difference between let, const, and var?",
        a: "`var` is function-scoped and hoisted, `let` is block-scoped, `const` is block-scoped and cannot be reassigned. Use `const` by default, `let` if reassignment needed, avoid `var`."
      },
      {
        q: "What is hoisting?",
        a: "Variable and function declarations are moved to scope top before execution. `var` and function declarations are hoisted fully (can use before declaration), `let`/`const` are hoisted but not initialized (temporal dead zone)."
      },
      {
        q: "What are closures?",
        a: "A closure is a function with access to its own scope, outer function's scope, and global scope. Inner functions retain access to outer variables even after outer function returns. Essential for encapsulation.",
        code: "function outer() {\n  let count = 0;\n  return () => ++count;  // closure\n}"
      },
      {
        q: "What are map, filter, and reduce?",
        a: "`map()` transforms each element, `filter()` selects matching elements, `reduce()` accumulates to single value. All are higher-order functions enabling functional programming patterns.",
        code: "[1, 2, 3].map(x => x * 2);  // [2, 4, 6]\n[1, 2, 3].filter(x => x > 1);  // [2, 3]"
      },
      {
        q: "What are destructuring and spread syntax?",
        a: "`Destructuring` extracts values from objects/arrays concisely. `Spread` operator `...` spreads iterable elements. Both improve readability and enable elegant data handling.",
        code: "const {name, age} = person;\nconst [first, ...rest] = array;"
      },
      {
        q: "What are Promises?",
        a: "Promises represent eventual async result (resolved or rejected). Use `then()` for success, `catch()` for errors, `finally()` for cleanup. Enable better async code than callbacks.",
        code: "promise.then(result => {...}).catch(error => {...})"
      },
      {
        q: "What are async/await?",
        a: "`async` functions return Promises, `await` pauses execution until Promise resolves. Cleaner syntax than `.then()` chains, easier error handling with try/catch.",
        code: "async function fetch() {\n  try {\n    const data = await getData();\n  } catch (e) {\n    console.error(e);\n  }\n}"
      },
      {
        q: "What is TypeScript?",
        a: "TypeScript adds static typing to JavaScript. Provides type safety, better IDE support, catches errors at compile-time. Compiles to JavaScript, improves code quality and maintainability."
      },
      {
        q: "What's the difference between interfaces and types?",
        a: "`Interfaces` describe object contracts, extendable via `extends`, used for structural typing. `Types` are aliases for any shape, use `&` for intersection. Prefer interfaces for objects, types for unions."
      },
      {
        q: "What are generics?",
        a: "Generics enable reusable components with type parameters. `<T>` represents any type. Enable type-safe collections, functions, classes without sacrificing flexibility.",
        code: "function identity<T>(value: T): T { return value; }"
      }
    ]
  },
  {
    id: 9,
    title: "Sprint 9",
    name: "UI Development with Angular",
    icon: "🅰️",
    accent: "s9",
    blurb: "Semantic HTML, CORS, components, signals, DI, routing, reactive forms",
    cards: [
      {
        q: "What is semantic HTML?",
        a: "Semantic HTML uses tags describing content meaning: `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`. Improves accessibility, SEO, and code clarity vs generic `<div>` tags."
      },
      {
        q: "What is the CSS box model?",
        a: "Every element has content, padding (inside), border, and margin (outside). Box-sizing `border-box` includes padding/border in width, `content-box` doesn't. Understanding this prevents layout surprises."
      },
      {
        q: "What is CORS?",
        a: "`Cross-Origin Resource Sharing` allows controlled access to resources from different domains. Browser enforces same-origin policy by default, CORS headers enable cross-origin requests safely."
      },
      {
        q: "What are standalone components in Angular?",
        a: "Standalone components don't need NgModule. They import dependencies directly via `imports` array. Simpler composition, better tree-shaking, modern Angular approach."
      },
      {
        q: "What are Angular signals?",
        a: "Signals are reactive values with `.set()`, `.update()` for changes. `signal()` creates writable signals, `computed()` auto-updates from dependencies, `effect()` runs side effects on changes."
      },
      {
        q: "What is Angular dependency injection?",
        a: "DI provides instances to components/services reducing coupling. Use `inject()` function or constructor parameters. Services are singleton by default, scoped via providers.",
        code: "constructor(private service: MyService) {}\n// or\nthis.service = inject(MyService);"
      },
      {
        q: "What is HttpClient and how does it work with Observables?",
        a: "HttpClient performs HTTP requests returning Observables. Use `pipe()` for transformations like `map()`, `catchError()` for error handling. Must subscribe to receive data.",
        code: "this.http.get('/api/data').pipe(\n  catchError(err => throwError(err))\n).subscribe(data => {...})"
      },
      {
        q: "What are switchMap and catchError?",
        a: "`switchMap()` cancels previous inner Observables when new ones emit (prevents stale requests), `catchError()` handles Observable errors, enabling graceful failure handling."
      },
      {
        q: "What is Angular routing and lazy loading?",
        a: "Routing maps URL paths to components. Lazy loading delays module loading until needed, improving initial performance. Define with `loadChildren` in route config.",
        code: "{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }"
      },
      {
        q: "What are reactive forms in Angular?",
        a: "Reactive forms use `FormControl`, `FormGroup`, `FormArray` for explicit form management. Validators prevent invalid states, observables enable reactive updates. More powerful than template-driven forms."
      }
    ]
  },
  {
    id: 10,
    title: "Production Grade",
    name: "Running It for Real",
    icon: "🚀",
    accent: "sp",
    blurb: "CI/CD, deployment, security, observability, resilience, scaling",
    cards: [
      {
        q: "What is a CI/CD pipeline?",
        a: "Automated workflow: code pushed → build → unit tests → integration tests → quality gates → deploy to staging → smoke tests → deploy production. Ensures quality and reliability."
      },
      {
        q: "What is blue-green and canary deployment?",
        a: "`Blue-green` runs two identical environments, switches traffic to the new one. `Canary` gradually routes percent of traffic to new version. Both minimize downtime and enable rollback."
      },
      {
        q: "What is version pinning?",
        a: "Explicitly specify dependency versions (e.g., `3.2.1` not `^3.2.1`) for reproducibility. Prevents unexpected breaks from dependency updates, enables deterministic deployments."
      },
      {
        q: "How do you manage environment configuration?",
        a: "Separate configs from code: use environment variables, config files, secrets vaults. Different configs for dev/test/prod. Never hardcode secrets or environment-specific values."
      },
      {
        q: "How do you secure secrets?",
        a: "Store in dedicated vaults (HashiCorp Vault, AWS Secrets Manager), never in code/logs. Rotate regularly, restrict access, audit usage. Use encryption at rest and in transit."
      },
      {
        q: "What is web security best practices?",
        a: "Use HTTPS, validate inputs (prevent SQL injection), sanitize outputs (prevent XSS), CSRF tokens, secure headers (CSP, X-Frame-Options), strong authentication, regular security audits."
      },
      {
        q: "What's the difference between authentication and authorization?",
        a: "`Authentication` verifies identity (who are you?), `authorization` determines access rights (what can you do?). Both essential for security."
      },
      {
        q: "What are access and refresh tokens?",
        a: "`Access token` grants short-lived resource access. `Refresh token` has longer lifetime, exchanged for new access token. Reduces exposure if access token is compromised."
      },
      {
        q: "What are logs, metrics, and traces?",
        a: "`Logs` record events for debugging, `metrics` measure system health (CPU, requests/sec), `traces` show request flow through services. All essential for observability."
      },
      {
        q: "What are health checks and golden signals?",
        a: "`Health checks` verify service readiness (startup/liveness). `Golden signals` are latency, traffic, errors, saturation. Monitor these to detect issues early."
      }
    ]
  }
];
