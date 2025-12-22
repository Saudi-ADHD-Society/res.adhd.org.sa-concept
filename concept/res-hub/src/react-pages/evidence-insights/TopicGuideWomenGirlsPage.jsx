import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const TopicGuideWomenGirlsPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-pink-600 text-sm font-bold mb-3">
        <Users size={16} />
        <span>Topic Guide</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        ADHD in Women & Girls: Identification and Treatment Considerations
      </h1>
      <p className="text-slate-600 mb-4">
        Perhaps as a result of the stereotype of ADHD being that of a disruptive young boy<sup className="text-emerald-700">1</sup>, ADHD is thought to be under-recognised in girls and women<sup className="text-emerald-700">2</sup>. The following recommendations by expert consensus to aid in the identification and treatment of ADHD in girls and women were published by Young et al. in 2020<sup className="text-emerald-700">1</sup>.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="text-slate-700 mb-2">
          <strong>Source:</strong> Young, S., Adamo, N., Ásgeirsdóttir, B. B., Branney, P., Beckett, M., Colley, W., Cubbin, S., Deeley, Q., Farrag, E., Gudjonsson, G., Hill, P., Hollingdale, J., Kilic, O., Lloyd, T., Mason, P., Paliokosta, E., Perecherla, S., Sedgwick, J., Skirrow, C., … Woodhouse, E. (2020). Females with ADHD: An expert consensus statement taking a lifespan approach providing guidance for the identification and treatment of attention-deficit/ hyperactivity disorder in girls and women. <em>BMC Psychiatry</em>, 20, 404.
        </p>
        <a
          href="https://dx.doi.org/10.1186/s12888-020-02707-9"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
        >
          View Full Article <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>

    {/* Main Content */}
    <div className="space-y-6">
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Diagnostic Interview</h2>
        <p className="text-slate-600 mb-4">
          Below are ten additional considerations that are key consensus recommendations when evaluation women or girls for suspected attention-deficit/hyperactivity disorder.
        </p>

        <div className="space-y-6">
          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
            <h3 className="text-lg font-bold text-pink-900 mb-3">Rating scales</h3>
            <ul className="list-disc pl-5 space-y-2 text-pink-800 text-sm">
              <li>Norms from predominantly male or mixed-sex samples may disadvantage female patients. Rating scales providing female norms may provide cut-offs more sensitive to female presentation.</li>
              <li>Where female norms are not available, greater emphasis on collateral information is required (e.g. parental and school reports).</li>
              <li>Findings should be interpreted cautiously. Rigid adherence to cut-offs may lead to a high proportion of false positives and negatives.</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h3 className="text-lg font-bold text-purple-900 mb-3">Clinical interview</h3>
            <ul className="list-disc pl-5 space-y-2 text-purple-800 text-sm">
              <li>Assessors should bear in mind that family members may also have ADHD which may affect their judgment of 'typical' behaviour.</li>
              <li>Small modifications to symptoms may help to capture more female-centric behaviour.</li>
              <li>Assessors should examine factors that may mask or moderate behaviour in different settings, e.g. compensatory strategies or accommodations at home or school (both functional and dysfunctional).</li>
              <li>Age-appropriate, common co-occurring conditions in females with ADHD should be explored, including ASD, tics, mood disorders, anxiety, eating disorders, fibromyalgia and chronic fatigue syndrome.</li>
              <li>A risk assessment and consideration of future challenges (e.g. personal, clinical, educational, social-relational and psychosexual) is required.</li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
            <h3 className="text-lg font-bold text-indigo-900 mb-3">Collateral information</h3>
            <ul className="list-disc pl-5 space-y-2 text-indigo-800 text-sm">
              <li>School reports may comment more on attentional problems (daydreaming, distracted, disorganised, lacking in motivation and effort) or interpersonal relationship problems in girls with ADHD.</li>
              <li>Objective neuropsychological test results are not specific markers of ADHD but may provide useful supplementary clinical information. The QB scales have female-specific normative data and may therefore be more sensitive.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Treatment</h2>
        <p className="text-slate-600 mb-4">
          Below are thirteen additional considerations that are key consensus recommendations during the treatment of women or girls affected by attention-deficit/hyperactivity disorder.
        </p>

        <div className="space-y-6">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h3 className="text-lg font-bold text-emerald-900 mb-3">Pharmacological treatment</h3>
            <ul className="list-disc pl-5 space-y-2 text-emerald-800 text-sm">
              <li>Medication recommendations do not differ by sex and differ only modestly by age.</li>
              <li>Treatment monitoring may require deviation from conventional outcomes from rating scales and behaviour management. Individualised targets (e.g. emotional lability, academic attainment) may be more appropriate.</li>
              <li>Prescribing needs to consider interactions between ADHD and other medications for comorbid conditions, where applicable.</li>
              <li>Where mood problems are apparent but not pervasive it is advisable to treat ADHD symptoms and monitor for improvement first, prior to considering or initiating treatment for mood disorders.</li>
              <li>Appetite suppression as a side effect of stimulant medication should be considered if eating disorders are a concern.</li>
              <li>Risks of substance use whilst on ADHD medications should be considered and discussed with patients.</li>
              <li>Treatment with ADHD medications is generally not advised during pregnancy or breastfeeding.</li>
              <li>Review is advised during and after key periods of hormonal change (menopause, pregnancy).</li>
              <li>Psychoeducation on pharmacological treatment options and treatment targets for parents and affected girls may help to improve adherence and engagement.</li>
              <li>Regular review is required throughout development and may be especially important at times of key transitions.</li>
            </ul>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
            <h3 className="text-lg font-bold text-teal-900 mb-3">Non-pharmacological treatment</h3>
            <ul className="list-disc pl-5 space-y-2 text-teal-800 text-sm">
              <li>Whenever possible, provide psychoeducation taking a lifespan approach.</li>
              <li>Parents and carers of teenage girls need psychoeducation to support detection of deliberate self-harming or risky behaviour.</li>
              <li>Follow-up sessions are essential for support at key points of transition.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">References</h2>
        <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-700">
          <li>
            Young, S., Adamo, N., Ásgeirsdóttir, B. B., Branney, P., Beckett, M., Colley, W., Cubbin, S., Deeley, Q., Farrag, E., Gudjonsson, G., Hill, P., Hollingdale, J., Kilic, O., Lloyd, T., Mason, P., Paliokosta, E., Perecherla, S., Sedgwick, J., Skirrow, C., … Woodhouse, E. (2020). Females with ADHD: An expert consensus statement taking a lifespan approach providing guidance for the identification and treatment of attention-deficit/ hyperactivity disorder in girls and women. <em>BMC Psychiatry</em>, 20, 404.{' '}
            <a href="https://dx.doi.org/10.1186/s12888-020-02707-9" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-800">
              https://dx.doi.org/10.1186/s12888-020-02707-9
            </a>
          </li>
          <li>
            Recommendation 2.3, Evidence-Based Clinical Practice Guideline for Management of Attention Deficit Hyperactivity Disorder (ADHD) in Saudi Arabia. Riyadh: Saudi ADHD Society; 2020. ISBN: 978-603-03-4786-5.{' '}
            <a
              href={`${getHref('cpg-clinical-recommendations', basePath)}#rec2.3`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('cpg-clinical-recommendations');
                setTimeout(() => {
                  const element = document.getElementById('rec2.3');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="text-emerald-700 hover:text-emerald-800"
            >
              Recommendation 2.3
            </a>
          </li>
        </ol>
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

export default TopicGuideWomenGirlsPage;
