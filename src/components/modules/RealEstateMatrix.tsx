import { useState } from 'react';
import {
    Building2,
    Truck,
    FileText,
    DollarSign,
    Box,
    Thermometer,
    Plane
} from 'lucide-react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from 'recharts';
import { CITY_INTELLIGENCE } from '../../data/relocationReportData';
import { REAL_ESTATE_TOPICS } from '../../data/moduleDetails';
import { TopicCard, TopicDetailModal, useTopicSelection } from '../shared/TopicComponents';

// --- Local Data for Visualizations ---
const OVERVIEW_CHART_DATA = [
    { name: 'Bengaluru', rent: 70000, appreciation: 7.2 },
    { name: 'Hyderabad', rent: 60000, appreciation: 8.5 },
    { name: 'Gurgaon', rent: 85000, appreciation: 6.5 },
    { name: 'Pune', rent: 50000, appreciation: 6.0 },
    { name: 'Chennai', rent: 45000, appreciation: 5.5 },
    { name: 'Noida', rent: 40000, appreciation: 9.0 },
];

const CITY_RADAR_DATA: Record<string, any[]> = {
    bengaluru: [
        { subject: 'Schools', A: 9, fullMark: 10 },
        { subject: 'Traffic (Inv)', A: 2, fullMark: 10 },
        { subject: 'Social Life', A: 9, fullMark: 10 },
        { subject: 'Medical', A: 8, fullMark: 10 },
        { subject: 'Air Quality', A: 7, fullMark: 10 },
    ],
    hyderabad: [
        { subject: 'Schools', A: 8, fullMark: 10 },
        { subject: 'Traffic (Inv)', A: 6, fullMark: 10 },
        { subject: 'Social Life', A: 7, fullMark: 10 },
        { subject: 'Medical', A: 8, fullMark: 10 },
        { subject: 'Air Quality', A: 7, fullMark: 10 },
    ],
    gurgaon: [
        { subject: 'Schools', A: 9, fullMark: 10 },
        { subject: 'Traffic (Inv)', A: 6, fullMark: 10 },
        { subject: 'Social Life', A: 8, fullMark: 10 },
        { subject: 'Medical', A: 8, fullMark: 10 },
        { subject: 'Air Quality', A: 2, fullMark: 10 },
    ],
    pune: [
        { subject: 'Schools', A: 7, fullMark: 10 },
        { subject: 'Traffic (Inv)', A: 5, fullMark: 10 },
        { subject: 'Social Life', A: 7, fullMark: 10 },
        { subject: 'Medical', A: 7, fullMark: 10 },
        { subject: 'Air Quality', A: 6, fullMark: 10 },
    ],
    chennai: [
        { subject: 'Schools', A: 8, fullMark: 10 },
        { subject: 'Traffic (Inv)', A: 6, fullMark: 10 },
        { subject: 'Social Life', A: 6, fullMark: 10 },
        { subject: 'Medical', A: 9, fullMark: 10 },
        { subject: 'Air Quality', A: 7, fullMark: 10 },
    ],
    noida: [
        { subject: 'Schools', A: 7, fullMark: 10 },
        { subject: 'Traffic (Inv)', A: 8, fullMark: 10 },
        { subject: 'Social Life', A: 5, fullMark: 10 },
        { subject: 'Medical', A: 6, fullMark: 10 },
        { subject: 'Air Quality', A: 3, fullMark: 10 },
    ]
};



