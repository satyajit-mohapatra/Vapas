import { useState } from 'react';
import {
    Briefcase,
    TrendingUp,
    DollarSign,
    AlertCircle,
    CheckCircle2,
    Building2,
    Users,
    Calendar,
    Target,
    Lightbulb
} from 'lucide-react';
import { SALARY_BENCHMARKS, CAREER_COMPREHENSIVE } from '../../data/constants';

type ActiveTab = 'overview' | 'salaries' | 'ctc' | 'challenges' | 'networking';

export default function CareerHub() {
    const [activeTab, setActiveTab] = useState<ActiveTab>('overview');

    const tabs = [
        { id: 'overview', label: 'Job Market', icon: TrendingUp },
        { id: 'salaries', label: 'Salary Guide', icon: DollarSign },
        { id: 'ctc', label: 'CTC Explained', icon: Target },
        { id: 'challenges', label: 'Challenges', icon: AlertCircle },
        { id: 'networking', label: 'Networking', icon: Users },
    ];

    const renderTab = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'salaries': return <SalariesTab />;
            case 'ctc': return <CTCTab />;
            case 'challenges': return <ChallengesTab />;
            case 'networking': return <NetworkingTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Briefcase style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Career Hub
                    </h1>
                    <p className="page-description">
                        Navigate India's job market. Salary benchmarks, CTC breakdown, negotiation strategies,
                        and career transition guidance for returning NRIs.
                    </p>

                    {/* Tab Navigation */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        marginTop: '32px',
                        borderBottom: '1px solid var(--border-color)',
                        overflowX: 'auto'
                    }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as ActiveTab)}
                                style={{
                                    padding: '0 0 16px 0',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: activeTab === tab.id ? '3px solid var(--accent-primary)' : '3px solid transparent',
                                    color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-muted)',
                                    fontWeight: activeTab === tab.id ? '600' : '500',
                                    cursor: 'pointer',
                                    fontSize: '15px',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '40px 24px' }}>
                {renderTab()}
            </div>
        </div>
    );
}

