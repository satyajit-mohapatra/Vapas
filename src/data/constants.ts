// Global Migration Destinations - Based on Research
export const MIGRATION_DESTINATIONS = {
    germany: {
        id: 'germany',
        name: 'Germany',
        flag: '🇩🇪',
        strategicRole: 'Long-term Industrial Career',
        visaVehicle: 'Opportunity Card / EU Blue Card',
        capitalBarrier: 'Salary: €48,300+',
        taxRegime: 'High / Progressive',
        citizenshipPath: '5 Years (Dual Allowed)',
        keyAdvantage: 'Strongest Economy in EU',
        primaryFriction: 'Language (German)',
        highlights: [
            'Chancenkarte (Opportunity Card) - points-based entry',
            'EU Blue Card salary threshold lowered to €48,300',
            'Dual citizenship now permitted',
            'Naturalization in 3-5 years',
        ],
        metrics: {
            incomeGrowth: '3-5%',
            qualityOfLife: 8.5,
            citizenshipEase: 'Medium-High',
        }
    },
    uae: {
        id: 'uae',
        name: 'UAE (Dubai)',
        flag: '🇦🇪',
        strategicRole: 'Wealth Accumulation',
        visaVehicle: 'Golden Visa (10-Year)',
        capitalBarrier: 'Investment: AED 2M+',
        taxRegime: '0% Income Tax',
        citizenshipPath: 'Very Difficult',
        keyAdvantage: 'Proximity to India, Tax-Free Income',
        primaryFriction: 'Heat / Lack of Citizenship',
        highlights: [
            '10-year Golden Visa decoupled from employment',
            '0% personal income tax',
            'Real estate investment route (AED 2M/$545K)',
            'Nearly 2x net take-home vs London/Toronto',
        ],
        metrics: {
            incomeGrowth: '0% Tax',
            qualityOfLife: 8.0,
            citizenshipEase: 'Very Low',
        }
    },
    malta: {
        id: 'malta',
        name: 'Malta',
        flag: '🇲🇹',
        strategicRole: 'EU Market Access / Backup Residency',
        visaVehicle: 'MPRP (Permanent Residence)',
        capitalBarrier: 'Total Cost: ~€182,000',
        taxRegime: 'Territorial / High',
        citizenshipPath: '5-7 Years',
        keyAdvantage: 'Schengen Access, Fast Processing',
        primaryFriction: 'Small Economy',
        highlights: [
            'Permanent residency via investment',
            '6-8 months processing time',
            '€500K capital assets required',
            'Excellent "Plan B" residency option',
        ],
        metrics: {
            incomeGrowth: 'Variable',
            qualityOfLife: 7.5,
            citizenshipEase: 'Medium',
        }
    },
    newZealand: {
        id: 'newZealand',
        name: 'New Zealand',
        flag: '🇳🇿',
        strategicRole: 'Lifestyle & Safety',
        visaVehicle: 'Accredited Employer Work Visa',
        capitalBarrier: 'Job Offer (Market Rate)',
        taxRegime: 'Moderate',
        citizenshipPath: '5 Years',
        keyAdvantage: 'Quality of Life, Work-Life Balance',
        primaryFriction: 'Distance / Cost of Goods',
        highlights: [
            'IQA waived for Indian degrees',
            'Green List roles get immediate residency',
            'Low pollution, high safety',
            'Appeals to families exiting hustle culture',
        ],
        metrics: {
            incomeGrowth: '2-4%',
            qualityOfLife: 9.5,
            citizenshipEase: 'High',
        }
    },
    netherlands: {
        id: 'netherlands',
        name: 'Netherlands',
        flag: '🇳🇱',
        strategicRole: 'Corporate HQ / English Environment',
        visaVehicle: 'Highly Skilled Migrant Visa',
        capitalBarrier: 'Salary: €68,000+ (>30yo)',
        taxRegime: 'Moderate (30% Ruling available)',
        citizenshipPath: '5 Years',
        keyAdvantage: 'English Proficiency, Corporate Hub',
        primaryFriction: 'Housing Crisis',
        highlights: [
            '30% Ruling: 30% salary tax-free for 5 years',
            '2-week visa processing via sponsors',
            'Widespread English in business',
            'Strong expat infrastructure',
        ],
        metrics: {
            incomeGrowth: '4-6%',
            qualityOfLife: 8.5,
            citizenshipEase: 'Medium-High',
        }
    }
};

// OBBBA Remittance Tax (2026)
export const OBBBA_TAX_INFO = {
    rate: 0.01, // 1%
    effectiveDate: '2026-01-01',
    exemptMethods: [
        'Bank wire transfers from BSA-regulated institutions',
        'Debit/Credit card funded transfers',
        'ACH transfers from US bank accounts',
    ],
    nonExemptMethods: [
        'Cash transfers',
        'Money orders',
        'Cashier\'s checks',
        'Non-bank remittance agents',
    ],
    defenseStrategies: [
        'Migrate to digital, bank-integrated platforms (Wise, Remitly)',
        'Execute large transfers before Jan 1, 2026',
        'Use US credit card for India expenses (effectively tax-free)',
        'Utilize bank wire transfers exclusively',
    ]
};

