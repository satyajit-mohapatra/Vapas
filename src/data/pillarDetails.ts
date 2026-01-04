// Detailed information for each of the Seven Critical Pillars
// This data is used by the R2I Protocol module for expandable pillar details

export interface PillarDetail {
    id: number;
    name: string;
    description: string;
    keyAction: string;
    benefit: string;
    urgency: 'Critical' | 'Mandatory' | 'High' | 'Medium';
    overview: string;
    eligibility?: string[];
    benefits: string[];
    keyFacts: { label: string; value: string }[];
    steps?: string[];
    warnings?: string[];
    officialSources: { name: string; url: string; description: string }[];
}

export const PILLAR_DETAILS: PillarDetail[] = [
    {
        id: 1,
        name: 'RNOR Tax Shield',
        description: 'Resident But Not Ordinarily Resident status exempts foreign income for 1-3 years',
        keyAction: 'Be NRI in 9/10 preceding years to qualify',
        benefit: 'Foreign income (dividends, rent, capital gains) tax-free in India',
        urgency: 'Critical',
        overview: 'The RNOR (Resident But Not Ordinarily Resident) status is a transitional tax category in India that provides a powerful 1-3 year window for returning NRIs during which foreign income is exempt from Indian taxation. This is the most significant tax benefit available to returning Indians.',
        eligibility: [
            'Must first meet Resident criteria (182+ days in India in FY, OR 60+ days in FY AND 365+ days in preceding 4 years)',
            'Been NRI for at least 9 out of 10 preceding financial years, OR',
            'Been in India for 729 days or less during 7 preceding financial years'
        ],
        benefits: [
            'Dividends from foreign investments: Tax-free',
            'Rental income from overseas property: Tax-free',
            'Capital gains from international assets: Tax-free',
            'Interest from foreign bank accounts: Tax-free',
            '401(k)/IRA withdrawals: Tax-free in India',
            'NRE/FCNR account interest: Tax-free',
            'No foreign asset reporting in Schedule FA'
        ],
        keyFacts: [
            { label: 'Duration', value: '2-3 financial years' },
            { label: 'NRI Years Required', value: '9 out of 10 preceding years' },
            { label: 'Alternative Test', value: '≤729 days in India in 7 preceding years' },
            { label: 'Income Taxable', value: 'Only India-sourced income' },
            { label: 'DTAA Benefits', value: 'Still applicable' }
        ],
        steps: [
            'Calculate your days in India for the 7 preceding years',
            'Verify NRI status for 9 out of 10 preceding years',
            'Plan arrival date strategically (after Oct 2nd to preserve first year as NR)',
            'File Form 10EE for Section 89A if you have US retirement accounts',
            'Maximize foreign income withdrawals during RNOR period'
        ],
        warnings: [
            '2024/2025 Treaty Shock: US Treasury has disrupted RNOR tax arbitrage',
            'If not "liable to tax" on worldwide income, you may not claim US treaty benefits',
            'US-sourced income may face flat 30% NRA withholding without treaty protection'
        ],
        officialSources: [
            { name: 'Income Tax India', url: 'https://incometaxindia.gov.in', description: 'Section 6 - Residential Status' },
            { name: 'ClearTax', url: 'https://cleartax.in', description: 'RNOR explained with examples' },
            { name: 'GoiNRI', url: 'https://goinri.com', description: 'Practical RNOR tax planning' }
        ]
    },
    {
        id: 2,
        name: 'RFC Account',
        description: 'Resident Foreign Currency account to hold USD/GBP/EUR',
        keyAction: 'Open RFC account, do NOT convert all dollars to rupees',
        benefit: 'Funds fully repatriable, bypasses $250K LRS limit, interest tax-free during RNOR',
        urgency: 'High',
        overview: 'A Resident Foreign Currency (RFC) Account allows returning NRIs to hold their foreign currency earnings in India without mandatory conversion to INR. This provides flexibility and protection against exchange rate fluctuations while maintaining full repatriation capability.',
        eligibility: [
            'Resided abroad for at least 1 year (182+ days) before returning',
            'Returning to India for permanent settlement',
            'NRI, PIO (Person of Indian Origin), or OCI holder'
        ],
        benefits: [
            'Funds 100% repatriable without RBI restrictions',
            'Bypasses $250,000/year LRS (Liberalized Remittance Scheme) limit',
            'Interest tax-free during RNOR period (up to 3 years)',
            'Hold in USD, EUR, GBP, JPY, AUD',
            'DICGC coverage up to ₹5 lakhs per bank',
            'No time limit on holding funds'
        ],
        keyFacts: [
            { label: 'Eligibility', value: '1+ year abroad before return' },
            { label: 'Currencies', value: 'USD, EUR, GBP, JPY, AUD' },
            { label: 'Repatriation', value: '100% without limits' },
            { label: 'LRS Limit', value: 'Does NOT apply to RFC' },
            { label: 'Tax on Interest', value: 'Free during RNOR, taxable after' }
        ],
        steps: [
            'Choose a bank offering RFC accounts',
            'Visit branch with required documentation',
            'Transfer funds from NRE account before conversion',
            'FCNR deposits can be transferred upon maturity',
            'Keep funds in RFC for flexibility and repatriation'
        ],
        warnings: [
            'Once NRE is converted to resident savings, you cannot move funds back to RFC',
            'Interest is only tax-free during RNOR period, taxable after becoming ROR',
            'Joint holding allowed but resident relative cannot operate during your lifetime'
        ],
        officialSources: [
            { name: 'Reserve Bank of India', url: 'https://rbi.org.in', description: 'FEMA regulations on RFC' },
            { name: 'Standard Chartered', url: 'https://sc.com/in/', description: 'RFC account features' },
            { name: 'ClearTax', url: 'https://cleartax.in', description: 'RFC account guide' }
        ]
    },
    {
        id: 3,
        name: 'FEMA Redesignation',
        description: 'Convert NRE/NRO accounts to Resident accounts',
        keyAction: 'Inform bank within 30-60 days of becoming resident',
        benefit: 'Avoids FEMA violation, preserves account history',
        urgency: 'Mandatory',
        overview: 'Under FEMA (Foreign Exchange Management Act) regulations, NRIs are required to convert their NRE/NRO accounts to Resident accounts within a reasonable timeframe after becoming Indian residents. This is not optional—failure to comply can result in severe penalties up to 3x the amount involved.',
        benefits: [
            'Avoids FEMA violation and penalties',
            'Preserves account history and banking relationship',
            'Enables full domestic transaction access',
            'Seamless transition of investments'
        ],
        keyFacts: [
            { label: 'Timeline', value: 'Notify within 30-60 days' },
            { label: 'NRE Account', value: 'Convert to Resident or RFC' },
            { label: 'NRO Account', value: 'Convert to Resident or close' },
            { label: 'FCNR Deposits', value: 'Hold until maturity, then convert' },
            { label: 'Penalty', value: 'Up to 3x amount + ₹5,000/day' }
        ],
        steps: [
            'Complete all inward remittances before conversion',
            'Visit bank branch with documentation',
            'Submit declaration of status change',
            'Choose conversion path (Resident or RFC)',
            'Update linked Demat and MF accounts'
        ],
        warnings: [
            'Banks may freeze accounts for non-compliance',
            'FEMA penalties can be up to 3x the amount involved',
            'Non-compliance affects tax filing and investments',
            'FEMA and Income Tax residency can differ'
        ],
        officialSources: [
            { name: 'Reserve Bank of India', url: 'https://rbi.org.in', description: 'FEMA Master Directions' },
            { name: 'Economic Times', url: 'https://economictimes.com', description: 'NRE/NRO conversion guide' },
            { name: 'GetBelong', url: 'https://getbelong.com', description: 'Account conversion checklist' }
        ]
    },
    {
        id: 4,
        name: 'Healthcare Continuity',
        description: 'Pre-buy Indian health insurance 3 years before return',
        keyAction: 'Maintain policy while abroad to exhaust waiting periods',
        benefit: 'Full coverage from Day 1 (PED waiting periods exhausted)',
        urgency: 'Medium',
        overview: 'Indian health insurance policies have Pre-Existing Disease (PED) waiting periods of up to 3 years. Strategic pre-purchase while abroad ensures full coverage from Day 1 upon return, avoiding a critical gap in healthcare protection.',
        benefits: [
            'Full coverage immediately upon return',
            'Pre-existing conditions covered without waiting',
            'Indian premiums 90%+ cheaper than US',
            'Family floater covers entire family',
            'No coverage gap for ongoing conditions'
        ],
        keyFacts: [
            { label: 'Max PED Waiting', value: '3 years (per IRDAI 2024)' },
            { label: 'Strategy', value: 'Buy 3 years before return' },
            { label: 'Premium (Family)', value: '₹25K-75K/year vs $8K-22K in US' },
            { label: 'Recommended Cover', value: '₹50 Lakhs - ₹1 Crore' },
            { label: 'Mental Health', value: 'Now mandatory per IRDAI 2025' }
        ],
        steps: [
            'Purchase Indian health insurance 3 years before planned return',
            'Maintain policy while abroad (pay annual premiums)',
            'Disclose all pre-existing conditions honestly',
            'Consider PED buyback rider to reduce waiting period',
            'Get full medical checkup before leaving US'
        ],
        warnings: [
            'Most Indian plans only cover expenses within India',
            'Non-disclosure can lead to claim rejection and policy cancellation',
            'OPD costs (doctor visits, medicines) usually out-of-pocket'
        ],
        officialSources: [
            { name: 'IRDAI', url: 'https://irdai.gov.in', description: 'Health insurance regulations' },
            { name: 'PolicyBazaar', url: 'https://policybazaar.com', description: 'NRI health insurance comparison' },
            { name: 'Niva Bupa', url: 'https://nivabupa.com', description: 'NRI-specific plans' }
        ]
    },
    {
        id: 5,
        name: 'Social Security & 401k',
        description: 'Preserve US Social Security credits, plan 401k strategy',
        keyAction: 'Ensure 40 credits (10 years) for SS eligibility',
        benefit: 'SS payments receivable in India, tax-efficient 401k withdrawal',
        urgency: 'High',
        overview: 'Strategic preservation of US Social Security credits and tax-efficient 401(k) withdrawal planning are crucial for maximizing retirement benefits from your US career when returning to India.',
        benefits: [
            'Receive full SS benefits in India (if 40 credits earned)',
            '401(k) withdrawals during RNOR = tax-free in India',
            'Section 89A defers India tax until actual withdrawal',
            'DTAA prevents double taxation',
            'Continued growth while account stays in US'
        ],
        keyFacts: [
            { label: 'SS Credits Needed', value: '40 credits (10 years work)' },
            { label: 'Totalization Agreement', value: 'None between US-India' },
            { label: 'SS Payments to India', value: 'Yes, full benefits allowed' },
            { label: 'Early Withdrawal Penalty', value: '10% if under 59½' },
            { label: 'RMD Start Age', value: 'Age 73' }
        ],
        steps: [
            'Check your SS credits at ssa.gov',
            'If 30-39 credits, consider working additional years',
            'File Form W-8BEN with 401(k) provider',
            'Consider withdrawals during RNOR window',
            'File Form 10EE for Section 89A when becoming ROR'
        ],
        warnings: [
            'No totalization agreement = cannot combine India work credits',
            'Medicare not available outside US',
            '401(k) always subject to US tax regardless of residence',
            'Roth treatment in India unclear—consult tax advisor'
        ],
        officialSources: [
            { name: 'Social Security Administration', url: 'https://ssa.gov', description: 'Benefits for non-citizens' },
            { name: 'IRS', url: 'https://irs.gov', description: '401(k) withdrawal rules' },
            { name: 'Income Tax India', url: 'https://incometaxindia.gov.in', description: 'Section 89A rules' }
        ]
    },
    {
        id: 6,
        name: 'Physical Asset Liquidation',
        description: 'Strategic timing for selling US property',
        keyAction: 'Consider renting US house initially (trial period)',
        benefit: 'Rental income tax-free during RNOR, option to return',
        urgency: 'Medium',
        overview: 'Strategic timing for selling US property is crucial when returning to India. The "trial period" approach—renting initially rather than selling immediately—provides flexibility, tax advantages during RNOR, and the option to return if India doesn\'t work out.',
        benefits: [
            'Rental income tax-free in India during RNOR',
            'Keep option to return if relocation doesn\'t work',
            'Continue building equity in rising market',
            'Dollar income hedges against rupee depreciation',
            '2-3 years to evaluate India experience'
        ],
        keyFacts: [
            { label: 'FIRPTA Withholding', value: '0-15% depending on sale price' },
            { label: 'Section 121 Exclusion', value: '$250K/$500K if lived 2 of 5 years' },
            { label: 'LTCG Tax Rate', value: '15-20% in US' },
            { label: 'Rental Taxation', value: 'US: taxable; India: free during RNOR' },
            { label: 'Car Import Duty', value: '165% - not recommended' }
        ],
        steps: [
            'Evaluate: sell vs rent decision',
            'If selling, file Form 8288-B for reduced FIRPTA withholding',
            'Consider timing for Section 121 exclusion (within 3 years)',
            'If renting, hire property management (8-10% of rent)',
            'Sell during RNOR period for India tax-free capital gains'
        ],
        warnings: [
            'Section 121 exclusion expires 3 years after moving out',
            'FIRPTA applies regardless of buyer identity',
            'Must file Form 1040NR for US property income even after moving',
            'Shipping car to India is 165% duty—almost never worthwhile'
        ],
        officialSources: [
            { name: 'IRS', url: 'https://irs.gov/firpta', description: 'FIRPTA withholding rules' },
            { name: 'IRS Publication 515', url: 'https://irs.gov/publications/p515', description: 'Withholding on non-residents' },
            { name: 'DTAA India-US', url: 'https://incometaxindia.gov.in', description: 'Treaty text' }
        ]
    },
    {
        id: 7,
        name: 'Admin Cleanup',
        description: 'PAN, Aadhaar, KYC updates',
        keyAction: 'Update PAN to Resident, obtain/update Aadhaar, link both',
        benefit: 'Avoids inoperative accounts, enables full investment access',
        urgency: 'Mandatory',
        overview: 'Essential administrative updates including PAN, Aadhaar, and KYC are mandatory upon returning to India. Failure to complete these updates can result in inoperative accounts, blocked investments, and inability to access financial services.',
        benefits: [
            'PAN remains operative for all transactions',
            'Full access to banking and investment services',
            'Smooth tax filing without complications',
            'Mutual funds and Demat accounts functional',
            'No higher TDS withholding'
        ],
        keyFacts: [
            { label: 'PAN-Aadhaar Link', value: 'Mandatory for residents' },
            { label: 'Aadhaar Eligibility', value: 'NRIs with Indian passport can apply immediately' },
            { label: 'Late Linking Fee', value: '₹1,000' },
            { label: 'Inoperative PAN TDS', value: '20% instead of applicable rate' },
            { label: 'Timeline', value: 'Complete within 30-60 days' }
        ],
        steps: [
            'Obtain Indian mobile number upon arrival',
            'Apply for Aadhaar at Aadhaar Seva Kendra (no 182-day wait for passport holders)',
            'Update PAN status to Resident on incometax.gov.in',
            'Link PAN-Aadhaar (pay ₹1,000 fee if past deadline)',
            'Update KYC with all banks, MFs, and Demat accounts'
        ],
        warnings: [
            'Unlinked PAN becomes inoperative—cannot file ITR, higher TDS',
            'Banks may freeze accounts if KYC not updated',
            'MF/Demat transactions blocked until status updated',
            'OCI holders still need 182-day residency for Aadhaar'
        ],
        officialSources: [
            { name: 'UIDAI', url: 'https://uidai.gov.in', description: 'Aadhaar enrollment' },
            { name: 'Income Tax India', url: 'https://incometax.gov.in', description: 'PAN services, linking' },
            { name: 'SEBI', url: 'https://sebi.gov.in', description: 'Investment KYC regulations' }
        ]
    }
];

// Helper function to get pillar by ID
export const getPillarById = (id: number): PillarDetail | undefined => {
    return PILLAR_DETAILS.find(pillar => pillar.id === id);
};

// Urgency color mapping
export const URGENCY_COLORS = {
    Critical: { bg: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', label: '🔴 Critical' },
    Mandatory: { bg: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', label: '🔴 Mandatory' },
    High: { bg: 'rgba(99, 102, 241, 0.15)', color: '#6366F1', label: '🟠 High' },
    Medium: { bg: 'rgba(14, 165, 233, 0.15)', color: '#0EA5E9', label: '🟡 Medium' }
};
