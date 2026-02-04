import React, { useRef } from 'react';
import { Heart, AlertTriangle, CheckCircle2, Users, Brain, TrendingUp, ShieldCheck, BookOpen, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const TopicGuideEmotionalRegulationPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => {
  const evidenceRef = useRef(null);
  const rsdRef = useRef(null);
  const relationshipsRef = useRef(null);
  const internalizingRef = useRef(null);
  const assessmentRef = useRef(null);
  const treatmentRef = useRef(null);

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
          <span>Clinical Guide</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">ADHD and Emotional Regulation: Evidence, Impact, and Clinical Implications</h1>
        <p className="text-slate-600 text-sm mb-2">
          This guide examines the evidence for emotional dysregulation as a core feature of ADHD, exploring what research tells us about 
          ADHD-specific emotional lability, rejection sensitive dysphoria (RSD), and their profound impacts on social relationships and 
          internalizing disorders. Written for clinicians, researchers, and policymakers working in the Saudi context.
        </p>
        <p className="text-xs text-slate-400">
          While emotional dysregulation is increasingly recognized as central to the ADHD experience, it is not currently included in DSM-5 
          diagnostic criteria. This guide synthesizes emerging evidence and its implications for clinical practice and assessment.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">Navigate by Topic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => scrollToSection(evidenceRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            aria-label="Navigate to Evidence section"
          >
            <div className="w-10 h-10 bg-rose-100 group-hover:bg-rose-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <TrendingUp className="text-rose-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-rose-700 text-sm">Evidence Base</h3>
              <p className="text-xs text-slate-600 mt-1">ADHD-specific emotional lability</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(rsdRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            aria-label="Navigate to Rejection Sensitive Dysphoria section"
          >
            <div className="w-10 h-10 bg-pink-100 group-hover:bg-pink-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Heart className="text-pink-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-pink-700 text-sm">Rejection Sensitive Dysphoria</h3>
              <p className="text-xs text-slate-600 mt-1">Understanding RSD in ADHD</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(relationshipsRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Navigate to Social Relationships section"
          >
            <div className="w-10 h-10 bg-red-100 group-hover:bg-red-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Users className="text-red-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-red-700 text-sm">Social Relationships</h3>
              <p className="text-xs text-slate-600 mt-1">Impact on interpersonal functioning</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(internalizingRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Navigate to Internalizing Disorders section"
          >
            <div className="w-10 h-10 bg-purple-100 group-hover:bg-purple-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <Brain className="text-purple-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-purple-700 text-sm">Internalizing Disorders</h3>
              <p className="text-xs text-slate-600 mt-1">Anxiety, depression, and comorbidity</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(assessmentRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Navigate to Assessment section"
          >
            <div className="w-10 h-10 bg-indigo-100 group-hover:bg-indigo-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <ShieldCheck className="text-indigo-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-indigo-700 text-sm">Assessment</h3>
              <p className="text-xs text-slate-600 mt-1">Clinical evaluation approaches</p>
            </div>
          </button>

          <button
            onClick={() => scrollToSection(treatmentRef)}
            className="group flex items-start space-x-3 p-4 bg-white rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="Navigate to Treatment section"
          >
            <div className="w-10 h-10 bg-emerald-100 group-hover:bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <CheckCircle2 className="text-emerald-700 group-hover:text-white transition-colors" size={20} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm">Treatment</h3>
              <p className="text-xs text-slate-600 mt-1">Evidence-based interventions</p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* 1. Introduction: The Centrality of Emotional Dysregulation */}
        <section className="bg-white p-6 rounded-xl border-l-4 border-rose-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
              <BookOpen className="text-rose-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">1. Introduction: Emotional Dysregulation as a Core Feature of ADHD</h2>
          </div>
          <p className="text-slate-600 text-sm mb-3">
            While the DSM-5 focuses on inattention, hyperactivity, and impulsivity, a growing body of research suggests that emotional 
            dysregulation may be equally central to the ADHD experience. Studies consistently find that individuals with ADHD show higher 
            rates of emotional lability—rapid, intense, and often unpredictable shifts in mood—compared to both typically developing peers 
            and those with other psychiatric conditions.
          </p>
          <p className="text-slate-600 text-sm mb-3">
            This emotional dysregulation appears to be <strong>distinct from</strong> comorbid mood or anxiety disorders. Rather, it 
            represents a core deficit in the ability to modulate emotional responses, potentially rooted in the same executive function 
            and neurobiological systems that underlie other ADHD symptoms.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600 mt-4">
            <strong>Key Point:</strong> Emotional dysregulation in ADHD is not simply "feeling things more" but reflects difficulties 
            with emotional self-regulation, emotional reactivity, and the cognitive control of affect. This has profound implications 
            for diagnosis, treatment, and understanding of functional impairment.
          </div>
        </section>

        {/* 2. Evidence for ADHD-Specific Emotional Lability */}
        <section ref={evidenceRef} className="bg-white p-6 rounded-xl border-l-4 border-rose-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-rose-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Evidence for ADHD-Specific Emotional Lability</h2>
          </div>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">2.1 Prevalence and Specificity</h3>
          <p className="text-slate-600 text-sm mb-2">
            Multiple meta-analyses and large-scale studies document that emotional dysregulation is present in approximately 
            <strong> 30–70%</strong> of individuals with ADHD across the lifespan, depending on the definition and measurement used. 
            Importantly, this emotional dysregulation:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li>Persists even when controlling for comorbid depression, anxiety, or oppositional defiant disorder</li>
            <li>Shows strong heritability, suggesting a genetic component shared with core ADHD symptoms</li>
            <li>Correlates with ADHD symptom severity but adds unique predictive value for functional outcomes</li>
            <li>Can be distinguished from bipolar disorder or borderline personality disorder through pattern analysis</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">2.2 Neurobiological Evidence</h3>
          <p className="text-slate-600 text-sm mb-2">
            Neuroimaging studies reveal that individuals with ADHD show altered activation patterns in brain regions critical for 
            emotional regulation, including:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Amygdala:</strong> Often shows heightened reactivity to emotional stimuli</li>
            <li><strong>Prefrontal cortex (especially ventromedial PFC):</strong> Reduced activation during emotion regulation tasks</li>
            <li><strong>Anterior cingulate cortex:</strong> Altered connectivity and function in emotional conflict resolution</li>
            <li><strong>Dopaminergic pathways:</strong> Similar neurotransmitter systems implicated in both ADHD and emotional regulation</li>
          </ul>
          <p className="text-slate-600 text-sm">
            These findings suggest that emotional dysregulation in ADHD is not a secondary consequence but may share common 
            neurobiological substrates with attention and impulse control deficits.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">2.3 Developmental Trajectory</h3>
          <p className="text-slate-600 text-sm mb-2">
            Longitudinal studies indicate that emotional dysregulation in ADHD:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li>Is often present from early childhood, though it may manifest differently at different ages</li>
            <li>Tends to persist into adulthood, sometimes becoming more prominent as hyperactivity-impulsivity decreases</li>
            <li>May be particularly pronounced during adolescence, a period marked by increased emotional intensity and social demands</li>
            <li>Can worsen functional outcomes independently of inattention or hyperactivity symptoms</li>
          </ul>

          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-xs text-slate-700 mt-4">
            <strong>Clinical Implication:</strong> The high prevalence and persistence of emotional dysregulation suggest that assessment 
            protocols should routinely include evaluation of emotional regulation, even when mood disorders are not suspected. This is 
            especially relevant in the Saudi context, where cultural factors may influence the expression and recognition of emotional symptoms.
          </div>
        </section>

        {/* 3. Rejection Sensitive Dysphoria (RSD) */}
        <section ref={rsdRef} className="bg-white p-6 rounded-xl border-l-4 border-pink-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <Heart className="text-pink-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Rejection Sensitive Dysphoria (RSD): A Clinically Significant Phenomenon</h2>
          </div>
          <p className="text-slate-600 text-sm mb-3">
            Rejection Sensitive Dysphoria (RSD) describes an intense, often overwhelming emotional response to perceived or actual 
            rejection, criticism, or failure. While not yet an official diagnostic category, RSD is widely reported by individuals with 
            ADHD and their clinicians as a highly impairing feature of the condition.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">3.1 Characteristics of RSD</h3>
          <p className="text-slate-600 text-sm mb-2">
            RSD in ADHD is characterized by:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Intense emotional pain:</strong> Described as physically painful and disproportionate to the triggering event</li>
            <li><strong>Rapid onset:</strong> Can emerge within seconds of perceived rejection</li>
            <li><strong>Difficulty recovering:</strong> Emotional distress may persist for hours or days</li>
            <li><strong>Hypervigilance:</strong> Constant monitoring for signs of rejection or criticism</li>
            <li><strong>Behavioral responses:</strong> May include withdrawal, aggression, people-pleasing, or perfectionism</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">3.2 Distinction from Social Anxiety or Borderline Personality Disorder</h3>
          <p className="text-slate-600 text-sm mb-2">
            While RSD shares features with social anxiety and emotion dysregulation seen in borderline personality disorder, it can be 
            distinguished by:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Speed of onset:</strong> RSD reactions are typically more immediate than social anxiety responses</li>
            <li><strong>Specificity:</strong> Triggered primarily by rejection/criticism rather than general social situations</li>
            <li><strong>Relationship to ADHD symptoms:</strong> Often co-occurs with ADHD and may respond to ADHD treatments</li>
            <li><strong>Stability:</strong> More stable pattern compared to the identity disturbance seen in BPD</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">3.3 Impact on Functioning</h3>
          <p className="text-slate-600 text-sm mb-2">
            RSD can lead to:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li>Avoidance of situations where rejection is possible (e.g., not applying for jobs, avoiding relationships)</li>
            <li>Excessive effort to prevent rejection (perfectionism, people-pleasing, over-achievement)</li>
            <li>Masking ADHD symptoms to avoid criticism or negative feedback</li>
            <li>Significant distress that may be misattributed to depression or anxiety disorders</li>
          </ul>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-xs text-slate-700 mt-4">
            <strong>Cultural Consideration:</strong> In collectivist cultures like Saudi Arabia, where social harmony and group belonging 
            are highly valued, RSD may manifest with particular intensity. Clinicians should be sensitive to how fear of rejection might 
            intersect with cultural expectations around social relationships and family honor. Understanding these cultural dynamics is 
            essential for accurate assessment and effective treatment.
          </div>
        </section>

        {/* 4. Impact on Social Relationships */}
        <section ref={relationshipsRef} className="bg-white p-6 rounded-xl border-l-4 border-red-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Users className="text-red-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. Impact on Social Relationships</h2>
          </div>
          <p className="text-slate-600 text-sm mb-3">
            Emotional dysregulation in ADHD has profound implications for social functioning, affecting friendships, family relationships, 
            romantic partnerships, and workplace interactions.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">4.1 Peer Relationships in Childhood and Adolescence</h3>
          <p className="text-slate-600 text-sm mb-2">
            Research consistently shows that children and adolescents with ADHD, particularly those with emotional dysregulation, experience:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li>Higher rates of peer rejection and victimization</li>
            <li>Greater difficulty maintaining friendships due to emotional outbursts or overreactions</li>
            <li>Impaired ability to recognize and respond appropriately to social cues</li>
            <li>Lower social status and fewer reciprocal friendships</li>
            <li>Increased risk of social isolation and loneliness</li>
          </ul>
          <p className="text-slate-600 text-sm">
            These social difficulties appear to be <strong>partially independent</strong> of inattention and hyperactivity symptoms, 
            suggesting that emotional dysregulation contributes unique variance to social impairment.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">4.2 Adult Relationships</h3>
          <p className="text-slate-600 text-sm mb-2">
            In adulthood, emotional dysregulation in ADHD is associated with:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Romantic relationships:</strong> Higher rates of conflict, lower relationship satisfaction, and increased risk of 
            relationship dissolution</li>
            <li><strong>Parenting:</strong> Difficulty regulating emotional responses to children's behavior, leading to inconsistent 
            parenting and parent-child conflict</li>
            <li><strong>Friendships:</strong> Challenges maintaining long-term friendships due to emotional reactivity and RSD</li>
            <li><strong>Workplace:</strong> Interpersonal conflicts, sensitivity to feedback, and difficulty managing workplace stress</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">4.3 Family Dynamics</h3>
          <p className="text-slate-600 text-sm mb-2">
            Emotional dysregulation in one family member with ADHD can create cycles of stress and conflict:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li>Family members may walk on eggshells to avoid triggering emotional reactions</li>
            <li>Rejection sensitivity may lead to misinterpretation of family members' neutral or positive intentions</li>
            <li>Emotional outbursts can disrupt family routines and create chronic stress</li>
            <li>Family therapy approaches that address emotional regulation are often needed alongside individual treatment</li>
          </ul>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-xs text-slate-700 mt-4">
            <strong>Saudi Context:</strong> In Saudi society, where family relationships are central and extended family networks are 
            influential, emotional dysregulation may have particularly far-reaching effects. Clinicians should consider how emotional 
            reactivity might affect not only the immediate family but also relationships with extended family members, in-laws, and the 
            broader community. Family-based interventions that respect cultural values while addressing emotional regulation may be 
            especially beneficial.
          </div>
        </section>

        {/* 5. Relationship to Internalizing Disorders */}
        <section ref={internalizingRef} className="bg-white p-6 rounded-xl border-l-4 border-purple-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Brain className="text-purple-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">5. Emotional Dysregulation and Internalizing Disorders</h2>
          </div>
          <p className="text-slate-600 text-sm mb-3">
            The high comorbidity between ADHD and internalizing disorders (depression, anxiety) is well-established. Emotional 
            dysregulation appears to be a critical pathway linking ADHD to these conditions.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">5.1 ADHD and Anxiety Disorders</h3>
          <p className="text-slate-600 text-sm mb-2">
            Approximately 25–50% of individuals with ADHD also meet criteria for an anxiety disorder. Evidence suggests that:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li>Emotional dysregulation may increase vulnerability to anxiety, particularly generalized anxiety and social anxiety</li>
            <li>Rejection sensitivity specifically predicts social anxiety in individuals with ADHD</li>
            <li>Hypervigilance related to RSD may manifest as anxiety symptoms</li>
            <li>Shared neurobiological pathways (e.g., amygdala reactivity) may underlie both ADHD emotional dysregulation and anxiety</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">5.2 ADHD and Depression</h3>
          <p className="text-slate-600 text-sm mb-2">
            The relationship between ADHD and depression is complex:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li>Emotional dysregulation in childhood predicts later depression in individuals with ADHD</li>
            <li>Chronic experience of RSD, social rejection, and academic/occupational failure can contribute to depressive symptoms</li>
            <li>Difficulty regulating negative emotions may amplify and prolong depressive states</li>
            <li>It can be challenging to distinguish emotional dysregulation from depression, requiring careful clinical assessment</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">5.3 Clinical Implications of Comorbidity</h3>
          <p className="text-slate-600 text-sm mb-2">
            When ADHD co-occurs with anxiety or depression:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Assessment:</strong> Clinicians should evaluate whether emotional symptoms are better explained by ADHD-related 
            emotional dysregulation, a comorbid mood/anxiety disorder, or both</li>
            <li><strong>Treatment sequencing:</strong> Some evidence suggests that treating ADHD first may improve emotional regulation 
            and reduce anxiety/depression symptoms, though comorbid conditions may also require specific interventions</li>
            <li><strong>Differential diagnosis:</strong> Emotional dysregulation should not be automatically attributed to mood disorders; 
            a comprehensive ADHD assessment including emotional symptoms is essential</li>
          </ul>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-xs text-slate-700 mt-4">
            <strong>Assessment Note:</strong> In Saudi Arabia, where stigma around mental health conditions may influence help-seeking, 
            individuals with ADHD may present primarily with emotional or mood symptoms. Clinicians should maintain a high index of 
            suspicion for underlying ADHD, particularly when emotional dysregulation is prominent, and conduct comprehensive assessments 
            that explore both ADHD and mood/anxiety symptoms.
          </div>
        </section>

        {/* 6. Assessment of Emotional Dysregulation */}
        <section ref={assessmentRef} className="bg-white p-6 rounded-xl border-l-4 border-indigo-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-indigo-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">6. Clinical Assessment of Emotional Dysregulation</h2>
          </div>
          <p className="text-slate-600 text-sm mb-3">
            Given the centrality of emotional dysregulation to ADHD and its impact on functioning, assessment protocols should routinely 
            include evaluation of emotional regulation, even when it is not part of formal diagnostic criteria.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">6.1 Clinical Interview Components</h3>
          <p className="text-slate-600 text-sm mb-2">
            When assessing ADHD, clinicians should specifically inquire about:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Emotional reactivity:</strong> Frequency and intensity of emotional responses, time to return to baseline</li>
            <li><strong>Emotion regulation strategies:</strong> What strategies (if any) the individual uses to manage emotions</li>
            <li><strong>Rejection sensitivity:</strong> Reactions to perceived criticism, rejection, or failure</li>
            <li><strong>Context:</strong> Situations that trigger emotional dysregulation (social, academic, family, etc.)</li>
            <li><strong>Impact:</strong> How emotional dysregulation affects relationships, work, and daily functioning</li>
            <li><strong>Developmental history:</strong> When emotional difficulties first appeared and how they have changed over time</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">6.2 Standardized Measures</h3>
          <p className="text-slate-600 text-sm mb-2">
            Several measures can supplement clinical interviews:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Behavior Rating Inventory of Executive Function (BRIEF):</strong> Includes emotional control subscale</li>
            <li><strong>Emotion Regulation Checklist:</strong> Assesses emotion regulation and lability in children</li>
            <li><strong>Difficulties in Emotion Regulation Scale (DERS):</strong> Validated for adolescents and adults</li>
            <li><strong>ADHD Rating Scales:</strong> Some include items on emotional dysregulation (e.g., Conners scales)</li>
            <li><strong>Mood and anxiety measures:</strong> To distinguish emotional dysregulation from mood/anxiety disorders</li>
          </ul>
          <p className="text-slate-600 text-sm mb-3">
            <strong>Note:</strong> Few measures have been validated specifically in Arabic or for Saudi populations. Clinicians should 
            use culturally sensitive approaches and consider adapting existing measures with appropriate translation and validation.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">6.3 Cultural Considerations in Assessment</h3>
          <p className="text-slate-600 text-sm mb-2">
            In the Saudi context, assessment of emotional dysregulation should consider:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Cultural expression of emotions:</strong> How emotional symptoms may be expressed or masked within cultural norms</li>
            <li><strong>Family perspectives:</strong> Involving family members (with consent) who may observe emotional patterns differently</li>
            <li><strong>Religious and spiritual factors:</strong> How faith and spirituality may influence emotional regulation and coping</li>
            <li><strong>Gender considerations:</strong> Cultural expectations around emotional expression may differ by gender</li>
            <li><strong>Language:</strong> Ensuring that assessment tools and questions are understood in the individual's preferred language</li>
          </ul>
        </section>

        {/* 7. Treatment Approaches */}
        <section ref={treatmentRef} className="bg-white p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="text-emerald-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">7. Evidence-Based Treatment Approaches</h2>
          </div>
          <p className="text-slate-600 text-sm mb-3">
            Treatment of emotional dysregulation in ADHD typically requires a multimodal approach, combining pharmacological and 
            psychosocial interventions.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">7.1 Pharmacological Treatments</h3>
          <p className="text-slate-600 text-sm mb-2">
            Research suggests that ADHD medications may also improve emotional regulation:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Stimulants:</strong> Some studies find that stimulant medications reduce emotional lability and improve emotion 
            regulation, though effects may be more variable than for core ADHD symptoms</li>
            <li><strong>Non-stimulants:</strong> Atomoxetine and alpha-2 agonists (e.g., guanfacine) may have specific benefits for 
            emotional dysregulation, possibly due to effects on noradrenergic systems involved in emotional control</li>
            <li><strong>Combination approaches:</strong> Combining stimulants with alpha-2 agonists may offer enhanced benefits for 
            emotional regulation</li>
          </ul>
          <p className="text-slate-600 text-sm mb-3">
            <strong>Important:</strong> Medication alone is rarely sufficient. Emotional regulation is a skill that requires learning 
            and practice, and psychosocial interventions are typically needed even when medication is beneficial.
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">7.2 Psychosocial Interventions</h3>
          <p className="text-slate-600 text-sm mb-2">
            Evidence-based psychosocial approaches for emotional dysregulation in ADHD include:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Cognitive-Behavioral Therapy (CBT):</strong> Adapted for ADHD, CBT can help individuals identify triggers, 
            challenge negative thought patterns, and develop emotion regulation strategies</li>
            <li><strong>Dialectical Behavior Therapy (DBT) skills:</strong> Skills training in mindfulness, distress tolerance, 
            emotion regulation, and interpersonal effectiveness can be particularly helpful for severe emotional dysregulation</li>
            <li><strong>Emotion-focused interventions:</strong> Programs specifically designed to teach emotion recognition, 
            understanding, and regulation strategies</li>
            <li><strong>Parent/family training:</strong> Helping families understand and respond to emotional dysregulation, 
            reducing cycles of conflict</li>
            <li><strong>Social skills training:</strong> Addressing the social consequences of emotional dysregulation</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">7.3 Treatment of Rejection Sensitive Dysphoria</h3>
          <p className="text-slate-600 text-sm mb-2">
            Specific approaches for RSD include:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Psychoeducation:</strong> Helping individuals understand RSD as part of ADHD, reducing self-blame</li>
            <li><strong>Cognitive restructuring:</strong> Challenging catastrophic interpretations of rejection</li>
            <li><strong>Exposure and response prevention:</strong> Gradually reducing avoidance of rejection-risking situations</li>
            <li><strong>Medication:</strong> Some clinicians report benefits from alpha-2 agonists or certain antidepressants, 
            though more research is needed</li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-800 mb-2 mt-4">7.4 Cultural Adaptations for Treatment</h3>
          <p className="text-slate-600 text-sm mb-2">
            In adapting treatments for the Saudi context, clinicians should consider:
          </p>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-1 mb-3">
            <li><strong>Family involvement:</strong> Engaging families in treatment while respecting cultural hierarchies and values</li>
            <li><strong>Religious integration:</strong> Incorporating Islamic principles and practices that support emotional regulation 
            (e.g., prayer, dhikr, patience/sabr) where appropriate and desired by the patient</li>
            <li><strong>Collectivist values:</strong> Framing treatment goals in terms of family and community well-being, not just 
            individual benefit</li>
            <li><strong>Gender considerations:</strong> Adapting interventions for gender-segregated settings or expectations</li>
            <li><strong>Language and communication:</strong> Ensuring interventions are delivered in culturally and linguistically 
            appropriate ways</li>
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-xs text-slate-700 mt-4">
            <strong>Multimodal Approach:</strong> The best outcomes are typically achieved through combination treatment addressing both 
            ADHD symptoms and emotional regulation. The Saudi National ADHD Clinical Practice Guideline provides comprehensive guidance 
            on treatment approaches that can be adapted to include emotional dysregulation as a treatment target.
          </div>
        </section>

        {/* 8. Key Takeaways */}
        <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-emerald-400 border-r border-t border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="text-emerald-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">8. Key Takeaways for Clinical Practice and Research</h2>
          </div>
          <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
            <li>
              <strong>Emotional dysregulation is central to ADHD.</strong> While not in DSM-5 criteria, evidence strongly suggests 
              it is a core feature affecting 30–70% of individuals with ADHD and contributing uniquely to functional impairment.
            </li>
            <li>
              <strong>Assessment should routinely include emotional regulation.</strong> Clinicians should evaluate emotional 
              dysregulation even when mood disorders are not suspected, using clinical interviews and standardized measures where available.
            </li>
            <li>
              <strong>Rejection Sensitive Dysphoria is a clinically significant phenomenon.</strong> RSD causes substantial distress 
              and functional impairment and should be assessed and treated, even though it is not a formal diagnostic category.
            </li>
            <li>
              <strong>Emotional dysregulation impacts relationships and mental health.</strong> It contributes significantly to social 
              difficulties and increases risk for anxiety and depression, requiring comprehensive treatment approaches.
            </li>
            <li>
              <strong>Treatment requires multimodal approaches.</strong> Pharmacological and psychosocial interventions can both help, 
              but combination treatment typically provides the best outcomes.
            </li>
            <li>
              <strong>Cultural context matters.</strong> In Saudi Arabia, emotional dysregulation may manifest and impact functioning 
              in culturally specific ways. Assessment and treatment should be culturally sensitive and adapted to local values and 
              family structures.
            </li>
            <li>
              <strong>More research is needed.</strong> While evidence is growing, more longitudinal, neurobiological, and 
              intervention research—including research in Arabic-speaking and Middle Eastern populations—is needed to fully understand 
              emotional dysregulation in ADHD and optimize treatment approaches.
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

export default TopicGuideEmotionalRegulationPage;

