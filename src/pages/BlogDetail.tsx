import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import blogSap from "@/assets/blog-sap-clean-core.jpg";
import blogAi from "@/assets/blog-ai-agents.jpg";
import blogData from "@/assets/blog-data-migration.jpg";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Linkedin,
  Link2,
  Facebook,
  Twitter,
  Search,
  ChevronRight,
  Database,
  Cloud,
  BarChart3,
  Users,
  Lightbulb,
  Mail,
  Home,
} from "lucide-react";

type Section = { id: string; heading: string; body: string[] };

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
};

const POSTS: Post[] = [
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
      { value: "12wk", label: "typical nextgenlytics PoC-to-live timeline" },
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
