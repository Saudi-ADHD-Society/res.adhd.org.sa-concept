import React, { useRef } from 'react';
import { getHref } from '../../utils/navigation';
import {
  FlaskConical,
  Pill,
  Brain,
  Users,
  ClipboardList,
  HeartPulse,
  AlertTriangle,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const TopicGuideTreatmentsPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => {
  const medicationRef = useRef(null);
  const psychologicalRef = useRef(null);
  const educationalRef = useRef(null);
  const multimodalRef = useRef(null);
  const limitedEvidenceRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} />

      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-2 text-purple-600 text-sm font-bold mb-3">
          <FlaskConical size={16} />
          <span>Treatment Guide</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Evidence-Based Treatments: What Works &amp; What You Should Know
        </h1>
        <p className="text-slate-600 text-sm mb-2">
          This guide summarizes the international evidence on treatments for ADHD – including medication, psychological
          interventions, and educational support – and links these to the principles of the Saudi National ADHD Clinical
          Practice Guideline. It is written for policymakers, clinicians, educators, and informed families.
        </p>
        <p className="text-xs text-slate-400">
          This is an overview only. It does not replace clinical judgement or detailed prescribing guidance.
        </p>
      </div>

      {/* Treatment Navigation Cards */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">Navigate by Treatment Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => scrollToSection(medicationRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Pill className="text-emerald-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm">Medication</h3>
              <p className="text-xs text-slate-600 mt-1">Stimulants, non-stimulants, evidence base</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(psychologicalRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-sky-200 hover:border-sky-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-sky-100 group-hover:bg-sky-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Brain className="text-sky-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-sky-700 text-sm">Psychological Interventions</h3>
              <p className="text-xs text-slate-600 mt-1">Behavioral therapy, parent training</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(educationalRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <GraduationCap className="text-emerald-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm">Educational Support</h3>
              <p className="text-xs text-slate-600 mt-1">School & workplace accommodations</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(multimodalRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-indigo-100 group-hover:bg-indigo-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <ClipboardList className="text-indigo-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-indigo-700 text-sm">Multimodal Care</h3>
              <p className="text-xs text-slate-600 mt-1">Combined approaches & monitoring</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(limitedEvidenceRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all text-left"
          >
            <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <AlertTriangle className="text-amber-700 group-hover:text-white transition-colors" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 text-sm">Limited Evidence</h3>
              <p className="text-xs text-slate-600 mt-1">Approaches with insufficient support</p>
            </div>
          </button>
        </div>
      </div>

      {/* Treatment Effectiveness Overview */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Treatment Effectiveness Overview</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Pill className="text-emerald-600" size={16} />
                <span className="text-sm font-semibold text-slate-700">Medication (Stimulants)</span>
              </div>
              <span className="text-xs text-slate-500">Strong evidence</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Brain className="text-sky-600" size={16} />
                <span className="text-sm font-semibold text-slate-700">Psychological Interventions</span>
              </div>
              <span className="text-xs text-slate-500">Moderate evidence</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <GraduationCap className="text-emerald-600" size={16} />
                <span className="text-sm font-semibold text-slate-700">Educational Support</span>
              </div>
              <span className="text-xs text-slate-500">Supporting evidence</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <ClipboardList className="text-indigo-600" size={16} />
                <span className="text-sm font-semibold text-slate-700">Multimodal (Combined)</span>
              </div>
              <span className="text-xs text-slate-500">Best outcomes</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 italic">
          Effectiveness varies by individual. Multimodal approaches combining multiple treatment types typically show the best outcomes.
        </p>
      </div>

    {/* Main Content */}
    <div className="space-y-6">
      {/* 1. Treatment principles */}
      <section className="bg-white p-6 rounded-xl border-l-4 border-purple-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <FlaskConical className="text-purple-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">1. Core principles of ADHD treatment</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          International consensus statements and national guidelines agree on several core principles:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>
            <strong>ADHD is highly treatable.</strong> A range of interventions can meaningfully reduce symptoms and
            improve functioning.
          </li>
          <li>
            <strong>Treatment should be comprehensive.</strong> Interventions need to address symptoms, functioning,
            comorbidities, and environmental supports – not just one dimension.
          </li>
          <li>
            <strong>Shared decision-making is essential.</strong> People with ADHD and their families should receive
            balanced, evidence-based information on risks and benefits.
          </li>
          <li>
            <strong>Care should be individualized and reviewed over time.</strong> Needs change with age, life
            transitions, and comorbid conditions.
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          The Saudi National ADHD CPG builds on these principles and provides more detailed recommendations on
          assessment, treatment choice, and monitoring in the Kingdom context.
        </p>
      </section>

      {/* 2. Medication: what the evidence shows */}
      <section ref={medicationRef} className="bg-white p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Pill className="text-emerald-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">2. Pharmacological treatments</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          The strongest evidence for reducing core ADHD symptoms (inattention, hyperactivity, impulsivity) comes from
          medication trials. International meta-analyses show that when appropriately prescribed and monitored, ADHD
          medications provide moderate to large improvements in symptoms for many children, adolescents, and adults.
        </p>

        <h3 className="text-sm font-semibold text-slate-800 mb-2">2.1 Stimulant medications</h3>
        <p className="text-slate-600 text-sm mb-2">
          Stimulant medications (such as methylphenidate and amphetamine-based preparations) are usually considered
          first-line pharmacological treatments in many guidelines.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>They have the largest and most consistent evidence base across age groups.</li>
          <li>Benefits include improved attention, reduced impulsivity and hyperactivity, and better classroom/workplace behaviour.</li>
          <li>
            Common side effects can include reduced appetite, difficulty falling asleep, and mild increases in heart rate
            or blood pressure; these are usually manageable with dose adjustment and monitoring.
          </li>
          <li>
            When prescribed and monitored correctly, stimulants do <strong>not</strong> appear to increase the risk of
            later substance use disorders; some large studies suggest they may be associated with lower risk at the
            population level.
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-slate-800 mb-2">2.2 Non-stimulant medications</h3>
        <p className="text-slate-600 text-sm mb-2">
          Non-stimulant medications (for example, atomoxetine or certain alpha-2 agonists) are also evidence-based
          options. They may be preferred when:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Stimulants are ineffective or poorly tolerated.</li>
          <li>There are specific comorbidities or contraindications.</li>
          <li>There is concern about misuse or diversion in particular contexts.</li>
        </ul>
        <p className="text-slate-600 text-sm mb-3">
          Non-stimulants tend to have a slower onset of action than stimulants but can provide meaningful symptom
          improvement and are important components of the overall treatment toolkit.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600">
          <strong>Important:</strong> This guide does not provide dosing instructions or drug-specific protocols.
          Clinicians should follow the detailed recommendations, dosing tables, and monitoring guidance in the Saudi
          National ADHD CPG and relevant regulatory information.
        </div>
      </section>

      {/* 3. Psychological and behavioural interventions */}
      <section ref={psychologicalRef} className="bg-white p-6 rounded-xl border-l-4 border-sky-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
            <Brain className="text-sky-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">3. Psychological and behavioural interventions</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Medication is not the only evidence-based option. Behavioural, psychological and family-focused
          interventions are key components of multimodal care and are particularly important when medication is not
          sufficient or not chosen.
        </p>

        <h3 className="text-sm font-semibold text-slate-800 mb-2">3.1 Parent- and carer-training programmes</h3>
        <p className="text-slate-600 text-sm mb-2">
          Structured parent-training programmes teach caregivers how to use consistent routines, positive reinforcement,
          and clear limits. International evidence shows these programmes can:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Reduce oppositional and disruptive behaviour.</li>
          <li>Improve parent–child relationships and parental confidence.</li>
          <li>Enhance the impact of other ADHD treatments and reduce family stress.</li>
        </ul>

        <h3 className="text-sm font-semibold text-slate-800 mb-2">3.2 Child, adolescent and adult-focused therapies</h3>
        <p className="text-slate-600 text-sm mb-2">
          For older adolescents and adults, cognitive–behavioural and skills-based interventions can target:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Time management, planning and organization.</li>
          <li>Emotional regulation and coping with frustration.</li>
          <li>Self-esteem, internalized stigma and negative thinking patterns.</li>
        </ul>
        <p className="text-slate-600 text-sm">
          The evidence base is growing; while effect sizes are generally smaller than for medication on core symptoms,
          these interventions can significantly improve daily functioning and quality of life.
        </p>
      </section>

      {/* 4. Educational and workplace support */}
      <section ref={educationalRef} className="bg-white p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <GraduationCap className="text-emerald-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">4. Educational and workplace interventions</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Because ADHD affects how people learn and work, adjustments in schools, universities and workplaces are a
          core part of evidence-based management.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Preferential seating and minimizing distractions in the classroom.</li>
          <li>Breaking tasks into smaller steps with clear written instructions.</li>
          <li>Allowing extra time for tests or assignments where appropriate.</li>
          <li>Use of planners, reminders and digital tools to support organization.</li>
          <li>In the workplace: negotiated task structuring, regular check-ins and realistic deadlines.</li>
        </ul>
        <p className="text-slate-600 text-sm">
          These environmental adjustments are low-risk and can be implemented even where access to specialist services
          or medication is limited.
        </p>
      </section>

      {/* 5. Multimodal care and monitoring */}
      <section ref={multimodalRef} className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <ClipboardList className="text-indigo-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">5. Multimodal care and ongoing monitoring</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          The best outcomes are usually achieved when treatments are thoughtfully combined and reviewed over time.
          This is sometimes called <strong>multimodal care</strong>.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Medication to reduce core symptoms where indicated.</li>
          <li>Parent/carer training and psychoeducation for families.</li>
          <li>Educational accommodations and learning support.</li>
          <li>Psychological therapies targeting mood, anxiety and skills.</li>
          <li>Regular follow-up visits to monitor benefits, side effects and functioning.</li>
        </ul>
        <p className="text-slate-600 text-sm mb-3">
          International registry studies suggest that appropriate, well-monitored treatment is associated with lower
          risks of accidents, substance misuse and some psychiatric outcomes at the population level.
        </p>
        <div className="bg-white border border-slate-200 rounded-lg p-4 text-xs text-slate-600 flex items-start gap-2">
          <HeartPulse size={16} className="mt-0.5 text-emerald-600" />
          <p>
            Monitoring should include symptom change, side effects, blood pressure and heart rate (where medication is
            used), and broader aspects of functioning (school/work performance, relationships, quality of life).
          </p>
        </div>
      </section>

      {/* 6. What is NOT supported by good evidence */}
      <section ref={limitedEvidenceRef} className="bg-white p-6 rounded-xl border-l-4 border-amber-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="text-amber-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">6. Approaches with limited or insufficient evidence</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Many interventions are marketed for ADHD without robust evidence. Consensus statements caution against
          presenting these as alternatives to proven treatments, especially when they are costly or delay access to
          effective care.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>
            <strong>Unproven “neurocognitive training” or commercial brain games</strong> claiming to cure ADHD.
          </li>
          <li>
            <strong>Restrictive diets or supplements</strong> presented as complete replacements for evidence-based
            treatment (although basic healthy diet advice is always appropriate).
          </li>
          <li>
            <strong>Single tests or scans</strong> sold as diagnostic tools or treatment monitors without adequate
            validation.
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          Families and clinicians should be cautious about any intervention that makes strong claims without high-quality,
          peer-reviewed evidence, particularly where significant money or time is involved.
        </p>
      </section>

      {/* 7. Key messages */}
      <section className="bg-white p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="text-emerald-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">7. Key messages at a glance</h2>
        </div>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
          <li>
            <strong>ADHD is highly treatable.</strong> Evidence supports medication, behavioural interventions,
            educational support, and their thoughtful combination.
          </li>
          <li>
            <strong>Medication, when indicated and monitored, is effective and generally safe</strong> and may reduce
            certain long-term risks at the population level.
          </li>
          <li>
            <strong>Psychological and educational interventions remain essential</strong> even when medication is used –
            they address skills, relationships, and environments.
          </li>
          <li>
            <strong>Multimodal care and regular review</strong> are more effective than single, isolated interventions.
          </li>
          <li>
            <strong>Policy and service design in Saudi Arabia</strong> should ensure access to the full range of
            evidence-based options, aligned with the national CPG and local systems.
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

export default TopicGuideTreatmentsPage;