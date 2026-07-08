# PracWiz Technical Architecture & Tech Stack

This document details the approved technical architecture and stack components for the PracWiz brand.

---

## 1. Hosting & CI/CD: GitHub Pages
- **Choice:** GitHub Pages
- **Cost:** Free
- **Rationale:** 
  - Perfect for serving static web files (`index.html`, `style.css`, `script.js`, and images).
  - Eliminates server maintenance and hosting costs.
  - Highly secure, fast, and integrates natively with Git version control.
  - Deployments can be automated on push to the `main` branch.

---

## 2. DNS, CDN & Domain: Cloudflare
- **Choice:** Cloudflare Free Tier
- **Cost:** Free (excluding domain registration)
- **Domain:** `pracwiz.com`
- **Rationale:**
  - Fast, global DNS propagation.
  - Free SSL/TLS encryption.
  - Global Content Delivery Network (CDN) to cache static assets for fast global loading.
  - Advanced security features (DDoS protection, bot mitigation, and Web Application Firewall).

---

## 3. Email Infrastructure: Cloudflare Email Routing
- **Choice:** Cloudflare Email Routing
- **Cost:** Free
- **Configuration:**
  - Custom Address: `contact@pracwiz.com`
  - Destination Address: `pracwiz.solutions@gmail.com`
- **Rationale:**
  - Eliminates the need for paid business email hosting (such as Google Workspace or Microsoft 365, saving ~$6-12/user/month).
  - Keeps the professional brand aesthetic while leveraging a standard Gmail account to manage incoming responses.

---
## 4. Contact Form Processing
Since GitHub Pages is a static host, we cannot execute backend code (like Node.js or Python) directly.

### Selected Primary Solution: Cloudflare Workers
- **Mechanism:** Deploy a serverless JavaScript function (Worker) on your Cloudflare account to handle the HTTP POST from the contact form and email it directly to `pracwiz.solutions@gmail.com`.
- **Cost:** **$0** (Cloudflare's Free Tier includes **100,000 requests per day**, which is more than sufficient).
- **Advantages:**
  - **Asset Maximization:** Fully utilizes your existing Cloudflare setup. No new accounts or third-party service dependencies (like Formspree or Web3Forms) are needed.
  - **Privacy:** Keeps your destination Gmail address private and hidden from public client-side JavaScript, preventing spam bots from harvesting the email.
  - **Flexibility:** If requirements change, the Worker can easily be updated to log inputs to Google Sheets, databases, or send instant Slack/Discord/Telegram alerts.

---

## 5. Storage & Backups: Google One
- **Choice:** Google One Pro (shared by family plan)
- **Purpose:** Backup storage for project assets, source code archives, database backups (in future phases), and operational logs.
