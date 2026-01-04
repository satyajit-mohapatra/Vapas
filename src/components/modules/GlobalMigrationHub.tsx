import { useState } from 'react';
import {
    Globe2,
    CheckCircle2,
    TrendingUp,
    DollarSign,
    Shield,
    MapPin,
    BadgeCheck,
    Info,
    LayoutGrid,
    Table,
    Target
} from 'lucide-react';
import { MIGRATION_DESTINATIONS } from '../../data/constants';

type DestinationId = keyof typeof MIGRATION_DESTINATIONS;
type ActiveSection = 'corridors' | 'matrix' | 'strategies';

export default function GlobalMigrationHub() {
    const [activeSection, setActiveSection] = useState<ActiveSection>('corridors');

    const sections = [
        { id: 'corridors', label: 'Migration Corridors', icon: LayoutGrid },
        { id: 'matrix', label: 'Comparative Matrix', icon: Table },
        { id: 'strategies', label: 'Strategic Segmentation', icon: Target },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'corridors':
                return <CorridorsSection />;
            case 'matrix':
                return <MatrixSection />;
            case 'strategies':
                return <StrategiesSection />;
            default:
                return <CorridorsSection />;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Globe2 style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Global Migration Hub
                    </h1>
                    <p className="page-description">
                        Strategic analysis of the "Category 2" emerging corridors. The geopolitical pivot away from traditional
                        US/UK/Canada hubs toward Europe, GCC, and Asia-Pacific.
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

// Corridors Section
function CorridorsSection() {
    const [selectedDestination, setSelectedDestination] = useState<DestinationId | null>(null);
    const destinations = Object.values(MIGRATION_DESTINATIONS);

    return (
        <div className="animate-fadeIn">
            {/* Strategic Context Alert */}
            <div className="alert alert-info" style={{ marginBottom: '32px' }}>
                <Info size={24} />
                <div>
                    <strong>The Crisis of Attractiveness:</strong> H-1B "visa anxiety tax", Canadian housing crisis,
                    UK post-Brexit instability. European nations now actively recruit Indian talent to plug demographic deficits.
                </div>
            </div>

            {/* Destination Grid */}
            <div className="destination-grid">
                {destinations.map((dest) => (
                    <div
                        key={dest.id}
                        className={`destination-card ${selectedDestination === dest.id ? 'selected' : ''}`}
                        onClick={() => setSelectedDestination(selectedDestination === dest.id ? null : dest.id as DestinationId)}
                    >
                        <div className="destination-flag">{dest.flag}</div>
                        <h3 className="destination-name">{dest.name}</h3>
                        <p className="destination-role">{dest.strategicRole}</p>

                        <div className="destination-info">
                            <div className="info-row">
                                <span className="info-label">Visa Vehicle</span>
                                <span className="info-value">{dest.visaVehicle}</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Capital Barrier</span>
                                <span className="info-value">{dest.capitalBarrier}</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Tax Regime</span>
                                <span className="info-value">{dest.taxRegime}</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Citizenship Path</span>
                                <span className="info-value">{dest.citizenshipPath}</span>
                            </div>
                        </div>

                        <div className="destination-highlights" style={{ marginTop: '20px' }}>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                                Key Highlights
                            </div>
                            {dest.highlights.map((highlight, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                    <CheckCircle2 size={14} style={{ color: 'var(--accent-success)', marginTop: '3px', flexShrink: 0 }} />
                                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{highlight}</span>
                                </div>
                            ))}
                        </div>

                        <div className="destination-metrics" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '12px',
                            marginTop: '20px',
                            paddingTop: '16px',
                            borderTop: '1px solid var(--border-color)'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <TrendingUp size={16} style={{ color: 'var(--accent-primary)', marginBottom: '4px' }} />
                                <div style={{ fontSize: '12px', fontWeight: '600' }}>{dest.metrics.incomeGrowth}</div>
                                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Income</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Shield size={16} style={{ color: 'var(--accent-success)', marginBottom: '4px' }} />
                                <div style={{ fontSize: '12px', fontWeight: '600' }}>{dest.metrics.qualityOfLife}/10</div>
                                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>QoL</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <BadgeCheck size={16} style={{ color: 'var(--accent-warning)', marginBottom: '4px' }} />
                                <div style={{ fontSize: '12px', fontWeight: '600' }}>{dest.metrics.citizenshipEase}</div>
                                <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Citizenship</div>
                            </div>
                        </div>

                        <div style={{
                            marginTop: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '12px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            <div>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Key Advantage</div>
                                <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-success)' }}>{dest.keyAdvantage}</div>
                            </div>
                        </div>

                        <div style={{
                            marginTop: '8px',
                            padding: '12px',
                            background: 'rgba(245, 158, 11, 0.1)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Primary Friction</div>
                            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--accent-warning)' }}>{dest.primaryFriction}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Matrix Section
function MatrixSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Comparative Strategic Matrix</h2>
            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>🇩🇪 Germany</th>
                            <th>🇦🇪 UAE</th>
                            <th>🇲🇹 Malta</th>
                            <th>🇳🇿 New Zealand</th>
                            <th>🇳🇱 Netherlands</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Strategic Role</strong></td>
                            <td>Industrial Career</td>
                            <td>Wealth Accumulation</td>
                            <td>EU Access / Backup</td>
                            <td>Lifestyle & Safety</td>
                            <td>Corporate HQ</td>
                        </tr>
                        <tr>
                            <td><strong>Visa Vehicle</strong></td>
                            <td>Opportunity Card / Blue Card</td>
                            <td>Golden Visa (10-Year)</td>
                            <td>MPRP</td>
                            <td>Accredited Employer</td>
                            <td>Highly Skilled Migrant</td>
                        </tr>
                        <tr>
                            <td><strong>Capital Barrier</strong></td>
                            <td>Salary €48,300+</td>
                            <td>Investment AED 2M+</td>
                            <td>~€182,000</td>
                            <td>Job Offer</td>
                            <td>Salary €68,000+</td>
                        </tr>
                        <tr>
                            <td><strong>Tax Regime</strong></td>
                            <td>High / Progressive</td>
                            <td>0% Income Tax</td>
                            <td>Territorial</td>
                            <td>Moderate</td>
                            <td>30% Ruling (5yr)</td>
                        </tr>
                        <tr>
                            <td><strong>Citizenship Path</strong></td>
                            <td>5yr (Dual OK)</td>
                            <td>Very Difficult</td>
                            <td>5-7 Years</td>
                            <td>5 Years</td>
                            <td>5 Years</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// Strategies Section
function StrategiesSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Strategic Segmentation</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div className="glass-card" style={{ padding: '28px' }}>
                    <DollarSign size={32} style={{ color: 'var(--accent-success)', marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Wealth Maximizers</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Prioritize net income and capital accumulation during peak earning years.
                    </p>
                    <div className="badge badge-success">Target: UAE or Singapore</div>
                </div>
                <div className="glass-card" style={{ padding: '28px' }}>
                    <BadgeCheck size={32} style={{ color: 'var(--accent-primary)', marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Citizenship Seekers</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Willing to learn language, invest in long-term integration for passport strength.
                    </p>
                    <div className="badge badge-info">Target: Germany</div>
                </div>
                <div className="glass-card" style={{ padding: '28px' }}>
                    <MapPin size={32} style={{ color: 'var(--accent-warning)', marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Lifestyle Optimizers</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Prioritize work-life balance, safety, and family quality of life over pure income.
                    </p>
                    <div className="badge badge-warning">Target: NZ or Netherlands</div>
                </div>
            </div>
        </div>
    );
}
