import React from 'react';
import { Globe, ArrowLeft } from 'lucide-react';

const TopicGuideSocietyPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Breadcrumb */}
    <div className="text-sm text-slate-500">
      <button onClick={() => onNavigate('topic-guides')} className="hover:text-emerald-600">
        Evidence & Insights / Topic Guides
      </button>
      <span className="mx-2">/</span>
      <span>ADHD &amp; Society</span>
    </div>

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-teal-600 text-sm font-bold mb-3">
        <Globe size={16} />
        <span>Social &amp; Policy Context</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">ADHD &amp; Society: Costs, Policy, Stigma &amp; Advocacy</h1>
      <p className="text-slate-600">
        Examining the broader social, economic, and policy dimensions of ADHD, including healthcare costs, educational impacts, stigma reduction, and advocacy strategies.
      </p>
    </div>

    {/* Main Content */}
    <div className="space-y-6">
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Understanding ADHD in Society</h2>
        <p className="text-slate-600">
          ADHD is not only a clinical condition—it is also a public health, social, and economic issue. Research consistently shows that 
          untreated or poorly supported ADHD contributes to increased healthcare utilisation, disrupted education, workplace inefficiency, and 
          greater long-term societal costs. These outcomes are not inevitable: early identification, evidence-based treatment, and 
          accessible support structures significantly reduce both personal and societal impact.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Economic & Healthcare Costs</h3>
        <p className="text-slate-600">
          International evidence demonstrates that ADHD is associated with higher rates of unplanned healthcare visits, injuries, and 
          comorbid mental health conditions. At the societal level, costs arise from lost productivity, reduced workforce participation, and 
          the need for specialised educational and clinical services. These burdens decrease substantially when individuals have timely access 
          to diagnosis, medication, behavioural interventions, and supportive school and workplace environments.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Education & Policy Implications</h3>
        <p className="text-slate-600">
          Without appropriate accommodations, students with ADHD face increased risk of school disengagement, underachievement, and 
          psychosocial stress. Policies that support early screening, teacher training, and structured collaboration between families, 
          healthcare professionals, and schools are strongly associated with better academic and developmental outcomes. In Saudi Arabia, 
          these principles align with evolving national efforts to strengthen inclusive education and standardise evidence‑based practices.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Stigma, Misconceptions & Social Barriers</h3>
        <p className="text-slate-600">
          Stigma remains one of the most significant barriers to care. Misconceptions—such as the idea that ADHD is caused by poor parenting, 
          excessive screen time, or lack of discipline—delay help‑seeking and increase family distress. Evidence shows that ADHD is a 
          neurodevelopmental condition with strong genetic and biological influences. Public awareness campaigns, accurate media representation, 
          and community‑level education all play essential roles in reducing stigma and improving acceptance.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Advocacy & Systems-Level Change</h3>
        <p className="text-slate-600">
          Effective advocacy focuses on rights, equity, and access. This includes supporting policies that ensure: 
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Access to affordable diagnostic and treatment services</li>
          <li>School accommodations and evidence‑based learning supports</li>
          <li>Workplace adjustments that enable sustained employment</li>
          <li>Reduction of stigma in families, communities, and institutions</li>
          <li>Better coordination between education, healthcare, and social sectors</li>
        </ul>
        <p className="text-slate-600">
          These efforts depend on high‑quality data, engagement with affected families, and clear communication between policymakers and 
          clinical experts. In Saudi Arabia, strengthening intersectoral collaboration is a growing national priority aligned with international 
          recommendations for improving outcomes across the lifespan.
        </p>
      </section>
    </div>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={() => onNavigate('topic-guide-diagnosis')}
          className="flex items-center text-emerald-700 font-semibold hover:text-emerald-800"
        >
          <ArrowLeft size={16} className="mr-2" />
          Previous: Diagnosis &amp; Assessment
        </button>
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

export default TopicGuideSocietyPage;

