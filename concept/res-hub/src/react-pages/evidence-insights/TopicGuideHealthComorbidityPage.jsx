import React, { useRef } from 'react';
import { Heart, Brain, BookOpen, Activity, AlertTriangle, Shield, Users } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const TopicGuideHealthComorbidityPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => {
  const mentalHealthRef = useRef(null);
  const learningRef = useRef(null);
  const physicalHealthRef = useRef(null);
  const riskRef = useRef(null);
  const integratedCareRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} locale={locale} />

      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-2 text-rose-600 text-sm font-bold mb-3">
          <Heart size={16} />
          <span>Health &amp; Risk Management</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Health, Comorbidity &amp; Risk in ADHD</h1>
        <p className="text-slate-600">
          Exploring the physical and mental health conditions that commonly co-occur with ADHD, risk factors, and strategies for comprehensive care.
        </p>
      </div>

      {/* Comorbidity Overview Cards */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">Navigate by Comorbidity Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => scrollToSection(mentalHealthRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Navigate to Mental Health section"
          >
            <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Brain className="text-blue-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-700 text-sm">Mental Health</h3>
              <p className="text-xs text-slate-600 mt-1">Anxiety, depression, behavioral disorders</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(learningRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Navigate to Learning & Development section"
          >
            <div className="w-10 h-10 bg-purple-100 group-hover:bg-purple-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <BookOpen className="text-purple-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-purple-700 text-sm">Learning &amp; Development</h3>
              <p className="text-xs text-slate-600 mt-1">Learning disorders, autism, sleep issues</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(physicalHealthRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="Navigate to Physical Health section"
          >
            <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Activity className="text-emerald-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm">Physical Health</h3>
              <p className="text-xs text-slate-600 mt-1">Injury risk, lifestyle factors</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(riskRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Navigate to Substance & Risk section"
          >
            <div className="w-10 h-10 bg-red-100 group-hover:bg-red-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <AlertTriangle className="text-red-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-red-700 text-sm">Substance &amp; Risk</h3>
              <p className="text-xs text-slate-600 mt-1">Substance use, self-harm, outcomes</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(integratedCareRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-teal-200 hover:border-teal-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            aria-label="Navigate to Integrated Care section"
          >
            <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Users className="text-teal-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-700 text-sm">Integrated Care</h3>
              <p className="text-xs text-slate-600 mt-1">Assessment and care coordination</p>
            </div>
          </button>
        </div>
      </div>

      {/* Comorbidity Statistics Visualization */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Understanding Comorbidity Prevalence</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-rose-50 rounded-lg border border-rose-200">
            <div className="flex items-center space-x-3">
              <Shield className="text-rose-600" size={24} />
              <span className="text-sm font-semibold text-slate-700">Most people with ADHD have at least one additional condition</span>
            </div>
            <span className="text-2xl font-bold text-rose-600">60-80%</span>
          </div>
          <p className="text-xs text-slate-500 italic">
            International research shows that comorbidity is the rule, not the exception. This highlights the importance of comprehensive assessment and integrated care approaches.
          </p>
        </div>
      </div>

    {/* Main Content */}
    <div className="space-y-6">
      {/* 1. Why health and comorbidity matter in ADHD */}
      <section className="bg-white p-6 rounded-xl border-l-4 border-rose-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
            <Heart className="text-rose-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">1. Why health and comorbidity matter in ADHD</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          ADHD rarely occurs in isolation. International consensus work and large population studies show that most
          children, adolescents and adults with ADHD have at least one additional mental health, neurodevelopmental or
          physical health condition. These “comorbidities” are not minor details – they strongly influence quality of
          life, risk, and what type of support is needed.
        </p>
        <p className="text-slate-600 text-sm">
          A comprehensive view of ADHD therefore means looking beyond core symptoms (inattention, hyperactivity,
          impulsivity) to the person's broader health profile, including sleep, mood, learning, physical activity,
          substance use and safety risks.
        </p>
      </section>

      {/* 2. Common mental health comorbidities */}
      <section ref={mentalHealthRef} className="bg-white p-6 rounded-xl border-l-4 border-blue-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Brain className="text-blue-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">2. Common mental health comorbidities</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Rates of mental health difficulties are substantially higher in people with ADHD than in the general
          population. The most common include:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>
            <strong>Anxiety disorders</strong> – worries, physical symptoms of anxiety, school refusal, social anxiety.
          </li>
          <li>
            <strong>Depressive disorders</strong> – low mood, loss of interest, hopelessness; often linked to repeated
            failure experiences, social rejection or chronic stress.
          </li>
          <li>
            <strong>Oppositional defiant and conduct problems</strong> – frequent conflict, rule-breaking, aggression;
            sometimes driven by frustration and negative cycles between adults and the child or young person.
          </li>
          <li>
            <strong>Tics and Tourette syndrome</strong> – motor and/or vocal tics that may fluctuate over time.
          </li>
        </ul>
        <p className="text-slate-600 text-sm mb-3">
          These conditions can mask or mimic ADHD symptoms, and they also change treatment priorities. For example,
          severe depression or anxiety may need to be addressed alongside, or sometimes before, adjustments to ADHD
          medication or behavioural interventions.
        </p>
        <p className="text-slate-600 text-xs">
          Careful assessment should therefore routinely screen for mood, anxiety and behavioural disorders rather than
          assuming that all difficulties are “just ADHD”.
        </p>
      </section>

      {/* 3. Learning, neurodevelopmental and sleep-related conditions */}
      <section ref={learningRef} className="bg-white p-6 rounded-xl border-l-4 border-purple-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <BookOpen className="text-purple-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">3. Learning, neurodevelopmental and sleep-related conditions</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          ADHD frequently co-occurs with other neurodevelopmental and learning differences. Recognising these patterns
          is essential for designing appropriate educational and workplace support.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>
            <strong>Specific learning disorders</strong> – difficulties with reading, writing or mathematics that are
            not explained by lack of opportunity or general ability.
          </li>
          <li>
            <strong>Developmental coordination disorder (dyspraxia)</strong> – clumsiness, difficulties with motor
            planning and handwriting, which may affect classroom performance.
          </li>
          <li>
            <strong>Autism spectrum disorder</strong> – social communication differences, restricted interests and sensory
            sensitivities; ADHD and autism can and do co-occur.
          </li>
          <li>
            <strong>Sleep problems</strong> – delayed sleep phase, difficulty falling asleep, restless sleep, and in some
            cases sleep-disordered breathing; all of which can worsen daytime attention and mood.
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          Addressing these co-occurring conditions may involve classroom accommodations, targeted learning support,
          occupational therapy, autism-informed strategies, and basic sleep hygiene or referral for sleep assessment.
        </p>
      </section>

      {/* 4. Physical health, lifestyle and injury risk */}
      <section ref={physicalHealthRef} className="bg-white p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Activity className="text-emerald-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">4. Physical health, lifestyle and injury risk</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Large cohort studies show that ADHD is associated with a range of physical health risks and lifestyle
          patterns. These are influenced by impulsivity, inattention, difficulties with planning and self-care, and
          sometimes by co-occurring conditions.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>
            Increased rates of accidental injuries, including traffic accidents in adolescents and adults.
          </li>
          <li>
            Higher prevalence of obesity and related metabolic problems in some groups, especially when physical
            activity is low and eating is used to cope with emotional distress.
          </li>
          <li>
            Difficulties maintaining regular exercise, healthy diet and medical follow-up routines.
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          These findings emphasise the importance of integrating basic health promotion – physical activity,
          sleep, nutrition and safety education – into ADHD care pathways, not treating ADHD as a purely
          “educational” or “behavioural” issue.
        </p>
      </section>

      {/* 5. Substance use, self-harm and long-term outcomes */}
      <section ref={riskRef} className="bg-white p-6 rounded-xl border-l-4 border-red-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <AlertTriangle className="text-red-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">5. Substance use, self-harm and long-term outcomes</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          ADHD is associated, at a population level, with elevated risks of substance use problems, self-harm and
          suicidal behaviour. These risks are <strong>not inevitable</strong>, but they are higher on average than in
          people without ADHD and deserve systematic attention.
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>
            Earlier onset of tobacco use and higher rates of smoking.
          </li>
          <li>
            Increased risk of alcohol and illicit substance misuse, particularly when ADHD is untreated and when
            conduct problems or mood disorders are also present.
          </li>
          <li>
            Elevated rates of self-harm and suicide attempts in some clinical samples, especially in the presence of
            depression, trauma or severe psychosocial stress.
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          Evidence from large registry studies suggests that <strong>appropriate, well-monitored ADHD treatment</strong>
          – including medication where indicated – is associated with <em>lower</em> rates of some of these adverse
          outcomes, such as traffic accidents and substance-related harms. This highlights that careful treatment may
          be protective rather than risky at the population level.
        </p>
      </section>

      {/* 6. Integrated assessment and care */}
      <section ref={integratedCareRef} className="bg-slate-50 p-6 rounded-xl border-l-4 border-teal-400 border-r border-t border-b border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
            <Users className="text-teal-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">6. Integrated assessment and care</h2>
        </div>
        <p className="text-slate-600 text-sm mb-3">
          Given the high rates of comorbidity and health risk, ADHD assessment and follow-up should be designed as an
          <strong>integrated process</strong> rather than a narrow focus on one set of symptoms. Key principles include:
        </p>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
          <li>
            Routine screening for mood, anxiety, behaviour problems, learning difficulties and sleep issues during
            ADHD assessment.
          </li>
          <li>
            Asking about physical health, accidents, substance use and self-harm in a sensitive, non-judgmental way.
          </li>
          <li>
            Coordinating care between mental health, primary care, paediatrics, neurology and other relevant
            specialties where needed.
          </li>
          <li>
            Sharing clear, practical information with families, schools and (for adults) employers, while respecting
            confidentiality.
          </li>
        </ul>
        <p className="text-slate-600 text-sm">
          From a policy perspective, this means that ADHD pathways should be embedded in wider child, adolescent and
          adult mental-health and chronic-disease strategies, rather than being treated as an isolated programme.
        </p>
      </section>

      {/* 7. Key messages at a glance */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-3">7. Key messages at a glance</h2>
        <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
          <li>
            <strong>Comorbidity is the rule, not the exception.</strong> Most people with ADHD have at least one
            additional condition that affects functioning and risk.
          </li>
          <li>
            <strong>Mental health, learning and physical health all intersect</strong> with ADHD and should be
            considered together in assessment and care planning.
          </li>
          <li>
            <strong>Risks such as accidents, substance use and self-harm are elevated on average</strong>, but timely,
            coordinated support can reduce these risks.
          </li>
          <li>
            <strong>Integrated, multi-disciplinary care</strong> is more effective than isolated interventions.
          </li>
          <li>
            <strong>Public and professional education</strong> should communicate that ADHD is not just a “school
            issue” but a condition with broad health implications across the lifespan.
          </li>
        </ul>
      </section>
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
};

export default TopicGuideHealthComorbidityPage;

