import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerBlog from "@/assets/banners/banner-careers.jpg";
import blogSap from "@/assets/blog/blog-sap-clean-core.jpg";
import blogAi from "@/assets/blog/blog-ai-agents.jpg";
import blogData from "@/assets/blog/blog-data-migration.jpg";
import blogCeoPlaybook1 from "@/assets/blog/ai-product-mgmt-workflow.avif";
import blogCeoPlaybook2 from "@/assets/blog/ai-product-mgmt-workflow-2.avif";
import blogCeoPlaybook3 from "@/assets/blog/ai-product-mgmt-workflow-3.avif";
import blogUnifyingMinds1 from "@/assets/blog/blog-unifying-minds.webp";
import blogUnifyingMinds2 from "@/assets/blog/blog-unifying-minds-2.webp";
import blogUnifyingMinds3 from "@/assets/blog/blog-unifying-minds-3.webp";
import blogUnifyingMinds4 from "@/assets/blog/blog-unifying-minds-4.webp";
import blogCultivating1 from "@/assets/blog/blog-cultivating-connections.avif";
import blogCultivating2 from "@/assets/blog/blog-cultivating-connections-2.avif";
import blogCultivating3 from "@/assets/blog/blog-cultivating-connections-3.avif";
import blogCultivating4 from "@/assets/blog/blog-cultivating-connections-4.avif";
import blogCultivating5 from "@/assets/blog/blog-cultivating-connections-5.avif";
import blogD3651 from "@/assets/blog/blog-d365.avif";
import blogD3652 from "@/assets/blog/blog-d365-2.avif";
import blogD3653 from "@/assets/blog/blog-d365-3.avif";
import blogD3654 from "@/assets/blog/blog-d365-4.avif";
import { ArrowLeft, ArrowRight, Calendar, CaretRight, ChartBar, Clock, Cloud, Database, FacebookLogo, House, Lightbulb, Link as LinkIcon, LinkedinLogo, MagnifyingGlass, TwitterLogo, Users } from "@phosphor-icons/react";
import React from "react";

type Section = { id: string; heading: string; body: React.ReactNode[]; image?: string; imageAlt?: string };

type Post = {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  cover: string;
  excerpt: string;
  pullQuote: string;
  stats: { value: string; label: string }[];
  sections: Section[];
  showGenericBenefits?: boolean;
  customBlocks?: typeof BUILDING_BLOCKS;
};

const BUILDING_BLOCKS = [
  {
    icon: Database,
    title: "Modern Data Strategy",
    body: "Align data initiatives with business goals. Define your data vision, governance, and roadmap to create long-term value.",
  },
  {
    icon: Cloud,
    title: "Unified Data Platform",
    body: "Break down data silos with a unified platform that integrates, stores, and manages data securely at scale.",
  },
  {
    icon: ChartBar,
    title: "Advanced Analytics & AI",
    body: "Use advanced analytics and AI/ML to uncover patterns, predict outcomes, and automate decisions.",
  },
  {
    icon: Users,
    title: "Data Culture & Governance",
    body: "Build a data-literate culture with clear ownership, policies, and quality standards to drive adoption and trust.",
  },
];

const CEO_PLAYBOOK_BLOCKS = [
  {
    icon: Database,
    title: "Data as a Product",
    body: "Shift from fragmented datasets to managed data products with clear ownership.",
  },
  {
    icon: Cloud,
    title: "Productized Operations",
    body: "Run transformations with continuous feedback loops, not rigid project phases.",
  },
  {
    icon: Lightbulb,
    title: "AI Agents",
    body: "Automate complex mapping, migration, and quality tasks with intelligent agents.",
  },
  {
    icon: Users,
    title: "Digital Twins",
    body: "Create AI-powered Digital Twins for critical operational and governance roles.",
  },
];