// Tax Strategy Constants
export const TAX_CONSTANTS = {
    INDIA_FY_START_MONTH: 3, // April
    DAYS_FOR_RESIDENT_STATUS: 182,
    RNOR_YEARS_OUTSIDE_INDIA: 9,
    BLACK_MONEY_PENALTY: 1000000, // ₹10 Lakh
    FEMA_REPATRIATION_DAYS: 180,
    PRESUMPTIVE_TAX_RATE: 0.50,
    EXIT_TAX_THRESHOLD_YEARS: 8,
    EXIT_TAX_THRESHOLD_NET_WORTH: 2000000,
    SECTION_195_TDS_RATE: 0.312, // 31.2% for NRI landlords
};

// India Tax Slabs FY 2025-26
export const INDIA_TAX_SLABS = {
    newRegime: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300000, max: 700000, rate: 0.05 },
        { min: 700000, max: 1000000, rate: 0.10 },
        { min: 1000000, max: 1200000, rate: 0.15 },
        { min: 1200000, max: 1500000, rate: 0.20 },
        { min: 1500000, max: Infinity, rate: 0.30 },
    ]
};

// Real Estate Three Universes
export const REAL_ESTATE_UNIVERSES = {
    preservation: {
        name: 'Universe 1: Preservation',
        subtitle: 'The Conservative Portfolio',
        philosophy: '"Return of capital is more important than Return on capital."',
        riskProfile: 'Low',
        targetAudience: 'Risk-averse, retirees, capital protection seekers',
        assetClasses: [
            'Ready-to-move-in residential (Blue-chip locations)',
            'REITs for Grade-A commercial exposure',
        ],
        locations: ['South Mumbai', 'Lutyens Delhi', 'Sadashivnagar Bangalore'],
        yields: '2-3% rental, 4-6% appreciation',
        keyBenefit: 'REITs offer 5-6% dividend yields with liquidity',
    },
    balance: {
        name: 'Universe 2: Balance',
        subtitle: 'The Moderate Portfolio',
        philosophy: '"Calculated risk for superior risk-adjusted returns."',
        riskProfile: 'Medium',
        targetAudience: 'Mid-career professionals (35-45) with surplus liquidity',
        assetClasses: [
            'Pre-leased commercial properties',
            'Residential in infrastructure corridors',
            'SM REITs (Small & Medium REITs)',
        ],
        locations: ['Whitefield Metro extension', 'Jewar Airport corridor', 'Mopa Airport'],
        yields: '8-10% commercial yields',
        keyBenefit: 'SM REIT entry at ₹10 lakhs, democratizing commercial access',
    },
    acceleration: {
        name: 'Universe 3: Acceleration',
        subtitle: 'The Aggressive Portfolio',
        philosophy: '"Wealth creation through information arbitrage."',
        riskProfile: 'High',
        targetAudience: 'Young, wealthy, high risk capacity',
        assetClasses: [
            'Land parcels in Tier-2 cities',
            'Distressed assets (SARFAESI auctions)',
        ],
        locations: ['Coimbatore', 'Indore', 'Vizag periphery'],
        yields: '15-20% IRR (7-10 year hold)',
        keyBenefit: 'Massive upside potential with boots-on-ground required',
    }
};

// R2I Seven Pillars
export const R2I_PILLARS = [
    {
        id: 1,
        name: 'RNOR Tax Shield',
        description: 'Resident But Not Ordinarily Resident status exempts foreign income for 1-3 years',
        keyAction: 'Be NRI in 9/10 preceding years to qualify',
        benefit: 'Foreign income (dividends, rent, capital gains) tax-free in India',
        urgency: 'Critical',
    },
    {
        id: 2,
        name: 'RFC Account',
        description: 'Resident Foreign Currency account to hold USD/GBP/EUR',
        keyAction: 'Open RFC account, do NOT convert all dollars to rupees',
        benefit: 'Funds fully repatriable, bypasses $250K LRS limit, interest tax-free during RNOR',
        urgency: 'High',
    },
    {
        id: 3,
        name: 'FEMA Redesignation',
        description: 'Convert NRE/NRO accounts to Resident accounts',
        keyAction: 'Inform bank within 30-60 days of becoming resident',
        benefit: 'Avoids FEMA violation, preserves account history',
        urgency: 'Mandatory',
    },
    {
        id: 4,
        name: 'Healthcare Continuity',
        description: 'Pre-buy Indian health insurance 3 years before return',
        keyAction: 'Maintain policy while abroad to exhaust waiting periods',
        benefit: 'Full coverage from Day 1 (PED waiting periods exhausted)',
        urgency: 'Medium',
    },
    {
        id: 5,
        name: 'Social Security & 401k',
        description: 'Preserve US Social Security credits, plan 401k strategy',
        keyAction: 'Ensure 40 credits (10 years) for SS eligibility',
        benefit: 'SS payments receivable in India, tax-efficient 401k withdrawal',
        urgency: 'High',
    },
    {
        id: 6,
        name: 'Physical Asset Liquidation',
        description: 'Strategic timing for selling US property',
        keyAction: 'Consider renting US house initially (trial period)',
        benefit: 'Rental income tax-free during RNOR, option to return',
        urgency: 'Medium',
    },
    {
        id: 7,
        name: 'Admin Cleanup',
        description: 'PAN, Aadhaar, KYC updates',
        keyAction: 'Update PAN to Resident, obtain/update Aadhaar, link both',
        benefit: 'Avoids inoperative accounts, enables full investment access',
        urgency: 'Mandatory',
    }
];

