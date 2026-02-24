import React from 'react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const irbMembers = [
  {
    nameEnglish: 'Professor Mahdi Saeed Abumadini',
    role: 'Chair of the Committee',
    specialty: 'Consultant Psychiatrist and Professor of Psychiatry',
    notes: 'President of the Saudi Psychiatric Association'
  },
  {
    nameEnglish: 'Professor Mohammed M.J. Alqahtani',
    role: 'Committee Member',
    specialty: 'Consultant Clinical Psychologist and Professor of Clinical Psychology',
    notes: 'Scientific and Health Advisor at the Saudi ADHD Society'
  },
  {
    nameEnglish: 'Professor Boshra Ismail Arnout',
    role: 'Committee Member',
    specialty: 'Professor of Psychology, King Khalid University and Zagazig University',
    notes: ''
  },
  {
    nameEnglish: 'Dr. Hiyam Hussein Albayti',
    role: 'Committee Member',
    specialty:
      'Associate Professor of Artificial Intelligence, Information Technology Department, College of Computer and Information Sciences (CCIS), King Saud University',
    notes: 'Member of the Board of Directors of the Saudi ADHD Society'
  },
  {
    nameEnglish: 'Dr. Barakat Mazen Al-Otaibi',
    role: 'Committee Member',
    specialty: 'Assistant Professor of Public Administration, Institute of Public Administration',
    notes: 'Consultant in Organisational Development and Governance at the Saudi ADHD Society'
  }
];

const IrbPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />
    {/* Overview Hero */}
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">
      <h2 className="text-3xl font-bold text-slate-900 mb-3">Research Ethics &amp; Local IRB</h2>
      <p className="text-slate-600 mb-3">
        This section supports researchers, students, and institutional partners who are planning ADHD-related research
        in collaboration with the Saudi ADHD Society or its clinical and educational partners.
      </p>
      <p className="text-slate-600 mb-3">
        The Local Research Ethics Committee (LREC) is officially registered under the National Committee of Bioethics and
        operates in accordance with Saudi national regulations and ethical standards.
      </p>
      <p className="text-slate-600 mb-4">
        Detailed policies, forms, and workflow diagrams will be published as the research governance framework is
        finalised. The pages below provide a high-level structure and orientation so teams can begin planning ethically
        robust projects.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
        <strong>Important:</strong> All studies involving human participants or identifiable data must receive IRB
        approval <span className="underline">before</span> any recruitment or data collection begins.
      </div>
    </div>

    {/* IRB Committee Members */}
    <section className="bg-white border border-slate-200 rounded-2xl p-8 mb-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">IRB Committee Members</h2>
      <p className="text-slate-600 mb-6">
        The following are the current members of the Saudi ADHD Society Local Research Ethics Committee (LREC).
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {irbMembers.map((member) => (
          <div
            key={member.nameEnglish}
            className="p-4 bg-slate-50 rounded-lg shadow-sm border border-slate-100"
          >
            <div className="font-semibold text-lg text-slate-900">{member.nameEnglish}</div>
            {member.role && (
              <div className="text-slate-700 text-sm mb-1">{member.role}</div>
            )}
            {member.specialty && (
              <div className="text-slate-700 text-sm mb-1">
                <em>{member.specialty}</em>
              </div>
            )}
            {member.notes && (
              <div className="text-slate-600 text-xs">{member.notes}</div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* IRB Hub Cards */}
    <section>
      <h3 className="text-xl font-bold text-slate-900 mb-4">IRB Hub</h3>
      <p className="text-sm text-slate-600 mb-6">
        Use the cards below to explore the scope of the IRB, key regulations for research groups, the application
        process, and the comprehensive ethics guide.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* IRB Overview & Scope */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
          <h4 className="text-lg font-bold text-slate-900 mb-2">IRB Overview &amp; Scope</h4>
          <p className="text-sm text-slate-600 mb-4">
            Learn what the IRB is, which ADHD-related studies require review, and who is expected to seek approval
            before starting a project.
          </p>
          <a
            href={getHref('irb-overview', basePath, locale)}
            className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View details <span className="ml-1">→</span>
          </a>
        </div>

        {/* Regulations & Conditions */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
          <h4 className="text-lg font-bold text-slate-900 mb-2">Regulations &amp; Conditions for Research Groups</h4>
          <p className="text-sm text-slate-600 mb-4">
            Summary of expectations for research teams: eligibility, data protection, responsibilities, and conditions
            for maintaining ethical approval.
          </p>
          <a
            href={getHref('irb-regulations', basePath, locale)}
            className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View details <span className="ml-1">→</span>
          </a>
        </div>

        {/* IRB Application Process */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
          <h4 className="text-lg font-bold text-slate-900 mb-2">IRB Application Process</h4>
          <p className="text-sm text-slate-600 mb-4">
            Step-by-step overview of how to prepare and submit an IRB application, including document checklists and
            indicative review timelines.
          </p>
          <a
            href={getHref('irb-process', basePath, locale)}
            className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View details <span className="ml-1">→</span>
          </a>
        </div>

        {/* Comprehensive Ethics Guide */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
          <h4 className="text-lg font-bold text-slate-900 mb-2">Comprehensive Ethics Guide</h4>
          <p className="text-sm text-slate-600 mb-4">
            A long-form reference that mirrors the national research ethics guide, tailored to ADHD
            research and practice in Saudi Arabia.
          </p>
          <a
            href={getHref('irb-guide', basePath, locale)}
            className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View details <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default IrbPage;
