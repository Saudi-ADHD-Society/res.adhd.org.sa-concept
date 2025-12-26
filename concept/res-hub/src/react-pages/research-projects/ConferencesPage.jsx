import React from 'react';
import { Calendar, Flag, ChevronRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const ConferencesPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => {
  const upcomingEvents = [
    {
      id: 'conference-2026-research-forum',
      date: '2026',
      dateLabel: '2026',
      title: 'Saudi ADHD Society Research Forum 2026',
      description: 'Details coming soon.',
      kind: 'conference',
      owner: 'Saudi ADHD Society',
      role: 'Society-led',
      isUpcoming: true
    }
  ];

  const timelineItems = [
    {
      id: 'conference-2024-research-forum',
      date: '2024-11-15',
      dateLabel: '15 November 2024',
      title: 'Saudi ADHD Society Research Forum & Grant Launch',
      description:
        'Launched the first dedicated research forum and the Saudi ADHD Society Research Grant, marking a shift from dissemination to active knowledge creation.',
      kind: 'conference',
      owner: 'Saudi ADHD Society',
      role: 'Society-led'
    },
    {
      id: 'conference-2021-agree-rex-workshop',
      date: '2021-03-06',
      dateLabel: '6 March 2021',
      title:
        'Satellite Workshop — AGREE‑REX Appraisal & Implementation of the Saudi ADHD Clinical Practice Guideline',
      description:
        'Part of 5th International Psychiatry Conference, hosted by Psychiatry Dept., KSU College of Medicine.',
      kind: 'conference',
      owner: 'KSU College of Medicine (Psychiatry Dept.)',
      role: 'Society contribution'
    },

    // Milestones (dates may be refined as records are curated)
    {
      id: 'milestone-research-unit-established',
      date: 'TBC',
      dateLabel: 'TBC',
      title: 'Research Unit established',
      description:
        'Formalisation of the Society’s research function (structure, governance, and operating model). Date and artefacts to be confirmed.',
      kind: 'milestone',
      owner: 'Saudi ADHD Society',
      role: 'Society-led'
    },
    {
      id: 'milestone-irb-established',
      date: '2022-11-01',
      dateLabel: 'November 2022 (approx.)',
      title: 'Research Ethics Committee registered with the National Committee of Bioethics (NCBE)',
      description:
        'Research Ethics Committee registered with the National Committee of Bioethics (NCBE). Registration number: HO-01-R-119.',
      kind: 'milestone',
      owner: 'NCBE (KACST)',
      role: 'Society-led research governance milestone'
    },
    {
      id: 'milestone-national-survey-launched',
      date: 'TBC',
      dateLabel: 'TBC',
      title: 'National ADHD Survey launched',
      description:
        'Launch of a national survey initiative to map needs, pathways, and priorities. Date and outputs to be confirmed.',
      kind: 'milestone',
      owner: 'Saudi ADHD Society',
      role: 'Society-led'
    },
    {
      id: 'milestone-national-project-launched',
      date: '2008-07-06',
      dateLabel: '6 July 2008',
      title: 'National ADHD Project approved (Shura Council resolution)',
      description:
        'Approval of the national project to address Attention Deficit/Hyperactivity Disorder (ADHD). This is included as a national policy milestone within the Society’s origin chain; detail pages will document ownership, committees, and source artefacts.',
      kind: 'milestone',
      owner: 'Shura Council (Saudi Arabia)',
      role: 'National policy milestone (pre‑Society origin)'
    },

    // Conferences (historical)
    {
      id: 'conference-2014-pla-group-4',
      date: '2014-04-12',
      dateLabel: '12–17 April 2014',
      title: 'Saudi Pediatric Leadership Alliance (PLA), Group 4',
      description: 'Group 4 sessions held 12–14 April 2014 and 15–17 April 2014.',
      kind: 'conference',
      owner: 'ADHD Support Group / Partners',
      role: 'Delivered via Support Group'
    },
    {
      id: 'conference-2012-pla-group-3',
      date: '2012-12-08',
      dateLabel: '8–10 December 2012',
      title: 'Second Saudi Pediatric Leadership Alliance (PLA), Group 3',
      description: 'Second PLA program for Group 3 participants.',
      kind: 'conference',
      owner: 'ADHD Support Group / Partners',
      role: 'Delivered via Support Group'
    },
    {
      id: 'conference-2012-pla-groups-1-2',
      date: '2012-02-04',
      dateLabel: '4–9 February 2012',
      title: 'Saudi Pediatric Leadership Alliance (PLA), Groups 1 & 2',
      description: 'Group 1: 4–6 February 2012; Group 2: 7–9 February 2012.',
      kind: 'conference',
      owner: 'ADHD Support Group / Partners',
      role: 'Delivered via Support Group'
    },
    {
      id: 'conference-2009-medical-home',
      date: '2009-11-07',
      dateLabel: '7–11 November 2009',
      title: 'The 3rd International Symposium: Medical Home: An Innovative Approach to ADHD',
      description: 'Established the "Medical Home" approach to ADHD care.',
      kind: 'conference',
      owner: 'Saudi ADHD Society / Partners',
      role: 'Society-led'
    },
    {
      id: 'milestone-2009-society-established',
      date: '2009',
      dateLabel: '2009',
      title: 'Saudi ADHD Society established (independent legal entity)',
      description:
        'The ADHD Support Group obtained a separate legal identity to meet growing operational and financial demands.',
      kind: 'milestone',
      owner: 'Saudi ADHD Society',
      role: 'Legal establishment'
    },
    {
      id: 'conference-2008-symposium',
      date: '2008-10-25',
      dateLabel: '25–29 October 2008',
      title: 'The 2nd International Symposium on ADHD',
      description: 'Second international symposium building on the foundation of the 2004 event.',
      kind: 'conference',
      owner: 'KFSH&RC / ADHD Support Group',
      role: 'Pre‑Society origin'
    },
    {
      id: 'milestone-2004-support-group-established',
      date: '2004-07-01',
      dateLabel: 'July 2004',
      title: 'ADHD Support Group established under KFSH&RC',
      description:
        'Established as a formal initiative under the umbrella of King Faisal Specialist Hospital & Research Centre (KFSH&RC) to coordinate ADHD awareness, training, and services.',
      kind: 'milestone',
      owner: 'KFSH&RC (Dept. of Neurosciences)',
      role: 'Pre‑Society origin'
    },
    {
      id: 'conference-2004-symposium',
      date: '2004-12-07',
      dateLabel: '7–8 December 2004',
      title: 'The First Middle Eastern Symposium on ADHD',
      description: 'The foundational event that set the stage for evidence-based ADHD care in the region.',
      kind: 'conference',
      owner: 'KFSH&RC (Dept. of Neurosciences)',
      role: 'Pre‑Society origin'
    }
  ];

  const parseDate = (value) => {
    const t = Date.parse(value);
    return Number.isNaN(t) ? null : t;
  };

  const sortedTimelineItems = [...timelineItems].sort((a, b) => {
    const ta = parseDate(a.date);
    const tb = parseDate(b.date);
    if (ta === null && tb === null) return 0;
    if (ta === null) return 1;
    if (tb === null) return -1;
    return tb - ta;
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} />
      
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Conferences and Milestones</h1>
        <p className="text-slate-600 max-w-3xl">
          A documented timeline of the Saudi ADHD Society’s scientific leadership — including pre‑Society origin milestones (under KFSH&RC and the ADHD Support Group)
          that directly contributed to the Society’s establishment and later national initiatives.
        </p>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-semibold text-slate-800">Editorial note (Origins timeline)</div>
          <p className="mt-1 text-sm text-slate-600 max-w-3xl">
            The Saudi ADHD Society was established later as an independent legal entity. We include earlier milestones because they document the clinical, educational,
            and community workstreams that led to the formal establishment of the ADHD Support Group under KFSH&RC and ultimately the Saudi ADHD Society.
            Each item specifies the organisational owner and the Society’s role.
          </p>
        </div>
      </div>

      {/* Upcoming Conferences Section */}
      {upcomingEvents.length > 0 && (
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Upcoming Events</h2>
            <p className="text-slate-500">Future conferences, forums, and programme milestones</p>
          </div>

          <div className="relative border-l-2 border-emerald-400 ml-3 md:ml-6 space-y-8 pb-4">
            {upcomingEvents.map((conference) => (
              <div key={conference.id} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-1 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white shadow-sm animate-pulse"></div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <span className="text-sm font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full w-fit mb-2 md:mb-0">
                      {conference.dateLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-2 py-1 rounded-full w-fit">
                        Upcoming
                      </span>
                      <span className="text-xs text-slate-600 font-semibold bg-white/70 px-2 py-1 rounded-full border border-emerald-200">
                        {conference.kind === 'milestone' ? 'Milestone' : 'Conference'}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{conference.title}</h3>
                  <p className="text-slate-600 mb-4">{conference.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="text-xs font-semibold text-slate-700 bg-white/70 border border-emerald-200 px-2 py-1 rounded-full">
                      Owner: {conference.owner}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 bg-white/70 border border-emerald-200 px-2 py-1 rounded-full">
                      Role: {conference.role}
                    </span>
                  </div>
                  <a
                    href={getHref(conference.id, basePath)}
                    className="inline-flex items-center text-sm text-emerald-700 font-semibold hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    View Details <ChevronRight size={16} className="ml-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Past Conferences Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Timeline</h2>
          <p className="text-slate-500">Conferences and institutional milestones</p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
          {sortedTimelineItems.map((conference, index) => (
            <div key={conference.id} className="relative pl-8 md:pl-12">
              <div className={`absolute -left-[9px] top-1 w-5 h-5 rounded-full border-4 border-white ${
                index === 0 ? 'bg-emerald-600 shadow-sm' : 'bg-slate-300'
              }`}></div>
              <div className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all ${
                index === 0 ? '' : 'opacity-90 hover:opacity-100'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <span className="text-sm font-bold text-slate-600 bg-slate-50 px-3 py-1 rounded-full w-fit">
                    {conference.dateLabel}
                  </span>

                  <div className="flex items-center gap-2 md:justify-end">
                    <span className="text-xs text-slate-700 font-semibold bg-slate-50 px-2 py-1 rounded-full border border-slate-200 inline-flex items-center gap-1">
                      {conference.kind === 'milestone' ? (
                        <>
                          <Flag size={14} aria-hidden="true" /> Milestone
                        </>
                      ) : (
                        <>
                          <Calendar size={14} aria-hidden="true" /> Conference
                        </>
                      )}
                    </span>
                    {index === 0 && (
                      <span className="text-xs text-slate-400">Most Recent</span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{conference.title}</h3>
                <p className="text-slate-600 mb-4">{conference.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-full">
                    Owner: {conference.owner}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-full">
                    Role: {conference.role}
                  </span>
                </div>
                <a
                  href={getHref(conference.id, basePath)}
                  className="inline-flex items-center text-sm text-emerald-700 font-semibold hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  View Details <ChevronRight size={16} className="ml-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ConferencesPage;
