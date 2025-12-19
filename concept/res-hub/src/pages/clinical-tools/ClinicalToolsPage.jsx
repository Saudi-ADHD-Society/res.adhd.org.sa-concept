import React from 'react';
import { Stethoscope, BookOpen, ClipboardCheck, Ruler, FileText, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const ClinicalToolsPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />
    
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 md:p-10">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
          <Stethoscope size={24} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Clinical Tools & Resources</h1>
      </div>
      <p className="text-slate-700 text-lg max-w-3xl">
        Evidence-based clinical practice guidelines, assessment tools, and resources designed to support healthcare professionals in the diagnosis, treatment, and management of ADHD across the lifespan in Saudi Arabia.
      </p>
    </div>

    {/* Main Content Cards */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Saudi National ADHD CPG */}
      <button
        onClick={() => onNavigate('adhd-cpg')}
        className="group text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
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
          Access CPG <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

      {/* Rating Scales & Assessment Tools */}
      <button
        onClick={() => onNavigate('interactive-scales')}
        className="group text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
          <ClipboardCheck size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
          Rating Scales & Assessment Tools
        </h2>
        <p className="text-slate-600 mb-4">
          Interactive Arabic rating scales and scoring. Professionally designed, fillable PDFs with automated scoring logic, reducing calculation errors and saving clinicians valuable time during assessment.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
          View Assessment Tools <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

      {/* ICF & Functional Assessment */}
      <button
        onClick={() => onNavigate('functional-assessment')}
        className="group text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
          <Ruler size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
          ICF & Functional Assessment
        </h2>
        <p className="text-slate-600 mb-4">
          Translating ADHD into functioning and rights. The International Classification of Functioning, Disability and Health (ICF) helps describe how ADHD affects daily life—not just which symptoms are present.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
          Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

      {/* HCP Resources */}
      <button
        onClick={() => onNavigate('hcp-resources')}
        className="group text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <FileText size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
          HCP Resources
        </h2>
        <p className="text-slate-600 mb-4">
          Key documents and references for clinicians. Access the World Federation of ADHD International Consensus Statement and other essential resources for healthcare professionals.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center group-hover:text-emerald-800">
          View Resources <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  </div>
);

export default ClinicalToolsPage;
