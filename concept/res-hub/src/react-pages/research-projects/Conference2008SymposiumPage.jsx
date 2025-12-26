import React from 'react';
import {
  Calendar,
  ArrowLeft,
  MapPin,
  Users,
  Building2,
  Crown,
  GraduationCap,
  Megaphone,
  Palette,
  Video,
  FileDown,
  ShieldCheck,
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const Conference2008SymposiumPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => {
  const tracks = [
    {
      title: 'Train-the-Trainer (Educators)',
      icon: GraduationCap,
      description:
        'A practical, workshop-led programme designed to strengthen educator capacity and support sustainable nationwide training.',
    },
    {
      title: 'Parent programme',
      icon: Users,
      description:
        'Core ADHD knowledge for families, with space for questions and lived-experience perspectives.',
    },
    {
      title: "Children's track: \"The Creative Me\"",
      icon: Palette,
      description:
        'Parallel activities for children (6–12 years), centred on engagement and positive self-expression.',
    },
    {
      title: 'Media engagement',
      icon: Megaphone,
      description:
        'Sessions designed to strengthen public communication and improve the quality of ADHD coverage and awareness efforts.',
    },
    {
      title: 'Live international link',
      icon: Video,
      description:
        'A live connection between educators in Riyadh and teachers in Dalton, Georgia (USA) to share classroom experiences and strategies.',
    },
  ];

  const speakers = [
    {
      name: 'Chris A. Zeigler Dendy',
      role: 'International guest speaker',
      focus:
        'ADHD across the lifespan; executive function; parent and educator training (incl. Train-the-Trainer sessions).',
    },
    {
      name: 'Dr Billie A. Abney, D.C., CCSP',
      role: 'International guest speaker',
      focus:
        'Practical classroom strategies and teaching approaches for students with ADHD; Train-the-Trainer teaching sessions.',
    },
    {
      name: 'Alex Zeigler',
      role: 'International contributor',
      focus:
        'Youth and family perspectives; media and educational materials on living with ADHD.',
    },
    {
      name: 'HRH Prince Mohammed bin Nawwaf Al-Saud',
      role: 'Patron / keynote welcome ceremony',
      focus:
        'Event patronage and welcome ceremony (as listed in the programme).',
    },
    {
      name: 'Dr Suad Al Yamani',
      role: 'Welcome & introductions; conference lead',
      focus:
        'Opening remarks and symposium leadership.',
    },
    {
      name: 'Dr Bader Krayem',
      role: 'Media conference speaker',
      focus: 'Media role in the Arab world and improving ADHD awareness.',
    },
    {
      name: 'Dr Najeeb Al Zamil',
      role: 'Media conference speaker',
      focus: "Developed countries' media experiences and improving ADHD awareness.",
    },
    {
      name: 'Ayn Raat Art Group',
      role: "Children's track facilitators",
      focus: '"The Creative Me" art workshop (children 6–12).',
    },
    {
      name: 'Nahed AlShawwa',
      role: "Children's track facilitator",
      focus: '"Dreams Come True" creative thinking illustrated workshop (with Ayn Raat Art Group).',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Breadcrumb basePath={basePath} />

      <div>
        <a
          href={getHref('conferences', basePath)}
          className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-800 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
        >
          <ArrowLeft size={16} className="mr-1" aria-hidden="true" />
          Back to Conferences
        </a>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8">
          <div className="flex flex-col gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 bg-emerald-100/70 border border-emerald-200 rounded-full px-3 py-1">
                Conference & Capacity-Building Milestone
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                The Second Saudi International Conference on ADHD
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-slate-700">
                <span className="inline-flex items-center rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-sm">
                  <Calendar size={16} className="mr-2 text-emerald-700" aria-hidden="true" />
                  <span className="font-semibold">25–29 October 2008</span>
                </span>
                <span className="inline-flex items-center rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-sm">
                  <MapPin size={16} className="mr-2 text-emerald-700" aria-hidden="true" />
                  Tuwaiq Palace, Diplomatic Quarter, Riyadh
                </span>
              </div>
            </div>

            <p className="text-slate-700 max-w-3xl leading-relaxed">
              Also presented as the <span className="font-semibold">2nd International Symposium on ADHD</span>, this five-day event
              advanced the national agenda from awareness-raising toward practical capacity building—particularly through educator-focused
              training.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Overview</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                The 2008 conference built on the momentum created by the 2004 symposium, expanding beyond general awareness to deliver
                structured, skills-focused training across multiple audiences.
              </p>
              <p>
                A distinctive feature of this event was the emphasis on <span className="font-semibold">training the trainers</span>—equipping a core
                cohort of educators to deliver ADHD training across the Kingdom, and establishing a sustainable model of knowledge transfer.
              </p>
            </div>
          </section>

          <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Programme structure</h2>
            <p className="text-slate-600 mb-6 max-w-3xl">
              To keep conference pages consistent, we summarise programme content using a small number of standard "tracks".
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tracks.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{t.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{t.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-emerald-700" aria-hidden="true" />
              <h2 className="text-xl font-bold text-slate-900">Speakers & facilitators</h2>
            </div>
            <p className="text-slate-600 mb-6 max-w-3xl">
              This list is compiled from the official symposium programme and highlights the main guest speakers,
              media-session speakers, and children's-track facilitators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {speakers.map((s) => (
                <div key={s.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">{s.name}</h3>
                      <div className="text-sm text-emerald-700 font-semibold mt-1">{s.role}</div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 whitespace-nowrap">
                      Programme
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">{s.focus}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={20} className="text-emerald-700" aria-hidden="true" />
              <h2 className="text-xl font-bold text-slate-900">Committees</h2>
            </div>
            <p className="text-slate-600 mb-6 max-w-3xl">
              The following names are preserved as an archive record from the original conference page.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Conference Program Chairs</h3>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Dr Suad Al Yamani</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Nahed El Shawa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Ragdha Rabah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Dr Fatima Alkuraiji</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Khalaf Melfi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Abdulaziz Al Mughim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Asma Al Dakheil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Khaled Al Shalhoub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Dr. Haniah Marzan</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Conference Workgroup</h3>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Nadjwa Khalifa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Haya Al Grain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Anna Liza Casabuena</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Maha Khalaf</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Bader Al Otaibi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Majed Al Swaileh</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Saleh Al Qasouri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Reem Al Atuel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Yasser Al Ghamdi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Ahmad Aleid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Kholod Al Omani</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Sarah Al Rasheed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Hessah Haj</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>Latifah Al Sanea</span>
                  </li>
                </ul>
              </div>
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
                <h3 className="text-sm font-semibold text-slate-500 mb-1">Organiser</h3>
                <p className="text-sm font-medium text-slate-900">ADHD Support Group (precursor to the Saudi ADHD Society)</p>
              </div>
            </div>
          </section>

          {/* Patronage */}
          <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Crown size={18} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-1">Patronage</h3>
                <p className="text-sm font-medium text-slate-900">HRH Prince Mohammed bin Nawwaf bin Abdulaziz</p>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Resources</h2>
            <div className="space-y-3">
              <a
                href="https://adhd.org.sa/assets/resources/programs/2nd%20Symposium%20Program.pdf"
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
                    <p className="text-sm text-slate-600 mt-1">Official programme document for the 2nd International Symposium (2008).</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </aside>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Crown size={18} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Attribution & provenance</h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              This page is presented as part of the Saudi ADHD Society's historical timeline. For early milestones that predate the Society's
              formal licensing (2009), attribution is preserved by clearly naming the organising entity and committees, and by linking to any
              available archival materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference2008SymposiumPage;
