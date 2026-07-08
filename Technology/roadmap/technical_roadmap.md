# PracWiz Technical Roadmap

This roadmap details the precise implementation steps, settings, and code requirements to execute our upcoming phases.

---

## Phase 1: Set Up Cloudflare Email Routing
**Goal:** Route incoming emails to `contact@pracwiz.com` to your base Gmail account `pracwiz.solutions@gmail.com`.

### Steps:
1. Log in to the Cloudflare dashboard using `pracwiz.solutions+cloudflare@gmail.com`.
2. Select the `pracwiz.com` domain.
3. Click on **Email** in the sidebar menu.
4. Click **Get Started** or **Email Routing**.
5. Click **Add Destination Address**, enter `pracwiz.solutions@gmail.com`, and click **Save**.
6. Cloudflare will send a verification email to your Gmail account. Click the verification link.
7. Click **Create Address**, set the custom address to `contact`, and select the destination address as `pracwiz.solutions@gmail.com`.
8. Click **Save**. If prompted to configure DNS records (MX and TXT records for email routing), click **Add records automatically**.

## Phase 2: Link Contact Form via Cloudflare Worker
**Goal:** Deploy a $0-cost serverless Cloudflare Worker to process submissions and securely email them to `pracwiz.solutions@gmail.com` using assets on hand.

### Steps:
1. **Initialize the Worker:**
   - Create a worker directory (e.g., `Technology/form-handler`).
   - Create a `wrangler.toml` file mapping the worker name and compatibility date.
2. **Write the Worker Script:**
   - The worker script intercepts `POST` requests, validates inputs (Full Name, Email, and Message), and dispatches the contents to `contact@pracwiz.com` (which automatically forwards to `pracwiz.solutions@gmail.com` via Cloudflare Email Routing).
   - To send the email, we will use **Mailchannels** (a transactional email service integrated natively and for free with Cloudflare Workers, requiring no API keys) or **Resend API** (free tier of 3,000 emails/month).
3. **Deploy the Worker:**
   - Run `npx wrangler deploy` to push the worker to your Cloudflare account.
4. **Modify Frontend Form:**
   - Update `script.js` to send form inputs as a JSON payload to the newly deployed Worker URL.
   - Display a clean transition and success notification to the user upon submission.

---

## Phase 3: Deploy Website to Custom Domain (`pracwiz.com`)
**Goal:** Map the GitHub Pages site `https://pracwiz.github.io/pracwiz-website/` to your custom domain `pracwiz.com` with Cloudflare proxying.

### Step A: Cloudflare DNS Setup
Log in to Cloudflare DNS and add the following records:
1. **Root domain A records:** Point `pracwiz.com` to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   - *(Set proxy status to **Proxied / Orange Cloud** for security and speed)*
2. **Subdomain CNAME record:** Point `www.pracwiz.com` to `pracwiz.github.io` (Proxied).

### Step B: GitHub Pages Config
1. Create a `CNAME` file at the root of the repository containing exactly `pracwiz.com`.
2. Go to the GitHub repository settings -> **Pages**.
3. Under **Custom Domain**, enter `pracwiz.com` and save.
4. Check **Enforce HTTPS** (Cloudflare will handle the SSL handshake securely).

---

## Phase 4: Search Engine & AI Optimization (SEO / AIO)
**Goal:** Rank highly on Google and ensure AI models (Gemini, ChatGPT, Perplexity) correctly understand PracWiz when users ask about boutique business automation.

### 1. Traditional SEO
- **`sitemap.xml`:** Map all indexable pages to help crawlers discover content.
- **`robots.txt`:** Direct friendly crawlers and block indexing of private/unwanted pages.
- **Structured Data (Schema.org):** Inline JSON-LD metadata for rich search results (Company logo, brand information, and services).

### 2. AI Optimization (AIO)
- **`llms.txt` File:** Create a markdown-formatted file at the site root (`https://pracwiz.com/llms.txt`). Modern AI crawlers read this file to obtain high-density, accurate information about a company without parsing complex HTML.
- **Target Copy Refinements:** Refine the copy on the landing page to target boutique professionals specifically, using keywords like *independent pharmacist compliance automation*, *solo law firm client onboarding systems*, *auditor file pipelines*, and *architect drawing tracking*.
