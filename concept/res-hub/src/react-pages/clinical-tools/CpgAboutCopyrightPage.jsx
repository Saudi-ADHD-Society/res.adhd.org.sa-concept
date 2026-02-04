import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CpgAboutCopyrightPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Content */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="space-y-4 text-slate-600 text-sm md:text-base">
        <p>
          This document "Evidence-Based Clinical Practice Guideline for Management of Attention deficit hyperactivity disorder (ADHD) in Saudi Arabia" draws on NICE guidance (UK).
        </p>
        <p>
          © NICE (2018) NG87 Attention deficit hyperactivity disorder: diagnosis and management. Available from <a href="https://www.nice.org.uk/guidance/ng87" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">www.nice.org.uk/guidance/ng87</a> All rights reserved. Subject to <a href="https://www.nice.org.uk/terms-and-conditions#notice-of-rights" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">Notice of rights</a>.
        </p>
        <p>
          NICE guidance is prepared for the National Health Service in England. It is subject to regular review and updating and may be withdrawn. NICE accepts no responsibility for the use of its content in this product/publication.
          <br />The implementation tools in the appendices were developed by the Saudi ADHD Society.
        </p>
      </div>

      {/* Terms and Conditions */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms and Conditions:</h2>
        <p className="text-slate-600 text-sm md:text-base">
          Use of this CPG is governed by the original <a href="https://www.nice.org.uk/terms-and-conditions" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">NICE Terms and Conditions</a> and the <a href="https://www.nice.org.uk/re-using-our-content/uk-open-content-licence" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">NICE UK Open Content Licence</a>.
        </p>
      </div>

      {/* End User Licence */}
      <div className="bg-white border border-slate-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">End User Licence:</h2>
        <p className="text-slate-600 text-sm md:text-base mb-6">
          As the end user, your right to freely use the adapted CPG is covered by a <a href="https://creativecommons.org/licenses/by-nd/4.0/" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) licence</a> in as far as this does not conflict with the original terms and conditions. In brief, this means:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">You may:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
              <li>Freely share and distribute this adapted CPG for personal use</li>
              <li>Freely share and distribute this adapted CPG for academic and educational purposes</li>
              <li>Freely share and distribute this adapted CPG for use in any healthcare setting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">You must:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
              <li>Include attribution to the Saudi ADHD Society with a link to the CPG micro-site: <a href="https://cpg.adhd.org.sa" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">https://cpg.adhd.org.sa</a></li>
              <li>Include this page (Copyright Notice) with the CPG (print usage)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">You may not:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
              <li>Change, adapt, or redistribute modified versions of this CPG</li>
              <li>Relicense or rebrand any of the material</li>
              <li>Sell copies of this CPG for commercial gain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CpgAboutCopyrightPage;
