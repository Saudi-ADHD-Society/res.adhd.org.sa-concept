import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CpgAboutPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />

    {/* Header */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">About the Guideline</h2>
      <p className="text-slate-600 text-sm md:text-base">
        Learn about the development, publications, acknowledgements, and other information regarding the Saudi ADHD Clinical Practice Guidelines.
      </p>
    </div>

    {/* Navigation Cards */}
    <div className="grid gap-6 md:grid-cols-3">
      {/* Development */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Development</h3>
        <p className="text-sm text-slate-600 mb-4">
          Learn about the methodology and process used to develop the Saudi ADHD Clinical Practice Guidelines.
        </p>
        <button
          onClick={() => onNavigate('adhd-cpg-about-development')}
          className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Read more <span className="ml-1">→</span>
        </button>
      </div>

      {/* Publications */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Publications</h3>
        <p className="text-sm text-slate-600 mb-4">
          Information about publications related to the Saudi ADHD Clinical Practice Guidelines.
        </p>
        <button
          onClick={() => onNavigate('adhd-cpg-about-publications')}
          className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Read more <span className="ml-1">→</span>
        </button>
      </div>

      {/* Acknowledgements */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Acknowledgements</h3>
        <p className="text-sm text-slate-600 mb-4">
          Recognition of the individuals and organizations who contributed to the development of the guideline.
        </p>
        <button
          onClick={() => onNavigate('adhd-cpg-about-acknowledgements')}
          className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Read more <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  </div>
);

export default CpgAboutPage;
