# Vāpas - Global Indian Intelligence Platform

<div align="center">

![Vāpas Logo](https://img.shields.io/badge/Vāpas-Strategic_Intelligence-gradient?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMyA5IDktNyA5IDd2MTFhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iOSAyMiA5IDEyIDE1IDEyIDE1IDIyIj48L3BvbHlsaW5lPjwvc3ZnPg==)

**Strategic Mobility & Repatriation Intelligence for the Global Indian Diaspora**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Live Demo](#) • [Features](#-features) • [Getting Started](#-getting-started) • [Documentation](#-documentation)

</div>

---

## 📖 Overview

**Vāpas** (Sanskrit for "Return") is a comprehensive, data-driven web application designed to help NRI (Non-Resident Indian) families navigate the complex fiscal, legal, and lifestyle aspects of relocating from the US to India in 2025-2026.

This platform transforms extensive research into an interactive suite of calculators, advisory modules, and decision-support tools—all with a privacy-first approach where calculations happen entirely in your browser.

### 🎯 Target Audience

| Persona | Description |
|---------|-------------|
| **The L1/H1B Careerist** | Professionals with 5-10 years of US experience considering return |
| **The Long-Term Resident (LTR)** | Green Card holders nearing or exceeding the 8-year mark |
| **The Global Family** | Parents managing children's education (IB/CBSE) and cross-border assets (401k/Real Estate) |

---

## ✨ Features

### 🌐 Core Modules

| Module | Description |
|--------|-------------|
| **📊 Dashboard** | Central command center with quick access to all intelligence modules and key metrics |
| **🌍 Global Migration Hub** | Explore relocation destinations with comparative analysis and geopolitical context |
| **💰 Financial Engineering** | Advanced tax optimization, 401(k) strategies, Exit Tax analysis, and RNOR planning |
| **🏠 Real Estate Matrix** | City-by-city property analysis, rental yields, and NRI investment toolkit |
| **📋 R2I Protocol** | Step-by-step return-to-India logistics, documentation, and timeline planning |
| **🏦 GIFT City** | Explore Gujarat's International Financial Services Centre for tax-efficient investments |
| **🧭 Relocation Wizard** | Interactive, step-by-step guided relocation planner |
| **🎓 Education Planning** | School board comparisons (IB/IGCSE/CBSE), city-wise school recommendations |
| **🏥 Healthcare Hub** | Medical ecosystem comparison, insurance strategies, and healthcare transition planning |
| **💼 Career Hub** | Job market analysis, salary benchmarking, and career transition guidance |
| **❓ FAQ & Resources** | Curated FAQs, helpful links, and community resources for NRIs |

### 🔧 Key Capabilities

- **Exit Tax Calculator** — Determine if you're a "Covered Expatriate" under IRS rules
- **401(k) Strategy Simulator** — Compare lump sum, annuity, and Section 89A deferral
- **Lifestyle Parity Calculator** — Find your equivalent salary in Indian cities
- **RNOR Optimization** — Maximize your tax benefits during the transition years
- **Education Pathway Picker** — Choose the right school board for your children
- **Real Estate Intelligence** — City-wise property analysis and investment insights

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/satyajit-mohapatra/Vapas.git

# Navigate to the project directory
cd Vapas

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (TypeScript compilation + Vite build) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

### 🌐 Deployment (GitHub Pages)

This project is configured for automatic deployment to GitHub Pages.

**Live Demo**: [https://satyajit-mohapatra.github.io/Vapas/](https://satyajit-mohapatra.github.io/Vapas/)

#### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Push to main branch** — The workflow triggers automatically
2. **Build** — The app is built using `npm run build`
3. **Deploy** — The `dist/` folder is deployed to GitHub Pages

#### Manual Setup (First Time)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions
4. Push your code to the `main` branch
5. The workflow will run and deploy your site

#### Local Production Preview

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI component library with latest features |
| **TypeScript 5.9** | Type-safe development |
| **Vite 7** | Next-generation frontend tooling |
| **Recharts** | Beautiful, composable data visualizations |
| **Framer Motion** | Fluid animations and transitions |
| **Lucide React** | Beautiful, consistent icon library |

---

## 📁 Project Structure

```
Vapas/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images and other assets
│   ├── components/
│   │   ├── Dashboard.tsx     # Main dashboard component
│   │   ├── Header.tsx        # Navigation header
│   │   └── modules/          # Feature modules
│   │       ├── GlobalMigrationHub.tsx
│   │       ├── FinancialEngineering.tsx
│   │       ├── RealEstateMatrix.tsx
│   │       ├── R2IProtocol.tsx
│   │       ├── GiftCity.tsx
│   │       ├── RelocationWizard.tsx
│   │       ├── EducationPlanning.tsx
│   │       ├── HealthcareHub.tsx
│   │       ├── CareerHub.tsx
│   │       └── FAQResources.tsx
│   ├── data/
│   │   ├── constants.ts      # Application constants and data
│   │   └── relocationReportData.ts
│   ├── App.tsx               # Main application component
│   ├── App.css               # Application styles
│   ├── index.css             # Global styles
│   └── main.tsx              # Application entry point
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── prd.md                    # Product Requirements Document
└── README.md                 # This file
```

---

## 📊 Module Details

### 💰 Financial Engineering Module

The Financial Engineering module provides comprehensive tax planning and wealth management tools:

- **Exit Tax Analysis**: Calculate potential exit tax liability based on your immigration status, years in the US, and global net worth
- **401(k) Strategy**: Compare withdrawal strategies with tax implications
- **RNOR Planning**: Optimize your tax status during the 2-3 year transition period
- **Remittance Calculator**: Understand FBAR, FATCA, and LRS compliance

### 🏠 Real Estate Matrix

Interactive real estate intelligence covering major Indian metros:

- **City Comparison**: Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune, Chennai
- **Property Analytics**: Price trends, rental yields, and appreciation forecasts
- **NRI Toolkit**: RERA compliance, financing options, and legal considerations

### 🎓 Education Planning

Comprehensive school board analysis and recommendations:

- **Board Comparison**: IB, IGCSE, CBSE, ICSE pros and cons
- **City-wise Recommendations**: Top schools by city with admission insights
- **Special Needs Support**: Schools with inclusive education programs
- **Transition Guidance**: Managing children's academic transition

### 🏥 Healthcare Hub

Navigate India's healthcare ecosystem:

- **Insurance Comparison**: Top health insurance providers for NRIs
- **Cost Analysis**: US vs India healthcare cost differentials
- **Provider Networks**: Hospital recommendations by city
- **Waiting Periods**: Understanding insurance waiting periods

---

## 🔒 Privacy First

**No data leaves your browser.** All calculations and simulations run entirely client-side. We don't collect, store, or transmit any of your financial information. This privacy-first approach ensures your sensitive financial data remains completely secure.

---

## 🗺️ Roadmap

### Current Version (v1.0)
- ✅ Core calculator modules
- ✅ Interactive Relocation Wizard
- ✅ City-specific real estate analysis
- ✅ Education planning tools
- ✅ Healthcare transition guidance

### Upcoming (v1.1)
- 🔜 Enhanced GIFT City investment recommendations
- 🔜 Transfer of Residence (TR) packing list generator
- 🔜 Community integration

### Future (v2.0)
- 📋 Cloud save feature (optional, encrypted)
- 📋 Curated directory of verified tax consultants
- 📋 Mobile app version

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⚠️ Disclaimer

This platform provides **educational information only**. The content is not intended to constitute legal, financial, or tax advice. Please consult with qualified professionals (tax attorneys, CPAs, financial advisors) for specific guidance tailored to your individual circumstances.

---

## 📧 Contact

**Project Maintainer**: Satyajit Mohapatra

- GitHub: [@satyajit-mohapatra](https://github.com/satyajit-mohapatra)

---

<div align="center">

**Made with ❤️ for the Global Indian Community**

*Vāpas - Your Guide Home*

</div>
