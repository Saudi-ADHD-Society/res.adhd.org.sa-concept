import React from 'react';
import { BookOpen, Users, Heart, FlaskConical, ClipboardCheck, Globe, Scale, ShieldCheck, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const TopicGuidesPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Topic Guides</h2>
      <p className="text-slate-600 max-w-2xl">
        Synthesised guidance on core ADHD themes in the Saudi context. Each guide bridges the "Know-Do" gap by translating complex research and policy into actionable insights for policymakers, clinicians, educators, and families.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Guide 1: What is ADHD */}
      <a
        href={getHref('topic-guide-what-is-adhd', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          <BookOpen size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          What is ADHD — Myths vs Evidence
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Separating fact from fiction. Evidence-based answers to common questions and misconceptions about ADHD as a neurodevelopmental condition.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 2: ADHD Across the Lifespan */}
      <a
        href={getHref('topic-guide-lifespan', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Users size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          ADHD Across the Lifespan
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Understanding how ADHD presents and evolves from childhood through adolescence, adulthood, and older age, with age-specific considerations for diagnosis and management.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 3: Health, Comorbidity & Risk */}
      <a
        href={getHref('topic-guide-health-comorbidity', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
          <Heart size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          Health, Comorbidity &amp; Risk in ADHD
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Exploring the physical and mental health conditions that commonly co-occur with ADHD, risk factors, and strategies for comprehensive care.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 4: Evidence-Based Treatments */}
      <a
        href={getHref('topic-guide-treatments', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
          <FlaskConical size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          Evidence-Based Treatments: What Works &amp; What You Should Know
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          A comprehensive overview of proven treatments for ADHD, including medication, behavioral interventions, and combined approaches, with practical guidance for families and clinicians.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 5: Diagnosis & Assessment */}
      <a
        href={getHref('topic-guide-diagnosis', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
          <ClipboardCheck size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          Diagnosis &amp; Assessment — Beyond Symptoms: Functioning &amp; Disability
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Understanding the diagnostic process, the importance of functional assessment, and how ADHD relates to disability frameworks in the Saudi context.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 6: ADHD & Society */}
      <a
        href={getHref('topic-guide-society', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
          <Globe size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          ADHD &amp; Society: Costs, Policy, Stigma &amp; Advocacy
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Examining the broader social, economic, and policy dimensions of ADHD, including healthcare costs, educational impacts, stigma reduction, and advocacy strategies.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 7: ADHD in Women & Girls */}
      <a
        href={getHref('topic-guide-women-girls', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-pink-100 text-pink-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-600 group-hover:text-white transition-colors">
          <Users size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          ADHD in Women &amp; Girls: Identification &amp; Treatment
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Consensus-based guidance on recognising and managing ADHD in girls and women, including diagnostic interview
          nuances and pharmacological and non-pharmacological treatment considerations across the lifespan.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 8: Is ADHD a Disability? */}
      <a
        href={getHref('topic-guide-disability', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <Scale size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          Is ADHD a Disability?
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Exploring the question of whether ADHD is considered a disability, examining legal frameworks, rights, accommodations, and the implications for individuals with ADHD in various contexts.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Guide 9: The Validity and Utility of ADHD */}
      <a
        href={getHref('topic-guide-validity-utility', basePath)}
        className="group block text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
      >
        <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
          <ShieldCheck size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          The Validity and Utility of ADHD: Evidence, Critiques, and Implications for Practice
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          Examining the scientific evidence for ADHD as a valid diagnostic construct, addressing common critiques, and exploring implications for clinical practice and policy.
        </p>
        <div className="text-sm font-semibold text-emerald-700 flex items-center">
          Read Guide <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>
    </div>
  </div>
);

export default TopicGuidesPage;
