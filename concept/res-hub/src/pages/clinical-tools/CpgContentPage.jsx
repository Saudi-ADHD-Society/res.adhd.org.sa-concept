import React from 'react';

const CpgContentPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Saudi ADHD Clinical Practice Guidelines (CPG)</h2>
      <p className="text-slate-500 mt-2">
        Evidence-based clinical guidance for the assessment and management of Attention Deficit/Hyperactivity Disorder (ADHD) across the lifespan in Saudi Arabia.
      </p>
      <p className="text-slate-600 mt-2 text-sm md:text-base">
        Developed and maintained by the Saudi ADHD Society in collaboration with national and international experts.
      </p>
    </div>

    {/* What is this guideline? */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">What is this guideline?</h3>
      <p className="text-slate-600 text-sm md:text-base mb-3">
        The Saudi ADHD Clinical Practice Guidelines provide practical, evidence-based recommendations to support healthcare professionals in the <strong>diagnosis, treatment, and long-term management of ADHD</strong>.
      </p>
      <p className="text-slate-600 text-sm md:text-base">
        The guideline synthesizes international best evidence and adapts it to the <strong>Saudi healthcare context</strong>, including local clinical pathways, regulatory frameworks, and cultural considerations.
      </p>
    </div>

    {/* Who is this guideline for? */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Who is this guideline for?</h3>
      <p className="text-slate-600 text-sm md:text-base mb-4">
        These guidelines are intended for healthcare professionals involved in the care of individuals with suspected or diagnosed ADHD, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
        <li>Physicians (primary care, psychiatry, paediatrics, neurology)</li>
        <li>Clinical and educational psychologists</li>
        <li>Nurses and allied health professionals</li>
        <li>Pharmacists</li>
        <li>Occupational therapists and dietitians</li>
        <li>Medical and health sciences trainees</li>
      </ul>
    </div>

    {/* Scope and target population */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Scope and target population</h3>
      <p className="text-slate-600 text-sm md:text-base mb-4">
        This guideline addresses ADHD across the lifespan, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base mb-4">
        <li><strong>Children under 5 years</strong></li>
        <li><strong>Children and young people aged 5–17 years</strong></li>
        <li><strong>Adults aged 18 years and over</strong></li>
      </ul>
      <p className="text-slate-600 text-sm md:text-base mb-3">
        It applies to individuals:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base mb-4">
        <li>Suspected of having ADHD, or</li>
        <li>With an established diagnosis of ADHD</li>
      </ul>
      <p className="text-slate-600 text-sm md:text-base">
        The guideline covers assessment, diagnosis, non-pharmacological and pharmacological management, monitoring, and service quality considerations.
      </p>
    </div>

    {/* How to use this guideline */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">How to use this guideline</h3>
      <p className="text-slate-600 text-sm md:text-base mb-4">
        The guideline is structured to support <strong>real-world clinical decision-making</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base mb-4">
        <li>Use the <strong>Clinical Algorithm</strong> for step-by-step guidance</li>
        <li>Refer to <strong>Strength of Recommendations</strong> to understand certainty of evidence</li>
        <li>Consult <strong>Medication Tables</strong> and <strong>Rating Scales</strong> for practical tools</li>
        <li>Apply <strong>Quality Standards</strong> to support service development and audit</li>
      </ul>
      <p className="text-slate-600 text-sm md:text-base">
        The guideline does not replace clinical judgment but is intended to support informed, consistent, and evidence-based care.
      </p>
    </div>

    {/* Guideline contents */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Guideline contents</h3>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <button
            onClick={() => onNavigate('cpg-clinical-recommendations')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Clinical Recommendations
          </button>
          <button
            onClick={() => onNavigate('cpg-strength-of-recommendations')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Strength of Recommendations
          </button>
          <button
            onClick={() => onNavigate('cpg-clinical-algorithms')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Clinical Algorithms
          </button>
          <button
            onClick={() => onNavigate('cpg-medication-tables')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Medication Tables
          </button>
          <button
            onClick={() => onNavigate('cpg-rating-scales')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Rating Scales
          </button>
        </div>
        <div className="space-y-2">
          <button
            onClick={() => onNavigate('cpg-terminology')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Terminology
          </button>
          <button
            onClick={() => onNavigate('cpg-icd-codes')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            ICD Codes
          </button>
          <button
            onClick={() => onNavigate('cpg-quality-standards')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Quality Standards
          </button>
          <button
            onClick={() => onNavigate('cpg-guideline-updates')}
            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm md:text-base font-semibold"
          >
            Guideline Updates
          </button>
        </div>
      </div>
    </div>

    {/* Governance and updates */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Governance and updates</h3>
      <p className="text-slate-600 text-sm md:text-base mb-3">
        The Saudi ADHD CPG is developed and overseen by the Saudi ADHD Society using a structured, transparent methodology aligned with international guideline development standards.
      </p>
      <p className="text-slate-600 text-sm md:text-base mb-3">
        Details on development methodology, acknowledgements, endorsements, publications, and legal notices are available in the <strong>About the Guideline</strong> section.
      </p>
      <p className="text-slate-600 text-sm md:text-base">
        The guideline is periodically reviewed and updated to reflect emerging evidence.
      </p>
    </div>
  </div>
);

export default CpgContentPage;
