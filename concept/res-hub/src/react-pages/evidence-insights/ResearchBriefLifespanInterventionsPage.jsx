import React from 'react';
import { getHref } from '../../utils/navigation';
import { FileText, ExternalLink, CheckCircle2, AlertTriangle, Microscope, Scale, Clock, Users } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const ResearchBriefLifespanInterventionsPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-teal-600 text-sm font-bold mb-3">
        <FileText size={16} />
        <span>Evidence & Interventions</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        ADHD Interventions Across the Lifespan: Evidence on Efficacy, Safety, and Certainty
      </h1>
      <p className="text-slate-600 mb-4">
        A synthesis of randomised evidence (meta-analysed RCTs) on pharmacological and non-pharmacological interventions for ADHD across preschool, child/adolescent, and adult populations.
        This brief highlights effect sizes, tolerability/acceptability, and evidence certainty (algorithmic GRADE), with an emphasis on what is reliable for clinical and policy decisions—and what remains uncertain.
      </p>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
          <div className="flex items-center gap-2 text-slate-700 font-semibold mb-1">
            <Microscope size={16} className="text-teal-600" />
            Evidence type
          </div>
          <p className="text-slate-600">Umbrella review of meta-analyses of RCTs (re-estimated with a uniform statistical approach)</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
          <div className="flex items-center gap-2 text-slate-700 font-semibold mb-1">
            <Clock size={16} className="text-teal-600" />
            Search window
          </div>
          <p className="text-slate-600">Database inception to 19 Jan 2025</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
          <div className="flex items-center gap-2 text-slate-700 font-semibold mb-1">
            <Scale size={16} className="text-teal-600" />
            Evidence certainty
          </div>
          <p className="text-slate-600">Algorithmic GRADE (high / moderate / low / very low), adapted for drug and non-drug trials</p>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="text-slate-700 mb-2">
          <strong>Source:</strong> Gosling CJ, Garcia-Argibay M, et al. <em>Benefits and harms of ADHD interventions: umbrella review and platform for shared decision making</em>. BMJ 2025;391:e085875.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <a
            href="https://www.bmj.com/content/391/bmj-2025-085875"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
          >
            View Full Article <ExternalLink size={14} className="ml-1" />
          </a>
          <a
            href="https://ebiadhd-database.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
          >
            Explore EBI-ADHD Platform <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="space-y-6">
      {/* Executive Summary */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Executive Summary</h2>
            <p className="text-slate-600">
              This umbrella review re-analysed 221 meta-analyses (derived from 47 meta-analytic reports) of RCTs comparing drug and non-drug ADHD interventions against passive controls.
              Short-term benefits are most consistently supported for pharmacological treatments in children/adolescents and for atomoxetine/methylphenidate (and CBT) in adults.
              Across outcomes and age groups, high-certainty long-term evidence is not currently available, reinforcing the need for pragmatic long-duration trials and careful shared decision making.
            </p>
          </div>
          <div className="w-full md:w-auto md:flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <div className="text-xs font-semibold text-emerald-800">Included reports</div>
                <div className="text-2xl font-bold text-emerald-900">115</div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <div className="text-xs font-semibold text-emerald-800">Re-estimated meta-analyses</div>
                <div className="text-2xl font-bold text-emerald-900">221</div>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Counts reported in the BMJ paper and flow diagram.</p>
          </div>
        </div>
      </section>

      {/* Methods & Scope */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Methods and Scope</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2">
              <Users size={16} className="text-teal-600" />
              Populations
            </div>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Preschoolers</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Children and adolescents</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Adults</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2">
              <CheckCircle2 size={16} className="text-teal-600" />
              Primary outcomes
            </div>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Core ADHD symptom severity (by rater: clinician, parent, teacher, self)</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Acceptability (all-cause discontinuation)</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Tolerability (discontinuation due to adverse effects)</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2">
              <Scale size={16} className="text-teal-600" />
              Evidence certainty
            </div>
            <p className="text-slate-600 text-sm">
              Certainty was graded using an algorithmic adaptation of GRADE (high/moderate/low/very low), applied consistently across drug and non-drug interventions.
              Methodological quality of meta-analyses was assessed with AMSTAR-2.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2">
              <Clock size={16} className="text-teal-600" />
              Time horizons
            </div>
            <p className="text-slate-600 text-sm">
              Results are reported primarily for short-term endpoints (≈12 weeks or study endpoint) and, where available, medium-term (≈26 weeks) and long-term (≈52 weeks) follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Findings</h2>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">Children & Adolescents: symptom efficacy (short term)</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                Stimulants and key non-stimulants showed medium-to-large reductions in ADHD symptom severity with at least moderate certainty.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                <span><span className="font-semibold text-slate-800">Methylphenidate</span> showed consistent benefits across rater types with moderate-to-high certainty (SMD &gt;0.75 reported for several rater strata).</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                Alpha-2 agonists, atomoxetine, amphetamines, and viloxazine also showed statistically significant improvements in the short term (certainty varied by rater/intervention).
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">Adults: symptom efficacy (short term)</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                <span><span className="font-semibold text-slate-800">Atomoxetine</span> and <span className="font-semibold text-slate-800">methylphenidate</span> demonstrated moderate-to-high certainty evidence of efficacy (medium effect sizes depending on rater).</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                <span><span className="font-semibold text-slate-800">Cognitive behavioural therapy (CBT)</span> showed moderate certainty benefit on clinician-rated symptoms.</span>
              </li>
              <li className="flex gap-2">
                <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
                Some other interventions had large apparent effects but low/very-low certainty, limiting decision confidence.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">Longer-term outcomes: certainty gap</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
                No high-certainty long-term evidence was identified for any intervention across age groups.
              </li>
              <li className="flex gap-2">
                <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
                At medium/long follow-up, the review reports no moderate/high certainty evidence for sustained benefits (across intervention types and outcomes).
              </li>
              <li className="flex gap-2">
                <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
                Mindfulness showed some signals in adults at follow-up, but evidence certainty was very low.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">Tolerability, acceptability, and selected side effects</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
                In adults, methylphenidate and atomoxetine were associated with worse tolerability vs placebo (high certainty for tolerability signals in the paper).
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                In children/adolescents, methylphenidate showed favourable acceptability and was not significantly different from placebo on tolerability, despite point estimates suggesting reduced tolerability.
              </li>
              <li className="flex gap-2">
                <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
                Evidence on tolerability/side effects for non-drug interventions was comparatively sparse.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">Secondary outcomes (short term): selective but informative</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                Amphetamines showed moderate-certainty improvement in academic performance in children/adolescents.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />
                Atomoxetine showed moderate-certainty improvement in quality of life in children/adolescents, and high-certainty small improvements in emotional dysregulation in adults.
              </li>
              <li className="flex gap-2">
                <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
                Many other signals across outcomes/interventions were statistically significant but low/very-low certainty—often driven by small samples and trial limitations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interpretation for decisions */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Interpretation for Clinical and Policy Decisions</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">What is decision-relevant now</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />Short-term symptom improvement is supported with moderate-to-high certainty for several medications, particularly in children/adolescents, and for atomoxetine/methylphenidate in adults.</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />CBT is supported (moderate certainty) for adult clinician-rated symptoms and may be prioritised where medication is unsuitable or as part of multimodal care.</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-emerald-700" />The platform companion enables rapid navigation of effect sizes and certainty by rater, age group, and outcome.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">Where caution is warranted</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><AlertTriangle size={16} className="mt-0.5 text-amber-600" />Long-term efficacy and safety remain uncertain in RCT evidence; policy should avoid over-claiming sustained effects without stronger data.</li>
              <li className="flex gap-2"><AlertTriangle size={16} className="mt-0.5 text-amber-600" />Large effect sizes in some non-drug interventions are frequently paired with low/very-low certainty; treat these as hypotheses for targeted evaluation rather than definitive guidance.</li>
              <li className="flex gap-2"><AlertTriangle size={16} className="mt-0.5 text-amber-600" />Group-level estimates can mask heterogeneity; individual response, comorbidity profiles, and context remain essential for clinical tailoring.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research gaps */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Evidence Gaps and Research Priorities</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">High-priority gaps</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Pragmatic, long-duration RCTs reflecting real-world treatment pathways (including discontinuation and maintenance strategies)</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Better evidence on combination/multimodal care (pharmacological + psychosocial) compared with passive controls</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Consistent reporting of acceptability/tolerability and broader safety outcomes for non-drug interventions</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <h3 className="font-bold text-slate-900 mb-2">Methodological notes for interpretation</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Umbrella reviews do not inherently provide head-to-head comparative rankings; many networks are star-shaped and can be inconsistent.</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Algorithmic GRADE enables reproducible certainty ratings but does not substitute for contextualised guideline recommendations.</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />Observational evidence may capture outcomes not assessed in RCTs (e.g., injuries, road traffic incidents), and should be triangulated with RCT synthesis.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex justify-center">
        <a
          href={getHref('research-briefs', basePath, locale)}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Research Briefs
        </a>
      </div>
    </div>
  </div>
);

export default ResearchBriefLifespanInterventionsPage;
