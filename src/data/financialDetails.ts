// Detailed information for Financial Engineering sections
// This data is used by the FinancialEngineering module for expandable section details

export interface FinancialTopicDetail {
    id: string;
    name: string;
    description: string;
    icon: string;
    keyAction: string;
    importance: 'Critical' | 'High' | 'Medium';
    overview: string;
    benefits: string[];
    keyFacts: { label: string; value: string }[];
    steps?: string[];
    warnings?: string[];
    officialSources: { name: string; url: string; description: string }[];
}

// Overview Section Details
export const OVERVIEW_SECTION_DETAILS: FinancialTopicDetail[] = [
    {
        id: 'obbba',
        name: 'OBBBA Remittance Tax',
        description: '1% federal excise tax on outbound remittances from January 2026',
        icon: '💸',
        keyAction: 'Maximize exempt transfers and establish accounts before Jan 2026',
        importance: 'Critical',
        overview: 'The One Big Beautiful Bill Act (OBBBA) introduces a 1% federal excise tax on outbound remittances from the United States, effective January 1, 2026. This affects all NRIs transferring money abroad, but critical exemptions exist for certain transfer methods.',
        benefits: [
            'Understanding exemptions saves significant money on large transfers',
            'Strategic planning before Jan 2026 can avoid initial impact',
            'Business and investment transfers may qualify for exemptions',
            'Wire transfers through certain channels remain exempt'
        ],
        keyFacts: [
            { label: 'Effective Date', value: 'January 1, 2026' },
            { label: 'Tax Rate', value: '1% of transfer amount' },
            { label: 'Applies To', value: 'Outbound remittances from US' },
            { label: 'Key Exemptions', value: 'Business transactions, investments' },
            { label: 'Enforcement', value: 'Financial institutions as collectors' }
        ],
        steps: [
            'Audit your regular remittance methods and amounts',
            'Identify which transfers are taxable vs exempt',
            'Shift to exempt methods where possible',
            'Accelerate large planned transfers before Jan 2026',
            'Consult with cross-border tax specialist'
        ],
        warnings: [
            'Consumer remittances via Wise, Remitly, etc. are NOT exempt',
            'PayPal and personal wire transfers are taxable',
            'Crypto transfers may face additional scrutiny',
            'Tax applies regardless of your residency or citizenship'
        ],
        officialSources: [
            { name: 'US Congress', url: 'https://congress.gov', description: 'OBBBA bill text and amendments' },
            { name: 'Treasury Department', url: 'https://treasury.gov', description: 'Implementation guidelines' },
            { name: 'IRS', url: 'https://irs.gov', description: 'Excise tax reporting requirements' }
        ]
    },
    {
        id: 'tax-parameters',
        name: 'Key Tax Parameters 2025-26',
        description: 'Critical thresholds and deadlines for cross-border tax planning',
        icon: '📊',
        keyAction: 'Track key thresholds to avoid penalties and optimize tax position',
        importance: 'High',
        overview: 'Understanding the critical tax parameters for both India and US is essential for effective cross-border tax planning. These thresholds determine your residential status, tax obligations, and compliance requirements in both jurisdictions.',
        benefits: [
            '182-day rule determines India resident status',
            'Proper tracking prevents unexpected tax liabilities',
            'Exit tax avoidance through year count management',
            'FEMA compliance preserves investment options'
        ],
        keyFacts: [
            { label: 'India Resident Days', value: '182 days in FY' },
            { label: 'Exit Tax Threshold (Years)', value: '8 years GC holder' },
            { label: 'Net Worth Threshold', value: '$2M for covered expatriate' },
            { label: 'FEMA Repatriation', value: '30 days to notify bank' },
            { label: 'Black Money Penalty', value: '₹10 Lakh per non-disclosure' }
        ],
        steps: [
            'Maintain a travel log with entry/exit dates',
            'Calculate days in India each financial year (Apr-Mar)',
            'Track calendar years for US GC purposes (Jan-Dec)',
            'Document all foreign assets for Schedule FA compliance',
            'Set reminders for FEMA notification deadlines'
        ],
        warnings: [
            'India and US use different year definitions (FY vs CY)',
            'Partial days can count as full days depending on rules',
            'FEMA and Income Tax residency can differ',
            'Black Money Act penalties apply even if income was not taxable'
        ],
        officialSources: [
            { name: 'Income Tax India', url: 'https://incometaxindia.gov.in', description: 'Section 6 residential status' },
            { name: 'IRS', url: 'https://irs.gov', description: 'Substantial presence test' },
            { name: 'RBI', url: 'https://rbi.org.in', description: 'FEMA regulations' }
        ]
    }
];