const POSTS: Post[] = [
  {
    id: "unifying-minds-with-ai-staycation",
    title: "Unifying Minds with AI: A Staycation to Remember for the Nextgenlytics Offshore Team",
    category: "Company",
    author: "Raja Deverapu",
    authorRole: "Co-Founder · Nextgenlytics",
    date: "July 7, 2026",
    readingTime: "6 min read",
    cover: blogUnifyingMinds1,
    excerpt:
      "In the fast-paced world of data and AI, the Nextgenlytics team operates remotely across different time zones. This AI-centric staycation in Bangalore was a perfect mix of AI knowledge sharing, skill-building, and an unforgettable team experience.",
    pullQuote:
      "The bonds forged and the knowledge gained during these four days will continue to drive Nextgenlytics toward new heights in AI and data excellence.",
    stats: [
      { value: "4 Days", label: "of AI training, team-building & fun" },
      { value: "Pan-India", label: "team united from across the country" },
      { value: "AI + ML Ops", label: "deep-dive hands-on sessions" },
    ],
    sections: [
      {
        id: "day-1-reconnecting",
        heading: "Day 1: Reconnecting Beyond Screens",
        body: [
          "As team members arrived at Bangalore Airport from different parts of India — NCR, Madhya Pradesh, Telangana, Andhra Pradesh, and beyond — the excitement was palpable.",
          "The day kicked off with an exploration of Bangalore's natural and spiritual gems. The team first visited the Isha Foundation, soaking in the serene atmosphere and the inspiring presence of the Adiyogi Shiva statue. From there, they ascended Nandi Hills, witnessing the breathtaking sunset and relishing a moment of peace before heading to the resort.",
          "The evening was all about bonding, laughter, and great food, as everyone caught up over a delicious dinner, sharing stories of their professional journeys and individual work experiences."
        ]
      },
      {
        id: "day-2-ai-training",
        heading: "Day 2: AI Training — Building Strong Foundations",
        body: [
          "With the team recharged, it was time to dive deep into AI. The first AI training session covered Data Foundations & AI Fundamentals, bringing everyone up to speed with the latest advancements in Natural Language Processing (NLP), core machine learning concepts, and supervised/unsupervised learning.",
          "A delicious lunch buffet provided the much-needed energy boost, fueling the team for an insightful afternoon of AI training. The post-lunch session focused on advanced AI concepts, diving deeper into Natural Language Processing (NLP), machine learning models, and practical applications of AI. Through hands-on discussions and real-world case studies, the team explored how these AI-driven technologies could be seamlessly integrated into data migration, analytics, and automation strategies.",
          "As the day transitioned into the evening, the focus shifted from learning to engagement and entertainment. The team was treated to an electrifying beatboxing performance, bringing a burst of energy and excitement to the group. Following the performance, team-building activities took center stage, fostering collaboration, communication, and problem-solving in a fun and interactive way.",
          "The night ended on a high note with a dinner gathering, where ex-employees and friends of Nextgenlytics joined in for an evening filled with drinks, laughter, and nostalgia. Conversations flowed effortlessly as old colleagues reconnected, shared industry insights, and reminisced about past projects. The gathering was a perfect blend of celebration and networking, reinforcing the strong culture of learning, collaboration, and long-lasting relationships at Nextgenlytics."
        ],
        image: blogUnifyingMinds2,
        imageAlt: "Nextgenlytics offshore team group photo after AI training session"
      },
      {
        id: "day-3-implementation",
        heading: "Day 3: AI Implementation & ML Ops Mastery",
        body: [
          "The AI training continued with an intensive session on AI implementation strategies and ML Ops, ensuring the team gained hands-on knowledge about deploying AI models efficiently.",
          "The evening brought a champagne celebration, honoring the outstanding contributions of various team members. An award ceremony recognized individuals who had gone above and beyond in their projects, reinforcing the team's shared mission and accomplishments.",
          "Just like the previous day, the night concluded with another team-building session and a beatboxing performance, bringing energy and fun to the group."
        ],
        image: blogUnifyingMinds3,
        imageAlt: "Nextgenlytics team in company polo shirts at the Bangalore resort"
      },
      {
        id: "day-4-consulting",
        heading: "Day 4: Consulting & Project Delivery Excellence",
        body: [
          "The final day of the staycation was dedicated to Consulting Skills & Project Delivery, a crucial aspect of Nextgenlytics' client-centric approach. The AI learning sessions also continued, ensuring that every team member left with upgraded skills and practical knowledge to implement in their projects.",
          "As the event wrapped up, it was time for farewells at Bangalore Airport. While everyone returned to their base locations, they carried back not just technical expertise but also lasting memories, stronger professional bonds, and a renewed sense of purpose."
        ],
        image: blogUnifyingMinds4,
        imageAlt: "Nextgenlytics team enjoying evening team-building activities"
      },
      {
        id: "perfect-blend",
        heading: "A Perfect Blend of Learning & Fun",
        body: [
          "This AI-driven staycation was more than just an event — it was an experience that redefined collaboration for Nextgenlytics. From learning cutting-edge AI concepts to celebrating team successes, from sharing meals to engaging in fun activities, this staycation reinforced the importance of community, connection, and continuous growth.",
          "As the team returns to their remote work setup, one thing is certain — the bonds forged and the knowledge gained during these four days will continue to drive Nextgenlytics toward new heights in AI and data excellence. \uD83D\uDE80",
          "#AI #TeamBuilding #Nextgenlytics #DataScience #Staycation #ML #MLOps #Collaboration"
        ]
      }
    ]
  },
  {
    id: "cultivating-connections-netherlands",
    title: "Cultivating Connections: Offshore Data Engineers' Enriching Visit to the Netherlands",
    category: "Company",
    author: "Raja Deverapu",
    authorRole: "Co-Founder \u00b7 Nextgenlytics",
    date: "July 7, 2026",
    readingTime: "5 min read",
    cover: blogCultivating1,
    excerpt:
      "Our offshore data engineers embarked on an immersive journey to the Netherlands \u2014 bridging cultural differences, enhancing collaboration, and fostering camaraderie across borders.",
    pullQuote:
      "By bridging the geographical gap, we\u2019ve cultivated stronger relationships, gained fresh perspectives, and reaffirmed our shared mission to deliver excellence in all that we do.",
    stats: [
      { value: "Netherlands", label: "immersive onsite experience" },
      { value: "One Team", label: "offshore & onsite working together" },
      { value: "Co-Creation", label: "workshops & knowledge sharing" },
    ],
    sections: [
      {
        id: "discovering-amsterdam",
        heading: "Discovering Amsterdam\u2019s Charm",
        body: [
          "The visit kicked off with vibrant explorations in and around Amsterdam. Beyond its iconic landmarks and rich history, team members delighted in unique experiences such as touring traditional cheese factories, marveling at the panoramic views from the A\u2019DAM Lookout, and indulging in the local favorite\u2014stroopwafels.",
          "These shared adventures helped lay the groundwork for meaningful relationships among team members and partners alike."
        ],
        image: blogCultivating2,
        imageAlt: "Nextgenlytics team exploring Amsterdam\u2019s landmarks"
      },
      {
        id: "workshops-knowledge-sharing",
        heading: "Hands-On Workshops and Knowledge Sharing",
        body: [
          "Workshops played a central role in the visit, offering a platform for learning, brainstorming, and co-creating solutions. Our offshore and onsite teams came together to exchange ideas, refine workflows, and discuss strategies to better understand each other and deliver high value to our customers.",
          "These sessions deepened our collective understanding of the challenges and opportunities ahead."
        ]
      },
      {
        id: "working-as-one-team",
        heading: "Working as One Team with Our Partners",
        body: [
          "Interactions with our esteemed partners were a highlight of the visit. Rather than operating as separate entities, we worked side by side as one cohesive team, united by shared goals and a collective vision.",
          "These face-to-face meetings enabled us to align our strategies, share insights, and co-create innovative solutions, emphasizing the strength of collaboration. This unified approach reinforced our commitment to delivering unparalleled value to our clients and showcased the power of teamwork across boundaries."
        ],
        image: blogCultivating3,
        imageAlt: "Offshore and onsite teams collaborating at partner workshops"
      },
      {
        id: "strengthening-team-bonds",
        heading: "Strengthening Team Bonds",
        body: [
          "Evenings were reserved for building connections in a more informal setting. Dinners with the broader Nextgenlytics team and onsite partners offered moments of laughter, stories, and shared aspirations.",
          "One special evening saw the team coming together to celebrate our wins so far at a lively nightclub. It was a joyous occasion filled with music, dancing, and shared gratitude for the milestones we\u2019ve achieved as a collective."
        ],
        image: blogCultivating4,
        imageAlt: "Nextgenlytics team dinner and celebration in the Netherlands"
      },
      {
        id: "acknowledging-offshore-team",
        heading: "Acknowledging the Broader Offshore Team",
        body: [
          "While we celebrated the togetherness and energy of those present onsite, we deeply missed the rest of our offshore team. Their contributions are integral to our success, and their absence was felt throughout these weeks.",
          "We look forward to opportunities where the entire team can come together, either virtually or in person, to continue building on the strong foundation we\u2019ve established."
        ]
      },
      {
        id: "journey-of-growth",
        heading: "A Journey of Growth and Inspiration",
        body: [
          "This visit was more than just a trip; it was a testament to our commitment to growth, both as individuals and as a collective team. By bridging the geographical gap, we\u2019ve cultivated stronger relationships, gained fresh perspectives, and reaffirmed our shared mission to deliver excellence in all that we do.",
          "As we move forward, the experiences and insights from this journey will undoubtedly fuel our drive to innovate, collaborate, and achieve greater heights together. To our entire team\u2014both onsite and offshore\u2014thank you for your dedication and passion. Together, we\u2019re shaping the future of Nextgenlytics and making an impact that goes far beyond borders."
        ],
        image: blogCultivating5,
        imageAlt: "Nextgenlytics team reflecting on a journey of growth and inspiration"
      }
    ]
  },
  {
    id: "isv-supercharge-dynamics-365-fo",
    title: "Beyond the Core: How ISVs Supercharge Dynamics 365 Finance & Operations",
    category: "ERP",
    author: "Raja Deverapu",
    authorRole: "Co-Founder \u00b7 Nextgenlytics",
    date: "July 7, 2026",
    readingTime: "5 min read",
    cover: blogD3651,
    excerpt:
      "D365 F&O is one of today's most comprehensive ERP platforms. But no ERP is truly plug-and-play. Discover how ISVs like Lasernet, Atlas, and CMOS fill the gaps for a future-ready ecosystem.",
    pullQuote:
      "Implementing ERP isn't just about switching on modules \u2014 it's about creating a solution that fits your business today and scales tomorrow.",
    stats: [
      { value: "D365 F&O", label: "The digital backbone of modern enterprises" },
      { value: "ISVs", label: "Supercharging with specialized capabilities" },
      { value: "Future-Ready", label: "Scalable, intelligent ERP ecosystem" },
    ],
    sections: [
      {
        id: "why-d365-stands-out",
        heading: "Why Dynamics 365 F&O Stands Out",
        body: [
          "Microsoft Dynamics 365 Finance & Operations (D365 F&O) is one of today's most comprehensive ERP platforms. It unifies finance, supply chain, HR, and operations into one integrated ecosystem \u2014 providing a single source of truth for decision-making.",
          "But here's the reality: while D365 F&O is powerful at its core, no ERP is truly 'plug-and-play' for every business scenario. Every organization has unique reporting needs, regulatory requirements, and integration challenges. That's why Independent Software Vendors (ISVs) are critical. They extend D365 F&O to cover the gaps and deliver a complete, future-ready ERP ecosystem.",
          "Think of D365 F&O as the digital backbone of modern enterprises. Its modular design lets organizations start with what they need most and scale seamlessly as they grow."
        ],
        image: blogD3652,
        imageAlt: "Default Dynamics 365 Finance and Operations workspace displaying essential module tiles for streamlined navigation across Finance, Supply Chain Management, HR, and additional functionalities."
      },
      {
        id: "core-modules",
        heading: "Core Modules That Drive Business Impact",
        body: [
          "Finance: Accounts Payable (AP) to automate invoices, approvals, and payments. Accounts Receivable (AR) to streamline collections and improve cash flow. General Ledger (GL) to gain real-time visibility for faster financial closes. Cash & Bank Management to simplify reconciliations with accurate cash insights.",
          "Supply Chain Management (SCM): Procurement & Sourcing to speed up supplier onboarding and purchasing. Inventory & Warehouse Management to achieve real-time stock visibility. Production Control to optimize BOMs, shop floors, and efficiency. Transportation Management to cut logistics costs with smarter routing.",
          "Human Resources & Workforce Management: Centralized Employee Data across the organization. Payroll & Benefits Integration for error-free compliance. Timesheets & Resource Planning to improve project execution.",
          "Project Management & Accounting: Budgeting & Cost Control for better ROI visibility. Resource Allocation to align people and priorities. Finance Integration for accurate profitability analysis.",
          "In short, D365 F&O brings your entire business under one connected system."
        ]
      },
      {
        id: "why-d365-alone-isnt-enough",
        heading: "Why D365 Alone Isn't Enough",
        body: [
          "Even with its powerful core, no ERP can solve every challenge right out of the box. Most organizations need more flexibility when it comes to designing branded, compliant documents (invoices, POs, statements), performing ad-hoc financial analysis without relying on IT, and integrating external systems \u2014 CRMs, logistics tools, or legacy platforms.",
          "That's where Independent Software Vendors (ISVs) come in. They enhance D365's capabilities, filling the functional gaps and helping businesses go live faster \u2014 without heavy customizations."
        ]
      },
      {
        id: "isvs-supercharge",
        heading: "The ISVs That Supercharge D365 F&O",
        body: [
          "Document Management \u2013 Lasernet: While D365 can generate basic documents, Lasernet takes it to the next level. It lets users design branded, compliant layouts and distribute them automatically \u2014 all within D365, making it easy to preview, format, and send documents without extra IT effort. No coding. No exports. Just professional, automated documentation.",
          "Reporting & Analytics \u2013 Atlas: D365's reporting works well, but for finance teams needing ad-hoc analysis, Atlas is a game-changer. It connects directly to Excel, enabling users to pull live D365 data into spreadsheets for real-time analysis. Instant insights. Zero IT dependency.",
          "Integrations \u2013 CMOS: Most organizations run multiple systems \u2014 CRM, logistics, HR, you name it. CMOS bridges those silos by integrating D365 F&O with other platforms for seamless data flow. One connected ecosystem. Zero duplication."
        ],
        image: blogD3653,
        imageAlt: "Lasernet Essentials interface within D365 F&O / Atlas embedded in Excel"
      },
      {
        id: "why-businesses-choose-Nextgenlytics",
        heading: "Why Businesses Choose the D365 + ISV + Nextgenlytics Combo",
        body: [
          "Implementing ERP isn't just about switching on modules \u2014 it's about creating a solution that fits your business today and scales tomorrow.",
          "At Nextgenlytics, we help enterprises identify and select the right ISVs for their needs, and integrate them seamlessly into D365 F&O. We help you minimize costly customizations by designing AI-native, future-ready solutions that extend and enhance your ERP investments.",
          "The Result: Finance runs faster. Supply chain stays visible. HR is unified. Leadership gains real-time insights."
        ],
        image: blogD3654,
        imageAlt: "General integration architectures for Dynamics 365 Finance & Operations"
      },
      {
        id: "future-ready-erp",
        heading: "The Future-Ready ERP Formula",
        body: [
          "D365 F&O + ISVs + Nextgenlytics = A Complete, Future-Ready ERP Ecosystem",
          "With Lasernet for documents, Atlas for reporting, CMOS for integrations, and Nextgenlytics' deep expertise \u2014 your enterprise gets the agility, efficiency, and scalability needed to thrive. For businesses ready to scale, simplify, and future-proof operations \u2014 this is the formula for success.",
          "Microsoft Dynamics 365 Finance & Operations gives you the foundation. ISVs give it power. Nextgenlytics brings it all together \u2014 delivering the ERP your business truly deserves.",
          "At Nextgenlytics, we witness this transformation every day. Our mission goes beyond implementing D365 \u2014 we empower businesses to choose the right ISVs, integrate them seamlessly, and unlock the full potential of their ERP ecosystem. The result? A future-ready, scalable, and intelligent platform that drives efficiency, innovation, and long-term business value.",
          "#MicrosoftDynamics365 #D365FO #Dynamics365FinanceAndOperations #AI #AIdriven #ERPImplementation #ISVIntegration #Nextgenlytics #DigitalTransformation #CloudERP #BusinessAutomation #ERPStrategy #FinanceTransformation #SupplyChainOptimization #DataIntegration #BusinessIntelligence #EnterpriseSolutions #TechnologyInnovation #ModernERP #MicrosoftPartner #BusinessProcessAutomation #FutureReadyBusiness"
        ]
      }
    ]
  },
  {
    id: "ai-enabled-product-management-ceo-playbook",
    title: "AI-Enabled Product Management: The CEO Playbook Series",
    category: "Digital Transformation",
    author: "Raja Deverapu",
    authorRole: "Co-Founder · SAP Transformation Lead",
    date: "July 6, 2026",
    readingTime: "8 min read",
    cover: blogCeoPlaybook1,
    excerpt:
      "The Rise of AI-Product Companies — And Why Every CEO Must Think Like a Product Leader. Over the past few decades, digital transformation has been driven by technology adoption.",
    pullQuote:
      "Companies that operate like product organizations — not project organizations — are the ones building lasting competitive advantages. And AI has only accelerated this gap.",
    stats: [
      { value: "Permanent", label: "Transformation is now continuous" },
      { value: "AI-Native", label: "Operating model for competitive advantage" },
      { value: "Digital Twins", label: "For critical governance roles" },
    ],
    sections: [
      {
        id: "why-traditional-stagnates",
        heading: "Why Traditional Digital Transformation Stagnates?",
        body: [
          "Most organizations follow a predictable pattern:",
          "They invest in new platforms. They hire system integrators. They run projects in waves. They expect transformation to “settle” after go-live.",
          "But transformation is now permanent. New regulations, integrations, analytics needs and AI use-cases keep emerging.",
          "The problem is not capability. The problem is operating model.",
          "Project-based thinking creates: Fragmented data, Siloed applications, Heavy dependency on tribal knowledge, Slow decision-making, and No continuous improvement motion.",
          "This is why CEOs increasingly ask: 'How do we run transformation like a product, not a project?'"
        ]
      },
      {
        id: "ai-native-operating-model",
        heading: "Enter the AI-Native Operating Model",
        body: [
          "In an AI-native organization: People and AI share decision-making. Knowledge is codified, not silenced inside teams. Products evolve with feedback, not rigid timelines. Data becomes a strategic asset across the company. Governance becomes continuous, not a once-a-year audit.",
          "This is how the world’s fastest movers scale their advantage.",
          "AI-native product organizations integrate: AI Agents to automate complex work, Data as a Product for trust, Productized Operating Models for consistency, and Digital Twins (AI Agents) for critical roles.",
          "Suddenly, every transformation stream — finance, supply chain, HR, CRM — starts behaving like a product with lifecycle management.",
          "This gap between AI-native ambition and real-world execution is exactly why BlueGecko was built."
        ]
      },
      {
        id: "why-bluegecko-built",
        heading: "Why BlueGecko Had to Be Built",
        body: [
          "When we founded Nextgenlytics in Amsterdam, we saw the same pattern across every digital transformation program: Enterprises had data, but they did not have a unified operating model that connected all the roles shown in a modern governance structure — from CXOs to Data Stewards, from System Custodians to Architects.",
          "Most programs were held together by: People’s memory rather than institutional knowledge, Legacy documentation that was outdated the moment it was created, Excel-driven mapping that created silos, Multiple vendors working in isolation, New team members onboarding slowly because nothing was standardized, No single place where business, IT, data, and architecture came together.",
          "This created friction across all governance layers — Steering Committees, Data Owners, Architects, System Custodians, and Data Stewards.",
          "Instead of building another migration tool or governance dashboard, we built BlueGecko as an AI-enabled, enterprise-wide Data & Digital Operating Layer that mirrors the governance architecture.",
          "BlueGecko creates a Digital Twin (AI Agents) for every critical role, including: Data Owners & Process Owners, System Custodians (ERP, AS/400, CRM, SaaS, DWH, etc.), Enterprise, Integration & Domain Architects, Data Stewards & Key Users, Data Engineers, Quality Teams & ICT SMEs, Migration Leads & ETL Developers.",
          "It becomes the connective tissue across the entire governance architecture — business, ICT, and data."
        ],
        image: blogCeoPlaybook2,
        imageAlt: "The AI-Powered Data Management Platform"
      },
      {
        id: "ai-operational-discipline",
        heading: "Where AI Meets Operational Discipline",
        body: [
          "AI agents inside BlueGecko don’t replace teams — they augment them:",
          "Falcon Mapping → AI Data Steward Agent",
          "Code Cheetah → AI Data Migration Engineer Agent",
          "Owl Sight → AI Data Quality Analyst, GRC Agent",
          "These AI agents embed directly into the Data Operations & Stewardship layer and the ICT Enablement layer — ensuring that every part of the governance model operates consistently, continuously, and intelligently."
        ],
        image: blogCeoPlaybook3,
        imageAlt: "Enterprise Data & Architecture Governance Framework"
      },
      {
        id: "the-result-and-conclusion",
        heading: "The Result and Why CEOs must rethink transformation",
        body: [
          "BlueGecko transforms fragmented governance into a living, AI-driven operating model that: Aligns business, IT, and data roles; Standardizes processes across systems and countries; Reduces dependency on tribal knowledge; Creates continuity across waves, phases, and vendors; Operates like an AI-native product organization.",
          "This is why BlueGecko is not just a tool — it is the operating layer for modern digital transformation.",
          "A CEO today is no longer just running a business. They are running a portfolio of digital products: Core ERP, CRM, Data platforms, Customer platforms, Analytics and reporting, Finance and supply chain systems. Every system has a lifecycle, requires ongoing adaptation, and depends on consistent governance.",
          "CEOs who embrace product thinking create organizations that: Move faster, Reduce operational risk, Scale transformation beyond vendors, Build IP and knowledge internally, Attract better talent, Make AI a strategic advantage, not a buzzword.",
          "The companies winning in the AI era are not the ones with the most data or the biggest budgets. They are the ones who run their transformation like a product, not a project — with AI as an operating partner, not an afterthought.",
          <span key="closing-line" className="block mt-8 mb-4 text-xl md:text-2xl font-bold font-heading text-primary leading-snug border-l-4 border-accent pl-5 py-2 bg-primary/5 rounded-r-xl">
            This mindset shift is what will differentiate the next decade’s market leaders.
          </span>
        ]
      }
    ],
    customBlocks: CEO_PLAYBOOK_BLOCKS
  },
  {
    id: "sap-clean-core-2025",
    title: "SAP Clean Core in 2025: What European Enterprises Must Know",
    category: "SAP",
    author: "Rahul Vinnakota",
    authorRole: "Co-Founder · SAP Transformation Lead",
    date: "May 15, 2025",
    readingTime: "8 min read",
    cover: blogSap,
    excerpt:
      "As SAP tightens its certification roadmap, enterprises running heavily modified ECC systems face a critical decision window.",
    pullQuote:
      "Clean Core isn't a technical clean-up. It's the operating model that decides whether AI ever ships in your ERP.",
    stats: [
      { value: "68%", label: "of ECC systems carry critical custom code" },
      { value: "12–18mo", label: "average Clean Core transition window" },
      { value: "3x", label: "faster release cycles post-migration" },
    ],
    sections: [
      {
        id: "why-now",
        heading: "Why 2025 is the decision year",
        body: [
          "SAP's 2027 mainstream maintenance deadline for ECC is finally forcing conversations that were comfortably postponed for a decade. The problem isn't the deadline — it's the shape of the estate that has to move.",
          "Most European enterprises we assess still carry 15–20 years of custom ABAP layered directly into the digital core. Every one of those modifications is a blocker for standard S/4HANA capabilities, and a tax on every future upgrade.",
        ],
      },
      {
        id: "what-clean-core-means",
        heading: "What Clean Core actually means",
        body: [
          "Clean Core is SAP's contract with the enterprise: keep the standard object model untouched, and SAP guarantees a stable path to innovation — Joule, BDC, embedded AI, quarterly release trains.",
          "The corollary is uncomfortable: every extension has to move out of the digital core and onto BTP. This is not lift-and-shift. It's a rethink of what your custom logic is actually doing.",
        ],
      },
      {
        id: "how-to-plan",
        heading: "How to plan the transition without disrupting operations",
        body: [
          "The teams that succeed treat Clean Core as a two-track programme. Track one is discovery: an automated scan of every custom object, ranked by business criticality and reuse across processes.",
          "Track two is architecture: a target-state map that assigns every surviving extension to BTP, side-by-side apps, or standard configuration. The scans without the map produce a backlog no one owns.",
        ],
      },
      {
        id: "closing",
        heading: "The one-week starting point",
        body: [
          "You don't need a six-month assessment to start. A focused one-week diagnostic — landscape scan, custom code heat-map, target architecture sketch — is enough to size the programme and secure the budget conversation.",
        ],
      },
    ],
  },
  {
    id: "production-ai-agents",
    title: "From PoC to Production: Building Enterprise AI Agents That Ship",
    category: "AI & Data",
    author: "Bhargav Suggala",
    authorRole: "Principal Consultant · AI Engineering",
    date: "April 28, 2025",
    readingTime: "10 min read",
    cover: blogAi,
    excerpt:
      "Most AI pilots never reach production. We share the architecture, governance, and observability that gets agents live in under 12 weeks.",
    pullQuote:
      "The PoC-to-production gap is rarely a model problem. It's an integration, governance, and trust problem.",
    stats: [
      { value: "82%", label: "of AI pilots stall before production" },
      { value: "12wk", label: "typical Nextgenlytics PoC-to-live timeline" },
      { value: "4x", label: "ROI on agent programmes with observability" },
    ],
    sections: [
      {
        id: "why-pilots-stall",
        heading: "Why AI pilots stall",
        body: [
          "The failure mode is almost never the model. It's the eight surrounding decisions no one owned: data contracts, permissions, audit trails, human-in-the-loop, fallback logic, evaluation, cost ceilings, and lifecycle.",
          "A pilot that ignores these ships a demo. A programme that names owners for each ships a production system.",
        ],
      },
      {
        id: "architecture",
        heading: "The reference architecture we ship",
        body: [
          "Three layers: a governed retrieval layer that treats your ERP and data platform as the source of truth, an orchestration layer that composes tools with explicit permissions, and an evaluation layer that scores every response before it reaches the user.",
          "The orchestration layer is where most teams over-engineer. Start with two tools and one agent. Add capability only when observability tells you the current agent is at ceiling.",
        ],
      },
      {
        id: "governance",
        heading: "Governance that doesn't slow you down",
        body: [
          "Governance fails when it's a review board. It works when it's a contract encoded in the platform: every agent action logged, every prompt versioned, every tool call scoped to the caller's identity.",
          "Do this on day one and audit becomes a report, not a project.",
        ],
      },
      {
        id: "shipping",
        heading: "Shipping in 12 weeks",
        body: [
          "Weeks 1–2: one use case, one team, hard scope. Weeks 3–6: reference architecture deployed against real data. Weeks 7–10: evaluation harness, human-in-the-loop, cost ceilings. Weeks 11–12: production cutover with observability wired in from the first request.",
        ],
      },
    ],
  },
  {
    id: "bluegecko-migration",
    title: "Why European Manufacturers Are Choosing BlueGecko for SAP Migration",
    category: "Data Engineering",
    author: "Rahul Vinnakota",
    authorRole: "Co-Founder · SAP Transformation Lead",
    date: "April 10, 2025",
    readingTime: "7 min read",
    cover: blogData,
    excerpt:
      "Data migration is where most SAP programmes stall. BlueGecko is cutting timelines by 40% across European manufacturing clients.",
    pullQuote:
      "You don't win an SAP programme in blueprint. You win it — or lose it — in the data.",
    stats: [
      { value: "40%", label: "reduction in migration timelines" },
      { value: "99.6%", label: "field-level reconciliation accuracy" },
      { value: "6+", label: "manufacturing rollouts on BlueGecko" },
    ],
    sections: [
      {
        id: "the-real-cost",
        heading: "The real cost of migration failures",
        body: [
          "In every SAP programme post-mortem we've run, the same finding surfaces: the go-live slip was a data slip. Mapping ambiguity, silent field truncation, reconciliation gaps found in UAT — the compounding cost is measured in months, not weeks.",
        ],
      },
      {
        id: "what-bluegecko-does",
        heading: "What BlueGecko does differently",
        body: [
          "BlueGecko replaces the spreadsheet-and-scripts approach with an engine: automated source-to-target mapping, rule-based transformations with lineage, and reconciliation that runs continuously instead of at the end.",
          "The unlock isn't the tool. It's that data teams and functional teams work off the same live picture, every day of the programme.",
        ],
      },
      {
        id: "why-manufacturing",
        heading: "Why manufacturing is leading adoption",
        body: [
          "Manufacturing carries the messiest master data in the enterprise: materials, BOMs, routings, vendors, plants — often replicated across a dozen legacy systems. BlueGecko's dedupe and harmonisation model was designed against exactly this shape of estate.",
        ],
      },
    ],
  },
];

