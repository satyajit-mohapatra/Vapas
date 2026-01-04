import { useState, useRef } from 'react';
import {
    CheckCircle2,
    Circle,
    Download,
    Printer,
    ChevronDown,
    ChevronRight,
    Info,
    AlertCircle,
    Clock,
    ExternalLink,
    X
} from 'lucide-react';

// Checklist data organized by tabs/categories
const CHECKLIST_DATA = {
    r2iProtocol: {
        title: 'R2I Protocol',
        icon: '🏠',
        description: 'Core relocation logistics and the 7 critical pillars for returning to India',
        sections: [
            {
                name: 'RNOR Tax Shield',
                importance: 'Critical',
                items: [
                    {
                        id: 'rnor-1',
                        task: 'Verify NRI status for 9 out of 10 preceding years',
                        help: 'RNOR (Resident But Not Ordinarily Resident) status exempts your foreign income from Indian taxes for 1-3 years after return. You qualify if you were NRI in 9 out of 10 preceding financial years.',
                        deadline: '12 months before',
                        links: [{ name: 'Income Tax India', url: 'https://incometaxindia.gov.in' }]
                    },
                    {
                        id: 'rnor-2',
                        task: 'Document foreign income sources (dividends, rent, capital gains)',
                        help: 'During RNOR period, all foreign-sourced income is tax-free in India. Keep records of US dividends, rental income, and capital gains.',
                        deadline: '6 months before'
                    },
                    {
                        id: 'rnor-3',
                        task: 'Consult CA for RNOR period optimization',
                        help: 'A qualified Chartered Accountant can help you maximize the tax benefits during your RNOR window (typically 1-3 years).',
                        deadline: '6 months before'
                    }
                ]
            },
            {
                name: 'RFC Account Setup',
                importance: 'High',
                items: [
                    {
                        id: 'rfc-1',
                        task: 'Open RFC (Resident Foreign Currency) account',
                        help: 'RFC account lets you hold USD/GBP/EUR after becoming resident. Funds remain fully repatriable and bypass the $250K LRS limit.',
                        deadline: 'Within 30 days of return',
                        links: [{ name: 'RBI FAQ on RFC', url: 'https://rbi.org.in/scripts/FAQView.aspx?Id=52' }]
                    },
                    {
                        id: 'rfc-2',
                        task: 'Transfer funds from NRE to RFC before status change',
                        help: 'NRE account balance can be transferred to RFC. Interest on RFC is tax-free during RNOR period.',
                        deadline: 'Before becoming resident'
                    },
                    {
                        id: 'rfc-3',
                        task: 'DO NOT convert all dollars to rupees immediately',
                        help: 'Keep funds in RFC for flexibility. You can convert to INR gradually based on exchange rates and needs.',
                        deadline: 'Ongoing'
                    }
                ]
            },
            {
                name: 'FEMA Redesignation',
                importance: 'Critical',
                items: [
                    {
                        id: 'fema-1',
                        task: 'Inform bank about change in residency status',
                        help: 'FEMA requires you to notify your bank within 30-60 days of becoming Indian resident. Failure can result in penalties.',
                        deadline: 'Within 30 days of return',
                        links: [{ name: 'RBI FEMA Guidelines', url: 'https://rbi.org.in/scripts/Fema.aspx' }]
                    },
                    {
                        id: 'fema-2',
                        task: 'Convert NRE account to Resident Savings',
                        help: 'NRE account must be redesignated as regular resident savings account or RFC account upon becoming resident.',
                        deadline: 'Within 30 days'
                    },
                    {
                        id: 'fema-3',
                        task: 'Convert NRO account to Resident account',
                        help: 'NRO account also needs redesignation. The accumulated balance becomes part of your resident assets.',
                        deadline: 'Within 30 days'
                    }
                ]
            },
            {
                name: 'Social Security & 401k',
                importance: 'High',
                items: [
                    {
                        id: 'ss-1',
                        task: 'Verify 40 credits (10 years) for US Social Security',
                        help: 'You need 40 credits (typically 10 years of work) to be eligible for US Social Security benefits, which are payable in India.',
                        deadline: 'Before leaving US',
                        links: [{ name: 'SSA.gov', url: 'https://ssa.gov/myaccount' }]
                    },
                    {
                        id: 'ss-2',
                        task: 'File Form 10-EE for 401(k) tax deferral in India',
                        help: 'Section 89A allows you to defer Indian tax on 401(k) until actual withdrawal. Form 10-EE must be filed annually.',
                        deadline: 'With annual ITR',
                        links: [{ name: 'Income Tax Portal', url: 'https://incometax.gov.in' }]
                    },
                    {
                        id: 'ss-3',
                        task: 'Submit W-8BEN to 401(k) custodian',
                        help: 'After moving, file W-8BEN to claim treaty benefits and reduce US withholding on 401(k) withdrawals to 15-25%.',
                        deadline: 'After establishing India residence'
                    },
                    {
                        id: 'ss-4',
                        task: 'Plan RNOR-period withdrawals for tax efficiency',
                        help: 'Withdrawals during RNOR period are taxed only in the US (treaty rate), not India. Maximize withdrawals in this window.',
                        deadline: 'During RNOR period'
                    }
                ]
            },
            {
                name: 'Physical Asset Liquidation',
                importance: 'Medium',
                items: [
                    {
                        id: 'asset-1',
                        task: 'Decide: Sell or rent US property',
                        help: 'Consider renting initially as a trial period. Rental income is tax-free in India during RNOR. You retain option to return.',
                        deadline: '6 months before'
                    },
                    {
                        id: 'asset-2',
                        task: 'If selling, complete before becoming Indian resident',
                        help: 'Capital gains on US property sale may be taxed in both countries after becoming ROR. Selling as NRI simplifies taxation.',
                        deadline: 'Before return'
                    },
                    {
                        id: 'asset-3',
                        task: 'Arrange for property management if renting',
                        help: 'Set up a reliable property manager, automatic rent collection, and tax filing arrangement for US rental income.',
                        deadline: '3 months before'
                    }
                ]
            },
            {
                name: 'Admin Cleanup',
                importance: 'Critical',
                items: [
                    {
                        id: 'admin-1',
                        task: 'Update PAN to Resident status',
                        help: 'Your PAN must reflect resident status. This affects TDS rates and investment eligibility.',
                        deadline: 'Within 30 days',
                        links: [{ name: 'UTIITSL PAN Services', url: 'https://pan.utiitsl.com' }]
                    },
                    {
                        id: 'admin-2',
                        task: 'Obtain/Update Aadhaar card',
                        help: 'Aadhaar is mandatory for banking, investments, and government services. Apply if you don\'t have one.',
                        deadline: 'Within 60 days',
                        links: [{ name: 'UIDAI', url: 'https://uidai.gov.in' }]
                    },
                    {
                        id: 'admin-3',
                        task: 'Link PAN and Aadhaar',
                        help: 'PAN-Aadhaar linking is mandatory. Unlinked PAN becomes inoperative, blocking investments and transactions.',
                        deadline: 'Within 60 days'
                    },
                    {
                        id: 'admin-4',
                        task: 'Complete KYC for all bank accounts and investments',
                        help: 'Update your address, phone number, and status (NRI to Resident) across all financial institutions.',
                        deadline: 'Within 90 days'
                    }
                ]
            },
            {
                name: 'Shipping & Logistics',
                importance: 'Medium',
                items: [
                    {
                        id: 'ship-1',
                        task: 'Get Transfer of Residence (TR) eligibility confirmation',
                        help: 'You must have lived abroad for 2+ years to qualify for duty-free import of personal effects.',
                        deadline: '3 months before'
                    },
                    {
                        id: 'ship-2',
                        task: 'Create inventory of items to ship vs sell',
                        help: 'Electronics like TVs (38.5% duty) and ACs may not be worth shipping. Focus on personal effects, books, kitchenware.',
                        deadline: '3 months before'
                    },
                    {
                        id: 'ship-3',
                        task: 'Get shipping quotes (20ft or 40ft container)',
                        help: '20ft container: $3,000-$5,500, holds 1-2 BR apartment. 40ft container: $5,000-$8,500, holds 3-4 BR house.',
                        deadline: '2 months before'
                    },
                    {
                        id: 'ship-4',
                        task: 'Arrange temporary housing in India',
                        help: 'Book serviced apartment for 1-3 months while you find permanent housing. Budget $1,500-$3,000/month.',
                        deadline: '1 month before'
                    }
                ]
            }
        ]
    },
    financial: {
        title: 'Financial Strategy',
        icon: '💰',
        description: '401(k), taxation, banking, and cross-border financial planning',
        sections: [
            {
                name: 'OBBBA Tax Preparation',
                importance: 'High',
                items: [
                    {
                        id: 'obbba-1',
                        task: 'Complete large remittances before Jan 1, 2026',
                        help: 'OBBBA imposes 1% tax on outbound remittances from 2026. Execute major transfers before the deadline.',
                        deadline: 'Before Jan 1, 2026'
                    },
                    {
                        id: 'obbba-2',
                        task: 'Switch to exempt remittance methods',
                        help: 'Bank wire transfers from BSA-regulated institutions are exempt. Avoid cash transfers and money orders.',
                        deadline: 'Before Jan 1, 2026'
                    },
                    {
                        id: 'obbba-3',
                        task: 'Set up Wise/Remitly accounts linked to US bank',
                        help: 'Digital, bank-integrated platforms using ACH/debit are generally exempt from OBBBA tax.',
                        deadline: 'Before Jan 1, 2026',
                        links: [{ name: 'Wise', url: 'https://wise.com' }]
                    }
                ]
            },
            {
                name: 'Exit Tax Planning',
                importance: 'Critical',
                items: [
                    {
                        id: 'exit-1',
                        task: 'Calculate if you are a Covered Expatriate',
                        help: 'Three tests: Net worth ≥$2M, OR avg tax liability ≥$201K/year, OR failure to certify compliance. Any one triggers exit tax.',
                        deadline: '12 months before'
                    },
                    {
                        id: 'exit-2',
                        task: 'If at year 6-7 of Green Card, consider early surrender',
                        help: 'Long-Term Resident status (8+ years) triggers exit tax. Surrendering at year 6-7 avoids this.',
                        deadline: 'Before 8-year mark'
                    },
                    {
                        id: 'exit-3',
                        task: 'Consider asset gifting to lower net worth',
                        help: 'Gift assets to US-citizen spouse or children to bring net worth below $2M threshold.',
                        deadline: '12 months before'
                    },
                    {
                        id: 'exit-4',
                        task: 'File Form 8854 properly',
                        help: 'Failure to file 8854 automatically makes you a Covered Expatriate regardless of net worth.',
                        deadline: 'Year of expatriation',
                        links: [{ name: 'IRS Form 8854', url: 'https://irs.gov/forms-pubs/about-form-8854' }]
                    }
                ]
            },
            {
                name: 'Banking Transition',
                importance: 'High',
                items: [
                    {
                        id: 'bank-1',
                        task: 'Maintain US checking account for ongoing needs',
                        help: 'Keep a US bank account for credit card payments, subscriptions, and any US-based transactions.',
                        deadline: 'Before leaving'
                    },
                    {
                        id: 'bank-2',
                        task: 'Set up Indian salary account',
                        help: 'Most employers require a specific bank. Popular options: HDFC, ICICI, SBI, Kotak.',
                        deadline: 'Upon joining employer'
                    },
                    {
                        id: 'bank-3',
                        task: 'Apply for Indian credit cards',
                        help: 'Credit history doesn\'t transfer. Start with secured cards or cards from your salary bank.',
                        deadline: 'First 90 days'
                    },
                    {
                        id: 'bank-4',
                        task: 'Set up UPI payments',
                        help: 'UPI (Google Pay, PhonePe, Paytm) is essential for daily transactions in India.',
                        deadline: 'First week',
                        links: [{ name: 'NPCI UPI', url: 'https://npci.org.in/what-we-do/upi/product-overview' }]
                    }
                ]
            },
            {
                name: 'Investment Restructuring',
                importance: 'High',
                items: [
                    {
                        id: 'invest-1',
                        task: 'Liquidate PFIC investments before becoming ROR',
                        help: 'Indian mutual funds are PFICs for US tax purposes. Sell before losing US person status to avoid complex reporting.',
                        deadline: 'Before return'
                    },
                    {
                        id: 'invest-2',
                        task: 'Review US brokerage account status',
                        help: 'Many US brokerages restrict accounts for non-residents. Check policies of Fidelity, Schwab, Vanguard.',
                        deadline: '3 months before'
                    },
                    {
                        id: 'invest-3',
                        task: 'Open Indian demat and trading account',
                        help: 'Zerodha, Groww, or ICICI Direct are popular options. Required for stocks, mutual funds, bonds.',
                        deadline: 'First 30 days',
                        links: [{ name: 'Zerodha', url: 'https://zerodha.com' }]
                    },
                    {
                        id: 'invest-4',
                        task: 'Explore GIFT City investment options',
                        help: 'GIFT City offers dollar-denominated investments with tax benefits. Good for USD diversification.',
                        deadline: 'First 6 months'
                    }
                ]
            }
        ]
    },
    realEstate: {
        title: 'Real Estate',
        icon: '🏢',
        description: 'Finding housing, rent vs buy decision, and property investment',
        sections: [
            {
                name: 'Housing Search',
                importance: 'High',
                items: [
                    {
                        id: 're-1',
                        task: 'Research neighborhoods based on office location',
                        help: 'Indian cities have severe traffic. Choose housing to minimize commute. 10km can take 1 hour in peak traffic.',
                        deadline: '2 months before'
                    },
                    {
                        id: 're-2',
                        task: 'Plan 1-2 week house hunting trip',
                        help: 'Book serviced apartment and schedule 5-6 property visits per day with brokers.',
                        deadline: '1 month before'
                    },
                    {
                        id: 're-3',
                        task: 'Connect with local brokers',
                        help: 'Use NoBroker, 99acres, MagicBricks to find properties. Broker fee is typically 1 month rent.',
                        deadline: '1 month before',
                        links: [{ name: 'NoBroker', url: 'https://nobroker.in' }, { name: '99acres', url: 'https://99acres.com' }]
                    },
                    {
                        id: 're-4',
                        task: 'Budget for security deposit (2-10 months rent)',
                        help: 'Security deposits in Bangalore can be 10 months rent! Mumbai/Delhi typically 2-3 months.',
                        deadline: 'Before signing'
                    }
                ]
            },
            {
                name: 'Rent vs Buy Decision',
                importance: 'Medium',
                items: [
                    {
                        id: 'rvb-1',
                        task: 'Plan to rent for first 1-2 years',
                        help: 'Don\'t buy immediately. Understand the city, neighborhoods, and market before committing.',
                        deadline: 'Upon arrival'
                    },
                    {
                        id: 'rvb-2',
                        task: 'Calculate rental yields in target areas',
                        help: 'Indian rental yields are only 2-3%. Buying is primarily for appreciation, not income.',
                        deadline: 'Year 1-2'
                    },
                    {
                        id: 'rvb-3',
                        task: 'Research RERA registration of builders',
                        help: 'RERA (Real Estate Regulatory Authority) registration is mandatory. Check project status before any booking.',
                        deadline: 'Before buying',
                        links: [{ name: 'RERA Maharashtra', url: 'https://maharera.mahaonline.gov.in' }]
                    }
                ]
            }
        ]
    },
    healthcare: {
        title: 'Healthcare',
        icon: '🏥',
        description: 'Insurance transition, finding doctors, and healthcare planning',
        sections: [
            {
                name: 'Health Insurance',
                importance: 'Critical',
                items: [
                    {
                        id: 'health-1',
                        task: 'Buy Indian health insurance 3 years before return',
                        help: 'Pre-existing disease (PED) waiting periods are 2-4 years. Buy early to exhaust them before you need coverage.',
                        deadline: '3 years before'
                    },
                    {
                        id: 'health-2',
                        task: 'Choose sum insured of ₹50L - ₹1 Crore',
                        help: 'Private hospital costs (Apollo, Fortis, Max) are significant. Cardiac surgery can cost ₹10-15L.',
                        deadline: '3 years before'
                    },
                    {
                        id: 'health-3',
                        task: 'Compare insurers: Star Health, Niva Bupa, HDFC Ergo',
                        help: 'Check claim settlement ratio, network hospitals, and PED buyback options.',
                        deadline: '3 years before',
                        links: [{ name: 'PolicyBazaar', url: 'https://policybazaar.com' }]
                    },
                    {
                        id: 'health-4',
                        task: 'Add parents to family floater or separate policy',
                        help: 'Parents above 60 have limited options. Consider dedicated senior citizen plans.',
                        deadline: '2 years before'
                    }
                ]
            },
            {
                name: 'Medical Transition',
                importance: 'High',
                items: [
                    {
                        id: 'med-1',
                        task: 'Get complete medical checkup before leaving US',
                        help: 'Document baseline health. Useful for insurance claims and continuity of care.',
                        deadline: '1 month before'
                    },
                    {
                        id: 'med-2',
                        task: 'Request all medical records from US providers',
                        help: 'Get copies of prescriptions, lab results, imaging reports, and specialist notes.',
                        deadline: '1 month before'
                    },
                    {
                        id: 'med-3',
                        task: 'Stock up on 3 months of prescription medications',
                        help: 'Brand names differ in India. Bring enough medication while you find Indian equivalents.',
                        deadline: '1 month before'
                    },
                    {
                        id: 'med-4',
                        task: 'Research hospitals near planned residence',
                        help: 'Identify nearest emergency room, preferred hospital, and specialists before you need them.',
                        deadline: 'First week'
                    },
                    {
                        id: 'med-5',
                        task: 'Download telemedicine apps',
                        help: 'Apollo 24/7, Practo, and mFine provide quick access to doctors. Great for non-emergencies.',
                        deadline: 'First week',
                        links: [{ name: 'Practo', url: 'https://practo.com' }]
                    }
                ]
            }
        ]
    },
    career: {
        title: 'Career',
        icon: '💼',
        description: 'Job search, salary negotiation, and career transition',
        sections: [
            {
                name: 'Job Search Preparation',
                importance: 'Critical',
                items: [
                    {
                        id: 'job-1',
                        task: 'Start job search 6-9 months before planned return',
                        help: 'Indian hiring cycles are slower. Give yourself runway for multiple interview rounds.',
                        deadline: '9 months before'
                    },
                    {
                        id: 'job-2',
                        task: 'Update LinkedIn for India recruiters',
                        help: 'Change location to target city, add "Open to Work", connect with India-based recruiters.',
                        deadline: '9 months before',
                        links: [{ name: 'LinkedIn', url: 'https://linkedin.com' }]
                    },
                    {
                        id: 'job-3',
                        task: 'Create profile on Naukri.com and iimjobs',
                        help: 'Naukri is the largest job portal. iimjobs is better for senior/premium roles.',
                        deadline: '6 months before',
                        links: [{ name: 'Naukri', url: 'https://naukri.com' }, { name: 'iimjobs', url: 'https://iimjobs.com' }]
                    },
                    {
                        id: 'job-4',
                        task: 'Research GCC opportunities at current employer',
                        help: 'If your company has a Global Capability Center (GCC) in India, internal transfer is often the easiest path.',
                        deadline: '6 months before'
                    }
                ]
            },
            {
                name: 'Salary Negotiation',
                importance: 'High',
                items: [
                    {
                        id: 'sal-1',
                        task: 'Understand CTC vs take-home difference',
                        help: 'Indian CTC includes PF, gratuity, variable pay. Actual take-home is only ~60% of CTC. Ask for in-hand breakdown.',
                        deadline: 'During offers'
                    },
                    {
                        id: 'sal-2',
                        task: 'Research salaries on Glassdoor, AmbitionBox',
                        help: 'NRIs with 8-12 years experience typically get 25-40% premium over local candidates.',
                        deadline: 'Before interviews',
                        links: [{ name: 'AmbitionBox', url: 'https://ambitionbox.com' }]
                    },
                    {
                        id: 'sal-3',
                        task: 'Negotiate relocation package and signing bonus',
                        help: 'Many companies offer relocation allowance, temporary housing, and signing bonuses for returning NRIs.',
                        deadline: 'During offers'
                    },
                    {
                        id: 'sal-4',
                        task: 'Emphasize long-term commitment in interviews',
                        help: 'Interviewers worry you\'ll leave again. Prepare answers about permanent return reasons.',
                        deadline: 'During interviews'
                    }
                ]
            }
        ]
    },
    education: {
        title: 'Education',
        icon: '📚',
        description: 'School selection, admissions, and education planning for children',
        sections: [
            {
                name: 'School Research',
                importance: 'Critical',
                items: [
                    {
                        id: 'edu-1',
                        task: 'Decide on curriculum: IB, IGCSE, or CBSE',
                        help: 'IB is smoothest transition from US. CBSE is best for Indian competitive exams (JEE/NEET). IGCSE is a middle ground.',
                        deadline: '12 months before'
                    },
                    {
                        id: 'edu-2',
                        task: 'Research schools in target city',
                        help: 'Top IB schools: DAIS (Mumbai), ASB (Mumbai), Indus (Bangalore), Pathways (Gurgaon). Get on waitlists early.',
                        deadline: '12 months before'
                    },
                    {
                        id: 'edu-3',
                        task: 'Check school admission timelines',
                        help: 'Many schools admit only in April (Indian academic year start). Applications open 6-9 months before.',
                        deadline: '9 months before'
                    },
                    {
                        id: 'edu-4',
                        task: 'Prepare for entrance tests',
                        help: 'Most good schools require entrance tests in English, Math. Some require interviews.',
                        deadline: '6 months before'
                    }
                ]
            },
            {
                name: 'Admission Process',
                importance: 'High',
                items: [
                    {
                        id: 'adm-1',
                        task: 'Gather US school transcripts and records',
                        help: 'Indian schools require previous school records, including report cards and conduct certificates.',
                        deadline: '3 months before'
                    },
                    {
                        id: 'adm-2',
                        task: 'Budget for admission fees (₹5L - ₹10L)',
                        help: 'Non-refundable admission fees, development fees, and "donations" are common at top schools.',
                        deadline: 'With application'
                    },
                    {
                        id: 'adm-3',
                        task: 'Plan school visits during India trip',
                        help: 'Visit shortlisted schools, meet counselors, assess facilities and culture fit.',
                        deadline: 'During house hunting trip'
                    },
                    {
                        id: 'adm-4',
                        task: 'Research special needs support if applicable',
                        help: 'IEP/504 plans from US don\'t transfer. Research schools with SEN teams: BIS Bangalore, DAIS Mumbai.',
                        deadline: '12 months before'
                    }
                ]
            }
        ]
    },
    giftCity: {
        title: 'GIFT City',
        icon: '🏦',
        description: 'International Financial Services Centre investment opportunities',
        sections: [
            {
                name: 'GIFT City Investments',
                importance: 'Medium',
                items: [
                    {
                        id: 'gift-1',
                        task: 'Understand GIFT City tax benefits',
                        help: '100% tax exemption on income for 10 years. Capital gains exempt for Category III AIFs.',
                        deadline: 'First 6 months'
                    },
                    {
                        id: 'gift-2',
                        task: 'Explore GIFT City AIFs for USD investments',
                        help: 'AIFs pool NRI money for Indian startups/markets. Good for USD diversification with India exposure.',
                        deadline: 'First year',
                        links: [{ name: 'IFSCA', url: 'https://ifsca.gov.in' }]
                    },
                    {
                        id: 'gift-3',
                        task: 'Consider IBU deposits for tax-free interest',
                        help: 'Foreign currency deposits in IFSC Banking Units offer 100% tax-free interest in India.',
                        deadline: 'First year'
                    }
                ]
            }
        ]
    }
};

