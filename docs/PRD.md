# Mak Toys — Product Requirements Document

---

## SECTION 1 — Project Identity

| Field | Value |
|---|---|
| Project Name | Mak Toys (ألعاب ماك) |
| Project ID | PRD-001 |
| Version | v1.0 |
| Status | Active Draft |
| Priority | High |
| Created Date | 2026-10-15 |
| Last Updated | 2026-10-15 |
| Location | Alexandria, Egypt (الإسكندرية، مصر) |
| Founders & Team | Marwa Kandil (01154540005); Eslam Arafa (01001224375); Ali Kohla (01060264868) |
| Tech Stack | React + Vite + TypeScript + Tailwind CSS |
| Repository | [TBD] |
| Git Branch Prefix | NNN-feature-name |
| PRD File Path | docs/PRD.md |

---

## SECTION 2 — Problem & Purpose

### Problem Statement
The Egyptian toy market lacks locally made toys that combine good quality with a fair price. Available options fall into three groups: imported toys that are cheap and of poor quality, imported toys that depict cultures different from the Egyptian and Arab culture, and high-quality toys sold at prices that are not suitable for the local market. No toy line teaches life skills through Egyptian and Arab culture, and no brand offers a design that is close to Egyptian and Arab families while presenting an idea that differs from Western toy concepts.

### Project Purpose
Mak Toys is an Egyptian fabric toy brand handcrafted in Alexandria, Egypt. Its purpose is to launch a first collection of fabric toys that entertain and teach life skills through Egyptian and Arab culture, at high quality and a fair local price.

### Business Value
- Builds a distinct brand position: local culture, life-skills learning, and quality at a fair price.
- Generates revenue from two channels: direct online sales to families and orders from businesses (shops, schools, libraries, companies).
- Creates a corporate channel through branded custom toys (logo or name) for promotion.

### Opportunity
Parents, teenagers, young adults, and businesses currently have no strong local fabric toy brand to choose from. The owner has direct exposure to the problem as a member of the community and as a business owner with an existing client base, which provides a first group of business customers for the launch.

---

## SECTION 3 — Goals & Objectives

### Primary Goal
Launch the first MOK TOYS collection of Egyptian fabric toys (one educational toy and one character toy), at high quality and a fair price, and sell it to families and businesses before 2026-12-31.

### Objectives
1. Deliver one educational fabric toy that teaches a life skill through Egyptian and Arab culture.
2. Deliver one character fabric toy with a design close to Egyptian and Arab families.
3. Provide all customer-facing content (catalog page, product information, activity guide, video captions) in Arabic and English with a single-click language switch.
4. Open two sales channels at launch: social media sales pages with WhatsApp ordering, and wholesale ordering for shops, schools, and libraries.
5. Offer custom branded (logo or name) orders for companies as an added service.

### Success Definition
The project succeeds when the first collection passes quality and safety validation, the public launch occurs by 2026-12-20, at least 80% of the first production batch is sold within 30 days of launch, and at least 5 business customers place orders within 60 days of launch.

### Non-Goals
- Building a full online store in v1.
- Exporting products outside Egypt in v1.
- Building a mobile application or digital product in v1.

---

## SECTION 4 — Scope

### In Scope
- One educational life-skills fabric toy with Egyptian/Arab design.
- One character fabric toy with a design close to Egyptian and Arab families.
- Child-safe, durable, washable, and environmentally responsible materials.
- Distinctive Arabic packaging with bilingual (Arabic and English) product information.
- Bilingual (Arabic/English) catalog page with a one-click language switch.
- Social media sales pages and order intake through WhatsApp.
- Wholesale quotes and orders for shops, schools, and libraries.
- Activity guide for parent and child, and an educational video.
- Custom branded orders (logo or name) for companies.

### Out of Scope
- Full online store with cart and checkout.
- Export and international shipping.
- Mobile application and digital product.
- Additional age-level product lines (youth and adult) in v1, unless delivered under Could Have after P0 and P1 are complete.

### Assumptions
- The first collection is a limited production batch; batch size is [TBD] and is set at the PRD approval gate.
- Sales operate locally within Egypt only.
- Customers order through social media pages and WhatsApp; no customer accounts are required.
- Existing business clients of the owner form the first wholesale and custom-order audience.
- Initial numeric targets in this document are set at PRD creation and are validated at the PRD approval gate.

### Constraints
- Launch date is limited to the 2026 calendar year; public launch target is 2026-12-20.
- Production is limited to a small first batch.
- No custom software backend in v1; digital touchpoints use existing hosted tools [TBD].
- Materials must meet child-safety requirements applicable in Egypt [TBD: confirm governing standard].

### Dependencies
- Fabric, stuffing, and packaging suppliers [TBD].
- Sewing and production workshop [TBD].
- Printing vendor for packaging and activity guide [TBD].
- WhatsApp Business account and social media accounts [TBD].
- Courier or delivery partner [TBD].
- Video production resources for the educational video [TBD].

---

## SECTION 5 — Users & Personas

### Primary Users
Parents and teenagers who purchase toys online through social media and search for a high-quality, fairly priced Egyptian toy.

### Secondary Users
- Young adults purchasing for themselves or as gifts.
- Business buyers: shops, schools, and libraries.
- Corporate clients ordering custom branded toys for promotion.

### Persona 1 — Mona, Parent Buyer (Primary)
| Attribute | Detail |
|---|---|
| Role | Parent purchasing toys for her children through social media |
| Goal | Find a toy that teaches her child skills through Egyptian culture and withstands daily use |
| Pain Point | Imported toys are poor quality, or expensive and foreign to the family's culture |
| Tech Level | Low to Medium |
| Frequency | Purchases several times per year, with peaks around holidays and birthdays |
| Success Definition | Orders a toy through WhatsApp in under 5 minutes and the child uses the toy for months without damage |

