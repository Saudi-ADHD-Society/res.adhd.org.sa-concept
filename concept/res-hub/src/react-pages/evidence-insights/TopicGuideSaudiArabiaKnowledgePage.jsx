import React from 'react';
import {
  GraduationCap,
  Users,
  School,
  Stethoscope,
  Globe,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Link2,
  MessageCircleWarning,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const StatCard = ({ icon: Icon, title, value, source }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-slate-700">{title}</p>
        <p className="mt-2 text-2xl font-extrabold text-slate-900">{value}</p>
        {source && <p className="mt-2 text-xs text-slate-500">{source}</p>}
      </div>
      <div className="shrink-0 rounded-lg bg-slate-50 border border-slate-200 p-2 text-slate-700">
        <Icon size={18} />
      </div>
    </div>
  </div>
);

const Callout = ({ tone = 'neutral', icon: Icon, title, children }) => {
  const tones = {
    neutral: {
      wrap: 'bg-slate-50 border-slate-200',
      title: 'text-slate-900',
      icon: 'text-slate-700'
    },
    warning: {
      wrap: 'bg-amber-50 border-amber-200',
      title: 'text-amber-900',
      icon: 'text-amber-800'
    },
    success: {
      wrap: 'bg-emerald-50 border-emerald-200',
      title: 'text-emerald-900',
      icon: 'text-emerald-800'
    },
    info: {
      wrap: 'bg-sky-50 border-sky-200',
      title: 'text-sky-900',
      icon: 'text-sky-800'
    }
  };
  const t = tones[tone] || tones.neutral;

  return (
    <div className={`rounded-xl border p-5 ${t.wrap}`}>
      <div className="flex items-start gap-3">
        {Icon ? (
          <div className={`mt-0.5 shrink-0 ${t.icon}`}>
            <Icon size={18} />
          </div>
        ) : null}
        <div>
          {title ? <p className={`font-extrabold ${t.title}`}>{title}</p> : null}
          <div className="mt-2 text-sm text-slate-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ id, icon: Icon, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
    <div className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0 rounded-lg bg-orange-50 border border-orange-200 p-2 text-orange-700">
        <Icon size={18} />
      </div>
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
      </div>
    </div>
    <div className="text-slate-700 leading-relaxed space-y-3">{children}</div>
  </section>
);

const TocLink = ({ href, children }) => (
  <a
    href={href}
    className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white hover:text-slate-900"
  >
    {children}
  </a>
);

// Helper function to convert DOI URL to library slug
const getLibrarySlugFromDoi = (doiUrl) => {
  if (!doiUrl) return null;
  // Extract DOI from URL (e.g., "https://doi.org/10.7759/cureus.40057" -> "10.7759/cureus.40057")
  const doiMatch = doiUrl.match(/doi\.org\/(.+)/);
  if (!doiMatch) return null;
  const doi = doiMatch[1];
  // Convert DOI to slug format (replace slashes with hyphens, remove underscores, keep dots)
  return doi.replace(/\//g, '-').replace(/_/g, '').toLowerCase();
};

// Helper component for reference links
const ReferenceLink = ({ doiUrl, basePath, locale = 'en', children }) => {
  const slug = getLibrarySlugFromDoi(doiUrl);
  if (!slug) {
    // If no DOI, return content without link
    return <p className="text-slate-700">{children}</p>;
  }
  const libraryBase = getHref('library', basePath, locale);
  const libraryUrl = libraryBase.endsWith('/') ? `${libraryBase}${slug}/` : `${libraryBase}/${slug}/`;
  return (
    <a
      href={libraryUrl}
      className="block text-slate-700 hover:text-orange-700 transition-colors"
    >
      {children}
    </a>
  );
};

const TopicGuideSaudiArabiaKnowledgePage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center space-x-2 text-orange-600 text-sm font-extrabold">
          <GraduationCap size={16} />
          <span>Topic Guide</span>
        </div>
        <div className="text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Last updated:</span> 22 December 2025
        </div>
      </div>

      <h1 className="text-3xl font-extrabold text-slate-900 mt-3">ADHD Knowledge, Attitudes, and Awareness in Saudi Arabia</h1>
      <p className="mt-4 text-slate-700 leading-relaxed">
        This guide summarises what is currently known about how ADHD is understood, perceived, and discussed within Saudi Arabia.
        It integrates findings across multiple populations (parents, teachers, trainees, health professionals, and the public), highlights common misconceptions,
        and outlines practical implications for education, healthcare, and policy.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
          <Users size={14} /> Parents & families
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
          <School size={14} /> Educators
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
          <Stethoscope size={14} /> Health workforce
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
          <Globe size={14} /> Public discourse & media
        </span>
      </div>
    </div>

    {/* Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main */}
      <div className="lg:col-span-8 space-y-6">
        {/* Evidence snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard
            icon={School}
            title="Teachers: knowledge is often insufficient"
            value="~96% insufficient"
            source="Female primary teachers (Taif): Alzahrani et al., 2023"
          />
          <StatCard
            icon={CheckCircle2}
            title="…but motivation and attitudes can be positive"
            value="~98% favourable"
            source="Same Taif sample: Alzahrani et al., 2023"
          />
          <StatCard
            icon={Users}
            title="Parents: poor knowledge is common"
            value="~84% poor"
            source="Saudi parents (Makkah): Alotaibi et al., 2023"
          />
          <StatCard
            icon={MessageCircleWarning}
            title="Misinformation: social media is a major source"
            value="~46% primary source"
            source="Parents (Makkah): Alotaibi et al., 2023"
          />
          <StatCard
            icon={Globe}
            title="Public: ADHD persistence is under-recognised"
            value="~24% lifelong"
            source="General public (Riyadh): Khan et al., 2025"
          />
          <StatCard
            icon={Stethoscope}
            title="Primary care: practice gap despite knowledge"
            value="~34% diagnosed"
            source="PHC physicians (Tabuk): AlGhassab et al., 2025"
          />
        </div>

        <Section
          id="what-we-mean"
          icon={BookOpen}
          title="What do we mean by knowledge, attitudes, and awareness?"
          subtitle="A simple framework to interpret the Saudi evidence"
        >
          <p>
            <span className="font-extrabold text-slate-900">Awareness</span> refers to basic familiarity (e.g., having heard of ADHD, recognising it as a condition).
            In Saudi studies, awareness of the term is often high, but it does not reliably translate into accurate understanding.
          </p>
          <p>
            <span className="font-extrabold text-slate-900">Knowledge</span> refers to correctness and depth—causes and mechanisms (e.g., neurodevelopmental basis),
            symptoms and diagnosis, and evidence-based treatments. Many studies use the KADDS or related instruments that also measure misconceptions.
          </p>
          <p>
            <span className="font-extrabold text-slate-900">Attitudes</span> capture beliefs and preferences that shape behaviour: whether ADHD is viewed as misbehaviour,
            whether medication is considered acceptable, and whether schools and families feel responsible or avoidant.
          </p>
          <Callout tone="info" icon={Lightbulb} title="How to interpret mixed findings">
            It is common to see a pattern of <span className="font-semibold">high awareness</span>, <span className="font-semibold">low specific knowledge</span>, and
            <span className="font-semibold">variable attitudes</span>.
            In a Riyadh general-public survey, higher knowledge scores were associated with more favourable attitudes (Khan et al., 2025).
            For planning, the most actionable question is often:
            <span className="font-semibold"> “Do key groups have enough correct knowledge to act early and effectively?”</span>
          </Callout>
        </Section>

        <Section
          id="saudi-evidence-map"
          icon={BarChart3}
          title="What the Saudi evidence shows"
          subtitle="Key populations, typical findings, and why they matter"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">Teachers (in-service)</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Knowledge is frequently insufficient, especially regarding causes and treatment (e.g., Alzahrani et al., 2023; Alshareef et al., 2023; Alqifari et al., 2025).</li>
                <li>Professional attitudes can be favourable, creating an opportunity for training to translate motivation into practice (Alzahrani et al., 2023).</li>
                <li>Knowledge tends to be higher among those with relevant training, higher qualifications, or direct experience teaching pupils with ADHD (Alshareef et al., 2023).</li>
                <li>Recent Qassim-region data also suggest particularly weak treatment knowledge (and strong diet-related beliefs), with knowledge varying by school type and information sources (Alqifari et al., 2025).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">Parents & caregivers</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Many parents report limited knowledge, and misconceptions about causes and treatment are common (Alrahili et al., 2022; Alotaibi et al., 2023).</li>
                <li>Information is often obtained from social media and informal sources rather than clinicians, increasing exposure to misinformation (Alotaibi et al., 2023).</li>
                <li>Medication hesitancy is frequently linked to fear of side effects, stigma, and uncertainty about diagnosis (Alrahili et al., 2022).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">Pre-service educators</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Knowledge can be stronger in specialist tracks (e.g., learning difficulties), but misconceptions may persist (Al-Hwaiti, 2019).</li>
                <li>Knowledge typically increases by study year, suggesting curriculum exposure matters (Al-Hwaiti, 2019).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">Medical students / trainees</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>General awareness may be adequate, while confidence and specific knowledge can remain limited (Qashqari et al., 2017; Alsuhaibani et al., 2020; Kandasamy et al., 2025).</li>
                <li>Among university students, “good knowledge” can coexist with low applied awareness, and misconceptions (e.g., about diagnostic tests) remain common—especially outside health-related tracks (Kandasamy et al., 2025).</li>
                <li>Knowledge gaps upstream in training can shape diagnostic delay and inconsistent advice to families.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">Primary healthcare physicians</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Most physicians demonstrated good ADHD knowledge in one Tabuk sample, but practice indicators lagged (AlGhassab et al., 2025).</li>
                <li>In the past year, only a minority reported diagnosing ADHD, while referral to specialists was common—suggesting a “knowledge-to-action” gap in primary care (AlGhassab et al., 2025).</li>
                <li>A substantial proportion also viewed ADHD diagnosis/management as outside their role, pointing to role-clarity and pathway issues (AlGhassab et al., 2025).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">General public (adults)</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Awareness of the term can be relatively high, but detailed knowledge remains limited—especially around impulsivity and persistence into adulthood (Khan et al., 2025).</li>
                <li>Public knowledge and attitudes are linked: higher knowledge scores correlate with more favourable attitudes, which supports education as a lever for stigma reduction (Khan et al., 2025).</li>
                <li>Help-seeking confidence is a bottleneck: many adults report not knowing where to seek help, and most information-seeking happens via the internet (Khan et al., 2025).</li>
              </ul>
            </div>
          </div>

          <Callout tone="warning" icon={AlertTriangle} title="The ‘frontline paradox’ (high willingness, low information)">
            Multiple Saudi studies describe a practical disconnect: educators frequently report positive intent to support pupils with ADHD,
            while simultaneously demonstrating low factual knowledge and persistent misconceptions (e.g., Alzahrani et al., 2023).
            This suggests the bottleneck is often <span className="font-semibold">capacity</span> (training, tools, systems) rather than <span className="font-semibold">motivation</span>.
          </Callout>
        </Section>

        <Section
          id="misconceptions"
          icon={MessageCircleWarning}
          title="Common misconceptions and narratives"
          subtitle="What repeatedly shows up in Saudi studies and public discourse"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">“It is just misbehaviour / poor parenting.”</p>
              <p className="mt-2 text-sm text-slate-700">
                Parents may attribute ADHD behaviours to discipline or parenting rather than a neurodevelopmental condition.
                In one Riyadh sample, many parents endorsed misbehaviour framings (Alrahili et al., 2022).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">“Sugar or diet changes are the treatment.”</p>
              <p className="mt-2 text-sm text-slate-700">
                Diet-related beliefs are common among both parents and teachers.
                This can delay engagement with evidence-based care and accommodations (Alrahili et al., 2022; Alzahrani et al., 2023; Alqifari et al., 2025).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">Medication fears and stigma</p>
              <p className="mt-2 text-sm text-slate-700">
                Concerns about side effects, dependency, and social judgement contribute to hesitancy.
                These concerns can be amplified by online misinformation (Alrahili et al., 2022; Alotaibi et al., 2023).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">Confusion with other profiles</p>
              <p className="mt-2 text-sm text-slate-700">
                Some studies highlight misidentification (e.g., confusing giftedness-related classroom behaviour with ADHD, or conflating ADHD with other conditions),
                which points to the need for structured referral and assessment pathways.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">“ADHD is only a childhood condition.”</p>
              <p className="mt-2 text-sm text-slate-700">
                In a Riyadh general-public sample, only a minority recognised ADHD as a lifelong condition, despite identifying inattention and hyperactivity as core symptoms (Khan et al., 2025).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">“You can detect ADHD with a blood test.”</p>
              <p className="mt-2 text-sm text-slate-700">
                University student surveys still find persistent diagnostic misconceptions, including belief that ADHD can be detected via a blood test—particularly among non-healthcare students (Kandasamy et al., 2025).
              </p>
            </div>
          </div>

          <Callout tone="neutral" icon={Globe} title="Why social media matters in the Saudi context">
            When large proportions of parents cite social media as their primary information source, misconceptions spread quickly and can become socially reinforced.
            A practical implication is that awareness work must compete in the same channels—not only through clinics or schools.
          </Callout>
        </Section>

        <Section
          id="implications"
          icon={CheckCircle2}
          title="Practical implications"
          subtitle="How professionals can use this evidence"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">For schools and education leaders</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Prioritise mandatory, skills-focused ADHD training for teachers (identification, classroom management, referral pathways) (Alzahrani et al., 2023; Alshareef et al., 2023).</li>
                <li>Standardise ADHD content across teacher preparation tracks; introduce core concepts early and reinforce them across years (Al-Hwaiti, 2019).</li>
                <li>Pair training with simple tools: checklists, accommodation menus, and clear parent–school communication templates.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">For clinicians and health services</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Expect families (and many adults) to arrive with strong prior beliefs shaped by online content; ask directly where information came from (Alotaibi et al., 2023; Khan et al., 2025).</li>
                <li>Use brief, structured psychoeducation that addresses myths (diet, “misbehaviour”), and explains combined treatment approaches.</li>
                <li>Engage schools: the referral and support ecosystem is strongest when teacher knowledge and parent confidence are aligned.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">For programme designers and policy</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Target the three main bottlenecks: parents/public, in-service teachers, and pre-service training pipelines.</li>
                <li>Invest in national messaging that is culturally resonant, clinically accurate, and optimised for digital distribution.</li>
                <li>Measure progress with repeatable indicators (knowledge scores, referral rates, time-to-diagnosis, and family experience).</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-extrabold text-slate-900">For researchers</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>Move beyond cross-sectional knowledge surveys: test interventions (teacher training, parent programmes, public campaigns) using robust designs.</li>
                <li>Examine regional and demographic variation, and the role of social media ecosystems.</li>
                <li>Include the lived experience of pupils and families as an outcome alongside knowledge metrics.</li>
              </ul>
            </div>
          </div>

          <Callout tone="success" icon={CheckCircle2} title="A feasible near-term win">
            Teacher motivation is frequently high, while knowledge is low.
            Structured training and practical classroom supports can therefore produce measurable improvement relatively quickly (Alzahrani et al., 2023).
          </Callout>
        </Section>

        <Section
          id="measurement"
          icon={BarChart3}
          title="How this topic is measured in Saudi studies"
          subtitle="Interpreting the evidence base" 
        >
          <p>
            Most Saudi studies in this area use quantitative, cross-sectional surveys. A commonly used instrument is the
            <span className="font-extrabold text-slate-900"> Knowledge of Attention Deficit Disorders Scale (KADDS)</span>, which captures knowledge and misconceptions
            across three domains: general knowledge, symptoms/diagnosis, and treatment.
          </p>
          <p>
            Recent 2025 studies extend this pattern to additional populations (general public, university students, and primary care physicians), typically using brief knowledge/attitude items or score thresholds (e.g., poor/moderate/good) to identify actionable gaps and misconceptions.
          </p>
          <p>
            This evidence base is highly useful for identifying gaps and prioritising interventions.
            However, cross-sectional designs cannot establish whether improving knowledge leads to improved outcomes without intervention research.
          </p>
          <Callout tone="neutral" icon={AlertTriangle} title="Common limitations to keep in mind">
            Self-report surveys can overestimate competence; samples may be region- or institution-specific; and “awareness” is sometimes measured with very broad items.
            Note that KADDS was developed and validated for teachers, so its use with other populations (e.g., parents, medical students) may require interpretation.
            When using these findings for planning, prioritise replicated patterns across studies and test change using evaluations.
          </Callout>
        </Section>

        <Section
          id="knowledge-to-outcomes"
          icon={BarChart3}
          title="Do knowledge gains translate into better outcomes?"
          subtitle="What Saudi intervention studies suggest (and what remains untested)"
        >
          <p>
            Cross-sectional surveys can identify where knowledge gaps are, but they cannot establish whether closing those gaps changes real-world outcomes.
            A small number of Saudi educational-intervention studies provide useful signals about what changes after training — and what still needs stronger evaluation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">Teacher training studies</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>
                  A short educational intervention for primary school teachers in Jazan increased ADHD knowledge scores on post-test (Eltyeb et al., 2023).
                </li>
                <li>
                  A quasi-experimental in-service training programme in the Eastern Region showed higher post-test knowledge among trained teachers compared with controls (Melhem, 2020).
                </li>
                <li>
                  These studies primarily demonstrate <span className="font-semibold">knowledge gain</span>; they do not report downstream outcomes such as classroom practice, referral behaviour, or pupil outcomes.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-extrabold text-slate-900">Parent education study</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                <li>
                  A 10-session educational intervention for mothers of children with ADHD reported improved maternal awareness/knowledge after the intervention (Alseraty et al., 2024).
                </li>
                <li>
                  The same study reported reductions in self-reported communication challenges and improved awareness of core symptom domains.
                </li>
                <li>
                  These are promising <span className="font-semibold">proximal outcomes</span>, but they do not establish child-level or longer-term functional outcomes.
                </li>
              </ul>
            </div>
          </div>

          <Callout tone="warning" icon={AlertTriangle} title="What the Saudi intervention evidence does not yet establish">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Retention:</span> whether knowledge gains persist months later without reinforcement.</li>
              <li><span className="font-semibold">Behaviour change:</span> whether training changes identification, referral, classroom supports, or family help-seeking.</li>
              <li><span className="font-semibold">Child outcomes:</span> whether improved adult knowledge leads to measurable improvements in functioning, wellbeing, or school outcomes.</li>
            </ul>
          </Callout>

          <Callout tone="success" icon={CheckCircle2} title="What it does support for planning">
            <ul className="list-disc pl-5 space-y-1">
              <li>Knowledge and awareness are <span className="font-semibold">modifiable</span> through structured education.</li>
              <li>Evaluation should include at least one <span className="font-semibold">practice or pathway indicator</span>, not only knowledge scores.</li>
              <li>Where feasible, include <span className="font-semibold">follow-up measurement</span> (e.g., 3–6 months) to test retention.</li>
            </ul>
          </Callout>
        </Section>

        <Section
          id="related-briefs"
          icon={Link2}
          title="Related Topic Guides">
          <p className="text-sm text-slate-700">
            These Topic Guides provide complementary perspectives on ADHD that relate to knowledge, attitudes, and awareness.
          </p>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            <a
              className="group rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-white"
              href={getHref('topic-guide-what-is-adhd', basePath, locale)}
            >
              <p className="font-extrabold text-slate-900 group-hover:text-orange-700">What is ADHD — Myths vs Evidence</p>
              <p className="mt-1 text-sm text-slate-600">Separating fact from fiction about ADHD as a neurodevelopmental condition.</p>
            </a>
            <a
              className="group rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-white"
              href={getHref('topic-guide-disability', basePath, locale)}
            >
              <p className="font-extrabold text-slate-900 group-hover:text-orange-700">Is ADHD a Disability?</p>
              <p className="mt-1 text-sm text-slate-600">Exploring legal frameworks, rights, accommodations, and implications for individuals with ADHD.</p>
            </a>
          </div>
        </Section>

        <Section
          id="key-sources"
          icon={BookOpen}
          title="References">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="space-y-4 text-sm text-slate-700">
              <ReferenceLink doiUrl="https://doi.org/10.7759/cureus.40057" basePath={basePath}>
                Alzahrani, R. H., El-Fatah, N. K. A., ALzahrani, R. H., & El-Fatah, N. K. A. (2023). Factors Affecting Knowledge of Attention-Deficit Hyperactivity Disorder Among Female Primary Schoolteachers in Taif City, Saudi Arabia. <em>Cureus</em>, 15(6).
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.4103/jfmpc.jfmpc_185_23" basePath={basePath}>
                Alshareef, H. H., Elzahrany, S. R., Alharthi, R. A., Alsulmai, A. A., Aljabri, S. G., Alamri, G. E., Alharbi, I., & Alkhotani, A. M. (2023). Knowledge of and attitude toward attention-deficit/ hyperactivity disorder (ADHD) assessed among primary schoolteachers of Makkah City in Saudi Arabia. <em>Journal of Family Medicine and Primary Care</em>, 12(10), 2230.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.3390/psych4020020" basePath={basePath}>
                Alrahili, N., Harthi, M. A. A., Ababtain, S. J., Sharif, S. S. A., Alnuwaysir, M. A., & Huzaimi, R. F. A. (2022). Parental Attitudes and Beliefs toward Attention Deficit Hyperactivity Disorder in Prince Sultan Military Medical City, Riyadh City. <em>Psych</em>, 4(2), 238–246.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.7759/cureus.37945" basePath={basePath}>
                Alotaibi, R. S., Alghamdi, G. A., Alloqmani, A., Almuntashiri, N. S., Alharbi, K. A., Samkari, J. A., Tawakul, A. A., Babateen, O., Alotaibi, R. S., Alghamdi, G. A., Alloqmani, A., Almuntashiri, N. S., Alharbi, K., Samkari, J. A., Tawakul, A. A., & Babateen, O. (2023). Knowledge and Awareness of Parents About the Difference Between Attention Deficit Hyperactivity Disorder and Childhood Absence Epilepsy in the Paediatric Population Makkah, Saudi Arabia: A Cross-Sectional Study. <em>Cureus</em>, 15(4).
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.5539/gjhs.v11n3p32" basePath={basePath}>
                Al-Hwaiti, M. (2019). Saudi Arabian Pre-Service Special Education Teachers Knowledge of Attention-Deficit/Hyperactivity Disorder (ADHD). <em>Global Journal of Health Science</em>, 11(3), Article 3.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.31871/wjrr.4.3.14" basePath={basePath}>
                Qashqari, H. F., Alsulami, A. O., Kamal, E. K., & Jan, M. M. S. (2017). ADHD Awareness Among Medical Students. <em>World Journal of Research and Review</em>, 4(3), 61–64.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.4103/jfmpc.jfmpc_961_19" basePath={basePath}>
                Alsuhaibani, M., Alsaawi, O., Alsuwayti, K., & Alahmed, I. (2020). Awareness and knowledge of attention deficit and hyperactivity disorder among medical students of Qassim University in Saudi Arabia. <em>Journal of Family Medicine and Primary Care</em>, 9(2), 1191–1196.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.7759/cureus.79108" basePath={basePath}>
                Alqifari, A., Alwabel, A., Alamri, R., Alatawi, Y., Alyahya, A., Almalki, N., Mohammed, K., Alroaid, H., Alotaibi, H., & Alswaidan, S. (2025). Primary School Teachers' Knowledge and Misconceptions Regarding Attention Deficit Hyperactivity Disorder (ADHD) in Qassim, Saudi Arabia. <em>Cureus</em>, 17(2), e79108.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.7759/cureus.91607" basePath={basePath}>
                Khan, S., Al Qahtani, A. Y., Aburas, A. K., et al. (2025). Evaluation of General Public Awareness, Knowledge, and Attitude Towards Attention-Deficit/Hyperactivity Disorder in the Riyadh Region of Saudi Arabia. <em>Cureus</em>, 17(9), e91607.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.3389/fpubh.2025.1679269" basePath={basePath}>
                Kandasamy, K. R., Alharbi, A. M., Albaiz, M. A., et al. (2025). Bridging the gap: a cross-sectional study on knowledge and awareness of attention-deficit/hyperactivity disorder among healthcare and non-healthcare university students in Saudi Arabia. <em>Frontiers in Public Health</em>.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.5742/mewfm.2025.805257860" basePath={basePath}>
                AlGhassab, M. A., et al. (2025). Assessment of Knowledge, Attitude and Performance of Primary Healthcare Physicians in Tabuk City, Saudi Arabia. <em>World Family Medicine / Middle East Journal of Family Medicine</em>, 23(5).
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.7759/cureus.44509" basePath={basePath}>
                Eltyeb, E. E., Gohal, G. A., Alhazmi, N. H., et al. (2023). The Efficacy of Educational Interventions in Improving School Teachers' Knowledge of Attention Deficit Hyperactivity Disorder. <em>Cureus</em>, 15(9), e44509.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.26803/ijlter.19.12.16" basePath={basePath}>
                Melhem, T. (2020). Efficacy of Teachers' In-Service Training for Increasing Their Knowledge of Attention Deficit Hyperactivity Disorder in Eastern Region, Saudi Arabia. <em>International Journal of Learning, Teaching and Educational Research</em>, 19(12), 295–312.
              </ReferenceLink>
              <ReferenceLink doiUrl="https://doi.org/10.4103/jin.jin_90_24" basePath={basePath}>
                Alseraty, W. H. H., Abdullhameed, S. M., & Alenezi, A. (2024). Impact of educational interventions on mothers' awareness and communication with their attention–deficit hyperactivity disorder children. <em>Journal of Integrative Nursing</em>, 6, 187–195.
              </ReferenceLink>
            </div>
          </div>
        </Section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="lg:sticky lg:top-24 space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-extrabold text-slate-900">On this page</p>
            <div className="mt-3 space-y-1">
              <TocLink href="#what-we-mean">Definitions and framework</TocLink>
              <TocLink href="#saudi-evidence-map">What the Saudi evidence shows</TocLink>
              <TocLink href="#misconceptions">Misconceptions and narratives</TocLink>
              <TocLink href="#implications">Practical implications</TocLink>
              <TocLink href="#measurement">How it is measured</TocLink>
              <TocLink href="#knowledge-to-outcomes">Do knowledge gains translate into outcomes?</TocLink>
              <TocLink href="#related-briefs">Related Topic Guides</TocLink>
              <TocLink href="#key-sources">Key sources</TocLink>
            </div>
          </div>

          <Callout tone="info" icon={Users} title="Who is this guide for?">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Educators</span> (teachers, school leaders, special education staff)</li>
              <li><span className="font-semibold">Health services</span> (clinicians, primary care, allied health)</li>
              <li><span className="font-semibold">Programme and policy</span> (awareness campaigns, training programmes)</li>
              <li><span className="font-semibold">Researchers</span> (intervention design and evaluation)</li>
            </ul>
          </Callout>

          <Callout tone="warning" icon={AlertTriangle} title="Common planning pitfall">
            Treating “awareness” as the end goal can be misleading. The Saudi evidence suggests the bigger gap is often in
            <span className="font-semibold"> actionable knowledge</span> (how to recognise ADHD early, how to respond, where to refer, and what works).
          </Callout>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm font-extrabold text-slate-900">Next steps you can take</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-700"><Lightbulb size={16} /></span>
                Identify your target group (parents, teachers, trainees) and select the 3–5 misconceptions most relevant to them.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-700"><School size={16} /></span>
                If you are planning teacher training, include both <span className="font-semibold">knowledge</span> and <span className="font-semibold">classroom practice</span> outcomes.
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-orange-700"><Globe size={16} /></span>
                Build “digital-first” public messaging and measure reach and correction of misinformation.
              </li>
            </ul>
          </div>
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

export default TopicGuideSaudiArabiaKnowledgePage;
