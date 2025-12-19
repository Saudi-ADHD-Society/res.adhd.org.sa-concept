import React from 'react';

const CpgAboutPublicationsPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Breadcrumb */}
    <div className="text-sm text-slate-500">
      <button onClick={() => onNavigate('adhd-cpg')} className="hover:text-emerald-600">
        Clinical Tools & Resources / Saudi National ADHD CPG
      </button>
      <span className="mx-2">/</span>
      <button onClick={() => onNavigate('adhd-cpg-about')} className="hover:text-emerald-600">
        About the Guideline
      </button>
      <span className="mx-2">/</span>
      <span>Publications</span>
    </div>

    {/* Header */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Publications</h2>
      <p className="text-slate-600 text-sm md:text-base">
        Content to be added.
      </p>
    </div>
  </div>
);

export default CpgAboutPublicationsPage;
