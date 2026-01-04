import { useState } from 'react';
import {
    Landmark,
    DollarSign,
    Shield,
    TrendingUp,
    Building,
    Users,
    Wallet,
    CheckCircle2,
    ExternalLink,
    Info,
    LayoutDashboard,
    Briefcase,
    Scale
} from 'lucide-react';
import { GIFT_CITY } from '../../data/constants';

type ActiveSection = 'overview' | 'investments' | 'structures';

export default function GiftCity() {
    const [activeSection, setActiveSection] = useState<ActiveSection>('overview');

    const sections = [
        { id: 'overview', label: 'Ecosystem Overview', icon: LayoutDashboard },
        { id: 'investments', label: 'Investment Options', icon: Briefcase },
        { id: 'structures', label: 'Advanced Structures', icon: Scale },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':
                return <OverviewSection />;
            case 'investments':
                return <InvestmentsSection />;
            case 'structures':
                return <StructuresSection />;
            default:
                return <OverviewSection />;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Landmark style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        GIFT City Investment Hub
                    </h1>
                    <p className="page-description">
                        The offshore jurisdiction on onshore soil. {GIFT_CITY.name} allows NRIs to invest in India
                        without the friction of "India proper"—regulated by IFSCA, not RBI/SEBI.
                    </p>

                    {/* Tab Navigation */}
                    <div style={{
                        display: 'flex',
                        gap: '32px',
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

// Overview Section
function OverviewSection() {
    return (
        <div className="animate-fadeIn">
            {/* Key Benefits Hero */}
            <div className="glass-card" style={{
                padding: '40px',
                marginBottom: '40px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)'
            }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                    Why GIFT City? The Regulatory Advantage
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {GIFT_CITY.keyBenefits.map((benefit, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                background: 'var(--gradient-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Stats */}
            <div className="stats-row" style={{ marginBottom: '40px' }}>
                <div className="stat-card">
                    <Shield size={24} style={{ color: 'var(--accent-primary)', marginBottom: '12px' }} />
                    <div className="stat-value">IFSCA</div>
                    <div className="stat-label">Regulator (Not RBI/SEBI)</div>
                </div>
                <div className="stat-card">
                    <TrendingUp size={24} style={{ color: 'var(--accent-success)', marginBottom: '12px' }} />
                    <div className="stat-value">10 Years</div>
                    <div className="stat-label">Tax Holiday Period</div>
                </div>
                <div className="stat-card">
                    <DollarSign size={24} style={{ color: 'var(--accent-warning)', marginBottom: '12px' }} />
                    <div className="stat-value">USD</div>
                    <div className="stat-label">Investment Denomination</div>
                </div>
                <div className="stat-card">
                    <Building size={24} style={{ color: 'var(--accent-info)', marginBottom: '12px' }} />
                    <div className="stat-value">Gujarat</div>
                    <div className="stat-label">Location</div>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <a
                    href="https://ifsca.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                    Visit IFSCA Official Website
                    <ExternalLink size={16} />
                </a>
            </div>
        </div>
    );
}

// Investments Section
function InvestmentsSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                Key Investment Vehicles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                {GIFT_CITY.investmentVehicles.map((vehicle, idx) => {
                    const icons = [TrendingUp, Users, Wallet];
                    const Icon = icons[idx % icons.length];

                    return (
                        <div key={idx} className="glass-card" style={{ padding: '28px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: 'rgba(99, 102, 241, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Icon size={24} style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{vehicle.name}</h3>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.7' }}>
                                {vehicle.description}
                            </p>
                            <div style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                padding: '14px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(16, 185, 129, 0.2)'
                            }}>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
                                    Tax Benefit
                                </div>
                                <div style={{ fontSize: '14px', color: 'var(--accent-success)', fontWeight: '500' }}>
                                    {vehicle.taxBenefit}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* IBU Deposits Highlight */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
                        <Wallet size={20} style={{ marginRight: '10px', verticalAlign: 'middle', color: 'var(--accent-success)' }} />
                        IBU Deposits: The Safest Option
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.7' }}>
                        Foreign currency deposits in IFSC Banking Units (IBUs) offer a simple, low-risk entry point
                        into GIFT City. Hold your USD/GBP/EUR with Indian banks operating in the IFSC.
                    </p>
                    <div className="alert alert-success">
                        <Shield size={18} />
                        <span>Interest earned is <strong>100% tax-free</strong> in India</span>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
                        <TrendingUp size={20} style={{ marginRight: '10px', verticalAlign: 'middle', color: 'var(--accent-primary)' }} />
                        Category III AIFs: Higher Returns
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.7' }}>
                        For those seeking higher returns, GIFT City AIFs pool NRI capital for investment in
                        Indian startups, real estate, and public markets through sophisticated strategies.
                    </p>
                    <div className="alert alert-info">
                        <Info size={18} />
                        <span>Capital gains on specified securities are <strong>exempt</strong> for the fund</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Structures Section
function StructuresSection() {
    return (
        <div className="animate-fadeIn">
            {/* Family Investment Fund Deep Dive */}
            <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>
                    <Users size={24} style={{ marginRight: '12px', verticalAlign: 'middle', color: 'var(--accent-primary)' }} />
                    Family Investment Fund (FIF) - For Ultra-HNIs
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                    <div>
                        <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase' }}>
                            Who Is It For?
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                                <span>Corpus requirement: {">"} $10 Million</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                                <span>Single family pooling assets</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />
                                <span>Multi-generational wealth planning</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase' }}>
                            Key Advantages
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                                <span>Bypasses $250K LRS limit</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                                <span>Global diversification from Indian base</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                                <span>Seamless cross-border investing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Comparison: India vs GIFT City */}
            <div className="comparison-table">
                <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                    India (Domestic) vs GIFT City: Key Differences
                </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>India (Domestic)</th>
                            <th>GIFT City IFSC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Regulator</strong></td>
                            <td>RBI / SEBI</td>
                            <td style={{ color: 'var(--accent-success)' }}>IFSCA</td>
                        </tr>
                        <tr>
                            <td><strong>Currency</strong></td>
                            <td>INR only</td>
                            <td style={{ color: 'var(--accent-success)' }}>USD/EUR/GBP</td>
                        </tr>
                        <tr>
                            <td><strong>Tax on Interest</strong></td>
                            <td>30%+ (NRO)</td>
                            <td style={{ color: 'var(--accent-success)' }}>0% (IBU)</td>
                        </tr>
                        <tr>
                            <td><strong>Tax Holiday</strong></td>
                            <td>None</td>
                            <td style={{ color: 'var(--accent-success)' }}>10 years</td>
                        </tr>
                        <tr>
                            <td><strong>LRS Limits</strong></td>
                            <td>$250K/year</td>
                            <td style={{ color: 'var(--accent-success)' }}>Not applicable (for FIF)</td>
                        </tr>
                        <tr>
                            <td><strong>Rupee Depreciation Risk</strong></td>
                            <td>High</td>
                            <td style={{ color: 'var(--accent-success)' }}>Hedged (USD)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
