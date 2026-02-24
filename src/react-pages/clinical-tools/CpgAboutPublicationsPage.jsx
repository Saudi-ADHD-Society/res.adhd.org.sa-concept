import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getAssetUrl } from '../../utils/navigation';
import { withBase } from '../../utils/assets';

const CpgAboutPublicationsPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Publication 1: English CPG */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex-shrink-0">
          <img
            src={withBase(basePath, 'images/saudi-adhd-cpg-thumb.png')}
            alt="ADHD CPG English thumbnail" 
            className="w-full rounded-lg border border-slate-200"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Evidence-based clinical practice guideline for Management of Attention Deficit Hyperactivity Disorder (ADHD) in Saudi Arabia
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-4">
            Evidence-Based Clinical Practice Guideline for Management of Attention Deficit Hyperactivity Disorder (ADHD) in Saudi Arabia. Riyadh: Saudi ADHD Society; 2020. ISBN: 978-603-03-4786-<em>5.</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getAssetUrl('Saudi-ADHD-CPG-EN-1.7.0-spreads.pdf', basePath)}
              download
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              <Download size={16} className="mr-2" aria-hidden="true" />
              Download for Printing [PDF Spreads]
            </a>
            <a
              href={getAssetUrl('Saudi-ADHD-CPG-EN-1.7.0.pdf', basePath)}
              download
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              <Download size={16} className="mr-2" aria-hidden="true" />
              Download for Viewing [PDF]
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Publication 2: Arabic CPG */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex-shrink-0">
          <img
            src={withBase(basePath, 'images/saudi-adhd-cpg-ar-thumb.png')}
            alt="Saudi ADHD CPG Arabic thumbnail" 
            className="w-full rounded-lg border border-slate-200"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            [Arabic version] Evidence-based clinical practice guideline for Management of Attention Deficit Hyperactivity Disorder (ADHD) in Saudi Arabia
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-4">
            <span lang="ar">الدليل الإرشادي السريري المبني على البراهين لتشخيص وعلاج اضطراب فرط الحركة وتشتت الانتباه في المملكة العربية السعودية</span> Al-daleel al-irshadi as-sareeri li idtirab fart alharakah wa tashatut alintibah fi al-mamlakah al-arabiah al-saudiah [Evidence-Based Clinical Practice Guideline for Management of Attention Deficit Hyperactivity Disorder (ADHD) in Saudi Arabia]. Riyadh: Saudi ADHD Society; 2020. [Arabic]. ISBN 978-603-03-3571-8.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getAssetUrl('Saudi-ADHD-CPG-AR-1.7.0-spreads.pdf', basePath)}
              download
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              <Download size={16} className="mr-2" aria-hidden="true" />
              Download for Printing [PDF Spreads]
            </a>
            <a
              href={getAssetUrl('Saudi-ADHD-CPG-AR-1.7.0.pdf', basePath)}
              download
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              <Download size={16} className="mr-2" aria-hidden="true" />
              Download for Viewing [PDF]
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Publication 3: Adaptation Study */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex-shrink-0">
          <img
            src={withBase(basePath, 'images/paper2-thumb.png')}
            alt="Adaptation study thumbnail" 
            className="w-full rounded-lg border border-slate-200"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Adapting evidence-based clinical practice guidelines for people with attention deficit hyperactivity disorder in Saudi Arabia: process and outputs of a national initiative.
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-4">
            Bashiri, F. A., Albatti, T. H., Hamad, M. H., Al-Joudi, H. F., Daghash, H. F., Al-Salehi, S. S., Varnham, J. L., ., … &amp; Amer, Y. S. (2021). Adapting evidence-based clinical practice guidelines for people with attention deficit hyperactivity disorder in Saudi Arabia: process and outputs of a national initiative. <em>Child and adolescent psychiatry and mental health</em>, <em>15</em>(1), 1-16, doi: <a href="https://doi.org/10.1186/s13034-020-00351-5" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">10.1186/s13034-020-00351-5</a>
          </p>
          <a
            href="https://www.researchgate.net/publication/349142118_Adapting_evidence-based_clinical_practice_guidelines_for_people_with_attention_deficit_hyperactivity_disorder_in_Saudi_Arabia_process_and_outputs_of_a_national_initiative"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
          >
            View on ResearchGate
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>

    {/* Publication 4: AGREE II Appraisal */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex-shrink-0">
          <img
            src={withBase(basePath, 'images/journal-pone-thumb.png')}
            alt="Thumbnail of ADHD CPG appraisal paper" 
            className="w-full rounded-lg border border-slate-200"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Appraisal of clinical practice guidelines for the management of attention deficit hyperactivity disorder (ADHD) using the AGREE II Instrument: A systematic review.
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-4">
            Amer, Y. S., Al-Joudi, H. F., Varnham, J. L., Bashiri, F. A., Hamad, M. H., &amp; Al Salehi, S. M., et al. (2019). Appraisal of clinical practice guidelines for the management of attention deficit hyperactivity disorder (ADHD) using the AGREE II Instrument: A systematic review. <em>PLoS ONE</em>, 14(7), doi: <a href="https://dx.doi.org/10.1371/journal.pone.0219239" target="_blank" rel="noreferrer noopener" className="text-emerald-700 hover:underline">10.1371/journal.pone.0219239</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.researchgate.net/publication/334268523_Appraisal_of_clinical_practice_guidelines_for_the_management_of_attention_deficit_hyperactivity_disorder_ADHD_using_the_AGREE_II_Instrument_A_systematic_review"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              View on ResearchGate
              <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="https://www.researchgate.net/publication/344319693_tqyym_aladlt_alarshadyt_llmmarst_alsryryt_llaj_adtrab_frt_alhrkt_wtshtt_alantbah_bastkhdam_adat_tqyym_aladlt_alarshadyt_almtlqt_balabhath_waltqyym_alasdar_althany_AGREE_II_mrajt_mnhjyt"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              View Arabic translation on ResearchGate
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Publication 5: PROSPERO Registration */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 flex-shrink-0">
          <img
            src={withBase(basePath, 'images/prospero-thumb.png')}
            alt="prospero thumbnail" 
            className="w-full rounded-lg border border-slate-200"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            <strong>Appraisal of clinical practice guidelines for the management of attention deficit hyperactivity disorder (ADHD) using the AGREE II Instrument: a systematic review</strong>.
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-4">
            Albatti T, Al Salehi S, Bashiri F, Hamad M, Al-Joudi H, Daghash H, et al. (2017). Appraisal of clinical practice guidelines for the management of attention deficit hyperactivity disorder (ADHD) using the AGREE II Instrument: a systematic review. PROSPERO, CRD42017078712
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.crd.york.ac.uk/PROSPERO/display_record.php?ID=CRD42017078712"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              View on PROSPERO
              <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="https://dx.doi.org/10.17504/protocols.io.q27dyhn"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
            >
              View on Protocols.io
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CpgAboutPublicationsPage;
