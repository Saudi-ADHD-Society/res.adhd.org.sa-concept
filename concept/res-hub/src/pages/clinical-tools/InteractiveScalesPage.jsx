import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const InteractiveScalesPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />
    <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900">Interactive Rating Scales</h2>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">New for Nov 2025</span>
    </div>
    <p className="text-slate-600">
      These interactive Arabic ADHD rating scales are now available as professionally designed, fillable PDFs on the official CPG microsite. Each tool includes automated scoring logic, reducing calculation errors and saving clinicians valuable time during assessment.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      {/* VADTRS */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-2">VADTRS-3-AR</h3>
        <p className="text-sm text-slate-500 mb-4">Vanderbilt ADHD Teachers Rating Scale v3 (Arabic). Optimized for classroom observations in the Saudi context.</p>
        <a
          href="https://cpg.adhd.org.sa/en/guideline/rating-scales/"
          target="_blank"
          rel="noreferrer"
          className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-sm transition-colors text-center block"
        >
          Get Interactive PDF
        </a>
      </div>

      {/* ASRS */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-2">ASRS-5-AR</h3>
        <p className="text-sm text-slate-500 mb-4">ADHD Self-Report Scale DSM-5 (Arabic). Validated for adult screening.</p>
        <a
          href="https://cpg.adhd.org.sa/en/guideline/rating-scales/"
          target="_blank"
          rel="noreferrer"
          className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-sm transition-colors text-center block"
        >
          Get Interactive PDF
        </a>
      </div>

      {/* Parents Scales */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-2">VADPRS-3-AR</h3>
        <p className="text-sm text-slate-500 mb-4">Vanderbilt ADHD Parents Rating Scale. Includes unified personal information sections.</p>
        <a
          href="https://cpg.adhd.org.sa/en/guideline/rating-scales/"
          target="_blank"
          rel="noreferrer"
          className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-sm transition-colors text-center block"
        >
          Get Interactive PDF
        </a>
      </div>
    </div>

    {/* Research Evidence (Reverse Chronology) */}
    <div className="mt-12 space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Research Evidence Supporting These Tools</h3>
      <p className="text-slate-600 text-sm md:text-base mb-4">
        These interactive scales are grounded in peer‑reviewed psychometric research conducted in Saudi Arabia.
        Below is a reverse‑chronological overview of the validation studies.
      </p>

      <div className="space-y-4 text-sm text-slate-700">
        {/* 2025 – Adolescents Scale */}
        <div className="border-l-4 border-emerald-500 pl-4">
          <div className="font-semibold text-slate-900">2025 — Validation of the Arabic ADHD Rating Scale‑5 for Adolescents</div>
          <p className="text-slate-600">
            The ASRS‑5‑AR adolescent version was validated using structural equation modelling on a large Saudi sample,
            demonstrating strong construct validity and internal consistency.
          </p>
          <a
            href="https://doi.org/10.1038/s41598-025-12976-7"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 font-semibold hover:underline text-xs"
          >
            View Publication
          </a>
        </div>

        {/* 2025 – Adult Scale */}
        <div className="border-l-4 border-emerald-500 pl-4">
          <div className="font-semibold text-slate-900">2025 — Standardization of the Arabic ASRS‑5 for Adults</div>
          <p className="text-slate-600">
            This study established normative performance and sociodemographic variability in ADHD screening among Saudi
            adults, providing population‑specific interpretive guidance for the ASRS‑5‑AR.
          </p>
          <a
            href="https://doi.org/10.1177/10870547251313879"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 font-semibold hover:underline text-xs"
          >
            View Publication
          </a>
        </div>

        {/* 2024 – Children’s Vanderbilt */}
        <div className="border-l-4 border-emerald-500 pl-4">
          <div className="font-semibold text-slate-900">2024 — Psychometric Properties of the Arabic Vanderbilt (VADRS‑A)</div>
          <p className="text-slate-600">
            The children’s Vanderbilt scale was evaluated in a Saudi cohort, confirming high reliability, strong
            factorial structure, and suitability for local clinical and educational settings.
          </p>
          <a
            href="https://doi.org/10.2478/sjcapp-2024-0008"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 font-semibold hover:underline text-xs"
          >
            View Publication
          </a>
        </div>
      </div>
    </div>
  </div>
  
);

export default InteractiveScalesPage;