export default function RealEstateMatrix() {
    const [activeTab, setActiveTab] = useState<'overview' | 'city-guide' | 'toolkit'>('overview');
    const [selectedCityId, setSelectedCityId] = useState<string>('bengaluru');
    const { selectedTopic, openTopic, closeTopic } = useTopicSelection();

    const selectedCity = CITY_INTELLIGENCE[selectedCityId as keyof typeof CITY_INTELLIGENCE];

    const renderOverviewTab = () => (
        <div className="animate-fadeIn">
            {/* Expandable Topics */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>📚 Explore Real Estate Topics</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
                Click on any topic to view detailed information, action steps, and official sources.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {REAL_ESTATE_TOPICS.map((topic) => (
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

            {/* Top Cards Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                {OVERVIEW_CHART_DATA.map((city, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{city.name}</h3>
                        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Avg 3BHK Rent</p>
                        <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent-primary)' }}>
                            ₹{city.rent.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>

            {/* Market Overview Section */}
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>Market Overview: Cost vs. Lifestyle</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                Before diving into specific neighborhoods, understand how the major IT hubs stack up against each other.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                {/* Rent Bar Chart */}
                <div className="glass-card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '24px' }}>Average Monthly Rent (3BHK)</h3>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer>
                            <BarChart data={OVERVIEW_CHART_DATA}>
                                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} stroke="var(--text-muted)" />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} stroke="var(--text-muted)" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                                    cursor={{ fill: 'var(--bg-tertiary)' }}
                                />
                                <Bar dataKey="rent" fill="var(--accent-warning)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Appreciation Line Chart */}
                <div className="glass-card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '24px' }}>5-Year Price Appreciation (CAGR %)</h3>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer>
                            <LineChart data={OVERVIEW_CHART_DATA}>
                                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} stroke="var(--text-muted)" />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} stroke="var(--text-muted)" />
                                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
                                <Line type="monotone" dataKey="appreciation" stroke="var(--accent-success)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCityGuideTab = () => (
        <div className="animate-fadeIn">
            {/* City Selector */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
                {Object.values(CITY_INTELLIGENCE).map((city) => (
                    <button
                        key={city.id}
                        onClick={() => setSelectedCityId(city.id)}
                        className={`tab-btn ${selectedCityId === city.id ? 'active' : ''}`}
                        style={{
                            padding: '10px 20px',
                            background: selectedCityId === city.id ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                            color: selectedCityId === city.id ? '#fff' : 'var(--text-secondary)',
                            borderRadius: 'var(--radius-full)',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {city.name}
                    </button>
                ))}
            </div>

            {/* City Header */}
            <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>{selectedCity.name}</h2>
                        <div className="badge" style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-primary)', marginBottom: '16px' }}>
                            {selectedCity.tagline}
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Plane size={16} />
                            <span>Airport Connectivity</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Thermometer size={16} />
                            <span>Weather Index</span>
                        </div>
                    </div>
                </div>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px' }}>
                    {selectedCity.overview}
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                {/* Pricing Table */}
                <div className="glass-card" style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Property Pricing & Trends</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                                <th style={{ padding: '12px 0', color: 'var(--text-muted)' }}>Micro-Market</th>
                                <th style={{ padding: '12px 0', color: 'var(--text-muted)' }}>Buy Price</th>
                                <th style={{ padding: '12px 0', color: 'var(--text-muted)' }}>Rental/Yield</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCity.pricing.data.map((row, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '16px 0', fontWeight: '500' }}>{row.location}</td>
                                    <td style={{ padding: '16px 0', color: 'var(--text-secondary)' }}>{row.price}</td>
                                    <td style={{ padding: '16px 0', color: 'var(--accent-success)' }}>{row.rental}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Lifestyle Radar */}
                <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', width: '100%' }}>Lifestyle Radar</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px', width: '100%' }}>
                        Scores out of 10. Higher is better (Traffic score inverted).
                    </p>
                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer>
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CITY_RADAR_DATA[selectedCityId] || CITY_RADAR_DATA['bengaluru']}>
                                <PolarGrid stroke="var(--border-color)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                <Radar
                                    name={selectedCity.name}
                                    dataKey="A"
                                    stroke="var(--accent-warning)"
                                    fill="var(--accent-warning)"
                                    fillOpacity={0.4}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Top Neighborhoods */}
            <div style={{ marginTop: '32px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Top Neighborhoods</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {selectedCity.microMarkets.map((mm, idx) => (
                        <div key={idx} className="glass-card" style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <h4 style={{ fontSize: '16px', fontWeight: '600' }}>{mm.name}</h4>
                                <span className="badge" style={{ fontSize: '10px' }}>{mm.type}</span>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>{mm.proximity}</p>

                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Truck size={14} />
                                {mm.connectivity.substring(0, 40)}...
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderToolkitTab = () => (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>NRI Toolkit: Logistics & Finance</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                Essential checklist for moving your life from the US to India.
            </p>

            {/* 3-Column Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
                {/* Documentation */}
                <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid var(--accent-info)' }}>
                    <FileText size={32} style={{ color: 'var(--text-muted)', marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Documentation</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li>• OCI Card (Lifetime visa) or Employment Visa.</li>
                        <li>• PAN Card for taxes (Apply online).</li>
                        <li>• Aadhaar Card (Apply upon arrival).</li>
                        <li>• NRE/NRO Bank Accounts.</li>
                    </ul>
                </div>

                {/* Taxes & Money */}
                <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid var(--accent-warning)' }}>
                    <DollarSign size={32} style={{ color: 'var(--accent-warning)', marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Taxes & Money</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li>• RNOR Status: Tax exemption on foreign income for 2 years.</li>
                        <li>• Repatriation: NRE funds are fully repatriable.</li>
                        <li>• GST: 18% on services (brokerage, movers).</li>
                    </ul>
                </div>

                {/* Logistics */}
                <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid var(--accent-success)' }}>
                    <Box size={32} style={{ color: 'var(--accent-success)', marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Move Logistics</h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li>• Transfer of Residence (TR) benefits for lower customs duty.</li>
                        <li>• School Admissions: Dec-Jan for most International boards.</li>
                        <li>• Pet Relocation: Requires NOC and health certs.</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Building2 style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Real Estate & Relocation Hub
                    </h1>
                    <p className="page-description">
                        Comprehensive intelligence on housing markets, city livability, and relocation logistics.
                    </p>

                    {/* Tab Navigation */}
                    <div style={{ display: 'flex', gap: '32px', marginTop: '32px', borderBottom: '1px solid var(--border-color)' }}>
                        <button
                            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                            style={{
                                padding: '0 0 16px 0',
                                background: 'none',
                                border: 'none',
                                borderBottom: activeTab === 'overview' ? '3px solid var(--accent-primary)' : '3px solid transparent',
                                color: activeTab === 'overview' ? 'var(--text-primary)' : 'var(--text-muted)',
                                fontWeight: activeTab === 'overview' ? '600' : '500',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }}
                        >
                            Market Overview
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'city-guide' ? 'active' : ''}`}
                            onClick={() => setActiveTab('city-guide')}
                            style={{
                                padding: '0 0 16px 0',
                                background: 'none',
                                border: 'none',
                                borderBottom: activeTab === 'city-guide' ? '3px solid var(--accent-primary)' : '3px solid transparent',
                                color: activeTab === 'city-guide' ? 'var(--text-primary)' : 'var(--text-muted)',
                                fontWeight: activeTab === 'city-guide' ? '600' : '500',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }}
                        >
                            City Guide
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'toolkit' ? 'active' : ''}`}
                            onClick={() => setActiveTab('toolkit')}
                            style={{
                                padding: '0 0 16px 0',
                                background: 'none',
                                border: 'none',
                                borderBottom: activeTab === 'toolkit' ? '3px solid var(--accent-primary)' : '3px solid transparent',
                                color: activeTab === 'toolkit' ? 'var(--text-primary)' : 'var(--text-muted)',
                                fontWeight: activeTab === 'toolkit' ? '600' : '500',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }}
                        >
                            NRI Toolkit
                        </button>
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '40px 24px' }}>
                {activeTab === 'overview' && renderOverviewTab()}
                {activeTab === 'city-guide' && renderCityGuideTab()}
                {activeTab === 'toolkit' && renderToolkitTab()}
            </div>
        </div>
    );
}
