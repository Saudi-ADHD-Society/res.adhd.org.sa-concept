import React from 'react';
import { AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CpgStrengthOfRecommendationsPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Strength of Recommendations</h2>
      <p className="text-slate-500 mt-2">
        Understanding the certainty of evidence and strength of recommendations.
      </p>
    </div>

    {/* Must */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
          <AlertCircle className="text-red-600" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Must:</h2>
      </div>
      <p className="text-slate-600 text-sm md:text-base mb-3">
        <strong className="font-bold text-slate-900">Recommendations That Must (or Must Not) Be Followed</strong>
      </p>
      <p className="text-slate-600 text-sm md:text-base">
        The words 'must' or 'must not' are generally only used if there is a legal duty to apply the recommendation. Occasionally the word 'must' (or 'must not') has been used if the consequences of not following the recommendation could be extremely serious or potentially life threatening.
      </p>
    </div>

    {/* Should */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="text-emerald-600" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Should:</h2>
      </div>
      <p className="text-slate-600 text-sm md:text-base mb-3">
        <strong className="font-bold text-slate-900">Recommendations That Should (or Should Not) Be Followed – a 'Strong' Recommendation</strong>
      </p>
      <p className="text-slate-600 text-sm md:text-base">
        The word 'offer' (and similar words such as 'refer' or 'advise') has been used when there is a good degree of confidence that, for the vast majority of patients, an intervention will do more good than harm, and be cost effective. Similar forms of words (for example, 'Do not offer…') are used when an intervention will not be of benefit for most patients.
      </p>
    </div>

    {/* Could */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
          <HelpCircle className="text-amber-600" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Could:</h2>
      </div>
      <p className="text-slate-600 text-sm md:text-base mb-3">
        <strong className="font-bold text-slate-900">Recommendations That Could Be Followed</strong>
      </p>
      <p className="text-slate-600 text-sm md:text-base">
        The word 'consider' is used when an intervention will do more good than harm for most patients, and will be cost effective, but other options may be similarly cost effective. The choice of intervention, and whether or not to have the intervention at all, is more likely to depend on the patient's/caregiver's values and preferences than on the strength of a recommendation, and so the healthcare professional should spend more time considering and discussing the options with the patient.
      </p>
    </div>
  </div>
);

export default CpgStrengthOfRecommendationsPage;
