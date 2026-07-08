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
Since GitHub Pages is a static host, we cannot execute backend code (like Node.js or Python) directly. We have two primary paths:

### Option A: Cloudflare Workers (Recommended)
- **Mechanism:** Deploy a tiny, serverless JavaScript function on Cloudflare Workers.
- **Cost:** Free (up to 100,000 requests/day).
- **Advantages:**
  - 100% self-hosted on your Cloudflare account.
  - Completely hides your destination email address (`pracwiz.solutions@gmail.com`) from public frontend code, preventing email harvesting and spam.
  - Offers infinite flexibility to forward to email APIs (like Mailgun, SendGrid), Discord/Telegram channels, or Google Sheets.

### Option B: Web3Forms or Formspree (Low-code alternative)
- **Mechanism:** Post form data directly to a third-party gateway API URL.
- **Cost:** Free (up to 250 submissions/month for Web3Forms).
- **Advantages:**
  - Zero serverless configuration required.
  - Easily integrated with a single `action` attribute in the HTML form.

---

## 5. Storage & Backups: Google One
- **Choice:** Google One Pro (shared by family plan)
- **Purpose:** Backup storage for project assets, source code archives, database backups (in future phases), and operational logs.