// GIFT City Benefits
export const GIFT_CITY = {
    name: 'GIFT City IFSC',
    location: 'Gujarat International Finance Tec-City',
    regulator: 'IFSCA (not RBI/SEBI)',
    keyBenefits: [
        'Dollar-denominated investments (INR hedge)',
        '100% tax exemption on income for 10 years',
        'Capital gains exemption for Category III AIFs',
    ],
    investmentVehicles: [
        {
            name: 'GIFT City AIFs',
            description: 'Pool money from NRIs for Indian startups/markets',
            taxBenefit: 'Capital gains exempt for specified securities',
        },
        {
            name: 'Family Investment Funds (FIF)',
            description: 'For ultra-HNIs (corpus >$10M)',
            taxBenefit: 'Bypasses LRS limits, global diversification',
        },
        {
            name: 'IBU Deposits',
            description: 'Foreign currency deposits in IFSC Banking Units',
            taxBenefit: '100% interest tax-free in India',
        }
    ]
};

// City Data for Lifestyle Calculator
export const CITY_DATA = {
    bangalore: {
        id: 'bangalore',
        name: 'Bangalore',
        rentMultiplier: 0.25,
        groceriesMultiplier: 0.40,
        educationMultiplier: 0.60,
        staffCost: 850,
        traffic: 'Severe',
        weather: 'Moderate',
        aqi: 'Moderate',
        techHub: 5,
        rent4BHK: '₹1.5-3.0L/mo',
    },
    gurgaon: {
        id: 'gurgaon',
        name: 'Gurgaon',
        rentMultiplier: 0.40,
        groceriesMultiplier: 0.40,
        educationMultiplier: 0.60,
        staffCost: 1100,
        traffic: 'Manageable',
        weather: 'Extreme',
        aqi: 'Severe',
        techHub: 4,
        rent4BHK: '₹2.5-5.5L/mo',
    },
    mumbai: {
        id: 'mumbai',
        name: 'Mumbai',
        rentMultiplier: 0.55,
        groceriesMultiplier: 0.45,
        educationMultiplier: 0.70,
        staffCost: 1200,
        traffic: 'Intense',
        weather: 'Humid',
        aqi: 'Poor',
        techHub: 4,
        rent4BHK: '₹3.5-8.0L/mo',
    },
    hyderabad: {
        id: 'hyderabad',
        name: 'Hyderabad',
        rentMultiplier: 0.20,
        groceriesMultiplier: 0.35,
        educationMultiplier: 0.50,
        staffCost: 800,
        traffic: 'Developing',
        weather: 'Hot Summer',
        aqi: 'Moderate',
        techHub: 4,
        rent4BHK: '₹1.0-2.5L/mo',
    },
    pune: {
        id: 'pune',
        name: 'Pune',
        rentMultiplier: 0.18,
        groceriesMultiplier: 0.35,
        educationMultiplier: 0.45,
        staffCost: 750,
        traffic: 'Moderate',
        weather: 'Pleasant',
        aqi: 'Low',
        techHub: 4,
        rent4BHK: '₹1.0-2.0L/mo',
    },
    chennai: {
        id: 'chennai',
        name: 'Chennai',
        rentMultiplier: 0.22,
        groceriesMultiplier: 0.38,
        educationMultiplier: 0.55,
        staffCost: 820,
        traffic: 'Moderate',
        weather: 'Hot/Humid',
        aqi: 'Moderate',
        techHub: 3,
        rent4BHK: '₹1.2-2.5L/mo',
    }
};

// Schools Data
// 401(k) Strategy Matrix (from research Section 4)
export const RETIREMENT_STRATEGY_MATRIX = [
    {
        strategy: 'Full Withdrawal (Pre-59½)',
        usTaxImpact: '30% Tax + 10% Penalty',
        indiaTaxImpact: '0% (if during RNOR)',
        netImpact: '~60% Retention',
        recommendation: 'High erosion, but funds are in India immediately',
        riskLevel: 'High',
        bestFor: 'Those who need immediate liquidity'
    },
    {
        strategy: 'Hold & Defer (File 10-EE)',
        usTaxImpact: '0% (until withdrawal)',
        indiaTaxImpact: '0% (deferred via Section 89A)',
        netImpact: 'Tax-Deferred Growth',
        recommendation: 'Best for long-term wealth building',
        riskLevel: 'Low',
        bestFor: 'Those planning to retire in India'
    },
    {
        strategy: 'Roth Conversion (Transition Year)',
        usTaxImpact: 'Taxed at lower slab in low-income year',
        indiaTaxImpact: 'Grey Area - India may tax corpus',
        netImpact: 'High Risk/Reward',
        recommendation: 'Good if India clarifies Roth rules',
        riskLevel: 'High',
        bestFor: 'Those in a low-income transition year'
    },
    {
        strategy: 'Annuity Stream (Article 20)',
        usTaxImpact: '0% (Treaty Benefit)',
        indiaTaxImpact: 'Taxed at slab rates (up to 30-39%)',
        netImpact: 'Efficient',
        recommendation: 'Avoids US tax; pays Indian rates',
        riskLevel: 'Medium',
        bestFor: 'Those who can structure periodic payments'
    }
];

