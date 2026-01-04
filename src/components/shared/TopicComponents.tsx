// Shared expandable topic components used across all modules
import { useState } from 'react';
import {
    CheckCircle2,
    AlertTriangle,
    Shield,
    ExternalLink,
    X,
    BookOpen,
    Info,
    ChevronRight
} from 'lucide-react';
import { MODULE_IMPORTANCE_COLORS, type ModuleTopicDetail } from '../../data/moduleDetails';
import { URGENCY_COLORS, type PillarDetail } from '../../data/pillarDetails';

// Union type for all topic details
export type GenericTopicDetail = ModuleTopicDetail | PillarDetail;

function getStatusStyle(topic: GenericTopicDetail) {
    if ('importance' in topic) {
        return MODULE_IMPORTANCE_COLORS[topic.importance];
    }
    return URGENCY_COLORS[topic.urgency];
}

// Reusable Topic Detail Modal Component
export function TopicDetailModal({ topic, onClose }: { topic: GenericTopicDetail; onClose: () => void }) {

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 1000,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '40px',
                paddingBottom: '40px',
                paddingLeft: '20px',
                paddingRight: '20px'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '16px',
                    maxWidth: '900px',
                    width: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div style={{
                    padding: '24px 28px',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    background: getStatusStyle(topic).bg,
                    borderRadius: '16px 16px 0 0'
                }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            color: 'white',
                            fontWeight: '700'
                        }}>
                            {'icon' in topic ? topic.icon : (topic as any).id}
                        </div>
                        <div>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-primary)' }}>
                                {topic.name}
                            </h2>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '4px 10px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '600',
                                background: getStatusStyle(topic).color + '30',
                                color: getStatusStyle(topic).color
                            }}>
                                <Shield size={12} />
                                {getStatusStyle(topic).label}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '8px',
                            cursor: 'pointer',
                            color: 'var(--text-secondary)'
                        }}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Modal Body */}
                <div style={{ padding: '28px' }}>
                    {/* Overview */}
                    <div style={{ marginBottom: '28px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <BookOpen size={18} style={{ color: 'var(--accent-primary)' }} />
                            Overview
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '14px' }}>
                            {topic.overview}
                        </p>
                    </div>

                    {/* Key Action Box */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        borderRadius: '12px',
                        padding: '20px',
                        marginBottom: '28px'
                    }}>
                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                            ⚡ Key Action
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                            {topic.keyAction}
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '28px' }}>
                        {/* Benefits */}
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle2 size={18} style={{ color: 'var(--accent-success)' }} />
                                Benefits
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {topic.benefits.map((benefit, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '10px',
                                        padding: '10px 0',
                                        borderBottom: idx < topic.benefits.length - 1 ? '1px solid var(--border-color)' : 'none'
                                    }}>
                                        <CheckCircle2 size={14} style={{ color: 'var(--accent-success)', marginTop: '3px', flexShrink: 0 }} />
                                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Key Facts */}
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Info size={18} style={{ color: 'var(--accent-info)' }} />
                                Key Facts
                            </h3>
                            <div style={{ background: 'var(--bg-tertiary)', borderRadius: '12px', overflow: 'hidden' }}>
                                {topic.keyFacts.map((fact, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '12px 16px',
                                        borderBottom: idx < topic.keyFacts.length - 1 ? '1px solid var(--border-color)' : 'none'
                                    }}>
                                        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{fact.label}</span>
                                        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{fact.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Steps */}
                    {topic.steps && (
                        <div style={{ marginBottom: '28px' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>
                                📝 Action Steps
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {topic.steps.map((step, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        background: 'var(--bg-tertiary)',
                                        padding: '14px 16px',
                                        borderRadius: '10px'
                                    }}>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: 'var(--gradient-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            color: 'white',
                                            flexShrink: 0
                                        }}>
                                            {idx + 1}
                                        </div>
                                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Eligibility (for Pillars only) */}
                    {'eligibility' in topic && topic.eligibility && (
                        <div style={{ marginBottom: '28px' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle2 size={18} style={{ color: 'var(--accent-info)' }} />
                                Eligibility
                            </h3>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                {topic.eligibility.map((item, idx) => (
                                    <div key={idx} style={{
                                        padding: '12px 16px',
                                        background: 'rgba(14, 165, 233, 0.1)',
                                        borderLeft: '3px solid #0EA5E9',
                                        borderRadius: '4px',
                                        fontSize: '14px',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Warnings */}
                    {topic.warnings && topic.warnings.length > 0 && (
                        <div style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '12px',
                            padding: '20px',
                            marginBottom: '28px'
                        }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <AlertTriangle size={18} />
                                ⚠️ Important Warnings
                            </h3>
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                {topic.warnings.map((warning, idx) => (
                                    <li key={idx} style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.6' }}>
                                        {warning}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Official Sources */}
                    <div>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
                            Official Sources
                        </h3>
                        <div style={{ display: 'grid', gap: '12px' }}>
                            {topic.officialSources.map((source, idx) => (
                                <a
                                    key={idx}
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        background: 'var(--bg-tertiary)',
                                        padding: '14px 18px',
                                        borderRadius: '10px',
                                        textDecoration: 'none',
                                        border: '1px solid var(--border-color)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.background = 'var(--bg-tertiary)';
                                    }}
                                >
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>
                                            {source.name}
                                        </div>
                                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                                            {source.description}
                                        </div>
                                    </div>
                                    <ExternalLink size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div style={{
                    padding: '20px 28px',
                    borderTop: '1px solid var(--border-color)',
                    background: 'rgba(245, 158, 11, 0.05)',
                    borderRadius: '0 0 16px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <AlertTriangle size={18} style={{ color: '#F59E0B', flexShrink: 0 }} />
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
                        <strong style={{ color: '#F59E0B' }}>Disclaimer:</strong> This information is for educational purposes only.
                        Consult qualified professionals for advice specific to your situation.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Expandable Topic Card Component
export function TopicCard({ topic, onClick }: { topic: GenericTopicDetail; onClick: () => void }) {
    return (
        <div
            className="glass-card"
            onClick={onClick}
            style={{
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderLeft: `4px solid ${getStatusStyle(topic).color}`
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: getStatusStyle(topic).bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0,
                    color: getStatusStyle(topic).color,
                    fontWeight: '700'
                }}>
                    {'icon' in topic ? topic.icon : (topic as any).id}
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>{topic.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>{topic.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            background: getStatusStyle(topic).bg,
                            color: getStatusStyle(topic).color
                        }}>
                            {'importance' in topic ? topic.importance : topic.urgency}
                        </span>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: 'var(--accent-primary)',
                            fontSize: '12px',
                            fontWeight: '500'
                        }}>
                            Learn more <ChevronRight size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Hook to manage topic selection state
export function useTopicSelection() {
    const [selectedTopic, setSelectedTopic] = useState<ModuleTopicDetail | null>(null);

    const openTopic = (topic: ModuleTopicDetail) => setSelectedTopic(topic);
    const closeTopic = () => setSelectedTopic(null);

    return { selectedTopic, openTopic, closeTopic };
}
