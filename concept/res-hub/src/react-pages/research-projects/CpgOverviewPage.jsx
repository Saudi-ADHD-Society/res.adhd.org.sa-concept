import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const CpgOverviewPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Saudi National ADHD CPG Overview</h2>
        <p className="text-slate-500 mt-2">
          For clinicians and policy makers: a structured overview of the Saudi National ADHD Clinical Practice Guideline
          and its current 2025–2026 update cycle, with links to the dedicated guideline microsite.
        </p>
      </div>
      <a
        href={getHref('adhd-cpg', basePath)}
        className="flex items-center text-emerald-600 font-bold hover:underline"
      >
        View CPG
      </a>
    </div>

    {/* Current Status Card */}
    <div className="bg-white border border-emerald-100 rounded-xl p-6 shadow-sm space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        <h3 className="text-lg font-bold text-slate-800">Current Status: Major Update Cycle (2025–2026)</h3>
      </div>

      <p className="text-slate-600 text-sm md:text-base">
        The Saudi ADHD Society is leading a comprehensive update of the 2020 National ADHD Clinical Practice Guideline.
        The core technical work is scheduled over approximately five and a half months (July–December 2025), followed by
        national approval, dissemination, and implementation activities in 2026.
      </p>

      {/* High-level timeline */}
      <div className="grid md:grid-cols-4 gap-4 text-xs md:text-sm">
        <div className="border border-emerald-200 rounded-lg p-3 bg-emerald-50/60 relative">
          <div className="flex items-center justify-between mb-1">
            <div className="font-semibold text-emerald-800">Milestone 1</div>
            <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
          </div>
          <div className="text-[11px] uppercase tracking-wide text-emerald-700 mb-1">Preparation &amp; Planning</div>
          <p className="text-slate-600">
            Establishing the Guideline Review Group (ADHD-GRG), confirming scope and objectives, and
            agreeing the working plan and methods.
          </p>
        </div>
        <div className="border border-emerald-200 rounded-lg p-3 bg-emerald-50/60 relative">
          <div className="flex items-center justify-between mb-1">
            <div className="font-semibold text-emerald-800">Milestone 2</div>
            <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
          </div>
          <div className="text-[11px] uppercase tracking-wide text-emerald-700 mb-1">Evidence Review</div>
          <p className="text-slate-600">
            Systematic review and appraisal of new ADHD guidelines and key evidence using
            AGREE II, AGREE-REX, CheckUp and the KSU-Modified-ADAPTE approach.
          </p>
        </div>
        <div className="border border-emerald-100 rounded-lg p-3 bg-emerald-50/40">
          <div className="font-semibold text-emerald-800 mb-1">Milestone 3</div>
          <div className="text-[11px] uppercase tracking-wide text-emerald-700 mb-1">Drafting &amp; Internal Review</div>
          <p className="text-slate-600">
            Drafting the updated Saudi ADHD CPG (full document) and the companion
            implementation toolkit, with iterative review by the steering group.
          </p>
        </div>
        <div className="border border-emerald-100 rounded-lg p-3 bg-emerald-50/40">
          <div className="font-semibold text-emerald-800 mb-1">Milestone 4</div>
          <div className="text-[11px] uppercase tracking-wide text-emerald-700 mb-1">External Review &amp; Finalisation</div>
          <p className="text-slate-600">
            External expert and stakeholder review (including modified Delphi), final
            revisions, and preparation of the final CPG and implementation manual.
          </p>
        </div>
      </div>

      {/* Project team */}
      <div className="bg-slate-50 p-4 rounded-lg text-xs md:text-sm text-slate-700 space-y-2">
        <div className="font-semibold text-slate-900 mb-1">Project team (steering roles)</div>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">Methodology Chair:</span> Dr&nbsp;Yasser S. Amer – CPGs &amp; Quality Reform Unit,
            King Saud University Medical City; Research Chair for Evidence-Based Health Care &amp; Knowledge Translation.
          </li>
          <li>
            <span className="font-semibold">Clinical Chair:</span> Prof.&nbsp;Shuliweeh Alenazi – Psychiatry and ADHD clinical services
            lead (National ADHD CPG Update Project).
          </li>
          <li>
            <span className="font-semibold">Scientific &amp; Health Advisor:</span> Prof.&nbsp;Mohammed Alqahtani – Scientific and Health
            Advisor, Saudi ADHD Society.
          </li>
          <li>
            <span className="font-semibold">Research &amp; Knowledge Translation Lead:</span> Jeremy Varnham – Research &amp; Studies Unit,
            Saudi ADHD Society (linking guideline content with implementation, tools, and communication).
          </li>
        </ul>
        <p className="text-[11px] md:text-xs text-slate-500 mt-1">
          The wider Guideline Review Group (ADHD-GRG) will include additional multidisciplinary experts, stakeholder
          representatives, and external reviewers in later phases.
        </p>
      </div>
    </div>

    {/* Implementation Appraisal */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-slate-800">Implementation Appraisal (AGREE-REX Workshop)</h3>

      <p className="text-slate-600 text-sm md:text-base">
        In 2021, a national expert workshop appraised the first edition of the Saudi ADHD CPG using the AGREE-REX
        (Recommendations Excellence) tool. The guideline received very high scaled scores for recommendation quality
        (around 98%) and contextual suitability (around 85%), and all eight participants recommended it for use in
        their institutions. At the same time, the qualitative discussion highlighted a clear gap between perceived
        guideline quality and day-to-day implementation in Saudi practice.
      </p>

      <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Theme 1</div>
          <div className="font-semibold text-slate-900 mb-1">Training &amp; Awareness</div>
          <p className="text-slate-600">
            Uneven ADHD knowledge and limited familiarity with the CPG in primary care, pediatrics, and school health
            settings. Participants emphasized the need for role-specific training, simple checklists, and brief "action
            aids" that make it easier for non-specialists to apply the guideline correctly.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Theme 2</div>
          <div className="font-semibold text-slate-900 mb-1">Cross-sector Coordination &amp; Digital Tools</div>
          <p className="text-slate-600">
            Fragmented pathways between MOH, university, military, and private sectors, plus limited embedding of ADHD
            tools in electronic health records. Barriers included unclear referral and transition arrangements and
            absence of standardized order sets, templates, and prompts to support CPG-aligned care.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Theme 3</div>
          <div className="font-semibold text-slate-900 mb-1">Patient &amp; Family Engagement</div>
          <p className="text-slate-600">
            Limited availability of bilingual, culturally aligned information materials and structured shared-decision
            making. Experts highlighted the need for co-designed leaflets, brief decision aids, and school-friendly
            tools so that families can understand options, participate in decisions, and sustain treatment plans across
            home, school, and clinic.
          </p>
        </div>
      </div>

      <p className="text-[11px] md:text-xs text-slate-500 pt-2 border-t border-slate-100 mt-4">
        These workshop findings and the proposed behavior-change-oriented implementation strategy for the Saudi ADHD
        CPG are described in detail in a dedicated manuscript that is currently in press. A link to the published
        article will be added here once it becomes available.
      </p>
    </div>

        {/* Incremental Updates (Minor Revisions) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-slate-800">Incremental Updates (Minor Revisions 2022–2023)</h3>
      <p className="text-slate-600 text-sm md:text-base">
        In addition to the upcoming 2025–2026 major update cycle, the first edition of the Saudi ADHD CPG has already
        undergone a series of minor revisions. These incremental updates were reviewed and approved by the Saudi ADHD
        Society's Psychological and Medical Committee and are summarised on the CPG microsite.
      </p>

      <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
        <div className="border border-slate-100 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Clinical safety</div>
          <div className="font-semibold text-slate-900 mb-1">Cardiovascular assessment &amp; ECG</div>
          <p className="text-slate-600">
            Updates in 2022 clarified that a cardiovascular assessment is now recommended even when there is no clear
            family history or obvious risk factors, and refined the indications for ECG before starting ADHD
            medication.
          </p>
        </div>

        <div className="border border-slate-100 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Medication notes</div>
          <div className="font-semibold text-slate-900 mb-1">Off-label prescribing clarifications</div>
          <p className="text-slate-600">
            Minor updates clarified off-label status in specific situations (for example, methylphenidate use around
            age 5 years, and lisdexamfetamine in certain adult presentations) while keeping the overall stepped-care
            approach unchanged.
          </p>
        </div>

        <div className="border border-slate-100 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Alignment with source CPG</div>
          <div className="font-semibold text-slate-900 mb-1">NICE-linked textual refinements</div>
          <p className="text-slate-600">
            Additional minor revisions reflected wording changes and clarifications in the source NICE guideline
            (NG87), including updates to discussion and rationale sections, without altering core recommendations.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2 border-t border-slate-100 mt-4">
        <p className="text-xs md:text-sm text-slate-500 max-w-2xl">
          These minor updates ensure that the Saudi ADHD CPG remains closely aligned with current international
          evidence and safety advice pending the full 2025–2026 revision.
        </p>
        <a
          href={getHref('cpg-guideline-updates', basePath)}
          className="inline-flex items-center text-emerald-700 font-semibold text-xs md:text-sm hover:underline"
        >
          View full list of minor updates
        </a>
      </div>
    </div>

    {/* Original Development (First Edition) */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-slate-800">How the First Edition Was Developed (2017–2020)</h3>
      <p className="text-slate-600 text-sm md:text-base">
        The first Saudi National ADHD CPG was developed between 2017 and 2020 as a national guideline adaptation
        project. The work was registered in PROSPERO, began with a systematic appraisal of international ADHD
        guidelines using the AGREE II instrument, and then used the KSU-Modified-ADAPTE methodology to adapt the
        NICE guideline (NG87) to the Saudi context.
      </p>

      <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
        <div className="border border-slate-100 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Step 1</div>
          <div className="font-semibold text-slate-900 mb-1">Prospero Registration &amp; Scope</div>
          <p className="text-slate-600">
            The project was registered in PROSPERO and scoped to cover recognition, diagnosis, and management of ADHD
            across the lifespan in Saudi Arabia, with primary, secondary, and tertiary care as target settings.
          </p>
          <a
            href="https://www.crd.york.ac.uk/PROSPERO/view/78712"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-700 font-semibold mt-2"
          >
            View PROSPERO record
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>

        <div className="border border-slate-100 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Step 2</div>
          <div className="font-semibold text-slate-900 mb-1">Systematic CPG Appraisal</div>
          <p className="text-slate-600">
            Six international ADHD guidelines were systematically reviewed and rated with AGREE II. The NICE guideline
            scored highest across all domains and was selected as the primary source CPG for adaptation.
          </p>
          <a
            href="https://res.adhd.org.sa/doi/10.1371/journal.pone.0219239"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-700 font-semibold mt-2"
          >
            Read AGREE II review
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>

        <div className="border border-slate-100 rounded-lg p-4 bg-slate-50/60">
          <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Step 3</div>
          <div className="font-semibold text-slate-900 mb-1">Adaptation &amp; National Endorsement</div>
          <p className="text-slate-600">
            A multidisciplinary Guideline Adaptation Group used the KSU-Modified-ADAPTE process to adapt NICE NG87,
            develop implementation tools, and secure endorsement from the Saudi Health Council and five national
            professional societies.
          </p>
          <a
            href="https://res.adhd.org.sa/doi/10.1186/s13034-020-00351-5"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-700 font-semibold mt-2"
          >
            Read adaptation study
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2 border-t border-slate-100 mt-4">
        <p className="text-xs md:text-sm text-slate-500 max-w-2xl">
          The finalized guideline was first published in 2020, supported by a clinical algorithm, medication tables, and
          implementation tools. The CPG is now integrated into this research portal, with online access to the guideline in Arabic and English as well as downloadable PDFs.
        </p>
        <a
          href={getHref('adhd-cpg-about-development', basePath)}
          className="inline-flex items-center text-emerald-700 font-semibold text-xs md:text-sm hover:underline"
        >
          Learn more about the 1st edition development
        </a>
      </div>
    </div>
  </div>
);

export default CpgOverviewPage;
