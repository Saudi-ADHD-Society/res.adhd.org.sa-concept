import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CpgTerminologyPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    <div>
      <h2 className="text-3xl font-bold text-slate-900">Terminology</h2>
      <p className="text-slate-500 mt-2">
        Definitions and terminology used in the Saudi ADHD CPG.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      {/* ADHD */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">ADHD</h3>
        <p className="text-slate-600 text-sm md:text-base">
          Attention-Deficit Hyperactivity Disorder (ADHD) refers to the ADHD "sub-types" as defined in the International Classification of Diseases, 10th revision [ICD-10-CM] or "presentations" as defined in the International Classification of Diseases, 11th revision [ICD-11], and the Diagnostic and Statistical Manual of Mental Disorders, 5th Edition [DSM-V].
        </p>
      </div>

      {/* Domains */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Domains</h3>
        <p className="text-slate-600 text-sm md:text-base">
          Domains refer to areas of function, for example, interpersonal relationships, education and occupational attainment, and risk awareness.
        </p>
      </div>

      {/* Environmental modifications */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Environmental modifications</h3>
        <p className="text-slate-600 text-sm md:text-base">
          Environmental modifications are changes that are made to the physical environment in order to minimise the impact of a person's ADHD on their day-to-day life. Appropriate environmental modifications will be specific to the circumstances of each person with ADHD and should be determined from an assessment of their needs. Examples may include changes to seating arrangements, changes to lighting and noise, reducing distractions (for example, using headphones), optimising work or education to have shorter periods of focus with movement breaks (including the use of 'I need a break' cards), reinforcing verbal requests with written instructions and, for children, the appropriate use of teaching assistants at school.
        </p>
      </div>

      {/* Reasonable adjustments / accommodations */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Reasonable adjustments / accommodations</h3>
        <p className="text-slate-600 text-sm md:text-base">
          Reasonable adjustment is a term that refers to the legal obligations of employers and higher education providers to make sure that workers or students with disabilities, or physical or mental health conditions are not substantially disadvantaged when doing their jobs or during their education. The term reasonable accommodation is more commonly used in an educational setting.
        </p>
      </div>

      {/* Shared treatment plan */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Shared treatment plan</h3>
        <p className="text-slate-600 text-sm md:text-base">
          A written treatment plan shared between healthcare professional and the person with ADHD; for children, this may be shared more widely (for example, with families, schools or social care, if relevant and agreed).
        </p>
      </div>

      {/* Settings */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Settings</h3>
        <p className="text-slate-600 text-sm md:text-base">
          Settings refer to the physical location, for example, home, nursery, friends or family homes.
        </p>
      </div>

      {/* Healthcare Settings */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Healthcare Settings</h3>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-slate-900 mb-1">Primary Care</p>
            <p className="text-slate-600 text-sm md:text-base">Health centers (local clinics)</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-1">Secondary Care</p>
            <p className="text-slate-600 text-sm md:text-base">General hospitals</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-1">Tertiary Care</p>
            <p className="text-slate-600 text-sm md:text-base">Specialized hospitals</p>
          </div>
        </div>
      </div>

      {/* Age Groups */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Age Groups</h3>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-slate-900 mb-1">Children</p>
            <p className="text-slate-600 text-sm md:text-base">Younger than 5 years</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-1">Young people</p>
            <p className="text-slate-600 text-sm md:text-base">From 5 to 18 years</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-1">Adults</p>
            <p className="text-slate-600 text-sm md:text-base">Older than 18 years</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CpgTerminologyPage;

