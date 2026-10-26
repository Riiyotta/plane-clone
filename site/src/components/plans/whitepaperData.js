// Structure of the 24 whitepaper sections captured from plane.so/self-hosted/whitepaper.
// Prose is stored as character counts only (n) and rendered as placeholder copy; headings, short labels,
// table headers/short cells, diagram labels and reference titles are reproduced.
export const WP_SECTIONS = [
 {
  "id": "executive-summary",
  "num": "1.1",
  "chapter": "The context",
  "title": "Executive summary",
  "blocks": [
   {
    "t": "p",
    "n": 287
   },
   {
    "t": "p",
    "n": 64
   },
   {
    "t": "quote",
    "n": 117
   },
   {
    "t": "p",
    "n": 238
   },
   {
    "t": "p",
    "n": 319
   },
   {
    "t": "p",
    "n": 28
   },
   {
    "t": "ul",
    "items": [
     [
      "Self-hosting is a product requirement, not a packaging option.",
      175
     ],
     [
      "The architecture is conventional enough to operate.",
      190
     ],
     [
      "The platform is complete.",
      178
     ],
     [
      "The economics rest on control and consolidation.",
      195
     ]
    ]
   },
   {
    "t": "p",
    "n": 100
   },
   {
    "t": "h3",
    "text": "How to use this guide"
   },
   {
    "t": "table",
    "caption": "Where to start by need",
    "head": [
     "If you need to",
     "Start with"
    ],
    "rows": [
     [
      "Decide whether Plane fits your constraints",
      "Part 01, The context"
     ],
     [
      "Design a production deployment",
      "Part 02, The platform"
     ],
     [
      "Pass security and compliance review",
      "Part 03, The controls"
     ],
     [
      "Plan a move from Jira Data Center",
      "Part 04, For Jira Data Center customers"
     ],
     [
      "Standardize Plane across the enterprise",
      "Part 05, The decision"
     ]
    ],
    "minW": 520,
    "headBg": true
   }
  ]
 },
 {
  "id": "control-boundary",
  "num": "1.2",
  "chapter": "The context",
  "title": "Control boundary and editions",
  "blocks": [
   {
    "t": "p",
    "n": 241
   },
   {
    "t": "h3",
    "text": "Define the deployment control boundary"
   },
   {
    "t": "p",
    "n": 48
   },
   {
    "t": "p",
    "n": 81
   },
   {
    "t": "table",
    "caption": "The two self-managed deployment models",
    "head": [
     "Model",
     "Where Plane runs",
     "Required external path",
     "Best for"
    ],
    "rows": [
     [
      "Connected self-hosted",
      "Your servers, VPC, or Kubernetes cluster",
      104,
      "Private infrastructure with governed egress"
     ],
     [
      "Air-gapped",
      "A disconnected or sealed environment",
      "None at runtime",
      57
     ]
    ],
    "minW": 720,
    "headBg": true
   },
   {
    "t": "p",
    "n": 246
   },
   {
    "t": "p",
    "n": 302
   },
   {
    "t": "p",
    "n": 32
   },
   {
    "t": "ul",
    "items": [
     [
      "Commercial Edition",
      56
     ],
     [
      "Airgapped Edition",
      55
     ]
    ]
   },
   {
    "t": "p",
    "n": 157
   },
   {
    "t": "h3",
    "text": "Select the edition and commercial plan"
   },
   {
    "t": "table",
    "caption": "Editions and their boundaries",
    "head": [
     "Edition",
     "Purpose",
     "Important boundary"
    ],
    "rows": [
     [
      "Community",
      73,
      74
     ],
     [
      "Commercial",
      "Supported self-hosting with access to paid plans",
      54
     ],
     [
      "Airgapped",
      53,
      52
     ]
    ],
    "minW": 620,
    "headBg": true
   },
   {
    "t": "p",
    "n": 241
   },
   {
    "t": "p",
    "n": 166
   },
   {
    "t": "p",
    "n": 297
   }
  ]
 },
 {
  "id": "product-fit",
  "num": "1.3",
  "chapter": "The context",
  "title": "Product fit and proof criteria",
  "blocks": [
   {
    "t": "p",
    "n": 57
   },
   {
    "t": "p",
    "n": 83
   },
   {
    "t": "table",
    "caption": "Enterprise outcomes and the Plane capabilities that serve them",
    "head": [
     "Enterprise outcome",
     "Plane capability"
    ],
    "rows": [
     [
      "Plan and execute work",
      74
     ],
     [
      "Coordinate portfolios",
      57
     ],
     [
      "Model different work",
      74
     ],
     [
      "Control process",
      63
     ],
     [
      "Capture demand",
      58
     ],
     [
      "Keep knowledge with work",
      67
     ],
     [
      "Govern access",
      86
     ],
     [
      "Integrate systems",
      62
     ],
     [
      "Use AI under policy",
      66
     ]
    ],
    "minW": 560,
    "headBg": true
   },
   {
    "t": "p",
    "n": 200
   },
   {
    "t": "p",
    "n": 132
   },
   {
    "t": "h3",
    "text": "Define proof criteria before deploying"
   },
   {
    "t": "p",
    "n": 84
   },
   {
    "t": "p",
    "n": 48
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      105
     ],
     [
      "",
      103
     ],
     [
      "",
      82
     ],
     [
      "",
      78
     ]
    ]
   },
   {
    "t": "p",
    "n": 116
   },
   {
    "t": "callout",
    "label": "Proof gate",
    "n": 243
   }
  ]
 },
 {
  "id": "architecture",
  "num": "2.1",
  "chapter": "The platform",
  "title": "Platform architecture",
  "blocks": [
   {
    "t": "p",
    "n": 187
   },
   {
    "t": "p",
    "n": 162
   },
   {
    "t": "flow",
    "top": "Users, mobile clients, and API clients, through the load balancer, ingress, and TLS",
    "steps": [
     {
      "label": "Application, stateless",
      "sub": "Horizontal scaling behind the ingress",
      "chips": [
       "web",
       "space",
       "admin",
       "api",
       "live",
       "worker",
       "silo",
       "intake",
       "AI workers"
      ]
     },
     {
      "label": "Coordination, singletons",
      "sub": "Exactly one replica, or one run per release",
      "chips": [
       "beatworker",
       "monitor",
       "migrator"
      ]
     },
     {
      "label": "State, managed",
      "sub": "Replicated or managed equivalents in production",
      "chips": [
       "PostgreSQL",
       "Redis / Valkey",
       "RabbitMQ",
       "MinIO / S3",
       "OpenSearch",
       "AI database"
      ]
     }
    ],
    "caption": "Figure 1. Request and data flow across the Plane services"
   },
   {
    "t": "h3",
    "text": "The principal services"
   },
   {
    "t": "table",
    "caption": "Principal services and their scaling models",
    "head": [
     "Service",
     "Responsibility",
     "Scaling model"
    ],
    "rows": [
     [
      "web",
      "Primary application interface",
      "Stateless, horizontal"
     ],
     [
      "space",
      "Published projects, views, and pages",
      "Stateless, horizontal"
     ],
     [
      "admin",
      "Instance administration",
      "Stateless, horizontal"
     ],
     [
      "api",
      "Core REST API and data operations",
      "Stateless, horizontal"
     ],
     [
      "worker",
      60,
      "Stateless, horizontal"
     ],
     [
      "beatworker",
      "Periodic job scheduling",
      "Singleton"
     ],
     [
      "migrator",
      "Schema and data migrations during release",
      "Run-once job"
     ],
     [
      "live",
      "Real-time collaboration and presence",
      "Stateless, horizontal"
     ],
     [
      "monitor",
      "Licensing and activation",
      "Stateful singleton"
     ],
     [
      "silo",
      "GitHub, GitLab, Slack, and other integrations",
      "Stateless, horizontal"
     ],
     [
      "intake",
      "Email-to-work-item processing",
      "Stateless, horizontal"
     ],
     [
      "Plane AI services",
      "Search, duplicate detection, and AI interaction",
      50
     ]
    ],
    "minW": 620,
    "headBg": true
   },
   {
    "t": "h3",
    "text": "The backing services"
   },
   {
    "t": "ul",
    "items": [
     [
      "PostgreSQL",
      35
     ],
     [
      "Redis or Valkey",
      48
     ],
     [
      "RabbitMQ",
      25
     ],
     [
      "MinIO or S3-compatible storage",
      30
     ],
     [
      "OpenSearch",
      37
     ]
    ]
   },
   {
    "t": "p",
    "n": 63
   },
   {
    "t": "p",
    "n": 195
   }
  ]
 },
 {
  "id": "deployment",
  "num": "2.2",
  "chapter": "The platform",
  "title": "Deployment models and capacity",
  "blocks": [
   {
    "t": "p",
    "n": 213
   },
   {
    "t": "p",
    "n": 38
   },
   {
    "t": "table",
    "caption": "Deployment shape by stage",
    "head": [
     "Stage",
     "Recommended shape",
     "Why"
    ],
    "rows": [
     [
      "Local evaluation",
      "All-in-one or Docker Compose",
      "Fastest path to a working instance"
     ],
     [
      "Department pilot",
      56,
      53
     ],
     [
      "Enterprise production",
      "Kubernetes with external managed state",
      68
     ],
     [
      "Sealed environment",
      "Airgapped Docker or Kubernetes",
      "Zero public-internet dependency"
     ]
    ],
    "minW": 620,
    "headBg": true
   },
   {
    "t": "stats",
    "items": [
     [
      "4",
      "cores",
      "Docker minimum CPU"
     ],
     [
      "16",
      "GB",
      "Docker minimum memory"
     ],
     [
      "20",
      "GB",
      "Published baseline storage"
     ]
    ]
   },
   {
    "t": "p",
    "n": 198
   },
   {
    "t": "p",
    "n": 325
   }
  ]
 },
 {
  "id": "high-availability",
  "num": "2.3",
  "chapter": "The platform",
  "title": "High availability and resilience",
  "blocks": [
   {
    "t": "p",
    "n": 209
   },
   {
    "t": "p",
    "n": 62
   },
   {
    "t": "p",
    "n": 35
   },
   {
    "t": "table",
    "caption": "The three workload tiers",
    "head": [
     "Tier",
     "Workloads",
     "Production pattern"
    ],
    "rows": [
     [
      "1. Stateless",
      92,
      71
     ],
     [
      "2. Singleton and coordinator",
      "Beat workers, monitor, migrators",
      "Exactly one replica, or one run per release"
     ],
     [
      "3. Stateful",
      56,
      54
     ]
    ],
    "minW": 620,
    "headBg": true
   },
   {
    "t": "p",
    "n": 37
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      75
     ],
     [
      "",
      61
     ],
     [
      "",
      52
     ],
     [
      "",
      94
     ],
     [
      "",
      46
     ],
     [
      "",
      87
     ],
     [
      "",
      109
     ]
    ]
   },
   {
    "t": "p",
    "n": 213
   },
   {
    "t": "p",
    "n": 117
   }
  ]
 },
 {
  "id": "operations",
  "num": "2.4",
  "chapter": "The platform",
  "title": "Day-two operations",
  "blocks": [
   {
    "t": "p",
    "n": 189
   },
   {
    "t": "p",
    "n": 153
   },
   {
    "t": "p",
    "n": 43
   },
   {
    "t": "h3",
    "text": "Service health and traffic management"
   },
   {
    "t": "p",
    "n": 199
   },
   {
    "t": "callout",
    "label": "Do not cross the checks",
    "n": 172
   },
   {
    "t": "h3",
    "text": "Data protection and recovery"
   },
   {
    "t": "p",
    "n": 270
   },
   {
    "t": "p",
    "n": 78
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      33
     ],
     [
      "",
      37
     ],
     [
      "",
      37
     ],
     [
      "",
      40
     ],
     [
      "",
      45
     ],
     [
      "",
      59
     ],
     [
      "",
      63
     ]
    ]
   },
   {
    "t": "h3",
    "text": "Observability and operational telemetry"
   },
   {
    "t": "p",
    "n": 52
   },
   {
    "t": "ul",
    "items": [
     [
      "Traffic:",
      93
     ],
     [
      "State:",
      157
     ],
     [
      "Work:",
      122
     ],
     [
      "Licensing:",
      46
     ]
    ]
   },
   {
    "t": "h3",
    "text": "Release and change management"
   },
   {
    "t": "p",
    "n": 46
   },
   {
    "t": "steps",
    "items": [
     "Release-note and schema-change review",
     "Vulnerability and artifact review",
     "Backup verification",
     "Staging upgrade with application smoke tests",
     "Identity and permission tests",
     "Representative workflow and automation tests",
     "Rollback decision and documented recovery path",
     "Production deployment during an approved window",
     "Post-deployment validation"
    ]
   }
  ]
 },
 {
  "id": "air-gapped",
  "num": "2.5",
  "chapter": "The platform",
  "title": "Air-gapped supply chain",
  "blocks": [
   {
    "t": "p",
    "n": 39
   },
   {
    "t": "p",
    "n": 104
   },
   {
    "t": "p",
    "n": 302
   },
   {
    "t": "flow",
    "top": null,
    "steps": [
     {
      "label": "Connected staging zone",
      "sub": "Retrieve the release on an approved connected system",
      "chips": [
       "Verify images",
       "Signatures and hashes",
       "SBOM",
       "Release notes"
      ]
     },
     {
      "label": "Approved transfer",
      "sub": "Move verified artifacts across the boundary",
      "chips": [
       "Scanned artifacts",
       "Chain of custody"
      ]
     },
     {
      "label": "Internal registry",
      "sub": "The only source the sealed environment pulls from",
      "chips": [
       "OCI images",
       "Helm charts"
      ]
     },
     {
      "label": "Air-gapped deployment",
      "sub": "Disconnected operation",
      "chips": [
       "Offline license file",
       "Internal CA",
       "Internal IdP, Git, SMTP, storage, models"
      ]
     }
    ],
    "caption": "Figure 2. Artifact flow across the trust boundary"
   },
   {
    "t": "p",
    "n": 36
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      82
     ],
     [
      "",
      49
     ],
     [
      "",
      38
     ],
     [
      "",
      51
     ],
     [
      "",
      44
     ],
     [
      "",
      49
     ],
     [
      "",
      41
     ],
     [
      "",
      60
     ]
    ]
   },
   {
    "t": "p",
    "n": 123
   },
   {
    "t": "p",
    "n": 28
   },
   {
    "t": "quote",
    "n": 85
   }
  ]
 },
 {
  "id": "identity",
  "num": "3.1",
  "chapter": "The controls",
  "title": "Identity, access, and governance",
  "blocks": [
   {
    "t": "p",
    "n": 103
   },
   {
    "t": "p",
    "n": 173
   },
   {
    "t": "p",
    "n": 48
   },
   {
    "t": "h3",
    "text": "Identity and access management"
   },
   {
    "t": "p",
    "n": 175
   },
   {
    "t": "p",
    "n": 34
   },
   {
    "t": "ul",
    "items": [
     [
      "Workspace roles",
      49
     ],
     [
      "Project roles",
      59
     ]
    ]
   },
   {
    "t": "p",
    "n": 214
   },
   {
    "t": "p",
    "n": 48
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      77
     ],
     [
      "",
      64
     ],
     [
      "",
      64
     ],
     [
      "",
      42
     ],
     [
      "",
      38
     ],
     [
      "",
      89
     ]
    ]
   }
  ]
 },
 {
  "id": "egress",
  "num": "3.2",
  "chapter": "The controls",
  "title": "Network egress and telemetry",
  "blocks": [
   {
    "t": "p",
    "n": 65
   },
   {
    "t": "table",
    "caption": "The egress register",
    "head": [
     "Destination",
     "Connected self-hosted",
     "Air-gapped",
     "Owner"
    ],
    "rows": [
     [
      "Plane license service",
      "Required",
      "No",
      "Platform and procurement"
     ],
     [
      "Plane telemetry",
      "Optional, can be disabled",
      "No",
      "Security and privacy"
     ],
     [
      "SMTP",
      "If configured",
      "Internal only",
      "Messaging team"
     ],
     [
      "GitHub, GitLab, Slack, Sentry",
      "If configured",
      "Internal endpoints only",
      "Integration owner"
     ],
     [
      "OpenAI or Anthropic API",
      "If selected as model provider",
      "No",
      "AI governance"
     ],
     [
      "Internal model endpoint",
      "Optional",
      "Supported",
      "AI platform team"
     ],
     [
      "External object store, secrets, or search",
      "Based on architecture",
      "Internal and private endpoints only",
      "Platform team"
     ]
    ],
    "minW": 720,
    "headBg": true
   },
   {
    "t": "p",
    "n": 251
   },
   {
    "t": "p",
    "n": 82
   }
  ]
 },
 {
  "id": "ai-governance",
  "num": "3.3",
  "chapter": "The controls",
  "title": "AI governance and data boundaries",
  "blocks": [
   {
    "t": "p",
    "n": 247
   },
   {
    "t": "p",
    "n": 190
   },
   {
    "t": "p",
    "n": 48
   },
   {
    "t": "p",
    "n": 301
   },
   {
    "t": "p",
    "n": 10
   },
   {
    "t": "quote",
    "n": 80
   },
   {
    "t": "p",
    "n": 139
   }
  ]
 },
 {
  "id": "compliance",
  "num": "3.4",
  "chapter": "The controls",
  "title": "Assurance and compliance",
  "blocks": [
   {
    "t": "p",
    "n": 194
   },
   {
    "t": "p",
    "n": 101
   },
   {
    "t": "p",
    "n": 84
   },
   {
    "t": "table",
    "caption": "Control ownership on self-hosted deployments",
    "head": [
     "Control area",
     "Plane provides",
     "Customer must implement or verify"
    ],
    "rows": [
     [
      "Transport security",
      "Application and ingress support",
      65
     ],
     [
      "Encryption at rest",
      49,
      82
     ],
     [
      "Identity",
      "SAML, OIDC, LDAP, SCIM, roles",
      62
     ],
     [
      "Authorization",
      63,
      "Role design, least privilege, periodic review"
     ],
     [
      "Audit",
      50,
      66
     ],
     [
      "Vulnerability management",
      "Product releases and security fixes",
      72
     ],
     [
      "Resilience",
      "Health endpoints, backup tooling, HA guidance",
      75
     ],
     [
      "Air-gap assurance",
      "Offline deployment model",
      77
     ]
    ],
    "minW": 720,
    "headBg": true
   },
   {
    "t": "p",
    "n": 106
   }
  ]
 },
 {
  "id": "jira-dc-transition",
  "num": "4.1",
  "chapter": "For Jira Data Center customers",
  "title": "Jira Data Center transition",
  "blocks": [
   {
    "t": "p",
    "n": 163
   },
   {
    "t": "p",
    "n": 338
   },
   {
    "t": "p",
    "n": 302
   },
   {
    "t": "p",
    "n": 96
   },
   {
    "t": "table",
    "caption": "The Data Center end-of-life timeline",
    "head": [
     "Date",
     "What changes",
     "Enterprise implication"
    ],
    "rows": [
     [
      "30 Mar 2026",
      "New Data Center sales end",
      "New on-prem Atlassian standardization is closed"
     ],
     [
      "30 Mar 2028",
      50,
      55
     ],
     [
      "28 Mar 2029",
      70,
      64
     ]
    ],
    "minW": 620,
    "headBg": true
   },
   {
    "t": "p",
    "n": 43
   },
   {
    "t": "quote",
    "n": 125
   },
   {
    "t": "p",
    "n": 67
   },
   {
    "t": "p",
    "n": 55
   },
   {
    "t": "p",
    "n": 75
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      69
     ],
     [
      "",
      67
     ],
     [
      "",
      67
     ],
     [
      "",
      83
     ],
     [
      "",
      74
     ],
     [
      "",
      69
     ]
    ]
   },
   {
    "t": "p",
    "n": 62
   },
   {
    "t": "callout",
    "label": "Central thesis",
    "n": 204
   },
   {
    "t": "p",
    "n": 116
   },
   {
    "t": "p",
    "n": 43
   },
   {
    "t": "ul",
    "items": [
     [
      "Fidelity.",
      81
     ],
     [
      "Simplification.",
      83
     ]
    ]
   },
   {
    "t": "p",
    "n": 241
   }
  ]
 },
 {
  "id": "jira-parity",
  "num": "4.2",
  "chapter": "For Jira Data Center customers",
  "title": "Parity, gaps, and comparison",
  "blocks": [
   {
    "t": "p",
    "n": 82
   },
   {
    "t": "p",
    "n": 273
   },
   {
    "t": "p",
    "n": 291
   },
   {
    "t": "h3",
    "text": "Platform comparison"
   },
   {
    "t": "table",
    "caption": "Platform comparison of Jira Data Center and Plane Commercial or Airgapped",
    "head": [
     "Dimension",
     "Data Center",
     "Plane"
    ],
    "rows": [
     [
      "Product horizon",
      83,
      "Actively developed self-hosted product line"
     ],
     [
      "Deployment",
      "Customer-managed Data Center",
      49
     ],
     [
      "HA model",
      "Mature clustered deployment",
      53
     ],
     [
      "Core work model",
      "Deep and highly configurable",
      52
     ],
     [
      "Knowledge",
      "Confluence is a separate product",
      "Project Pages and workspace Wiki built in"
     ],
     [
      "Service workflows",
      53,
      64
     ],
     [
      "Workflow automation",
      "Native rules plus a large Marketplace ecosystem",
      68
     ],
     [
      "Marketplace breadth",
      "Very large and mature",
      51
     ],
     [
      "Identity and governance",
      "Mature enterprise controls",
      68
     ],
     [
      "AI",
      "Atlassian Cloud direction",
      69
     ],
     [
      "Extensibility",
      "REST APIs and Marketplace apps",
      61
     ],
     [
      "Migration",
      "Source system",
      74
     ]
    ],
    "minW": 680,
    "headBg": false
   },
   {
    "t": "h3",
    "text": "Pressure-test these before declaring parity"
   },
   {
    "t": "p",
    "n": 85
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      90
     ],
     [
      "",
      97
     ],
     [
      "",
      56
     ],
     [
      "",
      74
     ],
     [
      "",
      66
     ],
     [
      "",
      69
     ],
     [
      "",
      77
     ],
     [
      "",
      72
     ],
     [
      "",
      104
     ]
    ]
   },
   {
    "t": "p",
    "n": 116
   },
   {
    "t": "callout",
    "label": "Proof gate",
    "n": 166
   },
   {
    "t": "h3",
    "text": "The cost baseline"
   },
   {
    "t": "p",
    "n": 394
   },
   {
    "t": "p",
    "n": 106
   }
  ]
 },
 {
  "id": "migration-principles",
  "num": "4.3",
  "chapter": "For Jira Data Center customers",
  "title": "Principles and workstreams",
  "blocks": [
   {
    "t": "p",
    "n": 178
   },
   {
    "t": "p",
    "n": 57
   },
   {
    "t": "p",
    "n": 167
   },
   {
    "t": "table",
    "caption": "The migration workstream model",
    "head": [
     "Layer",
     "What it contains",
     "Migration approach"
    ],
    "rows": [
     [
      "Data",
      72,
      "Import, reconcile, and verify"
     ],
     [
      "Configuration",
      68,
      "Map, rebuild, simplify, and test"
     ],
     [
      "Behavior",
      71,
      "Redesign, integrate, train, and govern"
     ]
    ],
    "minW": 620,
    "headBg": true
   },
   {
    "t": "p",
    "n": 161
   },
   {
    "t": "p",
    "n": 30
   }
  ]
 },
 {
  "id": "importer",
  "num": "4.4",
  "chapter": "For Jira Data Center customers",
  "title": "Importer coverage and mapping",
  "blocks": [
   {
    "t": "p",
    "n": 64
   },
   {
    "t": "table",
    "caption": "Documented Jira importer coverage",
    "head": [
     "Jira",
     "Plane",
     "Documented behavior"
    ],
    "rows": [
     [
      "Labels",
      "Labels",
      "Imported"
     ],
     [
      "Statuses",
      "States",
      "Mapped; missing states can be created"
     ],
     [
      "Priorities",
      "Priorities",
      "Mapped"
     ],
     [
      "Users",
      "Users",
      "CSV-assisted import or later manual setup"
     ],
     [
      "Issues",
      "Work items",
      "Imported"
     ],
     [
      "Parent-child relation",
      "Parent-child relation",
      "Included"
     ],
     [
      "Comments",
      "Work-item comments",
      53
     ],
     [
      "Attachments",
      "Work-item attachments",
      "Imported"
     ],
     [
      "Reporter",
      "Created by",
      "Mapped"
     ],
     [
      "Created date",
      "Created at",
      "Mapped"
     ],
     [
      "Assignee",
      "Assignees",
      "Mapped when users are imported"
     ],
     [
      "Issue types",
      "Work-item types on paid plans",
      "Imported when the feature is enabled"
     ],
     [
      "Images in descriptions",
      "Images in work-item descriptions",
      "Imported"
     ],
     [
      "Linked issues",
      "Links",
      "Original Jira backlinks included"
     ],
     [
      "Sprints",
      "Cycles",
      "Work items and dates included"
     ],
     [
      "Components",
      "Modules",
      "Work items included"
     ]
    ],
    "minW": 620,
    "headBg": true
   },
   {
    "t": "p",
    "n": 121
   },
   {
    "t": "p",
    "n": 164
   },
   {
    "t": "h3",
    "text": "Configuration mapping and reimplementation"
   },
   {
    "t": "p",
    "n": 39
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      71
     ],
     [
      "",
      58
     ],
     [
      "",
      49
     ],
     [
      "",
      48
     ],
     [
      "",
      65
     ],
     [
      "",
      50
     ],
     [
      "",
      60
     ],
     [
      "",
      33
     ],
     [
      "",
      52
     ],
     [
      "",
      38
     ]
    ]
   },
   {
    "t": "p",
    "n": 66
   },
   {
    "t": "ul",
    "items": [
     [
      "JQL-style filtering",
      126
     ],
     [
      "Workflow control",
      81
     ],
     [
      "Scripted automation",
      57
     ],
     [
      "Portfolio rollups",
      25
     ],
     [
      "Confluence-like knowledge",
      50
     ],
     [
      "Request capture",
      38
     ]
    ]
   },
   {
    "t": "p",
    "n": 129
   }
  ]
 },
 {
  "id": "migration-program",
  "num": "4.5",
  "chapter": "For Jira Data Center customers",
  "title": "Controlled migration program",
  "blocks": [
   {
    "t": "p",
    "n": 89
   },
   {
    "t": "h3",
    "text": "Phase 1, estate discovery"
   },
   {
    "t": "p",
    "n": 40
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      47
     ],
     [
      "",
      40
     ],
     [
      "",
      41
     ],
     [
      "",
      59
     ],
     [
      "",
      50
     ],
     [
      "",
      66
     ],
     [
      "",
      37
     ],
     [
      "",
      43
     ],
     [
      "",
      35
     ]
    ]
   },
   {
    "t": "p",
    "n": 74
   },
   {
    "t": "h3",
    "text": "Phase 2, target-state modeling"
   },
   {
    "t": "p",
    "n": 68
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      46
     ],
     [
      "",
      63
     ],
     [
      "",
      64
     ],
     [
      "",
      62
     ],
     [
      "",
      70
     ],
     [
      "",
      70
     ],
     [
      "",
      93
     ]
    ]
   },
   {
    "t": "p",
    "n": 97
   },
   {
    "t": "h3",
    "text": "Phase 3, representative pilot"
   },
   {
    "t": "p",
    "n": 55
   },
   {
    "t": "p",
    "n": 242
   },
   {
    "t": "p",
    "n": 70
   },
   {
    "t": "h3",
    "text": "Phase 4, reconciliation and acceptance"
   },
   {
    "t": "p",
    "n": 23
   },
   {
    "t": "table",
    "caption": "Acceptance checks by category",
    "head": [
     "Category",
     "Acceptance check"
    ],
    "rows": [
     [
      "Counts",
      67
     ],
     [
      "Identity",
      50
     ],
     [
      "Content",
      58
     ],
     [
      "Configuration",
      "Types, states, priorities, properties, workflows"
     ],
     [
      "Access",
      58
     ],
     [
      "Operations",
      50
     ],
     [
      "Integrations",
      "Git, Slack, Sentry, webhooks, internal systems"
     ],
     [
      "Performance",
      59
     ],
     [
      "Governance",
      56
     ]
    ],
    "minW": 560,
    "headBg": true
   },
   {
    "t": "p",
    "n": 92
   },
   {
    "t": "h3",
    "text": "Phase 5, production cutover"
   },
   {
    "t": "p",
    "n": 24
   },
   {
    "t": "steps",
    "items": [
     "Announce the cutover and the support path",
     "Complete the last incremental Jira-to-Plane synchronization",
     "Place Jira in read-only mode",
     "Reconcile final counts and exceptions",
     "Switch SSO launch points, integrations, and internal links",
     "Execute role-based smoke tests",
     "Open Plane as the system of record",
     "Keep Jira read-only for the approved retention window",
     "Monitor adoption, errors, and support demand",
     "Decommission only after legal, audit, and business sign-off"
    ]
   },
   {
    "t": "p",
    "n": 136
   },
   {
    "t": "p",
    "n": 204
   }
  ]
 },
 {
  "id": "integrity-contract",
  "num": "4.6",
  "chapter": "For Jira Data Center customers",
  "title": "Data integrity contract",
  "blocks": [
   {
    "t": "p",
    "n": 73
   },
   {
    "t": "p",
    "n": 32
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      46
     ],
     [
      "",
      47
     ],
     [
      "",
      56
     ],
     [
      "",
      59
     ],
     [
      "",
      43
     ],
     [
      "",
      32
     ],
     [
      "",
      31
     ]
    ]
   },
   {
    "t": "p",
    "n": 148
   },
   {
    "t": "p",
    "n": 43
   }
  ]
 },
 {
  "id": "operating-model",
  "num": "5.1",
  "chapter": "The decision",
  "title": "Enterprise operating model",
  "blocks": [
   {
    "t": "p",
    "n": 49
   },
   {
    "t": "p",
    "n": 137
   },
   {
    "t": "h3",
    "text": "A common work model"
   },
   {
    "t": "pre",
    "label": "Common work model",
    "code": "Enterprise Grid\n└── Workspaces\n    ├── Teamspaces\n    ├── Initiatives\n    │   └── Projects and epics\n    └── Projects\n        ├── Work-item types\n        ├── Work items and sub-work items\n        ├── Cycles\n        ├── Modules\n        ├── Milestones and releases\n        └── Pages"
   },
   {
    "t": "p",
    "n": 271
   },
   {
    "t": "h3",
    "text": "Integrated knowledge and execution"
   },
   {
    "t": "p",
    "n": 139
   },
   {
    "t": "p",
    "n": 263
   },
   {
    "t": "p",
    "n": 48
   },
   {
    "t": "quote",
    "n": 79
   },
   {
    "t": "h3",
    "text": "Reusable governance standards"
   },
   {
    "t": "p",
    "n": 107
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      52
     ],
     [
      "",
      61
     ],
     [
      "",
      30
     ],
     [
      "",
      44
     ],
     [
      "",
      40
     ],
     [
      "",
      22
     ],
     [
      "",
      41
     ]
    ]
   },
   {
    "t": "p",
    "n": 267
   },
   {
    "t": "p",
    "n": 46
   }
  ]
 },
 {
  "id": "extensibility",
  "num": "5.2",
  "chapter": "The decision",
  "title": "Extensibility and automation",
  "blocks": [
   {
    "t": "p",
    "n": 45
   },
   {
    "t": "table",
    "caption": "Extensibility layers and what they are best for",
    "head": [
     "Layer",
     "Best for"
    ],
    "rows": [
     [
      "Built-in automations",
      "Common trigger-condition-action workflows"
     ],
     [
      "Workflows and approvals",
      "Controlled state transitions and human gates"
     ],
     [
      "Plane Runner",
      81
     ],
     [
      "REST API",
      "Internal applications and system integration"
     ],
     [
      "Webhooks",
      "Event-driven synchronization"
     ],
     [
      "Native integrations",
      52
     ],
     [
      "MCP server",
      "AI clients and agents acting through Plane tools"
     ]
    ],
    "minW": 560,
    "headBg": true
   },
   {
    "t": "p",
    "n": 167
   },
   {
    "t": "p",
    "n": 181
   },
   {
    "t": "p",
    "n": 220
   },
   {
    "t": "p",
    "n": 60
   },
   {
    "t": "p",
    "n": 251
   },
   {
    "t": "callout",
    "label": "Goal",
    "n": 88
   }
  ]
 },
 {
  "id": "economics",
  "num": "5.3",
  "chapter": "The decision",
  "title": "Economics",
  "blocks": [
   {
    "t": "p",
    "n": 57
   },
   {
    "t": "p",
    "n": 427
   },
   {
    "t": "p",
    "n": 225
   },
   {
    "t": "p",
    "n": 143
   },
   {
    "t": "h3",
    "text": "Where Plane fits best"
   },
   {
    "t": "p",
    "n": 145
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      78
     ],
     [
      "",
      76
     ],
     [
      "",
      32
     ],
     [
      "",
      64
     ],
     [
      "",
      57
     ],
     [
      "",
      52
     ],
     [
      "",
      54
     ]
    ]
   },
   {
    "t": "p",
    "n": 193
   }
  ]
 },
 {
  "id": "validation-program",
  "num": "5.4",
  "chapter": "The decision",
  "title": "90-day validation program",
  "blocks": [
   {
    "t": "p",
    "n": 92
   },
   {
    "t": "h3",
    "text": "Days 0–15, confirm the control boundary"
   },
   {
    "t": "p",
    "n": 250
   },
   {
    "t": "h3",
    "text": "Days 16–30, establish the platform"
   },
   {
    "t": "p",
    "n": 243
   },
   {
    "t": "h3",
    "text": "Days 31–60, validate with real work"
   },
   {
    "t": "p",
    "n": 427
   },
   {
    "t": "h3",
    "text": "Days 61–75, validate operational readiness"
   },
   {
    "t": "p",
    "n": 224
   },
   {
    "t": "h3",
    "text": "Days 76–90, complete the enterprise decision"
   },
   {
    "t": "p",
    "n": 234
   },
   {
    "t": "h3",
    "text": "Decision gates and exit criteria"
   },
   {
    "t": "p",
    "n": 59
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      34
     ],
     [
      "",
      37
     ],
     [
      "",
      44
     ],
     [
      "",
      28
     ],
     [
      "",
      55
     ],
     [
      "",
      53
     ],
     [
      "",
      68
     ]
    ]
   },
   {
    "t": "p",
    "n": 49
   },
   {
    "t": "ul",
    "items": [
     [
      "",
      38
     ],
     [
      "",
      47
     ],
     [
      "",
      63
     ]
    ]
   }
  ]
 },
 {
  "id": "decision-standard",
  "num": "5.5",
  "chapter": "The decision",
  "title": "Decision standard",
  "blocks": [
   {
    "t": "p",
    "n": 94
   },
   {
    "t": "p",
    "n": 146
   },
   {
    "t": "p",
    "n": 41
   },
   {
    "t": "p",
    "n": 345
   },
   {
    "t": "p",
    "n": 189
   },
   {
    "t": "p",
    "n": 173
   },
   {
    "t": "quote",
    "n": 70
   }
  ]
 },
 {
  "id": "references",
  "num": "5.6",
  "chapter": "The decision",
  "title": "Evidence and references",
  "blocks": [
   {
    "t": "p",
    "n": 263
   },
   {
    "t": "refs",
    "items": [
     [
      "Atlassian",
      "Data Center End of Life",
      "https://www.atlassian.com/licensing/data-center-end-of-life"
     ],
     [
      "Plane",
      "Self-hosted Plane",
      "https://plane.so/self-hosted"
     ],
     [
      "Plane Developer Docs",
      "Understanding Plane’s editions",
      "https://developers.plane.so/self-hosting/editions-and-versions"
     ],
     [
      "Plane",
      "Pricing",
      "https://plane.so/pricing"
     ],
     [
      "Plane",
      "Project management",
      "https://plane.so/project-management"
     ],
     [
      "Plane Developer Docs",
      "Plane self-hosted architecture",
      "https://developers.plane.so/self-hosting/plane-architecture"
     ],
     [
      "Plane Developer Docs",
      "Kubernetes deployment",
      "https://developers.plane.so/self-hosting/methods/kubernetes"
     ],
     [
      "Plane Developer Docs",
      "High Availability on Kubernetes",
      "https://developers.plane.so/self-hosting/govern/high-availability"
     ],
     [
      "Plane Developer Docs",
      "Command line tools",
      "https://developers.plane.so/self-hosting/manage/prime-cli"
     ],
     [
      "Plane Developer Docs",
      "Health checks",
      "https://developers.plane.so/self-hosting/manage/health-checks"
     ],
     [
      "Plane Developer Docs",
      "Backup and restore data",
      "https://developers.plane.so/self-hosting/manage/backup-restore"
     ],
     [
      "Plane Developer Docs",
      "Airgapped deployment architecture",
      "https://developers.plane.so/self-hosting/methods/airgapped-requirements"
     ],
     [
      "Plane Developer Docs",
      "Deploy Plane Commercial in an Airgapped Kubernetes Environment",
      "https://developers.plane.so/self-hosting/methods/airgapped-edition-kubernetes"
     ],
     [
      "Plane Developer Docs",
      "Data collection and usage",
      "https://developers.plane.so/self-hosting/telemetry"
     ],
     [
      "Plane Developer Docs",
      "Configure Plane AI",
      "https://developers.plane.so/self-hosting/govern/plane-ai/configure-plane-ai"
     ],
     [
      "Plane",
      "Security",
      "https://plane.so/security"
     ],
     [
      "Plane",
      "Enterprise Grid",
      "https://plane.so/enterprise-grid"
     ],
     [
      "Plane Docs",
      "Permission schemes and the permissions matrix",
      "https://docs.plane.so/roles-and-permissions/permission-schemes"
     ],
     [
      "Plane Docs",
      "Jira importer for Cloud, Server, and Data Center",
      "https://docs.plane.so/importers/jira"
     ],
     [
      "Plane",
      "Plane vs Jira",
      "https://plane.so/plane-vs-jira"
     ],
     [
      "Plane Docs",
      "Plane Query Language",
      "https://docs.plane.so/core-concepts/issues/plane-query-language"
     ],
     [
      "Plane Docs",
      "Workflows and Approvals",
      "https://docs.plane.so/workflows-and-approvals/workflows"
     ],
     [
      "Plane Docs",
      "Initiatives",
      "https://docs.plane.so/core-concepts/projects/initiatives"
     ],
     [
      "Plane Docs",
      "Wiki",
      "https://docs.plane.so/core-concepts/pages/wiki"
     ],
     [
      "Plane Developer Docs",
      "API introduction",
      "https://developers.plane.so/api-reference/introduction"
     ],
     [
      "Plane Developer Docs",
      "Webhooks",
      "https://developers.plane.so/dev-tools/intro-webhooks"
     ],
     [
      "Plane Developer Docs",
      "MCP server",
      "https://developers.plane.so/dev-tools/mcp-server"
     ]
    ]
   },
   {
    "t": "note",
    "n": 154
   }
  ]
 }
]

export const WP_FAQ = [["What is the difference between connected self-hosted and air-gapped Plane?", 446], ["Which edition should an enterprise run?", 402], ["What does the Jira importer actually move?", 467], ["What is the documented high-availability model?", 327], ["Does self-hosting keep Plane AI inside our network?", 377], ["What compliance posture does Plane state?", 379]]
export const WP_INTRO_LEN = 224
export const WP_CTA_LEN = 180
