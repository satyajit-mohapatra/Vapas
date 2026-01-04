// Detailed information for all modules with expandable sections
// This data is used for expandable topic cards across all modules

export interface ModuleTopicDetail {
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

// =====================================================
// GLOBAL MIGRATION HUB TOPICS
// =====================================================

export const MIGRATION_HUB_TOPICS: ModuleTopicDetail[] = [
    {
        id: 'destination-selection',
        name: 'Destination Selection Framework',
        description: 'Strategic factors for choosing between India, UAE, UK, Canada, Singapore',
        icon: '🌍',
        keyAction: 'Evaluate each destination against your priorities: tax, visa, career, family',
        importance: 'Critical',
        overview: 'Choosing the right destination is the most consequential decision in global mobility. Each country offers different trade-offs between tax efficiency, career opportunities, quality of life, and family considerations. A systematic evaluation framework prevents emotional decisions that can cost millions.',
        benefits: [
            'Avoid costly destination mistakes',
            'Align move with long-term goals',
            'Optimize tax efficiency from day one',
            'Consider family needs holistically',
            'Plan career trajectory strategically'
        ],
        keyFacts: [
            { label: 'Top NRI Destinations', value: 'UAE, UK, Canada, Singapore, Australia' },
            { label: 'Tax-Free Options', value: 'UAE, Singapore (partial)' },
            { label: 'Best for Citizenship', value: 'UK, Canada, Australia' },
            { label: 'Best for Career', value: 'USA, UK, Singapore' },
            { label: 'Easiest Visa', value: 'UAE Golden Visa, Singapore EP' }
        ],
        steps: [
            'List your non-negotiable priorities (career, family, tax)',
            'Score each destination on key factors',
            'Research visa pathways and timelines',
            'Calculate total cost of living comparison',
            'Consider family needs (schools, healthcare, aging parents)'
        ],
        warnings: [
            'Don\'t prioritize tax savings over career growth',
            'Consider long-term citizenship pathway not just initial visa',
            'Factor in cultural adjustment time',
            'Some countries have exit taxes if you leave later'
        ],
        officialSources: [
            { name: 'UAE ICP', url: 'https://icp.gov.ae', description: 'UAE immigration and visa services' },
            { name: 'UK Home Office', url: 'https://gov.uk/visas-immigration', description: 'UK visa information' },
            { name: 'Singapore MOM', url: 'https://mom.gov.sg', description: 'Singapore work passes' }
        ]
    },
    {
        id: 'visa-pathways',
        name: 'Visa & Immigration Pathways',
        description: 'Understanding work permits, permanent residency, and citizenship routes',
        icon: '📋',
        keyAction: 'Map your complete immigration journey from visa to citizenship',
        importance: 'High',
        overview: 'Immigration pathways vary dramatically by country and personal circumstances. Understanding the complete journey from initial visa to potential citizenship helps avoid dead-ends and optimizes timing of major life decisions.',
        benefits: [
            'Clear timeline for each milestone',
            'Avoid visa category mistakes',
            'Plan career moves around visa renewals',
            'Understand citizenship eligibility',
            'Protect against policy changes'
        ],
        keyFacts: [
            { label: 'UAE Golden Visa', value: '10 years, $545K property' },
            { label: 'UK Skilled Worker', value: '5 years to ILR' },
            { label: 'Canada Express Entry', value: '3 years to citizenship' },
            { label: 'Singapore PR', value: '2-7 years processing' },
            { label: 'Australia PR', value: 'Points-based, 3+ years' }
        ],
        steps: [
            'Identify your visa eligibility for target countries',
            'Research processing times and costs',
            'Understand residence requirements',
            'Plan around physical presence requirements',
            'Prepare documents well in advance'
        ],
        warnings: [
            'Visa rules change frequently - verify current requirements',
            'Physical presence requirements can trap you',
            'Some visas don\'t lead to PR/citizenship',
            'Dual citizenship may not be allowed'
        ],
        officialSources: [
            { name: 'IRCC Canada', url: 'https://canada.ca/en/immigration-refugees-citizenship', description: 'Canadian immigration' },
            { name: 'Australia DHA', url: 'https://immi.homeaffairs.gov.au', description: 'Australian visas' },
            { name: 'NZ Immigration', url: 'https://immigration.govt.nz', description: 'New Zealand immigration' }
        ]
    },
    {
        id: 'tax-residency-planning',
        name: 'Tax Residency Planning',
        description: 'Strategic management of tax residency across jurisdictions',
        icon: '💰',
        keyAction: 'Track days meticulously and plan year-end travel strategically',
        importance: 'Critical',
        overview: 'Tax residency determines where you owe taxes on worldwide income. Each country has different rules (days-based, ties-based, or hybrid). Poor planning can result in double taxation or unexpected liabilities. Strategic management can legally minimize global tax burden.',
        benefits: [
            'Avoid unintended tax residency',
            'Minimize global tax burden legally',
            'Claim treaty benefits effectively',
            'Plan income timing around status changes',
            'Prevent double taxation'
        ],
        keyFacts: [
            { label: 'India Threshold', value: '182 days (or 60+ complex rule)' },
            { label: 'UK Statutory Test', value: 'Complex 3-tier test' },
            { label: 'UAE Residency', value: '183 days typical' },
            { label: 'US Substantial Presence', value: '183 days weighted formula' },
            { label: 'Singapore Tax Resident', value: '183 days in calendar year' }
        ],
        steps: [
            'Maintain detailed travel log with entry/exit stamps',
            'Understand each country\'s counting rules',
            'Plan year-end travel to optimize status',
            'Consider tie-breaker rules in treaties',
            'Get professional advice for complex situations'
        ],
        warnings: [
            'Some countries use calendar year, others fiscal year',
            'Physical presence isn\'t the only test',
            'Treaty tie-breakers may override domestic rules',
            'Intent and ties can matter more than days'
        ],
        officialSources: [
            { name: 'OECD Tax Treaties', url: 'https://oecd.org/tax/treaties', description: 'Model treaty and commentary' },
            { name: 'Income Tax India', url: 'https://incometaxindia.gov.in', description: 'Section 6 residency rules' },
            { name: 'HMRC', url: 'https://gov.uk/tax-foreign-income', description: 'UK tax residence' }
        ]
    }
];

// =====================================================
// REAL ESTATE TOPICS
// =====================================================

export const REAL_ESTATE_TOPICS: ModuleTopicDetail[] = [
    {
        id: 'city-comparison',
        name: 'City Comparison Framework',
        description: 'Data-driven approach to choosing between Indian metro cities',
        icon: '🏙️',
        keyAction: 'Score cities on objective criteria relevant to your situation',
        importance: 'High',
        overview: 'Each Indian metro offers different trade-offs between cost, lifestyle, career, and family considerations. A data-driven comparison prevents emotional decisions and helps identify the best fit for your specific needs.',
        benefits: [
            'Objective city comparison',
            'Cost of living clarity',
            'School quality assessment',
            'Career opportunity mapping',
            'Lifestyle fit evaluation'
        ],
        keyFacts: [
            { label: 'Bengaluru', value: 'Tech hub, traffic, cosmopolitan' },
            { label: 'Mumbai', value: 'Finance, expensive, fast-paced' },
            { label: 'Hyderabad', value: 'Growing tech, affordable, hot' },
            { label: 'Chennai', value: 'Traditional, medical hub, humid' },
            { label: 'Pune', value: 'IT, education, moderate' }
        ],
        steps: [
            'List your non-negotiable city requirements',
            'Research specific neighborhoods for short-listing',
            'Visit cities during different seasons',
            'Talk to recently-returned NRIs in each city',
            'Factor in proximity to extended family'
        ],
        warnings: [
            'Don\'t rely solely on internet research',
            'Summer/monsoon experience varies dramatically',
            'Traffic patterns affect daily quality of life',
            'Consider future not just current city trajectory'
        ],
        officialSources: [
            { name: 'MagicBricks', url: 'https://magicbricks.com', description: 'Property prices and trends' },
            { name: '99acres', url: 'https://99acres.com', description: 'Real estate listings' },
            { name: 'Housing.com', url: 'https://housing.com', description: 'Property search platform' }
        ]
    },
    {
        id: 'rent-vs-buy',
        name: 'Rent vs Buy Decision',
        description: 'Financial analysis for the first 2-3 years after return',
        icon: '🏠',
        keyAction: 'Rent initially while you stabilize and explore neighborhoods',
        importance: 'High',
        overview: 'The conventional wisdom of "always rent first" exists for good reason. The first 2-3 years after return involve significant life adjustments. Buying too soon can lock you into wrong location, wrong size, or wrong lifestyle. Renting provides flexibility during the critical adjustment period.',
        benefits: [
            'Flexibility to explore neighborhoods',
            'Time to understand local market',
            'Lower initial capital commitment',
            'Ability to adjust to lifestyle changes',
            'Option to return if needed'
        ],
        keyFacts: [
            { label: 'Recommended Rent Period', value: '2-3 years minimum' },
            { label: 'Rental Yield', value: '2-3% in metros (low)' },
            { label: 'Stamp Duty', value: '5-7% of property value' },
            { label: 'Registration', value: '1% additional' },
            { label: 'Maintenance', value: '₹8-15 per sq ft monthly' }
        ],
        steps: [
            'Calculate total cost of ownership vs renting',
            'Research multiple neighborhoods by renting',
            'Understand your actual space needs',
            'Evaluate appreciation potential vs yield',
            'Consider future life changes (kids, parents)'
        ],
        warnings: [
            'Low rental yields mean buying is for appreciation not income',
            'Liquidity is poor - selling takes 6-12 months',
            'Market can correct 10-20% in downturns',
            'Maintenance and society issues can surprise'
        ],
        officialSources: [
            { name: 'NoBroker', url: 'https://nobroker.in', description: 'Commission-free rentals' },
            { name: 'Square Yards', url: 'https://squareyards.com', description: 'Property analytics' },
            { name: 'PropTiger', url: 'https://proptiger.com', description: 'Property research' }
        ]
    },
    {
        id: 'relocation-logistics',
        name: 'Relocation Logistics',
        description: 'Shipping, customs, and household goods transfer',
        icon: '📦',
        keyAction: 'Plan shipment 3-6 months ahead, use TR rules strategically',
        importance: 'High',
        overview: 'Physical relocation of household goods requires careful planning around Transfer of Residence (TR) rules to minimize customs duty. Understanding what\'s duty-free vs taxable, and timing of shipments, can save lakhs in duties.',
        benefits: [
            'Minimize customs duty legally',
            'Duty-free allowances on used goods',
            'Strategic timing of shipments',
            'Smooth transition of belongings',
            'Professional handling of logistics'
        ],
        keyFacts: [
            { label: '20ft Container', value: '$3,500-4,500 to India' },
            { label: '40ft Container', value: '$5,500-7,000 to India' },
            { label: 'TR Eligibility', value: '2 years abroad minimum' },
            { label: 'Duty on Cars', value: '165% - rarely worth shipping' },
            { label: 'Electronics Duty', value: '38.5% on restricted items' }
        ],
        steps: [
            'Create detailed inventory of items to ship',
            'Separate duty-free vs dutiable items',
            'Get quotes from international movers',
            'Prepare TR documentation from consulate',
            'Coordinate with customs clearing agent'
        ],
        warnings: [
            'Don\'t ship cars - 165% duty makes it prohibitive',
            'Some electronics have high duty rates',
            'Antiques and art require special permits',
            'Insurance is essential for international shipping'
        ],
        officialSources: [
            { name: 'Indian Customs', url: 'https://cbic.gov.in', description: 'Customs duty rates and TR rules' },
            { name: 'DGFT', url: 'https://dgft.gov.in', description: 'Import regulations' },
            { name: 'Indian Missions', url: 'https://mea.gov.in', description: 'Consulate services for TR certificate' }
        ]
    }
];

// =====================================================
// HEALTHCARE TOPICS
// =====================================================

export const HEALTHCARE_TOPICS: ModuleTopicDetail[] = [
    {
        id: 'insurance-strategy',
        name: 'Health Insurance Strategy',
        description: 'Navigating waiting periods, coverage, and provider selection',
        icon: '🏥',
        keyAction: 'Buy Indian health insurance 3 years before return to exhaust waiting periods',
        importance: 'Critical',
        overview: 'Indian health insurance has pre-existing disease (PED) waiting periods up to 3 years. Strategic pre-purchase while abroad ensures full coverage from Day 1 upon return. This is one of the most overlooked aspects of return planning.',
        benefits: [
            'Full coverage from Day 1 in India',
            'Pre-existing conditions covered',
            'Premiums 90% cheaper than US',
            'Cashless network across India',
            'No coverage gap for chronic conditions'
        ],
        keyFacts: [
            { label: 'PED Waiting Period', value: 'Up to 3 years (now 3 max per IRDAI)' },
            { label: 'Strategy', value: 'Buy 3 years before return' },
            { label: 'Recommended Cover', value: '₹50 Lakhs - ₹1 Crore' },
            { label: 'Annual Premium', value: '₹25K-75K vs $8K-22K US' },
            { label: 'Mental Health', value: 'Now mandatory per IRDAI 2024' }
        ],
        steps: [
            'Research policies available to NRIs',
            'Disclose ALL pre-existing conditions honestly',
            'Buy policy 3 years before planned return',
            'Pay premiums annually to maintain coverage',
            'Consider super top-up for additional coverage'
        ],
        warnings: [
            'Non-disclosure can void claims and policy',
            'Most policies only cover treatment in India',
            'OPD expenses usually not covered',
            'Day-1 coverage clauses have limitations'
        ],
        officialSources: [
            { name: 'IRDAI', url: 'https://irdai.gov.in', description: 'Insurance regulator guidelines' },
            { name: 'PolicyBazaar', url: 'https://policybazaar.com', description: 'Compare health insurance' },
            { name: 'Niva Bupa', url: 'https://nivabupa.com', description: 'NRI health plans' }
        ]
    },
    {
        id: 'medical-ecosystem',
        name: 'Medical Ecosystem Understanding',
        description: 'Navigating hospitals, specialists, and care standards',
        icon: '⚕️',
        keyAction: 'Research hospital networks and establish relationships before move',
        importance: 'High',
        overview: 'India\'s medical ecosystem is world-class in major cities but varies significantly in quality and cost. Understanding the landscape of corporate hospitals, specialist clinics, and diagnostic centers helps you access quality care efficiently.',
        benefits: [
            'Access to world-class specialists',
            'Cost 60-80% lower than US',
            'Growing telemedicine options',
            'Modern diagnostic facilities',
            'Medical tourism infrastructure'
        ],
        keyFacts: [
            { label: 'Top Hospital Chains', value: 'Apollo, Fortis, Max, Narayana' },
            { label: 'Specialist Consult', value: '₹500-2,000 vs $200-500 US' },
            { label: 'MRI Scan', value: '₹5,000-15,000 vs $1,000-3,000 US' },
            { label: 'Bypass Surgery', value: '₹3-5 Lakhs vs $100K+ US' },
            { label: 'Dental Crown', value: '₹5,000-15,000 vs $1,000+ US' }
        ],
        steps: [
            'Research hospitals in your target city',
            'Identify specialists for ongoing conditions',
            'Understand cashless network of your insurance',
            'Register for telemedicine platforms',
            'Build relationship with primary care doctor'
        ],
        warnings: [
            'Quality varies significantly between hospitals',
            'Emergency care may not match Western standards everywhere',
            'Blood bank safety can be a concern',
            'Don\'t assume all facilities are equally equipped'
        ],
        officialSources: [
            { name: 'Apollo Hospitals', url: 'https://apollohospitals.com', description: 'Hospital network' },
            { name: 'Practo', url: 'https://practo.com', description: 'Doctor search and telemedicine' },
            { name: 'NHM', url: 'https://nhm.gov.in', description: 'National Health Mission' }
        ]
    },
    {
        id: 'mental-health',
        name: 'Mental Health Resources',
        description: 'Therapy, counseling, and adjustment support',
        icon: '🧠',
        keyAction: 'Don\'t underestimate adjustment stress - establish support early',
        importance: 'High',
        overview: 'Return migration involves significant psychological adjustment often underestimated by planners. Reverse culture shock, identity challenges, and family dynamics shifts can affect mental health. Having support systems in place is crucial.',
        benefits: [
            'Growing therapy ecosystem in India',
            'Online therapy options available',
            'Significantly lower costs than US',
            'Culturally aware practitioners exist',
            'Psychiatry well-developed in metros'
        ],
        keyFacts: [
            { label: 'Therapy Session', value: '₹1,500-5,000 vs $150-300 US' },
            { label: 'Online Platforms', value: 'Amaha, YourDost, Practo' },
            { label: 'Psychiatry', value: 'Available in all metros' },
            { label: 'Insurance Coverage', value: 'Now mandatory for mental health' },
            { label: 'Adjustment Period', value: 'Expect 12-18 months' }
        ],
        steps: [
            'Research therapists in your target city',
            'Consider online therapy during transition',
            'Join returnee support groups',
            'Prepare family for adjustment challenges',
            'Build social network proactively'
        ],
        warnings: [
            'Stigma still exists in some circles',
            'Quality varies - check credentials',
            'Long wait times for good practitioners',
            'Don\'t delay seeking help'
        ],
        officialSources: [
            { name: 'iCall', url: 'https://icallhelpline.org', description: 'Free mental health support' },
            { name: 'NIMHANS', url: 'https://nimhans.ac.in', description: 'Premier mental health institute' },
            { name: 'Amaha', url: 'https://amahahealth.com', description: 'Digital mental health platform' }
        ]
    }
];

// =====================================================
// CAREER HUB TOPICS
// =====================================================

export const CAREER_HUB_TOPICS: ModuleTopicDetail[] = [
    {
        id: 'job-market-2025',
        name: 'India Job Market 2025',
        description: 'Understanding demand, sectors, and compensation trends',
        icon: '📈',
        keyAction: 'Research your specific role\'s demand before committing to return',
        importance: 'Critical',
        overview: 'The Indian job market in 2025 is highly variable by sector, role, and city. While some skills are in extreme demand with premium compensation, others face significant competition. Understanding this landscape prevents career setbacks.',
        benefits: [
            'Realistic compensation expectations',
            'High-demand sector identification',
            'Remote work opportunity mapping',
            'Startup ecosystem access',
            'Global company India offices'
        ],
        keyFacts: [
            { label: 'Hot Sectors', value: 'AI/ML, FinTech, SaaS, EV' },
            { label: 'Salary Growth', value: '8-15% annually for tech' },
            { label: 'GCC Employment', value: '1.9M+ and growing' },
            { label: 'Remote Options', value: 'Post-COVID much improved' },
            { label: 'Startup Funding', value: 'Still strong for quality' }
        ],
        steps: [
            'Research your role\'s demand on LinkedIn/Naukri',
            'Connect with recruiters in your field',
            'Understand typical CTC structures',
            'Consider GCC roles for global company benefits',
            'Evaluate startup vs established company fit'
        ],
        warnings: [
            'Headline salaries often misleading (CTC vs take-home)',
            'Competition intense for senior roles',
            'Some US skills don\'t transfer directly',
            'Network matters more than cold applications'
        ],
        officialSources: [
            { name: 'LinkedIn India', url: 'https://linkedin.com/jobs', description: 'Job search and salary insights' },
            { name: 'Naukri', url: 'https://naukri.com', description: 'India\'s largest job portal' },
            { name: 'Glassdoor India', url: 'https://glassdoor.co.in', description: 'Company reviews and salaries' }
        ]
    },
    {
        id: 'ctc-structure',
        name: 'Understanding Indian CTC',
        description: 'Decoding Cost-to-Company vs take-home pay',
        icon: '💴',
        keyAction: 'Always calculate net take-home, not headline CTC',
        importance: 'High',
        overview: 'Indian compensation is expressed as CTC (Cost to Company) which includes employer contributions, deferred benefits, and variable pay. Actual take-home can be 50-65% of headline CTC. Understanding this prevents expensive misunderstandings during negotiation.',
        benefits: [
            'Accurate compensation comparison',
            'Effective negotiation leverage',
            'Tax planning optimization',
            'Benefit structure understanding',
            'Avoid nasty surprises'
        ],
        keyFacts: [
            { label: 'Take-Home', value: '50-65% of CTC typically' },
            { label: 'PF Contribution', value: '24% of basic (employer+employee)' },
            { label: 'Gratuity', value: '4.8% of basic' },
            { label: 'Variable Pay', value: '15-30% typical for senior roles' },
            { label: 'Stock Options', value: 'Taxed at vest and sale' }
        ],
        steps: [
            'Request detailed CTC breakup before accepting',
            'Calculate take-home after all deductions',
            'Understand variable pay history (actual vs promised)',
            'Factor in India tax rates (30%+ at high incomes)',
            'Compare on take-home basis, not CTC'
        ],
        warnings: [
            'Never compare India CTC to US salary directly',
            'Variable pay may not pay out fully',
            'Some companies inflate CTC with notional benefits',
            'ESOPs have complex tax treatment in India'
        ],
        officialSources: [
            { name: 'ClearTax', url: 'https://cleartax.in/s/salary-income', description: 'Salary taxation guide' },
            { name: 'EPFO', url: 'https://epfindia.gov.in', description: 'Provident Fund info' },
            { name: 'Income Tax India', url: 'https://incometaxindia.gov.in', description: 'Tax slabs and rates' }
        ]
    },
    {
        id: 'network-building',
        name: 'Network Building Strategy',
        description: 'Building professional network for India career success',
        icon: '🤝',
        keyAction: 'Start networking 12 months before return',
        importance: 'High',
        overview: 'Professional networking in India follows different patterns than the US. Referrals carry more weight, relationships take longer to build, and alumni networks are powerful. Starting early and building genuine connections is essential for career success.',
        benefits: [
            'Access to hidden job market',
            'Referral-based job applications',
            'Industry insights and trends',
            'Mentorship opportunities',
            'Business partnerships'
        ],
        keyFacts: [
            { label: 'Referral Hire Rate', value: '40-60% of senior roles' },
            { label: 'LinkedIn India', value: '100M+ members' },
            { label: 'Alumni Networks', value: 'IIT/IIM networks very active' },
            { label: 'Industry Events', value: 'Returning post-COVID' },
            { label: 'WhatsApp Groups', value: 'Very active for industry' }
        ],
        steps: [
            'Update LinkedIn with India-focused content',
            'Reconnect with old IIT/IIM/college networks',
            'Join relevant industry WhatsApp groups',
            'Attend virtual then in-person events',
            'Offer value before asking for help'
        ],
        warnings: [
            'Aggressive reaching out can backfire',
            'Relationship building takes time in India',
            'Quality over quantity in connections',
            'Be patient with response times'
        ],
        officialSources: [
            { name: 'LinkedIn', url: 'https://linkedin.com', description: 'Professional networking' },
            { name: 'Alumni Networks', url: 'https://iitmadras.alumni.net', description: 'Example alumni network' },
            { name: 'Meetup', url: 'https://meetup.com', description: 'Professional meetups in India' }
        ]
    }
];

// =====================================================
// EDUCATION PLANNING TOPICS
// =====================================================

export const EDUCATION_TOPICS: ModuleTopicDetail[] = [
    {
        id: 'school-board-selection',
        name: 'School Board Selection',
        description: 'CBSE, ICSE, IB, IGCSE - choosing the right curriculum',
        icon: '📚',
        keyAction: 'Match board to child\'s needs and your long-term plans',
        importance: 'Critical',
        overview: 'India offers multiple curriculum boards with distinct philosophies. CBSE is exam-focused and nationally recognized, ICSE emphasizes language and analysis, IB focuses on holistic development, and IGCSE offers international recognition. The right choice depends on your child\'s learning style and future plans.',
        benefits: [
            'Curriculum fit for learning style',
            'Continuity with previous education',
            'University acceptance alignment',
            'Special needs accommodation',
            'Cost-quality balance'
        ],
        keyFacts: [
            { label: 'CBSE', value: 'National, competitive exams focus' },
            { label: 'ICSE', value: 'English-heavy, analytical' },
            { label: 'IB', value: 'Global, inquiry-based, expensive' },
            { label: 'IGCSE', value: 'International, flexible' },
            { label: 'State Boards', value: 'Telugu, Tamil etc - regional focus' }
        ],
        steps: [
            'Assess child\'s current curriculum and adaptation needs',
            'Research boards matching your future plans',
            'Visit schools of each type in your city',
            'Consider special needs provisions if applicable',
            'Factor in future college/country plans'
        ],
        warnings: [
            'IB to CBSE transition can be challenging',
            'CBSE pressure increases significantly in 10th/12th',
            'Not all IB schools are equally good',
            'Board change mid-school is disruptive'
        ],
        officialSources: [
            { name: 'CBSE', url: 'https://cbse.gov.in', description: 'Central Board of Secondary Education' },
            { name: 'CISCE', url: 'https://cisce.org', description: 'ICSE/ISC board' },
            { name: 'IB', url: 'https://ibo.org', description: 'International Baccalaureate' }
        ]
    },
    {
        id: 'special-needs',
        name: 'Special Educational Needs',
        description: 'Support resources for children with learning differences',
        icon: '💙',
        keyAction: 'Research school SEN provisions BEFORE finalizing city',
        importance: 'Critical',
        overview: 'India\'s special education ecosystem is rapidly improving but varies dramatically by city and school. IB and some progressive ICSE schools offer better support. Therapy resources (OT, speech, behavioral) are concentrated in major metros. Planning around SEN needs should drive city selection.',
        benefits: [
            'Growing therapy ecosystem',
            'Much lower therapy costs',
            'Some excellent inclusive schools',
            'Shadow teacher options available',
            'Improving awareness and acceptance'
        ],
        keyFacts: [
            { label: 'Therapy Cost', value: '₹500-2000 per session vs $150+ US' },
            { label: 'Best Cities', value: 'Bengaluru, Mumbai, Hyderabad' },
            { label: 'RCI Therapists', value: 'Rehabilitation Council of India certified' },
            { label: 'NIEPID', value: 'National Institute for ID support' },
            { label: 'Shadow Teachers', value: '₹15-30K/month' }
        ],
        steps: [
            'Research SEN-friendly schools in target cities',
            'Identify therapy centers and specialists',
            'Contact schools about specific accommodation needs',
            'Visit and meet SEN coordinators in person',
            'Build relationship with therapists before move'
        ],
        warnings: [
            'Many schools reject SEN children - be prepared',
            'Quality of support varies wildly',
            'Diagnosis documentation from US may not be accepted',
            'Inclusion is still developing culturally'
        ],
        officialSources: [
            { name: 'NIEPID', url: 'https://niepid.nic.in', description: 'National Institute for Intellectual Disabilities' },
            { name: 'RCI', url: 'https://rehabcouncil.nic.in', description: 'Therapy professional registry' },
            { name: 'Autism Network', url: 'https://autismindia.org', description: 'Autism resources' }
        ]
    },
    {
        id: 'transition-support',
        name: 'Child Transition Support',
        description: 'Helping children adapt to Indian education system',
        icon: '🌟',
        keyAction: 'Prepare children emotionally well before the move',
        importance: 'High',
        overview: 'Children face significant adjustment challenges when moving from Western to Indian education systems. Academic pace, teaching style, peer dynamics, and cultural expectations differ substantially. Proactive preparation and ongoing support smooth the transition.',
        benefits: [
            'Reduced anxiety and resistance',
            'Faster academic integration',
            'Better peer connection',
            'Cultural adaptation support',
            'Maintained mental health'
        ],
        keyFacts: [
            { label: 'Adjustment Period', value: '6-12 months typical' },
            { label: 'Academic Gap', value: 'Math ahead, English writing behind' },
            { label: 'Social Dynamics', value: 'Different from US schools' },
            { label: 'Homework Load', value: 'Significantly more' },
            { label: 'After-School Tutoring', value: 'Very common in India' }
        ],
        steps: [
            'Start conversations about India 6+ months ahead',
            'Visit schools together if possible',
            'Connect with other returnee families',
            'Maintain some continuity (hobbies, friendships)',
            'Be patient with adjustment timeline'
        ],
        warnings: [
            'Don\'t dismiss children\'s concerns',
            'Academic pressure can be overwhelming',
            'Bullying for being "different" can occur',
            'Monitor mental health closely'
        ],
        officialSources: [
            { name: 'Expatriate Education', url: 'https://expatexplorer.hsbc.com', description: 'Expat education surveys' },
            { name: 'Third Culture Kids', url: 'https://tckworld.com', description: 'TCK resources' },
            { name: 'School Counseling', url: 'https://counseling.org', description: 'Child counseling resources' }
        ]
    }
];

// =====================================================
// GIFT CITY TOPICS
// =====================================================

export const GIFT_CITY_TOPICS: ModuleTopicDetail[] = [
    {
        id: 'gift-city-basics',
        name: 'GIFT City Fundamentals',
        description: 'Understanding India\'s International Financial Services Centre',
        icon: '🏛️',
        keyAction: 'Evaluate GIFT City for tax-efficient investment structures',
        importance: 'High',
        overview: 'GIFT City (Gujarat International Finance Tec-City) is India\'s first International Financial Services Centre (IFSC). It offers a unique regulatory environment with significant tax benefits, designed to compete with Singapore and Dubai for international financial business.',
        benefits: [
            'No capital gains tax on listed securities',
            'GST exemption on financial services',
            'USD/INR flexibility',
            'Relaxed FEMA regulations',
            'Access to international insurance'
        ],
        keyFacts: [
            { label: 'Location', value: 'Gandhinagar, Gujarat' },
            { label: 'Regulator', value: 'IFSCA (unified)' },
            { label: 'Currency', value: 'Foreign currency transactions allowed' },
            { label: 'Tax Holiday', value: '10 years for IFSC units' },
            { label: 'MAT', value: '9% vs 15% elsewhere' }
        ],
        steps: [
            'Understand if your investment profile fits GIFT City',
            'Research fund options available in GIFT City',
            'Consult with GIFT City focused advisors',
            'Compare with direct India and US investment options',
            'Consider for dollar-denominated retirement savings'
        ],
        warnings: [
            'Ecosystem still developing',
            'Limited product range currently',
            'Specialized knowledge needed',
            'Regulatory clarity still emerging'
        ],
        officialSources: [
            { name: 'IFSCA', url: 'https://ifsca.gov.in', description: 'International Financial Services Centres Authority' },
            { name: 'GIFT City', url: 'https://giftgujarat.in', description: 'Official GIFT City website' },
            { name: 'NSE IFSC', url: 'https://nseifsc.com', description: 'Stock exchange in GIFT City' }
        ]
    },
    {
        id: 'investment-structures',
        name: 'Investment Structures',
        description: 'Fund options and account structures in GIFT City',
        icon: '💎',
        keyAction: 'Consider GIFT City for tax-efficient India equity exposure',
        importance: 'Medium',
        overview: 'GIFT City offers various investment structures including Alternative Investment Funds (AIFs), Portfolio Management Services (PMS), and direct trading on NSE IFSC. These provide tax-efficient vehicles for both NRIs and returning Indians to access Indian markets.',
        benefits: [
            'No capital gains tax on LTCG',
            'USD-denominated investments',
            'PFIC-efficient for US persons',
            'Lower tax on debt investments',
            'Repatriation flexibility'
        ],
        keyFacts: [
            { label: 'AIF Categories', value: 'Cat I, II, III available' },
            { label: 'Minimum Investment', value: '₹1 Crore typically for AIFs' },
            { label: 'Trading Hours', value: 'Extended for global investors' },
            { label: 'Custody', value: 'International custodians available' },
            { label: 'Broker Options', value: 'Growing number of IFSC brokers' }
        ],
        steps: [
            'Assess investment amount and objectives',
            'Research AIF options if high net worth',
            'Compare NSE IFSC vs direct NSE investment',
            'Understand tax implications for your status',
            'Work with GIFT City experienced advisor'
        ],
        warnings: [
            'High minimums for most structured products',
            'Liquidity may be limited',
            'Not suitable for small investors',
            'Complexity requires professional guidance'
        ],
        officialSources: [
            { name: 'NSE IFSC', url: 'https://nseifsc.com', description: 'Exchange products and listings' },
            { name: 'BSE IIE', url: 'https://bseindia.com/iie', description: 'BSE International Exchange' },
            { name: 'SEBI', url: 'https://sebi.gov.in', description: 'Securities regulator' }
        ]
    }
];

// Importance color mapping
export const MODULE_IMPORTANCE_COLORS = {
    Critical: { bg: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', label: '🔴 Critical' },
    High: { bg: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B', label: '🟠 High Priority' },
    Medium: { bg: 'rgba(14, 165, 233, 0.15)', color: '#0EA5E9', label: '🟡 Medium Priority' }
};
