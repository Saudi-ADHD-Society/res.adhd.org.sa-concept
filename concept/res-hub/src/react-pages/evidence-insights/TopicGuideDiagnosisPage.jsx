import React, { useRef } from "react";
import { getHref } from '../../utils/navigation';
import {
  ClipboardCheck,
  ListChecks,
  Brain,
  ActivitySquare,
  Users,
  Ruler,
  Search,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb.jsx";

const TopicGuideDiagnosisPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => {
  const clinicalRef = useRef(null);
  const functionalRef = useRef(null);
  const screeningRef = useRef(null);
  const multiInformantRef = useRef(null);
  const functionalAssessmentRef = useRef(null);
  const notDiagnosisRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} />

      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-2 text-amber-600 text-sm font-bold mb-3">
          <ClipboardCheck size={16} />
          <span>Assessment Guide</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Diagnosis &amp; Assessment — Beyond Symptoms: Functioning &amp; Disability
        </h1>
        <p className="text-slate-600 text-sm mb-2">
          ADHD is diagnosed using a structured clinical evaluation — not a single
          test. International consensus and the Saudi National ADHD CPG emphasise
          that accurate diagnosis requires understanding symptoms, functioning,
          context, and developmental history.
        </p>
        <p className="text-xs text-slate-400">
          This guide summarises key principles of evidence-based assessment and
          explains the role of screening tools and functional impairment.
        </p>
      </div>

      {/* Assessment Navigation Cards */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">Navigate by Assessment Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => scrollToSection(clinicalRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Search className="text-emerald-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm">Clinical Diagnosis</h3>
              <p className="text-xs text-slate-600 mt-1">Structured evaluation, not a single test</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(functionalRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <ActivitySquare className="text-blue-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-700 text-sm">Functional Impairment</h3>
              <p className="text-xs text-slate-600 mt-1">Beyond symptoms to real-world impact</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(screeningRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <ListChecks className="text-amber-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 text-sm">Screening Tools</h3>
              <p className="text-xs text-slate-600 mt-1">Validated Arabic scales</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(multiInformantRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-purple-100 group-hover:bg-purple-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Users className="text-purple-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-purple-700 text-sm">Multi-Informant</h3>
              <p className="text-xs text-slate-600 mt-1">Multiple sources & differential diagnosis</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(functionalAssessmentRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-rose-100 group-hover:bg-rose-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Ruler className="text-rose-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-rose-700 text-sm">Functional Assessment</h3>
              <p className="text-xs text-slate-600 mt-1">ICF framework & life domains</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(notDiagnosisRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-red-100 group-hover:bg-red-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <AlertTriangle className="text-red-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-red-700 text-sm">What It's NOT</h3>
              <p className="text-xs text-slate-600 mt-1">Common misconceptions</p>
            </div>
          </button>
        </div>
      </div>

      {/* Diagnostic Process Overview */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">The Diagnostic Process</h2>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</div>
            <div>
              <span className="text-sm font-semibold text-slate-700">Clinical Interview</span>
              <p className="text-xs text-slate-600 mt-1">Structured evaluation of symptoms and history</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</div>
            <div>
              <span className="text-sm font-semibold text-slate-700">Functional Assessment</span>
              <p className="text-xs text-slate-600 mt-1">Evaluation of real-world impact across settings</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</div>
            <div>
              <span className="text-sm font-semibold text-slate-700">Multi-Informant Data</span>
              <p className="text-xs text-slate-600 mt-1">Information from parents, teachers, and the individual</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</div>
            <div>
              <span className="text-sm font-semibold text-slate-700">Differential Diagnosis</span>
              <p className="text-xs text-slate-600 mt-1">Ruling out alternative explanations</p>
            </div>
          </div>
        </div>
      </div>

    {/* Main Content */}
    <div className="space-y-6">
      {/* 1. Diagnosis is clinical and contextual */}
      <section ref={clinicalRef} className="bg-white p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Search className="text-emerald-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            1. ADHD Diagnosis Is Clinical — Not Based on a Single Test
          </h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          The international consensus statement is explicit:{" "}
          <strong>
            no blood test, brain scan, computer task, or biomarker can diagnose
            ADHD.
          </strong>{" "}
          Diagnosis is based on:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Clear, persistent symptoms of inattention and/or hyperactivity-impulsivity.</li>
          <li>Onset in childhood (though not always recognised early).</li>
          <li>Symptoms that cause real-world difficulties.</li>
          <li>Evidence across more than one setting (home, school, work).</li>
          <li>Exclusion of alternative explanations.</li>
        </ul>
        <p className="text-slate-600 text-sm">
          The Saudi National ADHD CPG requires a structured clinical interview,
          review of developmental history, and multi-informant data (parents,
          teachers, adults close to the individual).
        </p>
      </section>

      {/* 2. Symptoms alone are not enough */}
      <section ref={functionalRef} className="bg-white p-6 rounded-xl border-l-4 border-blue-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <ActivitySquare className="text-blue-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            2. Beyond Symptoms — Functional Impairment Determines Diagnosis
          </h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Two people may have the same symptoms but very different levels of
          functional impact. Modern ADHD assessment evaluates:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Academic or workplace performance</li>
          <li>Organisation, planning, and time management</li>
          <li>Social functioning and peer relationships</li>
          <li>Family stress and conflict</li>
          <li>Emotional regulation and self-esteem</li>
          <li>Daily living skills (sleep, routines, self-care)</li>
        </ul>
        <p className="text-slate-600 text-sm">
          Functional assessment aligns with the{" "}
          <strong>
            WHO International Classification of Functioning (ICF) framework,
          </strong>{" "}
          emphasised in both the international consensus statement and the CPG.
        </p>
      </section>

      {/* 3. Screening tools and our three validated scales */}
      <section ref={screeningRef} className="bg-white p-6 rounded-xl border-l-4 border-amber-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <ListChecks className="text-amber-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            3. Screening Tools: Helpful — But Not Diagnostic
          </h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Screening tools help flag individuals who may need a full assessment.
          They <strong>cannot</strong> diagnose ADHD on their own.
        </p>

        <h3 className="text-sm font-semibold text-slate-800 mb-2">
          Validated Arabic Screening Tools (Saudi ADHD Society)
        </h3>

        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-4">
          <li>
            <strong>ASRS-5-AR (Adults)</strong> – A validated Arabic translation of
            the Adult ADHD Self-Report Scale for DSM-5.
          </li>
          <li>
            <strong>ADHD Rating Scale-5 (Adolescent)</strong> – Validated using
            structural equation modelling for adolescents in Saudi Arabia.
          </li>
          <li>
            <strong>VADRS-A (Arabic Vanderbilt)</strong> – A validated Arabic
            translation for parents and teachers.
          </li>
        </ul>

        <p className="text-slate-600 text-sm mb-3">
          These screening tools help identify individuals who may require
          referral. Scores should always be interpreted by trained clinicians and
          combined with multi-source information.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600">
          The Saudi ADHD Society provides free interactive PDF versions of these
          tools at:
          <br />
          <a
            href="https://cpg.adhd.org.sa/en/guideline/rating-scales/"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 underline"
          >
            https://cpg.adhd.org.sa/en/guideline/rating-scales/
          </a>
        </div>
      </section>

      {/* 4. Multi-informant, developmental & differential */}
      <section ref={multiInformantRef} className="bg-white p-6 rounded-xl border-l-4 border-purple-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Users className="text-purple-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            4. Multi-Informant, Developmental &amp; Differential Diagnosis
          </h2>
        </div>

        <p className="text-slate-600 text-sm mb-3">
          Because ADHD affects daily life across settings, clinicians should
          gather information from:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Parents and caregivers</li>
          <li>Teachers or workplace supervisors</li>
          <li>The individual themselves (children, adolescents and adults)</li>
          <li>Academic/work performance records</li>
        </ul>

        <p className="text-slate-600 text-sm mb-3">
          Assessment must also rule out alternative explanations such as:
        </p>

        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
          <li>Sleep disorders</li>
          <li>Anxiety or depression</li>
          <li>Learning disorders</li>
          <li>Autism spectrum condition</li>
          <li>Environmental stress or trauma</li>
        </ul>
      </section>

      {/* 5. Functional assessment tools */}
      <section ref={functionalAssessmentRef} className="bg-white p-6 rounded-xl border-l-4 border-rose-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
            <Ruler className="text-rose-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            5. Functional Assessment: Measuring What Really Matters
          </h2>
        </div>

        <p className="text-slate-600 text-sm mb-3">
          The CPG highlights that the primary determinant of clinical need is{" "}
          <strong>functional impairment</strong>. Clinicians assess functioning in:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-4">
          <li>Learning and academic/work performance</li>
          <li>Daily routines and independence</li>
          <li>Social participation and peer relations</li>
          <li>Emotional regulation and behavioural stability</li>
          <li>Family dynamics</li>
        </ul>

        <p className="text-slate-600 text-sm">
          This aligns with the WHO ICF Core Sets for ADHD, which provide a structured
          way to describe functioning and disability across life domains.
        </p>
      </section>

      {/* 6. What assessment is NOT */}
      <section ref={notDiagnosisRef} className="bg-white p-6 rounded-xl border-l-4 border-red-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="text-red-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">6. What ADHD Assessment Is NOT</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Consensus guidance warns against common misconceptions:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1">
          <li>
            ADHD is <strong>not</strong> diagnosed by EEG, MRI, computer tests, or
            neuro-imaging.
          </li>
          <li>
            Screening tools <strong>cannot</strong> diagnose ADHD and must not be
            used alone.
          </li>
          <li>
            Academic underperformance alone is <strong>not</strong> ADHD.
          </li>
          <li>
            Hyperactivity alone is <strong>not</strong> ADHD without impairment and
            cross-setting evidence.
          </li>
        </ul>
      </section>

      {/* 7. Key messages */}
      <section className="bg-white p-6 rounded-xl border-l-4 border-amber-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="text-amber-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            7. Key Messages at a Glance
          </h2>
        </div>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
          <li>
            ADHD diagnosis is based on a structured clinical evaluation, not a
            single test.
          </li>
          <li>
            Functional impairment — not just symptoms — determines clinical
            significance.
          </li>
          <li>
            Validated Arabic screening tools support referral but do not diagnose.
          </li>
          <li>
            Assessment requires information from multiple settings and informants.
          </li>
          <li>
            Differential diagnosis is essential to avoid misattribution or
            over-diagnosis.
          </li>
        </ul>
      </section>
    </div>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex justify-center">
        <a
          href={getHref('topic-guides', basePath)}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Topic Guides
        </a>
      </div>
    </div>
  </div>
  );
};

export default TopicGuideDiagnosisPage;