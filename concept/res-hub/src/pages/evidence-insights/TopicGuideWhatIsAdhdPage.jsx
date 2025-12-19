import React from 'react';
import { BookOpen, AlertTriangle, CheckCircle2, Globe2, Brain, Activity, Pill } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const TopicGuideWhatIsAdhdPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-emerald-600 text-sm font-bold mb-3">
        <BookOpen size={16} />
        <span>Foundational Guide</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">What is ADHD — Myths vs Evidence</h1>
      <p className="text-slate-600">
        This guide summarizes high-quality international evidence about ADHD as a neurodevelopmental condition – 
        what it is, how it is diagnosed, how common it is, and what we know about causes, outcomes, and treatments. 
        It is designed for policymakers, clinicians, educators, and families who want to move beyond myths to 
        evidence-based understanding.
      </p>
      <p className="text-xs text-slate-400 mt-3">
        Based primarily on the World Federation of ADHD International Consensus Statement (208 evidence-based conclusions) 
        and aligned with the Saudi National ADHD Clinical Practice Guideline.
      </p>
    </div>

    {/* Main Content */}
    <div className="space-y-6">
      {/* 1. What ADHD Is (and Is Not) */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. What is ADHD?</h2>
        <p className="text-slate-600 mb-4">
          Attention-Deficit/Hyperactivity Disorder (ADHD) is a well-defined neurodevelopmental disorder. 
          It is characterized by developmentally inappropriate levels of inattention and/or hyperactivity–impulsivity 
          that:
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-1 text-sm">
          <li>Have been present for at least six months</li>
          <li>Occur in more than one setting (e.g., home and school / work)</li>
          <li>Clearly interfere with academic, occupational, or social functioning</li>
          <li>Start in childhood (symptoms and impairment begin in early to mid-childhood)</li>
          <li>Cannot be better explained by another condition</li>
        </ul>
        <p className="text-slate-600 text-sm mt-4">
          ADHD is not a “new” or “fashionable” label. Descriptions of children with ADHD-like symptoms and serious 
          impairment appear in the medical literature as far back as the late 1700s. Over the last 50 years, 
          diagnostic criteria have been refined and validated across many cultures and health systems.
        </p>
      </section>

      {/* 2. Myth vs Evidence – Overview Grid */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Common Myths vs Evidence</h2>
        <p className="text-slate-600 text-sm mb-6">
          Misconceptions about ADHD increase stigma, delay help-seeking, and can lead to harmful decisions. 
          The table below highlights frequent myths and summarizes what high-quality research actually shows.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Myth 1 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 1</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “ADHD is just bad behaviour or poor parenting.”
            </h3>
            <p className="text-xs text-slate-600">
              Parenting style does not “cause” ADHD. Twin, family, and molecular genetic studies show 
              ADHD is highly heritable and linked to many small genetic and early-life environmental influences. 
              Parenting and teaching practices can make symptoms better or worse, but they are not the root cause.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <CheckCircle2 className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              Large reviews of 30+ twin studies show strong genetic contributions to ADHD. Neuropsychological and 
              brain imaging studies consistently find differences at the group level between people with and without ADHD, 
              even when parenting is controlled for. Environmental stressors matter but do not fully explain the disorder.
            </p>
          </div>

          {/* Myth 2 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 2</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “ADHD is overdiagnosed and only exists in certain countries.”
            </h3>
            <p className="text-xs text-slate-600">
              Some people believe ADHD is a Western concept or that it is “overdiagnosed” in modern societies.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Globe2 className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              Meta-analyses show that about <strong>5–6% of children</strong> and <strong>2–3% of adults</strong> 
              meet diagnostic criteria for ADHD, with similar rates in Europe, Asia, the Middle East, Africa, 
              North and South America. The underlying prevalence has not increased in recent decades, 
              but diagnosis and awareness have improved.
            </p>
          </div>

          {/* Myth 3 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 3</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “ADHD is just typical childhood energy – kids grow out of it.”
            </h3>
            <p className="text-xs text-slate-600">
              While some children become less obviously hyperactive with age, the underlying difficulties with attention, 
              organization, and impulse control often remain.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Activity className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              Long-term follow-up studies show that about half of children with ADHD continue to have significant 
              symptoms and impairment into adulthood. Many shift from obvious hyperactivity to more hidden internal 
              restlessness, disorganization, and executive functioning problems.
            </p>
          </div>

          {/* Myth 4 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 4</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “ADHD only affects boys, and only in childhood.”
            </h3>
            <p className="text-xs text-slate-600">
              Girls and women with ADHD are often missed because they may show less disruptive behaviour and more 
              inattentive symptoms, anxiety, and internal distress.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <CheckCircle2 className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              ADHD is about twice as common in males in childhood, but it clearly affects girls and women and 
              persists into mid- and late adulthood for many people. The diagnosis is valid at all ages, 
              including in highly intelligent individuals.
            </p>
          </div>

          {/* Myth 5 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 5</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “ADHD is caused by sugar, screen time, or modern schools.”
            </h3>
            <p className="text-xs text-slate-600">
              Diet, screen use, and classroom environment can influence behaviour, but they do not explain ADHD as a disorder.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Brain className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              Large meta-analyses find no meaningful link between sugar intake and ADHD. Research instead points to a 
              combination of genetic factors and early-life risks (such as prematurity, low birth weight, some toxic exposures, 
              and severe adversity). Brain imaging studies show subtle but consistent group-level differences in the structure 
              and functioning of attention and self-control networks.
            </p>
          </div>

          {/* Myth 6 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 6</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “We can diagnose ADHD with a brain scan, blood test, or a single rating scale.”
            </h3>
            <p className="text-xs text-slate-600">
              Commercial claims sometimes promise “objective tests” for ADHD, but these are not supported by the evidence.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <CheckCircle2 className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              ADHD is diagnosed by a trained clinician using structured interviews, clinical judgement, and information 
              from more than one setting. Rating scales and cognitive tests can support assessment but cannot replace 
              a comprehensive clinical evaluation. No scan or lab test is currently accurate enough to be used alone for diagnosis.
            </p>
          </div>

          {/* Myth 7 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 7</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “ADHD medications are dangerous, addictive, or only sedate children.”
            </h3>
            <p className="text-xs text-slate-600">
              Concerns about medication are understandable, especially for young people. It is important to rely on 
              high-quality safety data rather than anecdote.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <Pill className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              Regulatory agencies worldwide have approved several medications for ADHD after rigorous trials. 
              Meta-analyses show that stimulant and non-stimulant medications are effective in reducing core symptoms. 
              When prescribed and monitored correctly, side effects are typically mild and manageable. 
              Large population studies suggest that appropriate treatment is associated with <em>lower</em> risks of injuries, 
              substance misuse, and other adverse outcomes – not higher.
            </p>
          </div>

          {/* Myth 8 */}
          <div className="bg-white rounded-lg border border-rose-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-rose-500 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-rose-500">Myth 8</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-1 text-sm">
              “If we use medication, we don’t need psychological or educational support.”
            </h3>
            <p className="text-xs text-slate-600">
              Sometimes ADHD is framed as a choice between medication or “non-medication” approaches.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-emerald-100 p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <CheckCircle2 className="text-emerald-600 mr-2" size={18} />
              <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">Evidence</span>
            </div>
            <p className="text-xs text-slate-600">
              Medication is usually the most effective single intervention for reducing core ADHD symptoms, 
              but it does not “solve” every difficulty. Psychoeducation, classroom adaptations, parent/carer training, 
              CBT, and vocational or university support are often needed to address learning, emotional, and social impacts. 
              The best care is multimodal and individualized.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Impact and Outcomes */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-3">3. Why ADHD Matters</h2>
        <p className="text-slate-600 text-sm mb-4">
          Untreated ADHD is not just about “being inattentive”. Across many large studies, children, adolescents, 
          and adults with ADHD are at higher risk for:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
          <ul className="list-disc pl-5 space-y-1">
            <li>Academic underachievement and early school leaving</li>
            <li>Family conflict and difficulties in peer relationships</li>
            <li>Low self-esteem and higher rates of anxiety and depression</li>
            <li>Risky behaviours, accidental injuries, and traffic accidents</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li>Substance use disorders and smoking</li>
            <li>Work instability and unemployment</li>
            <li>Teenage pregnancy and relationship breakdown</li>
            <li>Higher health-care costs and reduced quality of life</li>
          </ul>
        </div>
        <p className="text-slate-600 text-sm mt-4">
          At the population level, ADHD contributes to substantial social and economic costs. 
          At the individual level, timely diagnosis and support can dramatically change life trajectories.
        </p>
      </section>

      {/* 4. Key Takeaways */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-3">4. Key Takeaways for Policy and Practice</h2>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
          <li>
            <strong>ADHD is a real, well-validated medical condition</strong> with strong evidence for its validity, 
            causes, course, and treatment response.
          </li>
          <li>
            <strong>Myths and stigma delay care.</strong> Clear communication based on robust international evidence 
            is essential for families, clinicians, educators, and decision-makers.
          </li>
          <li>
            <strong>Diagnosis must be clinical and comprehensive</strong> – rating scales and tests support but 
            cannot replace careful assessment by trained professionals.
          </li>
          <li>
            <strong>Effective treatments exist.</strong> Medication, when appropriate and well monitored, 
            and psychosocial/educational interventions together offer the best outcomes.
          </li>
          <li>
            <strong>Context matters.</strong> Implementation in Saudi Arabia should align with national guidelines, 
            local health and education systems, and culturally appropriate communication.
          </li>
        </ul>
      </section>
    </div>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex justify-center">
        <button
          onClick={() => onNavigate('topic-guides')}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Topic Guides
        </button>
      </div>
    </div>
  </div>
);

export default TopicGuideWhatIsAdhdPage;