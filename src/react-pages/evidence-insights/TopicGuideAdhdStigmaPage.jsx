import React from 'react';
import { Users, AlertTriangle, Heart, Target, Briefcase, GraduationCap, Shield, BarChart3, FileText } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const Callout = ({ tone = 'neutral', icon: Icon, title, children }) => {
  const tones = {
    neutral: {
      wrap: 'bg-slate-50 border-slate-200',
      title: 'text-slate-900',
      icon: 'text-slate-700'
    },
    warning: {
      wrap: 'bg-amber-50 border-amber-200',
      title: 'text-amber-900',
      icon: 'text-amber-800'
    },
    success: {
      wrap: 'bg-emerald-50 border-emerald-200',
      title: 'text-emerald-900',
      icon: 'text-emerald-800'
    },
    info: {
      wrap: 'bg-sky-50 border-sky-200',
      title: 'text-sky-900',
      icon: 'text-sky-800'
    }
  };
  const t = tones[tone] || tones.neutral;

  return (
    <div className={`rounded-xl border p-5 ${t.wrap}`}>
      <div className="flex items-start gap-3">
        {Icon ? (
          <div className={`mt-0.5 shrink-0 ${t.icon}`}>
            <Icon size={18} />
          </div>
        ) : null}
        <div>
          {title ? <p className={`font-extrabold ${t.title}`}>{title}</p> : null}
          <div className="mt-2 text-sm text-slate-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

const TopicGuideAdhdStigmaPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-red-600 text-sm font-bold mb-3">
        <Users size={16} />
        <span>Topic Guide</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        ADHD Stigma as a Systems Barrier: Care Pathways, Disclosure, and Functional Inclusion
      </h1>
      <p className="text-slate-600 mb-4">
        ADHD-related stigma is not only an attitude problem; it is a systems-level barrier that shapes recognition, disclosure, help-seeking,
        and access to accommodations. In Saudi Arabia, stigma is amplified by reputational risk, confidentiality concerns, validity doubts
        (especially for adult ADHD), and medication narratives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-900">Policy focus</p>
          <p className="mt-2 text-sm text-slate-700">
            Treat stigma as a measurable systems barrier that weakens pathway integrity and functional inclusion.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-900">Saudi-first lens</p>
          <p className="mt-2 text-sm text-slate-700">
            Courtesy stigma and “self-handling” norms can delay assessment, fragment follow-up, and reduce uptake of services.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-900">Design implication</p>
          <p className="mt-2 text-sm text-slate-700">
            Move from generic awareness to stigma-aware system design: confidentiality-by-design, safe disclosure, and universal supports.
          </p>
        </div>
      </div>
    </div>

    {/* Layout: main + sidebar (placeholder content) */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main */}
      <div className="lg:col-span-8 space-y-6">
        {/* Executive summary */}
        <section
          id="executive-summary"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0 text-red-600">
              <FileText size={18} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Executive summary: the “silent tax” on human capital</h2>
              <p className="mt-2 text-slate-600">
                ADHD-related stigma functions as a silent tax on human capital: it delays diagnosis, weakens school and workplace inclusion,
                and increases downstream costs through comorbidity, disengagement, and avoidable underachievement. In Saudi Arabia,
                ADHD stigma often clusters around (1) reputational risk, (2) confidentiality fears, (3) validity doubts (especially for adult ADHD
                and inattentive presentations), and (4) medication narratives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-900">Healthcare</p>
              <p className="mt-2 text-sm text-slate-700">
                Stigma shifts care to late stages, increasing burden from untreated comorbidity and fragmented follow-up.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-900">Education</p>
              <p className="mt-2 text-sm text-slate-700">
                Under-identification (especially inattentive presentations and girls) reduces attainment and wastes talent.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-900">Workforce</p>
              <p className="mt-2 text-sm text-slate-700">
                Fear of disclosure reduces reasonable adjustments, increasing presenteeism, turnover, and productivity loss.
              </p>
            </div>
          </div>

          <Callout tone="info" icon={BarChart3} title="What the evidence shows (Saudi + international)">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                In a large Saudi study of individuals diagnosed with mental health disorders, perceived stigma (including embarrassment and
                anticipated discrimination) was common and was significantly associated with greater work and social role limitations (AlFattani et al., 2023).
              </li>
              <li>
                In adult ADHD (international evidence), internalised stigma and anticipated discrimination correlate with distress, poorer functioning,
                and reduced quality of life (Masuch et al., 2019).
              </li>
            </ul>
          </Callout>
        </section>

        {/* Strategic alignment */}
        <section
          id="strategic-alignment"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
        >
          <h2 className="text-xl font-bold text-slate-900">Strategic alignment: Vision 2030 and functional inclusion</h2>
          <p className="text-slate-600">
            Treating stigma as a systems barrier enables alignment with national transformation priorities and measurable inclusion outcomes.
            For expert stakeholders, the critical step is linking stigma reduction to pathway integrity (uptake, follow-up, accommodation)
            rather than only to awareness.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-slate-700"><Target size={18} /></div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">National programs (illustrative mapping)</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
                    <li><span className="font-semibold">NTP / Human capital:</span> stigma reduces disclosure needed for reasonable adjustments and inclusion.</li>
                    <li><span className="font-semibold">HCDP / Learning:</span> stigma delays identification and support, increasing underachievement and dropout risk.</li>
                    <li><span className="font-semibold">Health sector transformation:</span> stigma reduces uptake of services and digital pathways.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-slate-700"><Shield size={18} /></div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Policy principle</p>
                  <p className="mt-2 text-sm text-slate-700">
                    Shift from “awareness campaigns” to stigma-aware system design: confidentiality-by-design, safe disclosure mechanisms,
                    universal supports (e.g., UDL), and monitoring of leakage points across the referral and accommodation chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Saudi stigma landscape */}
        <section
          id="saudi-stigma-landscape"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
        >
          <h2 className="text-xl font-bold text-slate-900">Mapping the Saudi stigma landscape</h2>
          <p className="text-slate-600">
            Stigma operates at multiple levels (individual, family, and structural). In Saudi and Gulf contexts, reputational risk and the perceived
            consequences of disclosure can be decisive, even when factual knowledge is improving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <p className="text-sm font-semibold text-slate-900">Treatment gap and “self-handling”</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                <li>Mental health support may be perceived as a last resort; ADHD is managed via discipline-only strategies.</li>
                <li>Result: delayed assessment and escalation into burnout and comorbidity.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <p className="text-sm font-semibold text-slate-900">Courtesy stigma (family reputational risk)</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                <li>Diagnosis may be viewed as a family flaw; information is tightly managed.</li>
                <li>Result: fragmented follow-up and “doctor shopping” to avoid formal records.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <p className="text-sm font-semibold text-slate-900">Validity gap in adulthood</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                <li>Skepticism: “too successful to have ADHD” → masking, delayed care, and burnout.</li>
                <li>Adult ADHD and inattentive presentations remain vulnerable to non-recognition.</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Validity doubts are commonly reported stereotypes in adult ADHD (Masuch et al., 2019).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-4 bg-white">
              <p className="text-sm font-semibold text-slate-900">Medication narratives and fear</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                <li>Concerns about dependency and personality change may override clinical evidence.</li>
                <li>Result: low adherence and delayed functional recovery.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Everyday stigma often operates as “micro-messages”</p>
            <p className="mt-2 text-sm text-slate-700">
              Stigma may be communicated through subtle, sometimes well-intended comments (e.g., “just try harder”, “everyone is a bit ADHD”).
              A microaggressions framing helps explain how repeated micro-messages accumulate and shape identity, disclosure, and access to support (Visser et al., 2024).
            </p>
          </div>
        </section>

        {/* Systems levers */}
        <section
          id="systems-levers"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
        >
          <h2 className="text-xl font-bold text-slate-900">Strategic levers for systems change</h2>
          <p className="text-slate-600">
            Stigma reduction is most effective when it targets multiple levels at once: narratives, service design, school/workplace practice,
            and individual coping. For policy implementation, priority should be given to confidentiality-by-design and low-stigma access to accommodations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <GraduationCap size={16} /> Education
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-4">
                <li><span className="font-semibold">UDL supports:</span> quiet zones, flexible testing, accessible supports for all students.</li>
                <li><span className="font-semibold">Confidentiality-by-design:</span> clear rules for record access and disclosure.</li>
                <li><span className="font-semibold">Teacher training:</span> shift from moralised labels to functional support language.</li>
                <li><span className="font-semibold">Safe harbor for parents:</span> blame-free pathways for discussion and referral.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Heart size={16} /> Clinical care
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-4">
                <li><span className="font-semibold">Validate early:</span> explicitly address validity doubts in first consultation.</li>
                <li><span className="font-semibold">Privacy clarity:</span> explain records, sharing, and patient controls in plain language.</li>
                <li><span className="font-semibold">Disclosure coaching:</span> selective openness for school/workplace support.</li>
                <li><span className="font-semibold">Medication counselling:</span> invite concerns; distinguish support from “identity change”.</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Internalised stigma is associated with poorer functioning and QoL in adult ADHD (Masuch et al., 2019).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Briefcase size={16} /> Workplace & policy
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-4">
                <li><span className="font-semibold">Rights-based inclusion:</span> define reasonable adjustments; anti-discrimination expectations.</li>
                <li><span className="font-semibold">Safe disclosure:</span> confidential HR mechanisms for requesting adjustments.</li>
                <li><span className="font-semibold">Pathway integrity:</span> reduce administrative friction between diagnosis and accommodation.</li>
                <li><span className="font-semibold">Measure stigma impact:</span> track role limitations and leakage points, not attitudes alone.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Callout tone="info" icon={Users} title="WHO Mosaic toolkit (design cues)">
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Co-lead with lived experience</span> from the beginning; agree respectful terminology and safeguards.</li>
                <li><span className="font-semibold">Use structured social contact</span> (not knowledge-only awareness) with equal-status, cooperation, and sustained interaction.</li>
                <li><span className="font-semibold">Work iteratively</span> as continuous improvement: plan → launch → learn → refine.</li>
              </ul>
            </Callout>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">A practical note for Saudi campaigns</p>
              <p className="mt-2 text-sm text-slate-700">
                Increasing knowledge alone may not reduce stigma when social norms and reputational concerns remain high.
                Interventions should explicitly address social risk and confidentiality, and equip clinicians, educators, and employers with response skills.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Quality indicators: “stigma-aware” institutions</p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg bg-white border border-emerald-100 p-3">
                <p className="font-semibold text-emerald-900">Language</p>
                <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                  <li>Replace “lazy/difficult” with functional descriptors (task initiation, regulation needs).</li>
                  <li>Use consistent, stigma-minimising terminology in policy and training.</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white border border-emerald-100 p-3">
                <p className="font-semibold text-emerald-900">Pathway integrity</p>
                <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                  <li>Support without public disclosure or reputational exposure.</li>
                  <li>Confidential channels for requesting accommodations.</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white border border-emerald-100 p-3">
                <p className="font-semibold text-emerald-900">Representation</p>
                <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                  <li>Include women, inattentive students, and high-achieving adults in materials.</li>
                  <li>Avoid a single “hyperactive boy” stereotype.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expert questions */}
        <section
          id="expert-questions"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
        >
          <h2 className="text-xl font-bold text-slate-900">Key questions for expert stakeholders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">Clinicians</p>
              <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                <li>Are we treating shame and anticipated discrimination as a “vital sign” in assessment?</li>
                <li>If non-adherence occurs, is it stigma-related avoidance rather than “motivation”?</li>
                <li>Do we provide disclosure coaching that respects social risk and confidentiality?</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">Policymakers</p>
              <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                <li>Where does the referral chain leak due to low trust or reputational risk?</li>
                <li>Is the gap between diagnosis and support too wide (especially in workplaces)?</li>
                <li>Are stigma indicators tracked alongside service utilisation and functional outcomes?</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">Educators</p>
              <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                <li>Do parents have a safe, blame-free pathway to discuss ADHD concerns?</li>
                <li>Can students access supports without visible labelling?</li>
                <li>Are inattentive presentations and girls/women consistently recognised?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research priorities */}
        <section
          id="research-priorities"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4"
        >
          <h2 className="text-xl font-bold text-slate-900">Research and implementation priorities (Saudi agenda)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Economic impact</p>
              <p className="mt-2 text-sm text-slate-700">
                Quantify productivity loss (presenteeism/turnover) linked to stigma-driven non-disclosure and lack of accommodation.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Leakage points</p>
              <p className="mt-2 text-sm text-slate-700">
                Identify where families disengage from the pathway after initial contact (assessment → follow-up → support → accommodation).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Intervention efficacy</p>
              <p className="mt-2 text-sm text-slate-700">
                Test structured social contact and stigma-aware training in schools and workplaces, with implementation outcomes.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Gendered barriers</p>
              <p className="mt-2 text-sm text-slate-700">
                Track the diagnostic journey of Saudi women, including delayed recognition and masking, to inform targeted pathways.
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section
          id="references"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
        >
          <h2 className="text-xl font-bold text-slate-900">References</h2>
          <ul className="space-y-1 text-sm text-slate-700 list-disc pl-4">
            <li>AlFattani et al. (2023). Effect of perceived stigma on work and social roles among individuals with mental health disorders in Saudi Arabia.</li>
            <li>Masuch et al. (2019). Internalised stigma, anticipated discrimination and perceived public stigma in adults with ADHD.</li>
            <li>Mueller et al. (2012). Stigma in attention-deficit/hyperactivity disorder (ADHD).</li>
            <li>Lebowitz (2016). Stigmatisation of ADHD: a developmental review.</li>
            <li>World Health Organization (2024). Mosaic Toolkit to End Stigma and Discrimination in Mental Health.</li>
            <li>Visser, Peters, & Luman (2024). Understanding ADHD-related stigma: a gender analysis. Neurodiversity.</li>
          </ul>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="lg:sticky lg:top-24 space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-slate-900">On this page</p>
            <div className="mt-3 space-y-1 text-sm">
              <a
                href="#executive-summary"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Executive summary
              </a>
              <a
                href="#strategic-alignment"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Strategic alignment
              </a>
              <a
                href="#saudi-stigma-landscape"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Saudi stigma landscape
              </a>
              <a
                href="#systems-levers"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Systems levers
              </a>
              <a
                href="#expert-questions"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Expert questions
              </a>
              <a
                href="#research-priorities"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Research priorities
              </a>
              <a
                href="#references"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                References
              </a>
            </div>
          </div>

          <Callout tone="info" icon={Users} title="Who is this guide for?">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Clinicians</span> (diagnosis, disclosure, engagement, adherence, comorbidity care)</li>
              <li><span className="font-semibold">Educators</span> (school identification, accommodations, classroom climate, parent trust)</li>
              <li><span className="font-semibold">Policymakers</span> (pathways, workforce, rights-based inclusion, stigma-aware systems)</li>
              <li><span className="font-semibold">Researchers</span> (intervention design, evaluation, evidence synthesis)</li>
            </ul>
          </Callout>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              <Heart size={14} /> Key messages for practice
            </div>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">Name stigma explicitly</p>
                <p className="mt-1 text-slate-700">
                  In consultations and school meetings, ask directly about experiences of shame, anticipated discrimination, or reluctance to disclose. For example: "Have you experienced judgment or shame related to ADHD?" This normalizes the topic and opens disclosure.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">Design for confidentiality</p>
                <p className="mt-1 text-slate-700">
                  Create clear privacy boundaries: explain who sees records, how information is shared, and what families can control. Use plain language consent processes. Assume families will manage information tightly; make pathways safe, simple, and private.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">Treat stigma as a functional barrier</p>
                <p className="mt-1 text-slate-700">
                  Measure stigma's impact on work and social participation, not just attitudes. Track role limitations alongside symptoms. Stigma is linked to social and work role limitations—this is an inclusion and productivity issue (AlFattani et al., 2023).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-800 text-sm font-semibold">
              <AlertTriangle size={16} />
              <span>Campaign and training cues</span>
            </div>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-2">
              <li><span className="font-semibold">Address social risk explicitly:</span> acknowledge reputation concerns, confidentiality needs, and family-level stigma. Do not rely on "facts only"—stigma persists through social norms even when knowledge improves.</li>
              <li><span className="font-semibold">Show diverse ADHD presentations:</span> include inattentive ADHD, girls/women, adolescents, and adults to counter single stereotypes. Use multiple stories, not one narrative.</li>
              <li><span className="font-semibold">Link messaging to pathways:</span> every campaign must include clear referral routes and service information. Pair awareness with access—messaging without pathways can backfire.</li>
              <li><span className="font-semibold">Build capacity in schools and primary care:</span> provide language guides, referral protocols, and accommodation frameworks. Train frontline staff on language, referral, and accommodation routes.</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex justify-center">
        <a
          href={getHref('topic-guides', basePath, locale)}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Topic Guides
        </a>
      </div>
    </div>
  </div>
);

export default TopicGuideAdhdStigmaPage;
