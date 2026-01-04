import {
    Globe2,
    Calculator,
    Building2,
    Home,
    Landmark,
    Rocket,
    TrendingUp,
    Shield,
    Users,
    ArrowRight,
    GraduationCap
} from 'lucide-react';

type ModuleId = 'dashboard' | 'migration' | 'financial' | 'realestate' | 'r2i' | 'giftcity' | 'wizard' | 'education';

interface DashboardProps {
    onNavigate: (module: ModuleId) => void;
}

const modules = [
    {
        id: 'migration' as ModuleId,
        icon: Globe2,
        iconColor: 'blue',
        title: 'Global Migration Hub',
        description: 'Strategic analysis of Germany, UAE, Malta, NZ, Netherlands. Visa pathways, tax regimes, citizenship timelines.',
        badge: '2025-2026',
    },
    {
        id: 'financial' as ModuleId,
        icon: Calculator,
        iconColor: 'green',
        title: 'Financial Engineering',
        description: 'OBBBA remittance tax defense, DTAA optimization, PFIC avoidance, Two-Country Baseline framework.',
        badge: 'Critical Update',
    },
    {
        id: 'realestate' as ModuleId,
        icon: Building2,
        iconColor: 'purple',
        title: 'Real Estate Matrix',
        description: 'Three Universes strategy: Preservation, Balance, Acceleration. REITs, SM REITs, and land banking.',
        badge: null,
    },
    {
        id: 'r2i' as ModuleId,
        icon: Home,
        iconColor: 'orange',
        title: 'R2I Protocol',
        description: 'Seven Critical Pillars for return. RNOR optimization, RFC accounts, healthcare, 401k strategy.',
        badge: 'Essential',
    },
    {
        id: 'giftcity' as ModuleId,
        icon: Landmark,
        iconColor: 'cyan',
        title: 'GIFT City Hub',
        description: 'Offshore-onshore investment. AIFs, Family Investment Funds, IBU deposits. Tax-free structures.',
        badge: null,
    },
    {
        id: 'wizard' as ModuleId,
        icon: Rocket,
        iconColor: 'rose',
        title: 'Relocation Wizard',
        description: 'Comprehensive 7-step analysis. Exit tax, 401k strategy, lifestyle parity, education planning.',
        badge: 'Start Here',
    },
    {
        id: 'education' as ModuleId,
        icon: GraduationCap,
        iconColor: 'blue',
        title: 'Education Planning',
        description: 'Special needs support, international schools, city infrastructure analysis, board comparison for NRI families.',
        badge: 'New',
    },
];

const stats = [
    { label: 'Active NRI Diaspora', value: '31M+', icon: Users },
    { label: 'Annual Remittances', value: '$125B', icon: TrendingUp },
    { label: 'Avg Tax Savings (RNOR)', value: '₹15-30L', icon: Shield },
    { label: 'GIFT City Benefits', value: '10yr Tax-Free', icon: Landmark },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
    return (
        <div className="dashboard animate-fadeIn">
            {/* Privacy Banner */}
            <div className="privacy-banner">
                <Shield size={16} />
                <span><strong>Privacy First:</strong> All calculations run locally. No data stored on servers.</span>
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-content">
                    <h1 className="hero-title">
                        The Global Indian<br />Intelligence Platform
                    </h1>
                    <p className="hero-subtitle">
                        Strategic mobility, wealth engineering, and repatriation in the new world order (2025-2026).
                        Navigate the dissolution of the unipolar migration model.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => onNavigate('wizard')}>
                            <Rocket size={18} />
                            Start Relocation Wizard
                        </button>
                        <button className="btn-secondary" onClick={() => onNavigate('migration')}>
                            Explore Migration Corridors
                        </button>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Stats Row */}
                <div className="stats-row">
                    {stats.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <stat.icon size={24} className="stat-icon" style={{ color: 'var(--accent-primary)', marginBottom: '12px' }} />
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Strategic Intelligence Modules</h2>
                    <p className="section-subtitle">
                        Comprehensive tools for the high-net-worth NRI, global professional, and cross-border investor.
                    </p>
                </div>

                {/* Module Grid */}
                <div className="module-grid">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className="module-card"
                            onClick={() => onNavigate(module.id)}
                        >
                            <div className={`module-icon ${module.iconColor}`}>
                                <module.icon size={28} />
                            </div>
                            <h3 className="module-title">{module.title}</h3>
                            <p className="module-description">{module.description}</p>
                            {module.badge && <span className="module-badge">{module.badge}</span>}
                            <div className="module-arrow">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Executive Summary Card */}
                <div className="executive-summary glass-card">
                    <h3>Executive Summary: The End of the Unipolar Dream</h3>
                    <p>
                        The historical narrative of Indian emigration—a singular trajectory toward the United States—has fractured.
                        The "American Dream" is besieged by decade-long green card backlogs, the OBBBA remittance tax threat,
                        and eroding PPP advantage. A "Category 2" of destinations has emerged: Germany with its Chancenkarte,
                        UAE's Golden Visa, Netherlands' 30% Ruling.
                    </p>
                    <p>
                        Most significantly, the "Return to India" (R2I) is no longer a retreat but a strategic capital deployment.
                        GIFT City, SM REITs, and the RNOR tax window create a "brain circulation" economy.
                    </p>
                    <div className="quick-actions">
                        <button className="btn-secondary" onClick={() => onNavigate('migration')}>
                            Compare Destinations
                        </button>
                        <button className="btn-secondary" onClick={() => onNavigate('r2i')}>
                            R2I Roadmap
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        .dashboard {
          padding-bottom: 60px;
        }

        .stat-icon {
          opacity: 0.9;
        }

        .module-arrow {
          position: absolute;
          bottom: 24px;
          right: 24px;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .module-card:hover .module-arrow {
          color: var(--accent-primary);
          transform: translateX(4px);
        }

        .executive-summary {
          padding: 40px;
          margin-top: 60px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
        }

        .executive-summary h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .executive-summary p {
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 16px;
        }
      `}</style>
        </div>
    );
}
