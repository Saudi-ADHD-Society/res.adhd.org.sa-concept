import React from 'react';
import { ChevronRight, ArrowRight, FileText, Activity, Users, BarChart2, BookOpen, Heart, FlaskConical, ClipboardCheck } from 'lucide-react';
import { getHref } from '../utils/navigation';
import { t } from '../utils/i18n';

// Topic Guides Data - ordered by publication date (newest first)
const TOPIC_GUIDES = [
  {
    id: 'topic-guide-diagnosis',
    title: 'Diagnosis & Assessment — Beyond Symptoms: Functioning & Disability',
    description: 'Understanding the diagnostic process, the importance of functional assessment, and how ADHD relates to disability frameworks in the Saudi context.',
    icon: ClipboardCheck,
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-700',
    iconBgHover: 'bg-amber-600',
    iconTextHover: 'text-white',
    publishedDate: '2025-01-10'
  },
  {
    id: 'topic-guide-treatments',
    title: 'Evidence-Based Treatments: What Works & What You Should Know',
    description: 'A comprehensive overview of proven treatments for ADHD, including medication, behavioral interventions, and combined approaches, with practical guidance for families and clinicians.',
    icon: FlaskConical,
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-700',
    iconBgHover: 'bg-purple-600',
    iconTextHover: 'text-white',
    publishedDate: '2025-01-05'
  },
  {
    id: 'topic-guide-health-comorbidity',
    title: 'Health, Comorbidity & Risk in ADHD',
    description: 'Exploring the physical and mental health conditions that commonly co-occur with ADHD, risk factors, and strategies for comprehensive care.',
    icon: Heart,
    iconBg: 'bg-rose-100',
    iconText: 'text-rose-700',
    iconBgHover: 'bg-rose-600',
    iconTextHover: 'text-white',
    publishedDate: '2024-12-20'
  },
  {
    id: 'topic-guide-lifespan',
    title: 'ADHD Across the Lifespan',
    description: 'Understanding how ADHD presents and evolves from childhood through adolescence, adulthood, and older age, with age-specific considerations for diagnosis and management.',
    icon: Users,
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-700',
    iconBgHover: 'bg-blue-600',
    iconTextHover: 'text-white',
    publishedDate: '2024-12-15'
  },
  {
    id: 'topic-guide-what-is-adhd',
    title: 'What is ADHD — Myths vs Evidence',
    description: 'Separating fact from fiction. Evidence-based answers to common questions and misconceptions about ADHD as a neurodevelopmental condition.',
    icon: BookOpen,
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-700',
    iconBgHover: 'bg-emerald-600',
    iconTextHover: 'text-white',
    publishedDate: '2024-12-10'
  }
];

// Get the latest 3 topic guides
const getLatestTopicGuides = () => {
  return TOPIC_GUIDES.slice(0, 3);
};

// Helper function to get icon classes for a guide
const getIconClasses = (guide) => {
  const baseClasses = 'w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors';
  const hoverClasses = {
    'bg-teal-100 text-teal-700': 'group-hover:bg-teal-600 group-hover:text-white',
    'bg-amber-100 text-amber-700': 'group-hover:bg-amber-600 group-hover:text-white',
    'bg-purple-100 text-purple-700': 'group-hover:bg-purple-600 group-hover:text-white',
    'bg-rose-100 text-rose-700': 'group-hover:bg-rose-600 group-hover:text-white',
    'bg-blue-100 text-blue-700': 'group-hover:bg-blue-600 group-hover:text-white',
    'bg-emerald-100 text-emerald-700': 'group-hover:bg-emerald-600 group-hover:text-white'
  };
  const baseColorClass = `${guide.iconBg} ${guide.iconText}`;
  return `${baseClasses} ${baseColorClass} ${hoverClasses[baseColorClass]}`;
};

