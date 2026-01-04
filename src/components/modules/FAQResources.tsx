import { useState } from 'react';
import {
    ExternalLink,
    BookOpen,
    Building2,
    FileText,
    ShieldCheck,
    Plane,
    HelpCircle,
    Youtube,
    MessageCircle,
    Calculator,
    Globe,
    ChevronDown,
    ChevronUp,
    Link2
} from 'lucide-react';

// FAQ Data
const faqData = [
    {
        category: 'Seven Critical Pillars',
        questions: [
            {
                question: 'What is an RFC (Resident Foreign Currency) Account and why do I need one?',
                answer: `An RFC Account allows returning NRIs to hold foreign currency (USD, EUR, GBP, etc.) in India without mandatory conversion to INR:

Key Benefits:
• Funds are 100% repatriable without RBI restrictions
• Bypasses the $250,000/year LRS (Liberalized Remittance Scheme) limit
• Interest is tax-free during RNOR period (2-3 years)
• No time limit on holding funds
• Currency hedge against rupee fluctuations

Eligibility:
• Must have resided abroad for at least 1 year (182+ days)
• Returning to India for permanent settlement

Important: Open RFC account before converting NRE account. Once NRE is converted to resident savings, you cannot move funds back to RFC.`
            },
            {
                question: 'How can I get health insurance coverage for pre-existing conditions from Day 1?',
                answer: `Indian health insurance has Pre-Existing Disease (PED) waiting periods of up to 3 years. Strategic planning can give you full coverage upon return:

Strategy:
• Purchase Indian health insurance 3 years BEFORE returning to India
• Maintain the policy while abroad (pay annual premiums)
• By return date, PED waiting periods are exhausted

Key Facts (IRDAI 2024):
• Maximum PED waiting period: 3 years (reduced from 4)
• Initial waiting period: 30 days (except accidents)
• Some insurers offer "PED Buyback" riders to reduce waiting

Recommended Coverage:
• Sum Insured: ₹50 Lakhs - ₹1 Crore for family
• Type: Family Floater
• Premium: ₹25,000 - ₹75,000/year (90%+ cheaper than US)

Disclose all pre-existing conditions honestly to avoid claim rejection.`
            },
            {
                question: 'Can I receive US Social Security benefits while living in India?',
                answer: `Yes, you can receive US Social Security benefits in India if you qualify:

Eligibility:
• Need 40 credits (approximately 10 years of US work)
• Maximum 4 credits can be earned per year
• India is on the approved list for receiving SS payments

Important Considerations:
• No Totalization Agreement: India and US do NOT have a bilateral agreement
• Cannot combine India work credits with US credits
• Medicare is NOT available outside the US
• Benefits are paid in USD, deposited to your bank

Strategy:
• If you have 35-39 credits, consider working 1-2 more years to reach 40
• Each additional high-earning year increases your benefit amount
• File Form W-8BEN to certify non-resident status to SS Administration`
            },
            {
                question: 'Should I sell or rent my US property when returning to India?',
                answer: `Consider renting your US property initially (trial period) rather than selling immediately:

Benefits of Renting:
• Rental income is tax-free in India during RNOR period
• Keep option to return if India doesn't work out
• Continue building equity and appreciation
• Dollar income hedges against rupee depreciation

If Selling (FIRPTA Rules):
• Withholding rates: 0-15% depending on sale price and buyer's use
• File Form 8288-B before closing to request reduced withholding
• Long-term capital gains: 15-20% in US
• Section 121 Exclusion: Up to $250K/$500K if lived 2 of last 5 years

Important: Section 121 exclusion expires 3 years after moving out. Plan sale timing carefully. Cars have 165% import duty—never ship vehicles to India.`
            },
            {
                question: 'What happens if I don\'t link my PAN and Aadhaar?',
                answer: `PAN-Aadhaar linking is mandatory for returning NRIs becoming residents. Failure to link has serious consequences:

Consequences of Inoperative PAN:
• Higher TDS: 20% instead of applicable rate
• Cannot file Income Tax Returns
• New investments blocked (MF, stocks)
• Loan applications rejected
• Bank account restrictions possible

Who Must Link:
• All returning NRIs who become residents
• NRIs who already have Aadhaar (even if staying abroad)
• NOT required for NRIs with correct non-resident status in PAN records

How to Link:
1. Visit incometax.gov.in
2. Navigate to Link Aadhaar
3. Pay ₹1,000 fee (if past original deadline)
4. Complete OTP verification

For Aadhaar: NRIs with valid Indian passport can apply immediately at any Aadhaar Seva Kendra (182-day requirement waived).`
            }
        ]
    },
    {
        category: 'Banking & Finance',
        questions: [
            {
                question: 'What happens to my NRE/NRO accounts when I return to India?',
                answer: `Upon returning to India permanently, you cannot continue to hold NRE and NRO accounts in their current form:

• NRO Account: Must be converted to a resident savings account or closed
• NRE Account: Must be converted to a resident savings account, or funds can be transferred to a Resident Foreign Currency (RFC) account
• FCNR Account: Can be held until maturity, then must be transferred to a resident savings or RFC account

Banks may freeze accounts for non-compliance with RBI guidelines, and FEMA violations can attract penalties up to 3x the amount involved.`
            },
            {
                question: 'What are my options for my 401(k) when moving to India?',
                answer: `You have three main options for your 401(k) when returning to India:

1. Leave the funds in the 401k plan: Investments continue to grow tax-deferred
2. Roll over to an IRA: Offers more investment flexibility
3. Cash out: Provides immediate access but is least tax-efficient

Important: 401(k) withdrawals are subject to US income tax regardless of residence. The DTAA between US and India allows you to claim tax credits in India for taxes already paid in the US using Form W-8BEN (US) and Form 67 (India).`
            },
            {
                question: 'What is RNOR status and how can it help me?',
                answer: `Resident but Not Ordinarily Resident (RNOR) status provides significant tax benefits for the first 2-3 years after returning to India:

• Foreign income is generally exempt from Indian tax
• Only India-sourced income is taxable
• Global assets need not be disclosed in Indian tax returns
• Ideal window to strategically withdraw from foreign retirement accounts

To qualify, you typically need to have been an NRI for 9 of the 10 years preceding the current year OR have been in India for less than 730 days during the 7 years preceding the current year.`
            }
        ]
    },
    {
        category: 'Documentation',
        questions: [
            {
                question: 'What documents should I update when returning to India?',
                answer: `Key documents to update upon return:

• Aadhaar Card: Apply at any Aadhaar Seva Kendra (182-day rule removed for valid Indian passport holders)
• PAN Card: Update residential status from NRI to Resident using Form 49A
• Bank Accounts: Convert NRE/NRO to resident accounts and update address
• Voter ID: Register at local election office after establishing residency
• Driving License: Can use international license temporarily, then convert to Indian license
• Insurance: Get new health and life insurance in India`
            },
            {
                question: 'How do I apply for an Aadhaar card as a returning NRI?',
                answer: `NRIs with a valid Indian passport can apply for Aadhaar at any Aadhaar Seva Kendra:

• The previous 182-day residency requirement has been removed for NRIs with valid Indian passports
• OCI cardholders must still meet the 182-day residency requirement
• An Indian mobile number and email address are mandatory for enrollment
• Required documents: Valid Indian passport, proof of address in India
• Visit uidai.gov.in for the nearest enrollment center`
            }
        ]
    },
    {
        category: 'Customs & Shipping',
        questions: [
            {
                question: 'What is the Transfer of Residency (TR) scheme?',
                answer: `The Transfer of Residency (TR) scheme allows returning Indians to import personal effects with reduced customs duties:

Eligibility:
• Resided outside India for minimum 2 continuous years
• Total visits to India should not exceed 6 months during those 2 years
• Goods must be shipped within 1 month before or 3 months after arrival
• TR benefit can only be used once

Duty-Free Allowances:
• Used household goods (1+ year old): Up to ₹50,000
• Artificial jewelry: ₹50,000 (women) / ₹1,00,000 (men)

Dutiable Items:
• New articles: ~38% duty
• Vehicles: 165% (cars), 116% (motorcycles)
• Electronics (TVs): ~38% duty`
            },
            {
                question: 'What items are prohibited or restricted for import?',
                answer: `Prohibited/Restricted items for import to India:

• Narcotics and psychotropic substances
• Counterfeit currency and goods
• Firearms and ammunition (without special license)
• Satellite phones (require SACFA clearance)
• Drones (require DGCA approval)
• Certain animal products

High Duty Items:
• Alcohol and spirits: Very high import duties
• Gold jewelry: Subject to customs duty based on value
• Luxury cars: 165%+ duty
• Electronics: Varies by category

Declaration Required:
• Cash over $5,000 or equivalent
• Gold and jewelry beyond free allowance
• High-value electronics and gadgets`
            }
        ]
    },
    {
        category: 'Taxation',
        questions: [
            {
                question: 'How is my residential status for tax purposes determined?',
                answer: `Your tax residential status in India is determined by physical presence:

Resident: You are a resident if you are in India for:
• 182 days or more in the financial year, OR
• 60 days in current year + 365 days in preceding 4 years

RNOR (Resident but Not Ordinarily Resident):
• If you've been NRI for 9 of 10 preceding years, OR
• Stayed in India less than 730 days in 7 preceding years

Tax Implications:
• NRI: Only India-sourced income taxed
• RNOR: Only India-sourced income taxed (2-3 years)
• ROR: Worldwide income taxed in India`
            },
            {
                question: 'What is the Double Taxation Avoidance Agreement (DTAA)?',
                answer: `DTAA between India and US helps avoid being taxed twice on the same income:

Key Benefits:
• Tax credits: Taxes paid in one country can be claimed as credit in the other
• Reduced withholding: Lower tax rates on specific income types
• Clear residency rules: Tie-breaker rules for dual residency

How to Claim:
• In US: Use Form W-8BEN for reduced withholding
• In India: File Form 67 before ITR due date to claim foreign tax credit
• Keep documentation of all taxes paid abroad

Common Applications:
• 401(k) withdrawals
• Rental income from US property
• Capital gains on US investments
• Pension income`
            }
        ]
    }
];

