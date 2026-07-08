# Client Playbook: Professional $0-Cost Custom Email Setup

This standard operating procedure (SOP) outlines the exact process to configure a professional custom email address (e.g., `contact@clientdomain.com`) forwarding to a free personal Gmail account (e.g., `client@gmail.com`) with the ability to both **receive** and **reply** using the custom domain, at **$0 running cost**.

---

## Architecture Overview
- **Inbound Mail:** Managed by **Cloudflare Email Routing** (intercepts `@clientdomain.com` mail and forwards to Gmail).
- **Outbound Mail:** Managed by **Gmail SMTP** using a secure **Google App Password** to send emails *as* `@clientdomain.com` through Gmail's servers.

---

## Configuration Steps

### Phase 1: Inbound Setup (Cloudflare Email Routing)
1. **Verify Destination Email:**
   - Log in to the client's **Cloudflare Dashboard** and select their custom domain.
   - Go to **Email** -> **Email Routing** -> **Destination Addresses**.
   - Click **Add Destination**, enter the destination Gmail address, and save.
   - Instruct the client to open their Gmail inbox, find the verification email from Cloudflare, and click the confirmation link.
2. **Create Routing Address:**
   - Go to **Routing Rules** -> **Create Address**.
   - Set the custom prefix (e.g., `contact`, `info`, or `hello`).
   - Select the verified destination Gmail address and click **Save**.
3. **Provision DNS Records:**
   - If prompted by Cloudflare, click **Add records automatically** to inject the required MX records and SPF TXT record:
     - **MX Records:**
       - `route1.mx.cloudflare.net` (Priority: 10)
       - `route2.mx.cloudflare.net` (Priority: 20)
       - `route3.mx.cloudflare.net` (Priority: 30)
     - **TXT Record (SPF):** `v=spf1 include:_spf.mx.cloudflare.net ~all`

---

### Phase 2: Outbound Setup (Gmail "Send Mail As")
1. **Generate Google App Password:**
   - Log in to the client's **[Google Account Security Dashboard](https://myaccount.google.com/security)**.
   - Ensure **2-Step Verification** is turned on.
   - Go directly to: **[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**.
   - Enter `Cloudflare SMTP` as the app name and click **Create**.
   - Copy the generated 16-character password (e.g., `abcd efgh ijkl mnop`).
2. **Configure Custom Sender in Gmail:**
   - Open **Gmail Settings** (gear icon) -> **See all settings** -> **Accounts and Import** tab.
   - Under **Send mail as**, click **Add another email address**.
   - In the popup window:
     - **Name:** Client's Brand/Company Name.
     - **Email Address:** The custom domain email (e.g., `contact@clientdomain.com`).
     - **Check** "Treat as an alias".
     - Click **Next Step**.
3. **Set Up SMTP Connection:**
   - **SMTP Server:** `smtp.gmail.com`
   - **Port:** `587`
   - **Username:** The client's personal Gmail address.
   - **Password:** The 16-character App Password (pasted without spaces).
   - Select **Secured connection using TLS**.
   - Click **Add Account**.
4. **Verification:**
   - Go back to Gmail inbox, open the confirmation email sent by Google, copy the code, and paste it into the verification popup window.
5. **Set Reply Settings:**
   - In Gmail Settings -> **Accounts and Import** -> **Send mail as**, set **When replying to a message** to:
     - **"Reply from the same address the message was sent to"**

---

## Phase 3: Deliverability & Security Hardening (DNS)
To ensure emails sent from this alias do not land in spam folders, verify that the domain carries standard email security records. In the client's **Cloudflare DNS settings**, confirm the following records exist:

1. **SPF (Sender Policy Framework):**
   - **Type:** `TXT`
   - **Name:** `@` (Root)
   - **Content:** `v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all`
   - *Note: If they use multiple systems to send mail, merge the `include:` tags into a single SPF record.*

2. **DMARC (Domain-based Message Authentication, Reporting, and Conformance):**
   - **Type:** `TXT`
   - **Name:** `_dmarc`
   - **Content:** `v=DMARC1; p=none; rua=mailto:dmarc-reports@clientdomain.com` (Use a basic monitoring policy for initial setup).

---

## Phase 4: Quality Assurance & Testing Checklist
Always perform the following 3 tests before delivering the configuration to the client:
- [ ] **Inbound Routing:** Send an email from an external domain to `contact@clientdomain.com` and verify it lands in the Gmail inbox within 30 seconds.
- [ ] **Outbound Alias:** Hit "Reply" on the forwarded email and verify that the "From" header lists the custom address `contact@clientdomain.com` (and does not display the base Gmail address in CC or header).
- [ ] **Spam Check:** Send an outbound email to a third-party service (e.g., Mail-tester.com) to confirm the SPF record is parsed correctly and passes authentication.
