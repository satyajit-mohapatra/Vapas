import { useState } from 'react';
import {
    Rocket,
    User,
    CreditCard,
    PiggyBank,
    Calculator,
    Home,
    GraduationCap,
    BarChart3,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    AlertTriangle,
    Info
} from 'lucide-react';
import { CITY_DATA, SCHOOLS_DATA, TAX_CONSTANTS } from '../../data/constants';

interface WizardData {
    basicInfo: {
        workingMembers: string;
        kids: string;
        currentSalary: string;
        expectedSalary: string;
        savings: string;
    };
    residency: {
        citizenshipStatus: string;
        greenCardYears: string;
        globalNetWorth: string;
        yearsInUSLast10: string;
    };
    assets: {
        four01kBalance: string;
        age: string;
        withdrawalStrategy: string;
        usInvestments: string;
    };
    lifestyle: {
        currentExpenses: string;
        targetCity: string;
        housingType: string;
    };
    education: {
        childAges: string;
        educationGoal: string;
        budgetPreference: string;
    };
}

const steps = [
    { id: 1, title: 'Basic Info', icon: User },
    { id: 2, title: 'Residency', icon: CreditCard },
    { id: 3, title: 'Assets', icon: PiggyBank },
    { id: 4, title: 'Tax Strategy', icon: Calculator },
    { id: 5, title: 'Lifestyle', icon: Home },
    { id: 6, title: 'Education', icon: GraduationCap },
    { id: 7, title: 'Results', icon: BarChart3 },
];