export const HomeHero = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en', content }) => {
  const heroContent = content?.hero || {};
  return (
  <header className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800/10 rounded-l-full blur-3xl transform translate-x-1/3" aria-hidden="true"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" aria-hidden="true"></div>

    <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {heroContent.subtitle && (
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="text-emerald-100 text-xs font-medium tracking-wide uppercase">
                {heroContent.subtitle}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {heroContent.title || 'Bridging the Gap Between Evidence and Practice'}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            {heroContent.description || 'A national platform for ADHD research, evidence synthesis, and clinical guidance—supporting evidence-informed practice and policy in Saudi Arabia.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {heroContent.cta?.primary && (
              <a
                href={getHref(heroContent.cta.primary.href.replace('/', ''), basePath, locale)}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-2"
              >
                <span>{heroContent.cta.primary.text}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            )}
            {heroContent.cta?.secondary && (
              <a
                href={getHref(heroContent.cta.secondary.href.replace('/', ''), basePath, locale)}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-md border border-white/10 transition-all flex items-center justify-center"
              >
                {heroContent.cta.secondary.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {content?.stats && content.stats.length > 0 ? (
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {content.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  {stat.label.split('<br/>').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Years of Research<br/>& Knowledge Translation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">New Validated Arabic<br/>Interactive Scales</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">CPG</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">National Clinical<br/>Practice Guidelines</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Grant</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Now Accepting<br/>Proposals</div>
            </div>
          </div>
        </div>
      )}
    </div>
  </header>
  );
};

const HomePage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en', content }) => {
  const sections = content?.sections || [];
  const evidenceSection = sections.find(s => s.id === 'evidence-insights');
  const clinicalSection = sections.find(s => s.id === 'clinical-tools');
  
  return (
  <>
    {/* Evidence & Insights (Topic Guides) */}
    <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 mb-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          {evidenceSection?.content?.title || 'Evidence & Insights'}
        </h2>
        <p className="text-slate-600">
          {evidenceSection?.content?.text || 'Bridging the "Know-Do" gap. We synthesize complex white papers into actionable topic guides for policymakers, clinicians, educators, and families.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {getLatestTopicGuides().map((guide) => {
          const IconComponent = guide.icon;
          return (
            <a
              key={guide.id}
              href={getHref(guide.id, basePath, locale)}
              className="group block text-left bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={getIconClasses(guide)}>
                <IconComponent size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{guide.title}</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-3">
                {guide.description}
              </p>
              <div className="text-sm font-semibold text-emerald-700 flex items-center">{t('common.readGuide', locale)} <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true"/></div>
            </a>
          );
        })}
      </div>
    </section>

    {/* Section 3: The Workbench (Tools) */}
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
         <h2 className="text-3xl font-bold text-slate-900">
           {clinicalSection?.content?.title || 'Clinical Tools & Resources'}
         </h2>
         <span className="text-slate-500 text-sm">
           {clinicalSection?.content?.text || 'For clinicians and school psychologists'}
         </span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-900 rounded-2xl p-8 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <BarChart2 size={120} />
           </div>
           <div className="relative z-10">
             <h3 className="text-2xl font-bold mb-2">Interactive Rating Scales</h3>
             <p className="text-emerald-200 mb-6 max-w-md">
               Access automated scoring for VADTRS-3-AR, ASRS-5-AR and more. Generate instant reports for patient files.
             </p>
             <a href={getHref('interactive-scales', basePath, locale)} className="inline-block bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-6 py-3 rounded-lg font-bold transition-colors">
               Launch Tools
             </a>
           </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
           <div className="flex items-start justify-between mb-4">
             <div>
               <h3 className="text-xl font-bold text-slate-900">Saudi National CPG</h3>
               <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded mt-2">Updated 2025-2026 Cycle</span>
             </div>
             <BookOpen className="text-emerald-600" size={32} />
           </div>
           <p className="text-slate-500 mb-6 text-sm">
             The definitive guide for ADHD diagnosis and management in the Kingdom. Browse by chapter or search specific recommendations.
           </p>
           <div className="flex gap-3 mt-auto">
             <a href={getHref('cpg-overview', basePath, locale)} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 py-2 rounded-lg text-sm font-semibold transition-colors text-center">
               View Overview
             </a>
             <a href={getHref('adhd-cpg', basePath, locale)} className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2 rounded-lg text-sm font-semibold transition-colors text-center">
               Open Guidelines
             </a>
           </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default HomePage;