import React from 'react';
import { Calendar, MapPin, Building2, Users, BookOpen, Award, ArrowLeft, Download, ShieldCheck, Flag, FileDown } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const Conference2004SymposiumPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    
    <div>
      <a
        href={getHref('conferences', basePath)}
        className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-800 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
      >
        <ArrowLeft size={16} className="mr-1" aria-hidden="true" />
        Back to Conferences and Milestones
      </a>
      
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8">
        <div className="flex flex-col gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700 bg-slate-100/70 border border-slate-200 rounded-full px-3 py-1">
              <Flag size={14} aria-hidden="true" /> Pre‑Society origin milestone
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              The First Middle Eastern Symposium on ADHD
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-slate-700">
              <span className="inline-flex items-center rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-sm">
                <Calendar size={16} className="mr-2 text-emerald-700" aria-hidden="true" />
                <span className="font-semibold">7–8 December 2004</span>
                <span className="mx-2 text-slate-400">•</span>
                <span className="text-slate-600">24–25 Shawwal 1425 AH</span>
              </span>
              <span className="inline-flex items-center rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-sm">
                <MapPin size={16} className="mr-2 text-emerald-700" aria-hidden="true" />
                King Faisal Specialist Hospital & Research Centre, Riyadh
              </span>
            </div>
          </div>

          <p className="text-slate-700 max-w-3xl leading-relaxed">
            Held at King Faisal Specialist Hospital & Research Centre (KFSH&RC), Riyadh, this symposium was the first major ADHD conference of its kind in the Middle East.
            It convened clinicians, educators, policymakers, and families, and concluded with a formal set of cross‑sector recommendations that shaped the next phase of ADHD development in Saudi Arabia.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
              Under the auspices of HRH Prince Talal bin Abdulaziz
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {/* Overview */}
        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Overview</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              The symposium focused on region‑specific issues in the diagnosis, treatment, and management of ADHD. It addressed topics relevant to parents and educators,
              alongside multidisciplinary clinical updates for healthcare professionals.
            </p>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-slate-800 font-semibold mb-2">
                <BookOpen size={18} aria-hidden="true" /> Educational objectives (summary)
              </div>
              <ul className="space-y-1 text-slate-600 list-disc pl-5">
                <li>Provide up‑to‑date scientific updates on ADHD diagnosis, screening, treatment, and management.</li>
                <li>Improve cross‑sector understanding among clinicians, educators, and families.</li>
                <li>Support a balanced approach across educational techniques, psychosocial interventions, and medication.</li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-slate-800 font-semibold mb-2">
                <Award size={18} aria-hidden="true" /> Topic areas (high‑level)
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Diagnosis',
                  'Neurobiology',
                  'Management advances',
                  'Cultural attitudes',
                  'Co‑morbidities',
                  'Adult ADHD',
                  'Education & ADHD'
                ].map((t) => (
                  <span key={t} className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programme structure */}
        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Programme structure</h2>
          <p className="text-slate-600 mb-6 max-w-3xl">
            The symposium featured medical and educational tracks with parallel sessions in Arabic and English, targeting clinicians, teachers, psychologists, social workers, parents, and individuals with ADHD.
          </p>
        </section>

        {/* Committees */}
        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Committees</h2>
          </div>
          <p className="text-slate-600 mb-6 max-w-3xl">
            The following committees were responsible for organizing and coordinating the symposium.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 size={16} className="text-emerald-700" aria-hidden="true" />
                Organizing Committee
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Dr Suad Al‑Yamani (Chair)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-emerald-700" aria-hidden="true" />
                Scientific Committee
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Dr Mohammed Al‑Dosari (Chair)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-3">Key coordinating roles</h3>
            <p className="text-sm text-slate-700">
              Conference coordination and secretariat teams (KFSH&RC Academic & Training Affairs and Neurosciences)
            </p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Key outcomes</h2>
          <p className="text-slate-600 max-w-3xl mb-6">
            The symposium concluded with a structured set of recommendations across five strategic axes. These axes became a blueprint for subsequent implementation work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Education & Awareness',
                desc: 'Improving public understanding and strengthening family and community awareness.'
              },
              {
                title: 'Diagnosis & Treatment',
                desc: 'Promoting specialised services and more consistent diagnostic and clinical approaches.'
              },
              {
                title: 'Support',
                desc: 'Strengthening coordinated support activities and sustainable resourcing.'
              },
              {
                title: 'Research',
                desc: 'Advancing field studies and knowledge generation (including prevalence and service needs).'
              },
              {
                title: 'Legislation / Policy',
                desc: 'Supporting the enabling policy environment for access to services and rights.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="font-semibold text-slate-900">{item.title}</div>
                <div className="mt-1 text-sm text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="text-sm font-semibold text-emerald-900">Why this appears on the Research Portal</div>
            <p className="mt-2 text-sm text-emerald-800 max-w-3xl">
              Although this symposium was organised under KFSH&RC, it is included here as a documented origin milestone that helped catalyse cross‑sector ADHD work,
              including the development of support activities that later evolved into the Saudi ADHD Society.
            </p>
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        {/* Organisational owner */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Building2 size={18} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Organisational owner</h3>
              <p className="text-sm font-medium text-slate-900">Department of Neurosciences, KFSH&RC (Riyadh)</p>
            </div>
          </div>
        </section>

        {/* Accreditation */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <ShieldCheck size={18} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Accreditation</h3>
              <p className="text-sm font-medium text-slate-900">
                Accredited for continuing medical education (CME) by the Saudi Council for Health Specialties (SCFHS) and the American Academy of Continuing Medical Education (AACME).
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Resources</h2>
          <div className="space-y-3">
            <a
              href="https://adhd.org.sa/wp-content/uploads/2004/12/ADHD-Symposium-2004-Program.pdf"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <FileDown size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-slate-900 group-hover:text-slate-950">
                      Symposium programme (PDF)
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5">
                      Download
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">Official programme schedule and session listing.</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </aside>
    </div>
  </div>
);

export default Conference2004SymposiumPage;