// Official Government Links
const officialLinks = [
    {
        category: 'Identity & Documentation',
        icon: ShieldCheck,
        links: [
            { name: 'UIDAI - Aadhaar', url: 'https://uidai.gov.in', description: 'Aadhaar enrollment and services' },
            { name: 'Income Tax Portal', url: 'https://incometax.gov.in', description: 'PAN, ITR filing, tax payments' },
            { name: 'Passport Seva', url: 'https://passportindia.gov.in', description: 'Passport services and renewals' },
            { name: 'Ministry of External Affairs', url: 'https://mea.gov.in', description: 'OCI, consular services' }
        ]
    },
    {
        category: 'Banking & Finance',
        icon: Building2,
        links: [
            { name: 'Reserve Bank of India', url: 'https://rbi.org.in', description: 'FEMA regulations, NRI account rules' },
            { name: 'SEBI', url: 'https://sebi.gov.in', description: 'Investment regulations' },
            { name: 'GIFT City IFSC', url: 'https://giftgujarat.in', description: 'IFSC banking and investments' },
            { name: 'EPFO', url: 'https://epfindia.gov.in', description: 'Provident fund services' }
        ]
    },
    {
        category: 'Taxation',
        icon: FileText,
        links: [
            { name: 'Income Tax India', url: 'https://incometaxindiaefiling.gov.in', description: 'E-filing portal' },
            { name: 'ClearTax', url: 'https://cleartax.in', description: 'Tax filing and guides' },
            { name: 'Form 15CA/CB Info', url: 'https://incometax.gov.in', description: 'Remittance compliance' },
            { name: 'GST Portal', url: 'https://gst.gov.in', description: 'GST registration and filing' }
        ]
    },
    {
        category: 'Customs & Immigration',
        icon: Plane,
        links: [
            { name: 'CBIC Customs', url: 'https://cbic.gov.in', description: 'Customs duty and TR scheme' },
            { name: 'Indian Customs EDI', url: 'https://icegate.gov.in', description: 'Electronic filing' },
            { name: 'FRRO', url: 'https://indianfrro.gov.in', description: 'Foreigner registration' },
            { name: 'Bureau of Immigration', url: 'https://boi.gov.in', description: 'Immigration services' }
        ]
    }
];

