import React from 'react';
import {
  Calendar,
  ArrowLeft,
  MapPin,
  Users,
  Globe,
  Award,
  BookOpen,
  ExternalLink,
  Building2,
  Megaphone,
  Heart,
  DollarSign,
  Briefcase,
  Wrench,
  Palette,
  ShieldCheck,
  FileDown,
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const Conference2009MedicalHomePage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 3rd International Symposium: Medical Home — An Innovative Approach to ADHD
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-slate-700">
              <span className="inline-flex items-center rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-sm">
                <Calendar size={16} className="mr-2 text-emerald-700" aria-hidden="true" />
                <span className="font-semibold">7–11 November 2009</span>
                <span className="mx-2 text-slate-400">•</span>
                <span className="text-slate-600">19–23 Dhul-Qaʿdah 1430H</span>
              </span>
              <span className="inline-flex items-center rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-sm">
                <MapPin size={16} className="mr-2 text-emerald-700" aria-hidden="true" />
                King Faisal Conference Hall, Riyadh
              </span>
            </div>
          </div>

          <p className="text-slate-700 max-w-3xl leading-relaxed">
            A landmark capacity-building symposium delivered with the American Academy of Pediatrics (AAP), introducing the
            "Medical Home" model and hands-on application of the AAP ADHD Toolkit—shifting the national conversation from
            awareness to structured, multi-sector pathways of care.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-700 text-white px-3 py-1 text-xs font-semibold">
              Clinical pathway reform
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">
              International partnership (AAP)
            </span>
            <span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
              Multi-track training model
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
              Building on earlier national momentum, this symposium marked a strategic pivot: from "awareness events" toward a
              structured model of service delivery. In collaboration with the AAP, the programme emphasized coordinated systems of
              care—bringing together clinicians, educators, parents, and emerging community roles such as ADHD coaching.
            </p>
            <p>
              A core feature was applied training around the AAP ADHD Toolkit, supporting standardized assessment and treatment
              pathways while strengthening multidisciplinary collaboration.
            </p>
          </div>
        </section>

        {/* Programme structure */}
        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Programme structure</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Core tracks (multi-sector)</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">Healthcare professionals:</span> clinical updates (neurobiology, assessment,
                    pharmacological management) and hands-on application of the AAP Toolkit.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">Parents, educators & community:</span> accessible sessions on ADHD basics,
                    functional impact, and rights/needs across settings.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">Intensive training:</span> deeper practical workshops designed to build local
                    training capacity and scalable delivery models.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">ADHD coaching:</span> introduced as a dedicated course for parents, educators,
                    psychologists and counsellors—supporting real-world skills and functional outcomes.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Participant support & delivery design</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">Parallel child & teen activities:</span> enabling parents to attend sessions while
                    young people accessed supportive, structured activities.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">Bilingual access:</span> English as the main conference language with Arabic
                    translation support.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">Implementation orientation:</span> content spanning research, clinical decision
                    support, education strategies, and practical training.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 space-y-8">
          <div className="flex items-center gap-2">
            <Users size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Speakers</h2>
          </div>

          {/* Opening ceremony speakers */}
          <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Award size={16} className="text-emerald-700" aria-hidden="true" />
              Opening ceremony speakers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 flex-shrink-0" aria-hidden="true" />
                <span>HRH Prince Mohammed bin Nawaf bin Abdulaziz</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 flex-shrink-0" aria-hidden="true" />
                <span>Dr Faisal bin Muammar</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 flex-shrink-0" aria-hidden="true" />
                <span>Dr Mohammed bin Hamzah Khushaim</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 flex-shrink-0" aria-hidden="true" />
                <span>Dr Othman Bin Ahmed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 flex-shrink-0" aria-hidden="true" />
                <span>John Forbes</span>
              </div>
            </div>
          </div>

          {/* Speaker categories grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Globe size={16} className="text-emerald-700" aria-hidden="true" />
                International speakers
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>John Forbes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Chris Dendy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Jerry Rushton</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Linda Smith</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Laurel Leslie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>James Swanson</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Bruce Lanphear</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Billie Abney</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Maximilian Muenke</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Peter Jensen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Janet Assheton</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-slate-600" aria-hidden="true" />
                Regional speakers
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                  <span>Ahmed Al-Ansari</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                  <span>Marwan Al-Sharbati</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                  <span>Fathi Al-Zayyat</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-emerald-700" aria-hidden="true" />
                Local speakers
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Raidah Al-Baradie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Khalid Bazaid</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Nihal Mohammed Erfan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mohammed M.S. Jan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Huda Kattan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sahar Al-Khashrami</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Omar Al-Modayfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Saleh Al-Salehi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Saleh Al-Shebil</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Amal Al-Yamani</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Session chairs */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Users size={16} className="text-slate-600" aria-hidden="true" />
              Session chairs (Chairpersons)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>James Swanson</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Peter Jensen</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Jerry Rushton</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Laurel Leslie</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Linda Smith</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Suad Al-Yamani</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Amal Al-Yamani</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Nihal Erfan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Khalid Bazaid</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Huda Kattan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Lamya Jad</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Waleed Al-Tuwaijri</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Ahmed Al-Ansari</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Ahmed Al-Rumayyan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Cheryl Oandassan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Michael Nester</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Mona Al-Sawaf</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Ahmed Hassan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Mohamed Muhaizea</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-slate-600 flex-shrink-0" aria-hidden="true" />
                <span>Khalid Al-Hamed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Committees */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-8">
          <div className="flex items-center gap-2">
            <Building2 size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Committees</h2>
          </div>

          {/* Main committees grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-emerald-700" aria-hidden="true" />
                Scientific Committee
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Suad Al-Yamani</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Nihal Erfan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Huda Kattan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>John Forbes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Laurel Leslie</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Peter Jensen</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Jerry Rushton</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Maximilian Muenke</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Bruce Lanphear</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>James Swanson</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Fran Tait</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Chris Dendy</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 size={16} className="text-emerald-700" aria-hidden="true" />
                Organizing Committee
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Suad Al-Yamani</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Saad Al-Madhy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Waleed Al-Bedaiwy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Abdullah Al-Ogeil</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Salwa Al-Khusheim</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Megaphone size={16} className="text-emerald-700" aria-hidden="true" />
                Media Committee
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Khalaf Melfy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sarah Al-Rasheed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Badr Kuryem</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mohammad Al-Sagga</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Saad Al-Dosari</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Ahmad Al-Jumaih</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Ibrahim Bin Mohammed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Abdulmajeed Al-Shumairi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mohammed Al-Mater</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sultan Al-Othman</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Jahar Al-Bandar</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sawaher Al-Duhaim</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Wafa Bakr Younis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Emad Darwish</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Heart size={16} className="text-emerald-700" aria-hidden="true" />
                Social Committee
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Khalid Al-Shalhoub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sarah Al-Rasheed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Ahmed Al-Eid</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Khalid Al-Shamy</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <DollarSign size={16} className="text-emerald-700" aria-hidden="true" />
                Financial Committee
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Abdulrahman Al-Shereim</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sarah Al-Rasheed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mohamed Al-Thenyan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Staff and support teams */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Briefcase size={16} className="text-emerald-700" aria-hidden="true" />
                Staff / Workgroup
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Najwa Al-Khalifa <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Jeremy Varnham <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sarah Al-Rasheed <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Cecille Sarmac <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Eman Bin Saeed <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Shahinaz Murshed <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Layla Fantoukh <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Ahmed Al-Eid <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Abdallah Al-Ziyady <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Lina Mincari <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Farah Al-Thaker <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Abdullah Al-Nashmy <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Rayyana Al-Qahtani <span className="text-slate-500">(Saudi Arabia)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Errol Alden <span className="text-slate-500">(U.S.)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Maureen De Rosa <span className="text-slate-500">(U.S.)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>John O'Brien <span className="text-slate-500">(U.S.)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mary Ellen Kasper <span className="text-slate-500">(U.S.)</span></span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Wrench size={16} className="text-emerald-700" aria-hidden="true" />
                  Technical Support
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Hamed Al-Daig <span className="text-slate-500">(Saudi Arabia)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Mohammad Al-Jasser <span className="text-slate-500">(Saudi Arabia)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Mohammed El-Zubair <span className="text-slate-500">(Saudi Arabia)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Yousuf Jowhar <span className="text-slate-500">(Saudi Arabia)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Ramel Pascual <span className="text-slate-500">(Saudi Arabia)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Adam Parise <span className="text-slate-500">(U.S.)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Jennifer Kazmierczak <span className="text-slate-500">(U.S.)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Murad Abbas <span className="text-slate-500">(U.S.)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Robert Mitcheff <span className="text-slate-500">(U.S.)</span></span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Palette size={16} className="text-emerald-700" aria-hidden="true" />
                  Graphic Design
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Yaser Al-Ghamdi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Strategic outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">System design</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>
                    Promoted the Medical Home approach: accessible, continuous, comprehensive, family-centred, coordinated,
                    compassionate and culturally effective care.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>
                    Reinforced multidisciplinary practice using shared tools (including structured rating scales and care
                    coordination workflows).
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Capacity-building priorities</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden="true" />
                  <span>
                    Strengthened national training pipelines for clinicians, educators, and families through intensive workshops.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden="true" />
                  <span>
                    Introduced ADHD coaching as a formal competency area to support functional outcomes beyond clinical treatment.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-emerald-50 p-6 mt-6">
            <p className="text-slate-800 leading-relaxed">
              <span className="font-semibold">Why this matters in the Society's timeline:</span> this symposium helped translate policy
              momentum into practice infrastructure—bridging clinical standards, education systems, and family support through a
              coherent model of care.
            </p>
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        {/* Organiser */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Building2 size={18} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Organiser</h3>
              <p className="text-sm font-medium text-slate-900">
                Saudi ADHD Support Group (Saudi Arabia), in partnership with the American Academy of Pediatrics (AAP)
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
                Accredited by the American Academy of Continuing Medical Education (AACME) and approved for 35 CME credits by
                the Saudi Council for Health Specialties
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Resources</h2>
          <div className="space-y-3">
            <a
              href="#"
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
                  <p className="text-sm text-slate-600 mt-1">Official programme document for the 3rd International Symposium (2009).</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group block rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <FileDown size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-slate-900 group-hover:text-slate-950">
                      Symposium report (PDF)
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5">
                      Download
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">Summary report and outcomes from the symposium.</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </aside>
    </div>
  </div>
);

export default Conference2009MedicalHomePage;
