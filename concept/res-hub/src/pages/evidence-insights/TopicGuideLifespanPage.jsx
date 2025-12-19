import React, { useRef } from 'react';
import { Users, Baby, GraduationCap, Briefcase, Heart, AlertTriangle } from 'lucide-react';

const TopicGuideLifespanPage = ({ onNavigate }) => {
  const earlyChildhoodRef = useRef(null);
  const adolescenceRef = useRef(null);
  const adulthoodRef = useRef(null);
  const laterLifeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500">
        <button onClick={() => onNavigate('topic-guides')} className="hover:text-emerald-600">
          Evidence & Insights / Topic Guides
        </button>
        <span className="mx-2">/</span>
        <span>ADHD Across the Lifespan</span>
      </div>

      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-2 text-blue-600 text-sm font-bold mb-3">
          <Users size={16} />
          <span>Developmental Perspective</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">ADHD Across the Lifespan</h1>
        <p className="text-slate-600">
          Understanding how ADHD presents and evolves from childhood through adolescence, adulthood, and older age, with age-specific considerations for diagnosis and management.
        </p>
      </div>

      {/* Interactive Timeline */}
      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">Navigate by Life Stage</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-blue-400 via-purple-400 to-rose-400 rounded-full hidden md:block"></div>
          
          {/* Timeline Stages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <button
              onClick={() => scrollToSection(earlyChildhoodRef)}
              className="group flex flex-col items-center p-4 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-500 rounded-full flex items-center justify-center mb-2 transition-colors">
                <Baby className="text-amber-700 group-hover:text-white transition-colors" size={24} />
              </div>
              <span className="text-xs font-bold text-slate-700 group-hover:text-amber-700">Early Childhood</span>
              <span className="text-xs text-slate-500 mt-1">Ages 3-7</span>
            </button>

            <button
              onClick={() => scrollToSection(adolescenceRef)}
              className="group flex flex-col items-center p-4 bg-white rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-500 rounded-full flex items-center justify-center mb-2 transition-colors">
                <GraduationCap className="text-blue-700 group-hover:text-white transition-colors" size={24} />
              </div>
              <span className="text-xs font-bold text-slate-700 group-hover:text-blue-700">Adolescence</span>
              <span className="text-xs text-slate-500 mt-1">Ages 8-18</span>
            </button>

            <button
              onClick={() => scrollToSection(adulthoodRef)}
              className="group flex flex-col items-center p-4 bg-white rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 group-hover:bg-purple-500 rounded-full flex items-center justify-center mb-2 transition-colors">
                <Briefcase className="text-purple-700 group-hover:text-white transition-colors" size={24} />
              </div>
              <span className="text-xs font-bold text-slate-700 group-hover:text-purple-700">Adulthood</span>
              <span className="text-xs text-slate-500 mt-1">Ages 19-65</span>
            </button>

            <button
              onClick={() => scrollToSection(laterLifeRef)}
              className="group flex flex-col items-center p-4 bg-white rounded-xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-rose-100 group-hover:bg-rose-500 rounded-full flex items-center justify-center mb-2 transition-colors">
                <Heart className="text-rose-700 group-hover:text-white transition-colors" size={24} />
              </div>
              <span className="text-xs font-bold text-slate-700 group-hover:text-rose-700">Later Life</span>
              <span className="text-xs text-slate-500 mt-1">Ages 65+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Symptom Evolution Visualization */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">How Symptoms Evolve Over Time</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Hyperactivity/Impulsivity</span>
              <span className="text-xs text-slate-500">Decreases with age</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Inattention</span>
              <span className="text-xs text-slate-500">Remains stable</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Executive Function Challenges</span>
              <span className="text-xs text-slate-500">May increase</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 italic">
          Note: Individual trajectories vary. This represents general patterns observed in research.
        </p>
      </div>

    {/* Main Content */}
    <div className="space-y-6">
      {/* 1. Why a lifespan view matters */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Why a lifespan view matters</h2>
        <p className="text-slate-600 text-sm mb-3">
          ADHD is often thought of as a childhood condition, but high-quality longitudinal studies and international
          consensus work show that for many people it is a <strong>lifespan condition</strong>. Symptoms may change in
          form and intensity over time, but the underlying difficulties with attention, impulse control and
          self‑regulation can persist and affect education, work, relationships and health at every age.
        </p>
        <p className="text-slate-600 text-sm">
          Understanding age-specific patterns helps clinicians, educators and policymakers to plan services, reduce
          “gaps” at transition points (such as moving from child to adult services), and support individuals and
          families to anticipate what may change and what is likely to remain stable.
        </p>
      </section>

      {/* 2. Early childhood and primary school years */}
      <section ref={earlyChildhoodRef} className="bg-white p-6 rounded-xl border-l-4 border-amber-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Baby className="text-amber-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">2. Early childhood and primary school years</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          In the preschool and early primary years, ADHD-related difficulties often show as high activity levels,
          impulsive behaviour and short attention span. Many young children are active and distractible; the key
          difference in ADHD is the <strong>degree</strong> and <strong>persistence</strong> of these behaviours and the
          <strong>impact on daily life</strong>.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Struggling to sit still in group activities or during lessons.</li>
          <li>Switching rapidly between activities and toys; difficulty finishing tasks.</li>
          <li>Acting without thinking (running into the road, climbing unsafely, interrupting often).</li>
          <li>Challenges in learning early routines (lining up, following multi-step instructions).</li>
        </ul>
        <p className="text-slate-600 text-sm mb-3">
          At this age, early identification focuses on patterns that are clearly more severe than peers of the same age
          and stage, persist across settings, and are not explained by broader developmental delay. Supporting parents
          and teachers with <strong>evidence-based behavioural strategies</strong>, clear routines and positive
          reinforcement can reduce impairment and improve long-term outcomes.
        </p>
        <p className="text-slate-600 text-xs">
          Note: Some children show early signs but do not yet meet full diagnostic criteria. Careful monitoring and
          support are recommended rather than “wait and see” without follow-up.
        </p>
      </section>

      {/* 3. Late childhood and adolescence */}
      <section ref={adolescenceRef} className="bg-white p-6 rounded-xl border-l-4 border-blue-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <GraduationCap className="text-blue-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">3. Late childhood and adolescence</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          In later primary school and secondary school, academic and social demands increase. Hyperactive behaviour may
          become less obvious, but difficulties with attention, planning and impulse control often become more
          impairing, particularly in structured school systems with high expectations for independent work.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Difficulty sustaining attention in longer lessons and homework tasks.</li>
          <li>Problems with organisation (forgetting materials, losing items, missing deadlines).</li>
          <li>Increased conflict with parents and teachers around behaviour and school performance.</li>
          <li>Higher risk of low self-esteem, anxiety, depression and oppositional behaviours.</li>
          <li>Greater exposure to risk (accidents, unsafe driving when older, early substance use).</li>
        </ul>
        <p className="text-slate-600 text-sm mb-3">
          Adolescence is a critical window where untreated ADHD can contribute to educational failure, social
          exclusion and emerging mental health problems. International evidence shows that appropriately monitored
          <strong>medication and school accommodations</strong>, combined with psychoeducation and family support,
          are associated with better academic and health outcomes.
        </p>
        <p className="text-slate-600 text-xs">
          Particular attention is needed for girls and young women, who may present with less disruptive behaviour but
          significant inattentive symptoms and internal distress, and are therefore more likely to be under-recognised.
        </p>
      </section>

      {/* 4. Adulthood */}
      <section ref={adulthoodRef} className="bg-white p-6 rounded-xl border-l-4 border-purple-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Briefcase className="text-purple-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">4. Adulthood</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Many individuals with ADHD continue to experience symptoms and functional impairment in adulthood. Hyperactive
          behaviour often shifts into an inner sense of restlessness, while difficulties with attention, planning,
          organisation and emotional control become more prominent in work, study, relationships and parenting.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Chronic disorganisation, missed deadlines and unstable work history.</li>
          <li>Difficulty sustaining attention in meetings, reading or routine tasks.</li>
          <li>Impulsive decisions affecting finances, relationships or driving safety.</li>
          <li>Frequent feelings of being “overwhelmed”, “behind” or “under-achieving potential”.</li>
          <li>High rates of co-occurring anxiety, depression, substance use and sleep problems.</li>
        </ul>
        <p className="text-slate-600 text-sm mb-3">
          A lifespan view recognizes that adults may have lived for many years without a diagnosis, often carrying
          significant self-blame. Evidence-based assessment in adulthood should include a careful developmental
          history, current functional impact, and screening for comorbid conditions. International data show that
          when adult ADHD is identified and treated, there are improvements in work functioning, driving safety, and
          mental health outcomes for many people.
        </p>
        <p className="text-slate-600 text-xs">
          Services also need to consider the needs of adults in caregiving roles (e.g., parents with ADHD supporting
          children with ADHD), where family-level interventions can be especially helpful.
        </p>
      </section>

      {/* 5. Later life and ageing */}
      <section ref={laterLifeRef} className="bg-white p-6 rounded-xl border-l-4 border-rose-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
            <Heart className="text-rose-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">5. Later life and ageing</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Research on ADHD in older adults is more limited but growing. Available evidence suggests that for some
          individuals, ADHD-related difficulties continue into later life, although they may be misattributed to
          stress, mood problems or ageing alone.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Ongoing problems with organisation, time management and sustaining attention.</li>
          <li>Challenges managing complex medication schedules, finances or caregiving responsibilities.</li>
          <li>Potential overlap with other conditions (e.g., mood disorders, mild cognitive impairment), making careful differential diagnosis essential.</li>
        </ul>
        <p className="text-slate-600 text-sm">
          Clinicians should be aware that lifelong ADHD can coexist with age-related health conditions. Thoughtful use
          of medication (considering cardiovascular risk and polypharmacy), environmental adjustments, and support for
          routines can still provide benefit in later life.
        </p>
      </section>

      {/* 6. Transitions and service design */}
      <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="text-emerald-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">6. Transitions, continuity of care, and service design</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Across countries, one of the most consistent findings is that young people with ADHD often experience
          <strong>disrupted care at key transition points</strong>, particularly when moving from child to adult
          services. Many are discharged from child services without a clear plan, despite ongoing symptoms and risk
          factors.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>Planned transitions with joint meetings between child and adult teams.</li>
          <li>Clear guidance on responsibility for ongoing prescribing and monitoring.</li>
          <li>Shared tools (rating scales, functional assessments) that can be used across age bands.</li>
          <li>Specific attention to education-to-work transitions and university/vocational support.</li>
        </ul>
        <p className="text-slate-600 text-sm">
          A lifespan approach in national guidelines and service planning helps ensure that ADHD is recognized and
          supported beyond childhood, with pathways that reflect real developmental trajectories rather than strict
          age cut-offs.
        </p>
      </section>

      {/* 7. Key messages */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-3">7. Key messages at a glance</h2>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
          <li>
            <strong>ADHD is a lifespan condition for many people.</strong> Symptoms often change in form but can remain
            impairing without appropriate support.
          </li>
          <li>
            <strong>Developmental stage shapes presentation.</strong> Hyperactivity may be prominent in childhood,
            whereas in adolescence and adulthood, inattention, disorganisation and emotional dysregulation may be more
            disabling.
          </li>
          <li>
            <strong>Transitions are high-risk moments.</strong> Service pathways should explicitly plan for child–adult
            transitions and for shifts between school, university and work.
          </li>
          <li>
            <strong>Assessment and treatment should be tailored to age and context</strong>, while keeping core
            evidence-based principles consistent across the lifespan.
          </li>
          <li>
            <strong>Families, schools and workplaces are key partners</strong> in supporting functioning and reducing
            long-term negative outcomes.
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
};

export default TopicGuideLifespanPage;
