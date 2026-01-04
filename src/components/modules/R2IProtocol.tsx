import { useState } from 'react';
import {
    Home,
    CheckCircle2,
    AlertCircle,
    Layout,
    ListChecks,
    Package,
    XCircle,
    DollarSign,
    ArrowRight
} from 'lucide-react';
import { TRANSFER_OF_RESIDENCE_RULES, RELOCATION_BUDGET } from '../../data/constants';
import { PILLAR_DETAILS, type PillarDetail } from '../../data/pillarDetails';
import { TopicCard, TopicDetailModal } from '../shared/TopicComponents';

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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {PILLAR_DETAILS.map((pillar) => (
                    <TopicCard
                        key={pillar.id}
                        topic={pillar}
                        onClick={() => setSelectedPillar(pillar)}
                    />
                ))}
            </div>

            {/* Pillar Detail Modal */}
            {selectedPillar && (
                <TopicDetailModal
                    topic={selectedPillar}
                    onClose={closePillarDetail}
                />
            )}
        </div>
    );
}

// Admin Section
function AdminSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
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
