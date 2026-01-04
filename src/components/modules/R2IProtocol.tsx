import { useState } from 'react';
import {
    Home,
    FileText,
    CheckCircle2,
    AlertCircle,
    Clock,
    ArrowRight,
    Layout,
    ListChecks,
    Package,
    XCircle,
    DollarSign,
    ChevronRight,
    ExternalLink,
    X,
    Info,
    Shield,
    BookOpen
} from 'lucide-react';
import { R2I_PILLARS, TRANSFER_OF_RESIDENCE_RULES, RELOCATION_BUDGET } from '../../data/constants';
import { PILLAR_DETAILS, URGENCY_COLORS, type PillarDetail } from '../../data/pillarDetails';

type ActiveSection = 'protocol' | 'logistics' | 'admin';

export default function R2IProtocol() {
    const [activeSection, setActiveSection] = useState<ActiveSection>('protocol');

    const sections = [
        { id: 'protocol', label: 'Protocol Framework', icon: Layout },
        { id: 'logistics', label: 'Shipping & Customs', icon: Package },
        { id: 'admin', label: 'Admin Execution', icon: ListChecks },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'protocol':
                return <ProtocolSection />;
            case 'logistics':
                return <LogisticsSection />;
            case 'admin':
                return <AdminSection />;
            default:
                return <ProtocolSection />;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Home style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Return to India (R2I) Protocol
                    </h1>
                    <p className="page-description">
                        The "Seven Critical Pillars" for a strategic return. R2I is not a retreat—it's a sovereign reset
                        of your financial and legal identity. Mishandling can cost lakhs in taxes.
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
// Logistics Section (Transfer of Residence & Shipping)
function LogisticsSection() {
    return (
        <div className="animate-fadeIn">
            {/* Budget Overview */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderTop: '4px solid var(--accent-primary)' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <DollarSign size={24} style={{ color: 'var(--accent-primary)' }} />
                    Estimated Relocation Budget
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-primary)' }}>
                            ${(RELOCATION_BUDGET.totalRange.min / 1000)}K - ${(RELOCATION_BUDGET.totalRange.max / 1000)}K
                        </div>
                        <div className="stat-label">Total Transition Fund Required</div>
                    </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Item</th>
                                <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>Est. Cost (USD)</th>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RELOCATION_BUDGET.items.map((item, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '12px', fontWeight: '500' }}>{item.item}</td>
                                    <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: 'var(--accent-success)' }}>
                                        ${item.min.toLocaleString()} - ${item.max.toLocaleString()}
                                    </td>
                                    <td style={{ padding: '12px', color: 'var(--text-muted)', fontSize: '13px' }}>{item.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Transfer of Residence Rules */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Package size={24} style={{ color: 'var(--accent-info)' }} />
                Transfer of Residence (TR) Rules
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div className="glass-card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-success)' }}>
                        Duty-Free Items ✓
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        Eligibility: {TRANSFER_OF_RESIDENCE_RULES.eligibility}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {TRANSFER_OF_RESIDENCE_RULES.dutyFreeItems.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glass-card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-danger)' }}>
                        Taxable Items (38.5% Duty) ✗
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {TRANSFER_OF_RESIDENCE_RULES.taxableItems.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                                <XCircle size={16} style={{ color: 'var(--accent-danger)' }} />
                                <div>
                                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.item}</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>{item.notes}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Warning */}
            <div className="alert alert-danger" style={{ marginBottom: '32px' }}>
                <AlertCircle size={24} />
                <div>
                    <strong>Expert Recommendation:</strong> {TRANSFER_OF_RESIDENCE_RULES.recommendation}
                </div>
            </div>

            {/* Shipping Costs */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Shipping Container Costs (2025)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {TRANSFER_OF_RESIDENCE_RULES.shippingCosts.map((container, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px',
                            fontSize: '22px'
                        }}>
                            📦
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{container.container}</h3>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--accent-success)', marginBottom: '12px' }}>
                            {container.cost}
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Holds: {container.holds}</p>
                    </div>
                ))}
            </div>

            {/* Domestic Staff Cost */}
            <div className="glass-card" style={{ padding: '28px', borderLeft: '4px solid var(--accent-success)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--accent-success)' }}>
                    🏠 The Great Lifestyle Arbitrage: Domestic Staff
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    {RELOCATION_BUDGET.domesticStaffCost.insight}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {RELOCATION_BUDGET.domesticStaffCost.breakdown.map((staff, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>{staff.role}</div>
                            <div style={{ fontWeight: '600', color: 'var(--india-saffron)' }}>{staff.cost}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Protocol Section (Timeline + Pillars)
function ProtocolSection() {
    const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);

    const urgencyColors = {
        Critical: 'var(--accent-danger)',
        Mandatory: 'var(--accent-warning)',
        High: 'var(--accent-primary)',
        Medium: 'var(--accent-info)',
    };

    const handlePillarClick = (pillarId: number) => {
        const pillarDetail = PILLAR_DETAILS.find(p => p.id === pillarId);
        if (pillarDetail) {
            setSelectedPillar(pillarDetail);
        }
    };

    const closePillarDetail = () => {
        setSelectedPillar(null);
    };

    return (
        <div className="animate-fadeIn">
            {/* Timeline Overview */}
            <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>RNOR Status Timeline</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(99, 102, 241, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 12px',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: 'var(--accent-primary)'
                        }}>1</div>
                        <div style={{ fontWeight: '700', marginBottom: '4px' }}>Year 1</div>
                        <div style={{ fontSize: '13px', color: 'var(--accent-primary)' }}>NR Status</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>(Arrive after Oct 2)</div>
                    </div>

                    <ArrowRight size={24} style={{ color: 'var(--border-color)' }} />

                    <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(16, 185, 129, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 12px',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: 'var(--accent-success)',
                            border: '3px solid var(--accent-success)'
                        }}>2-4</div>
                        <div style={{ fontWeight: '700', marginBottom: '4px' }}>Years 2-4</div>
                        <div style={{ fontSize: '13px', color: 'var(--accent-success)', fontWeight: '700' }}>RNOR Status</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Foreign income tax-free!</div>
                    </div>

                    <ArrowRight size={24} style={{ color: 'var(--border-color)' }} />

                    <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'rgba(245, 158, 11, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 12px',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: 'var(--accent-warning)'
                        }}>5+</div>
                        <div style={{ fontWeight: '700', marginBottom: '4px' }}>Year 5+</div>
                        <div style={{ fontSize: '13px', color: 'var(--accent-warning)' }}>ROR Status</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Global income taxable</div>
                    </div>
                </div>
            </div>

            {/* Pillar Grid */}
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>The Seven Critical Pillars</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
                Click on any pillar to view detailed information, eligibility criteria, and official sources.
            </p>
            <div className="pillar-grid">
                {R2I_PILLARS.map((pillar) => (
                    <div
                        key={pillar.id}
                        className="pillar-card"
                        onClick={() => handlePillarClick(pillar.id)}
                        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    >
                        <div className="pillar-number">{pillar.id}</div>
                        <h3 className="pillar-title">{pillar.name}</h3>
                        <p className="pillar-description">{pillar.description}</p>

                        <div className="pillar-action">
                            <div className="pillar-action-label">Key Action</div>
                            <div className="pillar-action-text">{pillar.keyAction}</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--accent-success)', marginTop: '2px', flexShrink: 0 }} />
                            <span className="pillar-benefit">{pillar.benefit}</span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '11px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                background: `${urgencyColors[pillar.urgency as keyof typeof urgencyColors]}20`,
                                color: urgencyColors[pillar.urgency as keyof typeof urgencyColors]
                            }}>
                                <Clock size={12} />
                                {pillar.urgency}
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                color: 'var(--accent-primary)',
                                fontSize: '12px',
                                fontWeight: '500'
                            }}>
                                Learn more <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pillar Detail Modal */}
            {selectedPillar && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: '40px 20px',
                        overflowY: 'auto'
                    }}
                    onClick={closePillarDetail}
                >
                    <div
                        style={{
                            background: 'var(--bg-secondary)',
                            borderRadius: '16px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: 'calc(100vh - 80px)',
                            overflowY: 'auto',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div style={{
                            padding: '24px 28px',
                            borderBottom: '1px solid var(--border-color)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            background: URGENCY_COLORS[selectedPillar.urgency].bg,
                            borderRadius: '16px 16px 0 0'
                        }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'var(--gradient-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: 'white'
                                }}>
                                    {selectedPillar.id}
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-primary)' }}>
                                        {selectedPillar.name}
                                    </h2>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        background: URGENCY_COLORS[selectedPillar.urgency].color + '30',
                                        color: URGENCY_COLORS[selectedPillar.urgency].color
                                    }}>
                                        <Shield size={12} />
                                        {URGENCY_COLORS[selectedPillar.urgency].label}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={closePillarDetail}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '8px',
                                    cursor: 'pointer',
                                    color: 'var(--text-secondary)'
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '28px' }}>
                            {/* Overview */}
                            <div style={{ marginBottom: '28px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <BookOpen size={18} style={{ color: 'var(--accent-primary)' }} />
                                    Overview
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '14px' }}>
                                    {selectedPillar.overview}
                                </p>
                            </div>

                            {/* Key Action Box */}
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                borderRadius: '12px',
                                padding: '20px',
                                marginBottom: '28px'
                            }}>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                                    ⚡ Key Action
                                </div>
                                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                    {selectedPillar.keyAction}
                                </div>
                            </div>

                            {/* Two Column Layout */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '28px' }}>
                                {/* Benefits */}
                                <div>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <CheckCircle2 size={18} style={{ color: 'var(--accent-success)' }} />
                                        Benefits
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {selectedPillar.benefits.map((benefit, idx) => (
                                            <li key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                padding: '10px 0',
                                                borderBottom: idx < selectedPillar.benefits.length - 1 ? '1px solid var(--border-color)' : 'none'
                                            }}>
                                                <CheckCircle2 size={14} style={{ color: 'var(--accent-success)', marginTop: '3px', flexShrink: 0 }} />
                                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Key Facts */}
                                <div>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Info size={18} style={{ color: 'var(--accent-info)' }} />
                                        Key Facts
                                    </h3>
                                    <div style={{ background: 'var(--bg-tertiary)', borderRadius: '12px', overflow: 'hidden' }}>
                                        {selectedPillar.keyFacts.map((fact, idx) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                padding: '12px 16px',
                                                borderBottom: idx < selectedPillar.keyFacts.length - 1 ? '1px solid var(--border-color)' : 'none'
                                            }}>
                                                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{fact.label}</span>
                                                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{fact.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Eligibility (if exists) */}
                            {selectedPillar.eligibility && (
                                <div style={{ marginBottom: '28px' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                                        📋 Eligibility Criteria
                                    </h3>
                                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                        {selectedPillar.eligibility.map((item, idx) => (
                                            <li key={idx} style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.6' }}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Steps (if exists) */}
                            {selectedPillar.steps && (
                                <div style={{ marginBottom: '28px' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>
                                        📝 Action Steps
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {selectedPillar.steps.map((step, idx) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '12px',
                                                background: 'var(--bg-tertiary)',
                                                padding: '14px 16px',
                                                borderRadius: '10px'
                                            }}>
                                                <div style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    background: 'var(--gradient-primary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '12px',
                                                    fontWeight: '700',
                                                    color: 'white',
                                                    flexShrink: 0
                                                }}>
                                                    {idx + 1}
                                                </div>
                                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Warnings (if exists) */}
                            {selectedPillar.warnings && selectedPillar.warnings.length > 0 && (
                                <div style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    marginBottom: '28px'
                                }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <AlertCircle size={18} />
                                        ⚠️ Important Warnings
                                    </h3>
                                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                        {selectedPillar.warnings.map((warning, idx) => (
                                            <li key={idx} style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.6' }}>
                                                {warning}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Official Sources */}
                            <div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
                                    Official Sources
                                </h3>
                                <div style={{ display: 'grid', gap: '12px' }}>
                                    {selectedPillar.officialSources.map((source, idx) => (
                                        <a
                                            key={idx}
                                            href={source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                background: 'var(--bg-tertiary)',
                                                padding: '14px 18px',
                                                borderRadius: '10px',
                                                textDecoration: 'none',
                                                border: '1px solid var(--border-color)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--border-color)';
                                                e.currentTarget.style.background = 'var(--bg-tertiary)';
                                            }}
                                        >
                                            <div>
                                                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>
                                                    {source.name}
                                                </div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                                                    {source.description}
                                                </div>
                                            </div>
                                            <ExternalLink size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div style={{
                            padding: '20px 28px',
                            borderTop: '1px solid var(--border-color)',
                            background: 'rgba(245, 158, 11, 0.05)',
                            borderRadius: '0 0 16px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <AlertCircle size={18} style={{ color: '#F59E0B', flexShrink: 0 }} />
                            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
                                <strong style={{ color: '#F59E0B' }}>Disclaimer:</strong> This information is for educational purposes only.
                                Consult qualified professionals for advice specific to your situation.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Admin Section
function AdminSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                <FileText size={24} style={{ marginRight: '12px', verticalAlign: 'middle', color: 'var(--accent-info)' }} />
                Admin Cleanup Checklist
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {[
                    { title: 'Update PAN to Resident', desc: 'Change status from NRI to Resident with ITD' },
                    { title: 'Aadhaar Update', desc: 'Obtain/update address (requires 182 days for first-time)' },
                    { title: 'Link PAN-Aadhaar', desc: 'Mandatory to avoid inoperative PAN status' },
                    { title: 'KYC Updates', desc: 'Update tax status in MF/Demat from NRI to Resident' },
                    { title: 'Bank Account Conversion', desc: 'NRE/NRO → Resident Savings or RFC' },
                    { title: 'Power of Attorney', desc: 'Revoke old POAs, update nominee details' }
                ].map((item, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <input type="checkbox" style={{
                            width: '20px',
                            height: '20px',
                            accentColor: 'var(--accent-primary)',
                            marginTop: '2px'
                        }} />
                        <div>
                            <div style={{ fontWeight: '600', marginBottom: '4px' }}>{item.title}</div>
                            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Critical Warning */}
            <div className="alert alert-danger">
                <AlertCircle size={24} />
                <div>
                    <strong>Black Money Act Warning:</strong> Non-disclosure of US house/bank accounts in Schedule FA
                    once you become ROR = <strong>₹10 Lakh penalty per year</strong>, regardless of whether income was taxable.
                    Ensure full compliance from Year 4+.
                </div>
            </div>
        </div>
    );
}