// Overview Tab - Job Market 2025
function OverviewTab() {
    const getDemandColor = (demand: string) => {
        switch (demand) {
            case 'Very High': return 'var(--accent-success)';
            case 'High': return 'var(--accent-primary)';
            case 'Medium-High': return 'var(--accent-info)';
            default: return 'var(--text-muted)';
        }
    };

    return (
        <div className="animate-fadeIn">
            {/* Key Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent-success)' }}>9%</div>
                    <div className="stat-label">2025 Hiring Growth</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent-primary)' }}>15%</div>
                    <div className="stat-label">IT Sector Growth</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--india-saffron)' }}>25-40%</div>
                    <div className="stat-label">NRI Salary Premium</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent-info)' }}>60%</div>
                    <div className="stat-label">CTC Take-Home</div>
                </div>
            </div>

            {/* PPP Reality Check */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderLeft: '4px solid var(--accent-warning)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <AlertCircle size={24} style={{ color: 'var(--accent-warning)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent-warning)' }}>
                        The "Global Pay" Reality Check
                    </h3>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {SALARY_BENCHMARKS.note}
                </p>
            </div>

            {/* Hot Sectors */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <TrendingUp size={24} style={{ color: 'var(--accent-success)' }} />
                Hot Sectors for NRIs (2025)
            </h2>
            <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
                {CAREER_COMPREHENSIVE.jobMarket2025.hotSectors.map((sector, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                            <div style={{ flex: '1', minWidth: '200px' }}>
                                <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px' }}>{sector.sector}</h3>
                                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{sector.nriAdvantage}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--accent-success)' }}>{sector.growth}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Growth</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{
                                        padding: '6px 14px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        background: `${getDemandColor(sector.demand)}20`,
                                        color: getDemandColor(sector.demand)
                                    }}>
                                        {sector.demand}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* GCC Opportunity */}
            <div className="glass-card" style={{ padding: '28px', borderTop: '4px solid var(--accent-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Building2 size={24} style={{ color: 'var(--accent-primary)' }} />
                    <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Global Capability Centers (GCCs): The Sweet Spot</h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    {CAREER_COMPREHENSIVE.gccOpportunity.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {CAREER_COMPREHENSIVE.gccOpportunity.benefits.map((benefit, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 14px',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '20px',
                            fontSize: '13px'
                        }}>
                            <CheckCircle2 size={14} style={{ color: 'var(--accent-success)' }} />
                            {benefit}
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '16px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Top GCCs in India:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {CAREER_COMPREHENSIVE.gccOpportunity.topGCCs.map((company, idx) => (
                            <span key={idx} style={{
                                padding: '6px 14px',
                                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-info))',
                                color: 'white',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600'
                            }}>
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Salaries Tab
function SalariesTab() {
    return (
        <div className="animate-fadeIn">
            {/* NRI Premium */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderLeft: '4px solid var(--accent-success)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-success)' }}>
                    NRI Salary Premium
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-success)', fontSize: '22px' }}>
                            {CAREER_COMPREHENSIVE.salaryPremium.years8to12}
                        </div>
                        <div className="stat-label">8-12 Years Experience</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-primary)', fontSize: '22px' }}>
                            {CAREER_COMPREHENSIVE.salaryPremium.years5to8}
                        </div>
                        <div className="stat-label">5-8 Years Experience</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-info)', fontSize: '22px' }}>
                            {CAREER_COMPREHENSIVE.salaryPremium.under5years}
                        </div>
                        <div className="stat-label">Under 5 Years</div>
                    </div>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px' }}>
                    {CAREER_COMPREHENSIVE.salaryPremium.note}
                </p>
            </div>

            {/* Role-wise Salaries */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <DollarSign size={24} style={{ color: 'var(--accent-primary)' }} />
                Salary Benchmarks by Role (2025)
            </h2>
            <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
                {SALARY_BENCHMARKS.roles.map((role, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                            <h3 style={{ fontSize: '17px', fontWeight: '700' }}>{role.title}</h3>
                            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>India Range</div>
                                    <div style={{ fontWeight: '700', color: 'var(--india-saffron)', fontSize: '16px' }}>{role.indianRange}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>USD Equivalent</div>
                                    <div style={{ fontWeight: '600', fontSize: '16px' }}>{role.usdEquivalent}</div>
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <TrendingUp size={14} style={{ color: 'var(--accent-info)' }} />
                            {role.savingsImpact}
                        </p>
                    </div>
                ))}
            </div>

            {/* Negotiation Tips */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Lightbulb size={24} style={{ color: 'var(--accent-warning)' }} />
                Negotiation Strategies
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {CAREER_COMPREHENSIVE.negotiationTips.map((item, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '20px', display: 'flex', gap: '14px' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '700',
                            color: 'white',
                            fontSize: '14px',
                            flexShrink: 0
                        }}>
                            {idx + 1}
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{item.tip}</h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// CTC Tab
function CTCTab() {
    return (
        <div className="animate-fadeIn">
            {/* Warning */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderTop: '4px solid var(--accent-danger)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <AlertCircle size={24} style={{ color: 'var(--accent-danger)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent-danger)' }}>
                        Critical: CTC ≠ Take-Home Salary!
                    </h3>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {CAREER_COMPREHENSIVE.ctcBreakdown.explanation}
                </p>
            </div>

            {/* CTC Breakdown */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Target size={24} style={{ color: 'var(--accent-primary)' }} />
                CTC (Cost To Company) Breakdown
            </h2>
            <div className="glass-card" style={{ padding: '24px', overflow: 'auto', marginBottom: '40px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Component</th>
                            <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>% of CTC</th>
                            <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Taxable</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CAREER_COMPREHENSIVE.ctcBreakdown.components.map((comp, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '12px', fontWeight: '500' }}>{comp.component}</td>
                                <td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>{comp.percent}</td>
                                <td style={{ padding: '12px', textAlign: 'center' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        background: comp.taxable === true ? 'rgba(239, 68, 68, 0.15)' :
                                            comp.taxable === 'Partially' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                                        color: comp.taxable === true ? 'var(--accent-danger)' :
                                            comp.taxable === 'Partially' ? 'var(--accent-warning)' : 'var(--accent-success)'
                                    }}>
                                        {String(comp.taxable)}
                                    </span>
                                </td>
                                <td style={{ padding: '12px', color: 'var(--text-muted)', fontSize: '13px' }}>{comp.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Example Calculation */}
            <div className="glass-card" style={{ padding: '28px', borderLeft: '4px solid var(--accent-info)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Example: ₹50 Lakh CTC Breakdown</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>CTC</div>
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>₹50,00,000</div>
                    </div>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Fixed Pay (~80%)</div>
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>₹40,00,000</div>
                    </div>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Variable (~20%)</div>
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>₹10,00,000</div>
                    </div>
                    <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'var(--accent-success)', marginBottom: '4px' }}>Monthly Take-Home*</div>
                        <div style={{ fontWeight: '700', fontSize: '18px', color: 'var(--accent-success)' }}>~₹2.5-2.8L</div>
                    </div>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px' }}>
                    *Approximate after tax, PF, and other deductions. Actual take-home depends on tax regime and investments.
                </p>
            </div>
        </div>
    );
}

// Challenges Tab
function ChallengesTab() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <AlertCircle size={24} style={{ color: 'var(--accent-warning)' }} />
                Common Challenges & How to Overcome Them
            </h2>
            <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                {CAREER_COMPREHENSIVE.challenges.map((item, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                            <div style={{ flex: '1', minWidth: '280px' }}>
                                <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: 'var(--accent-danger)' }}>
                                    ⚠️ {item.challenge}
                                </h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.detail}</p>
                            </div>
                            <div style={{ flex: '1', minWidth: '280px', background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-success)' }}>
                                <div style={{ fontSize: '12px', color: 'var(--accent-success)', fontWeight: '600', marginBottom: '6px' }}>MITIGATION</div>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.mitigation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Internal Transfer vs New Job */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Internal Transfer vs. New Job Search</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-success)' }}>
                        ✓ Internal Transfer
                    </h3>
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Advantage:</div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{SALARY_BENCHMARKS.transferVsNewJob.internalTransfer.advantage}</p>
                    </div>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '4px' }}>PRO TIP</div>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            {SALARY_BENCHMARKS.transferVsNewJob.internalTransfer.tip}
                        </p>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-warning)' }}>
                        ⚡ New Job Search
                    </h3>
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontWeight: '600', marginBottom: '8px' }}>Challenge:</div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{SALARY_BENCHMARKS.transferVsNewJob.newSearch.challenge}</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Hot Skills (2025):</div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {SALARY_BENCHMARKS.transferVsNewJob.newSearch.hotSkills.map((skill, i) => (
                                <span key={i} style={{
                                    padding: '6px 12px',
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-info))',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="alert alert-warning" style={{ margin: 0 }}>
                        <AlertCircle size={16} />
                        <span style={{ fontSize: '13px' }}>{SALARY_BENCHMARKS.transferVsNewJob.newSearch.warning}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Networking Tab
function NetworkingTab() {
    return (
        <div className="animate-fadeIn">
            {/* Timeline */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={24} style={{ color: 'var(--accent-primary)' }} />
                Job Search Timeline
            </h2>
            <div className="glass-card" style={{ padding: '28px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {CAREER_COMPREHENSIVE.timeline.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                            <div style={{
                                width: '100px',
                                flexShrink: 0,
                                padding: '8px 12px',
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '12px',
                                fontWeight: '600',
                                textAlign: 'center'
                            }}>
                                {item.months}
                            </div>
                            <div style={{
                                flex: 1,
                                padding: '12px 16px',
                                background: 'var(--bg-tertiary)',
                                borderRadius: 'var(--radius-sm)',
                                borderLeft: '3px solid var(--accent-primary)'
                            }}>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.action}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Networking Platforms */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Users size={24} style={{ color: 'var(--accent-info)' }} />
                Job Portals & Networking Platforms
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {CAREER_COMPREHENSIVE.networkingPlatforms.map((platform, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{platform.platform}</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>{platform.usage}</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 14px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '13px'
                        }}>
                            <Lightbulb size={14} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ color: 'var(--text-secondary)' }}>{platform.tip}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* NRI Groups */}
            <div className="alert alert-success" style={{ marginTop: '32px' }}>
                <CheckCircle2 size={24} />
                <div>
                    <strong>Join NRI Return Communities</strong><br />
                    <span style={{ fontSize: '14px' }}>Search for "R2I" (Return to India) groups on Facebook, Reddit (r/NRI), and LinkedIn for peer support, job referrals, and real experiences.</span>
                </div>
            </div>
        </div>
    );
}
