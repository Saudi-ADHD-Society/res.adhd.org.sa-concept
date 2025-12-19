import React from 'react';

const CpgQualityStandardsPage = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Quality Standards</h2>
      <p className="text-slate-500 mt-2">
        Quality standards to support service development and audit for ADHD care.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <p className="text-slate-600 text-sm md:text-base mb-8">
        This includes seven Quality standards that can be used as Key Performance Indicators (KPIs) for quality improvement. The main statements are listed below for quick reference. You can also view the complete ADHD Quality Standards.
      </p>

      {/* Statement 1 */}
      <div id="statement-1-confirmation-of-diagnosis" className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0 scroll-mt-20">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
          <small className="block text-sm font-normal text-slate-500 mb-1">Statement 1:</small>
          Confirmation of diagnosis
        </h2>
        <p className="text-slate-700 text-sm md:text-base">
          Children and young people with symptoms of attention deficit hyperactivity disorder (ADHD) are referred to an ADHD specialist for assessment.
        </p>
      </div>

      {/* Statement 2 */}
      <div id="statement-2-identification-and-referral-in-adults" className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0 scroll-mt-20">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
          <small className="block text-sm font-normal text-slate-500 mb-1">Statement 2:</small>
          Identification and referral in adults
        </h2>
        <p className="text-slate-700 text-sm md:text-base">
          Adults who present with symptoms of attention deficit hyperactivity disorder (ADHD), who do not have a childhood diagnosis of ADHD, are referred to an ADHD specialist for assessment.
        </p>
      </div>

      {/* Statement 3 */}
      <div id="statement-3-continuity-of-child-to-adult-services" className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0 scroll-mt-20">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
          <small className="block text-sm font-normal text-slate-500 mb-1">Statement 3:</small>
          Continuity of child to adult services
        </h2>
        <p className="text-slate-700 text-sm md:text-base">
          Adults who were diagnosed with and treated for attention deficit hyperactivity disorder (ADHD) as children or young people and present with symptoms of continuing ADHD are referred to general adult psychiatric services.
        </p>
      </div>

      {/* Statement 4 */}
      <div id="statement-4-parent-training-programmes" className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0 scroll-mt-20">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
          <small className="block text-sm font-normal text-slate-500 mb-1">Statement 4:</small>
          Parent training programmes
        </h2>
        <p className="text-slate-700 text-sm md:text-base">
          Parents or carers of children with symptoms of attention deficit hyperactivity disorder (ADHD) who meet the NICE eligibility criteria are offered a referral to a parent training programme.
        </p>
      </div>

      {/* Statement 6 */}
      <div id="statement-6-starting-drug-treatment" className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0 scroll-mt-20">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
          <small className="block text-sm font-normal text-slate-500 mb-1">Statement 6:</small>
          Starting drug treatment:
        </h2>
        <p className="text-slate-700 text-sm md:text-base">
          People with attention deficit hyperactivity disorder (ADHD) who are starting drug treatment have their initial drug dose adjusted and response assessed by an ADHD specialist.
        </p>
      </div>

      {/* Statement 7 */}
      <div id="statement-7-annual-review-of-drug-treatment" className="mb-8 pb-8 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0 scroll-mt-20">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">
          <small className="block text-sm font-normal text-slate-500 mb-1">Statement 7:</small>
          Annual review of drug treatment:
        </h2>
        <p className="text-slate-700 text-sm md:text-base">
          People with attention deficit hyperactivity disorder (ADHD) who are taking drug treatment have a specialist review at least annually to assess their need for continued treatment.
        </p>
      </div>
    </div>
  </div>
);

export default CpgQualityStandardsPage;
