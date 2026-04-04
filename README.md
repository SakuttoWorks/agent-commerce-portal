# Agent-Commerce-OS 🚢

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Support via Polar.sh](https://img.shields.io/badge/Support_via-Polar.sh-blue)](https://buy.polar.sh/polar_cl_ZI9H5fL8dQqcormOadiGDFDpS2Sxd1jT05jTX1vStWi)
[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?logo=github)](https://github.com/sponsors/SakuttoWorks)

**The official documentation hub and discovery layer for the [Sakutto Works](https://github.com/SakuttoWorks) AI Data Infrastructure.**

---

## 🌐 Overview

Agent-Commerce-OS (Project GHOST SHIP) is a high-performance **Data Normalization Infrastructure** engineered specifically for autonomous AI agents. It seamlessly converts unstructured web data into clean, semantic, RAG-optimized Markdown or JSON—all secured behind a strict Zero-Trust Edge architecture.

This repository ([`agent-commerce-portal`](https://github.com/SakuttoWorks/agent-commerce-portal)) serves as the central hub for our API documentation, schema definitions, and protocol specifications. It is designed to empower AI agents to autonomously discover, comprehend, and integrate with our services.

> **Live Portal:** Visit the Official Portal at **[https://sakutto.works](https://sakutto.works)** to access the live discovery hub and monitor system status.

---

## 🤖 AI Discovery (AEO Ready)

This hub is fully architected for **Agent Engine Optimization (AEO)**. LLMs and autonomous agents can natively ingest our specifications through the following machine-readable endpoints:

* [**openapi.yaml**](openapi.yaml) : The core OpenAPI 3.1 specification. Critical for agents to understand endpoints, auth, and self-healing error structures (`AgentSemanticError`).
* [**llms.txt**](llms.txt) : High-level semantic overview for LLM context windowing.
* [**llms-full.txt**](llms-full.txt) : Comprehensive technical specifications and architecture details.
* [**mcp.json**](mcp.json) : Reference schema outlining the Model Context Protocol tools implemented by our Client Layer (Layer C).

---

## 🏗 System Architecture

To maintain a strict Zero-Trust and high-performance ecosystem, our infrastructure is entirely decoupled into three core layers:

1. **[Gateway] Layer A: Cloudflare Workers**
   *The Intelligent Edge.* ([agent-commerce-gateway](https://github.com/SakuttoWorks/agent-commerce-gateway)) Handles Polar.sh license key validation with sub-50ms caching, prompt injection shielding, and asynchronous usage metering ($0.10/call). It securely forwards authenticated requests by appending internal `X-Internal-Secret` and `X-Tenant-Id` headers.
2. **[Core] Layer B: Google Cloud Run**
   *The Agentic Factory.* ([agent-commerce-core](https://github.com/SakuttoWorks/agent-commerce-core)) A high-performance Python/FastAPI micro-container built with `uv`. It executes deep semantic extraction (via Jina Reader, Firecrawl, etc.) and strictly drops any unauthenticated or malformed traffic at the perimeter.
3. **[Client] Layer C: MCP Server**
   *The Integration Layer.* ([ghost-ship-mcp-server](https://github.com/SakuttoWorks/ghost-ship-mcp-server)) Implements standardized Model Context Protocol (MCP) tools, providing a seamless interface for autonomous agents to interact securely with the Gateway API.

---

## 🔑 Access & Billing

We operate on a transparent, pure **Pay-As-You-Go** model powered by [Polar.sh](https://buy.polar.sh/polar_cl_mps3G1hmCTmQWDYYEMY2G1c7sojN3Tul6IhjO4EtVuj). 

No hidden fees, no forced subscriptions. Developers and AI agents are billed exactly **$0.10 per successful normalization call**.

1. **Get your API Key:** Purchase a license key from our [Polar.sh storefront](https://buy.polar.sh/polar_cl_mps3G1hmCTmQWDYYEMY2G1c7sojN3Tul6IhjO4EtVuj). Your key is issued immediately upon checkout.
2. **Authenticate:** Pass the generated key in your HTTP request headers: `Authorization: Bearer <YOUR_KEY>`.

---

## 🛠 Local Setup & Contributing

To test this portal documentation (Discovery Hub) locally, simply serve the directory using any static HTTP server. You can use Python or Node.js depending on your environment:

```bash
# Using Python
python -m http.server 8000

# Or using Node.js (npx)
npx serve .
```

We welcome contributions from the global community! To contribute, please follow these standard steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git switch -c feature/your-feature-name`).
3. Make your changes to the documentation, code, or schemas.
4. Commit your changes with clear, descriptive messages (`git commit -m "Add feature X"`).
5. Push your branch to your forked repository (`git push origin feature/your-feature-name`).
6. Submit a Pull Request detailing your updates and the problem they solve.

For major structural changes, please [open an Issue](https://github.com/SakuttoWorks/agent-commerce-portal/issues) first to discuss your proposed modifications. Please also ensure you adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) when participating in the community.

---

## 💖 Support the Project

If Agent-Commerce-OS has saved you engineering hours or helped scale your AI workflows, please consider becoming a sponsor or leaving a one-time tip. Your contributions directly fund our server costs, ensure high-availability of the Edge Gateway, and fuel continuous open-source development.

[![Support via Polar.sh](https://img.shields.io/badge/Support_via-Polar.sh-blue?style=for-the-badge)](https://buy.polar.sh/polar_cl_ZI9H5fL8dQqcormOadiGDFDpS2Sxd1jT05jTX1vStWi)
[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=for-the-badge&logo=github)](https://github.com/sponsors/SakuttoWorks)

---

## 📄 License

This project is licensed under the MIT License. (Please see the `LICENSE` file in the repository root for full details.)


© 2026 Sakutto Works - *Standardizing the Semantic Web for Agents.*