// 401(k) Retirement Section Details
export const RETIREMENT_SECTION_DETAILS: FinancialTopicDetail[] = [
    {
        id: 'section-89a',
        name: 'Section 89A: Tax Deferral',
        description: 'Defer India tax on 401(k) until actual withdrawal',
        icon: '📋',
        keyAction: 'File Form 10-EE annually with Indian ITR',
        importance: 'Critical',
        overview: 'Section 89A of the Income Tax Act (introduced in Finance Act 2021) allows Indian residents to defer paying tax on income from foreign retirement accounts (like US 401(k) or IRA) until the year of actual withdrawal. This aligns India\'s tax timing with the US, enabling Foreign Tax Credit claims.',
        benefits: [
            'Eliminates double taxation on retirement account growth',
            'Aligns tax events between US and India for FTC',
            'Preserves retirement corpus by deferring tax',
            'Simplifies cross-border tax planning',
            'Retroactive relief available from FY 2021-22'
        ],
        keyFacts: [
            { label: 'Form Required', value: 'Form 10-EE' },
            { label: 'Filing Deadline', value: 'With ITR (filed annually)' },
            { label: 'Eligible Accounts', value: '401(k), IRA, 403(b), similar' },
            { label: 'Countries Covered', value: 'US and notified countries' },
            { label: 'Effective From', value: 'FY 2021-22 onwards' }
        ],
        steps: [
            'Register on incometax.gov.in portal',
            'Navigate to e-File > Income Tax Forms > Form 10-EE',
            'Provide details of foreign retirement accounts',
            'File Form 10-EE before or along with ITR',
            'Claim FTC using Form 67 for any US tax paid on withdrawals'
        ],
        warnings: [
            'Must file Form 10-EE every year while holding foreign retirement accounts',
            'Non-filing results in tax on accrual basis (annual gains)',
            'Form 67 (FTC claim) must be filed BEFORE ITR',
            'Section 89A rules still evolving - consult CA annually'
        ],
        officialSources: [
            { name: 'Income Tax India', url: 'https://incometaxindia.gov.in', description: 'Section 89A notification' },
            { name: 'Income Tax Portal', url: 'https://incometax.gov.in', description: 'Form 10-EE e-filing' },
            { name: 'ClearTax', url: 'https://cleartax.in/s/section-89a', description: 'Section 89A explained' }
        ]
    },
    {
        id: '401k-strategy',
        name: '401(k) Withdrawal Strategy',
        description: 'Tax-efficient withdrawal planning for returning NRIs',
        icon: '💰',
        keyAction: 'Maximize withdrawals during RNOR period',
        importance: 'High',
        overview: 'Strategic timing of 401(k) withdrawals can significantly reduce your overall tax burden. The RNOR window provides a unique opportunity where US-sourced retirement income is taxed only in the US, with no additional India tax.',
        benefits: [
            'RNOR period withdrawals = India tax-free',
            'Lower US tax brackets in early retirement years',
            'Convert Traditional to Roth at favorable rates',
            'Avoid RMD complications in India',
            'Maintain growth in remaining balance'
        ],
        keyFacts: [
            { label: 'RNOR Advantage', value: 'Foreign income tax-free in India' },
            { label: 'US Tax (NRA)', value: '30% flat or treaty rate' },
            { label: 'W-8BEN Required', value: 'Yes, for treaty benefits' },
            { label: 'Early Withdrawal', value: '10% penalty if under 59½' },
            { label: 'RMD Age', value: '73 (Secure Act 2.0)' }
        ],
        steps: [
            'File Form W-8BEN with 401(k) custodian after moving',
            'Calculate optimal withdrawal amount for each RNOR year',
            'Consider partial Roth conversion ladder',
            'Keep US bank account for receiving distributions',
            'File Form 1040NR for US tax compliance as non-resident'
        ],
        warnings: [
            '401(k) is ALWAYS subject to US tax regardless of residence',
            'Roth treatment in India is legally unclear',
            'Treaty shock may affect certain withdrawals',
            'Medicare tax may apply on accumulated amounts'
        ],
        officialSources: [
            { name: 'IRS', url: 'https://irs.gov/retirement-plans', description: '401(k) distribution rules' },
            { name: 'IRS Form W-8BEN', url: 'https://irs.gov/forms-pubs/about-form-w-8-ben', description: 'Treaty benefits claim' },
            { name: 'Bogleheads Wiki', url: 'https://bogleheads.org/wiki/401(k)', description: 'Comprehensive 401(k) guide' }
        ]
    },
    {
        id: 'asset-tax-matrix',
        name: 'Asset Tax Treatment',
        description: 'How different assets are taxed across residency statuses',
        icon: '📈',
        keyAction: 'Position assets optimally before status changes',
        importance: 'High',
        overview: 'Different asset classes receive varying tax treatment depending on your residential status (NR, RNOR, ROR) and the country of domicile. Understanding these differences is crucial for tax-efficient wealth management during transition.',
        benefits: [
            'Optimize asset location for tax efficiency',
            'Avoid PFIC nightmare for US residents',
            'Utilize RNOR window for foreign income',
            'Plan capital gains timing strategically'
        ],
        keyFacts: [
            { label: 'India MFs for US Residents', value: 'PFIC = 50%+ tax' },
            { label: 'US Stocks for RNOR', value: 'Tax-free gains in India' },
            { label: 'India Property (NRI)', value: 'India tax + FEMA rules' },
            { label: 'US Property (RNOR)', value: 'US tax only' },
            { label: 'NRE Interest', value: 'Always tax-free' }
        ],
        steps: [
            'Audit current asset portfolio by domicile',
            'Liquidate India MFs if still US tax resident',
            'Shift to direct equity or ETFs to avoid PFIC',
            'Plan property sales during optimal residency phase',
            'Rebalance portfolio before becoming ROR'
        ],
        warnings: [
            'PFIC rules apply even if account opened years ago',
            'India debt MFs now taxed at slab rate (no LTCG benefit)',
            'Crypto taxation varies wildly between jurisdictions',
            'ROR status triggers global income taxation'
        ],
        officialSources: [
            { name: 'IRS', url: 'https://irs.gov/individuals/international-taxpayers', description: 'PFIC and foreign asset reporting' },
            { name: 'ClearTax', url: 'https://cleartax.in/s/capital-gains-tax', description: 'India capital gains rules' },
            { name: 'SEBI', url: 'https://sebi.gov.in', description: 'NRI investment regulations' }
        ]
    }
];

