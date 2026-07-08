# Project Rules & Guidelines for AI Agents

This repository has specific constraints configured to align with PracWiz CTO principles and resource policies:

---

## 1. System Modification Restrictions
- **Homebrew Installations:** All Homebrew installations or global macOS package updates must be performed manually by the administrator (Norman). AI agents are strictly forbidden from running `brew install` or modifying the system-level packages of this machine.
- **Node.js Execution:** Standard operations and serverless code deployments should use local `npx` run commands where possible, avoiding any global package installations.

---

## 2. Technical Stack Tenet
- **Asset Maximization:** Fully utilize the tools and platforms already on hand (GitHub, Cloudflare, Google Workspace) at $0 running cost before recommending external services (e.g. Web3Forms, Formspree) unless there is a massive competitive advantage.
