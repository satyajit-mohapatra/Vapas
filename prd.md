PRD: "Vāpas" – The US-to-India Relocation Intelligence Platform

Version: 1.0

Status: Draft

Target Platform: Web (GitHub Pages Deployment)

Primary Goal: To provide a data-driven toolkit for NRIs moving from the US to India in 2025-2026.

1. Executive Summary

"Vāpas" (Sanskrit for Return) is a client-side web application designed to help NRI families navigate the fiscal, legal, and lifestyle complexities of moving back to India. The app transforms a 20-page research document into an interactive suite of calculators and logic-driven advisory modules.

2. Target Audience

The "L1/H1B" Careerist: Professionals with 5-10 years of US experience.

The "Long-Term Resident" (LTR): Green Card holders nearing or exceeding the 8-year mark.

The Global Family: Parents managing children's education (IB/CBSE) and cross-border assets (401k/Real Estate).

3. Product Features & User Stories

Module A: The Exit & Residency Analyzer (Fiscal Logic)

User Story: As a Green Card holder, I want to know if I am a "Covered Expatriate" so I can avoid the IRS Exit Tax.

Functionality:

Input: Status (GC/H1B/Citizen), Years in US, Global Net Worth.

Logic: Applies the "8-year rule" and "$2M Net Worth" tests.

Output: Risk score (Low/Medium/High) and specific form requirements (Form 8854).

Module B: The 401(k) & Asset Simulator

User Story: As a retiree, I want to decide whether to withdraw my 401(k) now or defer it via Section 89A.

Functionality:

Input: Current balance, Age, Strategy selection (Lump Sum, Annuity, Defer).

Logic: Calculates 30% WHT + 10% penalty for early withdrawal; explains Form 10-EE benefits for deferral.

Output: Net retention value and a "Compliance Checklist" (Schedule FA, Section 89A).

Module C: Lifestyle Parity & PPP Calculator

User Story: As a breadwinner, I want to know what salary I need in Bangalore to match my $200k San Francisco lifestyle.

Functionality:

Input: Current US Monthly Expenses, Target City (Bangalore, Gurgaon, Hyderabad, Pune).

Logic: Uses city-specific multipliers for Rent, Education (IB fees), and Staff (Cook/Maid/Driver).

Output: Total monthly INR requirement vs. USD equivalent.

Module D: The Educational Pathway Picker

User Story: As a parent, I want to choose the right school board so my kids can return to the US for college if they wish.

Functionality:

Input: Child's age, Career goals (Global vs. Indian STEM).

Logic: Compares IB, IGCSE, and CBSE based on transition ease and cost.

Output: Recommended board and estimated annual tuition.

4. Technical Constraints & Architecture

Architecture: Single Page Application (SPA).

Deployment: GitHub Pages (Static hosting).

Data Persistence: No backend required for v1. In-memory state only (privacy-first approach for sensitive financial data).

Stack Suggestion: React with Tailwind CSS for high-quality, mobile-first UI.

Assets: Inline SVGs for city comparisons; Lucide-react icons for tool navigation.

5. UI/UX Requirements

Mobile-First: Most NRIs will research this on mobile/tablets.

The "Wizard" UI: Instead of a long form, use a multi-step "Move Wizard" that collects data incrementally.

Privacy Disclaimer: A prominent banner stating: "No data is stored on our servers. All calculations happen locally in your browser."

Visual Priority: Use clean, professional typography (Noto Sans) to match the "Strategic Blueprint" feel.

6. Success Metrics

Completion Rate: Users who finish all modules of the Relocation Wizard.

Engagement: Average time spent on the "Asset Repatriation" simulator.

Social Proof: Sharing of the "Lifestyle Parity" result card.

7. Roadmap (Post-v1)

v1.1: Add "GIFT City" investment vehicle recommendations.

v1.2: Integrate a "Packing List" generator based on TR (Transfer of Residence) rules.

v2.0: Cloud save feature (Firestore) and a curated directory of tax consultants.