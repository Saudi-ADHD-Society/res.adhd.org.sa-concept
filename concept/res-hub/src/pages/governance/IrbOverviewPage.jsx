import React from 'react';

const IrbOverviewPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-xs text-slate-500 uppercase tracking-wide">
      Research Governance / Research Ethics &amp; Local IRB / <span className="font-semibold text-slate-600">IRB Overview &amp; Scope</span>
    </div>

    <header className="space-y-2">
      <h1 className="text-3xl font-bold text-slate-900">IRB Overview &amp; Scope</h1>
      <p className="text-slate-600 max-w-3xl">
        A high-level introduction to the Saudi ADHD Society’s Institutional Review Board (IRB): a permanent local Research Ethics
        Committee established to protect the rights, safety, and dignity of individuals with ADHD. It operates in line with Islamic
        teachings, local regulations and laws, and societal values, and exists to prevent ethical violations in ADHD-related research
        linked to the Society.
      </p>
    </header>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">What is the IRB?</h2>
      <p className="text-sm text-slate-600">
        The Institutional Review Board is the body responsible for protecting the rights, safety, and dignity of participants
        in ADHD-related research linked to the Saudi ADHD Society. It applies international ethical principles while taking
        into account the Saudi legal and cultural context.
      </p>
      <p className="text-sm text-slate-600">
        The Saudi ADHD Society’s IRB is a permanent local Research Ethics Committee officially registered with King Abdulaziz
        City for Science and Technology (KACST) under the National Committee of Bioethics, registration number HO-01-R-119. It
        operates within the framework of the National Committee’s regulations and their executive by-laws.
      </p>
      <p className="text-sm text-slate-600">
        In practice, the IRB reviews research protocols, consent materials, and data protection plans to ensure that risks
        are minimised and potential benefits are clearly articulated.
      </p>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Objectives &amp; Key Responsibilities</h2>

      <p className="text-sm text-slate-600">
        The general objective of the IRB is to review all ADHD-related research proposals linked to the Society and ensure they
        comply with accepted ethical practices and responsibilities throughout the research process. This includes working within
        an ethical framework that aligns with religious teachings, societal values, and national laws.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-2">Core Objectives</h3>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>Apply ethical standards and regulations to ADHD-related scientific research.</li>
            <li>Promote scientific and ethical integrity based on honesty, fairness, and objectivity.</li>
            <li>Safeguard the rights and responsibilities of research participants.</li>
            <li>Ensure adherence to the National Committee of Bioethics regulations.</li>
            <li>Enhance the transparency and value of ADHD research locally and regionally.</li>
            <li>Raise awareness about research ethics and encourage related educational activities.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-2">Key Responsibilities</h3>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>Review research proposals submitted to the Society for compliance with the Bioethics Law.</li>
            <li>Protect the rights, safety, and well-being of human participants.</li>
            <li>Verify the validity and clarity of the informed consent process.</li>
            <li>Ensure that minors and individuals with limited capacity are not exploited in research.</li>
            <li>Issue ethical approvals for research that meets required standards.</li>
            <li>Monitor researchers’ adherence to the conditions of the approvals granted.</li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-slate-500">
        In line with its vision to uphold the highest standards of research ethics and achieve scientific excellence, the IRB
        aims to provide robust scientific and ethical support for ADHD-related research.
      </p>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Scope of Review</h2>
      <p className="text-sm text-slate-600">
        The IRB focuses on ADHD-related projects that involve people, personal data, or clinical decision-making. Typical
        examples include:
      </p>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>Clinical or psychosocial interventions involving children, adolescents, or adults with ADHD.</li>
        <li>Use of validated or experimental rating scales where identifiable participant data are collected.</li>
        <li>Qualitative interviews or focus groups with people with ADHD, families, or professionals.</li>
        <li>Linkage of clinical, educational, or administrative datasets that could re-identify individuals.</li>
      </ul>
      <p className="text-sm text-slate-600">
        Low-risk service evaluations and purely anonymous audits may fall outside the IRB’s scope, but should still be
        discussed with the governance team when in doubt.
      </p>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Who Should Apply?</h2>
      <p className="text-sm text-slate-600">
        The following groups are typically expected to seek IRB review before starting an ADHD-related project:
      </p>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>Researchers affiliated with Saudi universities or healthcare institutions partnering with the Society.</li>
        <li>Students (undergraduate, postgraduate, fellowship) whose projects involve Society members or services.</li>
        <li>International collaborators conducting joint studies that involve participants in Saudi Arabia.</li>
      </ul>
    </section>

    <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
      <h2 className="text-lg font-bold text-amber-900">Important: Approval Before Data Collection</h2>
      <p className="text-sm text-amber-900">
        Ethical approval must be obtained <strong>before</strong> any recruitment, data collection, or access to identifiable
        records begins. Retrospective approval is generally not granted.
      </p>
      <p className="text-xs text-amber-900/80">
        Drafts and early conversations are welcome. The goal is to help you design a study that is both feasible and ethically
        robust from the start.
      </p>
    </section>

    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Next steps</h3>
        <p className="text-sm text-slate-600">
          Once you understand the basic scope of the IRB, review the regulations for research groups or go straight to the
          application process.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => onNavigate('irb-regulations')}
          className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          View Regulations
        </button>
        <button
          onClick={() => onNavigate('irb-process')}
          className="px-4 py-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Go to Application Process
        </button>
      </div>
    </section>

    <div className="text-xs text-slate-500">
      <button
        onClick={() => onNavigate('irb')}
        className="underline hover:text-emerald-700"
      >
        Back to Research Ethics &amp; Local IRB overview
      </button>
    </div>
  </div>
);

export default IrbOverviewPage;


