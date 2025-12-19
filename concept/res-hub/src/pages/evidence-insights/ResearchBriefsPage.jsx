import React from 'react';
import { FileCheck, FileText, Globe, ArrowRight } from 'lucide-react';

const ResearchBriefsPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Briefs</h2>
      <p className="text-slate-600 max-w-2xl">
        Plain-language summaries of key Saudi and global ADHD studies. Each brief synthesizes complex research findings into actionable insights for policymakers, clinicians, educators, and families.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Brief 1: AGREE II CPG Appraisal */}
      <button
        onClick={() => onNavigate('research-brief-agree-ii')}
        className="group text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="flex items-center space-x-2 text-indigo-600 text-sm font-bold mb-3">
          <FileCheck size={16} />
          <span>Systematic Review</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          Appraising ADHD Clinical Practice Guidelines
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          A systematic review evaluating six major ADHD CPGs using the AGREE II instrument. NICE, University of Michigan, and AAP guidelines scored highest. Findings directly informed the Saudi National ADHD CPG development.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Full Brief <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

      {/* Brief 2: CPG Adaptation Process */}
      <button
        onClick={() => onNavigate('research-brief-cpg-adaptation')}
        className="group text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="flex items-center space-x-2 text-teal-600 text-sm font-bold mb-3">
          <FileText size={16} />
          <span>Methodology & Process</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          Adapting Evidence-Based Guidelines: The Saudi CPG Development
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          How the Saudi ADHD Society adapted the NICE ADHD guideline using the KSU-Modified-ADAPTE methodology to create the first national evidence-based CPG for ADHD management in Saudi Arabia.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Full Brief <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

      {/* Brief 3: ADHD in Arab World */}
      <button
        onClick={() => onNavigate('research-brief-arab-world')}
        className="group text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="flex items-center space-x-2 text-emerald-600 text-sm font-bold mb-3">
          <Globe size={16} />
          <span>Epidemiology & Research Synthesis</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          ADHD in Saudi Arabia & Arab World: A Comprehensive Overview
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          A synthesis of systematic reviews examining ADHD prevalence (5.90% in Arab Gulf), research trends, gender patterns, and cultural considerations across Saudi Arabia and the broader Arab region.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Full Brief <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
    </div>
  </div>
);

export default ResearchBriefsPage;
