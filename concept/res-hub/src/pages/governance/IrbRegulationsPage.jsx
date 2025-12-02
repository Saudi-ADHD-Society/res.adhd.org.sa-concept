import React from 'react';

const IrbRegulationsPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-xs text-slate-500 uppercase tracking-wide">
      Research Governance / Research Ethics &amp; Local IRB / <span className="font-semibold text-slate-600">Regulations &amp; Conditions for Research Groups</span>
    </div>

    <header className="space-y-2">
      <h1 className="text-3xl font-bold text-slate-900">Regulations &amp; Conditions for Research Groups</h1>
      <p className="text-slate-600 max-w-3xl">
        Conditions and responsibilities for research groups whose projects are linked to the Saudi ADHD Society’s research
        priorities and reviewed by its Local Research Ethics Committee. These conditions are aligned with national
        regulations, the National Committee of Bioethics framework, and the goals of Saudi Vision 2030.
      </p>
    </header>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Eligibility &amp; Conditions for Research Groups</h2>
      <p className="text-sm text-slate-600">
        Research groups supported by the Saudi ADHD Society must meet specific eligibility criteria and operate within a
        clear governance framework. The conditions below summarise the key requirements drawn from the official
        “Regulations and Conditions for Research Groups”.
      </p>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>
          The proposed research group must align with the priorities of the Saudi ADHD Society and be consistent with the
          goals of Saudi Vision 2030.
        </li>
        <li>
          The group must have a Principal Investigator (PI) to lead the team, affiliated with an academic or research
          institution within the Kingdom, with relevant experience and a proven track record in managing grants, research
          projects, and scientific publications.
        </li>
        <li>
          The research group should select a name that reflects its area of specialisation and activity, and provide a clear
          summary of its expected research activities.
        </li>
        <li>
          The research group must consist of at least a PI and one co-investigator, with preference for multidisciplinary
          collaboration and coherence within the group.
        </li>
        <li>
          The PI and the research team must adhere to the scientific research ethics regulations issued by King Abdulaziz
          City for Science and Technology (KACST) and the National Committee of Bioethics.
        </li>
        <li>
          If a proposal requires Institutional Review Board (IRB) approval, the group is responsible for obtaining it from the
          appropriate authorities and submitting copies of approvals to the Saudi ADHD Society before any contract is signed.
        </li>
        <li>
          The local Research Ethics Committee on Living Creatures at the Saudi ADHD Society limits its IRB approval to
          internal Society-funded studies that do not involve clinical procedures, such as blood withdrawal, genetic analysis,
          or pharmaceutical interventions. Instead, it reviews minimal-risk studies, such as those using questionnaires,
          databases, or interviews.
        </li>
        <li>
          A researcher may participate in a maximum of three research groups, and may serve as PI for no more than two
          groups, unless an exception is granted by the Society’s research committees.
        </li>
      </ul>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Researcher Responsibilities</h2>
      <p className="text-sm text-slate-600">
        Ethical approval is conditional on the research team fulfilling ongoing responsibilities towards participants,
        partner organisations, and the wider community.
      </p>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>Protecting confidentiality and securely storing, anonymising, or de-identifying data in line with local regulations.</li>
        <li>Ensuring that all team members understand and comply with the Bioethics Law and related executive by-laws.</li>
        <li>Promptly reporting protocol deviations, adverse events, or emerging safety concerns to the IRB and the Society.</li>
        <li>Using validated tools and procedures where available, or clearly justifying any deviations in the protocol.</li>
        <li>Maintaining transparent authorship practices, declaring conflicts of interest, and acknowledging the Society’s funding as required.</li>
      </ul>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Compliance &amp; Monitoring</h2>
      <p className="text-sm text-slate-600">
        After approval, the IRB may require periodic updates or reports, especially for longer or higher-risk studies.
        Failure to comply with agreed conditions can lead to suspension or withdrawal of approval.
      </p>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>Submitting progress reports and final study reports when requested.</li>
        <li>Notifying the IRB of changes to the protocol, instruments, or recruitment methods.</li>
        <li>Ensuring that any audits or monitoring visits are supported by the research team.</li>
        <li>
          The IRB and the Society reserve the right to suspend or withdraw approval and funding if serious non-compliance
          with agreed regulations or ethical standards is identified.
        </li>
      </ul>
    </section>

    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Funding, Outputs &amp; Acknowledgement</h2>
      <p className="text-sm text-slate-600">
        The Saudi ADHD Society provides financial support for eligible research groups under clear conditions related to
        publication quality, indexing, and formal acknowledgement of funding.
      </p>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>
          Only original research published in indexed databases (e.g., Web of Science – ISI or Scopus) is eligible for
          acceptance.
        </li>
        <li>
          A single peer-reviewed conference paper may also be accepted if it is published in a database indexed by Web of
          Science – ISI or Scopus.
        </li>
        <li>
          The research group must acknowledge the Saudi ADHD Society as the funding body in all publications, and no other
          funding bodies may be acknowledged for the same project.
        </li>
        <li>
          The group number and IRB registration should be cited in the acknowledgement section, for example:
          <br />
          <span className="block mt-1 text-xs text-slate-600 italic">
            “The authors extend their appreciation to the Saudi ADHD Society for funding this work through the Institutional
            Review Board Research (HO-01-R-119): Group no (00-000).”
          </span>
        </li>
        <li>
          Each approved research group is entitled to a total budget of SAR 70,000, disbursed in instalments according to the
          Society’s administrative procedures and contingent upon meeting agreed milestones and publication requirements.
        </li>
        <li>
          The Society may support up to 10 research projects per year, with a total annual budget of SAR 700,000. The
          Research Committee reserves the right to adjust the number of supported projects based on assessed needs.
        </li>
      </ul>
    </section>

    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
      <h2 className="text-lg font-bold text-slate-900">Key Regulations and Conditions (Summary)</h2>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
        <li>Respect for persons: voluntary participation with informed consent.</li>
        <li>Beneficence and non-maleficence: minimise risks, maximise potential benefits.</li>
        <li>Justice: fair recruitment and equitable access to research benefits.</li>
        <li>Data stewardship: responsible collection, storage, sharing, and destruction of data.</li>
      </ul>
    </section>

    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Next steps</h3>
        <p className="text-sm text-slate-600">
          When you are comfortable with the conditions for research groups, review the IRB application process and prepare
          your documentation.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => onNavigate('irb-process')}
          className="px-4 py-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Go to Application Process
        </button>
        <button
          onClick={() => onNavigate('irb')}
          className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Back to IRB Overview
        </button>
      </div>
    </section>
  </div>
);

export default IrbRegulationsPage;
