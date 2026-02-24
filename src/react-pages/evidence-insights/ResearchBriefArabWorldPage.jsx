import React from 'react';
import { Globe, ExternalLink, TrendingUp } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const ResearchBriefArabWorldPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-emerald-600 text-sm font-bold mb-3">
        <Globe size={16} />
        <span>Epidemiology & Research Synthesis</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        ADHD in Saudi Arabia and the Arab World: A Comprehensive Overview
      </h1>
      <p className="text-slate-600 mb-4">
        A synthesis of systematic reviews and meta-analyses examining ADHD prevalence, research trends, and clinical 
        characteristics across Saudi Arabia and Arab Gulf countries, providing context for understanding ADHD in the region.
      </p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
        <p className="text-slate-700 mb-2">
          <strong>Sources Synthesized:</strong> Multiple systematic reviews and meta-analyses including Almojarthe (2023), 
          Alkhateeb & Alhadidi (2019), Farah et al. (2009), and regional prevalence studies from Saudi Arabia and Arab Gulf countries.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <a
            href="https://doi.org/10.18203/2394-6040.ijcmph20230247"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium text-xs"
          >
            Almojarthe (2023) <ExternalLink size={12} className="ml-1" />
          </a>
          <a
            href="https://doi.org/10.1177/1087054715623047"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium text-xs"
          >
            Alkhateeb & Alhadidi (2019) <ExternalLink size={12} className="ml-1" />
          </a>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="space-y-6">
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Prevalence in Arab Gulf Countries</h2>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-4">
          <p className="text-emerald-900 font-semibold mb-2">Overall Prevalence: 5.90%</p>
          <p className="text-emerald-800 text-sm">
            95% Confidence Interval: 1.73-20.14% (Almojarthe, 2023 meta-analysis of 14 studies)
          </p>
        </div>
        <p className="text-slate-600 mb-4">
          A recent systematic review and meta-analysis of ADHD prevalence in Arab Gulf countries (Saudi Arabia, UAE, 
          Kuwait, Qatar, Bahrain, Oman) found an overall prevalence rate of <strong>5.90%</strong>, which is comparable 
          to worldwide estimates of 5-7%. This suggests that ADHD is as common in the Arab Gulf region as it is globally, 
          challenging any assumptions that ADHD might be culture-specific or less prevalent in this population.
        </p>
        <p className="text-slate-600">
          The wide confidence interval (1.73-20.14%) reflects significant heterogeneity across studies, likely due to 
          differences in diagnostic methods, age groups studied, and sampling approaches across the included research.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Gender Differences: Unexpected Findings</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
          <p className="text-blue-900 text-sm">
            <strong>Key Finding:</strong> No statistically significant difference in ADHD prevalence between males and females 
            (OR=1.48; 95% CI=0.53-4.14; p=0.456)
          </p>
        </div>
        <p className="text-slate-600 mb-4">
          Unlike most international studies that show a 2-3:1 male-to-female ratio in ADHD prevalence, the Arab Gulf 
          meta-analysis found <strong>no significant gender difference</strong>. This finding is notable and may reflect:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Different patterns of symptom presentation or recognition in Arab cultural contexts</li>
          <li>Variations in referral patterns or diagnostic practices</li>
          <li>Potential under-recognition of ADHD in boys or over-identification in girls in some settings</li>
          <li>Methodological differences in how studies were conducted</li>
        </ul>
        <p className="text-slate-600 mt-4">
          This finding warrants further investigation, as it may have important implications for screening, diagnosis, 
          and service planning in the region.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Socioeconomic and Educational Factors</h2>
        <p className="text-slate-600 mb-4">
          The meta-analysis revealed interesting patterns related to parental education:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="font-semibold text-amber-900 text-sm mb-1">Fathers: Secondary+</p>
            <p className="text-amber-800 text-lg font-bold">51%</p>
            <p className="text-amber-700 text-xs">Highest prevalence</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="font-semibold text-slate-700 text-sm mb-1">Fathers: Primary</p>
            <p className="text-slate-600 text-lg font-bold">16.6%</p>
            <p className="text-slate-500 text-xs">Lower prevalence</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="font-semibold text-slate-700 text-sm mb-1">Fathers: Illiterate</p>
            <p className="text-slate-600 text-lg font-bold">17%</p>
            <p className="text-slate-500 text-xs">Lower prevalence</p>
          </div>
        </div>
        <p className="text-slate-600 mb-4">
          <strong>Paternal Education:</strong> Children of fathers with at least secondary education showed the highest 
          ADHD prevalence (51%), significantly different from other education levels (p=0.040). This counterintuitive 
          finding may reflect:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600 mb-4">
          <li>Better recognition and help-seeking among more educated families</li>
          <li>Greater awareness of ADHD symptoms and access to diagnostic services</li>
          <li>Higher expectations for academic performance leading to earlier identification</li>
        </ul>
        <p className="text-slate-600">
          <strong>Maternal Education:</strong> No statistically significant differences were found across different levels 
          of maternal education (p=0.260), suggesting maternal education may not be as strongly associated with ADHD 
          identification in this population.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Research Trends in Arab Countries</h2>
        <p className="text-slate-600 mb-4">
          A systematic review of ADHD research in Arab countries (Alkhateeb & Alhadidi, 2019) identified several key trends:
        </p>
        <div className="space-y-3 mb-4">
          <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <TrendingUp className="text-purple-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-purple-900 text-sm mb-1">Growing Research Volume</p>
              <p className="text-purple-800 text-sm">
                Significant increase in ADHD research publications from Arab countries over the past two decades, 
                with Saudi Arabia emerging as a leading contributor.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
            <TrendingUp className="text-indigo-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-indigo-900 text-sm mb-1">Research Focus Areas</p>
              <p className="text-indigo-800 text-sm">
                Studies primarily focused on prevalence, comorbidity, and treatment outcomes. Less research on 
                neurobiology, genetics, or long-term outcomes.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
            <TrendingUp className="text-teal-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-teal-900 text-sm mb-1">Methodological Gaps</p>
              <p className="text-teal-800 text-sm">
                Many studies used convenience samples or lacked standardized diagnostic procedures. Need for more 
                population-based studies with validated assessment tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Saudi Arabia: Specific Context</h2>
        <p className="text-slate-600 mb-4">
          Studies from Saudi Arabia have contributed significantly to understanding ADHD in the region:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
          <li><strong>School-Based Studies:</strong> Prevalence estimates ranging from 2.4% to 16.3% in primary school children, 
          varying by region and assessment method</li>
          <li><strong>Regional Variation:</strong> Studies from different regions (Western, Central, Eastern) show varying 
          prevalence rates, highlighting the need for national-level data</li>
          <li><strong>Comorbidity Patterns:</strong> High rates of learning disabilities, behavioral problems, and anxiety 
          disorders among children with ADHD, similar to international patterns</li>
          <li><strong>Service Gaps:</strong> Limited access to specialized ADHD services, with most care concentrated in 
          tertiary centers and private sector</li>
        </ul>
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg">
          <p className="text-sm text-rose-900">
            <strong>National Screening Program:</strong> The Saudi Ministry of Health's school-based screening program 
            (2019) identified ADHD as one of the most common health problems among primary school students, supporting 
            the need for systematic screening and early intervention.
          </p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Cultural and Contextual Considerations</h2>
        <p className="text-slate-600 mb-4">
          Understanding ADHD in the Arab world requires consideration of unique cultural and contextual factors:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Stigma and Awareness:</strong> Varying levels of ADHD awareness and acceptance across different 
          communities, with some areas showing increasing recognition</li>
          <li><strong>Healthcare System Structure:</strong> Different models of care delivery, with varying degrees of 
          integration between primary, secondary, and tertiary care</li>
          <li><strong>Educational Context:</strong> Large class sizes, traditional teaching methods, and high academic 
          expectations may affect ADHD identification and management</li>
          <li><strong>Family Dynamics:</strong> Extended family structures and cultural values around child behavior may 
          influence symptom recognition and help-seeking</li>
          <li><strong>Language and Assessment:</strong> Need for culturally and linguistically appropriate assessment tools, 
          leading to development of validated Arabic rating scales</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Implications for Policy and Practice</h2>
        <p className="text-slate-600 mb-4">
          These findings have important implications for ADHD care in Saudi Arabia and the Arab Gulf region:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h3 className="font-semibold text-emerald-900 mb-2">Service Planning</h3>
            <ul className="list-disc pl-5 space-y-1 text-emerald-800 text-sm">
              <li>Prevalence rates comparable to global estimates suggest significant service needs</li>
              <li>Need for integrated care models connecting primary and specialist services</li>
              <li>Development of culturally appropriate screening and assessment protocols</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Research Priorities</h3>
            <ul className="list-disc pl-5 space-y-1 text-blue-800 text-sm">
              <li>Large-scale population-based prevalence studies</li>
              <li>Long-term outcome studies in Arab populations</li>
              <li>Cultural adaptation of interventions</li>
              <li>Health services research on care delivery models</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>ADHD prevalence in Arab Gulf countries (<strong>5.90%</strong>) is comparable to worldwide rates, 
          confirming ADHD is a universal neurodevelopmental condition</li>
          <li>Gender patterns may differ from international norms, warranting further investigation and 
          gender-sensitive screening approaches</li>
          <li>Higher prevalence among children of more educated fathers likely reflects better recognition 
          and access to services rather than true risk differences</li>
          <li>Research in Arab countries is growing but needs more methodological rigor and population-based studies</li>
          <li>Cultural adaptation of assessment tools and interventions is essential for effective care</li>
          <li>The Saudi National ADHD CPG represents a major step forward in standardizing evidence-based care</li>
        </ul>
      </section>
    </div>

    {/* Navigation */}
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex justify-center">
        <a
          href={getHref('research-briefs', basePath, locale)}
          className="text-emerald-700 font-semibold hover:text-emerald-800"
        >
          Back to Research Briefs
        </a>
      </div>
    </div>
  </div>
);

export default ResearchBriefArabWorldPage;

