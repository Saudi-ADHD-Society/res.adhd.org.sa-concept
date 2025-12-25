import React from 'react';
import { Users, AlertTriangle, Heart } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

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

const TopicGuideAdhdStigmaPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-red-600 text-sm font-bold mb-3">
        <Users size={16} />
        <span>Topic Guide</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        ADHD and Stigma
      </h1>
      <p className="text-slate-600 mb-4">
        ADHD-related stigma is a multidimensional barrier that shapes recognition, disclosure, help-seeking, and inclusion.
        In Saudi Arabia, ADHD stigma is situated within the broader context of mental health stigma, which remains a practical determinant of service uptake and social participation.
        International ADHD-specific evidence highlights how stereotypes, anticipated discrimination, and internalised shame can add a "second burden" on top of symptoms.
        This Topic Guide synthesises evidence on ADHD stigma across the lifespan, with a Saudi-first lens and Gulf/MENA context where relevant.
      </p>
    </div>

    {/* Layout: main + sidebar (placeholder content) */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main */}
      <div className="lg:col-span-8 space-y-6">
        <section
          id="why-stigma-matters"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
        >
          <h2 className="text-xl font-bold text-slate-900">Why stigma matters</h2>
          <div className="space-y-4">
            <p className="text-slate-600">
              In this section, we examine why stigma matters for ADHD care and inclusion. Stigma is not only an attitude problem; it is a health-systems, education, and labour-market problem.
              It shapes whether ADHD is seen as a legitimate neurodevelopmental condition, whether families feel safe to disclose,
              and whether people can access evidence-based support without reputational cost.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-900">Clinical impact</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                  <li>Delays in diagnosis and pathway navigation.</li>
                  <li>Reluctance to disclose symptoms or impairment.</li>
                  <li>Adherence and follow-up affected by fear of judgement.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-900">Education impact</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                  <li>Under-identification and late support, especially when symptoms are misread as “behaviour”.</li>
                  <li>Reduced willingness to request accommodations.</li>
                  <li>Peer and teacher responses that amplify exclusion.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-900">Work & social impact</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                  <li>Self-censorship around disclosure and support needs.</li>
                  <li>Social withdrawal and reduced participation.</li>
                  <li>Functional impairment compounded by shame and avoidance.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 font-bold">!</div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">What the evidence shows</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                    <li>
                      In a large Saudi study of individuals diagnosed with mental health disorders, perceived stigma (including embarrassment and anticipated discrimination) was common and was significantly associated with greater work and social role limitations (AlFattani et al., 2023).
                    </li>
                    <li>
                      In adult ADHD (international evidence), internalised stigma and anticipated discrimination are common and correlate with symptom burden, distress, lower self-esteem, poorer functioning, and reduced quality of life (Masuch et al., 2019).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-slate-600">
              Even when knowledge about mental health is improving, stigma can still operate through perceived social risk (loss of face,
              reputational harm, or future discrimination). For ADHD specifically, this can translate into late assessment, partial disclosure,
              fragmented follow-up, and inconsistent accommodation across schools and workplaces. This makes stigma reduction a functional inclusion issue, not just a matter of changing attitudes.
            </p>
          </div>
        </section>

        <section
          id="forms-of-stigma"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
        >
          <h2 className="text-xl font-bold text-slate-900">Forms of stigma and how they show up</h2>
          <div className="space-y-4">
            <p className="text-slate-600">
              In this section, we describe the different forms that ADHD stigma takes and how they manifest in practice. ADHD stigma typically blends "mental health stigma" with ADHD-specific narratives (for example, doubts about validity,
              moralised explanations, or medication fears). It can be direct (overt discrimination) or indirect (avoidance, silence, and systems
              that make support hard to access).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="text-sm font-semibold text-slate-900">Public stigma (stereotypes and social judgement)</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                  <li>“ADHD isn’t real” / “it’s just bad parenting” / “it’s an excuse”.</li>
                  <li>Over-association with disruptive behaviour (and under-recognition of inattentive presentations).</li>
                  <li>Medication narratives (personality change, dependency, “unnecessary stimulants”).</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  Adults with ADHD report that doubts about ADHD’s validity are among the most frequently perceived stereotypes (Masuch et al., 2019).
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="text-sm font-semibold text-slate-900">Self-stigma (internalised shame and self-blame)</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                  <li>Identity-level effects: “I’m lazy”, “I’m unreliable”, “I can’t succeed”.</li>
                  <li>Avoidance and withdrawal to reduce exposure to judgement.</li>
                  <li>Reduced help-seeking even when impairment is significant.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  Internalised stigma and anticipated discrimination are linked to worse psychosocial outcomes in adult ADHD (Masuch et al., 2019).
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="text-sm font-semibold text-slate-900">Courtesy stigma (family-associated stigma)</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                  <li>Parents fear being blamed or judged, which can delay assessment and disclosure.</li>
                  <li>Families may manage information tightly to avoid gossip or reputational harm.</li>
                  <li>Sibling and extended-family dynamics can shape support and acceptance.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  Stigma can operate through family-level reputational risk and the perceived consequences of disclosure (Saudi mental health stigma literature; AlFattani et al., 2023; AlAteeq et al., 2018).
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="text-sm font-semibold text-slate-900">Structural stigma (systems and policies)</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                  <li>Limited adult ADHD recognition pathways and inconsistent service availability.</li>
                  <li>School and workplace processes that make accommodations hard to request or sustain.</li>
                  <li>Confidentiality concerns that reduce uptake of mental health services.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  In Saudi Arabia, perceived stigma is associated with work and social role limitations, making stigma reduction a functional inclusion issue (AlFattani et al., 2023).
                </p>
              </div>
            </div>

            <p className="text-slate-600">
              Understanding these different forms of stigma helps identify where interventions are most needed and how stigma operates across clinical, educational, workplace, and social contexts.
            </p>
          </div>
        </section>

        <section
          id="reducing-stigma"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
        >
          <h2 className="text-xl font-bold text-slate-900">Reducing stigma and promoting inclusion</h2>
          <div className="space-y-4">
            <p className="text-slate-600">
              In this section, we outline practical strategies for reducing stigma and promoting inclusion across multiple levels. Stigma reduction is most effective when it targets multiple levels at once: public narratives, service design,
              school/workplace practice, and individual coping. For ADHD, an additional priority is correcting disorder-specific misconceptions
              (validity, causes, and treatment) while preserving dignity and confidentiality.
            </p>

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Disclosure and "selective openness"</p>
              <p className="mt-2 text-sm text-slate-700">
                A recurring ADHD stigma theme is the disclosure dilemma: disclosure can unlock support (care plans, classroom accommodations,
                workplace adjustments), but can also trigger stereotyping or reduced trust. ADHD literature suggests that conservative,
                context-sensitive disclosure strategies ("preventative disclosure") can improve peer approach behaviour and perceived treatment benefit in vignette studies (Mueller et al., 2012).
                This evidence is drawn from international ADHD studies and should be interpreted cautiously in the Saudi context, where disclosure decisions are strongly shaped by family reputation and confidentiality concerns (Mueller et al., 2012; Alageel et al., 2025).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">A practical note for Saudi campaigns</p>
              <p className="mt-2 text-sm text-slate-700">
                Increasing knowledge alone may not automatically reduce stigma. In one study of Arab parents, knowledge and stigma were not directly correlated, suggesting that stigma can persist through social norms and reputational concerns even when factual knowledge improves (Alkrisat, 2025). This pattern is consistent with broader Saudi mental health stigma findings (AlAteeq et al., 2018; Alkrisat, 2025).
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">Clinical levers</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
                  <li><span className="font-semibold">Stigma-aware assessment:</span> explicitly normalise ADHD as a neurodevelopmental condition and address validity doubts early.</li>
                  <li><span className="font-semibold">Confidentiality-by-design:</span> explain privacy boundaries and documentation pathways in plain language.</li>
                  <li><span className="font-semibold">Disclosure planning:</span> support families and adults to make context-sensitive disclosure decisions (what to disclose, to whom, and for what purpose), acknowledging reputational and social risk.</li>
                  <li><span className="font-semibold">Address self-stigma directly:</span> incorporate brief interventions that target shame, self-blame, and avoidance.</li>
                  <li><span className="font-semibold">Treatment narratives:</span> proactively discuss medication fears and the difference between symptom support and identity.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  ADHD stigma correlates with distress, functioning and quality of life, and may be modifiable through cognitive-behavioural approaches (Masuch et al., 2019).
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">Education levers</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
                  <li><span className="font-semibold">Shift from “behaviour” to “support needs”:</span> reduce moralised framing and focus on function and accommodation.</li>
                  <li><span className="font-semibold">Protect the learner:</span> avoid public labelling; embed low-stigma supports (universal design, quiet spaces, flexible assessment).</li>
                  <li><span className="font-semibold">Disclosure pathways:</span> define who needs to know, how information is documented, and how confidentiality is preserved within the school system.</li>
                  <li><span className="font-semibold">Parent partnership:</span> anticipate courtesy stigma and offer safe, confidential routes for discussion.</li>
                  <li><span className="font-semibold">Teacher training:</span> include inattentive presentations and adolescent/adult ADHD where relevant.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">Workplace and policy levers</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
                  <li><span className="font-semibold">Rights-based inclusion:</span> define reasonable adjustments and anti-discrimination expectations.</li>
                  <li><span className="font-semibold">Stigma-sensitive pathways:</span> reduce administrative friction for referrals, follow-up, and accommodation requests.</li>
                  <li><span className="font-semibold">Measure what matters:</span> track perceived stigma and role limitations alongside service utilisation and outcomes.</li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">
                  Perceived stigma in Saudi Arabia is linked to work and social role limitations, reinforcing the policy case for stigma reduction as an inclusion strategy (AlFattani et al., 2023).
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">Public communication levers</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
                  <li><span className="font-semibold">Use precise, non-moral language:</span> avoid “lazy”, “undisciplined”, “spoiled”.</li>
                  <li><span className="font-semibold">Correct common myths:</span> emphasise impairment, persistence into adulthood, and the role of treatment + skills support.</li>
                  <li><span className="font-semibold">Avoid “one story” ADHD:</span> include girls/women, inattentive ADHD, adolescents, and adults.</li>
                  <li><span className="font-semibold">Be careful with social media:</span> misinformation can amplify stigma and delay help-seeking (AlFattani et al., 2023; AlAteeq et al., 2018).</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Quality indicators</p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg bg-white border border-emerald-100 p-3">
                  <p className="font-semibold text-emerald-900">Clinics</p>
                  <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                    <li>Explicitly address validity doubts.</li>
                    <li>Offer stigma-aware psychoeducation.</li>
                    <li>Normalise support as functional care.</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white border border-emerald-100 p-3">
                  <p className="font-semibold text-emerald-900">Schools</p>
                  <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                    <li>Confidential accommodation routes.</li>
                    <li>Staff training beyond “disruptive”.</li>
                    <li>Family partnership without blame.</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white border border-emerald-100 p-3">
                  <p className="font-semibold text-emerald-900">Policy</p>
                  <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                    <li>Stigma indicators in monitoring.</li>
                    <li>Clear referral pathways.</li>
                    <li>Workplace inclusion guidance.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Key questions for expert users</p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-800">For clinicians</p>
                  <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                    <li>How might stigma be shaping this person’s disclosure, engagement, or adherence?</li>
                    <li>Have validity doubts or medication fears been addressed explicitly?</li>
                    <li>Is confidentiality clearly explained and trusted?</li>
                    <li>Are self-stigma and shame contributing to functional impairment?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">For educators</p>
                  <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                    <li>Are behaviours being interpreted through a moral or a support-needs lens?</li>
                    <li>Do accommodation processes protect confidentiality?</li>
                    <li>How might courtesy stigma be affecting parent engagement?</li>
                    <li>Are inattentive and adolescent presentations being overlooked?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">For policymakers</p>
                  <ul className="mt-2 space-y-1 text-slate-700 list-disc pl-4">
                    <li>Where do stigma and confidentiality concerns disrupt care pathways?</li>
                    <li>Are adult ADHD services and referral routes clearly defined?</li>
                    <li>Is stigma measured alongside service utilisation and outcomes?</li>
                    <li>Do workplace policies support disclosure without penalty?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Key evidence gaps for the Saudi ADHD agenda</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                <li>ADHD-specific stigma prevalence and mechanisms in Saudi adolescents and adults (beyond general mental health disorder stigma).</li>
                <li>School-based stigma dynamics (teacher beliefs, peer stigma, and accommodation access) across regions and school types.</li>
                <li>Workplace disclosure and accommodations for adult ADHD in Saudi Arabia.</li>
                <li>Intervention studies testing whether stigma reduction improves help-seeking, adherence, and functional outcomes.</li>
              </ul>
            </div>

            <p className="text-slate-600">
              Reducing ADHD stigma requires coordinated action across clinical, educational, policy, and public communication domains. The strategies outlined above provide a framework for creating stigma-aware systems that support disclosure, engagement, and inclusion while respecting confidentiality and family reputation concerns.
            </p>
          </div>
        </section>

        <section
          id="references"
          className="scroll-mt-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
        >
          <h2 className="text-xl font-bold text-slate-900">References</h2>
          <div className="space-y-4">
            <ul className="space-y-1 text-sm text-slate-700 list-disc pl-4">
              <li>AlFattani et al. (2023). Effect of perceived stigma on work and social roles among individuals with mental health disorders in Saudi Arabia.</li>
              <li>Masuch et al. (2019). Internalised stigma, anticipated discrimination and perceived public stigma in adults with ADHD.</li>
              <li>Mueller et al. (2012). Stigma in attention deficit hyperactivity disorder.</li>
              <li>Lebowitz (2016). Stigmatisation of ADHD: a developmental review.</li>
              <li>BinDhim et al. (2024). Cultural adaptation and validation of the Mental Illness Associated Stigma Scale for Arabic-speaking populations.</li>
              <li>AlAteeq et al. (2018). The experience and impact of stigma in Saudi people with a mood disorder.</li>
              <li>Alageel et al. (2025). Factors influencing decisions to seek mental healthcare in the Arab Gulf states (qualitative synthesis).</li>
              <li>Krstanoska-Blazeska et al. (2021). Mental health disorder stigma among Arabic-speaking religious and community leaders (contextual insights).</li>
              <li>Alkrisat, S. (2025). Examining the Perceived Knowledge and Stigmatization of Attention-Deficit/Hyperactivity (ADHD) Disorder Among Arab Parents [Doctoral dissertation, Alliant International University]. https://www.proquest.com/openview/4f63def3c3fa2e260dabddd3c817960c/1?cbl=18750&amp;diss=y&amp;pq-origsite=gscholar</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="lg:sticky lg:top-24 space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-slate-900">On this page</p>
            <div className="mt-3 space-y-1 text-sm">
              <a
                href="#why-stigma-matters"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Why stigma matters
              </a>
              <a
                href="#forms-of-stigma"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Forms of stigma
              </a>
              <a
                href="#reducing-stigma"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                Reducing stigma and promoting inclusion
              </a>
              <a
                href="#references"
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900"
              >
                References
              </a>
            </div>
          </div>

          <Callout tone="info" icon={Users} title="Who is this guide for?">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Clinicians</span> (diagnosis, disclosure, engagement, adherence, comorbidity care)</li>
              <li><span className="font-semibold">Educators</span> (school identification, accommodations, classroom climate, parent trust)</li>
              <li><span className="font-semibold">Policymakers</span> (pathways, workforce, rights-based inclusion, stigma-aware systems)</li>
              <li><span className="font-semibold">Researchers</span> (intervention design, evaluation, evidence synthesis)</li>
            </ul>
          </Callout>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              <Heart size={14} /> Key messages for practice
            </div>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">Name stigma explicitly</p>
                <p className="mt-1 text-slate-700">
                  In consultations and school meetings, ask directly about experiences of shame, anticipated discrimination, or reluctance to disclose. For example: "Have you experienced judgment or shame related to ADHD?" This normalizes the topic and opens disclosure.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">Design for confidentiality</p>
                <p className="mt-1 text-slate-700">
                  Create clear privacy boundaries: explain who sees records, how information is shared, and what families can control. Use plain language consent processes. Assume families will manage information tightly; make pathways safe, simple, and private.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">Treat stigma as a functional barrier</p>
                <p className="mt-1 text-slate-700">
                  Measure stigma's impact on work and social participation, not just attitudes. Track role limitations alongside symptoms. Stigma is linked to social and work role limitations—this is an inclusion and productivity issue (AlFattani et al., 2023).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-800 text-sm font-semibold">
              <AlertTriangle size={16} />
              <span>Campaign and training cues</span>
            </div>
            <ul className="text-sm text-slate-700 list-disc pl-4 space-y-2">
              <li><span className="font-semibold">Address social risk explicitly:</span> acknowledge reputation concerns, confidentiality needs, and family-level stigma. Do not rely on "facts only"—stigma persists through social norms even when knowledge improves.</li>
              <li><span className="font-semibold">Show diverse ADHD presentations:</span> include inattentive ADHD, girls/women, adolescents, and adults to counter single stereotypes. Use multiple stories, not one narrative.</li>
              <li><span className="font-semibold">Link messaging to pathways:</span> every awareness campaign must include clear referral routes and service information. Pair awareness with access—messaging without pathways can backfire (frustration + mistrust).</li>
              <li><span className="font-semibold">Build capacity in schools and primary care:</span> provide language guides, referral protocols, and accommodation frameworks. Train frontline staff on language, referral, and accommodation routes.</li>
            </ul>
          </div>
        </div>
      </aside>
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

export default TopicGuideAdhdStigmaPage;