// Helpful External Resources
const externalResources = [
    {
        category: 'YouTube Channels',
        icon: Youtube,
        color: '#FF0000',
        resources: [
            { name: 'NRI Money Clinic', url: 'https://youtube.com/@nrimoneyclinic', description: 'Financial planning for NRIs' },
            { name: 'NRI Shaala', url: 'https://youtube.com/@NRIShaala', description: 'R2I experiences and guidance' },
            { name: 'Desi Return', url: 'https://youtube.com/@desireturn', description: 'Return to India stories' },
            { name: 'CA Rachana Ranade', url: 'https://youtube.com/@CARachanaRanade', description: 'Indian investment education' }
        ]
    },
    {
        category: 'Online Communities',
        icon: MessageCircle,
        color: '#FF4500',
        resources: [
            { name: 'r/nri (Reddit)', url: 'https://reddit.com/r/nri', description: 'NRI discussions and advice' },
            { name: 'r/IndiaInvestments', url: 'https://reddit.com/r/IndiaInvestments', description: 'Indian investment community' },
            { name: 'Desi Return Community', url: 'https://facebook.com/groups/desireturn', description: 'Facebook group for returnees' },
            { name: 'NRI Return to India Forum', url: 'https://nrireturntoindia.com', description: 'Dedicated R2I forum' }
        ]
    },
    {
        category: 'Tools & Calculators',
        icon: Calculator,
        color: '#10B981',
        resources: [
            { name: 'SBNRI', url: 'https://sbnri.com', description: 'NRI banking and repatriation tools' },
            { name: 'SaveTaxs', url: 'https://savetaxs.com', description: 'NRI tax calculators' },
            { name: 'GoiNRI', url: 'https://goinri.com', description: 'R2I planning resources' },
            { name: 'NRI Repatriation Calculator', url: 'https://nri-repatriation.com', description: 'Fund transfer calculator' }
        ]
    },
    {
        category: 'Comprehensive Guides',
        icon: BookOpen,
        color: '#6366F1',
        resources: [
            { name: 'GetBelong', url: 'https://getbelong.com', description: 'NRI return checklist and guides' },
            { name: 'NRI Return to India', url: 'https://nrireturntoindia.com', description: 'Complete R2I roadmap' },
            { name: 'Karan Thukral', url: 'https://karanthukral.com', description: 'NRI financial planning' },
            { name: 'India Briefing', url: 'https://india-briefing.com', description: 'Business and legal guides' }
        ]
    }
];