// Exit Tax Section Details
export const EXIT_TAX_SECTION_DETAILS: FinancialTopicDetail[] = [
    {
        id: '8-year-rule',
        name: 'The 8-Year Rule',
        description: 'Critical threshold for Long-Term Resident status',
        icon: '⏱️',
        keyAction: 'Track exact GC years and plan surrender timing',
        importance: 'Critical',
        overview: 'The 8-year rule determines whether you are a "Long-Term Resident" for US expatriation purposes. Holding a Green Card for 8 or more tax years triggers Long-Term Resident status and subjects you to the Covered Expatriate tests.',
        benefits: [
            'Surrender before 8 years = automatic exit tax avoidance',
            'Clear planning window if you know your timeline',
            'Partial year still counts as full year - know the math',
            'Strategic planning can save millions in exit tax'
        ],
        keyFacts: [
            { label: 'Threshold', value: '8 tax years as GC holder' },
            { label: 'Year Counting', value: '1 day in year = full year' },
            { label: 'Exit Tax Rate', value: '23.8% on gains over $866K (2024)' },
            { label: 'Net Worth Test', value: '$2M threshold' },
            { label: 'Tax Liability Test', value: '~$201K avg tax last 5 years' }
        ],
        steps: [
            'Document your exact GC receipt date',
            'Count calendar years where you held GC for any day',
            'If approaching year 8, plan surrender in year 7',
            'File Form I-407 to formally surrender GC',
            'File Form 8854 with IRS after expatriation'
        ],
        warnings: [
            'GC received Dec 31, 2017 = Year 8 begins Jan 1, 2024',
            'Abandonment without formal surrender still triggers rules',
            'Dual-intent visa holders may have complications',
            'Consult immigration AND tax attorney together'
        ],
        officialSources: [
            { name: 'IRS', url: 'https://irs.gov/individuals/international-taxpayers/expatriation-tax', description: 'Exit tax regulations' },
            { name: 'USCIS', url: 'https://uscis.gov', description: 'Form I-407 instructions' },
            { name: 'IRS Form 8854', url: 'https://irs.gov/forms-pubs/about-form-8854', description: 'Expatriation statement' }
        ]
    },
    {
        id: 'covered-expatriate',
        name: 'Covered Expatriate Tests',
        description: 'Three tests that trigger exit tax liability',
        icon: '⚠️',
        keyAction: 'Fail all three tests to avoid exit tax',
        importance: 'Critical',
        overview: 'If you are a Long-Term Resident (8+ years), you become a "Covered Expatriate" if you fail ANY ONE of three tests: Net Worth Test ($2M+), Tax Liability Test (~$201K average), or Certification Test. Being covered expatriate means exit tax applies.',
        benefits: [
            'Understanding tests allows strategic planning',
            'Net worth can be managed through gifting/trusts',
            'Tax liability test may be manageable for some',
            'Certification provides a path even if tests fail'
        ],
        keyFacts: [
            { label: 'Net Worth Threshold', value: '$2,000,000' },
            { label: 'Tax Liability Test', value: '~$201,000 avg (2024)' },
            { label: 'Certification', value: '5-year compliance certified' },
            { label: 'Exclusion Amount', value: '$866,000 (2024)' },
            { label: 'Mark-to-Market', value: 'Deemed sale of all assets' }
        ],
        steps: [
            'Calculate current net worth including all global assets',
            'Review last 5 years of US tax returns for liability test',
            'Ensure all tax filings are complete and accurate',
            'Consider strategies to reduce net worth legally',
            'Work with qualified expatriation tax specialist'
        ],
        warnings: [
            'Net worth includes ALL global assets including India property',
            '401(k) and IRA balances count toward net worth',
            'Deferred compensation treated specially',
            'Gifts made within 10 years may be included'
        ],
        officialSources: [
            { name: 'IRS Publication 519', url: 'https://irs.gov/publications/p519', description: 'US tax guide for aliens' },
            { name: 'IRS', url: 'https://irs.gov/individuals/international-taxpayers', description: 'Expatriation provisions' },
            { name: 'Forbes', url: 'https://forbes.com/advisor', description: 'Exit tax planning articles' }
        ]
    },
    {
        id: 'treaty-shock',
        name: 'Treaty Shock 2025',
        description: 'US Treasury ruling disrupting RNOR tax arbitrage',
        icon: '🚨',
        keyAction: 'Reconsider traditional RNOR strategies',
        importance: 'Critical',
        overview: 'US Treasury\'s 2024/2025 ruling creates a "Treaty Shock" for returning NRIs. If you\'re not "liable to tax" on worldwide income in India (like during RNOR), you may not qualify for US treaty benefits. This means US-sourced income could face 30% flat withholding instead of treaty rates.',
        benefits: [
            'Understanding allows proactive planning',
            'Some income types less affected than others',
            'Workarounds exist for certain situations',
            'Early action before ROR can mitigate impact'
        ],
        keyFacts: [
            { label: 'Issue', value: 'RNOR not "liable to tax" on foreign income' },
            { label: 'Impact', value: 'May lose treaty benefits' },
            { label: 'Affected', value: 'Dividends, interest, some capital gains' },
            { label: 'NRA Rate', value: '30% flat withholding' },
            { label: 'Treaty Rate', value: '15-25% depending on type' }
        ],
        steps: [
            'Review your RNOR year income sources',
            'Identify US-sourced income streams',
            'Consult cross-border tax specialist on treaty position',
            'Consider timing changes to income receipt',
            'Document "liable to tax" argument if applicable'
        ],
        warnings: [
            'This is new and evolving - guidance may change',
            '401(k) may be particularly affected',
            'Social Security benefits may face higher withholding',
            'Each treaty article may be analyzed separately'
        ],
        officialSources: [
            { name: 'Treasury Technical Explanation', url: 'https://treasury.gov/resource-center/tax-policy/treaties', description: 'Treaty interpretation' },
            { name: 'India-US DTAA', url: 'https://incometaxindia.gov.in', description: 'Full treaty text' },
            { name: 'OECD', url: 'https://oecd.org/tax/treaties', description: 'Model treaty commentary' }
        ]
    }
];

