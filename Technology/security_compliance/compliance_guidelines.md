# Technical Security & Compliance Guidelines

Since PracWiz builds digital systems for highly regulated professionals, we must ensure our technical decisions comply with industry-specific security regulations.

---

## 1. Industry Compliance Requirements

### A. Pharmacists (Healthcare Data / HIPAA)
- **Rule:** Never store, transmit, or process Protected Health Information (PHI) on non-HIPAA-compliant platforms (e.g., standard static databases, generic email routes).
- **Contact Form Guardrail:** Do not collect patient names, prescription numbers, or medical history in public contact forms. Ensure form fields explicitly ask for "business operational bottlenecks" rather than patient scenarios.

### B. Lawyers (Client Privilege & Confidentiality)
- **Rule:** Attorney-client communication is privileged. Any data transmitted via custom forms must be encrypted in transit and at rest.
- **Contact Form Guardrail:** Instruct prospects to not input sensitive legal details about active cases.

### C. Auditors (Financial Records & SOX)
- **Rule:** Financial transaction records, tax documents, and audit logs require strict integrity. Data must be read-only once logged and backed up daily.
- **Contact Form Guardrail:** Limit fields to administrative info.

### D. Architects (IP Protection)
- **Rule:** CAD files, municipal filings, and blueprints represent valuable Intellectual Property. Secure download links and access tokens are mandatory for internal portals.

---

## 2. Infrastructure Security Baseline

1. **Encryption in Transit:** Enable strict HTTPS across all sites. Cloudflare TLS configuration must be set to "Full (Strict)" to prevent intercept attacks between Cloudflare and GitHub.
2. **Minimal Data Retention on Gateway:** If using third-party form handlers, ensure they do not store submitted messages permanently. If using custom Cloudflare Workers, forward the mail payload directly to SMTP and immediately flush memory.
3. **Strict Secrets Management:** Never hardcode API keys, database credentials, or email router access tokens inside client-side JS (`script.js`). Use serverless environment variables or secure vault setups.
4. **Access Control:** Enable Multi-Factor Authentication (MFA) on GitHub, Cloudflare, and Gmail accounts. Regularly audit SSH keys registered in GitHub.