export default function FAQResources() {
    const [activeTab, setActiveTab] = useState<'faq' | 'official' | 'resources'>('faq');
    const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

    const toggleQuestion = (id: string) => {
        const newExpanded = new Set(expandedQuestions);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedQuestions(newExpanded);
    };

    const headerStyle: React.CSSProperties = {
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)',
        borderRadius: '16px',
        padding: '32px',
        marginBottom: '32px',
        border: '1px solid rgba(99, 102, 241, 0.2)'
    };

    const tabStyle = (isActive: boolean): React.CSSProperties => ({
        padding: '12px 24px',
        background: isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
        border: isActive ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid transparent',
        borderRadius: '8px',
        color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
        cursor: 'pointer',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    });

    const cardStyle: React.CSSProperties = {
        background: 'rgba(30, 30, 40, 0.6)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
    };

    const linkCardStyle: React.CSSProperties = {
        background: 'rgba(40, 40, 55, 0.5)',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    return (
        <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <HelpCircle size={28} color="white" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                            FAQ & Resources
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
                            Essential information and links for NRIs returning to India
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <button style={tabStyle(activeTab === 'faq')} onClick={() => setActiveTab('faq')}>
                    <HelpCircle size={18} />
                    Frequently Asked Questions
                </button>
                <button style={tabStyle(activeTab === 'official')} onClick={() => setActiveTab('official')}>
                    <Building2 size={18} />
                    Official Government Links
                </button>
                <button style={tabStyle(activeTab === 'resources')} onClick={() => setActiveTab('resources')}>
                    <Globe size={18} />
                    Helpful Resources
                </button>
            </div>

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {faqData.map((category, catIndex) => (
                        <div key={catIndex} style={cardStyle}>
                            <h2 style={{
                                fontSize: '20px',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #6366F1, #8B5CF6)'
                                }} />
                                {category.category}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {category.questions.map((q, qIndex) => {
                                    const id = `${catIndex}-${qIndex}`;
                                    const isExpanded = expandedQuestions.has(id);
                                    return (
                                        <div
                                            key={qIndex}
                                            style={{
                                                background: 'rgba(50, 50, 65, 0.5)',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <button
                                                onClick={() => toggleQuestion(id)}
                                                style={{
                                                    width: '100%',
                                                    padding: '16px 20px',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    cursor: 'pointer',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '15px',
                                                    fontWeight: 500,
                                                    textAlign: 'left'
                                                }}
                                            >
                                                <span>{q.question}</span>
                                                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {isExpanded && (
                                                <div style={{
                                                    padding: '0 20px 20px 20px',
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '14px',
                                                    lineHeight: '1.8',
                                                    whiteSpace: 'pre-line'
                                                }}>
                                                    {q.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Official Links Tab */}
            {activeTab === 'official' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                    {officialLinks.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div key={index} style={cardStyle}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Icon size={22} color="#818CF8" />
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                                        {category.category}
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {category.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                ...linkCardStyle,
                                                textDecoration: 'none',
                                                color: 'inherit'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                                                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(40, 40, 55, 0.5)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                            }}
                                        >
                                            <Link2 size={16} color="#818CF8" />
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
                                                    {link.name}
                                                </div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                                                    {link.description}
                                                </div>
                                            </div>
                                            <ExternalLink size={14} color="var(--text-muted)" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                    {externalResources.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div key={index} style={cardStyle}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: `${category.color}20`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Icon size={22} color={category.color} />
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                                        {category.category}
                                    </h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {category.resources.map((resource, resIndex) => (
                                        <a
                                            key={resIndex}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                ...linkCardStyle,
                                                textDecoration: 'none',
                                                color: 'inherit'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = `${category.color}15`;
                                                e.currentTarget.style.borderColor = `${category.color}30`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(40, 40, 55, 0.5)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                            }}
                                        >
                                            <ExternalLink size={16} color={category.color} />
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
                                                    {resource.name}
                                                </div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                                                    {resource.description}
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Disclaimer */}
            <div style={{
                marginTop: '32px',
                padding: '16px 20px',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: '12px',
                fontSize: '13px',
                color: 'var(--text-secondary)'
            }}>
                <strong style={{ color: '#F59E0B' }}>Disclaimer:</strong> The links and information provided are for educational purposes only.
                Always verify information on official government websites and consult qualified professionals for specific legal, tax, and financial advice.
            </div>
        </div>
    );
}
