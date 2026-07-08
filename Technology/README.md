# PracWiz Technology Hub (CTO Dashboard)

Welcome to the central technology management hub for **PracWiz**. This folder serves as our single source of truth for architecture, standards, infrastructure planning, and roadmaps.

---

## 1. Technical Tenets
We build our technology around three core pillars:
1. **Calm & Spacious Design:** Our software should feel like a breath of fresh air. We avoid visual clutter and complex configurations, matching our brand archetype.
2. **Extreme Cost-Efficiency (Solo Operations):** We leverage free-tier, serverless, and managed services (e.g., GitHub Pages, Cloudflare, Google Workspace) to keep fixed monthly costs at or near $0.
3. **Bulletproof Security & Compliance:** Since our target audience includes highly regulated professionals (Pharmacists, Lawyers, Architects, Auditors), data integrity, privacy, and secure transport are non-negotiable.

---

## 2. Infrastructure & Subscription Map

Our current technology assets and subscriptions are mapped below:

| Service | Account/Login | Purpose | Details |
| :--- | :--- | :--- | :--- |
| **Google One Pro** | `norman.chankj@gmail.com` | Storage & Operations | Shared via Family plan. |
| **GitHub** | `pracwiz.solutions+Github@gmail.com` | Code & Hosting | Repository: [pracwiz-website](https://github.com/pracwiz/pracwiz-website). SSH authenticated. |
| **Cloudflare** | `pracwiz.solutions+cloudflare@gmail.com` | DNS, Domain, Security, Email | Domain: `pracwiz.com`. Handles DNS, CDN, and email forwarding. |

---

## 3. Technology Folder Structure

- [architecture/](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/architecture/)
  - [tech_stack.md](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/architecture/tech_stack.md) — Frontend, backend, database choices, and form handling architecture.
- [roadmap/](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/roadmap/)
  - [technical_roadmap.md](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/roadmap/technical_roadmap.md) — Implementation blueprint for custom domain, email forwarding, form submission, and SEO/AIO.
- [security_compliance/](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/security_compliance/)
  - [compliance_guidelines.md](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/security_compliance/compliance_guidelines.md) — Industry-specific guidelines for highly regulated professions.
- [standards/](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/standards/)
  - [coding_standards.md](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/Technology/standards/coding_standards.md) — Quality standards, git workflow, and rules for development.

---

## 4. CTO Recommendations for Automation

To keep operations fully automated and manageable for a solo operator, we recommend:
1. **Cloudflare Wrangler CLI:** To deploy serverless Cloudflare Workers for secure form endpoints without needing a server.
2. **Web3Forms / Formspree:** A zero-config backup form routing solution if serverless is not desired.
3. **Google Search Console & Bing Webmaster Tools:** For monitoring search indexing.
4. **`llms.txt` Standard:** For AI Search Engine Optimization (AIO).
