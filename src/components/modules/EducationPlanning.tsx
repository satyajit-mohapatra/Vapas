import { useState } from 'react';
import {
    GraduationCap,
    BookOpen,
    MapPin,
    DollarSign,
    Heart,
    Users,
    Shield,
    CheckCircle2,
    AlertTriangle,
    Scale,
    ClipboardList,
    Sparkles,
    Target,
    ChevronRight,
    Star,
    Award,
    TrendingUp,
    HandHeart
} from 'lucide-react';

type ActiveSection = 'overview' | 'boards' | 'sen' | 'cities' | 'economics' | 'therapy' | 'transition';

interface BoardData {
    name: string;
    philosophy: string;
    westernContinuity: string;
    classSize: string;
    assessment: string;
    senAccommodation: string;
    annualCost: string;
    culturalContext: string;
    color: string;
}

interface CityData {
    name: string;
    tag: string;
    description: string;
    schools: SchoolInfo[];
    therapy: string;
    housing: string;
    color: string;
}

interface SchoolInfo {
    name: string;
    location: string;
    curriculum: string;
    senProvision: string;
    fees: string;
    highlight: string;
}

export default function EducationPlanning() {
    const [activeSection, setActiveSection] = useState<ActiveSection>('overview');

    const sections = [
        { id: 'overview', label: 'Executive Summary', icon: Sparkles },
        { id: 'boards', label: 'Boards', icon: BookOpen },
        { id: 'sen', label: 'Special Needs', icon: Heart },
        { id: 'cities', label: 'City Analysis', icon: MapPin },
        { id: 'economics', label: 'Economics', icon: DollarSign },
        { id: 'therapy', label: 'Therapy', icon: HandHeart },
        { id: 'transition', label: 'Transition', icon: ClipboardList },
    ];

    const boardsData: BoardData[] = [
        {
            name: 'IB (PYP)',
            philosophy: 'Inquiry-based, Student-led',
            westernContinuity: 'High',
            classSize: '15-25',
            assessment: 'Continuous, Project-based',
            senAccommodation: 'Excellent',
            annualCost: '₹5L - ₹20L+',
            culturalContext: 'Low (International)',
            color: '#6366f1'
        },
        {
            name: 'Cambridge (CIE)',
            philosophy: 'Structured, Concept-driven',
            westernContinuity: 'Moderate-High',
            classSize: '20-30',
            assessment: 'Standardized Checkpoints',
            senAccommodation: 'Good',
            annualCost: '₹3L - ₹10L',
            culturalContext: 'Moderate',
            color: '#10b981'
        },
        {
            name: 'CBSE',
            philosophy: 'Content-heavy, Standardized',
            westernContinuity: 'Low',
            classSize: '35-45+',
            assessment: 'Periodic Written Exams',
            senAccommodation: 'Variable',
            annualCost: '₹50K - ₹2L',
            culturalContext: 'High (India-centric)',
            color: '#f59e0b'
        },
        {
            name: 'ICSE',
            philosophy: 'Content-heavy, Comprehensive',
            westernContinuity: 'Low-Moderate',
            classSize: '35-45+',
            assessment: 'Periodic Written Exams',
            senAccommodation: 'Variable',
            annualCost: '₹70K - ₹2.5L',
            culturalContext: 'High',
            color: '#8b5cf6'
        }
    ];

    const cityData: CityData[] = [
        {
            name: 'Mumbai',
            tag: 'The Premium Standard',
            description: 'Highest quality specialized SEN care, highest financial and logistical cost',
            color: '#ef4444',
            schools: [
                {
                    name: 'American School of Bombay (ASB)',
                    location: 'Bandra Kurla Complex',
                    curriculum: 'US + IB',
                    senProvision: 'In-house psychologists, speech/OT therapists. 1:5 ratio.',
                    fees: '~₹28.5 Lakhs/year',
                    highlight: 'Closest to top-tier US private school'
                },
                {
                    name: 'Gateway School of Mumbai',
                    location: 'Govandi East',
                    curriculum: 'Specialized SEN',
                    senProvision: 'Built for SEN. Integrated therapies. 1:5 ratio.',
                    fees: 'Program-based',
                    highlight: 'Life-changing for learning disabilities/autism'
                }
            ],
            therapy: 'Excellent (Ummeed Center). Traffic affects access.',
            housing: '₹1.6L - ₹2.7L/month for 3BHK in BKC/Bandra'
        },
        {
            name: 'Bangalore',
            tag: 'The Inclusive Hub',
            description: 'Most SEN-friendly city. Relaxed culture, larger campuses, strong NGO network.',
            color: '#10b981',
            schools: [
                {
                    name: 'Indus International School',
                    location: 'Sarjapur',
                    curriculum: 'IB',
                    senProvision: 'Department of SEND. Large 40-acre campus.',
                    fees: '~₹7.6 Lakhs/year',
                    highlight: "India's top international day-cum-boarding"
                },
                {
                    name: 'Bangalore International School (BIS)',
                    location: 'Hennur (North)',
                    curriculum: 'IB',
                    senProvision: 'Learning Centre since 2003. Continuum of placement.',
                    fees: '~₹2-3 Lakhs + LC fees',
                    highlight: 'Parent-owned, tight-knit community'
                }
            ],
            therapy: 'Strong network. Tamahar for holistic intervention.',
            housing: '₹50K - ₹90K/month near Sarjapur/Whitefield'
        },
        {
            name: 'Gurgaon (NCR)',
            tag: 'The Corporate Infrastructure',
            description: 'Large, glossy campuses. Modern infrastructure. Winter AQI is severe concern.',
            color: '#f59e0b',
            schools: [
                {
                    name: 'Heritage Xperiential Learning',
                    location: 'Sector 62',
                    curriculum: 'IB/Maker-centred',
                    senProvision: 'Robust inclusion program led by senior psychologists.',
                    fees: '~₹1.8L/year (Primary)',
                    highlight: 'High value vs Mumbai schools'
                },
                {
                    name: 'Pathways School',
                    location: 'Aravali',
                    curriculum: 'IB Continuum',
                    senProvision: 'In-house OT & Speech. 15 min SaLT/OT per fortnight.',
                    fees: 'Premium',
                    highlight: 'Rare in-house therapy team'
                }
            ],
            therapy: 'Good availability. Pollution is health concern.',
            housing: '₹1.5L - ₹1.65L/month for luxury 3-4BHK'
        },
        {
            name: 'Hyderabad',
            tag: 'The Alternative',
            description: 'Growing hub with good international options. More affordable therapy.',
            color: '#06b6d4',
            schools: [
                {
                    name: 'International School of Hyderabad',
                    location: 'ICRISAT Campus',
                    curriculum: 'IB',
                    senProvision: 'WIDA framework. Student Support Services team.',
                    fees: 'Premium',
                    highlight: 'True non-profit expat feel'
                },
                {
                    name: 'Oakridge International',
                    location: 'Multiple',
                    curriculum: 'IB/CBSE',
                    senProvision: 'Shadow teacher model for significant needs.',
                    fees: 'Moderate-Premium',
                    highlight: 'Established network'
                }
            ],
            therapy: '₹1,000-₹2,500/session (more affordable)',
            housing: 'More affordable than Mumbai/Bangalore'
        }
    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':
                return <OverviewSection />;
            case 'boards':
                return <BoardsSection data={boardsData} />;
            case 'sen':
                return <SENSection />;
            case 'cities':
                return <CitiesSection data={cityData} />;
            case 'economics':
                return <EconomicsSection />;
            case 'therapy':
                return <TherapySection />;
            case 'transition':
                return <TransitionSection />;
            default:
                return <OverviewSection />;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <GraduationCap style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Education & SEN Planning
                    </h1>
                    <p className="page-description">
                        Digital intelligence for returning NRI families. Deep-dive analysis of pedagogical philosophies,
                        legal frameworks for disability rights, and the financial realities of international education.
                    </p>

                    {/* Tab Navigation */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        marginTop: '32px',
                        borderBottom: '1px solid var(--border-color)',
                        overflowX: 'auto',
                        paddingBottom: '0'
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
            <div className="glass-card" style={{ padding: '40px', marginBottom: '32px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Sparkles className="text-accent-primary" />
                    Executive Summary
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '800px' }}>
                    The decision to repatriate to India represents a profound shift in the family dynamic.
                    For families with elementary-aged children navigating Special Educational Needs (SEN),
                    this transition is not merely geographical but systemic.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div className="glass-card" style={{ padding: '24px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                        <Target size={20} color="#6366f1" />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Core Finding</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        While India offers educational infrastructure rivaling Western private institutions,
                        access is highly unequal and geographically concentrated.
                    </p>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                        <Award size={20} color="#10b981" />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Top Recommendation</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        <strong>Bangalore</strong> emerges as the most balanced ecosystem—high-quality
                        inclusive education, robust therapy network, and affordable cost of living.
                    </p>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                        <AlertTriangle size={20} color="#f59e0b" />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Critical Factor</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        The "Shadow Teacher" model is the primary vehicle for SEN inclusion—almost
                        exclusively parent-funded, unlike Western public school systems.
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <div className="glass-card" style={{ padding: '24px', flex: 1, minWidth: '300px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Shield size={18} /> Strategic Trade-off
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                        Trading the "systemic safety net" of the West (legal mandates, state funding)
                        for India's "resource potential" (affordable help, family support, private care).
                    </p>
                </div>
                <div className="glass-card" style={{ padding: '24px', flex: 1, minWidth: '300px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <TrendingUp size={18} /> Key Differentiator
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                        IB schools create a "global bubble"—excellent for transition but may lack depth
                        in Indian cultural context. Balance with extracurriculars.
                    </p>
                </div>
            </div>

            <div className="glass-card" style={{ padding: '28px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '12px', color: '#10b981' }}>
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#10b981' }}>Final Strategic Recommendations</h3>
                        <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                            <li><strong>Prioritize the School:</strong> Do not rent a house until admission is secured. Traffic defines quality of life.</li>
                            <li><strong>Budget for Support:</strong> Assume you will need a shadow teacher. If you don't, it's a bonus.</li>
                            <li><strong>Choose IB PYP:</strong> Stick to IB for elementary years to protect confidence during transition.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Educational Boards Section
function BoardsSection({ data }: { data: BoardData[] }) {
    const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>The Pedagogical Architecture</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                The choice of educational board dictates the child's daily lived experience.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                {data.map((board) => (
                    <div
                        key={board.name}
                        onClick={() => setSelectedBoard(selectedBoard === board.name ? null : board.name)}
                        className="glass-card"
                        style={{
                            padding: '24px',
                            cursor: 'pointer',
                            borderLeft: `4px solid ${board.color}`,
                            background: selectedBoard === board.name ? 'var(--bg-card-hover)' : 'var(--bg-card)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: `${board.color}20`,
                                    color: board.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{board.name}</h3>
                                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{board.philosophy}</span>
                                </div>
                            </div>
                            <ChevronRight style={{ transform: selectedBoard === board.name ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                            <div>
                                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Continuity</div>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: board.color }}>{board.westernContinuity}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Class Size</div>
                                <div style={{ fontSize: '14px', fontWeight: '600' }}>{board.classSize}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Cost</div>
                                <div style={{ fontSize: '14px', fontWeight: '600' }}>{board.annualCost}</div>
                            </div>
                        </div>

                        {selectedBoard === board.name && (
                            <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-tertiary)', borderRadius: '12px' }}>
                                <div style={{ display: 'grid', gap: '12px', fontSize: '14px' }}>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <span style={{ color: 'var(--text-muted)', minWidth: '120px' }}>Assessment:</span>
                                        <span>{board.assessment}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <span style={{ color: 'var(--text-muted)', minWidth: '120px' }}>SEN Support:</span>
                                        <span>{board.senAccommodation}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <span style={{ color: 'var(--text-muted)', minWidth: '120px' }}>Culture:</span>
                                        <span>{board.culturalContext}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="glass-card" style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Star size={18} fill="currentColor" /> Strategic Recommendation: IB PYP
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    For families prioritizing smooth emotional transition and special needs support,
                    the IB PYP offers far better structural flexibility for accommodating IEPs than
                    the rigid frameworks of CBSE or ICSE.
                </p>
            </div>
        </div>
    );
}

// Special Educational Needs Section
function SENSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>The Special Needs Ecosystem</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                <div className="glass-card" style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Scale size={20} /> Legal Framework: RPWD Act 2016
                    </h3>
                    <div style={{ display: 'grid', gap: '16px' }}>
                        {[
                            { title: 'Non-Discrimination', desc: 'No admission denial based on disability' },
                            { title: 'Reasonable Accommodation', desc: 'Extra time, scribes, barrier-free access' },
                            { title: 'Inclusive Education', desc: 'Right to mainstream school admission' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '12px', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '12px' }}>
                                <CheckCircle2 size={20} className="text-accent-success" style={{ flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{item.title}</div>
                                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '32px', borderTop: '4px solid var(--accent-warning)' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Users size={20} /> The "Shadow Teacher" Economy
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                        The most distinct feature of India's SEN landscape. Almost exclusively parent-funded.
                        Bridges mainstream instruction to child's comprehension.
                    </p>
                    <div style={{ display: 'grid', gap: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                            <span style={{ fontSize: '14px' }}>Entry Level (Psych Grads)</span>
                            <span style={{ fontWeight: '700', color: 'var(--accent-warning)' }}>₹15K - 25K</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                            <span style={{ fontSize: '14px' }}>Experienced Educators</span>
                            <span style={{ fontWeight: '700', color: 'var(--accent-warning)' }}>₹30K - 60K</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-warning)' }}>
                            <span style={{ fontSize: '14px' }}>High-End (Therapy Aides)</span>
                            <span style={{ fontWeight: '700', color: 'var(--accent-warning)' }}>Up to ₹1L</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Cities Section
function CitiesSection({ data }: { data: CityData[] }) {
    const [selectedCity, setSelectedCity] = useState<string>('Bangalore');
    const currentCity = data.find(c => c.name === selectedCity)!;

    return (
        <div className="animate-fadeIn">
            {/* City Tabs */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
                {data.map((city) => (
                    <button
                        key={city.name}
                        onClick={() => setSelectedCity(city.name)}
                        className={`tab-btn ${selectedCity === city.name ? 'active' : ''}`}
                        style={{
                            padding: '10px 20px',
                            background: selectedCity === city.name ? city.color : 'var(--bg-tertiary)',
                            color: selectedCity === city.name ? '#fff' : 'var(--text-secondary)',
                            borderRadius: 'var(--radius-full)',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s'
                        }}
                    >
                        {city.name}
                    </button>
                ))}
            </div>

            <div className="glass-card" style={{ padding: '32px', borderTop: `4px solid ${currentCity.color}` }}>
                <div style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>{currentCity.name}</h2>
                    <span className="badge" style={{ background: `${currentCity.color}20`, color: currentCity.color }}>{currentCity.tag}</span>
                    <p style={{ marginTop: '16px', fontSize: '16px', color: 'var(--text-secondary)' }}>{currentCity.description}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {currentCity.schools.map((school, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{school.name}</h4>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px', display: 'flex', gap: '8px' }}>
                                <MapPin size={14} /> {school.location}
                            </div>
                            <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Curriculum: </span> {school.curriculum}
                            </div>
                            <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>SEN: </span> {school.senProvision}
                            </div>
                            <div style={{ fontSize: '13px', marginBottom: '12px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Fees: </span> {school.fees}
                            </div>
                            <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '12px', display: 'flex', gap: '6px' }}>
                                <Star size={14} className="text-accent-warning" /> {school.highlight}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{ padding: '16px', background: 'var(--bg-tertiary)', borderRadius: '12px' }}>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Therapy Infrastructure</div>
                        <div style={{ fontSize: '14px' }}>{currentCity.therapy}</div>
                    </div>
                    <div style={{ padding: '16px', background: 'var(--bg-tertiary)', borderRadius: '12px' }}>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Housing Costs</div>
                        <div style={{ fontSize: '14px' }}>{currentCity.housing}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Economics Section
function EconomicsSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>The Economics of Education</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                "Tier 1" schools in India are priced globally. Returning does not guarantee lower education costs.
            </p>

            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', marginBottom: '32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ background: 'var(--bg-tertiary)', textAlign: 'left' }}>
                            <th style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>Cost Category</th>
                            <th style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>Mumbai (Tier 1)</th>
                            <th style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>Bangalore (Tier 1)</th>
                            <th style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>Gurgaon (Tier 1)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { cat: 'School Fees', mum: '₹28,00,000', blr: '₹8,00,000', ggn: '₹5,00,000', note: 'Tuition + Meals' },
                            { cat: 'Admission (One-time)', mum: '₹20,00,000', blr: '₹3,00,000', ggn: '₹2,40,000', note: 'Non-refundable' },
                            { cat: 'Shadow Teacher', mum: '₹4,80,000', blr: '₹3,00,000', ggn: '₹3,60,000', note: '10 mo. salary' },
                            { cat: 'Therapies', mum: '₹3,00,000', blr: '₹2,40,000', ggn: '₹2,40,000', note: '2 sessions/week' }
                        ].map((row, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ fontWeight: '500' }}>{row.cat}</div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{row.note}</div>
                                </td>
                                <td style={{ padding: '16px 24px' }}>{row.mum}</td>
                                <td style={{ padding: '16px 24px' }}>{row.blr}</td>
                                <td style={{ padding: '16px 24px' }}>{row.ggn}</td>
                            </tr>
                        ))}
                        <tr style={{ background: 'rgba(99, 102, 241, 0.1)', fontWeight: '700' }}>
                            <td style={{ padding: '16px 24px' }}>Total Year 1</td>
                            <td style={{ padding: '16px 24px', color: 'var(--accent-primary)' }}>~₹57.3 Lakhs</td>
                            <td style={{ padding: '16px 24px', color: 'var(--accent-primary)' }}>~₹17.4 Lakhs</td>
                            <td style={{ padding: '16px 24px', color: 'var(--accent-primary)' }}>~₹14.4 Lakhs</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="glass-card" style={{ padding: '24px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <AlertTriangle size={24} className="text-accent-danger" />
                <div>
                    <strong style={{ color: '#ef4444' }}>The Mumbai Premium</strong>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        Education in Mumbai (ASB level) costs nearly <strong>3x</strong> that of comparable
                        education in Gurgaon or Bangalore. For two children, this differential alone can define
                        financial viability.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Therapy Section
function TherapySection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>Therapy & Support Ecosystem</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                High-quality care at a fraction of US costs, but largely out-of-pocket.
            </p>

            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', marginBottom: '40px' }}>
                {[
                    { service: 'Speech Therapy', setting: 'Private Clinic', cost: '₹1,000 - ₹2,500/session', availability: 'High in Metros' },
                    { service: 'Occupational Therapy', setting: 'Specialized Center', cost: '₹1,500 - ₹4,000/session', availability: 'High in BLR/MUM' },
                    { service: 'ABA Therapy', setting: 'Center-based', cost: '₹800 - ₹3,000/session', availability: 'Growing, variable' },
                    { service: 'Assessment (Autism/ADHD)', setting: 'Private Hospital', cost: '₹2,500 - ₹10,000', availability: 'One-time' }
                ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--border-color)', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <Heart size={20} className="text-accent-primary" />
                            <div>
                                <div style={{ fontWeight: '600' }}>{item.service}</div>
                                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.setting}</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: '600', color: 'var(--accent-success)' }}>{item.cost}</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.availability}</div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Extracurriculars for Special Needs</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="glass-card" style={{ padding: '24px' }}>
                    <div style={{ fontSize: '24px', marginBottom: '12px' }}>🏊</div>
                    <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Swimming</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Yadhavi Sports Academy (Chennai/Bangalore) specializes in aquatic teaching for disabilities.</p>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                    <div style={{ fontSize: '24px', marginBottom: '12px' }}>⚽</div>
                    <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Sports</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Able Aura and Elite Sports Academy offer inclusive training focusing on motor skills.</p>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                    <div style={{ fontSize: '24px', marginBottom: '12px' }}>👥</div>
                    <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Social Circle</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Specialized academies best for building social circles—playdates harder due to cultural barriers.</p>
                </div>
            </div>
        </div>
    );
}

// Transition Section
function TransitionSection() {
    return (
        <div className="animate-fadeIn">
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>The Transition Guide</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                <div className="glass-card" style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Admission Timeline</h3>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {[
                            { time: '9-12 Mo. Out', tasks: 'Research schools, Contact SENCos, Update medical reports' },
                            { time: '6 Mo. Out', tasks: 'Apply to schools, Video interviews for child' },
                            { time: '3 Mo. Out', tasks: 'Finalize shadow teacher (interview via Zoom)' },
                            { time: 'On Arrival', tasks: 'School visits, Trial days' }
                        ].map((phase, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--bg-tertiary)', border: '2px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', marginBottom: '4px' }}>{phase.time}</div>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{phase.tasks}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Documentation Checklist</h3>
                    <div style={{ display: 'grid', gap: '16px' }}>
                        {[
                            { item: 'Passport/Visa', desc: 'OCI Card or Entry Visa' },
                            { item: 'Transcripts', desc: 'Last 2 years of report cards' },
                            { item: 'SEN Documentation', desc: 'IEP, PsyEd Assessment, OT/Speech reports' },
                            { item: 'Transfer Certificate', desc: 'Stamped TC stating "promoted"' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <input type="checkbox" style={{ marginTop: '4px', accentColor: 'var(--accent-success)' }} />
                                <div>
                                    <div style={{ fontWeight: '600' }}>{item.item}</div>
                                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', marginTop: '32px', background: 'rgba(99, 102, 241, 0.1)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>The "Stigma" Factor Advice</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    Indian society is still navigating the shift from "sympathy" to "rights."
                </p>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '14px' }}>
                    <strong>Pro Tip:</strong> Be selective about housing. Large, modern gated communities (Sobha, Prestige, DLF)
                    have cosmopolitan residents more sensitized to neurodiversity.
                </div>
            </div>
        </div>
    );
}