// Exit Tax Logic (from research Section 3)
export const EXIT_TAX_LOGIC = {
    longTermResidentYears: 8,
    netWorthThreshold: 2000000, // $2M
    taxLiabilityThreshold: 201000, // $201K (2024, indexed annually)
    exclusionAmount: 866000, // $866K (2024, indexed for inflation)
    coveredExpatriateTests: [
        {
            name: 'Net Worth Test',
            description: 'Global net worth is $2 million or more on date of expatriation',
            includes: ['US 401(k)', 'US House', 'Indian House', 'Indian Mutual Funds', 'Jewelry', 'Bank Accounts']
        },
        {
            name: 'Tax Liability Test',
            description: 'Average annual net US income tax liability for 5 preceding years exceeds $201,000',
            threshold: '$201,000 (2024)'
        },
        {
            name: 'Certification Test',
            description: 'Failure to certify on Form 8854 that you have complied with all US federal tax obligations',
            warning: 'Even if you are poor, failing to file this form makes you a Covered Expatriate automatically'
        }
    ],
    strategicAvoidance: [
        { action: 'Exit Early', description: 'If at year 6 or 7, surrender Green Card immediately to prevent LTR status' },
        { action: 'Asset Gifting', description: 'Gift assets to US-citizen spouse or non-resident spouse to lower net worth below $2M' },
        { action: 'Treaty Election', description: 'Elect to be treated as resident of India under treaty to break residency streak' }
    ]
};

// 2024/2025 Treaty Shock (from research Section 2.2)
export const TREATY_SHOCK_2025 = {
    title: 'The 2024/2025 Treaty Shock',
    summary: 'US Treasury has disrupted the RNOR tax arbitrage',
    details: [
        'Until 2024, returning Indians enjoyed unique arbitrage: India didn\'t tax US income (RNOR rules), and US applied reduced withholding (15-25%)',
        'US Treasury now clarifies: if not "liable to tax" on worldwide income in India, cannot claim treaty benefits',
        'Since RNORs are not taxed on foreign income, US may no longer consider them "residents" of India for treaty purposes'
    ],
    implications: [
        { impact: 'High', description: 'US-sourced income may face flat 30% NRA withholding without treaty protection' },
        { impact: 'Medium', description: 'RNOR period risks becoming a "high-tax" window (30% to US) without ability to offset' },
        { impact: 'Critical', description: 'The era of "easy" tax arbitrage via RNOR is ending' }
    ]
};

// Healthcare Insurance Data (from research Section 9)
export const HEALTHCARE_DATA = {
    pedWaitingPeriod: {
        standard: '2-4 years',
        withBuyback: '1 year or Day 1 (extra premium)',
        providers: ['Niva Bupa', 'HDFC Ergo', 'Star Health', 'ICICI Lombard']
    },
    recommendedCoverage: {
        sumInsured: '₹50 Lakhs - ₹1 Crore',
        type: 'Family Floater',
        reason: 'Cost of tertiary care in private hospitals (Apollo, Fortis, Max)'
    },
    premiumCost: {
        coverage: '₹1 Crore',
        familySize: 'Family of 4 (parents ~40yo)',
        annualPremium: '₹40,000 - ₹60,000',
        monthlyEquivalent: '₹3,500 - ₹5,000'
    },
    usVsIndiaComparison: [
        { service: 'GP Visit', usa: 150, india: 10, savingsPercent: 93 },
        { service: 'Specialist Visit', usa: 250, india: 25, savingsPercent: 90 },
        { service: 'MRI Scan', usa: 1200, india: 100, savingsPercent: 92 },
        { service: 'Root Canal', usa: 1500, india: 80, savingsPercent: 95 },
        { service: 'Angioplasty', usa: 35000, india: 3500, savingsPercent: 90 },
        { service: 'Knee Replacement', usa: 50000, india: 5000, savingsPercent: 90 },
        { service: 'C-Section Delivery', usa: 25000, india: 2500, savingsPercent: 90 }
    ],
    opdNote: 'Most Indian plans cover hospitalization only. OPD costs (doctor visits, medicines) are usually out-of-pocket, unlike the US PPO/HMO model'
};

