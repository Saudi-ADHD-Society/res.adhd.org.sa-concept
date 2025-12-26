import React from 'react';
import {
  Calendar,
  MapPin,
  Building2,
  Users,
  BookOpen,
  Award,
  ArrowLeft,
  FileDown,
  ShieldCheck,
  Flag,
  CheckCircle,
  Target,
  Menu,
  Handshake,
  FileText,
  BarChart3,
  Video,
  Image,
  FileCheck,
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const Conference2004SymposiumPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    
    {/* Header */}
    <div>
      <a
        href={getHref('conferences', basePath)}
        className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-800 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
      >
        <ArrowLeft size={16} className="mr-1" aria-hidden="true" />
        Back to Conferences & Milestones
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
              <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-300 px-3 py-1 text-sm">
                <CheckCircle size={16} className="mr-2 text-slate-600" aria-hidden="true" />
                <span className="font-semibold text-slate-700">Status: Archived</span>
              </span>
            </div>
          </div>

          <p className="text-slate-700 max-w-3xl leading-relaxed">
            Held at King Faisal Specialist Hospital & Research Centre (KFSH&RC), Riyadh, this symposium was the first major ADHD conference of its kind in the Middle East.
            It convened clinicians, educators, policymakers, and families, and concluded with a formal set of cross‑sector recommendations that shaped the next phase of ADHD development in Saudi Arabia.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {/* Overview */}
        <section id="overview" className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Overview</h2>
          
          {/* Objectives */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Target size={18} className="text-emerald-700" aria-hidden="true" />
              Objectives
            </h3>
            <ul className="space-y-2 text-slate-700 ml-7">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Provide up‑to‑date scientific updates on ADHD diagnosis, screening, treatment, and management.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Improve cross‑sector understanding among clinicians, educators, and families.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Support a balanced approach across educational techniques, psychosocial interventions, and medication.</span>
              </li>
            </ul>
          </div>

          {/* Topic Areas */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-emerald-700" aria-hidden="true" />
              Topic Areas
            </h3>
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

          <p className="text-slate-700 leading-relaxed">
            The symposium focused on region‑specific issues in the diagnosis, treatment, and management of ADHD. It addressed topics relevant to parents and educators,
            alongside multidisciplinary clinical updates for healthcare professionals.
          </p>
        </section>

        {/* Scientific Program */}
        <section id="scientific-program" className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Scientific Program</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The symposium featured medical and educational tracks with parallel sessions in Arabic and English, targeting clinicians, teachers, psychologists, social workers, parents, and individuals with ADHD.
          </p>
          <p className="text-slate-600 italic">
            [Detailed programme information to be added]
          </p>
        </section>

        {/* Keynote & Featured Speakers */}
        <section id="keynote-speakers" className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Award size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Keynote & Featured Speakers</h2>
          </div>
          <p className="text-slate-600 italic">
            [Keynote and featured speaker information to be added]
          </p>
        </section>

        {/* Speakers */}
        <section id="speakers" className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Users size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Speakers</h2>
          </div>
          <p className="text-slate-600 italic">
            [Complete speaker list to be added]
          </p>
        </section>

        {/* Themes and Tracks / Agenda Overview */}
        <section id="themes-tracks" className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Themes and Tracks</h2>
          </div>
          <p className="text-slate-600 italic">
            [Themes and tracks information to be added]
          </p>
        </section>

        {/* Accreditation */}
        <section id="accreditation" className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Accreditation</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900 mb-3">CME Credits</h3>
            <p className="text-sm text-slate-700">
              Accredited for continuing medical education (CME) by the Saudi Council for Health Specialties (SCFHS) and the American Academy of Continuing Medical Education (AACME).
            </p>
            <p className="text-sm text-slate-600 mt-2 italic">
              [Specific credit hours to be added]
            </p>
          </div>
        </section>

        {/* Governance */}
        <section id="governance" className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-8">
          <div className="flex items-center gap-2">
            <Building2 size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Governance</h2>
          </div>

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

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-3">Key coordinating roles</h3>
            <p className="text-sm text-slate-700">
              Conference coordination and secretariat teams (KFSH&RC Academic & Training Affairs and Neurosciences)
            </p>
          </div>
        </section>

        {/* Proceedings */}
        <section id="proceedings" className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FileText size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Proceedings</h2>
          </div>

          {/* Key Outcomes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Outcomes</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
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
          </div>

          {/* Statistics & Impact */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <BarChart3 size={18} className="text-emerald-700" aria-hidden="true" />
              Statistics & Impact
            </h3>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-600 italic">
                [Attendance data and impact metrics to be added]
              </p>
            </div>
          </div>

          {/* Academic Indexing */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <FileCheck size={18} className="text-emerald-700" aria-hidden="true" />
              Academic Indexing
            </h3>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-600 italic">
                [Citation information and academic indexing details to be added]
              </p>
            </div>
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
        {/* Page Navigation */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Menu size={18} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-500 mb-3">Page Navigation</h3>
              <nav className="space-y-2">
                <a
                  href="#overview"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Overview
                </a>
                <a
                  href="#scientific-program"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Scientific Program
                </a>
                <a
                  href="#keynote-speakers"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Keynote & Featured Speakers
                </a>
                <a
                  href="#speakers"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Speakers
                </a>
                <a
                  href="#themes-tracks"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Themes and Tracks
                </a>
                <a
                  href="#accreditation"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Accreditation
                </a>
                <a
                  href="#governance"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Governance
                </a>
                <a
                  href="#proceedings"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Proceedings
                </a>
              </nav>
            </div>
          </div>
        </section>

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

        {/* Patronage */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Award size={18} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Patronage</h3>
              <p className="text-sm font-medium text-slate-900">
                HRH Prince Talal bin Abdulaziz
              </p>
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
