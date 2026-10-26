// Mega-menu content — CLONE_SPEC §1 "Mega-menu dropdown". Icons: ASSET_MANIFEST "Header / nav".
const icon = (name) => `/assets/nav-icon-${name}.svg`

export const PRODUCT = {
  products: {
    heading: 'Products',
    items: [
      { title: 'Project Management', desc: 'Plan, track, and ship work', href: '/project-management', icon: icon('project-management') },
      { title: 'Wiki', desc: 'Docs tied to your work', href: '/wiki', icon: icon('wiki') },
      { title: 'Plane AI', desc: 'AI agents for your workspace', href: '/ai', icon: icon('ai') },
    ],
  },
  features: {
    heading: 'Feature Capabilities',
    items: [
      { title: 'Intake', desc: 'Triage and route incoming work', href: '/intake', icon: icon('intake') },
      { title: 'Work Items', desc: 'Structured tasks with traceability', href: '/work-items', icon: icon('work-items') },
      { title: 'Epics and Initiatives', desc: 'Big-picture goals, rolled-up progress', href: '/epics-initiatives', icon: icon('epics-initiatives') },
      { title: 'Cycles', desc: 'Time-boxed sprints with burn-downs', href: '/cycles', icon: icon('cycles') },
      { title: 'Dashboards', desc: 'Velocity, workload, and bottlenecks', href: '/dashboards', icon: icon('dashboards') },
      { title: 'Teamspaces', desc: 'Isolated spaces, shared governance', href: '/teamspaces', icon: icon('teamspaces') },
      { title: 'Workflows and Approvals', desc: 'Rule-based workflows with approvals', href: '/workflows-and-approvals', icon: icon('workflows-and-approvals') },
    ],
  },
  selfHost: {
    title: 'Self-host Plane',
    desc: 'Everything on cloud, deployed on your infrastructure.',
    href: '/self-hosted',
    icon: icon('self-hosted'),
  },
  integrations: [
    { name: 'Slack', href: '/marketplace/slack', icon: '/assets/integration-slack.svg' },
    { name: 'GitHub', href: '/marketplace/github', icon: '/assets/integration-github.svg' },
    { name: 'Sentry', href: '/marketplace/sentry', icon: '/assets/integration-sentry.svg' },
    { name: 'GitLab', href: '/marketplace/gitlab', icon: '/assets/integration-gitlab.svg' },
  ],
  changelog: 'Page-level comments, custom-property dashboards, and more | Oct 15, 2026',
}

export const SOLUTIONS = {
  columns: [
    {
      heading: 'Use cases',
      href: '/solutions',
      items: [
        { title: 'Product', desc: 'Ship features from intake to release', href: '/solutions/product', icon: icon('product') },
        { title: 'Operations', desc: 'Coordinate work across every team', href: '/solutions/operations', icon: icon('operations') },
        { title: 'Marketing', desc: 'Campaigns, launches, content', href: '/solutions/marketing', icon: icon('marketing') },
        { title: 'Agile', desc: 'Cycles, backlogs, burn-downs built in', href: '/solutions/agile', icon: icon('agile') },
        { title: 'Design', desc: 'Track reviews, feedback, handoffs', href: '/solutions/design', icon: icon('design') },
      ],
    },
    {
      heading: 'Industries',
      href: '/industries',
      items: [
        { title: 'Aerospace', desc: 'Mission-critical program control', href: '/industries/aerospace', icon: icon('aerospace') },
        { title: 'Finance', desc: 'Audit-ready financial workflows', href: '/industries/finance', icon: icon('finance') },
        { title: 'Defense', desc: 'Air-gapped, classified environments', href: '/industries/defense', icon: icon('defense') },
        { title: 'Manufacturing', desc: 'Traceable production programs', href: '/industries/manufacturing', icon: icon('manufacturing') },
        { title: 'Retail', desc: 'Multi-location store operations', href: '/industries/retail', icon: icon('retail') },
      ],
    },
    {
      heading: 'Scale',
      items: [
        { title: 'Startups', desc: 'Start fast, add structure as you grow', href: '/solutions/startups', icon: icon('startups') },
        { title: 'Growing Teams', desc: 'Scale without the overhead', href: '/solutions/growing-teams', icon: icon('growing-teams') },
        { title: 'Enterprise', desc: 'Total control, private infrastructure', href: '/solutions/enterprise-teams', icon: icon('enterprise-teams') },
      ],
    },
  ],
  competitors: [
    { name: 'Linear', href: '/plane-vs-linear', icon: '/assets/competitor-linear.svg' },
    { name: 'Jira', href: '/plane-vs-jira', icon: '/assets/competitor-jira.svg' },
    { name: 'Asana', href: '/plane-vs-asana', icon: '/assets/competitor-asana.svg' },
    { name: 'Monday', href: '/plane-vs-monday', icon: '/assets/competitor-monday.svg' },
    { name: 'ClickUp', href: '/plane-vs-clickup', icon: '/assets/competitor-clickup.svg' },
  ],
}

export const RESOURCES = {
  columns: [
    {
      heading: 'Discover',
      items: [
        { title: 'Blog', desc: 'Updates, insights, and deep dives', href: '/blog', icon: icon('blog') },
        { title: 'What’s new', desc: 'The full changelog, every release', href: '/changelog', icon: icon('changelog') },
        { title: 'Community', desc: 'Join the conversation on Forum', href: 'https://forum.plane.so/', icon: icon('forum-plane-so') },
        { title: 'Customers', desc: 'Stories from teams using Plane', href: '/customers', icon: icon('customers') },
      ],
    },
    {
      heading: 'Learn',
      items: [
        { title: 'Docs', desc: 'Product guides and references', href: 'https://docs.plane.so/', icon: icon('docs-plane-so') },
        { title: 'API reference', desc: 'REST API, webhooks, and SDKs', href: 'https://developers.plane.so/api-reference/introduction', icon: icon('developers-plane-so-api-reference-introd') },
        { title: 'Security', desc: 'Compliance, certifications, and trust', href: '/security', icon: icon('security') },
      ],
    },
  ],
  latest: {
    tag: 'Cloud',
    title: 'Page-level comments, custom-property dashboards, and more | Oct 15, 2026',
    date: '15 Oct, 2026',
    href: '/changelog',
    icon: '/assets/nav-icon-changelog-2026-10-15-page-comments-dashb.svg',
  },
}

export const MENUS = [
  { key: 'product', label: 'Product' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'resources', label: 'Resources' },
]
