import React from 'react';
import { FileCheck, ExternalLink } from 'lucide-react';

const ResearchBriefAgreeIiPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Breadcrumb */}
    <div className="text-sm text-slate-500">
      <button onClick={() => onNavigate('research-briefs')} className="hover:text-emerald-600">
        Evidence & Insights / Research Briefs
      </button>
      <span className="mx-2">/</span>
      <span>AGREE II CPG Appraisal</span>
    </div>

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-indigo-600 text-sm font-bold mb-3">
        <FileCheck size={16} />
        <span>Systematic Review</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Appraising ADHD Clinical Practice Guidelines: What Makes a High-Quality Guideline?
      </h1>
      <p className="text-slate-600 mb-4">
        A systematic review using the AGREE II instrument to evaluate the quality of published ADHD clinical practice guidelines, 
        identifying which guidelines meet the highest standards for evidence-based healthcare.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="text-slate-700 mb-2">
          <strong>Source:</strong> Amer YS, Al-Joudi HF, Varnham JL, et al. (2019) Appraisal of clinical practice guidelines 
          for the management of attention deficit hyperactivity disorder (ADHD) using the AGREE II Instrument: A systematic review. 
          <em>PLOS ONE</em> 14(7): e0219239.
        </p>
        <a
          href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0219239"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
        >
          View Full Article <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>

    {/* Main Content */}
    <div className="space-y-6">
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Why This Study Matters</h2>
        <p className="text-slate-600 mb-4">
          Clinical practice guidelines (CPGs) are essential tools for translating research evidence into clinical care. 
          However, not all guidelines are created equal. The quality of guideline development—how evidence is gathered, 
          how recommendations are formulated, and how conflicts of interest are managed—directly impacts patient outcomes.
        </p>
        <p className="text-slate-600">
          This systematic review, conducted by researchers from the Saudi ADHD Society and King Saud University, 
          evaluated six major ADHD CPGs using the internationally recognized AGREE II (Appraisal of Guidelines for 
          Research & Evaluation II) instrument to identify which guidelines meet the highest quality standards.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Findings</h2>
        
        <div className="space-y-4 mb-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-emerald-900 mb-2">Top Three Guidelines</h3>
            <ul className="list-disc pl-5 space-y-1 text-emerald-800 text-sm">
              <li><strong>NICE (UK)</strong> — Highest overall quality score</li>
              <li><strong>University of Michigan Health System</strong> — Strong methodology</li>
              <li><strong>American Academy of Pediatrics</strong> — Comprehensive approach</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2">Consistent Recommendations</h3>
            <p className="text-blue-800 text-sm">
              Despite varying quality scores, the <strong>clinical recommendations across all six CPGs were remarkably similar</strong>. 
              This suggests that the core evidence base for ADHD management is well-established, even when guideline development 
              processes differ in rigor.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-amber-900 mb-2">Quality Concerns</h3>
            <p className="text-amber-800 text-sm">
              Many guidelines showed <strong>poor documentation of their development process</strong>, including how evidence 
              was searched, how recommendations were formulated, and how conflicts of interest were managed. This makes it 
              difficult for clinicians to assess the trustworthiness of recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">What is AGREE II?</h2>
        <p className="text-slate-600 mb-4">
          The AGREE II instrument is an internationally recognized tool for evaluating the quality of clinical practice guidelines. 
          It assesses six key domains:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Scope and Purpose:</strong> Is the guideline's objective clearly stated?</li>
          <li><strong>Stakeholder Involvement:</strong> Were all relevant professional groups and patients included?</li>
          <li><strong>Rigor of Development:</strong> Was evidence systematically searched and appraised?</li>
          <li><strong>Clarity of Presentation:</strong> Are recommendations clear and actionable?</li>
          <li><strong>Applicability:</strong> Are barriers to implementation considered?</li>
          <li><strong>Editorial Independence:</strong> Were conflicts of interest properly managed?</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Implications for Saudi Arabia</h2>
        <p className="text-slate-600 mb-4">
          This review directly informed the development of the <strong>Saudi National ADHD Clinical Practice Guideline</strong>, 
          ensuring it follows AGREE II best practices. The findings highlight the importance of:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Transparent methodology:</strong> Clearly documenting how evidence was gathered and recommendations were formulated</li>
          <li><strong>Multi-stakeholder involvement:</strong> Including clinicians, researchers, patients, and families in guideline development</li>
          <li><strong>Systematic evidence review:</strong> Using rigorous methods to identify and appraise research evidence</li>
          <li><strong>Conflict of interest management:</strong> Explicitly declaring and managing potential biases</li>
        </ul>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mt-4">
          <p className="text-sm text-indigo-900">
            <strong>Key Insight:</strong> The Saudi ADHD CPG was developed with explicit attention to AGREE II criteria, 
            ensuring it meets international quality standards while remaining relevant to the Saudi healthcare context.
          </p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recommendations for Healthcare Providers</h2>
        <p className="text-slate-600 mb-4">
          When selecting which guidelines to follow, clinicians should:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Look for guidelines that clearly document their development methodology</li>
          <li>Prefer guidelines that involve multiple stakeholder groups, including patients and families</li>
          <li>Check for explicit conflict of interest declarations</li>
          <li>Consider whether recommendations are applicable to their local context and resources</li>
          <li>Use AGREE II appraisals (when available) to assess guideline quality</li>
        </ul>
      </section>

      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Study Details</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-700 mb-1">Publication Date:</p>
            <p className="text-slate-600">July 2019</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">CPGs Reviewed:</p>
            <p className="text-slate-600">6 major international guidelines</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">Appraisal Method:</p>
            <p className="text-slate-600">AGREE II instrument (3 independent appraisers)</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">Protocol:</p>
            <p className="text-slate-600">Registered in PROSPERO</p>
          </div>
        </div>
      </section>
    </div>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex justify-center">
        <button
          onClick={() => onNavigate('research-briefs')}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Research Briefs
        </button>
      </div>
    </div>
  </div>
);

export default ResearchBriefAgreeIiPage;