const CATEGORIES = [
  "All Categories",
  "Data & Analytics",
  "AI & Automation",
  "Cloud",
  "Digital Transformation",
  "Industry",
  "Company",
];

const TAGS = [
  "Data Strategy",
  "Analytics",
  "AI",
  "Cloud",
  "Digital Transformation",
  "Data Governance",
  "Machine Learning",
  "Business Intelligence",
];



export default function BlogDetail() {
  const { id } = useParams();
  const currentIndex = useMemo(() => {
    const idx = POSTS.findIndex((p) => p.id === id);
    return idx === -1 ? 0 : idx;
  }, [id]);
  const post = POSTS[currentIndex];
  const prevPost = currentIndex > 0 ? POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < POSTS.length - 1 ? POSTS[currentIndex + 1] : null;
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const recent = POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [post.id]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      <main>
        <PageBanner
          image={bannerBlog}
          eyebrow={post.category}
          title={post.title}
          description={post.excerpt}
        />
        {/* Breadcrumb */}
        <div className="container pt-6 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
              <House size={14} /> House
            </Link>
            <CaretRight size={14} className="text-muted-foreground/60" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <CaretRight size={14} className="text-muted-foreground/60" />
            <span className="text-foreground truncate max-w-[60vw]">{post.title}</span>
          </nav>
        </div>

        <section className="container pb-16">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Article */}
            <article>
              {/* Cover */}
              <div className="rounded-xl overflow-hidden border border-border/60 shadow-lg aspect-[16/8] mb-8">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="text-muted-foreground/60">•</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Clock size={14} /> {post.readingTime}
                </span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-bold font-heading text-foreground leading-tight text-balance">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>

              {/* Body */}
              <div className="mt-10 space-y-8">
                {post.sections.map((s, i) => (
                  <div key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-primary mb-3">
                      {s.heading}
                    </h2>
                    {s.body.map((p, j) => (
                      <p key={j} className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}
                    {s.image && (
                      <div className="my-6 rounded-xl overflow-hidden border border-border/60 shadow-md">
                        <img src={s.image} alt={s.imageAlt || s.heading} className="w-full h-auto" />
                      </div>
                    )}

                    {post.showGenericBenefits && i === 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {[
                          "Make faster, confident decisions",
                          "Identify new opportunities and mitigate risks",
                          "Improve operational efficiency",
                          "Drive innovation and competitive advantage",
                        ].map((li) => (
                          <li key={li} className="flex items-start gap-2.5 text-[15px] text-muted-foreground">
                            <span className="mt-1 inline-flex h-4 w-4 shrink-0 rounded-full bg-accent/20 items-center justify-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            </span>
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                    {(post.customBlocks && i === 1) && (
                      <div className="mt-6 grid sm:grid-cols-2 gap-5">
                        {post.customBlocks.map((b) => (
                          <div key={b.title} className="flex gap-3">
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary grid place-items-center">
                              <b.icon size={18} />
                            </div>
                            <div>
                              <h4 className="font-heading font-semibold text-primary text-[15px]">{b.title}</h4>
                              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Callout */}
                <div className="rounded-xl border border-primary/15 bg-primary/5 p-5 flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center">
                    <Lightbulb size={18} />
                  </div>
                  <p className="text-[15px] text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">At Nextgenlytics, we help organizations unlock the full potential of their data. </span>
                    <span className="text-muted-foreground">{post.pullQuote}</span>
                  </p>
                </div>
              </div>

              {/* Share */}
              <div className="mt-10 pt-6 border-t border-border/60 flex items-center gap-4">
                <span className="text-sm font-semibold text-foreground">Share this article:</span>
                <div className="flex items-center gap-2">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <LinkedinLogo size={15} />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" aria-label="Share on X" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <TwitterLogo size={15} />
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on FacebookLogo" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <FacebookLogo size={15} />
                  </a>
                  <button onClick={() => navigator.clipboard?.writeText(shareUrl)} aria-label="Copy link" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <LinkIcon size={15} />
                  </button>
                </div>
              </div>

              {/* Prev / Next navigation */}
              {(prevPost || nextPost) && (
                <nav
                  aria-label="Blog post navigation"
                  className="mt-8 grid sm:grid-cols-2 gap-4"
                >
                  {prevPost ? (
                    <Link
                      to={`/blog/${prevPost.id}`}
                      className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowLeft size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                          Previous
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {prevPost.title}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <span />
                  )}
                  {nextPost ? (
                    <Link
                      to={`/blog/${nextPost.id}`}
                      className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all text-right sm:justify-end"
                    >
                      <div className="min-w-0 order-1 sm:order-none">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                          Next
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {nextPost.title}
                        </p>
                      </div>
                      <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors order-2">
                        <ArrowRight size={16} />
                      </div>
                    </Link>
                  ) : (
                    <span />
                  )}
                </nav>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              {/* MagnifyingGlass */}
              <div className="relative">
                <input
                  type="search"
                  placeholder="MagnifyingGlass articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery.trim()) {
                      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
                    }
                  }}
                  className="w-full h-11 pl-4 pr-11 rounded-full border border-border/70 bg-card text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  onClick={() => {
                    if (searchQuery.trim()) {
                      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
                    }
                  }}
                  aria-label="MagnifyingGlass"
                  className="absolute right-1 top-1 h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <MagnifyingGlass size={14} />
                </button>
              </div>

              {/* Categories */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-heading font-bold text-primary mb-3">Categories</h3>
                <ul className="space-y-1">
                  {CATEGORIES.map((c) => {
                    const active = c === activeCat;
                    return (
                      <li key={c}>
                        <button
                          onClick={() => {
                            setActiveCat(c);
                            if (c === "All Categories") {
                              navigate("/blog");
                            } else {
                              navigate(`/blog?category=${encodeURIComponent(c)}`);
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            active
                              ? "bg-accent text-accent-foreground font-semibold border border-accent"
                              : "text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <span>{c}</span>
                          <CaretRight size={14} className={active ? "text-accent-foreground" : "text-muted-foreground/60"} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-heading font-bold text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recent.map((r) => (
                    <li key={r.id}>
                      <Link to={`/blog/${r.id}`} className="group flex gap-3">
                        <div className="h-16 w-16 shrink-0 rounded-lg overflow-hidden">
                          <img src={r.cover} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {r.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {r.date} • {r.readingTime}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-heading font-bold text-primary mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((t) => (
                    <button
                      key={t}
                      className="px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6">
                <div className="absolute -top-2 -right-2 grid grid-cols-6 gap-1.5 opacity-30">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-primary-foreground" />
                  ))}
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rotate-12 border-2 border-accent/60 rounded-lg" />
                <h4 className="relative font-heading text-xl font-bold leading-tight">
                  Ready to turn your<br />data into impact?
                </h4>
                <p className="relative mt-3 text-sm text-primary-foreground/85 leading-relaxed">
                  Let's build data solutions that drive real business outcomes.
                </p>
                <Link
                  to="/contact"
                  className="relative mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