// Comprehensive Healthcare Module Data
export const HEALTHCARE_COMPREHENSIVE = {
    insuranceProviders: [
        { name: 'Star Health', claimRatio: '67%', networkHospitals: 14000, specialty: 'Best for families', premiumRange: '₹15K-₹40K' },
        { name: 'Niva Bupa', claimRatio: '69%', networkHospitals: 10000, specialty: 'PED Buyback options', premiumRange: '₹18K-₹50K' },
        { name: 'HDFC Ergo', claimRatio: '72%', networkHospitals: 12500, specialty: 'Critical illness add-ons', premiumRange: '₹16K-₹45K' },
        { name: 'ICICI Lombard', claimRatio: '70%', networkHospitals: 8000, specialty: 'OPD coverage options', premiumRange: '₹14K-₹42K' },
        { name: 'Care Health', claimRatio: '74%', networkHospitals: 13000, specialty: 'Unlimited restoration', premiumRange: '₹12K-₹38K' }
    ],
    hospitalChains: [
        {
            name: 'Apollo Hospitals',
            locations: 70,
            cities: 'Pan-India',
            specialty: 'Largest private chain, JCI accredited',
            telemedicine: 'Apollo 24/7 app',
            mentalHealth: 'Apollo Behavioral Health Hospital'
        },
        {
            name: 'Fortis Healthcare',
            locations: 45,
            cities: 'Metro focus',
            specialty: 'Cardiac, orthopedics, oncology',
            telemedicine: 'Fortis MyHealth app',
            mentalHealth: 'Mental Health & Behavioral Sciences dept'
        },
        {
            name: 'Max Healthcare',
            locations: 35,
            cities: 'North India focus',
            specialty: 'Super specialty, AI-powered monitoring',
            telemedicine: 'Max@Home platform',
            mentalHealth: 'Comprehensive psychiatry services'
        },
        {
            name: 'Manipal Hospitals',
            locations: 30,
            cities: 'South India focus',
            specialty: 'Academic medical center',
            telemedicine: 'Manipal Hospitals app',
            mentalHealth: 'Clinical psychology dept'
        },
        {
            name: 'Narayana Health',
            locations: 25,
            cities: 'Pan-India',
            specialty: 'Affordable super specialty care',
            telemedicine: 'NH Connect',
            mentalHealth: 'Multi-specialty support'
        }
    ],
    telemedicine: {
        platforms: [
            { name: 'Apollo 24/7', consultFee: '₹199-₹500', specialty: 'Full ecosystem with pharmacy' },
            { name: 'Practo', consultFee: '₹150-₹800', specialty: 'Largest doctor network' },
            { name: 'mFine', consultFee: '₹199-₹499', specialty: 'AI symptom checker' },
            { name: 'Tata 1mg', consultFee: '₹199-₹299', specialty: 'Integrated pharmacy' },
            { name: 'Lybrate', consultFee: '₹100-₹500', specialty: 'Free consultations available' }
        ],
        benefits: [
            'No waiting times for consultations',
            'Access specialists from any city',
            'Prescription delivery to doorstep',
            '24/7 availability for emergencies',
            '70-90% cheaper than US telemedicine'
        ]
    },
    mentalHealth: {
        therapyCost: {
            inPerson: '₹1,000 - ₹4,025/session',
            online: '₹800 - ₹2,875/session',
            psychiatrist: '₹1,500 - ₹4,600 (initial)',
            followUp: '₹1,000 - ₹3,450'
        },
        platforms: [
            { name: 'MindPeers', starting: '₹399/session', specialty: 'Corporate wellness' },
            { name: 'YourDOST', starting: '₹499/session', specialty: 'Anonymous counseling' },
            { name: 'Amaha', starting: '₹800/session', specialty: 'Comprehensive care plans' },
            { name: 'Wysa', starting: 'Free AI + paid therapy', specialty: 'AI-first approach' },
            { name: 'Tele-MANAS', starting: 'Free', specialty: 'Government helpline (14416)' }
        ],
        insuranceCoverage: {
            mandate: 'IRDAI 2025 mandate covers mental health under Mental Healthcare Act, 2017',
            coverage: ['Therapy sessions (CBT)', 'Psychiatric hospitalization', 'Medication', 'Outpatient counseling'],
            premium: '₹5,000-₹20,000/year for ₹5 lakh cover'
        }
    },
    preReturnChecklist: [
        { item: 'Buy Indian health insurance 3 years before return', reason: 'Exhaust PED waiting periods' },
        { item: 'Get full medical checkup before leaving US', reason: 'Document baseline health' },
        { item: 'Request medical records from US providers', reason: 'Continuity of care' },
        { item: 'Stock up on prescription medications (3 months)', reason: 'Brand availability differs' },
        { item: 'Research hospitals near planned residence', reason: 'Emergency preparedness' },
        { item: 'Download telemedicine apps', reason: 'Quick access to doctors' }
    ]
};

