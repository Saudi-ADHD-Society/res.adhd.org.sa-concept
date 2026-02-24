import React from 'react';
import { Stethoscope, BookOpen, ClipboardCheck, Ruler, FileText, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';
import { t } from '../../utils/i18n';

const ClinicalToolsPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en', content }) => {
  const heroContent = content?.hero || {};
  const cards = content?.cards || [];
  
  return (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />
    
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 md:p-10">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
          <Stethoscope size={24} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          {heroContent.title || 'Clinical Tools & Resources'}
        </h1>
      </div>
      <p className="text-slate-700 text-lg max-w-3xl">
        {heroContent.description || 'Evidence-based clinical practice guidelines, assessment tools, and resources designed to support healthcare professionals in the diagnosis, treatment, and management of ADHD across the lifespan in Saudi Arabia.'}
      </p>
    </div>

    {/* Main Content Cards */}
    <div className="grid md:grid-cols-2 gap-6">
      {cards.length > 0 ? (
        cards.map((card) => {
          const iconMap = {
            BookOpen,
            ClipboardCheck,
            Ruler,
            FileText,
          };
          const IconComponent = iconMap[card.icon] || BookOpen;
          const href = card.href.replace(/^\//, '');
          
          return (
            <a
              key={card.id}
              href={getHref(href, basePath, locale)}
              className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <IconComponent size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {card.title}
              </h2>
              <p className="text-slate-600 mb-4">
                {card.description}
              </p>
              <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
                {t('common.viewDetails', locale)} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          );
        })
      ) : (
        // Fallback to hardcoded cards if content not available
        <>
          <a
            href={getHref('adhd-cpg', basePath, locale)}
            className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <BookOpen size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
              Saudi National ADHD CPG
            </h2>
            <p className="text-slate-600 mb-4">
              The Saudi National ADHD Clinical Practice Guideline content. Evidence-based clinical guidance for the assessment and management of Attention Deficit/Hyperactivity Disorder (ADHD) across the lifespan in Saudi Arabia.
            </p>
            <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
              {t('common.accessCpg', locale)} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          {/* Other cards... */}
        </>
      )}
    </div>
  </div>
  );
};

export default ClinicalToolsPage;
