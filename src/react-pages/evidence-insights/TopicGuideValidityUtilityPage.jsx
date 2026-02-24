import React from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Scale,
  Stethoscope,
  Gavel,
  Users,
  CheckCircle2,
  BookOpen,
  Quote,
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const TopicGuideValidityUtilityPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center space-x-2 text-cyan-600 text-sm font-bold">
          <ShieldCheck size={16} />
          <span>Evidence &amp; Critique Guide</span>
        </div>
        <div className="text-xs text-slate-400">
          Topic Guide • For researchers, clinicians, and policy makers
        </div>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
        The Validity and Utility of ADHD: Evidence, Critiques, and Implications for Practice
      </h1>

      <p className="text-slate-700 leading-relaxed">
        ADHD remains one of the most researched neurodevelopmental disorders, while also attracting persistent
        conceptual critique and public controversy. This Topic Guide summarises the strongest critiques of the ADHD
        construct, explains why those critiques matter, and synthesises the clinical and public-health reasons the
        diagnosis remains pragmatically and ethically indispensable.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="text-xs font-semibold text-slate-500">Primary use</div>
          <div className="mt-1 text-sm text-slate-800">Clinical reasoning, evidence synthesis, policy framing</div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="text-xs font-semibold text-slate-500">Core stance</div>
          <div className="mt-1 text-sm text-slate-800">Conceptually imperfect, clinically valid, ethically necessary</div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <div className="text-xs font-semibold text-slate-500">How to read</div>
          <div className="mt-1 text-sm text-slate-800">Skim key questions → evidence → implications</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-100">
          <Scale size={14} /> Conceptual critique
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
          <Stethoscope size={14} /> Clinical utility
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">
          <Gavel size={14} /> Policy / systems
        </span>
      </div>

      <p className="text-xs text-slate-400 mt-4">
        Adapted from an internal Saudi ADHD Society Research &amp; Studies Unit white paper (v1.3.0, Nov 2025).
        Aligned with the Saudi National ADHD Clinical Practice Guideline.
      </p>
    </div>

    {/* Layout */}
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Main column */}
      <div className="lg:col-span-8 space-y-6">
        {/* Key Questions */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-slate-900 p-2 text-white">
              <BookOpen size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">Key Questions</h2>
              <p className="text-slate-600 mt-1">
                Use these to orient clinical discussion, evidence reviews, or policy briefs.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm font-semibold text-slate-900">1) What do critics get right?</div>
              <p className="mt-1 text-sm text-slate-700">
                ADHD is a descriptive construct, not a single disease entity with a definitive biomarker; diagnostic
                thresholds and prevalence vary across contexts; and the label can be misused or reified.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm font-semibold text-slate-900">2) What makes the construct clinically legitimate?</div>
              <p className="mt-1 text-sm text-slate-700">
                The diagnosis reliably identifies a population with clinically significant impairment and predictive
                validity for real-world outcomes and treatment response.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm font-semibold text-slate-900">3) What is the ethical and public-health argument?</div>
              <p className="mt-1 text-sm text-slate-700">
                Diagnosis is a gateway to harm-reducing interventions and accommodations; removing the construct does
                not remove suffering, but often removes access to care.
              </p>
            </div>
          </div>
        </section>

        {/* Conceptual Critiques */}
        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-amber-100 p-2 text-amber-800 ring-1 ring-amber-200">
              <AlertTriangle size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">What a robust position must acknowledge</h2>
              <p className="text-slate-600 mt-1">
                These critiques are not “anti-ADHD” by default; they function as guardrails against reductionism.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4">
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Reification and circular explanations</h3>
              <p className="mt-1 text-sm text-slate-700">
                ADHD names a pattern of impairment; it should not be treated as a complete causal explanation (e.g.,
                “he is inattentive because he has ADHD”). Expert communication must separate description, mechanism,
                and context.
              </p>
            </div>

            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">No single diagnostic biomarker</h3>
              <p className="mt-1 text-sm text-slate-700">
                Diagnosis rests on developmental history and multi-informant assessment. Neuropsychological tests and
                neuroimaging may support formulation, but do not diagnose ADHD in isolation.
              </p>
            </div>

            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">The “social construct” argument</h3>
              <p className="mt-1 text-sm text-slate-700">
                Context matters: school structure, family resources, and cultural tolerance for behavioural variation
                influence when traits become disabling. A mature stance avoids either extreme: “pure brain disease”
                or “mere myth.”
              </p>
            </div>

            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Heterogeneity, comorbidity, and non-specific treatment effects</h3>
              <p className="mt-1 text-sm text-slate-700">
                ADHD presentations are diverse and commonly comorbid; stimulants can enhance attention in many people.
                This requires careful differential diagnosis, stepped care, and outcome monitoring—not abandonment of
                the construct.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-900 text-slate-50 p-4">
            <div className="flex items-start gap-3">
              <Quote size={18} className="mt-0.5" />
              <div>
                <div className="text-sm font-semibold">Epistemic position (portal summary)</div>
                <p className="mt-1 text-sm text-slate-200 leading-relaxed">
                  ADHD is not a discrete disease object with a single underlying pathology, yet remains a clinically
                  valid construct that captures a reproducible syndrome with meaningful predictive utility for
                  functioning and treatment response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence and Utility */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-emerald-100 p-2 text-emerald-800 ring-1 ring-emerald-200">
              <CheckCircle2 size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">Why the construct remains indispensable</h2>
              <p className="text-slate-600 mt-1">
                The strongest validation is pragmatic: the construct organises knowledge and reliably anchors
                harm-reducing interventions.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Organises clinical knowledge</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Shared language across epidemiology, genetics, neuroscience, and clinical care</li>
                <li>Links assessment to known trajectories, comorbidity patterns, and best practices</li>
                <li>Supports service design, referral pathways, and training standards</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Guides evidence-based treatment</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Medication and behavioural interventions show consistent symptom reduction</li>
                <li>Structured stepped-care models reduce preventable harms</li>
                <li>Outcome monitoring enables iterative optimisation and deprescribing where appropriate</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Ethical and public-health value</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Diagnosis is often a gateway to risk reduction (injury, accidents, academic failure)</li>
                <li>Improves legitimacy of support needs and reduces moral blame (“lazy”, “unmotivated”)</li>
                <li>Enables population-level planning and resource allocation</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Access to accommodations</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Education: structured supports, assessment adjustments, classroom modifications</li>
                <li>Workplace: reasonable adjustments and disability-informed practice</li>
                <li>Community: psychoeducation, peer support, and specialised services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Frameworks for experts */}
        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-violet-100 p-2 text-violet-800 ring-1 ring-violet-200">
              <Scale size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">How experts can avoid reductionism</h2>
              <p className="text-slate-600 mt-1">
                These frameworks strengthen conceptual rigor and improve clinical communication.
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Harmful Dysfunction (HD) model</h3>
              <p className="mt-1 text-sm text-slate-700">
                Treat ADHD as a disorder when two conditions are met: (1) dysfunction in mechanisms supporting
                self-regulation/executive control; and (2) clinically significant harm judged in context. This balances
                “brain disease” and “social construct” extremes.
              </p>
            </div>

            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Biopsychosocial formulation</h3>
              <p className="mt-1 text-sm text-slate-700">
                Use diagnosis as the beginning of formulation, not the end. Integrate developmental history,
                comorbidity, family/school context, and strengths to guide targeted support.
              </p>
            </div>

            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Phenomenology and lived experience</h3>
              <p className="mt-1 text-sm text-slate-700">
                Attend to the patient’s lived experience (e.g., time management difficulties, intention–action gaps,
                emotional dysregulation). This improves shared decision-making and adherence.
              </p>
            </div>
          </div>
        </section>

        {/* Practice & Policy Implications */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-slate-900 p-2 text-white">
              <Gavel size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">Implications for practice and policy</h2>
              <p className="text-slate-600 mt-1">
                A defensible position is operational: it influences assessment standards, service design, and public
                messaging.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">For clinicians</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>State clearly what diagnosis does and does not explain (description ≠ full causation).</li>
                <li>Use multi-informant assessment and document impairment, onset, and cross-setting consistency.</li>
                <li>Prefer stepped care: psychoeducation → behavioural supports/skills → medication where indicated.</li>
                <li>Monitor outcomes, adverse effects, and functional goals (not symptoms alone).</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">For researchers</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Distinguish construct validity, predictive validity, and clinical utility in study framing.</li>
                <li>Report heterogeneity and comorbidity transparently; avoid “one mechanism fits all” narratives.</li>
                <li>Prioritise outcomes that matter: functioning, injury risk, academic/employment trajectories.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">For policy makers and systems leaders</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Ensure diagnostic access does not depend on socioeconomic privilege.</li>
                <li>Fund integrated care pathways (health, education, and social support).</li>
                <li>Use standardised guidance to reduce over- and under-diagnosis simultaneously.</li>
                <li>Align disability accommodations with functional impact, not stereotypes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Language & Communication */}
        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-cyan-100 p-2 text-cyan-800 ring-1 ring-cyan-200">
              <Users size={18} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">Responsible language for expert communication</h2>
              <p className="text-slate-600 mt-1">
                Precision in language prevents reification while preserving clinical clarity.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Prefer</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>“Meets criteria for ADHD”</li>
                <li>“Shows a consistent pattern of impairment in attention/self-regulation”</li>
                <li>“In this context, the pattern causes clinically significant harm”</li>
                <li>“Treatment aims: functioning, safety, learning, relationships”</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">Avoid</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>“ADHD makes you do X” (as a total explanation)</li>
                <li>“It’s just a brain disease” / “It’s just society”</li>
                <li>“Medication proves it’s real” (oversimplifies epistemology)</li>
                <li>“Everyone is a bit ADHD” (erases impairment and disability)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">At a glance</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-md bg-amber-50 p-2 text-amber-700 ring-1 ring-amber-100">
                <AlertTriangle size={16} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Acknowledge critiques</div>
                <div className="text-sm text-slate-600">Reification, biomarkers, context, heterogeneity</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-md bg-emerald-50 p-2 text-emerald-700 ring-1 ring-emerald-100">
                <Stethoscope size={16} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Defend utility</div>
                <div className="text-sm text-slate-600">Predictive validity and harm-reducing interventions</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-md bg-violet-50 p-2 text-violet-700 ring-1 ring-violet-100">
                <Gavel size={16} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Apply in systems</div>
                <div className="text-sm text-slate-600">Access, standards, accommodations, messaging</div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold text-slate-500">Recommended citation (internal)</div>
            <p className="mt-1 text-sm text-slate-700">
              Saudi ADHD Society, Research &amp; Studies Unit (2025). <span className="italic">The Validity and Utility of ADHD</span>.
              Topic Guide adapted from internal white paper v1.3.0.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Related resources</h2>
          <div className="mt-4 space-y-3">
            <a
              href={getHref('clinical-tools', basePath, locale)}
              className="group block rounded-lg border border-slate-200 bg-white p-4 hover:border-emerald-200 hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Stethoscope size={16} />
                  Clinical guidance
                </div>
                <span className="text-sm text-emerald-700 group-hover:text-emerald-800">Explore →</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Saudi ADHD CPG, rating scales, functional assessment, and HCP resources.
              </div>
            </a>

            <a
              href={getHref('research-projects', basePath, locale)}
              className="group block rounded-lg border border-slate-200 bg-white p-4 hover:border-emerald-200 hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <BookOpen size={16} />
                  Research updates
                </div>
                <span className="text-sm text-emerald-700 group-hover:text-emerald-800">View →</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Current research, outputs, and evidence synthesis workstreams.
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Quick takeaway</h2>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            The most defensible stance is not that ADHD is a flawless disease entity; it is that ADHD is a
            clinically reliable construct with meaningful predictive utility—and that using it judiciously enables
            targeted, evidence-based care and ethically necessary accommodations.
          </p>
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

export default TopicGuideValidityUtilityPage;
