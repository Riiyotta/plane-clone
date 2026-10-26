// FAQ data: questions are reproduced, answers are placeholder copy of the live answer length.
import { ph } from './ph.js'

export const faq = (rows, seed = 0) => rows.map(([q, n], i) => ({ q, a: ph(n, seed + i) }))

export const PRO_FAQ = faq([
  ['What does Plane Pro include?', 293],
  ['How much does Plane Pro cost?', 146],
  ['Is there a free trial?', 111],
  ['What is the difference between Pro and Business?', 217],
  ['How do AI credits work on Pro?', 275],
  ['Does Pro support self-hosting?', 112],
  ['Can I migrate from other tools?', 169],
  ['What happens if I outgrow Pro?', 128],
], 893)

export const BUSINESS_FAQ = faq([
  ['What does Plane Business include?', 247],
  ['How much does Plane Business cost?', 110],
  ['Is there a free trial?', 111],
  ['What is the difference between Pro and Business?', 169],
  ['What is the difference between Business and Enterprise?', 197],
  ['Does Business include SSO?', 81],
  ['Does Business support self-hosting?', 57],
  ['Can I migrate from other tools?', 120],
], 933)

export const ENTERPRISE_FAQ = faq([
  ['What does Enterprise Grid include over Business?', 166],
  ['Can Plane handle thousands of users across multiple business units?', 168],
  ['How does Plane AI work on enterprise deployments?', 185],
  ['What compliance standards does Plane support?', 120],
  ['Can we run Plane in an air-gapped environment?', 149],
  ['Can we migrate from Jira without losing data?', 172],
  ['Can Plane consolidate multiple Jira instances?', 150],
  ['What support comes with Enterprise Grid?', 94],
], 973)