### Persona 2 — Karim, Teen and Young Buyer (Primary)
| Attribute | Detail |
|---|---|
| Role | Teenager or young adult buying a toy for a sibling, a gift, or personal use |
| Goal | Find an original toy with a design that reflects Egyptian and Arab identity |
| Pain Point | Available toys copy foreign characters and do not represent the buyer's culture |
| Tech Level | Medium to High |
| Frequency | Purchases occasionally, mainly for gifts and occasions |
| Success Definition | Finds the catalog in his preferred language and completes an order in a single WhatsApp conversation |

### Persona 3 — Hassan, Business Buyer (Secondary)
| Attribute | Detail |
|---|---|
| Role | Owner or buyer at a shop, school, or library |
| Goal | Stock a local, high-quality toy line at a wholesale price |
| Pain Point | Local supply with consistent quality and pricing is unavailable |
| Tech Level | Low to Medium |
| Frequency | Orders in bulk monthly or per season |
| Success Definition | Receives a written quote within 24 hours and receives the full order on the agreed date |

### Persona 4 — Nadine, Corporate Client (Secondary)
| Attribute | Detail |
|---|---|
| Role | Marketing or procurement contact at a company |
| Goal | Order toys carrying the company logo or name for promotion and gifts |
| Pain Point | Branded promotional items are generic and do not carry cultural value |
| Tech Level | Medium |
| Frequency | Orders per campaign or occasion |
| Success Definition | Approves a mock-up of the branded toy and receives the order in the agreed quality and quantity |

---

## SECTION 6 — MoSCoW Feature Prioritization

### Must Have — P0

| ID | Feature | Status | Description | Assigned To | Sprint |
|---|---|---|---|---|---|
| P0-F001 | Bilingual Arabic/English Switch (Top Priority) | TODO | One-click language switch converting all customer-facing digital content between Arabic and English | Owner / Social Media and Sales Lead | S3 |
| P0-F002 | Educational Life-Skills Fabric Toy | TODO | Fabric toy teaching a life skill through Egyptian/Arab culture, with Egyptian/Arab design | Product Designer | S1 |
| P0-F003 | Character Fabric Toy | TODO | Fabric character toy with a design close to Egyptian and Arab families | Product Designer | S1 |
| P0-F004 | Safe, Durable, Washable Materials | TODO | Child-safe materials that withstand heavy use and washing | Production Lead / Quality Controller | S2 |
| P0-F005 | Distinctive Arabic Packaging with Bilingual Product Information | TODO | Distinctive packaging with product information in Arabic and English | Product Designer | S3 |
| P0-F006 | Social Media Sales Pages and WhatsApp Ordering | TODO | Sales pages on social media with order intake through WhatsApp | Social Media and Sales Lead | S3 |
| P0-F007 | Wholesale Quotes and Orders | TODO | Price quotes and bulk orders for shops, schools, and libraries | Owner | S3 |
| P0-F008 | Environmentally Responsible Product and Packaging | TODO | Materials and packaging selected to reduce environmental impact | Production Lead | S2 |

### Should Have — P1

| ID | Feature | Status | Description | Assigned To | Sprint |
|---|---|---|---|---|---|
| P1-F001 | Activity Guide and Educational Video | TODO | Activity guide for parent and child included with each toy, plus an educational video | Product Designer / Owner | S3 |
| P1-F002 | Custom Branded Corporate Orders (Important) | TODO | Custom orders carrying the client's logo or name | Owner | S4 |

### Could Have — P2

| ID | Feature | Status | Description | Assigned To | Sprint |
|---|---|---|---|---|---|
| P2-F001 | Additional Age Levels | TODO | Toy levels for youth and adults | Product Designer | Post-launch |
| P2-F002 | Limited Occasion Editions | TODO | Limited editions released for occasions | Product Designer | Post-launch |

### Won't Have — P3

| ID | Feature | Status | Description | Assigned To | Sprint |
|---|---|---|---|---|---|
| P3-F001 | Mobile Application | TODO | Mobile application and digital product; deferred to v2 | Owner | v2 |
| P3-F002 | Export | TODO | Sales outside Egypt; deferred to v2 | Owner | v2 |
| P3-F003 | Full Online Store | TODO | Store with cart and checkout; deferred to v2 | Owner | v2 |

---

## SECTION 7 — Functional Requirements

### P0-F001 — Bilingual Arabic/English Switch
### P0-F002 — Educational Life-Skills Fabric Toy
### P0-F003 — Character Fabric Toy
### P0-F004 — Safe, Durable, Washable Materials
### P0-F005 — Distinctive Arabic Packaging with Bilingual Product Information
### P0-F006 — Social Media Sales Pages and WhatsApp Ordering
### P0-F007 — Wholesale Quotes and Orders
### P0-F008 — Environmentally Responsible Product and Packaging
### P1-F001 — Activity Guide and Educational Video
### P1-F002 — Custom Branded Corporate Orders

---

## SECTION 8 — User Flows, Edge Cases, Digital Interface and Data Model

---

## SECTION 9 — Technical Architecture

---

## SECTION 10 — Implementation Phases

---

## SECTION 11 — User Stories and UX Rules

---

## SECTION 12 — Success Metrics and KPIs

---

## SECTION 13 — Timeline and Milestones

---

## SECTION 14 — Risk Register

---

## SECTION 15 — Stakeholders and Approvals

---

## SECTION 16 — References and Links

---

## SECTION 17 — Revision History
