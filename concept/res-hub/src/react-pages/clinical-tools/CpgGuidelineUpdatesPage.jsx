import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CpgGuidelineUpdatesPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Guideline Updates</h2>
      <p className="text-slate-500 mt-2">
        History of updates and revisions to the Saudi ADHD CPG.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <p className="text-slate-600 text-sm md:text-base">
        Below is a chronological summary of minor updates to the Saudi ADHD CPG as reviewed and approved by the Medical and Psychological Committee.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm font-semibold text-slate-900 mb-2">Note:</p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
          <li>
            Updates 2022-1a, 2022-1b, 2022-2, 2022-3a, 2022-3b, 2022-4a, 2022-4b, 2022-4c are based upon{' '}
            <a 
              href="https://www.nice.org.uk/guidance/ng87/chapter/Update-information" 
              target="_blank" 
              rel="noreferrer noopener"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              minor updates to the source CPG published by NICE
            </a>.
          </li>
          <li>
            Additional updates to the source CPG (1.5.x) affected the NICE discussion section (rationale and impact) on the NICE website only.
          </li>
        </ul>
      </div>

      {/* Update 2022-1a */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-1a" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-1a</h2>
        <p className="text-slate-600 italic mb-4">
          It is now recommended ["should"] to perform a cardiovascular assessment even in the absence of family history or risk factors.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.3</strong> Before starting medication for ADHD, people with ADHD should have a full assessment, which should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-700 text-sm">
              <li> […]</li>
              <li>a review of physical health, including:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>[…]</li>
                  <li>a cardiovascular assessment <span className="text-red-600 font-semibold">if there is family history or other risk factors</span></li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.3</strong> Before starting medication for ADHD, people with ADHD should have a full assessment, which should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-700 text-sm">
              <li> […]</li>
              <li>a review of physical health, including:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>[…]</li>
                  <li><span className="text-emerald-600 font-semibold">cardiovascular assessment</span></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Update 2022-1b */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-1b" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-1b</h2>
        <p className="text-slate-600 italic mb-4">
          ECG was previously recommended if it "may affect QT interval", but is now recommended in the presence of [7.4]: "history of congenital heart disease or previous cardiac surgery, history of sudden death in a first-degree relative under 40 years suggesting a cardiac disease, shortness of breath on exertion compared with peers, fainting on exertion or in response to fright or noise, palpitations that are rapid, regular and start and stop suddenly (fleeting occasional bumps are usually ectopic and do not need investigation), chest pain suggesting cardiac origin, signs of heart failure, a murmur heard on cardiac examination, blood pressure that is classified as hypertensive for adults"
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.3</strong> Before starting medication for ADHD, people with ADHD should have a full assessment, which should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-700 text-sm">
              <li> […]</li>
              <li>a review of physical health, including:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>[…]</li>
                  <li>an electrocardiogram (ECG) <span className="text-red-600 font-semibold">if the treatment may affect the QT interval</span></li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.3</strong> Before starting medication for ADHD, people with ADHD should have a full assessment, which should include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-700 text-sm">
              <li> […]</li>
            </ul>
            <p className="text-slate-700 text-sm mt-2">
              An electrocardiogram (ECG) <span className="text-emerald-600 font-semibold">is not needed before starting stimulants, atomoxetine or guanfacine, unless the person has any of the features in recommendation 7.4, or a co-existing condition that is being treated with a medicine that may pose an increased cardiac risk.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Update 2022-2 */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-2" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-2</h2>
        <p className="text-slate-600 italic mb-4">
          Added note that MPH for children aged 5 years is considered off-label.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.6</strong> Offer methylphenidate (either short or long acting) as the first line pharmacological treatment for children aged 5 years and over and young people with ADHD.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.6</strong> Offer methylphenidate (either short or long acting) as the first line pharmacological treatment for children aged 5 years and over and young people with ADHD, <span className="text-emerald-600 font-semibold">taking into consideration that this is an off-label use for children aged between 5 and 6 years.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Update 2022-3a */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-3a" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-3a</h2>
        <p className="text-slate-600 mb-4">
          Added note that LDX is considered off-label for "adults with no ADHD symptoms in childhood".
        </p>
        <p className="text-slate-600 italic mb-4 text-sm">
          While this change adopted from NICE may seem to imply so-called "adult-onset ADHD", for which there is insufficient evidence, the medical and psychological committee members agreed that it actually refers to adult-diagnosed ADHD with an absence of evidence for childhood-onset, such as when an adult cannot remember ("absence of evidence is not evidence of absence").
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.10</strong> Offer lisdexamfetamine or methylphenidate as first-line pharmacological treatment for adults with ADHD.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.10</strong> Offer lisdexamfetamine or methylphenidate as first-line pharmacological treatment for adults with ADHD. <span className="text-emerald-600 font-semibold">This is an off-label use of lisdexamfetamine for adults with no ADHD symptoms in childhood.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Update 2022-3b */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-3b" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-3b</h2>
        <p className="text-slate-600 italic mb-4">
          Added note that some preparations of MPH are not licenced for ADHD in adults.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.10</strong> Offer lisdexamfetamine or methylphenidate as first-line pharmacological treatment for adults with ADHD.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.10</strong> Offer lisdexamfetamine or methylphenidate as first-line pharmacological treatment for adults with ADHD. <span className="text-emerald-600 font-semibold">This is an off-label use of lisdexamfetamine for adults with no ADHD symptoms in childhood.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Update 2022-4a */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-4a" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-4a</h2>
        <p className="text-slate-600 italic mb-4">
          Added note that ATX is off label for "adults with no ADHD symptoms in childhood".
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>8.14</strong> If tics are stimulant related, reduce the stimulant dose, or consider changing to guanfacine (in children aged 5 years and over and young people only), atomoxetine, clonidine, or stopping medication.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>8.14</strong> If tics are stimulant related, reduce the stimulant dose, or consider changing to guanfacine (in children aged 5 years and over and young people only), atomoxetine <span className="text-emerald-600 font-semibold">(off-label use for adults with no ADHD symptoms in childhood)</span>, clonidine, or stopping medication.
            </p>
          </div>
        </div>
      </div>

      {/* Update 2022-4b */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-4b" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-4b</h2>
        <p className="text-slate-600 italic mb-4">
          Added note that clonidine is "off-label use for children".
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>8.14</strong> If tics are stimulant related, reduce the stimulant dose, or consider changing to guanfacine (in children aged 5 years and over and young people only), atomoxetine (off-label use for adults with no ADHD symptoms in childhood), clonidine, or stopping medication.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>8.14</strong> If tics are stimulant related, reduce the stimulant dose, or consider changing to guanfacine (in children aged 5 years and over and young people only), atomoxetine (off-label use for adults with no ADHD symptoms in childhood), clonidine <span className="text-emerald-600 font-semibold">(off-label use for children)</span>, or stopping medication.
            </p>
          </div>
        </div>
      </div>

      {/* Update 2022-4c */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-4c" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-4c</h2>
        <p className="text-slate-600 italic mb-4">
          Added restriction on clonidine use in primary and secondary care.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>8.14</strong> If tics are stimulant related, reduce the stimulant dose, or consider changing to guanfacine (in children aged 5 years and over and young people only), atomoxetine (off-label use for adults with no ADHD symptoms in childhood), clonidine (off-label use for children), or stopping medication.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>8.14</strong> If tics are stimulant related, reduce the stimulant dose, or consider changing to guanfacine (in children aged 5 years and over and young people only), atomoxetine (off-label use for adults with no ADHD symptoms in childhood), clonidine (off-label use for children), or stopping medication. <span className="text-emerald-600 font-semibold">Clonidine should only be considered for people under 18 years after advice from a tertiary ADHD service.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Update 2022-5 */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2022-5" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2022-5</h2>
        <p className="text-slate-600 italic mb-4">
          Added cross-reference to related Saudi guidelines to add value for guideline users.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>2.1</strong> Be aware that people in the following groups may have increased prevalence of ADHD compared with the general population:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-700 text-sm">
              <li>[…]</li>
              <li>people with neurodevelopmental disorders (for example, autism spectrum disorder, tic disorders, intellectual disability and specific learning difficulties).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>2.1</strong> Be aware that people in the following groups may have increased prevalence of ADHD compared with the general population:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-700 text-sm">
              <li>[…]</li>
              <li>people with neurodevelopmental disorders (for example, autism spectrum disorder, tic disorders, intellectual disability and specific learning difficulties). <span className="text-emerald-600 font-semibold">See p24, <em>Early Recognition and Diagnosis</em>, Evidence-Based CPG for Management of Children with ASD (Saudi Health Council, 2022).</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Update 2022-6 */}
      <div id="Update-2022-6" className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Update 2022-6</h2>
        <p className="text-slate-600 italic mb-4">
          Added cross-reference to related Saudi guidelines to add value for guideline users.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.17</strong> Offer the same medication choices to people with ADHD and anxiety disorder, tic disorder or autism spectrum disorder as other people with ADHD.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.17</strong> Offer the same medication choices to people with ADHD and anxiety disorder, tic disorder or autism spectrum disorder as other people with ADHD. <span className="text-emerald-600 font-semibold">See p52, <em>Pharmacological Interventions,</em> Evidence-Based CPG for Management of Children with ASD (Saudi Health Council, 2022).</span>
            </p>
          </div>
        </div>
      </div>

      {/* Update 2023-1 */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2023-1" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2023-1</h2>
        <p className="text-slate-600 italic mb-4">
          A change of wording to clarify that recommendation 7.21 only covers preparations of methylphenidate
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.21</strong> Think about using <span className="text-red-600 font-semibold">immediate- and modified-release preparations of stimulants to optimise effect (for example,</span> a modified-release preparation of methylphenidate in the morning and an immediate-release preparation of methylphenidate at another time of the day to extend the duration of effect<span className="text-red-600 font-semibold">)</span>.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <p className="text-slate-700 text-sm">
              <strong>7.21</strong> Think about using a modified-release preparation of methylphenidate in the morning and an immediate-release preparation of methylphenidate at another time of the day to extend the duration of effect.
            </p>
          </div>
        </div>
      </div>

      {/* Update 2023-2 */}
      <div className="border-b border-slate-200 pb-8 scroll-mt-20">
        <h2 id="Update-2023-2" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2023-2</h2>
        <p className="text-slate-600 italic mb-4">
          A change of wording because ADHD is recognised as a neurodevelopmental disorder
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
              <li>
                <span id="rec2.1"><strong>2.1</strong></span> Be aware that people in the following groups may have increased prevalence of <abbr title="Attention Deficit Hyperactivity Disorder">ADHD</abbr> compared with the general population:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>[…]</li>
                  <li>people with neurodevelopmental disorders (for example, autism spectrum disorder, tic disorders, intellectual disability and specific learning difficulties). See p24, Early Recognition and Diagnosis, Evidence-Based CPG for Management of Children with ASD (Saudi Health Council, 2022).</li>
                  <li>[…]</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
              <li>
                <span id="rec2.1"><strong>2.1</strong></span> Be aware that people in the following groups may have increased prevalence of <abbr title="Attention Deficit Hyperactivity Disorder">ADHD</abbr> compared with the general population:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>[…]</li>
                  <li>people with <span className="text-emerald-600 font-semibold">other</span> neurodevelopmental disorders (for example, autism spectrum disorder, tic disorders, intellectual disability and specific learning difficulties). See p24, Early Recognition and Diagnosis, Evidence-Based CPG for Management of Children with ASD (Saudi Health Council, 2022).</li>
                  <li>[…]</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Update 2023-3 */}
      <div className="scroll-mt-20">
        <h2 id="Update-2023-3" className="text-2xl font-bold text-slate-900 mb-3 scroll-mt-20">Update 2023-3</h2>
        <p className="text-slate-600 italic mb-4">
          Addition of a brief note about transcutaneous electrical stimulation of the trigeminal nerve for ADHD.
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Before:</h3>
            <p className="text-slate-700 text-sm italic">(None)</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">After:</h3>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
              <li>
                <span className="text-emerald-600 font-semibold">5.19 Evidence on the safety and efficacy of transcutaneous electrical stimulation of the trigeminal nerve for attention deficit hyperactivity disorder (ADHD) is inadequate in quality and quantity. Therefore, this procedure should only be used in the context of research.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CpgGuidelineUpdatesPage;