// Comprehensive Career & Employment Module Data
export const CAREER_COMPREHENSIVE = {
    jobMarket2025: {
        growthRate: '9% overall hiring growth',
        hotSectors: [
            { sector: 'IT & Software', growth: '15%', demand: 'Very High', nriAdvantage: 'Global tech experience valued' },
            { sector: 'FinTech', growth: '18%', demand: 'Very High', nriAdvantage: 'US fintech experience premium' },
            { sector: 'Healthcare/MedTech', growth: '14%', demand: 'High', nriAdvantage: 'FDA/regulatory knowledge' },
            { sector: 'Renewable Energy', growth: '20%', demand: 'High', nriAdvantage: 'Sustainability expertise' },
            { sector: 'BFSI', growth: '10%', demand: 'High', nriAdvantage: 'Risk management skills' },
            { sector: 'Manufacturing', growth: '12%', demand: 'Medium-High', nriAdvantage: 'Supply chain expertise' },
            { sector: 'E-commerce', growth: '16%', demand: 'High', nriAdvantage: 'D2C experience valued' }
        ]
    },
    ctcBreakdown: {
        explanation: 'Indian CTC (Cost To Company) is not the same as US base salary. Only ~60% is fixed take-home.',
        components: [
            { component: 'Basic Salary', percent: '40-50%', taxable: true, notes: 'Base for PF, gratuity calculations' },
            { component: 'HRA (House Rent Allowance)', percent: '15-20%', taxable: 'Partially', notes: 'Tax-exempt if renting' },
            { component: 'Special Allowance', percent: '10-15%', taxable: true, notes: 'Catch-all component' },
            { component: 'Variable Pay/Bonus', percent: '10-20%', taxable: true, notes: 'Performance-linked, not guaranteed' },
            { component: 'PF (Provident Fund)', percent: '12%', taxable: 'Deferred', notes: 'Employer matches employee contribution' },
            { component: 'Gratuity', percent: '4-5%', taxable: 'On withdrawal', notes: 'After 5 years of service' },
            { component: 'Perks', percent: 'Variable', taxable: 'Varies', notes: 'Car, phone, medical, food coupons' }
        ]
    },
    salaryPremium: {
        years8to12: '25-40% premium over local candidates',
        years5to8: '20-35% premium over local candidates',
        under5years: '10-20% premium depending on skills',
        note: 'Premium applies mainly in tech and financial services'
    },
    negotiationTips: [
        { tip: 'Understand CTC vs Take-Home', detail: 'Ask for in-hand salary breakdown, not just CTC' },
        { tip: 'Benchmark using Indian platforms', detail: 'Use Glassdoor, AmbitionBox, Levels.fyi for India' },
        { tip: 'Negotiate beyond base', detail: 'Relocation package, signing bonus, RSUs, flexible work' },
        { tip: 'Get multiple offers', detail: 'Competing offers provide leverage' },
        { tip: 'Highlight cross-cultural skills', detail: 'Global compliance, international best practices' },
        { tip: '10% room for negotiation', detail: 'Most companies have flexibility in salary components' }
    ],
    challenges: [
        { challenge: 'Salary Mismatch', detail: 'Expect 30-50% lower in absolute USD terms', mitigation: 'Focus on lifestyle quality, not absolute numbers' },
        { challenge: 'Hiring Freezes', detail: 'Tech sector especially affected', mitigation: 'Target GCCs and consulting firms' },
        { challenge: 'Lack of Local Network', detail: 'Referrals are key in India', mitigation: 'Start networking 6-9 months before return' },
        { challenge: '"Flight Risk" Perception', detail: 'Interviewers worry you\'ll leave again', mitigation: 'Emphasize long-term commitment reasons' },
        { challenge: 'Resume Format', detail: 'US resume style differs from Indian', mitigation: 'Adapt CV to Indian market standards' },
        { challenge: 'Ageism in IT', detail: 'Older professionals face bias', mitigation: 'Position as leader/mentor, not individual contributor' }
    ],
    gccOpportunity: {
        description: 'Global Capability Centers (GCCs) offer best of both worlds',
        benefits: [
            'Work for global company with India-based role',
            'Often maintain US-style work culture',
            'Easier internal transfer if current company has GCC',
            'Higher salaries than pure Indian companies',
            'Global career progression maintained'
        ],
        topGCCs: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'JP Morgan', 'Walmart', 'Target', 'Adobe', 'Salesforce']
    },
    networkingPlatforms: [
        { platform: 'LinkedIn', usage: 'Primary professional network in India', tip: 'Connect with India-based recruiters' },
        { platform: 'Naukri.com', usage: 'Largest job portal', tip: 'Update profile for recruiter visibility' },
        { platform: 'iimjobs', usage: 'Premium roles for experienced professionals', tip: 'Good for senior positions' },
        { platform: 'Instahyre', usage: 'AI-matched job recommendations', tip: 'Strong in tech hiring' },
        { platform: 'Cutshort', usage: 'Startup and tech focus', tip: 'Good for product roles' }
    ],
    timeline: [
        { months: '9-12 before', action: 'Start researching job market, update LinkedIn' },
        { months: '6-9 before', action: 'Activate networking, join NRI return groups' },
        { months: '3-6 before', action: 'Apply to jobs, schedule interviews (remote first)' },
        { months: '1-3 before', action: 'Finalize offers, negotiate, plan relocation' },
        { months: 'After arrival', action: 'Complete onboarding, establish local routines' }
    ]
};

// Employment Salary Benchmarks (from research Section 6)
export const SALARY_BENCHMARKS = {
    note: 'PPP vs FX: A salary of $200,000 in US equates to roughly ₹50-60 Lakhs in lifestyle purchasing power, NOT ₹1.6 Crores',
    roles: [
        {
            title: 'Senior Director (Product Management)',
            indianRange: '₹65 Lakhs - ₹1.2 Crores',
            usdEquivalent: '$78K - $144K',
            savingsImpact: 'Lower absolute savings but higher lifestyle quality'
        },
        {
            title: 'VP Engineering',
            indianRange: '₹70 Lakhs - ₹2 Crores+',
            usdEquivalent: '$84K - $240K',
            savingsImpact: 'Competitive at senior levels'
        },
        {
            title: 'Finance (PE/VC/Investment Banking)',
            indianRange: '₹3 Crores - ₹5 Crores+',
            usdEquivalent: '$360K - $600K+',
            savingsImpact: 'Partners/MDs can match or exceed US post-tax savings'
        },
        {
            title: 'Senior Software Engineer',
            indianRange: '₹35 Lakhs - ₹60 Lakhs',
            usdEquivalent: '$42K - $72K',
            savingsImpact: 'Significant lifestyle upgrade despite lower absolute salary'
        },
        {
            title: 'Staff/Principal Engineer',
            indianRange: '₹50 Lakhs - ₹1 Crore',
            usdEquivalent: '$60K - $120K',
            savingsImpact: 'Top tech talent well compensated'
        }
    ],
    transferVsNewJob: {
        internalTransfer: {
            advantage: 'Preserves unvested RSUs',
            tip: 'Ensure "transfer" is legally a termination in US and new hire in India to trigger 401(k) "separation from service" rules'
        },
        newSearch: {
            challenge: '2025 market is tough for generalists',
            hotSkills: ['AI/ML', 'Semiconductor', 'Climate Tech'],
            warning: 'Be prepared for "Overqualified" bias—recruiters may fear you\'re a flight risk'
        }
    }
};

