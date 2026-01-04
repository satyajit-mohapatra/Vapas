import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

type ModuleId = 'dashboard' | 'migration' | 'financial' | 'realestate' | 'r2i' | 'giftcity' | 'wizard' | 'education' | 'healthcare' | 'career' | 'faq' | 'checklist';

interface HeaderProps {
  activeModule: ModuleId;
  onNavigate: (module: ModuleId) => void;
}

// Ordered by priority for NRI returning to India
const navItems: { id: ModuleId; label: string }[] = [
  { id: 'dashboard', label: 'Overview' },
  { id: 'checklist', label: '📋 Checklist' },  // Master checklist - most actionable
  { id: 'r2i', label: 'R2I Protocol' },        // Core relocation logistics
  { id: 'financial', label: 'Financial Strategy' }, // 401k, taxation, banking
  { id: 'realestate', label: 'Real Estate' },  // Finding housing
  { id: 'healthcare', label: 'Healthcare' },   // Insurance transition
  { id: 'career', label: 'Career' },           // Job search
  { id: 'education', label: 'Education' },     // For families with children
  { id: 'migration', label: 'Global Migration' }, // Research phase
  { id: 'giftcity', label: 'GIFT City' },      // Specialized investment
  { id: 'faq', label: 'FAQ & Links' },         // Quick reference
];

export default function Header({ activeModule, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo" onClick={() => onNavigate('dashboard')}>
          <Globe className="logo-icon" />
          <div className="logo-text">
            <span className="logo-name">Vāpas</span>
            <span className="logo-tagline">Global Indian Intelligence</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeModule === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="btn-primary"
            onClick={() => onNavigate('wizard')}
          >
            Start Wizard
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeModule === item.id ? 'active' : ''}`}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .header-logo:hover {
          opacity: 0.8;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          color: var(--accent-primary);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-size: 22px;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-tagline {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .header-nav {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          padding: 16px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .mobile-nav-link {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 14px 16px;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--text-primary);
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }

          .header-actions .btn-primary {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