// Cash Flow Framework Section Details
export const CASH_FLOW_SECTION_DETAILS: FinancialTopicDetail[] = [
    {
        id: 'two-country-baseline',
        name: 'Two-Country Baseline Framework',
        description: 'Split financial obligations between US and India',
        icon: '🌍',
        keyAction: 'Establish Survival + Obligation numbers before return',
        importance: 'High',
        overview: 'The Two-Country Baseline Framework addresses a common NRI failure mode: earning in dollars but spending in dollars, leaving little surplus. By establishing separate "Survival Number" (host country) and "Obligation Number" (India), you ensure systematic wealth building in both currencies.',
        benefits: [
            'Forces disciplined money management',
            'Protects against lifestyle inflation',
            'Ensures India obligations are always met',
            'Creates forced savings mechanism',
            'Reduces emotional spending decisions'
        ],
        keyFacts: [
            { label: 'Survival Number', value: 'Rent + Food + Tax + Insurance' },
            { label: 'Obligation Number', value: 'Parents + EMI + SIP' },
            { label: 'When to Transfer', value: 'Immediately on salary credit' },
            { label: 'Host Emergency', value: '3 months in host currency' },
            { label: 'India Emergency', value: '₹5-10 Lakhs in NRO' }
        ],
        steps: [
            'Calculate minimum monthly expenses in host country',
            'List non-negotiable India obligations',
            'Set up auto-transfer on salary credit day',
            'Never touch Obligation Number for host expenses',
            'Review and adjust annually'
        ],
        warnings: [
            'Don\'t wait for month-end to transfer - lifestyle creep happens',
            'Emergency funds are separate from obligations',
            'Exchange rate timing is less important than consistency',
            'Lifestyle upgrades come from surplus only, not baseline'
        ],
        officialSources: [
            { name: 'Wise', url: 'https://wise.com', description: 'Automated recurring transfers' },
            { name: 'HDFC SmartSave', url: 'https://hdfcbank.com/nri', description: 'NRI salary accounts' },
            { name: 'Remitly', url: 'https://remitly.com', description: 'Scheduled remittances' }
        ]
    },
    {
        id: 'emergency-fund',
        name: 'Bifurcated Emergency Fund',
        description: 'Dual-currency emergency reserves strategy',
        icon: '🛡️',
        keyAction: 'Build reserves in BOTH currencies before return',
        importance: 'High',
        overview: 'Unlike single-country residents who maintain 6 months of expenses, NRIs and returning Indians need a bifurcated emergency fund strategy. This protects against job loss in host country AND family emergencies in India, without currency conversion delays.',
        benefits: [
            'Instant access in both currencies',
            'No currency conversion during emergencies',
            'Host fund protects job loss scenario',
            'India fund handles family medical emergencies',
            'Psychological security for major move'
        ],
        keyFacts: [
            { label: 'Host Currency', value: '3 months expenses minimum' },
            { label: 'NRO Account', value: '₹5-10 Lakhs liquid' },
            { label: 'Liquid = ', value: 'Accessible in 24-48 hours' },
            { label: 'Where to Keep', value: 'HYSA (US) + Liquid Fund (India)' },
            { label: 'Review Frequency', value: 'Every 6 months' }
        ],
        steps: [
            'Calculate 3-month host country expenses',
            'Open high-yield savings in host country',
            'Calculate likely India emergency amounts',
            'Keep ₹5-10L in NRO savings or liquid fund',
            'Add parents\' names to India accounts for access'
        ],
        warnings: [
            'Fixed deposits are NOT emergency funds (break penalty)',
            'India mutual funds have T+1 settlement - plan accordingly',
            'US checking accounts earn near-zero interest',
            'Don\'t over-fund - opportunity cost is real'
        ],
        officialSources: [
            { name: 'Wealthfront', url: 'https://wealthfront.com', description: 'High-yield cash accounts' },
            { name: 'Paytm Money', url: 'https://paytmmoney.com', description: 'Liquid fund investments' },
            { name: 'SBI NRO', url: 'https://sbi.co.in/nri', description: 'NRO savings accounts' }
        ]
    },
    {
        id: 'defense-strategy',
        name: 'Defense Strategy',
        description: 'Actionable steps to protect wealth during transition',
        icon: '🏰',
        keyAction: 'Implement multi-layered protection before moving',
        importance: 'High',
        overview: 'A comprehensive defense strategy protects your wealth from regulatory changes, currency fluctuations, and transition risks. This involves diversifying across jurisdictions, maintaining optionality, and having clear documentation for all decisions.',
        benefits: [
            'Protection against single-point failures',
            'Currency diversification hedges risk',
            'Documentation protects in audits',
            'Optionality preserves future choices',
            'Professional network prevents mistakes'
        ],
        keyFacts: [
            { label: 'Key Accounts', value: 'RFC + NRO + US brokerage' },
            { label: 'Documentation', value: 'Keep 7 years minimum' },
            { label: 'Professional Team', value: 'CA (India) + CPA (US)' },
            { label: 'Review Cycle', value: 'Quarterly during transition' },
            { label: 'Insurance', value: 'Both countries during overlap' }
        ],
        steps: [
            'Build professional team: Cross-border CA + US CPA',
            'Maintain RFC account for dollar flexibility',
            'Keep US bank account open for 2-3 years post-return',
            'Document all major financial decisions',
            'Create master checklist and track progress'
        ],
        warnings: [
            'Don\'t rely on single advisor for cross-border matters',
            'Online forums are not tax advice',
            'Each situation is unique - templates need customization',
            'Regulatory changes can happen mid-transition'
        ],
        officialSources: [
            { name: 'ICAI', url: 'https://icai.org', description: 'Find qualified CA' },
            { name: 'AICPA', url: 'https://aicpa.org', description: 'Find US CPA with international expertise' },
            { name: 'FEMA Guidelines', url: 'https://rbi.org.in/scripts/FEMA.aspx', description: 'Official FEMA regulations' }
        ]
    }
];

