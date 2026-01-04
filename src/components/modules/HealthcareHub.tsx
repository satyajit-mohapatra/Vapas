import { useState } from 'react';
import {
    Heart,
    Shield,
    Building2,
    Smartphone,
    Brain,
    CheckCircle2,
    AlertCircle,
    DollarSign,
    Clock,
    Info,
    TrendingDown
} from 'lucide-react';
import { HEALTHCARE_DATA, HEALTHCARE_COMPREHENSIVE } from '../../data/constants';
import { HEALTHCARE_TOPICS } from '../../data/moduleDetails';
import { TopicCard, TopicDetailModal, useTopicSelection } from '../shared/TopicComponents';

type ActiveTab = 'overview' | 'insurance' | 'hospitals' | 'telemedicine' | 'mentalHealth';

export default function HealthcareHub() {
    const [activeTab, setActiveTab] = useState<ActiveTab>('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Heart },
        { id: 'insurance', label: 'Insurance', icon: Shield },
        { id: 'hospitals', label: 'Hospitals', icon: Building2 },
        { id: 'telemedicine', label: 'Telemedicine', icon: Smartphone },
        { id: 'mentalHealth', label: 'Mental Health', icon: Brain },
    ];

    const renderTab = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'insurance': return <InsuranceTab />;
            case 'hospitals': return <HospitalsTab />;
            case 'telemedicine': return <TelemedicineTab />;
            case 'mentalHealth': return <MentalHealthTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Heart style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Healthcare Hub
                    </h1>
                    <p className="page-description">
                        Navigate India's healthcare ecosystem. Insurance strategies, hospital networks, telemedicine platforms,
                        and mental health resources for returning NRIs.
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

// Overview Tab
function OverviewTab() {
    const { selectedTopic, openTopic, closeTopic } = useTopicSelection();

    return (
        <div className="animate-fadeIn">
            {/* Expandable Topics */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>📚 Explore Healthcare Topics</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
                Click on any topic to view detailed information, action steps, and official sources.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {HEALTHCARE_TOPICS.map((topic) => (
                    <TopicCard
                        key={topic.id}
                        topic={topic}
                        onClick={() => openTopic(topic)}
                    />
                ))}
            </div>

            {/* Topic Detail Modal */}
            {selectedTopic && (
                <TopicDetailModal
                    topic={selectedTopic}
                    onClose={closeTopic}
                />
            )}

            {/* Key Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent-success)' }}>90%</div>
                    <div className="stat-label">Cost Savings vs US</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent-primary)' }}>35,000+</div>
                    <div className="stat-label">Network Hospitals</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent-warning)' }}>2-4 Yrs</div>
                    <div className="stat-label">PED Waiting Period</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{ color: 'var(--accent-info)' }}>₹40-60K</div>
                    <div className="stat-label">Annual Premium (₹1Cr)</div>
                </div>
            </div>

            {/* The Pre-Return Hack */}
            <div className="glass-card" style={{ padding: '32px', marginBottom: '32px', borderLeft: '4px solid var(--accent-success)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <Clock size={28} style={{ color: 'var(--accent-success)' }} />
                    <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--accent-success)' }}>
                        The Pre-Return Healthcare Hack
                    </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    <div>
                        <h4 style={{ color: 'var(--accent-danger)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <AlertCircle size={18} />
                            The Problem
                        </h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            Indian health insurance has <strong>2-4 year waiting periods</strong> for Pre-Existing Diseases (PEDs).
                            If you buy insurance upon arrival, you have dangerous coverage gaps.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--accent-success)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle2 size={18} />
                            The Solution
                        </h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            Buy an Indian health insurance policy <strong>3 years before</strong> your planned return.
                            Maintain it while abroad. By the time you land, waiting periods are exhausted!
                        </p>
                    </div>
                </div>
            </div>

            {/* Cost Comparison */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <TrendingDown size={24} style={{ color: 'var(--accent-success)' }} />
                US vs India: Medical Cost Comparison
            </h2>
            <div className="glass-card" style={{ padding: '24px', overflow: 'auto', marginBottom: '32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Service</th>
                            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>USA ($)</th>
                            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>India ($)</th>
                            <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {HEALTHCARE_DATA.usVsIndiaComparison.map((item, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '12px', fontWeight: '500' }}>{item.service}</td>
                                <td style={{ padding: '12px', textAlign: 'right', color: 'var(--accent-danger)' }}>
                                    ${item.usa.toLocaleString()}
                                </td>
                                <td style={{ padding: '12px', textAlign: 'right', color: 'var(--accent-success)', fontWeight: '600' }}>
                                    ${item.india.toLocaleString()}
                                </td>
                                <td style={{ padding: '12px', textAlign: 'right' }}>
                                    <span style={{
                                        background: 'rgba(16, 185, 129, 0.15)',
                                        color: 'var(--accent-success)',
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontWeight: '600',
                                        fontSize: '13px'
                                    }}>
                                        {item.savingsPercent}%
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pre-Return Checklist */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Pre-Return Health Checklist</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                {HEALTHCARE_COMPREHENSIVE.preReturnChecklist.map((item, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '700',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            {idx + 1}
                        </div>
                        <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{item.item}</h4>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.reason}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Insurance Tab
function InsuranceTab() {
    return (
        <div className="animate-fadeIn">
            {/* PED Waiting Period Alert */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderTop: '4px solid var(--accent-warning)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <AlertCircle size={22} style={{ color: 'var(--accent-warning)' }} />
                    Pre-Existing Disease (PED) Waiting Period
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-warning)', fontSize: '24px' }}>
                            {HEALTHCARE_DATA.pedWaitingPeriod.standard}
                        </div>
                        <div className="stat-label">Standard Waiting Period</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value" style={{ color: 'var(--accent-success)', fontSize: '24px' }}>
                            {HEALTHCARE_DATA.pedWaitingPeriod.withBuyback}
                        </div>
                        <div className="stat-label">With PED Buyback Option</div>
                    </div>
                </div>
            </div>

            {/* Insurance Providers */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Shield size={24} style={{ color: 'var(--accent-primary)' }} />
                Top Insurance Providers (2025)
            </h2>
            <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
                {HEALTHCARE_COMPREHENSIVE.insuranceProviders.map((provider, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                            <div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{provider.name}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{provider.specialty}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Claim Ratio</div>
                                    <div style={{ fontWeight: '700', color: 'var(--accent-success)' }}>{provider.claimRatio}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Network</div>
                                    <div style={{ fontWeight: '600' }}>{provider.networkHospitals.toLocaleString()}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Premium</div>
                                    <div style={{ fontWeight: '600', color: 'var(--india-saffron)' }}>{provider.premiumRange}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recommended Coverage */}
            <div className="glass-card" style={{ padding: '28px', borderLeft: '4px solid var(--accent-success)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Recommended Coverage Structure</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Base Policy</div>
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>₹10 Lakhs</div>
                    </div>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Super Top-up</div>
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>₹90 Lakhs</div>
                    </div>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Coverage</div>
                        <div style={{ fontWeight: '700', fontSize: '18px', color: 'var(--accent-success)' }}>₹1 Crore</div>
                    </div>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Est. Premium</div>
                        <div style={{ fontWeight: '700', fontSize: '18px' }}>₹40-60K/yr</div>
                    </div>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px' }}>
                    <Info size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                    {HEALTHCARE_DATA.opdNote}
                </p>
            </div>
        </div>
    );
}

// Hospitals Tab
function HospitalsTab() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Building2 size={24} style={{ color: 'var(--accent-primary)' }} />
                Major Hospital Chains
            </h2>
            <div style={{ display: 'grid', gap: '20px' }}>
                {HEALTHCARE_COMPREHENSIVE.hospitalChains.map((hospital, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '28px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>{hospital.name}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--accent-primary)' }}>{hospital.specialty}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--accent-success)' }}>{hospital.locations}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Locations</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Coverage</div>
                                <div style={{ fontWeight: '600' }}>{hospital.cities}</div>
                            </div>
                            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Telemedicine</div>
                                <div style={{ fontWeight: '600', color: 'var(--accent-info)' }}>{hospital.telemedicine}</div>
                            </div>
                            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Mental Health</div>
                                <div style={{ fontWeight: '600' }}>{hospital.mentalHealth}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Telemedicine Tab
function TelemedicineTab() {
    return (
        <div className="animate-fadeIn">
            {/* Benefits */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderLeft: '4px solid var(--accent-info)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Smartphone size={22} style={{ color: 'var(--accent-info)' }} />
                    Why Telemedicine in India?
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {HEALTHCARE_COMPREHENSIVE.telemedicine.benefits.map((benefit, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '20px',
                            fontSize: '13px'
                        }}>
                            <CheckCircle2 size={14} style={{ color: 'var(--accent-success)' }} />
                            {benefit}
                        </div>
                    ))}
                </div>
            </div>

            {/* Platforms */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Top Telemedicine Platforms</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {HEALTHCARE_COMPREHENSIVE.telemedicine.platforms.map((platform, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px',
                            fontSize: '24px'
                        }}>
                            📱
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{platform.name}</h3>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--accent-success)', marginBottom: '8px' }}>
                            {platform.consultFee}
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{platform.specialty}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Mental Health Tab
function MentalHealthTab() {
    return (
        <div className="animate-fadeIn">
            {/* Insurance Coverage Update */}
            <div className="glass-card" style={{ padding: '28px', marginBottom: '32px', borderTop: '4px solid var(--accent-success)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Shield size={22} style={{ color: 'var(--accent-success)' }} />
                    2025: Mental Health Now Covered!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                    {HEALTHCARE_COMPREHENSIVE.mentalHealth.insuranceCoverage.mandate}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {HEALTHCARE_COMPREHENSIVE.mentalHealth.insuranceCoverage.coverage.map((item, idx) => (
                        <span key={idx} style={{
                            padding: '6px 14px',
                            background: 'rgba(16, 185, 129, 0.15)',
                            color: 'var(--accent-success)',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '500'
                        }}>
                            ✓ {item}
                        </span>
                    ))}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Estimated Premium: {HEALTHCARE_COMPREHENSIVE.mentalHealth.insuranceCoverage.premium}
                </p>
            </div>

            {/* Therapy Costs */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <DollarSign size={24} style={{ color: 'var(--accent-primary)' }} />
                Therapy & Psychiatry Costs
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>In-Person Therapy</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--india-saffron)' }}>
                        {HEALTHCARE_COMPREHENSIVE.mentalHealth.therapyCost.inPerson}
                    </div>
                </div>
                <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Online Therapy</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent-success)' }}>
                        {HEALTHCARE_COMPREHENSIVE.mentalHealth.therapyCost.online}
                    </div>
                </div>
                <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Psychiatrist (Initial)</div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>
                        {HEALTHCARE_COMPREHENSIVE.mentalHealth.therapyCost.psychiatrist}
                    </div>
                </div>
                <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Follow-up</div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>
                        {HEALTHCARE_COMPREHENSIVE.mentalHealth.therapyCost.followUp}
                    </div>
                </div>
            </div>

            {/* Mental Health Platforms */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Brain size={24} style={{ color: 'var(--accent-info)' }} />
                Mental Health Platforms
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {HEALTHCARE_COMPREHENSIVE.mentalHealth.platforms.map((platform, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px' }}>{platform.name}</h3>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent-success)', marginBottom: '8px' }}>
                            {platform.starting}
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{platform.specialty}</p>
                    </div>
                ))}
            </div>

            {/* Crisis Helpline */}
            <div className="alert alert-success" style={{ marginTop: '32px' }}>
                <Info size={24} />
                <div>
                    <strong>24/7 Free Helpline: Tele-MANAS (14416)</strong><br />
                    <span style={{ fontSize: '14px' }}>Government mental health helpline with trained counselors. Available in multiple languages.</span>
                </div>
            </div>
        </div>
    );
}
