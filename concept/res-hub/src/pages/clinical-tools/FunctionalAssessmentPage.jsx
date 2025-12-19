import React from 'react';
import { Languages, Users, Activity, FileText, Target, Scale } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const FunctionalAssessmentPage = ({ onNavigate }) => (
  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />
    {/* Hero / Intro */}
    <div className="bg-teal-900 text-teal-50 rounded-2xl px-6 md:px-10 py-8 md:py-10 shadow-sm relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-700/40 rounded-full blur-3xl" aria-hidden="true" />
      <div className="max-w-3xl relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">ICF &amp; Functional Assessment for ADHD</h2>
        <p className="text-sm md:text-base text-teal-100 mb-4">
          The International Classification of Functioning, Disability and Health (ICF) helps us describe how ADHD affects
          daily life&mdash;not just which symptoms are present. It complements diagnostic systems such as DSM and ICD by
          focusing on <strong>functioning, participation, and context</strong> in school, work, family and community life.
        </p>
        <p className="text-xs md:text-sm text-teal-100/90">
          This page introduces how the Saudi ADHD Society is using the ICF and the ADHD-specific ICF Core Sets to support
          fair decisions about accommodations, disability status, and support pathways.
        </p>
      </div>
    </div>

    {/* Diagnosis to functioning */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="text-teal-600" size={22} />
          <h3 className="text-lg font-bold text-slate-900">From diagnosis to functioning</h3>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          Clinical guidelines and international consensus statements confirm that ADHD is a real, impairing
          neurodevelopmental condition. A diagnosis, however, does not tell us everything we need to know about how a
          person learns, works, or participates in daily life.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          The ICF framework adds this missing layer by describing:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
          <li><strong>What the person can do</strong> in everyday tasks and learning.</li>
          <li><strong>How they participate</strong> in school, work, family and social life.</li>
          <li><strong>Which environmental factors</strong> (classroom demands, family support, attitudes, policies) act as
            barriers or facilitators.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-2 mb-4">
          <Scale className="text-teal-600" size={22} />
          <h3 className="text-lg font-bold text-slate-900">How ICF fits with our CPG</h3>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          Our national ADHD Clinical Practice Guideline recommends that assessment should include both symptom rating and
          a structured evaluation of functional impact. The ICF provides a common language for this evaluation, so that
          reports produced by clinicians, schools and services can be compared and understood across sectors.
        </p>
        <p className="text-sm text-slate-600">
          In practice, this means moving from statements such as “ADHD, combined presentation” to clearer descriptions
          like: “Difficulties sustaining attention in lessons, organising homework and managing time, with environmental
          barriers in the classroom and limited access to support.”
        </p>
      </div>
    </div>

    {/* ICF building blocks */}
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="text-teal-600" size={22} />
        <h3 className="text-lg md:text-xl font-bold text-slate-900">The ICF in one view</h3>
      </div>
      <p className="text-sm text-slate-600 mb-4">
        The ICF is organised into a small number of building blocks. For ADHD, three are especially important:
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
        <div className="bg-slate-50 rounded-xl p-4">
          <div className="font-semibold text-slate-900 mb-1">Body functions (b)</div>
          <p className="text-xs md:text-sm mb-1">Examples: attention functions (b140), impulse control, regulation of
            emotion and energy.</p>
          <p className="text-xs md:text-slate-500">These reflect how the brain supports attention, planning, and
            self‑regulation.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <div className="font-semibold text-slate-900 mb-1">Activities &amp; participation (d)</div>
          <p className="text-xs md:text-sm mb-1">Examples: undertaking multiple tasks (d220), school education (d820),
            relationships with peers (d750), employment (d845).</p>
          <p className="text-xs md:text-slate-500">These categories show how ADHD affects real-world tasks and social
            roles.</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <div className="font-semibold text-slate-900 mb-1">Environmental factors (e)</div>
          <p className="text-xs md:text-sm mb-1">Examples: family support (e310), attitudes of teachers and peers (e425),
            classroom demands and exam policies (e585).</p>
          <p className="text-xs md:text-slate-500">Each factor can be rated as a barrier or a facilitator to
            participation.</p>
        </div>
      </div>
    </div>

    {/* ICF Core Sets */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="text-teal-600" size={22} />
          <h3 className="text-lg font-bold text-slate-900">ICF Core Sets for ADHD</h3>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          Because the full ICF is very large, international experts have created ADHD-specific Core Sets&mdash;shortlists of
          the most relevant categories for people with ADHD across the lifespan.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          These Core Sets were developed through a multi-year international research programme led by the WHO ICF
          Research Branch and the Center of Neurodevelopmental Disorders at Karolinska Institutet. The programme combined
          an expert survey of clinicians and researchers worldwide (de Schipper et al., 2015, Eur Child Adolesc Psychiatry
          24:1509–1521, doi:10.1007/s00787-015-0778-1), qualitative focus groups and interviews with people with ADHD,
          families and professionals (Mahdi et al., 2017, 26:1219–1231, doi:10.1007/s00787-017-0983-1), and an
          international clinical study across eight countries (Mahdi et al., 2018, 27:1305–1319, doi:10.1007/s00787-018-1124-1).
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
          <li><strong>Comprehensive Core Set:</strong> captures the full range of challenges and environmental factors.</li>
          <li><strong>Brief Core Set:</strong> a shorter version for routine documentation in clinics and services.</li>
          <li><strong>Age-specific sets:</strong> tailored tools for preschool children, school-age learners, and
            adolescents/adults.</li>
        </ul>
        <p className="text-xs text-slate-500 mt-3">
          Together, this work provides standardised ICF-based tools that describe ability, disability and environmental
          supports in ADHD and can be used alongside diagnostic systems (DSM/ICD) and rating scales.
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-teal-200">
        <h3 className="text-lg font-bold text-slate-900 mb-2">From framework to practical tools</h3>
        <p className="text-sm text-slate-600 mb-3">
          In practice, the Core Sets are translated into structured checklists and interviews. Each ICF category is rated
          for the degree of difficulty or the strength of a barrier/facilitator, creating a profile of functioning that
          can be shared with schools, universities, employers and services.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          This supports fair decisions about exam accommodations, workplace adjustments, and eligibility for disability
          support&mdash;especially where regulations require evidence of functional impairment, not only a diagnosis.
        </p>
        <p className="text-xs text-slate-500">
          Future phases of our work include piloting digital versions of these tools and integrating them with rating
          scales and clinical reports.
        </p>
      </div>
    </div>

    {/* Who this is for */}
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Users className="text-teal-600" size={22} />
        <h3 className="text-lg md:text-xl font-bold text-slate-900">Who can use this framework?</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">Clinicians</h4>
          <p className="text-xs md:text-sm">
            Use ICF concepts to describe functional impact in clinic letters and reports, supporting referrals, treatment
            planning and disability documentation.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">Schools &amp; universities</h4>
          <p className="text-xs md:text-sm">
            Map classroom demands and exam policies to ICF categories to justify accommodations and create personalised
            support plans.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">Policy &amp; services</h4>
          <p className="text-xs md:text-sm">
            Align disability criteria and service eligibility with a shared, function-based language that is compatible
            with ICD-11 and international best practice.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FunctionalAssessmentPage;
