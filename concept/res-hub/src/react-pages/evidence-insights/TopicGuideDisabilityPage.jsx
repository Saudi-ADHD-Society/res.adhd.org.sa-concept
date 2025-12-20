import React from 'react';
import { Scale, FileText, GraduationCap, Briefcase, Gavel, ClipboardCheck, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const TopicGuideDisabilityPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />

    {/* Hero */}
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
      <div className="relative p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 text-indigo-700 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 border border-indigo-100">
            <Scale size={16} />
            Legal &amp; Rights Context
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 border border-slate-200 text-slate-700">
            <FileText size={16} />
            Topic Guide
          </span>
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Is ADHD a Disability?</h1>
        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          ADHD is clinically classified as a <span className="font-semibold">neurodevelopmental disorder</span>, but it can be treated as a
          <span className="font-semibold"> disability in education, employment, and legal systems</span> when the condition causes
          <span className="font-semibold"> substantial, persistent functional impairment</span>. This guide explains the distinction and how
          policy systems typically operationalise it.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <a
            href={getHref('functional-assessment', basePath)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700"
          >
            <ClipboardCheck size={18} />
            Functional Assessment Guide
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Aligned with international disability rights frameworks and the Saudi National ADHD Clinical Practice Guideline.
        </p>
      </div>
    </div>

    {/* Audience + quick use */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Who this guide is for</h2>
        <p className="mt-2 text-slate-700">
          Researchers, clinicians, and policy makers who need a <span className="font-semibold">shared language</span> for discussing ADHD within
          disability and accommodations frameworks.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <FileText size={16} /> Researchers
            </div>
            <p className="mt-2 text-sm text-slate-700">Operational definitions, cross-sector alignment, and research questions.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <ClipboardCheck size={16} /> Clinicians
            </div>
            <p className="mt-2 text-sm text-slate-700">How to document functional impact to support accommodations decisions.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Gavel size={16} /> Policy makers
            </div>
            <p className="mt-2 text-sm text-slate-700">Why disability status is a functional threshold, not a diagnostic label.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">At a glance</h2>
        <ul className="mt-3 space-y-3 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
            Diagnosis explains <span className="font-semibold">what</span> ADHD is.
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
            Functional assessment explains <span className="font-semibold">what support</span> is needed.
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-slate-600" />
            Disability status is applied when impairment is <span className="font-semibold">substantial</span> and <span className="font-semibold">persistent</span>.
          </li>
        </ul>
        <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm text-emerald-900">
            Use the <span className="font-semibold">Functional Assessment Guide</span> to translate symptoms into measurable limitations and
            link these to accommodations.
          </p>
        </div>
      </div>
    </div>

    {/* Core framing */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-bold text-slate-900">Core concept: one condition, multiple domains</h2>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          Clinical → Functional → Administrative
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <FileText size={18} className="text-indigo-700" />
            Clinical
          </div>
          <p className="mt-2 text-sm text-slate-700">
            ADHD is classified medically as a <span className="font-semibold">neurodevelopmental disorder</span>. Clinical diagnosis requires
            symptoms across settings and evidence of impairment.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <ClipboardCheck size={18} className="text-emerald-700" />
            Functional
          </div>
          <p className="mt-2 text-sm text-slate-700">
            The key policy question is <span className="font-semibold">functional limitation</span>: the measurable effect of ADHD on learning,
            work, self-management, and participation.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Scale size={18} className="text-slate-700" />
            Legal / administrative
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Disability status is granted when limitations are <span className="font-semibold">substantial</span>, <span className="font-semibold">long-term</span>, and affect
            <span className="font-semibold">major life activities</span>—triggering eligibility for accommodations, protections, or services.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
        <p className="text-indigo-900">
          <span className="font-semibold">Practical translation:</span> diagnosis helps you identify the condition; functional assessment helps you justify the
          <span className="font-semibold">support pathway</span>.
        </p>
      </div>
    </section>

    {/* Decision flow */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-xl font-bold text-slate-900">When does ADHD qualify as a disability?</h2>
          <p className="mt-2 text-slate-700 max-w-3xl">
            In most systems, ADHD is not <span className="font-semibold">automatically</span> a disability. It becomes one when functional impairment crosses a threshold
            that requires structured support.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
          Use-case: accommodations decisions
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {[
          {
            icon: <FileText size={18} className="text-indigo-700" />,
            title: '1) Confirm clinical diagnosis',
            text: 'DSM/ICD diagnosis with evidence of impairment and cross-setting impact.',
          },
          {
            icon: <ClipboardCheck size={18} className="text-emerald-700" />,
            title: '2) Measure functional limitation',
            text: 'Translate symptoms into ICF-aligned limitations (learning, self-care, executive function, participation).',
          },
          {
            icon: <Scale size={18} className="text-slate-700" />,
            title: '3) Apply legal threshold',
            text: 'Determine whether limitation is substantial and long-term in major life activities.',
          },
          {
            icon: <ArrowRight size={18} className="text-indigo-700" aria-hidden="true" />,
            title: '4) Match supports',
            text: 'Accommodations, services, rehabilitation, or financial aid depending on sector and severity.',
          },
        ].map((step) => (
          <div key={step.title} className="rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              {step.icon}
              {step.title}
            </div>
            <p className="mt-2 text-sm text-slate-700">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="flex items-start gap-3">
          <ClipboardCheck className="text-emerald-700 mt-0.5" size={18} />
          <div>
            <p className="font-semibold text-emerald-900">Functional documentation is the hinge.</p>
            <p className="mt-1 text-sm text-emerald-900/90">
              If you only provide a diagnosis, decision-makers often lack what they need. If you provide functional limitations and link them to
              accommodations, pathways become clearer.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Saudi context */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <h2 className="text-xl font-bold text-slate-900">Saudi Arabia: policy and implementation logic</h2>
      <p className="text-slate-700 max-w-4xl">
        Saudi Arabia reflects the same functional approach: cross-sector policy mandates support when ADHD causes disability-level functional impact.
        The recurring gap is usually not authority, but <span className="font-semibold">consistency of implementation</span>.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Gavel size={18} className="text-indigo-700" /> National mandate
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Council of Ministers Decision No. 4 (1430 AH) frames coordinated action across Health, Education, and Social Affairs/MHRSD.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <GraduationCap size={18} className="text-emerald-700" /> Education sector
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Student assessment regulations (1444 AH) enable accommodations when functional difficulty meets disability criteria, even if ADHD is not named.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Briefcase size={18} className="text-slate-700" /> Social services &amp; eligibility
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Where limitations are significant and persistent, cases may qualify for disability card pathways, rehabilitation services, or financial aid.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-bold text-slate-900">Education: accommodations pathway (high-level)</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /> Document functional learning impact.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /> Student Guidance Committee evaluates functional impairment.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-600" /> Apply accommodations (e.g., extra time, modified assessment, quieter setting).</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-bold text-slate-900">MHRSD: eligibility logic (high-level)</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /> Confirm diagnosis and severity.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /> Provide ICF-aligned functional evidence.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-600" /> Classify under suitable functional categories when applicable (e.g., learning/behavioural impact).</li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-start gap-3">
          <Scale className="text-amber-700 mt-0.5" size={18} />
          <div>
            <p className="font-semibold text-amber-900">Implementation note</p>
            <p className="mt-1 text-sm text-amber-900/90">
              ADHD may be inconsistently handled if the documentation focuses on diagnosis alone. Functional framing reduces ambiguity across sectors.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Documentation checklist */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
      <h2 className="text-xl font-bold text-slate-900">Clinician documentation checklist</h2>
      <p className="text-slate-700 max-w-4xl">
        For accommodations and administrative decisions, documents should support a clear chain: <span className="font-semibold">diagnosis → functional impact → support needs</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900">Include</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /> Severity and persistence over time.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /> Functional limitations mapped to education/work/daily living.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /> ICF-aligned functional scoring or structured descriptors.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" /> Concrete accommodations recommended (and rationale).</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900">Avoid</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-rose-600" /> Vague statements without measurable functional impact.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-rose-600" /> Diagnosis-only letters that do not specify limitations.</li>
            <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-rose-600" /> Overgeneral claims that do not match context (school vs work vs daily living).</li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <ClipboardCheck className="text-emerald-700 mt-0.5" size={18} />
          <div>
            <p className="font-semibold text-slate-900">Want a structured template?</p>
            <p className="mt-1 text-sm text-slate-700">
              Use the Functional Assessment Guide to support ICF-aligned documentation, reporting, and cross-sector communication.
            </p>
            <a
              href={getHref('functional-assessment', basePath)}
              className="mt-3 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800"
            >
              Open Functional Assessment Guide
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Research & policy prompts */}
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Research and policy questions</h2>
      <p className="text-slate-700 max-w-4xl">
        If you are designing policy, services, or research programs, these questions tend to matter more than “Is it a disability?” in the abstract.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: 'Thresholds and outcomes',
            text: 'What functional thresholds predict poorer outcomes and justify early, intensive support?',
          },
          {
            title: 'Cross-sector alignment',
            text: 'Do health, education, and social services use comparable functional language and criteria?',
          },
          {
            title: 'Equity and access',
            text: 'Where do pathways break down (region, school type, clinic type, age group), and why?',
          },
          {
            title: 'Standardisation',
            text: 'Which ICF-aligned measures can be standardised nationally to reduce ambiguity and improve decisions?',
          },
        ].map((q) => (
          <div key={q.title} className="rounded-xl border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">{q.title}</p>
            <p className="mt-2 text-sm text-slate-700">{q.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={getHref('topic-guides', basePath)}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Topic Guides
        </a>
        <span className="hidden sm:inline text-slate-300">•</span>
        <a
          href={getHref('functional-assessment', basePath)}
          className="text-indigo-700 font-semibold hover:text-indigo-800"
        >
          Functional Assessment Guide
        </a>
      </div>
    </div>
  </div>
);

export default TopicGuideDisabilityPage;

