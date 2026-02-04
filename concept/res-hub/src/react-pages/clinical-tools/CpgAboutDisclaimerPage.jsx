import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CpgAboutDisclaimerPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />

    {/* Content */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Disclaimer</h2>
      
      <div className="space-y-4 text-slate-600 text-sm md:text-base">
        <p>
          Clinical Practice Guidelines (CPGs) are intended to serve as an aid to clinical judgment but are in no way a substitute for a medical professional's independent judgment and should not be considered medical advice. This CPG is a working document that reflects the state of the field at the time of publication and is based upon the accessible best updated published evidence. Because rapid changes in this area are expected, periodic revisions are inevitable. It is not intended to be explained or to serve as a standard of medical care. Standards of care are determined on the basis of all clinical data available for an individual case and are subject to change as scientific knowledge and technology advance and patterns of care evolve, these parameters of practice should be considered guidelines only.
        </p>

        <p>
          The presented recommendations may not be appropriate in all situations. Adherence to the CPG recommendations will not ensure a successful outcome in every case, nor should they be construed as including all proper methods of care or excluding other acceptable methods of care aimed at the same results. Any decision by practitioners to apply this CPG must be made in light of local resources and individual patient circumstances. The ultimate judgment regarding a particular clinical procedure or treatment plan must be made by the appropriate healthcare professional(s) responsible for clinical decisions regarding a specific clinical situation; the doctor. This judgment should only be arrived at following discussion of the options with the patient and/or decision-making caregiver, in light of the diagnostic and treatment choices available. However, it is advised that significant departures from a national CPG or any local CPG derived or adapted from it should be fully documented in the patient's medical records at the time the relevant decision is made.
        </p>

        <p>
          This CPG should not be construed as medical advice or medical opinion related to any specific facts or circumstances. If you are not one of the expert audiences listed in the professionals/intended users section , you are urged to consult a health care professional regarding your own situation or that of someone you care for and any specific medical questions you may have. In addition, you should seek assistance from a health care professional in interpreting this CPG and applying it in your individual case.
        </p>
      </div>
    </div>
  </div>
);

export default CpgAboutDisclaimerPage;
