import React from 'react';
import { FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const ResearchBriefCpgAdaptationPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-teal-600 text-sm font-bold mb-3">
        <FileText size={16} />
        <span>Methodology & Process</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Adapting Evidence-Based Guidelines: The Saudi National ADHD CPG Development Process
      </h1>
      <p className="text-slate-600 mb-4">
        A detailed account of how the Saudi ADHD Society adapted the NICE ADHD guideline to create the first national 
        evidence-based clinical practice guideline for ADHD management in Saudi Arabia, using the KSU-Modified-ADAPTE methodology.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="text-slate-700 mb-2">
          <strong>Source:</strong> Bashiri FA, Albatti TH, Hamad MH, et al. (2021) Adapting evidence-based clinical 
          practice guidelines for people with attention deficit hyperactivity disorder in Saudi Arabia: process and outputs 
          of a national initiative. <em>Child and Adolescent Psychiatry and Mental Health</em> 15, 6.
        </p>
        <a
          href="https://doi.org/10.1186/s13034-020-00351-5"
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
        <h2 className="text-xl font-bold text-slate-900 mb-4">Why Adapt Rather Than Develop From Scratch?</h2>
        <p className="text-slate-600 mb-4">
          Developing clinical practice guidelines from scratch is resource-intensive, time-consuming, and requires 
          extensive methodological expertise. The Saudi ADHD Society chose to <strong>adapt</strong> the high-quality 
          NICE ADHD guideline (NG87) rather than create a new one, recognizing that:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Adaptation is more <strong>resource-efficient</strong> while maintaining methodological rigor</li>
          <li>It allows leveraging <strong>existing high-quality evidence</strong> without duplicating systematic reviews</li>
          <li>Adaptation can improve <strong>adoption and implementation</strong> by tailoring recommendations to local context</li>
          <li>It enables <strong>faster delivery</strong> of evidence-based guidance to clinicians and patients</li>
        </ul>
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mt-4">
          <p className="text-sm text-teal-900">
            <strong>Key Insight:</strong> The NICE guideline was selected as the source CPG based on the AGREE II appraisal 
            study, which identified it as the highest-quality ADHD guideline available internationally.
          </p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">The KSU-Modified-ADAPTE Methodology</h2>
        <p className="text-slate-600 mb-4">
          The adaptation process followed a structured three-phase approach developed at King Saud University:
        </p>
        
        <div className="space-y-4 mb-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-emerald-900 mb-2">Phase 1: Set-Up</h3>
            <ul className="list-disc pl-5 space-y-1 text-emerald-800 text-sm">
              <li>Formation of multidisciplinary guideline adaptation group (GAG)</li>
              <li>Defining scope and health questions</li>
              <li>Searching and selecting source CPG (NICE NG87)</li>
              <li>Assessing currency and quality of source CPG</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2">Phase 2: Adaptation</h3>
            <ul className="list-disc pl-5 space-y-1 text-blue-800 text-sm">
              <li>Systematic review of recommendations from source CPG</li>
              <li>Assessment of applicability to Saudi context</li>
              <li>Decision-making on adoption, adaptation, or exclusion of each recommendation</li>
              <li>Modification of recommendations to fit local healthcare system, resources, and cultural context</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-purple-900 mb-2">Phase 3: Finalization</h3>
            <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm">
              <li>External review by clinical and methodological experts</li>
              <li>Public consultation and stakeholder feedback</li>
              <li>Development of implementation tools and resources</li>
              <li>Final approval and publication</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Outputs: Ten Categories of Recommendations</h2>
        <p className="text-slate-600 mb-4">
          The adapted guideline includes evidence-based recommendations across ten main categories:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Service Organisation & Training</strong> — Healthcare system structure and provider education</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Recognition, Identification & Referral</strong> — Early detection pathways</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Diagnosis</strong> — Assessment procedures and criteria</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Support</strong> — Psychosocial and educational interventions</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Managing ADHD</strong> — Treatment planning and coordination</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Dietary Advice</strong> — Nutrition and lifestyle recommendations</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Medication</strong> — Pharmacological treatment options</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Maintenance & Monitoring</strong> — Ongoing care and safety</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Adherence to Treatment</strong> — Supporting medication compliance</span>
          </div>
          <div className="flex items-start space-x-2 p-3 bg-slate-50 rounded-lg">
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-slate-700"><strong>Review & Discontinuation</strong> — Treatment evaluation and stopping</span>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Implementation Tools Developed</h2>
        <p className="text-slate-600 mb-4">
          To enhance the practical use of the guideline, the team developed a comprehensive suite of implementation tools:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Clinical Algorithm:</strong> Step-by-step decision-making flowchart for diagnosis and management</li>
          <li><strong>Quality Measures:</strong> Indicators to assess adherence to guideline recommendations</li>
          <li><strong>Coding System:</strong> ICD-10-AM codes aligned with Saudi healthcare coding standards</li>
          <li><strong>Medication Tables:</strong> Dosing, monitoring, and safety information for ADHD medications</li>
          <li><strong>Translations:</strong> Arabic versions of key patient information and clinician resources</li>
          <li><strong>Patient Information:</strong> Plain-language materials for families and individuals with ADHD</li>
          <li><strong>Online Resources:</strong> Digital platform hosting the full guideline and tools</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Multidisciplinary Collaboration</h2>
        <p className="text-slate-600 mb-4">
          The adaptation process involved extensive collaboration across specialties and institutions:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-700 mb-2">Guideline Adaptation Group (GAG):</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Pediatric neurologists</li>
              <li>Child and adult psychiatrists</li>
              <li>Clinical psychologists</li>
              <li>CPG methodologists</li>
              <li>Saudi ADHD Society representatives</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-2">External Review Groups:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Clinical content experts</li>
              <li>Methodology reviewers</li>
              <li>Primary care physicians</li>
              <li>Pharmacists</li>
              <li>International advisors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Significance for Saudi Healthcare</h2>
        <p className="text-slate-600 mb-4">
          This initiative represents a significant milestone in Saudi ADHD care:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>First National ADHD CPG:</strong> Provides standardized, evidence-based guidance for all healthcare providers in Saudi Arabia</li>
          <li><strong>Contextualized Recommendations:</strong> Adapted to fit Saudi healthcare system, resources, and cultural considerations</li>
          <li><strong>Reduced Practice Variation:</strong> Aims to standardize care across different settings (tertiary, primary, private)</li>
          <li><strong>Enhanced Access:</strong> Supports shared-care models and primary care involvement in ADHD management</li>
          <li><strong>Quality Improvement:</strong> Includes quality measures to monitor and improve care delivery</li>
        </ul>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mt-4">
          <p className="text-sm text-indigo-900">
            <strong>Impact:</strong> The guideline is now available at <a href="https://cpg.adhd.org.sa" target="_blank" rel="noreferrer" className="underline font-semibold">cpg.adhd.org.sa</a> and 
            serves as the authoritative reference for ADHD management in Saudi Arabia, supporting clinicians, policymakers, and families.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Lessons for Guideline Development</h2>
        <p className="text-slate-600 mb-4">
          This project demonstrated several key principles for successful guideline adaptation:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Balanced Expertise:</strong> Combining clinical and methodological expertise is essential</li>
          <li><strong>Structured Methodology:</strong> Using a formal adaptation framework (KSU-Modified-ADAPTE) ensures rigor</li>
          <li><strong>Local Context Matters:</strong> Recommendations must be adapted to local healthcare systems and resources</li>
          <li><strong>Implementation Focus:</strong> Developing practical tools alongside the guideline enhances adoption</li>
          <li><strong>Multidisciplinary Input:</strong> Broad stakeholder involvement improves relevance and acceptance</li>
        </ul>
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

export default ResearchBriefCpgAdaptationPage;

