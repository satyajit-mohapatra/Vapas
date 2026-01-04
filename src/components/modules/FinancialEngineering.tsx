import { useState } from 'react';
import {
    Calculator,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Shield,
    DollarSign,
    Building,
    FileText,
    Info,
    PieChart,
    Landmark,
    LogOut,
    TrendingDown,
    TrendingUp,
    Clock
} from 'lucide-react';
import { OBBBA_TAX_INFO, TAX_CONSTANTS, RETIREMENT_STRATEGY_MATRIX, EXIT_TAX_LOGIC, TREATY_SHOCK_2025, ASSET_TAX_TREATMENT } from '../../data/constants';

type ActiveSection = 'overview' | 'retirement' | 'exittax' | 'frameworks' | 'compliance';

export default function FinancialEngineering() {
    const [activeSection, setActiveSection] = useState<ActiveSection>('overview');

    const sections = [
        { id: 'overview', label: 'Strategic Overview', icon: PieChart },
        { id: 'retirement', label: '401(k) Strategy', icon: Landmark },
        { id: 'exittax', label: 'Exit Tax', icon: LogOut },
        { id: 'frameworks', label: 'Cash Flow', icon: Building },
        { id: 'compliance', label: 'Tax Compliance', icon: FileText },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':
                return <OverviewSection />;
            case 'retirement':
                return <RetirementStrategySection />;
            case 'exittax':
                return <ExitTaxSection />;
            case 'frameworks':
                return <FrameworksSection />;
            case 'compliance':
                return <ComplianceSection />;
            default:
                return <OverviewSection />;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Calculator style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Financial Engineering
                    </h1>
                    <p className="page-description">
                        Navigate the cross-border minefield. 401(k) repatriation strategies, Exit Tax avoidance,
                        DTAA optimization, and the "Two-Country Baseline" framework for cash flow management.
                    </p>

                    {/* Tab Navigation */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        marginTop: '32px',
                        borderBottom: '1px solid var(--border-color)',
                        overflowX: 'auto'
                    }}>
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                className={`tab-btn ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(section.id as ActiveSection)}
                                style={{
                                    padding: '0 0 16px 0',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: activeSection === section.id ? '3px solid var(--accent-primary)' : '3px solid transparent',
                                    color: activeSection === section.id ? 'var(--text-primary)' : 'var(--text-muted)',
                                    fontWeight: activeSection === section.id ? '600' : '500',
                                    cursor: 'pointer',
                                    fontSize: '15px',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <section.icon size={16} />
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '40px 24px' }}>
                {renderSection()}
            </div>
        </div>
    );
}

// 401(k) Retirement Strategy Section
function RetirementStrategySection() {
    const getRiskColor = (risk: string) => {
        switch (risk) {
            case 'Low': return 'var(--accent-success)';
            case 'Medium': return 'var(--accent-warning)';
            case 'High': return 'var(--accent-danger)';
            default: return 'var(--text-muted)';
        }
    };

    return (
        <div className="animate-fadeIn">
            {/* Section 89A Info */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderLeft: '4px solid var(--accent-success)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <CheckCircle2 size={24} style={{ color: 'var(--accent-success)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent-success)' }}>
                        Section 89A: The Game-Changer
                    </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px', lineHeight: '1.7' }}>
                    Until 2021, India taxed 401(k) income on an <strong>accrual basis</strong> (taxing annual growth), while the US taxed only on withdrawal.
                    This mismatch made Foreign Tax Credits impossible.
                </p>
                <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--accent-primary)' }}>The Fix (Finance Act 2021):</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        File <strong>Form 10-EE</strong> electronically to defer paying Indian tax until actual withdrawal.
                        This ensures you pay tax in both countries in the same year, enabling Foreign Tax Credit claims.
                    </p>
                </div>
                <div className="alert alert-success" style={{ margin: 0 }}>
                    <Info size={18} />
                    <span><strong>Action Required:</strong> Must file Form 10-EE annually with Indian ITR to avoid tax on accruals.</span>
                </div>
            </div>

            {/* Strategy Matrix */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Landmark size={24} style={{ color: 'var(--accent-primary)' }} />
                401(k) Withdrawal Strategy Matrix
            </h2>

            <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                {RETIREMENT_STRATEGY_MATRIX.map((strategy, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{strategy.strategy}</h3>
                            <span style={{
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                background: `${getRiskColor(strategy.riskLevel)}20`,
                                color: getRiskColor(strategy.riskLevel)
                            }}>
                                {strategy.riskLevel} Risk
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>US Tax Impact</div>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{strategy.usTaxImpact}</div>
                            </div>
                            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>India Tax Impact</div>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{strategy.indiaTaxImpact}</div>
                            </div>
                            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Net Impact</div>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: strategy.netImpact.includes('60%') ? 'var(--accent-danger)' : 'var(--accent-success)' }}>
                                    {strategy.netImpact}
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)', marginTop: '2px', flexShrink: 0 }} />
                            <div>
                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{strategy.recommendation}</span>
                                <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                                    Best for: {strategy.bestFor}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Asset Tax Treatment Matrix */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText size={24} style={{ color: 'var(--accent-info)' }} />
                Asset Tax Treatment Matrix
            </h2>

            <div className="glass-card" style={{ padding: '24px', overflow: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Asset Class</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>US Tax (as Expat)</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>India (RNOR)</th>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>India (ROR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ASSET_TAX_TREATMENT.map((row, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '12px', fontWeight: '500' }}>{row.asset}</td>
                                <td style={{ padding: '12px', color: row.usStatus.includes('PFIC') ? 'var(--accent-danger)' : 'var(--text-secondary)' }}>
                                    {row.usStatus}
                                </td>
                                <td style={{ padding: '12px', color: row.rnorStatus === 'Tax-Free' ? 'var(--accent-success)' : 'var(--text-secondary)' }}>
                                    {row.rnorStatus}
                                </td>
                                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{row.rorStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// Exit Tax Section
function ExitTaxSection() {
    return (
        <div className="animate-fadeIn">
            {/* The 8-Year Rule */}
            <div className="glass-card" style={{ padding: '32px', marginBottom: '32px', borderTop: '4px solid var(--accent-danger)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <AlertTriangle size={28} style={{ color: 'var(--accent-danger)' }} />
                    <div>
                        <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--accent-danger)' }}>
                            The 8-Year Rule: Exit Tax Danger Zone
                        </h2>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                            Green Card holders walking through a regulatory minefield
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-danger)' }}>{EXIT_TAX_LOGIC.longTermResidentYears} Years</div>
                        <div className="stat-label">Long-Term Resident Threshold</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-warning)' }}>${(EXIT_TAX_LOGIC.netWorthThreshold / 1000000)}M</div>
                        <div className="stat-label">Net Worth Threshold</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-success)' }}>${(EXIT_TAX_LOGIC.exclusionAmount / 1000).toFixed(0)}K</div>
                        <div className="stat-label">Exclusion Amount (2024)</div>
                    </div>
                </div>

                <div className="alert alert-warning" style={{ marginBottom: '20px' }}>
                    <Clock size={18} />
                    <span><strong>Critical:</strong> Holding a Green Card for one day in a calendar year counts as a full year. Received GC in Dec 2018? Surrender in Jan 2025 = 8 tax years!</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                        <TrendingDown size={20} style={{ color: 'var(--accent-danger)', marginBottom: '12px' }} />
                        <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: 'var(--accent-danger)' }}>Year Count ≥ 8</h4>
                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                            Long-Term Resident status applies. Subject to Covered Expatriate tests.
                        </p>
                    </div>
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        <TrendingUp size={20} style={{ color: 'var(--accent-success)', marginBottom: '12px' }} />
                        <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: 'var(--accent-success)' }}>Year Count &lt; 8</h4>
                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                            Safe! Surrender Green Card (file Form I-407) without Exit Tax.
                        </p>
                    </div>
                </div>
            </div>

            {/* Covered Expatriate Tests */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Covered Expatriate Tests</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                If you are a Long-Term Resident (8+ years), you become subject to Exit Tax if you meet <strong>any one</strong> of these tests:
            </p>

            <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                {EXIT_TAX_LOGIC.coveredExpatriateTests.map((test, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--gradient-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '700',
                                color: 'white',
                                fontSize: '16px'
                            }}>
                                {idx + 1}
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{test.name}</h3>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: '1.6' }}>
                            {test.description}
                        </p>
                        {'includes' in test && test.includes && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {test.includes.map((item, i) => (
                                    <span key={i} style={{
                                        padding: '4px 10px',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        color: 'var(--text-muted)'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        )}
                        {'warning' in test && (
                            <div className="alert alert-danger" style={{ marginTop: '12px' }}>
                                <AlertTriangle size={16} />
                                <span style={{ fontSize: '13px' }}>{test.warning}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Strategic Avoidance */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Shield size={24} style={{ color: 'var(--accent-success)' }} />
                Strategic Avoidance Tactics
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {EXIT_TAX_LOGIC.strategicAvoidance.map((strategy, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--accent-primary)' }}>
                            {strategy.action}
                        </h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            {strategy.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Treaty Shock 2025 */}
            <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid var(--accent-warning)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <AlertTriangle size={24} style={{ color: 'var(--accent-warning)' }} />
                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--accent-warning)' }}>
                        {TREATY_SHOCK_2025.title}
                    </h2>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '15px', fontWeight: '500' }}>
                    {TREATY_SHOCK_2025.summary}
                </p>

                <div style={{ marginBottom: '24px' }}>
                    {TREATY_SHOCK_2025.details.map((detail, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                            <Info size={16} style={{ color: 'var(--accent-info)', marginTop: '3px', flexShrink: 0 }} />
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{detail}</p>
                        </div>
                    ))}
                </div>

                <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>Implications:</h4>
                <div style={{ display: 'grid', gap: '12px' }}>
                    {TREATY_SHOCK_2025.implications.map((imp, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 16px',
                            background: imp.impact === 'Critical' ? 'rgba(239, 68, 68, 0.1)' :
                                imp.impact === 'High' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                            borderRadius: 'var(--radius-sm)',
                            borderLeft: `3px solid ${imp.impact === 'Critical' ? 'var(--accent-danger)' :
                                imp.impact === 'High' ? 'var(--accent-warning)' : 'var(--accent-info)'}`
                        }}>
                            <span style={{
                                fontSize: '11px',
                                fontWeight: '700',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                background: imp.impact === 'Critical' ? 'var(--accent-danger)' :
                                    imp.impact === 'High' ? 'var(--accent-warning)' : 'var(--accent-info)',
                                color: 'white'
                            }}>
                                {imp.impact.toUpperCase()}
                            </span>
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{imp.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Overview Section (OBBBA + Constants)
function OverviewSection() {
    return (
        <div className="animate-fadeIn">
            {/* OBBBA Critical Alert */}
            <div className="glass-card" style={{ padding: '32px', marginBottom: '32px', borderTop: '4px solid var(--accent-danger)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <AlertTriangle size={24} className="text-accent-danger" />
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--accent-danger)' }}>
                        CRITICAL: One Big Beautiful Bill Act (OBBBA)
                    </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px', lineHeight: '1.6' }}>
                    The most significant immediate threat to NRI wealth. A <strong>1% federal excise tax</strong> on
                    outbound remittances, effective January 1, 2026. Understand exemptions to protect your transfers.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    <div>
                        <h4 style={{ color: 'var(--accent-danger)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                            <XCircle size={18} />
                            NON-EXEMPT Methods (1% Tax Applies)
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {OBBBA_TAX_INFO.nonExemptMethods.map((method, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '10px 0',
                                    borderBottom: '1px solid rgba(239, 68, 68, 0.2)'
                                }}>
                                    <XCircle size={16} style={{ color: '#ef4444' }} />
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{method}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--accent-success)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                            <CheckCircle2 size={18} />
                            EXEMPT Methods (No Tax)
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {OBBBA_TAX_INFO.exemptMethods.map((method, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '10px 0',
                                    borderBottom: '1px solid rgba(16, 185, 129, 0.2)'
                                }}>
                                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{method}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Key Tax Parameters */}
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Key Tax Parameters (2025-26)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div className="stat-card">
                    <div className="stat-value">{TAX_CONSTANTS.DAYS_FOR_RESIDENT_STATUS}</div>
                    <div className="stat-label">Days for Resident Status</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">{TAX_CONSTANTS.EXIT_TAX_THRESHOLD_YEARS} Years</div>
                    <div className="stat-label">Exit Tax Threshold (GC)</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">${(TAX_CONSTANTS.EXIT_TAX_THRESHOLD_NET_WORTH / 1000000)}M</div>
                    <div className="stat-label">Net Worth Threshold</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">{TAX_CONSTANTS.FEMA_REPATRIATION_DAYS}</div>
                    <div className="stat-label">FEMA Repatriation Days</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">31.2%</div>
                    <div className="stat-label">Section 195 TDS (NRI Rent)</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">₹10 Lakh</div>
                    <div className="stat-label">Black Money Penalty/Year</div>
                </div>
            </div>
        </div>
    );
}

// Frameworks Section (Defense + Two-Country)
function FrameworksSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                <Shield size={24} style={{ marginRight: '12px', verticalAlign: 'middle', color: 'var(--accent-primary)' }} />
                Actionable Defense Strategy
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {OBBBA_TAX_INFO.defenseStrategies.map((strategy, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            fontWeight: '700',
                            color: 'white'
                        }}>
                            {idx + 1}
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{strategy}</p>
                    </div>
                ))}
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
                <DollarSign size={24} style={{ marginRight: '12px', verticalAlign: 'middle', color: 'var(--accent-success)' }} />
                The "Two-Country Baseline" Framework
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                A common failure mode: the "illusion of wealth"—earning in dollars but spending in dollars, leaving little retained surplus.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                <div className="glass-card" style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <Building size={24} style={{ color: 'var(--accent-primary)' }} />
                        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Survival Number (Host Country)</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Calculate your absolute minimum: <strong>Rent + Food + Tax + Insurance</strong>
                    </p>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                            This is locked first. Everything else comes after survival is secured.
                        </p>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <DollarSign size={24} style={{ color: 'var(--accent-success)' }} />
                        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Obligation Number (India)</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Non-negotiables: <strong>Parents' Support + Property EMI + SIP Investment</strong>
                    </p>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                            Automate this transfer immediately upon salary credit. Don't wait for month-end.
                        </p>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <Shield size={24} style={{ color: 'var(--accent-warning)' }} />
                        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Bifurcated Emergency Fund</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Unlike residents (6 months), NRIs need a split strategy:
                    </p>
                    <div style={{ display: 'grid', gap: '12px' }}>
                        <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                            <strong style={{ color: 'var(--accent-primary)' }}>Host Currency:</strong> 3 months expenses (job loss buffer)
                        </div>
                        <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                            <strong style={{ color: 'var(--india-saffron)' }}>NRO Account:</strong> ₹5-10 Lakhs (family medical emergencies)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Compliance Section (DTAA + PFIC)
function ComplianceSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                <FileText size={24} style={{ marginRight: '12px', verticalAlign: 'middle', color: 'var(--accent-info)' }} />
                Tax Compliance Matrix
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                {/* DTAA Card */}
                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-success)' }}>
                        DTAA Benefits (Double Taxation Avoidance)
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                        NRIs often bleed money through excess TDS. NRO interest taxed at <strong>30% + cess</strong> by default.
                    </p>

                    <div className="alert alert-success" style={{ marginBottom: '20px' }}>
                        <Info size={18} />
                        <span>Under India-US/UK DTAA, reduce TDS to <strong>10-15%</strong></span>
                    </div>

                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-muted)' }}>Required Documents:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Form 10F (Declaration of Tax Status)</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Tax Residency Certificate (TRC) from host country</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Self-declaration of no PE in India</span>
                        </li>
                    </ul>
                </div>

                {/* PFIC Card */}
                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-danger)' }}>
                        PFIC Nightmare (US-Based NRIs)
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                        For US tax residents, Indian Mutual Funds = disaster. IRS classifies them as
                        "Passive Foreign Investment Companies" (PFICs).
                    </p>

                    <div className="alert alert-danger" style={{ marginBottom: '20px' }}>
                        <AlertTriangle size={18} />
                        <span>Gains taxed at highest marginal rate + interest = <strong>50%+ effective tax</strong></span>
                    </div>

                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-muted)' }}>Solutions:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Invest via direct equity (individual stocks)</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Use PMS (Portfolio Management Services)</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>US-domiciled ETFs tracking India (e.g., INDA)</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' }}>
                            <XCircle size={16} style={{ color: 'var(--accent-danger)' }} />
                            <span style={{ textDecoration: 'line-through', fontSize: '14px', color: 'var(--text-muted)' }}>Indian Mutual Funds</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
