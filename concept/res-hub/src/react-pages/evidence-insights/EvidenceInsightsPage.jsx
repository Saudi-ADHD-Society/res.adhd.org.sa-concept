import React from 'react';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const EvidenceInsightsPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 md:p-10">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
          <BookOpen size={24} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Evidence & Insights</h1>
      </div>
      <p className="text-slate-700 text-lg max-w-3xl">
        Synthesized knowledge and evidence-based insights on ADHD in the Saudi context. Access comprehensive topic guides, research briefs, and evidence summaries designed to bridge the gap between research and practice.
      </p>
    </div>

    {/* Main Content Cards */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Topic Guides */}
      <a
        href={getHref('topic-guides', basePath)}
        className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          <BookOpen size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
          Topic Guides
        </h2>
        <p className="text-slate-600 mb-4">
          Synthesised guidance on core ADHD themes in the Saudi context. Each guide bridges the "Know-Do" gap by translating complex research and policy into actionable insights for policymakers, clinicians, educators, and families.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
          Explore Topic Guides <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Research Briefs */}
      <a
        href={getHref('research-briefs', basePath)}
        className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
          <FileText size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
          Research Briefs
        </h2>
        <p className="text-slate-600 mb-4">
          Plain-language summaries of key Saudi and global ADHD studies. Each brief synthesizes complex research findings into actionable insights for policymakers, clinicians, educators, and families.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
          Read Research Briefs <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>
    </div>

    {/* Research Library */}
    <a
      href={getHref('library', basePath)}
      className="group block bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
    >
      <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <FileText size={32} />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
        Research Library
      </h2>
      <p className="text-slate-600 mb-4">
        Browse and search our comprehensive collection of Saudi ADHD research papers and publications. Access full-text papers, abstracts, and detailed publication information.
      </p>
      <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
        Explore Research Library <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  </div>
);

export default EvidenceInsightsPage;
