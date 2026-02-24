import React from 'react';
import { Globe, ExternalLink, AlertCircle } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const ResearchBriefGlobalPolicyAccessPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Header */}
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center space-x-2 text-emerald-600 text-sm font-bold mb-3">
        <Globe size={16} />
        <span>Global Policy & Access</span>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Methylphenidate and the WHO Essential Medicines List
      </h1>
      <p className="text-slate-600 mb-4">
        Access to evidence-based medicines is shaped not only by clinical guidelines, but by global policy decisions 
        that influence national formularies, procurement, and insurance coverage. For attention-deficit/hyperactivity 
        disorder (ADHD), one of the most consequential of these decisions concerns whether methylphenidate is included 
        on the World Health Organization (WHO) Model List of Essential Medicines (EML).
      </p>
      <p className="text-slate-600">
        Despite decades of clinical use and a substantial evidence base, methylphenidate has repeatedly been excluded 
        from the EML. This brief summarises the current state of the debate, recent developments, and their implications 
        for access to ADHD treatment worldwide.
      </p>
    </div>

    {/* Main Content */}
    <div className="space-y-6">
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Why this brief matters</h2>
        <p className="text-slate-600">
          Access to evidence-based medicines is shaped not only by clinical guidelines, but by global policy decisions 
          that influence national formularies, procurement, and insurance coverage. For attention-deficit/hyperactivity 
          disorder (ADHD), one of the most consequential of these decisions concerns whether methylphenidate is included 
          on the World Health Organization (WHO) Model List of Essential Medicines (EML).
        </p>
        <p className="text-slate-600 mt-4">
          Despite decades of clinical use and a substantial evidence base, methylphenidate has repeatedly been excluded 
          from the EML. This brief summarises the current state of the debate, recent developments, and their implications 
          for access to ADHD treatment worldwide.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Background: What is the WHO Essential Medicines List?</h2>
        <p className="text-slate-600 mb-4">
          The WHO Model List of Essential Medicines identifies medicines considered fundamental to meeting the priority 
          health needs of populations. Many low- and middle-income countries use the EML to guide:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
          <li>national formularies</li>
          <li>procurement and supply chains</li>
          <li>reimbursement and insurance coverage</li>
        </ul>
        <p className="text-slate-600">
          Inclusion on the EML can therefore have a decisive impact on whether a medicine is affordable and available at scale.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Repeated exclusion of methylphenidate</h2>
        <p className="text-slate-600 mb-4">
          Methylphenidate has been proposed for inclusion on the EML on multiple occasions, most recently for use in 
          children and adolescents aged 6–17 years with ADHD. These applications have been declined by successive WHO 
          Expert Committees, including in 2019, 2021, and again in 2023.
        </p>
        <p className="text-slate-600 mb-4">
          In its most recent decision, the Expert Committee cited concerns regarding the quality, interpretation, and 
          balance of evidence on benefits and harms, despite acknowledging the burden of ADHD and the medicine's widespread 
          clinical use. Similar reasoning was provided in earlier Technical Report Series decisions.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-amber-900">
            This has led to ongoing concern among clinicians, researchers, and professional organisations, who argue that 
            the exclusion of methylphenidate disproportionately affects countries that rely heavily on the EML to determine 
            medicine availability.
          </p>
        </div>
        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
          <p className="text-slate-700 mb-2">
            <strong>References:</strong>
          </p>
          <ul className="space-y-1 text-slate-600">
            <li>
              WHO Expert Committee on the Selection and Use of Essential Medicines. (2019).{' '}
              <em>Technical Report Series 1021</em>. Geneva: World Health Organization.{' '}
              <a
                href="https://list.essentialmeds.org/files/trs/upzppOSPYB9uERmSypnQpurE1E4KB2E2nUpxTYDh.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
              >
                View PDF <ExternalLink size={12} className="ml-1" />
              </a>
            </li>
            <li>
              WHO Expert Committee on the Selection and Use of Essential Medicines. (2021).{' '}
              <em>Technical Report Series 1035</em>. Geneva: World Health Organization.{' '}
              <a
                href="https://list.essentialmeds.org/files/trs/hHDQtV59PtnnPEJQ5mVfaUuDMfCQzSoduRDvWWxq.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
              >
                View PDF <ExternalLink size={12} className="ml-1" />
              </a>
            </li>
            <li>
              WHO Expert Committee on the Selection and Use of Essential Medicines. (2023).{' '}
              <em>Recommendation 1200</em>. Geneva: World Health Organization.{' '}
              <a
                href="https://list.essentialmeds.org/recommendations/1200"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
              >
                View Recommendation <ExternalLink size={12} className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Professional and academic responses</h2>
        <p className="text-slate-600 mb-4">
          The continued exclusion of methylphenidate has prompted a strong response from the international ADHD community.
        </p>
        <p className="text-slate-600 mb-4">
          Several peer-reviewed commentaries and responses published in <em>The Lancet Psychiatry</em> have highlighted that:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">
          <li>ADHD is associated with substantial long-term educational, occupational, health, and social costs when untreated.</li>
          <li>Methylphenidate is among the most extensively studied medications in child and adolescent psychiatry.</li>
          <li>Concerns about misuse and diversion, while important, can be addressed through regulation rather than exclusion.</li>
        </ul>
        <p className="text-slate-600 mb-4">
          In 2024, major professional bodies explicitly endorsed inclusion of methylphenidate on the WHO Model Lists of 
          Essential Medicines, emphasising that access to evidence-based ADHD treatment is a matter of health equity, 
          particularly in low-resource settings.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm mt-4">
          <p className="text-slate-700 mb-2">
            <strong>Key Publications:</strong>
          </p>
          <ul className="space-y-2 text-slate-600">
            <li>
              Cortese, S., Coghill, D., Mattingly, G. W., Rohde, L. A., Thom, R. P., Wilens, T. E., … & Faraone, S. V. (2024). 
              AACAP Endorses the Inclusion of Methylphenidate in the WHO Model Lists of Essential Medicines.{' '}
              <em>Journal of the American Academy of Child and Adolescent Psychiatry</em>, S0890-8567.{' '}
              <a
                href="https://doi.org/10.1016/j.jaac.2024.02.008"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
              >
                View Article <ExternalLink size={12} className="ml-1" />
              </a>
            </li>
            <li>
              ESCAP endorses the inclusion of methylphenidate in the WHO model lists of essential medicines and in the Union list of critical medicines.{' '}
              <em>European Child & Adolescent Psychiatry</em> (2024).{' '}
              <a
                href="https://doi.org/10.1007/s00787-024-02443-5"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
              >
                View Article <ExternalLink size={12} className="ml-1" />
              </a>
            </li>
            <li>
              Cortese, S., et al. (2023). WHO Essential Medicines List and methylphenidate for ADHD in children and adolescents – Authors' reply.{' '}
              <em>The Lancet Psychiatry</em>, 10(11), 850-851.{' '}
              <a
                href="https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(23)00437-6/fulltext"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
              >
                View Article <ExternalLink size={12} className="ml-1" />
              </a>
            </li>
            <li>
              Cortese, S., et al. (2023). WHO Essential Medicines List and methylphenidate for ADHD in children and adolescents.{' '}
              <em>The Lancet Psychiatry</em>, 10(9), 667-668.{' '}
              <a
                href="https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(23)00292-4/fulltext"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
              >
                View Article <ExternalLink size={12} className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">The case for inclusion: key arguments</h2>
        <p className="text-slate-600 mb-4">
          Across recent proposals and endorsements, several consistent arguments have emerged:
        </p>
        
        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-emerald-900 mb-2">1. Burden of disease</h3>
            <p className="text-emerald-800 text-sm mb-2">
              ADHD is a common neurodevelopmental condition associated with:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-emerald-800 text-sm">
              <li>academic underachievement</li>
              <li>increased injury risk</li>
              <li>mental health comorbidity</li>
              <li>reduced quality of life</li>
            </ul>
            <p className="text-emerald-800 text-sm mt-2">
              These impacts extend into adulthood and carry significant societal costs.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2">2. Evidence base</h3>
            <p className="text-blue-800 text-sm">
              Methylphenidate has been studied in:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-blue-800 text-sm mt-2">
              <li>randomised controlled trials</li>
              <li>long-term observational studies</li>
              <li>population-level safety analyses</li>
            </ul>
            <p className="text-blue-800 text-sm mt-2">
              The balance of evidence supports its efficacy for core ADHD symptoms when appropriately prescribed and monitored.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h3 className="font-bold text-purple-900 mb-2">3. Equity and access</h3>
            <p className="text-purple-800 text-sm">
              Exclusion from the EML may:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-purple-800 text-sm mt-2">
              <li>restrict access in countries where public provision depends on EML inclusion</li>
              <li>widen disparities between high-income and low-income settings</li>
              <li>shift care toward less regulated or less evidence-based alternatives</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ongoing debate and current status</h2>
        <p className="text-slate-600 mb-4">
          As of the most recent WHO review cycle, methylphenidate remains excluded from the Model List of Essential Medicines. 
          However, the volume and clarity of professional endorsements have increased, and the issue remains active within 
          global child and adolescent mental health policy discussions.
        </p>
        <p className="text-slate-600 mb-4">
          Future applications may continue to refine the evidentiary framing, particularly with respect to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>age-restricted indications</li>
          <li>risk-management strategies</li>
          <li>monitoring and governance mechanisms</li>
        </ul>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm mt-4">
          <p className="text-slate-700 mb-2">
            <strong>2025 Application:</strong> A proposal for the inclusion of methylphenidate on the WHO Model List of 
            Essential Medicines for the treatment of children and adolescents aged 6-17 years with ADHD was submitted on 31 October 2024 for 
            the 2025 review cycle.{' '}
            <a
              href="https://cdn.who.int/media/docs/default-source/2025-eml-expert-committee/addition-of-new-medicines/a.19_methylphenidate.pdf?sfvrsn=ab5be6ed_7"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
            >
              View Proposal <ExternalLink size={12} className="ml-1" />
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Saudi and regional context</h2>
        <p className="text-slate-600 mb-4">
          In Saudi Arabia, methylphenidate is registered, regulated, and available through national regulatory pathways. 
          Clinical use is guided by the national evidence-based CPG, with age-appropriate prescribing and monitoring requirements.
        </p>
        <p className="text-slate-600">
          While WHO EML decisions do not directly determine local availability in Saudi Arabia, they remain relevant for:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 mt-4">
          <li>global health policy alignment</li>
          <li>regional collaborations</li>
          <li>international advocacy and research prioritisation</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Relationship to clinical guidance</h2>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
          <p className="text-sm text-indigo-900 mb-2">
            <strong>Note:</strong> This Research Brief addresses policy and access, not clinical decision-making.
          </p>
          <p className="text-sm text-indigo-900 mb-2">
            For clinical recommendations on ADHD medications, including indications, age considerations, and monitoring:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-indigo-900">
            <li>
              see the{' '}
              <a
                href={getHref('adhd-cpg', basePath, locale)}
                className="underline font-semibold hover:text-indigo-700"
              >
                Saudi National ADHD Clinical Practice Guideline
              </a>
            </li>
            <li>
              and the associated{' '}
              <a
                href={getHref('cpg-medication-tables', basePath, locale)}
                className="underline font-semibold hover:text-indigo-700"
              >
                medication tables
              </a>
              {' '}and{' '}
              <a
                href={getHref('cpg-clinical-recommendations', basePath, locale)}
                className="underline font-semibold hover:text-indigo-700"
              >
                clinical recommendations
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key take-home messages</h2>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
            <AlertCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-slate-700">
              Methylphenidate remains excluded from the WHO Model List of Essential Medicines despite repeated applications.
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
            <AlertCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-slate-700">
              Professional and academic bodies have raised concerns about the equity implications of this decision.
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
            <AlertCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-slate-700">
              The debate reflects broader tensions between evidence appraisal, risk governance, and global access.
            </p>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
            <AlertCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-slate-700">
              National guidelines and regulatory frameworks remain essential for ensuring safe, appropriate use at country level.
            </p>
          </div>
        </div>
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

export default ResearchBriefGlobalPolicyAccessPage;
