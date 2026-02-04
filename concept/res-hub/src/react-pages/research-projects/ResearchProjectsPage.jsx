import React from 'react';
import { Activity, FileText, BookOpen, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const ResearchProjectsPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />
    
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 md:p-10">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
          <Activity size={24} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Research Projects</h1>
      </div>
      <p className="text-slate-700 text-lg max-w-3xl">
        Overview of ongoing and completed research initiatives within the Saudi ADHD Society Research & Studies Unit. Explore current projects, research outputs, and contributions to the national ADHD knowledge base.
      </p>
    </div>

    {/* Main Content Cards */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Current Research */}
      <a
        href={getHref('current-research', basePath, locale)}
        className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
      >
        <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Activity size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
          Current Research
        </h2>
        <p className="text-slate-600 mb-4">
          National survey, CPG update, rating scales phase 2, and more. An overview for researchers, policy makers, and partners of the major ongoing and recently completed projects within the Saudi ADHD Society Research & Studies Unit.
        </p>
        <div className="text-sm font-semibold text-blue-700 flex items-center group-hover:text-blue-800">
          View Current Projects <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Research Output */}
      <a
        href={getHref('research-output', basePath, locale)}
        className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
      >
        <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <FileText size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
          Research Output
        </h2>
        <p className="text-slate-600 mb-4">
          Saudi ADHD Society's own peer-reviewed publications and outputs. Selected peer-reviewed work from the Saudi ADHD Society Research & Studies Unit.
        </p>
        <div className="text-sm font-semibold text-blue-700 flex items-center group-hover:text-blue-800">
          Browse Publications <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>
    </div>

    {/* CPG Overview Card */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <BookOpen size={24} className="text-blue-600 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Saudi National ADHD CPG Overview</h3>
          <p className="text-slate-600 text-sm mb-3">
            For clinicians and policy makers: a structured overview of the Saudi National ADHD Clinical Practice Guideline and its current 2025–2026 update cycle.
          </p>
          <a
            href={getHref('cpg-overview', basePath, locale)}
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold text-sm"
          >
            View CPG Overview <ArrowRight size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ResearchProjectsPage;
