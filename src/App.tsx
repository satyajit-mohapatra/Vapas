import { useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import GlobalMigrationHub from './components/modules/GlobalMigrationHub';
import FinancialEngineering from './components/modules/FinancialEngineering';
import RealEstateMatrix from './components/modules/RealEstateMatrix';
import R2IProtocol from './components/modules/R2IProtocol';
import GiftCity from './components/modules/GiftCity';
import RelocationWizard from './components/modules/RelocationWizard';
import EducationPlanning from './components/modules/EducationPlanning';
import HealthcareHub from './components/modules/HealthcareHub';
import CareerHub from './components/modules/CareerHub';
import FAQResources from './components/modules/FAQResources';

type ModuleId = 'dashboard' | 'migration' | 'financial' | 'realestate' | 'r2i' | 'giftcity' | 'wizard' | 'education' | 'healthcare' | 'career' | 'faq';

function App() {
  const [activeModule, setActiveModule] = useState<ModuleId>('dashboard');

  const handleModuleChange = useCallback((module: ModuleId) => {
    setActiveModule(module);
  }, []);

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard onNavigate={handleModuleChange} />;
      case 'migration':
        return <GlobalMigrationHub />;
      case 'financial':
        return <FinancialEngineering />;
      case 'realestate':
        return <RealEstateMatrix />;
      case 'r2i':
        return <R2IProtocol />;
      case 'giftcity':
        return <GiftCity />;
      case 'wizard':
        return <RelocationWizard />;
      case 'education':
        return <EducationPlanning />;
      case 'healthcare':
        return <HealthcareHub />;
      case 'career':
        return <CareerHub />;
      case 'faq':
        return <FAQResources />;
      default:
        return <Dashboard onNavigate={handleModuleChange} />;
    }
  };

  return (
    <div className="app">
      <Header activeModule={activeModule} onNavigate={handleModuleChange} />
      <main className="main-content">
        {renderModule()}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025-2026 Vāpas. Strategic Intelligence for the Global Indian.</p>
          <p className="disclaimer">
            Disclaimer: This platform provides educational information. Consult qualified professionals for specific legal and financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

