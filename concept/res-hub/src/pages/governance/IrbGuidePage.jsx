import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const IrbGuidePage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />

    <header className="space-y-3">
      <h1 className="text-3xl font-bold text-slate-900">Comprehensive Guide to the Regulations Governing Research Ethics</h1>
      <p className="text-slate-600 max-w-3xl text-sm md:text-base">
        This guide sets out the Saudi ADHD Society’s official regulations governing research ethics under the Local Committee
        for Research Ethics on Living Creatures (IRB Registration No. HO-01-R-119). It translates national bioethics law and
        international standards into clear, practical expectations for all research conducted under the Society’s umbrella.
      </p>
    </header>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-xl font-bold text-slate-900">About this Guide</h2>
      <p className="text-sm text-slate-600">
        The regulations are derived from the national Bioethics Law on Living Creatures and its executive regulations issued by
        the National Committee of Bioethics at KACST, alongside relevant Saudi regulations on scientific research and
        intellectual property. They also reflect recognised international benchmarks such as Good Clinical Practice (GCP).
      </p>
      <p className="text-sm text-slate-600">
        The guide is binding on all researchers, students, collaborators, and reviewers working with, or under the umbrella of,
        the Saudi ADHD Society. It is designed to be readable for both experienced investigators and those navigating research
        ethics for the first time.
      </p>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">How the Guide is Structured</h2>
      <p className="text-sm text-slate-600">
        The full text is organised into themed Articles. Each article can be read on its own, but together they form a coherent
        framework covering values, roles, processes, and safeguards.
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <h3 className="font-semibold text-slate-900 mb-1">Articles 1–3: Foundations</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Key definitions (research, researcher, population, sample, risk, informed consent, etc.).</li>
            <li>Scope of application for all research under the Society’s umbrella.</li>
            <li>Core ethical values (Islamic foundations, integrity, transparency, justice, confidentiality, responsibility).</li>
          </ul>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <h3 className="font-semibold text-slate-900 mb-1">Articles 4–6: Roles &amp; Responsibilities</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Policies and responsibilities of the Society and the permanent Research Ethics Committee.</li>
            <li>Duties of researchers, including authorship, reporting, and acknowledgment requirements.</li>
            <li>Standards for reviewers and committee members when evaluating proposals and outputs.</li>
          </ul>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <h3 className="font-semibold text-slate-900 mb-1">Articles 7–10: Practice Standards</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Intellectual property ethics and rights of the Society and investigators.</li>
            <li>Ethics of research involving humans, vulnerable populations, and specific high‑risk groups.</li>
            <li>Publication ethics, acknowledgements, branding, and media disclosure.</li>
            <li>General good practice across the research lifecycle (methods, data, transparency, fairness).</li>
          </ul>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <h3 className="font-semibold text-slate-900 mb-1">Articles 11–12 &amp; Appendices: Enforcement &amp; Tools</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Procedures for investigating potential breaches of research ethics or scientific integrity.</li>
            <li>Possible sanctions and how they are applied proportionately.</li>
            <li>Implementation and review timeline for the regulations.</li>
            <li>Template informed consent form and other supporting materials.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-slate-900">Who Should Use this Guide?</h2>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
        <li>Principal Investigators and research teams preparing proposals to the Saudi ADHD Society.</li>
        <li>Students and early‑career researchers seeking a clear overview of local ethics expectations.</li>
        <li>Clinicians, educators, and community partners collaborating on ADHD‑related research projects.</li>
        <li>Reviewers and Research Ethics Committee members looking for a shared reference framework.</li>
      </ul>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-bold text-slate-900">Accessing the Full Text</h2>
      <p className="text-sm text-slate-600">
        The complete English text of the regulations is currently published on the existing Research Portal. In a later phase,
        this page will host a fully integrated, bilingual version along with downloadable resources.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://res.adhd.org.sa/en/research-ethics-committee/comprehensive-guide-to-the-regulations-governing-research-ethics/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Open full guide on current site
        </a>
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-100 text-sm font-semibold text-slate-500 cursor-not-allowed border border-dashed border-slate-300"
        >
          Download PDF version – coming soon
        </button>
      </div>
    </section>

    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Next steps</h3>
        <p className="text-sm text-slate-600">
          Once you are familiar with the overall framework, you can explore how it applies in practice via the IRB overview and
          application process pages.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => onNavigate('irb-overview')}
          className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Back to IRB Overview &amp; Scope
        </button>
        <button
          onClick={() => onNavigate('irb-process')}
          className="px-4 py-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          View Application Process
        </button>
      </div>
    </section>
  </div>
);

export default IrbGuidePage;
