import React from 'react';
import { ExternalLink } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const publications = [
  {
    id: 'adhd-rs5-adolescents-2025',
    year: 2025,
    category: 'Rating Scale Validation',
    title:
      'Validation of the Arabic ADHD rating Scale-5 for adolescents in Saudi Arabia using structural equation modeling',
    authorsShort: 'Alqahtani, M. M. J., Al Saud, N. M., Alsharef, N. M., et al.',
    journal: 'Scientific Reports',
    citation: 'Sci Rep, 15(1), 26866.',
    doi: '10.1038/s41598-025-12976-7',
    slug: '10.1038-s41598-025-12976-7',
    url: null, // Will be generated from slug
    openAccess: true
  },
  {
    id: 'asrs5-adults-2025',
    year: 2025,
    category: 'Rating Scale Validation',
    title:
      'Standardization of the Arabic Version of the Adult ADHD Self-Report Screening Scale for DSM-5 (ASRS-5) Among Adults in Saudi Arabia: Variability of ADHD Screening According to Sociodemographic Variables',
    authorsShort: 'Alqahtani, M. M. J., Al Saud, N. M., Alsharef, N. M., et al.',
    journal: 'Journal of Attention Disorders',
    citation: 'J Atten Disord, 29(6), 445–457.',
    doi: '10.1177/10870547251313879',
    slug: '10.1177-10870547251313879',
    url: null, // Will be generated from slug
    openAccess: true
  },
  {
    id: 'vadrs-a-2024',
    year: 2024,
    category: 'Rating Scale Validation',
    title:
      'Psychometric Properties of the Arabic Vanderbilt Children\'s ADHD Diagnostic Rating Scale (VADRS-A) in a Saudi Population Sample',
    authorsShort: 'Alqahtani, M. M. J., Al Saud, N. M., Alsharef, N. M., et al.',
    journal: 'Scandinavian Journal of Child and Adolescent Psychiatry and Psychology',
    citation: 'SJCAPP, 12(1), 72–83.',
    doi: '10.2478/sjcapp-2024-0008',
    slug: '10.2478-sjcapp-2024-0008',
    url: null, // Will be generated from slug
    openAccess: true
  },
  {
    id: 'wf-adhd-consensus-2021',
    year: 2021,
    category: 'International Consensus',
    title:
      'The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder',
    authorsShort: 'Faraone, S. V., et al.',
    journal: 'Neuroscience & Biobehavioral Reviews',
    citation: 'Neurosci Biobehav Rev, 128, 789–818.',
    doi: '10.1016/j.neubiorev.2021.01.022',
    slug: null,
    url: 'https://doi.org/10.1016/j.neubiorev.2021.01.022',
    openAccess: true
  },
  {
    id: 'saudi-adhd-cpg-2020',
    year: 2020,
    category: 'Clinical Practice Guideline',
    title:
      'Evidence-Based Clinical Practice Guideline for Management of Attention Deficit Hyperactivity Disorder (ADHD) in Saudi Arabia',
    authorsShort: 'Saudi ADHD Society',
    journal: 'Saudi ADHD Society (National ADHD CPG)',
    citation: 'Riyadh: Saudi ADHD Society; 2020.',
    doi: null,
    slug: null,
    url: 'https://cpg.adhd.org.sa/wp-content/uploads/2020/11/ADHD-CPG-EN-1.6.3-digital.pdf',
    openAccess: true
  },
  {
    id: 'adapting-cpgs-saudi-2021',
    year: 2021,
    category: 'Clinical Practice Guideline – Development',
    title:
      'Adapting evidence-based clinical practice guidelines for people with attention deficit hyperactivity disorder in Saudi Arabia: process and outputs of a national initiative',
    authorsShort: 'Bashiri, F. A., Albatti, T. H., Hamad, M. H., et al.',
    journal: 'Child and Adolescent Psychiatry and Mental Health',
    citation: 'Child Adolesc Psychiatry Ment Health, 15(1), 1–16.',
    doi: '10.1186/s13034-020-00351-5',
    slug: '10.1186-s13034-020-00351-5',
    url: null, // Will be generated from slug
    openAccess: true
  },
  {
    id: 'adhd-cpg-appraisal-agreeii-2019',
    year: 2019,
    category: 'Systematic Review / Guideline Evaluation',
    title:
      'Appraisal of clinical practice guidelines for the management of attention deficit hyperactivity disorder (ADHD) using the AGREE II Instrument: A systematic review',
    authorsShort: 'Amer, Y. S., Al-Joudi, H. F., Varnham, J. L., et al.',
    journal: 'PLOS ONE',
    citation: 'PLOS ONE, 14(7), e0219239.',
    doi: '10.1371/journal.pone.0219239',
    slug: '10.1371-journal.pone.0219239',
    url: null, // Will be generated from slug
    openAccess: true
  }
];

const ResearchOutputPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => {
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  // Generate URL for each publication
  const publicationsWithUrls = sortedPublications.map((pub) => {
    const url = pub.url || (pub.slug ? `${basePath}library/${pub.slug}/` : null);
    const isExternal = url && (url.startsWith('http://') || url.startsWith('https://'));
    return { ...pub, url, isExternal };
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} locale={locale} />
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Saudi ADHD Society Research Output &amp; Publications</h2>
          <p className="text-sm text-slate-500 mt-1">
            Selected peer-reviewed work from the Saudi ADHD Society Research &amp; Studies Unit.
          </p>
        </div>
        <span className="text-sm text-slate-500">For researchers and policy makers</span>
      </div>

      <div className="space-y-4">
        {publicationsWithUrls.map((pub) => (
          <div
            key={pub.id}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded">
                    {pub.year}
                  </span>
                  <span className="text-slate-400 text-xs uppercase tracking-wider">{pub.category}</span>
                </div>
                <a
                  href={pub.url}
                  {...(pub.isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="text-lg font-bold text-slate-900 mb-1 hover:text-emerald-700 inline-block"
                >
                  {pub.title}
                </a>
                <p className="text-sm text-slate-600 italic mt-1">{pub.authorsShort}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {pub.journal}
                  {pub.citation ? ` • ${pub.citation}` : ''}
                </p>
                {pub.doi && (
                  <p className="text-xs text-slate-500 mt-1">
                    DOI: <span className="underline">{pub.doi}</span>
                  </p>
                )}
                {pub.openAccess && (
                  <span className="inline-flex items-center mt-2 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                    Open Access
                  </span>
                )}
              </div>
              <a
                href={pub.url}
                {...(pub.isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="text-emerald-600 hover:text-emerald-700 ml-4"
                aria-label="Open publication"
              >
                <ExternalLink size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchOutputPage;