// Relocation Budget (from research Section 10 & Appendix)
export const RELOCATION_BUDGET = {
    totalRange: { min: 45000, max: 75000, currency: 'USD' },
    items: [
        { item: 'Shipping (40ft Container)', min: 6000, max: 8500, notes: 'Door-to-door, including insurance' },
        { item: 'Airfare (Family of 4)', min: 4000, max: 6000, notes: 'One-way, premium economy/business' },
        { item: 'Temporary Housing (1 Month)', min: 1500, max: 3000, notes: 'Serviced apartment in Tier 1 city' },
        { item: 'School Admissions', min: 5000, max: 10000, notes: 'Non-refundable admission fees/donations' },
        { item: 'Car Purchase (India)', min: 25000, max: 40000, notes: 'Cars are expensive (e.g., Toyota Hyryder/Fortuner)' },
        { item: 'Brokerage/Deposit', min: 3000, max: 6000, notes: '2-10 months rent as security deposit' }
    ],
    domesticStaffCost: {
        monthly: { min: 70000, max: 90000, currency: 'INR' },
        usdEquivalent: { min: 850, max: 1100 },
        breakdown: [
            { role: 'Cook (Multi-cuisine)', cost: '₹15,000 - ₹25,000/month' },
            { role: 'Maid (Cleaning/Chopping)', cost: '₹8,000 - ₹12,000/month' },
            { role: 'Driver', cost: '₹20,000 - ₹25,000/month' },
            { role: 'Nanny', cost: '₹20,000 - ₹30,000/month' }
        ],
        insight: 'For roughly $1,000/month, you can have full staff that would cost $10,000+ in the US'
    }
};

// Transfer of Residence (TR) Rules (from research Section 10.1)
export const TRANSFER_OF_RESIDENCE_RULES = {
    eligibility: 'Must have lived abroad for at least 2 years',
    dutyFreeItems: [
        'Used personal effects',
        'Household linens',
        'Kitchenware',
        'Books',
        'Furniture'
    ],
    taxableItems: [
        { item: 'TVs', duty: '38.5%', notes: 'Even if old/used' },
        { item: 'ACs', duty: '38.5%', notes: 'Even if old/used' },
        { item: 'Refrigerators (>300L)', duty: '38.5%', notes: 'Even if old/used' },
        { item: 'Large Electronics', duty: '38.5%', notes: 'Voltage may differ (110V vs 220V)' }
    ],
    recommendation: 'Do not ship your 65-inch TV. It will likely be damaged, voltages may differ, and you will pay duty equal to the cost of a new one in India.',
    shippingCosts: [
        { container: '20ft Container', cost: '$3,000 - $5,500', holds: '1-2 bedroom apartment' },
        { container: '40ft Container', cost: '$5,000 - $8,500', holds: '3-4 bedroom house + car (though shipping cars is heavily taxed)' }
    ]
};

// Education Cost Comparison (from research Section 8)
export const EDUCATION_COSTS = {
    boards: [
        {
            name: 'IB (International Baccalaureate)',
            pedagogy: 'Inquiry-based, critical thinking. Very similar to US Common Core but more rigorous.',
            transition: 'Smoothest for US kids',
            futureGoal: 'Global Universities (US/UK)',
            costRange: '₹10L - ₹25L/year',
            recommendation: 'Best for children likely to return to US for university'
        },
        {
            name: 'IGCSE (Cambridge)',
            pedagogy: 'Content-rich, analytical, structured',
            transition: 'Smooth',
            futureGoal: 'Global or India',
            costRange: '₹5L - ₹15L/year',
            recommendation: 'Good balance of international recognition and rigor'
        },
        {
            name: 'CBSE (Central Board)',
            pedagogy: 'Rote-learning heavy, highly competitive, focused on Indian entrance exams (JEE/NEET)',
            transition: 'Difficult for US kids',
            futureGoal: 'Indian Engineering/Medical Colleges (IIT/AIIMS)',
            costRange: '₹1L - ₹3L/year',
            recommendation: 'Excellent for STEM rigor but culturally jarring for US-accustomed children'
        }
    ],
    tierCosts: [
        { tier: 'Tier 1', examples: 'American School of Bombay, British School Delhi, TISB Bangalore', range: '₹15L - ₹30L/year ($18k - $36k)' },
        { tier: 'Tier 2', examples: 'Indus, Oakridge, Pathways', range: '₹8L - ₹15L/year' }
    ],
    admissionNote: 'Highly competitive. Apply 6-9 months in advance. Many schools require entrance tests.'
};

// Asset Tax Treatment Matrix (from research Appendix)
export const ASSET_TAX_TREATMENT = [
    { asset: 'US Bank Interest', usStatus: 'Taxable (0-30% WHT)', rnorStatus: 'Tax-Free', rorStatus: 'Taxable (Slab Rate)' },
    { asset: 'US Dividends', usStatus: 'Taxable (0-30% WHT)', rnorStatus: 'Tax-Free', rorStatus: 'Taxable (Slab Rate)' },
    { asset: '401(k) Withdrawal', usStatus: 'Taxable + 10% Penalty', rnorStatus: 'Tax-Free', rorStatus: 'Taxable (Slab Rate)' },
    { asset: 'Indian Rental Income', usStatus: 'Taxable (Foreign Income)', rnorStatus: 'Taxable', rorStatus: 'Taxable' },
    { asset: 'Indian Mutual Funds', usStatus: 'PFIC (Punitive Tax)', rnorStatus: 'Taxable (LTCG/STCG)', rorStatus: 'Taxable (LTCG/STCG)' },
    { asset: 'GIFT City Investments', usStatus: 'Passive Income', rnorStatus: 'Tax Exempt/Reduced', rorStatus: 'Tax Exempt/Reduced' }
];