interface ChecklistItem {
    id: string;
    task: string;
    help: string;
    deadline?: string;
    links?: { name: string; url: string }[];
}

interface ChecklistSection {
    name: string;
    importance: string;
    items: ChecklistItem[];
}

interface ChecklistCategory {
    title: string;
    icon: string;
    description: string;
    sections: ChecklistSection[];
}

export default function R2IChecklist() {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [activeCategory, setActiveCategory] = useState<string>('r2iProtocol');
    const printRef = useRef<HTMLDivElement>(null);

    const toggleCheck = (itemId: string) => {
        const newChecked = new Set(checkedItems);
        if (newChecked.has(itemId)) {
            newChecked.delete(itemId);
        } else {
            newChecked.add(itemId);
        }
        setCheckedItems(newChecked);
    };

    const toggleSection = (sectionName: string) => {
        const newExpanded = new Set(expandedSections);
        if (newExpanded.has(sectionName)) {
            newExpanded.delete(sectionName);
        } else {
            newExpanded.add(sectionName);
        }
        setExpandedSections(newExpanded);
    };

    const toggleItemHelp = (itemId: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        } else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    };

    const getImportanceColor = (importance: string) => {
        switch (importance) {
            case 'Critical': return '#ef4444';
            case 'High': return '#f59e0b';
            case 'Medium': return '#3b82f6';
            default: return '#6b7280';
        }
    };

    const calculateProgress = (category: ChecklistCategory) => {
        let total = 0;
        let completed = 0;
        category.sections.forEach(section => {
            section.items.forEach(item => {
                total++;
                if (checkedItems.has(item.id)) completed++;
            });
        });
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const category = CHECKLIST_DATA[activeCategory as keyof typeof CHECKLIST_DATA];
        let content = `# ${category.title} Checklist\n`;
        content += `${category.description}\n\n`;
        content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

        category.sections.forEach(section => {
            content += `## ${section.name} (${section.importance})\n\n`;
            section.items.forEach(item => {
                const checked = checkedItems.has(item.id) ? '[x]' : '[ ]';
                content += `${checked} ${item.task}\n`;
                if (item.deadline) content += `   Deadline: ${item.deadline}\n`;
                content += `   ${item.help}\n`;
                if ('links' in item && item.links) {
                    (item.links as { name: string; url: string }[]).forEach((link: { name: string; url: string }) => {
                        content += `   - ${link.name}: ${link.url}\n`;
                    });
                }
                content += '\n';
            });
        });

        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${category.title.replace(/\s+/g, '_')}_Checklist.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleDownloadAll = () => {
        let content = `# Vāpas - Complete R2I Checklist\n`;
        content += `Your comprehensive guide to returning to India\n\n`;
        content += `Generated on: ${new Date().toLocaleDateString()}\n`;
        content += `=`.repeat(50) + '\n\n';

        Object.entries(CHECKLIST_DATA).forEach(([_key, category]) => {
            content += `# ${category.icon} ${category.title}\n`;
            content += `${category.description}\n\n`;

            category.sections.forEach(section => {
                content += `## ${section.name} (${section.importance})\n\n`;
                section.items.forEach(item => {
                    const checked = checkedItems.has(item.id) ? '[x]' : '[ ]';
                    content += `${checked} ${item.task}\n`;
                    if (item.deadline) content += `   ⏰ Deadline: ${item.deadline}\n`;
                    content += `   ℹ️ ${item.help}\n`;
                    if ('links' in item && item.links) {
                        (item.links as { name: string; url: string }[]).forEach((link: { name: string; url: string }) => {
                            content += `   🔗 ${link.name}: ${link.url}\n`;
                        });
                    }
                    content += '\n';
                });
            });
            content += '\n' + '-'.repeat(50) + '\n\n';
        });

        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Vapas_Complete_R2I_Checklist.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const currentCategory = CHECKLIST_DATA[activeCategory as keyof typeof CHECKLIST_DATA];

    return (
        <div className="checklist-container">
            {/* Header */}
            <div className="checklist-header">
                <div>
                    <h1>📋 R2I Master Checklist</h1>
                    <p>Track your progress across all aspects of returning to India</p>
                </div>
                <div className="header-actions">
                    <button className="action-btn" onClick={handleDownload}>
                        <Download size={18} />
                        Download Current
                    </button>
                    <button className="action-btn" onClick={handleDownloadAll}>
                        <Download size={18} />
                        Download All
                    </button>
                    <button className="action-btn print-btn" onClick={handlePrint}>
                        <Printer size={18} />
                        Print
                    </button>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="category-tabs">
                {Object.entries(CHECKLIST_DATA).map(([key, category]) => (
                    <button
                        key={key}
                        className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                        onClick={() => setActiveCategory(key)}
                    >
                        <span className="tab-icon">{category.icon}</span>
                        <span className="tab-title">{category.title}</span>
                        <span className="tab-progress">{calculateProgress(category)}%</span>
                    </button>
                ))}
            </div>

            {/* Category Content */}
            <div className="category-content" ref={printRef}>
                <div className="category-header">
                    <div className="category-info">
                        <h2>{currentCategory.icon} {currentCategory.title}</h2>
                        <p>{currentCategory.description}</p>
                    </div>
                    <div className="progress-ring">
                        <div className="progress-value">{calculateProgress(currentCategory)}%</div>
                        <div className="progress-label">Complete</div>
                    </div>
                </div>

                {/* Sections */}
                {currentCategory.sections.map((section) => (
                    <div key={section.name} className="section-card">
                        <div
                            className="section-header"
                            onClick={() => toggleSection(section.name)}
                        >
                            <div className="section-left">
                                {expandedSections.has(section.name) ?
                                    <ChevronDown size={20} /> :
                                    <ChevronRight size={20} />
                                }
                                <h3>{section.name}</h3>
                                <span
                                    className="importance-badge"
                                    style={{ background: getImportanceColor(section.importance) }}
                                >
                                    {section.importance}
                                </span>
                            </div>
                            <div className="section-progress">
                                {section.items.filter(i => checkedItems.has(i.id)).length} / {section.items.length}
                            </div>
                        </div>

                        {expandedSections.has(section.name) && (
                            <div className="section-items">
                                {section.items.map((item) => (
                                    <div key={item.id} className={`checklist-item ${checkedItems.has(item.id) ? 'completed' : ''}`}>
                                        <div className="item-main">
                                            <button
                                                className="check-btn"
                                                onClick={() => toggleCheck(item.id)}
                                            >
                                                {checkedItems.has(item.id) ?
                                                    <CheckCircle2 size={22} className="checked" /> :
                                                    <Circle size={22} />
                                                }
                                            </button>
                                            <div className="item-content">
                                                <span className="item-task">{item.task}</span>
                                                {item.deadline && (
                                                    <span className="item-deadline">
                                                        <Clock size={14} />
                                                        {item.deadline}
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                className="help-btn"
                                                onClick={() => toggleItemHelp(item.id)}
                                            >
                                                {expandedItems.has(item.id) ? <X size={18} /> : <Info size={18} />}
                                            </button>
                                        </div>

                                        {expandedItems.has(item.id) && (
                                            <div className="item-help">
                                                <div className="help-content">
                                                    <AlertCircle size={16} />
                                                    <p>{item.help}</p>
                                                </div>
                                                {'links' in item && item.links && (item.links as { name: string; url: string }[]).length > 0 && (
                                                    <div className="help-links">
                                                        {(item.links as { name: string; url: string }[]).map((link: { name: string; url: string }, lIndex: number) => (
                                                            <a
                                                                key={lIndex}
                                                                href={link.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="help-link"
                                                            >
                                                                <ExternalLink size={14} />
                                                                {link.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style>{`
                .checklist-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 24px;
                }

                .checklist-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .checklist-header h1 {
                    font-size: 28px;
                    background: linear-gradient(135deg, #6366f1, #a855f7);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0 0 4px 0;
                }

                .checklist-header p {
                    color: var(--text-secondary);
                    margin: 0;
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 16px;
                    background: rgba(99, 102, 241, 0.15);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .action-btn:hover {
                    background: rgba(99, 102, 241, 0.25);
                    transform: translateY(-1px);
                }

                .category-tabs {
                    display: flex;
                    gap: 8px;
                    overflow-x: auto;
                    padding-bottom: 8px;
                    margin-bottom: 24px;
                }

                .category-tab {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 16px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    color: var(--text-secondary);
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                }

                .category-tab:hover {
                    background: rgba(255, 255, 255, 0.08);
                    color: var(--text-primary);
                }

                .category-tab.active {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
                    border-color: rgba(99, 102, 241, 0.5);
                    color: var(--text-primary);
                }

                .tab-icon {
                    font-size: 18px;
                }

                .tab-progress {
                    background: rgba(99, 102, 241, 0.3);
                    padding: 2px 8px;
                    border-radius: 10px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .category-content {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 24px;
                }

                .category-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid var(--border-color);
                }

                .category-info h2 {
                    font-size: 24px;
                    margin: 0 0 8px 0;
                    color: var(--text-primary);
                }

                .category-info p {
                    color: var(--text-secondary);
                    margin: 0;
                }

                .progress-ring {
                    text-align: center;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
                    padding: 16px 24px;
                    border-radius: 12px;
                }

                .progress-value {
                    font-size: 32px;
                    font-weight: 700;
                    color: #6366f1;
                }

                .progress-label {
                    font-size: 12px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                }

                .section-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    margin-bottom: 16px;
                    overflow: hidden;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 20px;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .section-header:hover {
                    background: rgba(255, 255, 255, 0.03);
                }

                .section-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .section-left h3 {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                }

                .importance-badge {
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 11px;
                    font-weight: 600;
                    color: white;
                    text-transform: uppercase;
                }

                .section-progress {
                    font-size: 14px;
                    color: var(--text-muted);
                    font-weight: 500;
                }

                .section-items {
                    padding: 0 20px 16px;
                }

                .checklist-item {
                    padding: 12px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .checklist-item:last-child {
                    border-bottom: none;
                }

                .checklist-item.completed .item-task {
                    text-decoration: line-through;
                    opacity: 0.6;
                }

                .item-main {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                }

                .check-btn {
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    color: var(--text-muted);
                    transition: color 0.2s;
                    flex-shrink: 0;
                }

                .check-btn:hover {
                    color: #6366f1;
                }

                .check-btn .checked {
                    color: #22c55e;
                }

                .item-content {
                    flex: 1;
                }

                .item-task {
                    display: block;
                    font-size: 15px;
                    color: var(--text-primary);
                    margin-bottom: 4px;
                }

                .item-deadline {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 12px;
                    color: var(--text-muted);
                    background: rgba(255, 255, 255, 0.05);
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .help-btn {
                    background: none;
                    border: none;
                    padding: 4px;
                    cursor: pointer;
                    color: var(--text-muted);
                    transition: color 0.2s;
                    flex-shrink: 0;
                }

                .help-btn:hover {
                    color: #6366f1;
                }

                .item-help {
                    margin-top: 12px;
                    margin-left: 34px;
                    padding: 12px 16px;
                    background: rgba(99, 102, 241, 0.1);
                    border-left: 3px solid #6366f1;
                    border-radius: 0 8px 8px 0;
                }

                .help-content {
                    display: flex;
                    gap: 10px;
                    align-items: flex-start;
                }

                .help-content p {
                    margin: 0;
                    font-size: 14px;
                    color: var(--text-secondary);
                    line-height: 1.5;
                }

                .help-content svg {
                    color: #6366f1;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .help-links {
                    display: flex;
                    gap: 12px;
                    margin-top: 12px;
                    flex-wrap: wrap;
                }

                .help-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 13px;
                    color: #6366f1;
                    text-decoration: none;
                    padding: 4px 10px;
                    background: rgba(99, 102, 241, 0.15);
                    border-radius: 6px;
                    transition: all 0.2s;
                }

                .help-link:hover {
                    background: rgba(99, 102, 241, 0.25);
                }

                @media print {
                    .checklist-header,
                    .category-tabs,
                    .action-btn,
                    .help-btn,
                    .section-header svg {
                        display: none !important;
                    }

                    .checklist-container {
                        padding: 0;
                    }

                    .category-content {
                        border: none;
                        padding: 0;
                    }

                    .section-card {
                        break-inside: avoid;
                        border: 1px solid #ccc;
                    }

                    .section-items {
                        display: block !important;
                    }

                    .item-help {
                        display: block !important;
                    }

                    .checklist-item {
                        border-color: #eee;
                    }
                }

                @media (max-width: 768px) {
                    .checklist-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .action-btn {
                        flex: 1;
                        justify-content: center;
                    }

                    .category-header {
                        flex-direction: column;
                        gap: 16px;
                        text-align: center;
                    }

                    .tab-title {
                        display: none;
                    }

                    .category-tab {
                        padding: 10px 14px;
                    }
                }
            `}</style>
        </div>
    );
}