export default function RelocationWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [wizardData, setWizardData] = useState<WizardData>({
        basicInfo: { workingMembers: '', kids: '', currentSalary: '', expectedSalary: '', savings: '' },
        residency: { citizenshipStatus: '', greenCardYears: '', globalNetWorth: '', yearsInUSLast10: '10' },
        assets: { four01kBalance: '', age: '', withdrawalStrategy: '', usInvestments: '' },
        lifestyle: { currentExpenses: '', targetCity: '', housingType: '' },
        education: { childAges: '', educationGoal: '', budgetPreference: '' }
    });

    const updateData = (section: keyof WizardData, field: string, value: string) => {
        setWizardData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const calculateResults = () => {
        const { residency, assets, lifestyle, education } = wizardData;

        // Exit Tax Analysis
        const greenCardYears = parseInt(residency.greenCardYears) || 0;
        const netWorth = parseFloat(residency.globalNetWorth) || 0;
        let exitTaxRisk = 'Low';
        let exitTaxAmount = '$0';

        if (residency.citizenshipStatus === 'green-card' && greenCardYears >= TAX_CONSTANTS.EXIT_TAX_THRESHOLD_YEARS) {
            if (netWorth >= TAX_CONSTANTS.EXIT_TAX_THRESHOLD_NET_WORTH) {
                exitTaxRisk = 'High';
                exitTaxAmount = '$50,000+';
            } else {
                exitTaxRisk = 'Medium';
                exitTaxAmount = 'Form 8854 Required';
            }
        }

        // RNOR Qualification
        const yearsInUS = parseInt(residency.yearsInUSLast10) || 10;
        const qualifiesForRNOR = yearsInUS >= 9;

        // 401k Strategy
        const age = parseInt(assets.age) || 35;
        let four01kStrategy = 'Defer and File Form 10-EE';
        let retention = '100% (tax deferred)';

        if (assets.withdrawalStrategy === 'withdraw-rnor') {
            four01kStrategy = 'Withdraw During RNOR';
            retention = '70-85% (US tax only)';
        } else if (assets.withdrawalStrategy === 'lump-sum' && age < 59.5) {
            four01kStrategy = 'Early Withdrawal';
            retention = '60% (30% tax + 10% penalty)';
        }

        // Lifestyle Calculation
        const city = CITY_DATA[lifestyle.targetCity as keyof typeof CITY_DATA] || CITY_DATA.bangalore;
        const currentExpenses = parseFloat(lifestyle.currentExpenses) || 8000;
        const requiredINR = Math.round(currentExpenses * 83 * 0.4);

        // Education
        let recommendedBoard = 'IB';
        let annualCost = '₹15-30 Lakhs';
        if (education.educationGoal === 'indian-stem') {
            recommendedBoard = 'CBSE';
            annualCost = '₹1-3 Lakhs';
        } else if (education.budgetPreference === '5-15') {
            recommendedBoard = 'IGCSE';
            annualCost = '₹5-15 Lakhs';
        }

        return {
            exitTax: { risk: exitTaxRisk, amount: exitTaxAmount },
            rnor: { qualifies: qualifiesForRNOR, years: qualifiesForRNOR ? '2-3 years' : 'May not qualify' },
            four01k: { strategy: four01kStrategy, retention },
            lifestyle: { city: city.name, requiredINR: `₹${requiredINR.toLocaleString()}/mo` },
            education: { board: recommendedBoard, cost: annualCost },
            schools: SCHOOLS_DATA[lifestyle.targetCity as keyof typeof SCHOOLS_DATA] || []
        };
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="wizard-form">
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Basic Information</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Tell us about your family and financial situation.</p>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Working Members</label>
                                <select
                                    className="form-select"
                                    value={wizardData.basicInfo.workingMembers}
                                    onChange={(e) => updateData('basicInfo', 'workingMembers', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3+</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Number of Children</label>
                                <select
                                    className="form-select"
                                    value={wizardData.basicInfo.kids}
                                    onChange={(e) => updateData('basicInfo', 'kids', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3+</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Current Annual Salary (USD)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 150000"
                                    value={wizardData.basicInfo.currentSalary}
                                    onChange={(e) => updateData('basicInfo', 'currentSalary', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Expected Salary in India (INR/year)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 5000000"
                                    value={wizardData.basicInfo.expectedSalary}
                                    onChange={(e) => updateData('basicInfo', 'expectedSalary', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Current Savings/Assets (USD)</label>
                            <input
                                type="number"
                                className="form-input"
                                placeholder="e.g., 500000"
                                value={wizardData.basicInfo.savings}
                                onChange={(e) => updateData('basicInfo', 'savings', e.target.value)}
                            />
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="wizard-form">
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Residency & Tax Status</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Your immigration status affects exit tax obligations.</p>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">US Immigration Status</label>
                                <select
                                    className="form-select"
                                    value={wizardData.residency.citizenshipStatus}
                                    onChange={(e) => updateData('residency', 'citizenshipStatus', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="citizen">US Citizen</option>
                                    <option value="green-card">Green Card Holder</option>
                                    <option value="h1b">H1B Visa</option>
                                    <option value="l1">L1 Visa</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Years Holding Green Card</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 6"
                                    value={wizardData.residency.greenCardYears}
                                    onChange={(e) => updateData('residency', 'greenCardYears', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Global Net Worth (USD)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 1500000"
                                    value={wizardData.residency.globalNetWorth}
                                    onChange={(e) => updateData('residency', 'globalNetWorth', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Years in US (out of last 10)</label>
                                <select
                                    className="form-select"
                                    value={wizardData.residency.yearsInUSLast10}
                                    onChange={(e) => updateData('residency', 'yearsInUSLast10', e.target.value)}
                                >
                                    <option value="10">10 years (Full NRI)</option>
                                    <option value="9">9 years</option>
                                    <option value="8">8 years</option>
                                    <option value="7">7 or less</option>
                                </select>
                            </div>
                        </div>

                        <div className="alert alert-info" style={{ marginTop: '24px' }}>
                            <Info size={20} />
                            <div>
                                <strong>8-Year Rule:</strong> Green Card holders for 8+ years may be subject to US Exit Tax.
                                Net worth {">"} $2M triggers "Covered Expatriate" status.
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="wizard-form">
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Assets & Investments</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Your retirement accounts and investment portfolio.</p>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">401(k) Balance (USD)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 200000"
                                    value={wizardData.assets.four01kBalance}
                                    onChange={(e) => updateData('assets', 'four01kBalance', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Current Age</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 35"
                                    value={wizardData.assets.age}
                                    onChange={(e) => updateData('assets', 'age', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">401(k) Withdrawal Strategy</label>
                                <select
                                    className="form-select"
                                    value={wizardData.assets.withdrawalStrategy}
                                    onChange={(e) => updateData('assets', 'withdrawalStrategy', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="defer">Defer (Hold until retirement)</option>
                                    <option value="withdraw-rnor">Withdraw during RNOR window</option>
                                    <option value="lump-sum">Lump Sum Withdrawal</option>
                                    <option value="roth-conversion">Roth Conversion</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">US Investments (excl. 401k)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 100000"
                                    value={wizardData.assets.usInvestments}
                                    onChange={(e) => updateData('assets', 'usInvestments', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="alert alert-warning" style={{ marginTop: '24px' }}>
                            <AlertTriangle size={20} />
                            <div>
                                <strong>PFIC Warning:</strong> Indian Mutual Funds are classified as PFICs by the IRS.
                                Gains can be taxed at 50%+. Consider selling before moving.
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="wizard-form">
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Tax Strategy</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Optimize your arrival timing and RNOR benefits.</p>

                        <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>The 182-Day Rule</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                To maintain <strong>Non-Resident (NR)</strong> status in your first partial year,
                                arrive in India <strong>after October 2nd</strong> of the financial year.
                            </p>
                            <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                                <p style={{ fontSize: '13px', color: 'var(--accent-success)', fontWeight: '600' }}>
                                    Recommended Arrival: After October 2, 2025 for FY 2025-26
                                </p>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>RNOR Tax Shield</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                If you've been NRI for 9+ of the last 10 years, you qualify for RNOR status for 2-3 years.
                                During RNOR, <strong>foreign income is NOT taxable in India</strong>.
                            </p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <div className="badge badge-success">US Dividends: Tax-Free</div>
                                <div className="badge badge-success">US Rental Income: Tax-Free</div>
                                <div className="badge badge-success">US Capital Gains: Tax-Free</div>
                            </div>
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="wizard-form">
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Lifestyle Preferences</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Your target city and living standards.</p>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Current Monthly Expenses (USD)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="e.g., 8000"
                                    value={wizardData.lifestyle.currentExpenses}
                                    onChange={(e) => updateData('lifestyle', 'currentExpenses', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Target City in India</label>
                                <select
                                    className="form-select"
                                    value={wizardData.lifestyle.targetCity}
                                    onChange={(e) => updateData('lifestyle', 'targetCity', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="gurgaon">Gurgaon</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="pune">Pune</option>
                                    <option value="chennai">Chennai</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Housing Preference</label>
                            <select
                                className="form-select"
                                value={wizardData.lifestyle.housingType}
                                onChange={(e) => updateData('lifestyle', 'housingType', e.target.value)}
                            >
                                <option value="">Select...</option>
                                <option value="2bhk">2BHK Apartment</option>
                                <option value="3bhk">3BHK Apartment</option>
                                <option value="4bhk">4BHK Luxury Apartment</option>
                                <option value="house">Independent House</option>
                            </select>
                        </div>

                        <div className="alert alert-success" style={{ marginTop: '24px' }}>
                            <CheckCircle2 size={20} />
                            <div>
                                <strong>Cost of Living Insight:</strong> Domestic help costs ~$800-1,100/month for full-time
                                staff (cook, maid, driver) vs $10,000+ in the US.
                            </div>
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className="wizard-form">
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Education Planning</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>School board and education goals for your children.</p>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Children's Ages (comma-separated)</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g., 8, 12"
                                    value={wizardData.education.childAges}
                                    onChange={(e) => updateData('education', 'childAges', e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Education Goal</label>
                                <select
                                    className="form-select"
                                    value={wizardData.education.educationGoal}
                                    onChange={(e) => updateData('education', 'educationGoal', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    <option value="global-universities">Global Universities (US/UK)</option>
                                    <option value="indian-stem">Indian STEM (IIT/AIIMS)</option>
                                    <option value="flexible">Flexible/Undecided</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Annual Education Budget (INR)</label>
                            <select
                                className="form-select"
                                value={wizardData.education.budgetPreference}
                                onChange={(e) => updateData('education', 'budgetPreference', e.target.value)}
                            >
                                <option value="">Select...</option>
                                <option value="1-3">₹1-3 Lakhs/year (CBSE)</option>
                                <option value="5-15">₹5-15 Lakhs/year (IGCSE)</option>
                                <option value="10-30">₹10-30 Lakhs/year (IB)</option>
                            </select>
                        </div>

                        <div className="glass-card" style={{ padding: '20px', marginTop: '24px' }}>
                            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Education Board Comparison</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                                <p><strong>IB:</strong> Best for global universities, smoothest US transition</p>
                                <p><strong>IGCSE:</strong> Good balance, recognized globally</p>
                                <p><strong>CBSE:</strong> Best for Indian competitive exams, difficult transition</p>
                            </div>
                        </div>
                    </div>
                );

            case 7:
                const results = calculateResults();
                return (
                    <div className="wizard-form">
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Your Relocation Analysis</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Personalized recommendations based on your inputs.</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            {/* Exit Tax */}
                            <div className="glass-card" style={{ padding: '24px', borderTop: `4px solid ${results.exitTax.risk === 'High' ? 'var(--accent-danger)' : results.exitTax.risk === 'Medium' ? 'var(--accent-warning)' : 'var(--accent-success)'}` }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Exit Tax Analysis</h3>
                                <div className={`badge ${results.exitTax.risk === 'High' ? 'badge-danger' : results.exitTax.risk === 'Medium' ? 'badge-warning' : 'badge-success'}`} style={{ marginBottom: '12px' }}>
                                    {results.exitTax.risk} Risk
                                </div>
                                <p style={{ fontSize: '20px', fontWeight: '700', color: results.exitTax.risk === 'High' ? 'var(--accent-danger)' : 'var(--text-primary)' }}>
                                    {results.exitTax.amount}
                                </p>
                            </div>

                            {/* RNOR Status */}
                            <div className="glass-card" style={{ padding: '24px', borderTop: '4px solid var(--accent-success)' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>RNOR Qualification</h3>
                                <div className={`badge ${results.rnor.qualifies ? 'badge-success' : 'badge-warning'}`} style={{ marginBottom: '12px' }}>
                                    {results.rnor.qualifies ? 'Qualifies' : 'Check Requirements'}
                                </div>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                    RNOR Window: {results.rnor.years}
                                </p>
                            </div>

                            {/* 401k Strategy */}
                            <div className="glass-card" style={{ padding: '24px', borderTop: '4px solid var(--accent-primary)' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>401(k) Strategy</h3>
                                <p style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>{results.four01k.strategy}</p>
                                <p style={{ fontSize: '14px', color: 'var(--accent-success)' }}>Retention: {results.four01k.retention}</p>
                            </div>

                            {/* Lifestyle */}
                            <div className="glass-card" style={{ padding: '24px', borderTop: '4px solid var(--accent-warning)' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Lifestyle Cost</h3>
                                <p style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>{results.lifestyle.city}</p>
                                <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--accent-primary)' }}>
                                    {results.lifestyle.requiredINR}
                                </p>
                            </div>

                            {/* Education */}
                            <div className="glass-card" style={{ padding: '24px', borderTop: '4px solid var(--accent-info)' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Education Track</h3>
                                <p style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>{results.education.board}</p>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Budget: {results.education.cost}</p>
                            </div>
                        </div>

                        {/* Recommended Schools */}
                        {results.schools.length > 0 && (
                            <div style={{ marginTop: '40px' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>
                                    Recommended Schools in {results.lifestyle.city}
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                                    {results.schools.slice(0, 3).map((school, idx) => (
                                        <div key={idx} className="glass-card" style={{ padding: '20px' }}>
                                            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{school.name}</h4>
                                            <div className="badge badge-info" style={{ marginBottom: '12px' }}>{school.curriculum}</div>
                                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>{school.advantage}</p>
                                            <a
                                                href={school.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ fontSize: '13px', color: 'var(--accent-primary)' }}
                                            >
                                                Visit Website →
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="module-page animate-fadeIn">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <Rocket style={{ display: 'inline', marginRight: '16px', verticalAlign: 'middle' }} />
                        Relocation Wizard
                    </h1>
                    <p className="page-description">
                        Comprehensive 7-step analysis for your US to India relocation. Get personalized recommendations
                        for exit tax, 401k strategy, lifestyle costs, and education planning.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: '40px 24px' }}>
                <div className="wizard-container">
                    {/* Sidebar */}
                    <div className="wizard-sidebar">
                        <h3 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Steps
                        </h3>
                        <div className="wizard-steps">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={`wizard-step ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                                    onClick={() => setCurrentStep(step.id)}
                                >
                                    <div className="wizard-step-number">
                                        {currentStep > step.id ? <CheckCircle2 size={16} /> : step.id}
                                    </div>
                                    <span className="wizard-step-title">{step.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="wizard-content">
                        {renderStepContent()}

                        <div className="wizard-actions">
                            <button
                                className="btn-secondary"
                                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                                disabled={currentStep === 1}
                                style={{ opacity: currentStep === 1 ? 0.5 : 1 }}
                            >
                                <ChevronLeft size={18} />
                                Previous
                            </button>

                            {currentStep < 7 ? (
                                <button
                                    className="btn-primary"
                                    onClick={() => setCurrentStep(prev => Math.min(7, prev + 1))}
                                >
                                    Next
                                    <ChevronRight size={18} />
                                </button>
                            ) : (
                                <button className="btn-primary">
                                    Download Report
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