export const SCHOOLS_DATA = {
    bangalore: [
        {
            name: 'Indus International School',
            website: 'https://www.indusschool.com/international-school-bangalore/',
            curriculum: 'IB',
            advantage: 'Top-ranked IB school with leadership focus and strong SEN team.',
            drawback: 'Very high fees; located far from the city center (Sarjapur).',
            specialNeeds: 'Dedicated Learning Support (SEN) team, individualized education plans (IEPs), and shadow teacher support.',
        },
        {
            name: 'Bangalore International School (BIS)',
            website: 'https://bangaloreinternationalschool.org/',
            curriculum: 'IB, IGCSE',
            advantage: 'Pioneer in inclusive education; central location (Hennur).',
            drawback: 'Older campus infrastructure compared to newer schools.',
            specialNeeds: "Dedicated 'Learning Centre' providing individualized academic programs and in-house therapies.",
        },
        {
            name: 'Canadian International School',
            website: 'https://www.canadianinternationalschool.com/',
            curriculum: 'IB, IGCSE, Ontario',
            advantage: 'Highly diverse international student body and unique Ontario curriculum option.',
            drawback: 'North Bangalore location can be a commute even for locals.',
            specialNeeds: 'Strong ESL support and inclusive environment for mild to moderate learning needs.',
        }
    ],
    gurgaon: [
        {
            name: 'Pathways World School',
            website: 'https://www.pathways.in/gurgaon',
            curriculum: 'IB',
            advantage: 'Beautiful 34-acre campus; progressive teaching methodology.',
            drawback: 'Distance from central Gurgaon; premium fee structure.',
            specialNeeds: 'Additional Learning Support (ALS) department for ADHD, ADD, and learning difficulties.',
        },
        {
            name: 'Heritage International School',
            website: 'https://www.heritagexperiential.org/',
            curriculum: 'IB, IGCSE',
            advantage: 'Known for experiential learning and strong teacher training.',
            drawback: 'Highly competitive admissions; parent involvement expectations.',
            specialNeeds: 'Well-established SEN program (VCare) with specialists and counselors.',
        }
    ],
    mumbai: [
        {
            name: 'Dhirubhai Ambani International School (DAIS)',
            website: 'https://www.dais.edu.in/',
            curriculum: 'IB, IGCSE, ICSE',
            advantage: 'Consistently ranked #1; world-class facilities; strong alumni network.',
            drawback: 'Extremely difficult admissions (waiting lists across years).',
            specialNeeds: 'Student Care Services Centre with trained Para Educators and clinical psychologists.',
        },
        {
            name: 'American School of Bombay (ASB)',
            website: 'https://www.asbindia.org/',
            curriculum: 'IB, US',
            advantage: 'Gold standard for US expatriate transition; inquiry-based learning.',
            drawback: 'Highest fees in India; primary focus on transient expatriate population.',
            specialNeeds: "Comprehensive 'Special Needs Profile' mapping to US IDEA standards.",
        },
        {
            name: 'The Gateway School of Mumbai',
            website: 'https://gatewayschoolmumbai.org/',
            curriculum: 'Special Ed',
            advantage: 'Best-in-class specialized support for children with distinct learning needs.',
            drawback: 'Primarily a special school rather than a mainstream inclusive one.',
            specialNeeds: 'Focuses entirely on neurodiverse learners with personalized therapy and education.',
        }
    ],
    hyderabad: [
        {
            name: 'International School of Hyderabad (ISH)',
            website: 'https://www.ishyd.org/',
            curriculum: 'IB, IGCSE',
            advantage: 'Managed by ICRISAT; highly green campus and diverse student body.',
            drawback: 'Located within ICRISAT campus, far from areas like Hitech City.',
            specialNeeds: 'Dedicated Inclusion Team; individualized support for learning differences.',
        },
        {
            name: 'Oakridge International School',
            website: 'https://www.oakridge.edu.in/gachibowli/',
            curriculum: 'IB, CBSE',
            advantage: 'Strong technology integration and multiple campuses for convenience.',
            drawback: 'Large class sizes in certain grades.',
            specialNeeds: 'Provides IEPs and language exemptions; shadow teacher facilities available.',
        }
    ],
    pune: [
        {
            name: 'Symbiosis International School',
            website: 'https://symbiosisinternationalschool.net/',
            curriculum: 'IB',
            advantage: 'Excellent balance between academics and extracurriculars.',
            drawback: 'Strict adherence to admission timelines.',
            specialNeeds: 'Inclusive education team; one-to-one support and Play Therapy unit.',
        },
        {
            name: 'Indus International School Pune',
            website: 'https://www.indusschool.com/pune/',
            curriculum: 'IB',
            advantage: 'Leadership-focused curriculum; state-of-the-art boarding facilities.',
            drawback: 'Bhugaon location involves significant travel from city IT hubs.',
            specialNeeds: 'Inclusive Education (IE) team for remediating learners with diverse needs.',
        }
    ],
    chennai: [
        {
            name: 'American International School Chennai (AISC)',
            website: 'https://www.aischennai.org/',
            curriculum: 'IB, US',
            advantage: 'Best for children transitioning from US public schools.',
            drawback: 'Admission prioritized for Foreign Passport holders.',
            specialNeeds: 'Extensive Special Needs Profile; support for developmental challenges.',
        },
        {
            name: 'German International Academy',
            website: 'https://gis.com.de/',
            curriculum: 'IB',
            advantage: 'Unique multilingual environment; small class sizes.',
            drawback: 'Focus on German/European standards might differ from US expectations.',
            specialNeeds: 'Individual and inclusive classes for Dyslexia, ADHD, and ASD.',
        }
    ]
};
