import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const IrbProcessPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />

    <header className="space-y-2">
      <h1 className="text-3xl font-bold text-slate-900">IRB Application Process</h1>
      <p className="text-slate-600 max-w-3xl">
        A step-by-step view of how ADHD-related research proposals are submitted, reviewed, and approved by the Saudi ADHD
        Society’s IRB. All studies conducted under the umbrella of the Society must undergo ethical review and receive formal
        approval before any research activities begin.
      </p>
    </header>

    <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm space-y-2">
      <h2 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Important</h2>
      <ul className="list-disc pl-5 text-sm text-amber-900 space-y-1">
        <li>All studies and research conducted under the umbrella of the Saudi ADHD Society must undergo ethical review and receive IRB approval prior to commencement.</li>
        <li>Applications must be submitted using the approved forms and through the official IRB email or portal once available.</li>
        <li>Initiating research activities before receiving written IRB approval is not permitted.</li>
        <li>Exempt research pathways apply only to studies involving less than minimal risk, such as surveys and interviews.</li>
        <li>The Principal Investigator (PI) is responsible for monitoring the level of risk, ensuring that it remains minimal, and keeping the committee informed as required.</li>
        <li>“Minimal risk” means that the probability and magnitude of harm or discomfort anticipated in the research do not exceed those ordinarily encountered in daily life or during routine examinations.</li>
      </ul>
    </section>

    {/* Step-by-step timeline */}
    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Application Steps</h2>
      <div className="relative border-l-2 border-slate-200 ml-3 md:ml-4 space-y-6">
        {[
          'Prepare documents (protocol, consent materials, tools, data plan, and required forms)',
          'Submit the application via the official IRB email using the approved forms',
          'Initial screening for completeness and eligibility by the IRB coordinator',
          'Full ethical review by selected IRB members',
          'Respond to requested clarifications or revisions until a decision is reached',
          'Receive the formal approval letter and ethical clearance certificate, including any conditions of approval'
        ].map((label, idx) => (
          <div key={idx} className="relative pl-6">
            <div className="absolute -left-3 top-1 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white shadow-sm"></div>
            <div className="bg-slate-50 rounded-xl px-4 py-3">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">
                Step {idx + 1}
              </div>
              <p className="text-sm text-slate-700">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-xl font-bold text-slate-900">Prerequisites</h2>
      <p className="text-sm text-slate-600">
        Before submitting an application to the Saudi ADHD Society’s IRB, the Principal Investigator and, where applicable,
        team members should complete the following steps:
      </p>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
        <li>Register on the National Committee of Bioethics website.</li>
        <li>Complete the online Research Ethics course and obtain an electronic certificate of completion.</li>
      </ul>
    </section>

    {/* Document checklist */}
    <section className="grid gap-6 md:grid-cols-2">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-slate-900">Document Checklist</h2>
        <p className="text-sm text-slate-600">
          The exact list will mirror the official forms, but most applications will include:
        </p>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
          <li>Full study protocol, including objectives and methodology.</li>
          <li>Participant information sheets and consent/assent forms.</li>
          <li>Copies of rating scales, interview guides, or questionnaires.</li>
          <li>Recruitment materials (posters, emails, social media posts).</li>
          <li>Data protection and management plan.</li>
        </ul>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-slate-900">Indicative Timelines</h2>
        <p className="text-sm text-slate-600">
          Timelines may vary depending on complexity and submission quality, but as a guide:
        </p>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
          <li>IRB-exempt requests or expedited review: approximately 2 weeks from receipt of a complete application.</li>
          <li>Full IRB approval: approximately 1 month from receipt of a complete application.</li>
          <li>Additional time may be required if substantial revisions or clarifications are requested during the review process.</li>
        </ul>
      </div>
    </section>

    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-xl font-bold text-slate-900">Expedited Review</h2>
      <p className="text-sm text-slate-600">
        If you already hold an existing IRB approval for your research project from another recognised institution and wish to
        request the Saudi ADHD Society’s support in distributing your research tool (for example, questionnaires or surveys),
        an expedited review pathway may be available.
      </p>
      <p className="text-sm text-slate-600">
        In such cases, you will normally be asked to provide a copy of the existing IRB approval along with a summary of your
        protocol and the materials to be distributed. Further details will be provided once the portal is live; in the interim,
        researchers can contact the research coordinator via the official research email address for guidance.
      </p>
    </section>

    <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wide">Ready to begin?</h3>
        <p className="text-sm text-emerald-900">
          When the IRB portal is live, this section will link directly to the application form and guidance documents.
          For now, use the overview and regulations pages to shape your proposal.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => onNavigate('irb')}
          className="px-4 py-2 rounded-lg bg-white border border-emerald-300 text-sm font-semibold text-emerald-900 hover:bg-emerald-100"
        >
          Back to IRB Overview
        </button>
        <button
          onClick={() => onNavigate('irb-guide')}
          className="px-4 py-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          View Ethics Guide (preview)
        </button>
      </div>
    </section>
  </div>
);

export default IrbProcessPage;
