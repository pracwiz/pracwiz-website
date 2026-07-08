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

---

## Phase 2: Link Contact Form to Gmail
**Goal:** Connect the frontend form in [index.html](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/index.html) to submit inquiries directly to `pracwiz.solutions@gmail.com`.

### Recommendation: Web3Forms (No-code / Fast Integration)
Web3Forms is a free, secure form processor for static websites. You don't need any server-side code.

#### Implementation Steps:
1. Obtain a free Access Key from [Web3Forms](https://web3forms.com/) (delivered instantly via email).
2. Modify the contact form in [index.html](file:///Users/pracwiz/Documents/antigravity/dazzling-euclid/index.html) to post to `https://api.web3forms.com/submit`.
3. Add a hidden input field containing the access key:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
4. Update `script.js` to handle form submission via standard `fetch`, display a success state to the user without reloading the page, and clear the input values.

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
