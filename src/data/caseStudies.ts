import cs1Asset from "@/assets/case-studies/cs1.webp.asset.json";
import cs2Asset from "@/assets/case-studies/cs2.webp.asset.json";
import cs3Asset from "@/assets/case-studies/cs3.webp.asset.json";
import cs4Asset from "@/assets/case-studies/cs4.webp.asset.json";

export type Stat = { icon: string; value: string; label: string };
export type CaseStudy = {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  stats: Stat[];
  keyImpact: string[];
  businessContext: string[];
  challenges: { icon: string; text: string }[];
  solution: string[];
  approach: { icon: string; title: string; text: string }[];
  technologies: { name: string; color?: string }[];
  results: { icon: string; value: string; label: string }[];
  testimonial: { quote: string; author: string; company: string };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "d365-support",
    slug: "d365-fo-maintenance-and-support",
    category: "support",
    categoryLabel: "D365 F&O SUPPORT",
    title: "D365 F&O Maintenance and Support",
    description:
      "Providing end-to-end maintenance and support for D365 F&O across multiple modules, ensuring smooth operations, issue resolution, and continuous improvement.",
    image: cs2Asset.url,
    stats: [
      { icon: "users", value: "6", label: "ISVs Supported" },
      { icon: "building", value: "70+", label: "Legal Entities" },
      { icon: "globe", value: "9", label: "Countries" },
      { icon: "clock", value: "24/7", label: "Support Coverage" },
      { icon: "shield", value: "Dedicated", label: "Support Team" },
    ],
    keyImpact: [
      "Improved system stability and user satisfaction",
      "Faster issue resolution and reduced downtime",
      "Optimized license utilization and operational efficiency",
      "Standardized reporting and process automation",
    ],
    businessContext: [
      "Nash Squared, a global provider of technology and talent solutions with over 3,000 employees across 36 locations, relies on Microsoft Dynamics 365 Finance & Operations for its core financial and operational processes.",
      "To ensure system stability, optimize performance, and drive continuous improvement, the organization partnered with Nextgenlytics for comprehensive D365 F&O support.",
    ],
    challenges: [
      { icon: "file", text: "Supporting 6 ISVs and 70+ legal entities across multiple countries with diverse business needs." },
      { icon: "grid", text: "Multiple 3rd party integrations with D365 F&O added complexity to operations." },
      { icon: "cog", text: "Need for standardization of reports and processes across entities." },
      { icon: "cloud", text: "Timely issue resolution, system enhancements, and proactive maintenance." },
    ],
    solution: [
      "End-to-end application support across core modules including Finance, HR, Procurement, Sales, and more.",
      "Dedicated support teams working in a drift-based model aligned with GMT for round-the-clock coverage.",
      "Management of 6 ISVs and 70+ legal entities with process standardization and system optimizations.",
      "Azure Synapse configuration and support for analytics and management reporting.",
      "Regular system health checks, incident management, user support, and change management.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Understood business processes, systems and support needs" },
      { icon: "map", title: "Plan", text: "Defined support strategy and SLA framework" },
      { icon: "target", title: "Execute", text: "Delivered end-to-end support and issue resolution" },
      { icon: "trend", title: "Optimize", text: "Continuous improvement and process optimization" },
    ],
    technologies: [
      { name: "Microsoft Dynamics 365" },
      { name: "Azure" },
      { name: "Power BI" },
      { name: "Azure Synapse Analytics" },
      { name: "SQL Server" },
      { name: "Logic Apps" },
    ],
    results: [
      { icon: "clock", value: "30%", label: "Reduction in issue resolution time" },
      { icon: "shield", value: "99.9%", label: "System availability achieved" },
      { icon: "trend", value: "20%", label: "Improvement in reporting efficiency" },
      { icon: "dollar", value: "Optimized", label: "License utilization and operational costs" },
    ],
    testimonial: {
      quote:
        "Nextgenlytics has been a reliable partner in managing our D365 F&O environment. Their proactive approach, deep functional expertise, and commitment to service excellence have significantly improved our operational efficiency.",
      author: "IT Director, Nash Squared",
      company: "Nash Squared",
    },
  },
  {
    id: "analytics-d365",
    slug: "analytics-for-d365-fo-process",
    category: "analytics",
    categoryLabel: "ANALYTICS",
    title: "Analytics for D365 F&O Process",
    description:
      "Leveraging analytics and Power BI to deliver actionable insights, automate reporting, and enable data-driven decision-making across finance and operations.",
    image: cs3Asset.url,
    stats: [
      { icon: "grid", value: "40+", label: "Dashboards" },
      { icon: "file", value: "100+", label: "Reports Automated" },
      { icon: "clock", value: "Real-time", label: "Insights" },
      { icon: "shield", value: "1 Source", label: "of Truth" },
      { icon: "trend", value: "3x", label: "Faster Decisions" },
    ],
    keyImpact: [
      "Enhanced visibility into business performance",
      "Automated reporting saving time and effort",
      "Better decision-making with real-time insights",
      "Unified data model across finance and operations",
    ],
    businessContext: [
      "Harvey Nash delivers permanent and contractor recruitment, MSP & VMS partnership and NextGen Hire-Train-Deploy solutions to clients of every size, requiring rich analytical insight across a complex D365 F&O estate.",
    ],
    challenges: [
      { icon: "file", text: "D365 F&O support combines technical, functional and business complexity." },
      { icon: "grid", text: "Complex business processes, frequent production issues and limited documentation." },
      { icon: "cog", text: "High user expectations and intermittent system performance problems." },
      { icon: "cloud", text: "Fragmented reporting across regions and legal entities." },
    ],
    solution: [
      "Regular monitoring and proactive support across the D365 F&O analytics stack.",
      "Sync calls between business and technical teams to align reporting priorities.",
      "Data validation, controls and unified metric definitions.",
      "User training and support to drive analytics adoption.",
      "Strengthened security and role-based access control.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Mapped reporting needs across regions and entities" },
      { icon: "map", title: "Plan", text: "Defined semantic model and KPI catalogue" },
      { icon: "target", title: "Execute", text: "Built Power BI dashboards and Synapse pipelines" },
      { icon: "trend", title: "Optimize", text: "Continuous tuning and self-service enablement" },
    ],
    technologies: [
      { name: "Microsoft Dynamics 365" },
      { name: "Power BI" },
      { name: "Azure Synapse Analytics" },
      { name: "SQL Server" },
      { name: "X++" },
      { name: "Azure" },
    ],
    results: [
      { icon: "clock", value: "60%", label: "Faster report delivery" },
      { icon: "shield", value: "100%", label: "KPI consistency" },
      { icon: "trend", value: "40+", label: "Dashboards in production" },
      { icon: "dollar", value: "Significant", label: "Reduction in reporting effort" },
    ],
    testimonial: {
      quote:
        "The analytics platform Nextgenlytics built gives us a single, trusted view of our business — leadership finally makes decisions from one number, not five.",
      author: "Head of Data, Harvey Nash",
      company: "Harvey Nash",
    },
  },
  {
    id: "finance-ops",
    slug: "streamlining-financial-operations-d365",
    category: "finance",
    categoryLabel: "FINANCE OPERATIONS",
    title: "Streamlining Financial Operations with D365 F&O",
    description:
      "Optimizing core finance functions like consolidation, reporting, budgeting, and close processes to improve accuracy, compliance, and operational efficiency.",
    image: cs4Asset.url,
    stats: [
      { icon: "clock", value: "50%", label: "Faster Close" },
      { icon: "shield", value: "30%", label: "Reduction in Errors" },
      { icon: "trend", value: "100%", label: "Compliance" },
      { icon: "dollar", value: "Significant", label: "Cost Savings" },
      { icon: "grid", value: "9", label: "Countries" },
    ],
    keyImpact: [
      "Streamlined financial close and consolidation",
      "Improved accuracy and compliance",
      "Reduced manual effort and operational costs",
      "Optimized license allocation across the estate",
    ],
    businessContext: [
      "Nash Squared delivers global tech and talent solutions across recruitment, outsourcing and managed services, with 3,300 staff across 9 countries relying on D365 F&O to run finance.",
      "License allocation, reporting errors and workflow bottlenecks were driving up cost and slowing critical processes.",
    ],
    challenges: [
      { icon: "file", text: "License allocation was not optimised — driving up cost and misaligning user access." },
      { icon: "grid", text: "Reporting errors and workflow bottlenecks impacted daily finance operations." },
      { icon: "cog", text: "Critical processes — consolidation, year-end close, fiscal periods — required meticulous handling." },
      { icon: "cloud", text: "Onboarding delays slowed the finance team's ability to scale." },
    ],
    solution: [
      "Automated the invoice workflow from Pagero to Kofax for Belgian entities.",
      "Optimised Finance and Team Members license allocation in D365 F&O.",
      "Resolved reporting errors, fixed workflow bottlenecks and streamlined the onboarding process.",
      "Process optimisation across consolidation, year-end close, fiscal period management and financial dimensions.",
      "Continuous advisory support for best practices.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Audited license usage and process gaps" },
      { icon: "map", title: "Plan", text: "Designed target operating model" },
      { icon: "target", title: "Execute", text: "Implemented automation and process fixes" },
      { icon: "trend", title: "Optimize", text: "Ongoing tuning and advisory" },
    ],
    technologies: [
      { name: "MS D365 F&O" },
      { name: "Power BI" },
      { name: "Azure" },
      { name: "Power Automate" },
      { name: "SSRS" },
      { name: "Dataverse" },
    ],
    results: [
      { icon: "clock", value: "50%", label: "Faster financial close" },
      { icon: "shield", value: "30%", label: "Fewer reporting errors" },
      { icon: "trend", value: "100%", label: "Compliance maintained" },
      { icon: "dollar", value: "Significant", label: "Cost savings" },
    ],
    testimonial: {
      quote:
        "Our finance close is faster, cleaner and cheaper. The team's process discipline made the difference.",
      author: "Finance Systems Lead, Nash Squared",
      company: "Nash Squared",
    },
  },
  {
    id: "einvoice-automation",
    slug: "e-invoice-processing-automation-d365",
    category: "automation",
    categoryLabel: "AUTOMATION",
    title: "E-Invoice Processing Automation | D365 F&O",
    description:
      "Automating end-to-end e-invoice processing using Azure Logic Apps and Power Automate, reducing manual effort, eliminating duplicates, and accelerating invoice management.",
    image: cs1Asset.url,
    stats: [
      { icon: "trend", value: "100%", label: "Automation" },
      { icon: "clock", value: "Every 15 mins", label: "Invoice Processing" },
      { icon: "shield", value: "Zero", label: "Duplicates" },
      { icon: "grid", value: "High", label: "Accuracy" },
      { icon: "dollar", value: "24/7", label: "Uptime" },
    ],
    keyImpact: [
      "Eliminated manual processing and errors",
      "Faster invoice delivery and approvals",
      "Scaled and re-effort invoice processing",
      "Foundation for Agent 365 in Accounts Payable",
    ],
    businessContext: [
      "Finance users manually downloaded invoice PDFs from OneSource (Pagero) and emailed them to Kofax — time-consuming, error-prone and unscalable across a multi-entity D365 F&O footprint.",
    ],
    challenges: [
      { icon: "file", text: "Manual PDF download and email routing was unscalable." },
      { icon: "grid", text: "Different invoice types required routing to different mailboxes." },
      { icon: "cog", text: "Duplicates occurred due to unreliable status update steps." },
      { icon: "cloud", text: "Difficult to onboard or remove legal entities cleanly." },
    ],
    solution: [
      "Automated end-to-end flow with Azure Logic Apps — authenticates to OneSource API every 15 minutes.",
      "Loops through all legal entity IDs, retrieves invoices and routes AP / self-billed to the correct mailboxes.",
      "Status update on each invoice prevents duplicates; debug flow enables reprocessing by date range.",
      "Full error logging with red/green indicators; separated Prod / Debug / UAT flows.",
      "Entity management via array config — new companies added and removed cleanly.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Traced the manual invoice journey end-to-end" },
      { icon: "map", title: "Plan", text: "Designed the Logic Apps orchestration pattern" },
      { icon: "target", title: "Execute", text: "Built and rolled out across all entities" },
      { icon: "trend", title: "Optimize", text: "Tuned poll cadence and monitoring" },
    ],
    technologies: [
      { name: "Azure Logic Apps" },
      { name: "Power Automate" },
      { name: "OneSource API" },
      { name: "Pagero / Kofax" },
      { name: "D365 F&O" },
      { name: "Azure" },
    ],
    results: [
      { icon: "clock", value: "15 min", label: "Invoice cycle, 24/7" },
      { icon: "shield", value: "Zero", label: "Duplicate invoices" },
      { icon: "trend", value: "100%", label: "Entities automated" },
      { icon: "dollar", value: "Manual effort", label: "Eliminated" },
    ],
    testimonial: {
      quote:
        "Invoices now flow in every 15 minutes with zero duplicates. It's the foundation we needed for Agent 365 in AP.",
      author: "Head of AP, Nash Squared",
      company: "Nash Squared",
    },
  },
];

export const caseCategories = [
  { key: "all", label: "All Case Studies" },
  { key: "support", label: "Dynamics 365 F&O" },
  { key: "analytics", label: "Analytics" },
  { key: "automation", label: "Automation" },
  { key: "finance", label: "Finance Operations" },
  { key: "support-services", label: "Support Services" },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}