// Tax Compliance Section Details
export const COMPLIANCE_SECTION_DETAILS: FinancialTopicDetail[] = [
    {
        id: 'dtaa',
        name: 'DTAA Benefits',
        description: 'Double Taxation Avoidance Agreement optimization',
        icon: '🤝',
        keyAction: 'Submit Form 10F + TRC to reduce TDS',
        importance: 'High',
        overview: 'The India-US Double Taxation Avoidance Agreement (DTAA) provides relief from double taxation on the same income. NRIs often pay excess TDS (30%+) on NRO interest when they could reduce it to 10-15% using treaty benefits. Document requirements are specific but manageable.',
        benefits: [
            'Reduce TDS from 30% to 10-15% on interest',
            'Claim Foreign Tax Credit to avoid double taxation',
            'Lower withholding on dividends',
            'Clear framework for cross-border transactions'
        ],
        keyFacts: [
            { label: 'Default NRO TDS', value: '30% + cess = 31.2%' },
            { label: 'Treaty Rate', value: '10-15% depending on income type' },
            { label: 'Form 10F', value: 'Declaration of tax status' },
            { label: 'TRC', value: 'Tax Residency Certificate from US' },
            { label: 'Validity', value: 'Submit annually with each bank' }
        ],
        steps: [
            'Request Tax Residency Certificate from IRS (Form 6166)',
            'Fill Form 10F online at incometax.gov.in',
            'Prepare self-declaration of no Permanent Establishment',
            'Submit all documents to each bank annually',
            'Track TDS certificates (Form 16A) for tax filing'
        ],
        warnings: [
            'Must submit BEFORE income is earned for lower TDS',
            'Retroactive claims only via annual refund process',
            'Each bank needs separate submission',
            'TRC takes 6-8 weeks from IRS - plan ahead'
        ],
        officialSources: [
            { name: 'Income Tax India', url: 'https://incometaxindia.gov.in/pages/dtaa.aspx', description: 'Full DTAA text' },
            { name: 'IRS Form 6166', url: 'https://irs.gov/businesses/international-businesses/residency-certification-form-6166', description: 'TRC application' },
            { name: 'Income Tax Portal', url: 'https://incometax.gov.in', description: 'Form 10F filing' }
        ]
    },
    {
        id: 'pfic',
        name: 'PFIC Nightmare',
        description: 'Passive Foreign Investment Company rules for US residents',
        icon: '💀',
        keyAction: 'Never invest in India mutual funds while US tax resident',
        importance: 'Critical',
        overview: 'For US tax residents, Indian Mutual Funds are classified as Passive Foreign Investment Companies (PFICs). This triggers punitive tax treatment: gains taxed at highest marginal rate plus interest charges, effectively 50%+ total tax. This is one of the most costly mistakes NRIs make.',
        benefits: [
            'Understanding prevents catastrophic tax bills',
            'Alternatives exist that avoid PFIC (direct equity, ETFs)',
            'Early action can mitigate existing PFIC positions',
            'Clear pathway for transition to India'
        ],
        keyFacts: [
            { label: 'Effective Tax Rate', value: '50%+ including interest' },
            { label: 'Tax Basis', value: 'Highest marginal rate' },
            { label: 'Interest', value: 'Charged on "excess distribution"' },
            { label: 'Reporting', value: 'Form 8621 per fund' },
            { label: 'Even Tax Saver', value: 'Yes, ELSS is PFIC too' }
        ],
        steps: [
            'Audit all India mutual fund holdings immediately',
            'Stop all SIPs in India MFs if you\'re US tax resident',
            'Consult tax advisor on existing PFIC positions',
            'Switch to direct equity or PMS for India exposure',
            'Use US-domiciled India ETFs (INDA, SMIN, EPI)'
        ],
        warnings: [
            'Even one share of India MF triggers PFIC reporting',
            'Inherited MFs are also PFIC',
            'Insurance products with investment component = PFIC',
            'Liquidation before moving to India may make sense'
        ],
        officialSources: [
            { name: 'IRS Form 8621', url: 'https://irs.gov/forms-pubs/about-form-8621', description: 'PFIC reporting form' },
            { name: 'IRS PFIC Rules', url: 'https://irs.gov/irm/part4/irm_04-061-011', description: 'Internal Revenue Manual - PFIC' },
            { name: 'White Coat Investor', url: 'https://whitecoatinvestor.com/pfic', description: 'Practical PFIC guide' }
        ]
    },
    {
        id: 'fbar-fatca',
        name: 'FBAR & FATCA',
        description: 'Foreign account and asset reporting requirements',
        icon: '📝',
        keyAction: 'File FBAR + FATCA if thresholds met',
        importance: 'High',
        overview: 'US persons with foreign financial accounts must file FBAR (FinCEN 114) if aggregate balance exceeds $10,000 at any point. FATCA (Form 8938) has separate thresholds and overlapping but different scope. Non-compliance penalties start at $10,000 per account.',
        benefits: [
            'Compliance avoids severe civil/criminal penalties',
            'Clean record essential for expatriation certification',
            'Understanding limits reduces over-reporting anxiety',
            'Streamlined procedures exist for catch-up filing'
        ],
        keyFacts: [
            { label: 'FBAR Threshold', value: '$10,000 aggregate max balance' },
            { label: 'FBAR Filing', value: 'FinCEN 114 online by Apr 15' },
            { label: 'FATCA Threshold', value: '$50K EOY / $75K during year' },
            { label: 'FATCA Form', value: '8938 with tax return' },
            { label: 'Non-Willful Penalty', value: '$10,000+ per violation' }
        ],
        steps: [
            'List all foreign accounts: bank, demat, MF, insurance',
            'Track maximum balance during calendar year',
            'Convert INR to USD using Treasury rate',
            'File FBAR electronically by April 15 (auto extension to Oct)',
            'File Form 8938 with tax return if FATCA threshold met'
        ],
        warnings: [
            'NRO/NRE accounts ARE foreign accounts for FBAR',
            'Joint accounts included at full value',
            'Willful non-compliance can trigger criminal penalties',
            'Some accounts exempt from FATCA but not FBAR'
        ],
        officialSources: [
            { name: 'FinCEN FBAR', url: 'https://bsaefiling.fincen.treas.gov', description: 'FBAR electronic filing' },
            { name: 'IRS FATCA', url: 'https://irs.gov/businesses/corporations/fatca', description: 'FATCA overview' },
            { name: 'Treasury FBARs', url: 'https://fincen.gov/fbar-overview', description: 'FBAR requirements' }
        ]
    }
];

// Importance color mapping (similar to URGENCY_COLORS in pillarDetails)
export const IMPORTANCE_COLORS = {
    Critical: { bg: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', label: '🔴 Critical' },
    High: { bg: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', label: '🟠 High Priority' },
    Medium: { bg: 'rgba(14, 165, 233, 0.15)', color: '#0EA5E9', label: '🟡 Medium Priority' }
};
