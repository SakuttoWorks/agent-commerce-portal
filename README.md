# Agent-Commerce-OS 🚢

**The official documentation hub and discovery layer for the Sakutto Works AI Data Infrastructure.**

## 🌐 Overview
Agent-Commerce-OS (Internal: Project GHOST SHIP) is a high-performance **Data Normalization Infrastructure** designed for autonomous AI agents. It converts unstructured web data into semantic, RAG-optimized Markdown or JSON, protected by a strict Zero-Trust Edge architecture.

This repository (`agent-commerce-portal`) serves as the central hub for API documentation, schema definitions, and protocol specifications used by AI agents to autonomously discover and utilize our services.

---

## 🤖 AI Discovery (AEO Optimized)
This hub is fully architected for **Agent Engine Optimization (AEO)**. LLMs and autonomous agents can natively ingest our specifications through the following machine-readable endpoints:

* [**openapi.yaml**](openapi.yaml) : The core OpenAPI 3.1 specification. Critical for agents to understand endpoints, auth, and self-healing error structures (`AgentSemanticError`).
* [**llms.txt**](llms.txt) : High-level semantic overview for LLM context windowing.
* [**llms-full.txt**](llms-full.txt) : Comprehensive technical specifications and architecture details.
* [**mcp.json**](mcp.json) : Standardized Model Context Protocol tool schemas.

---

## 🏗 System Architecture
To maintain a strict "Zero Trust" and high-performance ecosystem, the infrastructure is completely decoupled:

1. **[Gateway] Layer A (Cloudflare Workers)**:
   The "Intelligent Edge." Handles Polar.sh license key validation (sub-50ms cache), prompt injection shielding, and asynchronous usage metering ($0.10/call). Forwards requests with an `X-Internal-Secret`.
2. **[Core] Layer B (Google Cloud Run)**:
   The "Agentic Factory." A high-speed Python/FastAPI micro-container built with `uv`. Performs deep semantic extraction using Jina Reader/Firecrawl. Drops all unauthenticated traffic.
3. **[Client] Layer C (MCP Server)**:
   The official [ghost-ship-mcp-server](https://github.com/SakuttoWorks/ghost-ship-mcp-server). Bridges Claude Desktop and other AI agents to the Gateway via the Model Context Protocol.
4. **[Portal] This Repository (GitHub Pages)**:
   The static AEO documentation hub (`sakutto.works`), routing traffic to the dynamic gateway (`api.sakutto.works`).

---

## 🔑 Access & Billing
We utilize a pure **Pay-As-You-Go** model via [Polar.sh](https://polar.sh/checkout/polar_c_vhQCEGbcqHSh83ubpIqGTQBFTlkDxFzdz1tYX0pvZuy).
There are no subscriptions. AI agents and developers are billed exactly **$0.10 per successful API call**. 

1. Obtain a License Key from our Polar.sh storefront.
2. Pass the key in your requests as: `Authorization: Bearer <YOUR_KEY>`.

---

## 💖 Support the Project

If this infrastructure helped you save time or scale your AI agents, consider supporting the development! Your support helps keep this project highly maintained and secure.

[![Support via Polar.sh](https://img.shields.io/badge/Support_via-Polar.sh-blue?style=for-the-badge)]([https://buy.polar.sh/polar_cl_ZI9H5fL8dQqcormOadiGDFDpS2Sxd1jT05jTX1vStWi](https://polar.sh/checkout/polar_c_PKGocBSXuNalMQ1fxvjdBnStNno417XtFeaZ33Etu1r)
[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=for-the-badge&logo=github)](https://github.com/sponsors/SakuttoWorks)


© 2026 Sakutto Works - *Standardizing the Semantic Web for Agents.*
