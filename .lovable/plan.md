## Home Page Redesign — Premium Enterprise (Stripe × Linear × Vercel × Databricks)

Goal: rebuild `src/pages/Index.tsx` and its section components to feel premium, modern, and enterprise-grade with strong hierarchy, glassmorphism used sparingly, and refined motion.

### Design system updates (`src/index.css`, `tailwind.config.ts`)
- Add fonts: Plus Jakarta Sans (headings, 700–800) + Inter (body, 400–500). Keep DM Sans/Space Grotesk fallback removed from body only on Home.
- New tokens:
  - `--primary: #0B1E66`, `--accent: #FFB000`, `--glow: #3B82F6`, `--dark: #081A45`, `--bg: #F8FAFC`.
  - Radii: cards 28px, buttons 18px, inputs 16px.
  - Shadow: `--shadow-premium: 0 20px 80px rgba(0,0,0,.08)`.
  - Glass utility with `backdrop-filter: blur(30px)`.
- Add animations: mesh-gradient shift, particle drift, magnetic-button base, marquee-slow (reuse), counter fade.

### Section rebuild plan

1. **HeroSection** (100vh, dark navy `#081A45`)
   - Left: badge, huge headline "Enterprise Data, AI & ERP Transformation.", subtext w/ BlueGecko highlight, primary + secondary CTAs, 5-star trust line.
   - Right: animated AI network (reuse pattern from `Hero2Section` — orbit nodes, glass panels, glowing core), floating KPI glass cards, particles + noise + radial gradients.
   - Sticky blurred navbar (already exists — verify blur on scroll).

2. **Trusted marquee** (new `TrustedMarqueeSection`)
   - Infinite horizontal marquee of SAP / Microsoft / Databricks / Snowflake / Oracle / AWS / Azure / Google Cloud as text-lockups; fade edges.

3. **ProblemSection** (rebuild `ProblemWeSolveSection`)
   - Split layout. Left: huge display headline "Most Transformations Fail at The Data Layer". Right: 3 staggered floating glass cards (Poor governance, Broken ERP migration, AI without quality data), scroll-reveal one after another.

4. **WhyUsSection** — bento grid
   - 5 tiles varying sizes: EDT, Founded 2022, "50% Faster Delivery" (hero tile), BlueGecko AI Platform, Onsite Europe Support. Rounded 32px, glass surfaces, subtle hover lift + glow.

5. **StatsSection** — premium KPI dashboard
   - Dark card panel with 4 large animated counters (12 countries, 17 legal entities, 70+ projects, 99% satisfaction), gradient dividers, tabular numerals.

6. **ProcessSection** — horizontal 5-step
   - Discover → Assess → Migrate → Optimize → Govern with big 01–05 numerals, connector lines, hover expands to reveal detail.

7. **CaseStudiesSection** — showcase cards
   - Large dark cards, image left / text right (alternating), big stat callout ("50% Reduction"), Read Story link, hover image zoom.

8. **PlatformSection** (new/replace video showcase)
   - Laptop mockup framing BlueGecko dashboard screenshot, floating AI chips + glow orbs around it.

9. **TestimonialsSection** — single large quote card
   - Big serif-ish quote, 5 stars, role/company, subtle carousel dots.

10. **DualCtaSection → Final CTA**
    - Dark section, animated mesh gradient bg, huge headline "Ready to Modernize Your Enterprise?", two CTAs (Book Meeting / Watch Demo).

### `src/pages/Index.tsx` order
Navbar → Hero → TrustedMarquee → Problem → WhyUs (bento) → Stats (KPI) → Process (horizontal) → CaseStudies → Platform → Testimonials → FinalCTA → Footer.

### Motion inventory
Fade-up on scroll (existing `RevealOnScroll`), counter animation (`use-count-up`), marquee, floating cards, mouse parallax in hero, magnetic buttons (new small util), animated SVG connections, gradient glow, card lift on hover, blurred sticky nav.

### Scope guardrails
- Only Home page + shared tokens. No changes to routing, other pages, or backend.
- Reuse existing `Navbar`, `Footer`, `ScrollToTop`, `RevealOnScroll`, `use-count-up`.
- No new deps; use Tailwind + CSS only (no framer-motion install).
- Keep semantic tokens; avoid hardcoded colors in components — new tokens live in `index.css`/`tailwind.config.ts`.

### Deliverables
- Updated: `src/index.css`, `tailwind.config.ts`, `src/pages/Index.tsx`.
- Rewritten: `HeroSection`, `ProblemWeSolveSection` (mounted as Problem), `WhyUsSection`, `StatsSection`, `ProcessSection`, `CaseStudiesSection`, `TestimonialsSection`, `DualCtaSection`.
- New: `TrustedMarqueeSection`, `PlatformShowcaseSection`.
- Verification: Playwright screenshot pass at desktop (1280) + mobile (390) checking each section renders and marquee/counters animate.

Approve to proceed and I'll implement in one pass.
