import cs1Asset from "@/assets/case-studies/cs1.webp";
import cs2Asset from "@/assets/case-studies/cs2.webp";
import cs3Asset from "@/assets/case-studies/cs3.webp";
import cs4Asset from "@/assets/case-studies/cs4.webp";
import amsHeroAsset from "@/assets/brand/ams-hero.webp";
import dataMaturityAsset from "@/assets/client-work/data-maturity.svg";
import ax2012Asset from "@/assets/client-work/ax2012-migration.svg";
import unifiedAnalyticsAsset from "@/assets/client-work/unified-analytics.svg";

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
    image: cs2Asset,
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
    image: cs3Asset,
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
    image: cs4Asset,
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
    image: cs1Asset,
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
  {
    id: "ams-services",
    slug: "application-managed-services-d365",
    category: "support-services",
    categoryLabel: "SUPPORT SERVICES",
    title: "Application Managed Services for Dynamics 365 F&O",
    description:
      "End-to-end management and support for a global Dynamics 365 Finance & Operations environment — spanning 6 ISVs, 70+ legal entities, and 9 countries — ensuring performance, reliability, and continuous improvement.",
    image: amsHeroAsset,
    stats: [
      { icon: "users", value: "6", label: "ISVs Supported" },
      { icon: "building", value: "70+", label: "Legal Entities" },
      { icon: "globe", value: "9", label: "Countries" },
      { icon: "clock", value: "24/7", label: "Support Coverage" },
      { icon: "shield", value: "Dedicated", label: "Support Team" },
    ],
    keyImpact: [
      "Improved system stability and performance",
      "Faster issue resolution and reduced downtime",
      "Optimized license utilization and cost efficiency",
      "Standardized reporting and process automation",
    ],
    businessContext: [
      "The client operates Microsoft Dynamics 365 Finance & Operations across a complex, multi-entity footprint — 6 ISVs and 70+ legal entities spanning the UK, Ireland, Netherlands, Belgium, Poland, Germany, the Americas, Canada, and India, several with third-party software integrated directly into D365 for operations and financial data.",
      "Nextgenlytics was engaged to deliver Application Managed Services across this estate — covering system study, change management, process normalization, integration, and automation — with a dedicated support team providing round-the-clock coverage.",
    ],
    challenges: [
      { icon: "file", text: "Coordinating support across 6 ISVs and 70+ legal entities, each with different business needs and local requirements." },
      { icon: "grid", text: "Multiple third-party integrations layered into D365 F&O added operational complexity." },
      { icon: "cog", text: "Analytical and operational reporting was inconsistent across entities and needed standardization." },
      { icon: "cloud", text: "System issues, change requests, and enhancements needed timely, proactive resolution at global scale." },
    ],
    solution: [
      "Delivered end-to-end AMS across core D365 F&O modules — cash & bank management, consolidations, credit & collections, expense management, fixed assets, general ledger, HR, purchase and sales ledgers, and tax.",
      "Stood up a dedicated support team aligned to a follow-the-sun model for continuous, round-the-clock coverage.",
      "Managed 6 ISVs and 70+ legal entities with structured process standardization and system optimization.",
      "Configured and supported Azure Synapse for analytical report development at group and management level.",
      "Standardized analytical and operational reporting across every entity in the estate.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Studied the system landscape, ISV integrations, and entity-level support needs" },
      { icon: "map", title: "Plan", text: "Defined the AMS operating model, coverage model, and SLA framework" },
      { icon: "target", title: "Execute", text: "Delivered functional and technical support across all modules and entities" },
      { icon: "trend", title: "Optimize", text: "Standardized reporting and continuously improved processes and automation" },
    ],
    technologies: [
      { name: "Microsoft Dynamics 365" },
      { name: "Azure Synapse Analytics" },
      { name: "Power BI" },
      { name: "Azure" },
      { name: "ISV Integrations" },
      { name: "SQL Server" },
    ],
    results: [
      { icon: "clock", value: "Faster", label: "Issue resolution and reduced downtime" },
      { icon: "shield", value: "24/7", label: "Dedicated support coverage delivered" },
      { icon: "trend", value: "Standardized", label: "Reporting across 70+ legal entities" },
      { icon: "dollar", value: "Optimized", label: "License utilization and operational cost" },
    ],
    testimonial: {
      quote:
        "Managing 70+ entities used to mean 70 different ways of doing things. Nextgenlytics brought one operating model, one support standard, and it shows in how quickly issues get resolved now.",
      author: "IT Operations Lead",
      company: "Global Talent & Technology Solutions Provider",
    },
  },
  {
    id: "data-maturity-consulting",
    slug: "data-maturity-assessment-and-consulting",
    category: "data-strategy",
    categoryLabel: "DATA STRATEGY & ADVISORY",
    title: "Data Maturity Assessment and Consulting",
    description:
      "Current-state assessment, DAMA-based data strategy, and a design blueprint that grounded a Dynamics AX 2012 to SAP transformation program for a leading manufacturer.",
    image: dataMaturityAsset,
    stats: [
      { icon: "users", value: "32", label: "Stakeholders Interviewed" },
      { icon: "file", value: "39", label: "Workshops Conducted" },
      { icon: "grid", value: "3", label: "Transformation Plateaus" },
      { icon: "target", value: "Q2 2025", label: "Plateau-1 Go-Live Target" },
    ],
    keyImpact: [
      "Data Management & Analytics advisory across the enterprise",
      "Current-landscape assessment and problem-statement identification",
      "DAMA-based future data strategy and technology definition",
      "Fit-gap analysis, design and blueprint phase sign-off",
    ],
    businessContext: [
      "A leading bed manufacturer set out on a comprehensive digital transformation to modernise its application landscape and align operations with industry best practices — executed as a Brownfield implementation across three structured plateaus for minimal business disruption.",
      "Before any migration, the organisation needed a clear, objective view of its current data estate. Nextgenlytics led a Data Management & Analytics consulting engagement — interviewing stakeholders, running workshops, and defining a DAMA-based future data strategy that would underpin the move from Dynamics AX 2012 to SAP S/4HANA.",
    ],
    challenges: [
      { icon: "file", text: "No objective, current-state view of the data estate existed before planning the migration." },
      { icon: "grid", text: "Aligning 32 stakeholders and business teams across the enterprise on a single data strategy." },
      { icon: "cog", text: "Defining a future-state data strategy and technology direction grounded in a recognised framework." },
      { icon: "cloud", text: "Producing a fit-gap analysis and design blueprint the migration team could execute against." },
    ],
    solution: [
      "Assessed the existing Dynamics AX 2012 application landscape end-to-end.",
      "Ran 32 stakeholder interviews and 39 workshops with C-level and business teams to surface problem statements.",
      "Identified problem statements across data domains and business processes.",
      "Defined a DAMA-based future data strategy aligned to enterprise goals, with technology direction set for the target SAP S/4HANA landscape.",
      "Ran a fit-gap analysis against SAP S/4HANA best practices and delivered a signed-off design & blueprint phase.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Assessed the current-state Dynamics AX 2012 landscape and data estate" },
      { icon: "map", title: "Plan", text: "Defined a DAMA-based future data strategy and technology direction" },
      { icon: "target", title: "Execute", text: "Ran fit-gap analysis against SAP S/4HANA best practices" },
      { icon: "trend", title: "Optimize", text: "Signed off design & blueprint, handed off to Plateau-1 migration" },
    ],
    technologies: [
      { name: "DAMA-DMBOK Framework" },
      { name: "SAP S/4HANA" },
      { name: "Dynamics AX 2012" },
      { name: "Data Strategy & Governance" },
      { name: "Enterprise Data Modelling" },
      { name: "Fit-Gap & Blueprint" },
    ],
    results: [
      { icon: "users", value: "32", label: "Stakeholders aligned across the business" },
      { icon: "file", value: "39", label: "Workshops with C-level & business teams" },
      { icon: "target", value: "DAMA", label: "Future data strategy defined" },
      { icon: "shield", value: "Signed Off", label: "Design & blueprint phase approved" },
    ],
    testimonial: {
      quote:
        "We couldn't have started the SAP migration with confidence without this assessment. Nextgenlytics gave us an honest picture of our data estate and a strategy the whole business could get behind.",
      author: "Head of Digital Transformation",
      company: "Leading Bed Manufacturer",
    },
  },
  {
    id: "ax2012-sap-migration",
    slug: "ax2012-to-sap-s4hana-data-migration",
    category: "migration",
    categoryLabel: "DATA MIGRATION",
    title: "AX2012 to SAP S/4HANA Data Migration",
    description:
      "Migrating legacy Dynamics AX 2012 data across 250+ dealers, studios, and hotels in 4 countries to a new SAP S/4HANA Public Cloud landscape, using a metadata-driven migration approach.",
    image: ax2012Asset,
    stats: [
      { icon: "building", value: "250+", label: "Dealers, Studios & Hotels" },
      { icon: "globe", value: "4", label: "Countries" },
      { icon: "clock", value: "20+", label: "Months Transformation Program" },
      { icon: "cog", value: "Metadata-Driven", label: "Migration Approach" },
    ],
    keyImpact: [
      "Migration of legacy data sources to SAP S/4HANA Public Cloud",
      "250+ dealers, studios & hotels migrated across 4 countries",
      "20+ month transformation program delivered",
      "Data migration, quality, engineering & validation built in",
    ],
    businessContext: [
      "As Plateau-1 of a broader Brownfield digital transformation, the manufacturer set out to replace its Dynamics AX 2012 systems with SAP ERP — targeting a Q2 2025 go-live. The critical enabler was migrating data cleanly from the legacy databases into the new SAP S/4HANA Public Cloud and its associated repositories.",
      "Nextgenlytics ran the migration as a dedicated S/4HANA Public Cloud data-migration workstream — moving legacy sources for 250+ dealers, studios and hotels across 4 countries, while standing up a Modern Data Platform for analytics and an archival system for legacy records. We followed a metadata-driven migration approach throughout, improving accuracy and significantly reducing overall migration time.",
    ],
    challenges: [
      { icon: "file", text: "Migrating legacy Dynamics AX 2012 data cleanly across 250+ operating locations." },
      { icon: "globe", text: "Coordinating a single migration programme across a 4-country footprint." },
      { icon: "cloud", text: "Standing up a Modern Data Platform and archival system alongside the core migration." },
      { icon: "cog", text: "Maintaining accuracy and auditability through a metadata-driven engineering approach." },
    ],
    solution: [
      "Migrated legacy Dynamics AX 2012 data across 250+ dealers, studios, and hotels, delivered across a 4-country footprint as part of a single programme.",
      "Executed over a 20+ month transformation timeline alongside the Plateau-1 go-live.",
      "Migrated core transactional data to a new SAP S/4HANA Public Cloud landscape.",
      "Stood up a Modern Data Platform for analytical and reporting workloads, and built an archival system to retain legacy records for compliance.",
      "Applied metadata-driven mapping and ETL pipelines, with data quality checks, reconciliation, and validation ahead of go-live.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Traced legacy AX 2012 data sources across every operating location" },
      { icon: "map", title: "Plan", text: "Designed the metadata-driven mapping and ETL pipeline architecture" },
      { icon: "target", title: "Execute", text: "Migrated data to SAP S/4HANA Public Cloud across 4 countries" },
      { icon: "trend", title: "Optimize", text: "Ran reconciliation, validation, and cutover tuning" },
    ],
    technologies: [
      { name: "SAP S/4HANA Public Cloud" },
      { name: "Dynamics AX 2012" },
      { name: "Metadata-Driven Migration" },
      { name: "ETL Pipelines" },
      { name: "Data Quality & Reconciliation" },
      { name: "Modern Data Platform" },
      { name: "Archival System" },
    ],
    results: [
      { icon: "trend", value: "30-50%", label: "Faster migration, mapping & ETL delivery" },
      { icon: "dollar", value: "20-40%", label: "Lower operational costs" },
      { icon: "cog", value: "50-70%", label: "Less reconciliation effort" },
      { icon: "clock", value: "90%", label: "Faster provisioning (PaaS setup)" },
    ],
    testimonial: {
      quote:
        "A migration of this scale — 250+ locations, 4 countries — could easily have taken twice as long. The metadata-driven approach Nextgenlytics used cut our reconciliation effort dramatically and kept us on track for go-live.",
      author: "Programme Director",
      company: "Leading Bed Manufacturer",
    },
  },
  {
    id: "unified-data-analytics",
    slug: "unified-data-and-analytics-platform",
    category: "data-platform",
    categoryLabel: "DATA & ANALYTICS PLATFORM",
    title: "Unified Data & Analytics Platform",
    description:
      "Integrating 4 fragmented data warehouses into a single SAP Datasphere platform, connecting SAP S/4HANA, marketing, and other enterprise systems to power 40+ business KPIs.",
    image: unifiedAnalyticsAsset,
    stats: [
      { icon: "grid", value: "4", label: "Fragmented Warehouses Unified" },
      { icon: "trend", value: "40+", label: "Business KPIs" },
      { icon: "target", value: "1", label: "Single Source of Truth" },
      { icon: "cloud", value: "SAP", label: "Datasphere Platform" },
    ],
    keyImpact: [
      "SAP Datasphere unified data & analytics platform delivered",
      "Integration of 4 fragmented data warehouses",
      "40+ business KPIs standardized across the enterprise",
      "Integration with S/4HANA, marketing & enterprise systems",
    ],
    businessContext: [
      "With core data migrated to SAP S/4HANA, the manufacturer's reporting still lived across four fragmented data warehouses — each with its own metrics, definitions and refresh cycles. Leadership was making decisions from inconsistent numbers, and every new report meant reconciling sources by hand.",
      "As Engagement 3 of the transformation, Nextgenlytics delivered a Unified Data & Analytics platform on SAP Datasphere — integrating the fragmented warehouses and connecting enterprise systems including S/4HANA and marketing. The result is a single, governed source of truth powering 40+ business KPIs across the enterprise.",
    ],
    challenges: [
      { icon: "grid", text: "Four fragmented data warehouses each held their own metrics, definitions, and refresh cycles." },
      { icon: "file", text: "Leadership was making decisions from inconsistent numbers across the business." },
      { icon: "cog", text: "Every new report required manual reconciliation of sources before it could be trusted." },
      { icon: "cloud", text: "SAP S/4HANA, marketing, and other enterprise systems needed to feed one governed model." },
    ],
    solution: [
      "Integrated 4 fragmented data warehouses into a single SAP Datasphere platform.",
      "Built a unified semantic layer across finance, sales, and operations, establishing one governed source of truth.",
      "Standardised 40+ business KPIs consistently across the enterprise, with aligned metric definitions across every business unit.",
      "Delivered real-time reports and dashboards for leadership.",
      "Integrated directly with the core SAP S/4HANA transactional system, plus marketing and other enterprise systems, architected to scale as new sources are onboarded.",
    ],
    approach: [
      { icon: "search", title: "Assess", text: "Mapped the four fragmented warehouses and conflicting KPI definitions" },
      { icon: "map", title: "Plan", text: "Designed the SAP Datasphere unified semantic model" },
      { icon: "target", title: "Execute", text: "Built the platform and integrated S/4HANA, marketing & enterprise systems" },
      { icon: "trend", title: "Optimize", text: "Standardized 40+ KPIs and enabled real-time reporting" },
    ],
    technologies: [
      { name: "SAP Datasphere" },
      { name: "SAP S/4HANA" },
      { name: "SAP Analytics Cloud" },
      { name: "Enterprise Data Modelling" },
      { name: "Data Governance" },
      { name: "Marketing Systems Integration" },
    ],
    results: [
      { icon: "grid", value: "4 → 1", label: "Warehouses consolidated into one platform" },
      { icon: "trend", value: "40+", label: "Standardised enterprise KPIs" },
      { icon: "target", value: "1", label: "Single, governed source of truth" },
      { icon: "clock", value: "Real-Time", label: "Reporting for faster decisions" },
    ],
    testimonial: {
      quote:
        "We went from five conflicting numbers in every leadership meeting to one number everyone trusts. That single change has done more for our decision-making than any dashboard we'd built before.",
      author: "Head of Data & Analytics",
      company: "Leading Bed Manufacturer",
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
  { key: "data-strategy", label: "Data Strategy & Advisory" },
  { key: "migration", label: "Data Migration" },
  { key: "data-platform", label: "Data & Analytics Platform" },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}