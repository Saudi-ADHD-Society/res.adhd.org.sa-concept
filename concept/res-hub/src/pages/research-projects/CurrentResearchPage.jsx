import React from 'react';
import { Activity, FlaskConical, Calendar, ArrowRight, BookOpen, BarChart2 } from 'lucide-react';

const CurrentResearchPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Current Research Projects</h2>
        <p className="text-slate-500 mt-2 max-w-2xl">
          An overview for researchers, policy makers, and partners of the major ongoing and recently completed projects
          within the Saudi ADHD Society Research &amp; Studies Unit.
        </p>
      </div>
      <span className="hidden md:inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
        <Activity size={14} className="mr-1" />
        Active portfolio
      </span>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* National ADHD Survey */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-900">National ADHD Survey</h3>
          <span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
            <BarChart2 size={14} className="mr-1" />
            Analysis in progress
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          A nationally representative survey conducted in partnership with the Saudi National Statistics Authority to
          map ADHD prevalence, service access, and unmet needs across regions and age groups.
        </p>
        <ul className="text-xs text-slate-500 space-y-1 mb-4">
          <li>• Pilot completed; tools refined for Saudi context</li>
          <li>• Nationwide data collection completed</li>
          <li>• Data cleaning and analysis currently underway</li>
        </ul>
        <div className="mt-auto text-xs text-slate-400 flex items-center">
          <Calendar size={14} className="mr-1" /> Fieldwork 2024–2025
        </div>
      </div>

      {/* CPG 2nd Edition Development */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-900">CPG 2nd Edition Development</h3>
          <span className="inline-flex items-center text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded-full">
            <BookOpen size={14} className="mr-1" />
            Guideline project
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          A methodologically rigorous update of the Saudi National ADHD Clinical Practice Guideline using AGREE II and
          AGREE-REX, with a focus on implementability in real-world Saudi settings.
        </p>
        <ul className="text-xs text-slate-500 space-y-1 mb-4">
          <li>• Structured evidence review of new global guidelines</li>
          <li>• AGREE-REX-based appraisal of contextual fit</li>
          <li>• Co-design workshops with clinicians and families planned</li>
        </ul>
        <button
          onClick={() => onNavigate('cpg-overview')}
          className="mt-auto inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          View ADHD CPG Overview
          <ArrowRight size={14} className="ml-1" />
        </button>
      </div>

      {/* Rating Scales Phase 2 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-900">Rating Scales Phase 2 (Clinical Cut-offs)</h3>
          <span className="inline-flex items-center text-xs text-sky-700 bg-sky-50 px-2 py-1 rounded-full">
            <FlaskConical size={14} className="mr-1" />
            Psychometrics
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          Building on our initial validation work, this phase focuses on establishing clinically meaningful cut-off scores
          for Arabic versions of key ADHD rating scales across age groups.
        </p>
        <ul className="text-xs text-slate-500 space-y-1 mb-4">
          <li>• VADTRS-3-AR and VADPRS-3-AR calibration</li>
          <li>• ASRS-5-AR adult thresholds</li>
          <li>• Linking scores to functional impairment benchmarks</li>
        </ul>
        <button
          onClick={() => onNavigate('interactive-scales')}
          className="mt-auto inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Go to Rating Scales &amp; Tools
          <ArrowRight size={14} className="ml-1" />
        </button>
      </div>

      {/* GCC ADHD Research Priorities */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-900">GCC ADHD Research Priorities</h3>
          <span className="inline-flex items-center text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded-full">
            <Activity size={14} className="mr-1" />
            Regional roadmap
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          A modified Delphi study engaging clinicians, researchers, and educators from across the GCC to define a shared
          agenda for ADHD research funding and collaboration.
        </p>
        <ul className="text-xs text-slate-500 space-y-1 mb-4">
          <li>• Multi-round Delphi with GCC experts</li>
          <li>• Priorities spanning lifespan, education, and public health</li>
          <li>• Direct input into Saudi ADHD Society funding calls</li>
        </ul>
        <button
          onClick={() => onNavigate('research-priorities')}
          className="mt-auto inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          View Research Priorities Detail
          <ArrowRight size={14} className="ml-1" />
        </button>
      </div>

      {/* Conceptual Papers in Development */}
      <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6 shadow-sm md:col-span-2">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Conceptual Papers in Development</h3>
        <p className="text-sm text-slate-600 mb-3">
          Conceptual and methodological papers that are currently being drafted or under peer review. Titles are working
          and subject to change.
        </p>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
          <li>“ADHD Literacy in the Gulf: Integrating Health Literacy and Mental Health Literacy Frameworks” (in preparation)</li>
          <li>“ICF-Aligned Functional Description of ADHD for Saudi Educational Policy” (in preparation)</li>
          <li>“Nocebo-Informed Public Awareness Campaigns for ADHD: A Risk-Benefit Framework” (in preparation)</li>
        </ul>
      </div>
    </div>
  </div>
);

export default CurrentResearchPage;


