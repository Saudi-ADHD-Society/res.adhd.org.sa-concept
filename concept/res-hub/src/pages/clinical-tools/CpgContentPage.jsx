import React from 'react';

const CpgContentPage = ({ onNavigate }) => {
  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `${window.location.pathname}${anchorId}`);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Saudi ADHD Clinical Practice Guidelines (CPG)</h2>
        <p className="text-slate-500 mt-2">
          Evidence-based clinical guidance for the assessment and management of Attention Deficit/Hyperactivity Disorder (ADHD) across the lifespan in Saudi Arabia.
        </p>
        <p className="text-slate-600 mt-2 text-sm md:text-base">
          Developed and maintained by the Saudi ADHD Society in collaboration with national and international experts.
        </p>
      </div>

      {/* Two Column Layout: Content Left, Contents Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content - Wide Left Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* What is this guideline? */}
          <div id="overview" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
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

          {/* About the Guideline Section */}
          <div id="about-the-guideline" className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm scroll-mt-20">
            <h3 className="text-xl font-bold text-slate-900 mb-6">About the Guideline</h3>
            
            {/* Overview */}
            <div id="about-overview" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Overview</h4>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                The Saudi ADHD Clinical Practice Guidelines provide practical, evidence-based recommendations to support healthcare professionals in the diagnosis, treatment, and long-term management of ADHD.
              </p>
              <p className="text-slate-600 text-sm md:text-base">
                The guideline synthesizes international best evidence and adapts it to the Saudi healthcare context, including local clinical pathways, regulatory frameworks, and cultural considerations.
              </p>
            </div>

            {/* Development */}
            <div id="about-development" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Development</h4>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                The Saudi ADHD CPG is developed and overseen by the Saudi ADHD Society using a structured, transparent methodology aligned with international guideline development standards.
              </p>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                The guideline was developed using the KSU-Modified-ADAPTE methodology, adapting evidence-based recommendations from international guidelines (notably NICE) to the Saudi healthcare context.
              </p>
              <button
                onClick={() => onNavigate('adhd-cpg-about-development')}
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Read more <span className="ml-1">→</span>
              </button>
            </div>

            {/* Endorsements */}
            <div id="about-endorsements" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Endorsements</h4>
              <p className="text-slate-600 text-sm md:text-base mb-4">
                This adapted CPG from the Saudi ADHD Society has been critically reviewed and endorsed by the following organizations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="https://shc.gov.sa/en/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <p className="font-semibold text-slate-900 hover:text-emerald-700">Saudi Health Council</p>
                </a>
                <a
                  href="https://spa.org.sa"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <p className="font-semibold text-slate-900 hover:text-emerald-700">Saudi Psychiatric Association</p>
                </a>
                <a
                  href="https://sps.ksu.edu.sa/en"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <p className="font-semibold text-slate-900 hover:text-emerald-700">Saudi Pharmaceutical Society</p>
                </a>
                <a
                  href="https://spnsociety.org.sa"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <p className="font-semibold text-slate-900 hover:text-emerald-700">Saudi Pediatric Neurology Society</p>
                </a>
                <a
                  href="https://www.saudipeds.org"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <p className="font-semibold text-slate-900 hover:text-emerald-700">Saudi Pediatric Association</p>
                </a>
                <a
                  href="https://sspp-sa.org/?lang=en"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <p className="font-semibold text-slate-900 hover:text-emerald-700">Saudi Society of Professional Psychology</p>
                </a>
              </div>
            </div>

            {/* Publications */}
            <div id="about-publications" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Publications</h4>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                The guideline is published by the Saudi ADHD Society. The first edition was published in 2020 and registered with King Fahad National Library with ISBN: 978-603-03-4786-5 L.D. no. 1441/12726.
              </p>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                A peer-reviewed publication describing the adaptation process is available: Bashiri, F. A., Albatti, T. H., Hamad, M. H., et al. (2021). Adapting evidence-based clinical practice guidelines for people with attention deficit hyperactivity disorder in Saudi Arabia: process and outputs of a national initiative. <em>Child and Adolescent Psychiatry and Mental Health</em>, 15(1), 1–16.
              </p>
              <button
                onClick={() => onNavigate('adhd-cpg-about-publications')}
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Read more <span className="ml-1">→</span>
              </button>
            </div>

            {/* Acknowledgements */}
            <div id="about-acknowledgements" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Acknowledgements</h4>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                The development of this guideline was made possible through the contributions of national and international experts, healthcare professionals, patients, families, and organizations. The Saudi ADHD Society acknowledges all individuals and groups who participated in the guideline development process.
              </p>
              <button
                onClick={() => onNavigate('adhd-cpg-about-acknowledgements')}
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Read more <span className="ml-1">→</span>
              </button>
            </div>

            {/* Disclaimer */}
            <div id="about-disclaimer" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Disclaimer</h4>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                This guideline is intended to support clinical decision-making but does not replace professional judgment. Healthcare professionals should use their clinical expertise and consider individual patient circumstances when applying these recommendations.
              </p>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                The guideline does not override the individual responsibility of healthcare professionals to make decisions appropriate to the circumstances of the individual patient, in consultation with the patient and/or their carer or guardian.
              </p>
              <button
                onClick={() => onNavigate('adhd-cpg-about-disclaimer')}
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Read more <span className="ml-1">→</span>
              </button>
            </div>

            {/* Copyright */}
            <div id="about-copyright" className="scroll-mt-20">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Copyright</h4>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                This document "Evidence-Based Clinical Practice Guideline for Management of Attention deficit hyperactivity disorder (ADHD) in Saudi Arabia" draws on NICE guidance (UK). © NICE (2018) NG87 Attention deficit hyperactivity disorder: diagnosis and management. Available from <a href="https://www.nice.org.uk/guidance/ng87" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">www.nice.org.uk/guidance/ng87</a>. All rights reserved. Subject to <a href="https://www.nice.org.uk/terms-and-conditions#notice-of-rights" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">Notice of rights</a>.
              </p>
              <p className="text-slate-600 text-sm md:text-base mb-3">
                Use of this CPG is governed by the original <a href="https://www.nice.org.uk/terms-and-conditions" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">NICE Terms and Conditions</a> and the <a href="https://www.nice.org.uk/re-using-our-content/uk-open-content-licence" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">NICE UK Open Content Licence</a>. As the end user, your right to freely use the adapted CPG is covered by a <a href="https://creativecommons.org/licenses/by-nd/4.0/" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) licence</a> in as far as this does not conflict with the original terms and conditions.
              </p>
              <button
                onClick={() => onNavigate('adhd-cpg-about-copyright')}
                className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Read more <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contents - Narrow Right Column */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-20 z-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contents</h2>
            <div className="border-t border-slate-200 mb-4"></div>
            
            {/* Guideline contents */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Guideline contents</h3>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('cpg-clinical-recommendations')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Clinical Recommendations
                </button>
                <button
                  onClick={() => onNavigate('cpg-strength-of-recommendations')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Strength of Recommendations
                </button>
                <button
                  onClick={() => onNavigate('cpg-clinical-algorithms')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Clinical Algorithms
                </button>
                <button
                  onClick={() => onNavigate('cpg-medication-tables')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Medication Tables
                </button>
                <button
                  onClick={() => onNavigate('interactive-scales')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Rating Scales
                </button>
                <button
                  onClick={() => onNavigate('cpg-terminology')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Terminology
                </button>
                <button
                  onClick={() => onNavigate('cpg-icd-codes')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  ICD Codes
                </button>
                <button
                  onClick={() => onNavigate('cpg-quality-standards')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Quality Standards
                </button>
                <button
                  onClick={() => onNavigate('cpg-guideline-updates')}
                  className="block w-full text-left p-2 hover:bg-emerald-50 rounded-lg transition-colors text-slate-600 hover:text-emerald-800 text-sm font-semibold"
                >
                  Guideline Updates
                </button>
              </div>
            </div>

            <div className="border-t border-slate-200 mb-4"></div>

            {/* About the Guideline */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">About the Guideline</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>
                  <a 
                    href="#about-overview" 
                    onClick={(e) => handleAnchorClick(e, '#about-overview')} 
                    className="hover:text-emerald-600 transition-colors block"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-development" 
                    onClick={(e) => handleAnchorClick(e, '#about-development')} 
                    className="hover:text-emerald-600 transition-colors block"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-endorsements" 
                    onClick={(e) => handleAnchorClick(e, '#about-endorsements')} 
                    className="hover:text-emerald-600 transition-colors block"
                  >
                    Endorsements
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-publications" 
                    onClick={(e) => handleAnchorClick(e, '#about-publications')} 
                    className="hover:text-emerald-600 transition-colors block"
                  >
                    Publications
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-acknowledgements" 
                    onClick={(e) => handleAnchorClick(e, '#about-acknowledgements')} 
                    className="hover:text-emerald-600 transition-colors block"
                  >
                    Acknowledgements
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-disclaimer" 
                    onClick={(e) => handleAnchorClick(e, '#about-disclaimer')} 
                    className="hover:text-emerald-600 transition-colors block"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-copyright" 
                    onClick={(e) => handleAnchorClick(e, '#about-copyright')} 
                    className="hover:text-emerald-600 transition-colors block"
                  >
                    Copyright
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpgContentPage;
