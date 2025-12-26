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
  CheckCircle,
  Target,
  GraduationCap,
  Handshake,
  FileText,
  BarChart3,
  Video,
  Image,
  FileCheck,
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
              <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-300 px-3 py-1 text-sm">
                <CheckCircle size={16} className="mr-2 text-slate-600" aria-hidden="true" />
                <span className="font-semibold text-slate-700">Status: Archived</span>
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
                <span>Establish a strategic partnership between the Saudi ADHD Support Group/Society and the American Academy of Pediatrics to leverage AAP's expertise in training pediatricians to provide high-quality care for children with ADHD.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Provide pediatricians and family physicians with the latest scientific information on different aspects of ADHD, including neurobiological advances, diagnostic approaches, and evidence-based treatment strategies.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Equip healthcare professionals with effective tools to diagnose and treat ADHD through hands-on application of the AAP ADHD Toolkit, supporting standardized assessment and treatment pathways.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Introduce and operationalize the Medical Home model for coordinated, family-centered ADHD care delivery that is accessible, continuous, comprehensive, and culturally effective.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Strengthen multidisciplinary collaboration between healthcare professionals, educators, parents, and community support roles to create integrated care systems.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Establish ADHD coaching as a formal competency area to support functional outcomes beyond clinical treatment, enabling parents, educators, and professionals to develop practical skills.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Promote leadership in healthcare with emphasis on ADHD among Saudi physicians, fostering local expertise and capacity-building.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Develop networking between different groups across Arab countries to promote awareness and improve quality of care for ADHD throughout the region.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Shift the national conversation from awareness-raising toward structured, multi-sector pathways of care that integrate clinical, educational, and family support systems.</span>
              </li>
            </ul>
          </div>

          {/* Learning Objectives */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <GraduationCap size={18} className="text-emerald-700" aria-hidden="true" />
              Learning Objectives
            </h3>
            <p className="text-sm text-slate-600 mb-3">Upon completion of this symposium, participants will be able to:</p>
            <ul className="space-y-2 text-slate-700 ml-7">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Demonstrate awareness of neurobiological advances in ADHD and their implications for clinical practice.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Utilize the AAP ADHD Toolkit effectively to diagnose ADHD cases using standardized assessment protocols.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Treat ADHD cases with appropriate monitoring and management of side effects, following evidence-based treatment guidelines.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Establish a team approach in ADHD care with effective involvement of the child and parents, implementing the Medical Home model principles.</span>
              </li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Target Audience</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                Healthcare Professionals
              </span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                Clinical Psychologists
              </span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                Pediatricians
              </span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                Neurologists
              </span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                Special Education Teachers
              </span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                Parents/Caregivers
              </span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                ADHD Coaches
              </span>
              <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full">
                Counsellors
              </span>
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
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Organisational owner</h3>
              <ul className="text-sm font-medium text-slate-900 space-y-1">
                <li>Saudi ADHD Support Group (Saudi Arabia)</li>
                <li>American Academy of Pediatrics (U.S.)</li>
              </ul>
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
                HRH Prince Mohammed bin Nawaf bin Abdulaziz
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
                CME Accreditation: 35 CME credits approved by Saudi Council for Health Specialties
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

    <div className="space-y-6">
      {/* Scientific Program */}
      <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Scientific Program</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Building on earlier national momentum, this symposium marked a strategic pivot: from "awareness events" toward a
          structured model of service delivery. In collaboration with the AAP, the programme emphasized coordinated systems of
          care—bringing together clinicians, educators, parents, and emerging community roles such as ADHD coaching. A core feature
          was applied training around the AAP ADHD Toolkit, supporting standardized assessment and treatment pathways while
          strengthening multidisciplinary collaboration.
        </p>

        {/* Medical Home Model */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Medical Home Model</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The American Academy of Pediatrics describes the Medical Home as a model of delivering primary care that is accessible,
            continuous, comprehensive, family-centered, coordinated, compassionate, and culturally effective. In March 2007, a consensus
            statement on Medical Home principles was developed and jointly endorsed by the American College of Physicians (ACP), American
            Academy of Family Physicians (AAFP), American Osteopathic Association (AOA), and American Academy of Pediatrics (AAP).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Family-centered Partnership</h4>
              <p className="text-sm text-slate-700">
                A trusting, collaborative working partnership with families, respecting their diversity and recognizing that they are the
                constant in a child's life.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Community-based System</h4>
              <p className="text-sm text-slate-700">
                A family-centered, coordinated network designed to promote the healthy development and well-being of children and their
                families.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Transitions</h4>
              <p className="text-sm text-slate-700">
                Provision of high-quality, developmentally appropriate healthcare services that continue uninterrupted as the individual
                moves within systems of services and from adolescence to adulthood.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Value</h4>
              <p className="text-sm text-slate-700">
                A high-performance healthcare system requires appropriate financing to support and sustain Medical Homes that promote
                system-wide quality care with optimal health outcomes, family satisfaction, and cost efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Themes and Tracks */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Themes and Tracks</h3>
          <div className="space-y-6">
            {/* Track 1: Medical Track */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-slate-900">Track 1: Medical Track</h4>
                <div className="flex flex-col items-end gap-1 text-xs text-slate-600">
                  <span>7–9 November 2009</span>
                  <span>8:00am–5:00pm</span>
                </div>
              </div>
              <div className="mb-3">
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 mb-2">
                  Target Group: Medical Professionals
                </span>
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800 ml-2 mb-2">
                  Language: English
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                This track is for medical professionals, including physicians, nurses, and social workers. This track featured in-depth
                discussions of neurobiological advances in ADHD. It also dealt with recognition of symptoms and diagnosis and toolkit;
                treatment and tool kit; team management; putting it all together in a system of care; leadership, advocacy, and community
                involvement.
              </p>
            </div>

            {/* Track 2: General Track */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-slate-900">Track 2: General Track</h4>
                <div className="flex flex-col items-end gap-1 text-xs text-slate-600">
                  <span>7–9 November 2009</span>
                  <span>8:00am–5:00pm</span>
                </div>
              </div>
              <div className="mb-3">
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 mb-2">
                  Target Group: Parents & Educators
                </span>
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800 ml-2 mb-2">
                  Language: English with direct Arabic translation
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                This track will deal with basic facts about ADHD; its definition; its neurobiology; and its diagnosis; the implication of
                multimodal treatment study for parents and teachers; the impact of ADHD on a person's life, it also deals with the ADHD and
                educational intervention; genetic studies; the environmental influence on ADHD; the medication basic; common coexisting
                conditions; medical treatment for complex cases of ADHD. The track also deals with common learning challenges; ADHD outcomes
                and effective treatment strategies; effective parenting, teaching and behavioral strategies for dealing people with ADHD;
                ADHD coaching basic; the executive function and its impact on learning and behavior and addressing the executive function
                deficits (academic and behavior); coping with challenging behaviors; establishing positive behavioral intervention plans;
                educating children and teens about ADHD; and finding help for students in Saudi Arabia and the Middle East.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                The track also includes three different workshop about a teacher who has an ADHD student; the effective collaboration among
                involved parties (families, and professionals); and the complementary intervention strategies for ADHD. Every day in this
                track will be included a panel questions and answers discussion.
              </p>
            </div>

            {/* Track 3: Intensive Training Sessions */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-slate-900">Track 3: Intensive Training Sessions on ADHD for Parents and Educators</h4>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                The program for parents provided basic information that every parent must know such as how to deal with issues such as
                learning problems, but also covering less well known issues such as the impact of deficits in executive functions and how
                it relates to academic success. In addition, many other key topics were addressed; current research on the brain, and the
                neurobiology of ADHD, the role of neurotransmitters in ADHD, common coexisting conditions, effective parenting strategies
                for children and teens with ADHD. The program for educators covered the basic information about ADHD, but also provided an
                in-depth look at dealing with common academic challenges (writing essays, memorization of math facts, completing complex
                math problems). Attendees were also given an overview of types of medication for ADHD and the best treatment practices, an
                update on the landmark NIMH/MTA study on ADHD, and also a look at the importance of collaboration among key stakeholders:
                students, parents, teachers, counselors, and doctors.
              </p>

              {/* Intensive Training Program for Parents */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-semibold text-slate-900">Intensive Training Program for Parents</h5>
                  <div className="flex flex-col items-end gap-1 text-xs text-slate-600">
                    <span>7–8 November 2009</span>
                    <span>8:00am–5:00pm</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 mb-2">
                    Target Group: Parents
                  </span>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800 ml-2 mb-2">
                    Language: English with direct Arabic translation
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  The program for parents provides basic information that every parent must know in order to cope successfully with this
                  disorder. Specifically, ten key ADHD facts are discussed including less well-known issues such as common learning
                  problems and the key role of deficits in executive functions. In addition, other key topics are addressed:
                </p>
                <ul className="text-sm text-slate-700 space-y-1.5 list-disc list-inside ml-2">
                  <li>Current research on the brain</li>
                  <li>The neurobiology of ADHD</li>
                  <li>The role of neurotransmitters in ADHD</li>
                  <li>Common coexisting conditions</li>
                  <li>Effective parenting strategies for children and teens with ADHD</li>
                  <li>Understanding the impact of executive functions on behavior and academics</li>
                  <li>The importance of executive functions in academic success</li>
                  <li>Common academic challenges (writing essays, memorization of math facts, completing complex math problems)</li>
                  <li>A medication update and best treatment practices</li>
                  <li>An update on the landmark NIMH/MTA study on ADHD</li>
                  <li>Collaboration among key stakeholders: student, parents, teachers, counselors, and doctors</li>
                </ul>
              </div>

              {/* Intensive Training Program for Educators */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-semibold text-slate-900">Intensive Training Program for Educators</h5>
                  <div className="flex flex-col items-end gap-1 text-xs text-slate-600">
                    <span>9–11 November 2009</span>
                    <span>8:00am–5:00pm</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 mb-2">
                    Target Group: Educators
                  </span>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800 ml-2 mb-2">
                    Language: English with direct Arabic translation
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  The teacher training component provides comprehensive in-depth information about key ADHD issues and how they impact
                  learning and behavior. Key topics addressed include:
                </p>
                <ul className="text-sm text-slate-700 space-y-1.5 list-disc list-inside ml-2">
                  <li>The neurobiology of ADHD</li>
                  <li>An overview of ADHD and it's impact on school performance</li>
                  <li>An update on medication</li>
                  <li>Common learning problems</li>
                  <li>The profound impact of deficits in executive function on learning and school performance</li>
                  <li>Best practice teaching strategies</li>
                  <li>Specific academic intervention strategies</li>
                  <li>Effective behavioral strategies</li>
                  <li>Best treatment practices</li>
                  <li>An update on the landmark NIMH/MTA study on ADHD</li>
                  <li>Direct communication by Skype web cam between teachers at the conference and teachers in Sonoraville, Georgia, USA</li>
                  <li>An opportunity to prepare for presenting this ADHD information to others</li>
                </ul>
              </div>
            </div>

            {/* Track 4: An Introduction to ADHD Coaching */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-slate-900">Track 4: An Introduction to ADHD Coaching</h4>
                <div className="flex flex-col items-end gap-1 text-xs text-slate-600">
                  <span>9–11 November 2009</span>
                  <span>8:00am–5:00pm</span>
                </div>
              </div>
              <div className="mb-3">
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 mb-2">
                  Target Group: Parents & Educators
                </span>
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800 ml-2 mb-2">
                  Language: English with direct Arabic translation
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                This track gave an introduction to ADHD coaching, and the areas covered were: motivation and change, neuro-linguistic
                programming, solution focused approaches, resilience, esteem and emotional literacy, co-morbid conditions. The track will
                also cover goal & target setting, and how to motivate and coach kids and teens with ADHD, supporting parents, how to take
                care of yourself if you have ADHD, also the classroom strategies for ADHD. This track also deals with 1-2-3 magic, mental
                health issues and what makes an ADHD coach. There will be also an opportunity for discussion and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote & Featured Speakers */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Award size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Keynote & Featured Speakers</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">John M. Forbes, MBA</h3>
              <p className="text-sm text-slate-600 mb-3">Chief Operating Officer, American Academy of Pediatrics (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                John Forbes has been Chief Operating Officer (COO) of the American Academy of Pediatrics (AAP) since 2002. As COO of
                the world's premier pediatric organization, Mr. Forbes oversees the AAP's customer service, development, finance,
                information technology, international affairs, marketing and publications, and membership functions. Mr. Forbes has
                enjoyed a distinguished career in the health care field. He previously served as CEO of the American Red Cross Regional
                Blood Center in St. Louis, Missouri.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Chris A. Zeigler Dendy, MS</h3>
              <p className="text-sm text-slate-600 mb-3">Author, Educator, and Children's Mental Health Professional (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Chris A. Zeigler Dendy is an author, former educator, school psychologist and children's mental health professional with
                over 40 years experience. She is also the mother of three grown children who have ADHD. Her highly acclaimed books
                include: Teenagers with ADD and ADHD, 2nd edition (100,000+), Teaching Teens with ADD and ADHD, and A Bird's-Eye View of
                Life with ADD and ADHD, a teen survival guide she coauthored with her son Alex. They have also produced two videos: Teen
                to Teen: the ADD Experience and Father to Father. She was also the lead author and editor for CHADD's Educator's Manual
                on ADHD (2006).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Peter S. Jensen, MD</h3>
              <p className="text-sm text-slate-600 mb-3">Co-Chair, Division of Child Psychiatry and Psychology, Mayo Clinic (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Peter S. Jensen, M.D. is Co-Chair, Division of Child Psychiatry and Psychology at the Mayo Clinic. Concurrent with this
                position, Dr. Jensen serves as President & CEO of the REACH Institute (REsource for Advancing Children's Health), a
                federally chartered 501(c)(3) non-profit organization dedicated to disseminating evidence-based interventions for child &
                adolescent mental health. Prior to these current duties, Dr. Jensen was the Ruane Professor of Psychiatry at Columbia
                University and founding Director of the Center for the Advancement of Children's Mental Health at Columbia University in
                New York (1999-2007), and Associate Director for Child & Adolescent Mental Disorders Research, National Institute of
                Mental Health (1989-1999).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">James M. Swanson, Ph.D.</h3>
              <p className="text-sm text-slate-600 mb-3">Professor of Pediatrics and Director of the UCI Child Development Center, University of California, Irvine (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dr. Swanson is a developmental psychologist who received his Ph.D. degree from The Ohio State University in 1970. After
                serving in positions on the faculty of The University of Texas' Psychology Department from 1970 to 1974 and in the
                Research Institute of the Hospital for Sick Children in Toronto from 1975 to 1980, he joined the faculty of the University
                of California, Irvine (UCI), where he is now Professor of Pediatrics and Director of the UCI Child Development Center
                (UCI-CDC), which he founded in 1983. Among many other achievements, Dr. Swanson led a group in one of the six sites of
                the NIH's landmark MTA Study of ADHD in 1993. In 1995 he established a research program to investigate the molecular
                genetics of ADHD, which discovered the associations of ADHD with the dopamine receptor D4 (DRD4) gene.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Maximilian Muenke, MD</h3>
              <p className="text-sm text-slate-600 mb-3">Chief, Medical Genetics Branch, National Human Genome Research Institute (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Maximilian Muenke received his M.D. degree from the Free University of Berlin in 1979 where he graduated with a medical
                thesis in human genetics. Dr. Muenke completed a postdoctoral fellowship in the Department of Human Genetics at Yale
                University. He then moved to the Children's Hospital of Philadelphia/University of Pennsylvania School of Medicine where,
                after a clinical genetics fellowship, he joined the faculty of the Departments of Pediatrics and Genetics. In 1997, Dr.
                Muenke joined the NHGRI as Chief of the Human Development Section within the Medical Genetics Branch, and in 2000 he was
                appointed Chief of the Medical Genetics Branch. A major research area for Dr. Muenke's laboratory involves understanding
                the genetic basis of attention deficit hyperactivity disorder (ADHD).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Bruce Lanphear, MD, MPH</h3>
              <p className="text-sm text-slate-600 mb-3">Senior Scientist, Child & Family Research Institute, BC Children's Hospital; Professor, Simon Fraser University (Canada)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dr Bruce Lanphear is a Senior Scientist at the Child & Family Research Institute, BC Children's Hospital and Professor in
                the Faculty of Health Sciences at Simon Fraser University in Vancouver, British Columbia. The goal of his research is to
                prevent common diseases and disabilities in children, such as asthma and ADHD. To quantify the contribution of risk
                factors, he tests various ways to measure children's exposures to environmental toxicants using novel biomarkers measured
                during pregnancy and early childhood. Dr. Lanphear also designs experimental trials to test the efficacy of reducing
                children's exposures to environmental hazards on asthma symptoms and behavioral problems.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Laurel K. Leslie, MD, MPH</h3>
              <p className="text-sm text-slate-600 mb-3">Associate Professor, Tufts University School of Medicine (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dr Laurel Leslie is an Associate Professor at Tufts University School of Medicine, with a primary appointment in the
                Department of Medicine and holds a secondary appointment in Pediatrics. Dr. Leslie's expertise in behavioral and
                developmental pediatrics is recognized nationally; work with the American Academy of Pediatrics (AAP) and National
                Initiative on Children's Healthcare Quality (NICHQ) includes development of an ADHD toolkit; the eQIPP interactive,
                web-based CME module on ADHD; and efforts on the Task Force on Foster Care. She is also principal author of nationally
                recognized websites on child development and on ADHD.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Jerry L. Rushton, MD, MPH</h3>
              <p className="text-sm text-slate-600 mb-3">Associate Professor of Pediatrics, Indiana University (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dr. Jerry Rushton is Associate Professor of Pediatrics at Indiana University. He is the Director of the Indiana Pediatrics
                Residency Program and an active leader in graduate medical education. He continues health services research projects and
                leadership roles with the American Academy of Pediatrics (AAP) on ADHD and mental health care. He is a general academic
                pediatrician in his clinical duties, and a father of three. Dr Rushton also serves on the AAP ADHD Project Advisory
                Committee, has served on the AAP Section on Epidemiology Executive Committee, and he is currently on the Association of
                Pediatric Program Directors national board.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Billie A. Abney, D.C. CCSP</h3>
              <p className="text-sm text-slate-600 mb-3">High School Teacher and Coach (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dr Billie Abney teaches high school anatomy, physics, and chemistry, plus coaches the tennis team in Dalton, GA. As an
                adult with ADHD, Dr Abney has developed several creative teaching strategies to actively engage her students, half of whom
                are Hispanic. Abney was a chiropractor for 20 years and has recently returned to the classroom. She presents nationally and
                internationally on effective teaching strategies for students with ADHD.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Janet Assheton, BA Hons. RGN RSCN</h3>
              <p className="text-sm text-slate-600 mb-3">Director, Reach Coaching (U.K.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Jan Assheton is the director of Reach Coaching, a Coaching and Training organization. Reach was established twelve years
                ago and now has over 30 coaches all over the world. Jan supervises a growing number of ADHD Coaches many of whom have
                graduated from Reach training programes. Jan offers an eclectic approach to ADHD Coaching, combining aspects of Solution
                Focused (brief) Therapy (SFT) and Neuro-linguistic Programming (NLP). A formative member of The Institute for the
                Advancement of ADHD Coaching (IAAC) who recruited Jan to facilitate the ADHD Coach Certification process in 2007. IAAC is
                now recognized as the largest ADHD Coaching organisation in the world, safeguarding the standards and ethics of the
                profession of ADHD Coaching.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Linda P. Smith, B.A.</h3>
              <p className="text-sm text-slate-600 mb-3">Former High School Teacher, CHADD Board Member and Trainer (U.S.)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Linda Smith is a former high school English teacher, former member of the National CHADD Board of Directors and long-time
                Utah CHADD chapter coordinator. She is co-founder of National CHADD's highly respected Intensive Parent to Parent: Family
                Training on ADHD curriculum is currently a member of the National CHADD Parent to Parent Teacher Certification Training
                Team. Since 1992, Linda, has been developing and presenting in-service workshops throughout the State of Utah and
                nationally for educators, parents, medical and mental health providers about AD/HD, its impact on the family, the
                educational implications of AD/HD, and classroom management and teaching strategies. Two of Smith's five children and
                eight of her fifteen grandchildren have ADHD.
              </p>
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Users size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Speakers</h2>
          </div>

          {/* Opening Ceremony */}
          <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Award size={16} className="text-emerald-700" aria-hidden="true" />
              Opening Ceremony
            </h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              On behalf of the Custodian of the Two Holy Mosques King Abdullah bin Abdulaziz Al Saud, the Opening Ceremony was presided
              over by His Royal Highness Prince Mohammed bin Nawaf bin Abdulaziz, the Saudi Ambassador to the United Kingdom, honorary
              President of the ADHD Society, and a long-time supporter of ADHD advocacy in Saudi Arabia. Also speaking at the Opening
              Ceremony were Deputy Minister of Education Dr Faisal bin Muammer, Ministry of Health Deputy Minister for Planning and
              Development Dr Mohammed bin Hamzah Khushaim, Deputy Chief Executive Director of King Faisal Specialist Hospital & Research
              Centre Dr Othman Bin Ahmed, and Chief Executive Officer of the American Academy of Pediatrics Mr John Forbes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">HRH Prince Mohammed bin Nawaf</h4>
                <p className="text-sm text-slate-600">Honorary President, Saudi ADHD Society</p>
                <p className="text-sm text-slate-600">Saudi Ambassador to the United Kingdom</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Dr Suad Al-Yamani</h4>
                <p className="text-sm text-slate-600">Director, ADHD Society and Support Group</p>
                <p className="text-sm text-slate-600">Chairman of Symposium Organizing Committee</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Mr John Forbes</h4>
                <p className="text-sm text-slate-600">Chief Operating Officer</p>
                <p className="text-sm text-slate-600">American Academy of Pediatrics</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Dr Mohammed bin Hamzah Khushaim</h4>
                <p className="text-sm text-slate-600">Deputy Minister for Planning and Development</p>
                <p className="text-sm text-slate-600">Ministry of Health</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Dr Faisal bin Muammer</h4>
                <p className="text-sm text-slate-600">Deputy Minister of Education</p>
                <p className="text-sm text-slate-600">Ministry of Education</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Dr Othman Bin Ahmed</h4>
                <p className="text-sm text-slate-600">Deputy Chief Executive Director</p>
                <p className="text-sm text-slate-600">King Faisal Specialist Hospital & Research Centre</p>
              </div>
            </div>
          </div>

          {/* Speakers list */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">All speakers (alphabetical by last name)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Billie Abney (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Ahmed Al-Ansari (Bahrain)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Raidah Al-Baradie (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Khalid Bazaid (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Chris Dendy (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Nihal Mohammed Erfan (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>John Forbes (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Mohammed M.S. Jan (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Peter Jensen (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Huda Kattan (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Sahar Al-Khashrami (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Bruce Lanphear (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Laurel Leslie (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Omar Al-Modayfer (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Maximilian Muenke (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Jerry Rushton (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Saleh Al-Salehi (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Marwan Al-Sharbati (Oman)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Saleh Al-Shebil (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Linda Smith (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>James Swanson (U.S.)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Amal Al-Yamani (KSA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Fathi Al-Zayyat (Egypt)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span>Janet Assheton (U.K.)</span>
              </div>
            </div>
          </div>

          {/* Session chairs */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Users size={16} className="text-slate-600" aria-hidden="true" />
              Session chairs
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

        {/* Agenda Overview */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Agenda Overview</h2>
          </div>

          <div className="space-y-6">
            {/* Day 1-3: Concurrent Tracks */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">7–9 November 2009: Concurrent Tracks</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
                    Track 1: Medical Track
                  </h4>
                  <p className="text-sm text-slate-700 ml-4">
                    Daily sessions 8:00am–5:00pm | For medical professionals (physicians, nurses, social workers) | English
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
                    Track 2: General Track
                  </h4>
                  <p className="text-sm text-slate-700 ml-4">
                    Daily sessions 8:00am–5:00pm | For parents & educators | English with direct Arabic translation | Includes daily Q&A panel discussions
                  </p>
                </div>
              </div>
            </div>

            {/* Day 1-2: Intensive Training for Parents */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">7–8 November 2009: Intensive Training Program for Parents</h3>
              <p className="text-sm text-slate-700 mb-3">
                Daily sessions 8:00am–5:00pm | English with direct Arabic translation
              </p>
              <p className="text-sm text-slate-700">
                Comprehensive program covering ten key ADHD facts, executive functions, neurobiology, medication updates, and collaboration strategies.
              </p>
            </div>

            {/* Day 3-5: Intensive Training for Educators & ADHD Coaching */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">9–11 November 2009: Concurrent Programs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
                    Intensive Training Program for Educators
                  </h4>
                  <p className="text-sm text-slate-700 ml-4">
                    Daily sessions 8:00am–5:00pm | English with direct Arabic translation | Includes Skype communication with teachers in Sonoraville, Georgia, USA
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
                    Track 4: An Introduction to ADHD Coaching
                  </h4>
                  <p className="text-sm text-slate-700 ml-4">
                    Daily sessions 8:00am–5:00pm | For parents & educators | English with direct Arabic translation | Includes discussion and feedback opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Ceremony */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Opening Ceremony</h3>
              <p className="text-sm text-slate-700">
                Presided over by HRH Prince Mohammed bin Nawaf bin Abdulaziz, Saudi Ambassador to the United Kingdom and Honorary President of the ADHD Society, with addresses from senior government and healthcare officials.
              </p>
            </div>
          </div>
        </section>

        {/* Accreditation */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Accreditation</h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">CME Credits</h3>
              <p className="text-sm text-slate-700 mb-2">
                Accredited by the American Academy of Continuing Medical Education (AACME) and approved for <strong>35 CME credits</strong> by
                the Saudi Council for Health Specialties.
              </p>
              <p className="text-sm text-slate-600">
                Full attendance at the main symposium and satellite workshops qualifies for the complete credit allocation.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <GraduationCap size={18} className="text-emerald-700" aria-hidden="true" />
                Learning Outcomes
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Participants will be able to implement the Medical Home model for coordinated ADHD care delivery.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Participants will be able to apply the AAP ADHD Toolkit for standardized assessment and treatment planning.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Participants will be able to differentiate between clinical, educational, and family support needs in ADHD management.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Participants will be able to establish multidisciplinary care coordination workflows.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Participants will be able to integrate ADHD coaching principles into clinical and educational practice.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Governance & Partnerships */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-8">
          <div className="flex items-center gap-2">
            <Building2 size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Governance & Partnerships</h2>
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

          {/* Support Teams */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Support Teams</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Briefcase size={16} className="text-emerald-700" aria-hidden="true" />
                  Conference Coordination
                </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2 text-sm">Saudi Arabia</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Najwa Al-Khalifa</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Jeremy Varnham</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Sarah Al-Rasheed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Cecille Sarmac</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Eman Bin Saeed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Shahinaz Murshed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Layla Fantoukh</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Ahmed Al-Eid</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Abdallah Al-Ziyady</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Lina Mincari</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Farah Al-Thaker</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Abdullah Al-Nashmy</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Rayyana Al-Qahtani</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2 text-sm">U.S.</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Errol Alden</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Maureen De Rosa</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>John O'Brien</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Mary Ellen Kasper</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <div className="space-y-6">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Wrench size={16} className="text-emerald-700" aria-hidden="true" />
                    Technical Support
                  </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2 text-sm">Saudi Arabia</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Hamed Al-Daig</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Mohammad Al-Jasser</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Mohammed El-Zubair</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Yousuf Jowhar</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Ramel Pascual</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-2 text-sm">U.S.</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Adam Parise</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Jennifer Kazmierczak</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Murad Abbas</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>Robert Mitcheff</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Palette size={16} className="text-emerald-700" aria-hidden="true" />
                    Graphic Design
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>Yaser Al-Ghamdi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Heart size={16} className="text-emerald-700" aria-hidden="true" />
                Volunteers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Yara Mohamed Aldakeel</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Modawi Abdulaziz Al Asheek</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Noura Abdullah Al Ashaeek</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Dyna Kaled Al Saud</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Ohoud Ali Alyamy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mjdoleen</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mashael Abdulaziz Alakeel</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Bushra Hamd Alamer</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Somaya Hasan Alabady</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Nouha Mohamed Algamdy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Reham Abdullah Alshreem</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Haifa Almkbel</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Maha Alheseen</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Nouf kaled Alamar</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Eman Hasan Ganam</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Juhan shehab</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mashael Aldoeedy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Shaheenaz Almershd</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Fayza Ahmad Alshehry</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Reenad Saud Alaenezy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Shahad Alrashed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Hessa Alibrahem</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Rana Aldkeel</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Koula alrajehy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Lamya Alhzani</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Ohoud Alsanony</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Rema Alqahtani</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Sakeena Alhthlol</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Wafa Alshareef</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Mareem Alseed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Aroa Alhajy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Shirin Almola</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>Maram Almsheal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporters & Collaborators */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Handshake size={18} className="text-emerald-700" aria-hidden="true" />
              Supporters & Collaborators
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span><strong>American Academy of Pediatrics (AAP)</strong> — International partner and co-deliverer of the symposium</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span><strong>Saudi ADHD Support Group</strong> — Organisational owner and host</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span><strong>King Faisal Specialist Hospital & Research Centre</strong> — Venue and institutional support</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span><strong>Saudi Council for Health Specialties</strong> — CME accreditation body</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Proceedings */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FileText size={20} className="text-emerald-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900">Proceedings</h2>
          </div>

          {/* Event Summary & Outcomes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Event Summary & Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="font-semibold text-slate-900 mb-3">System Design</h4>
                <ul className="space-y-2 text-sm text-slate-700">
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
                <h4 className="font-semibold text-slate-900 mb-3">Capacity-building Priorities</h4>
                <ul className="space-y-2 text-sm text-slate-700">
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

            <div className="rounded-xl border border-slate-200 bg-emerald-50 p-6">
              <p className="text-slate-800 leading-relaxed text-sm">
                <span className="font-semibold">Executive Summary:</span> This symposium helped translate policy momentum into practice
                infrastructure—bridging clinical standards, education systems, and family support through a coherent model of care.
                The Medical Home framework established during this event became a cornerstone for subsequent national ADHD care
                coordination initiatives.
              </p>
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
                Detailed attendance data, participant feedback, and impact metrics are available in the symposium report.
              </p>
            </div>
          </div>

          {/* Media & Resources */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Video size={18} className="text-emerald-700" aria-hidden="true" />
              Media & Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Video size={16} className="text-slate-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-900">Video Gallery</span>
                </div>
                <p className="text-xs text-slate-600">Session recordings available in symposium archive</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={16} className="text-slate-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-900">Slide Deck Repository</span>
                </div>
                <p className="text-xs text-slate-600">PDF versions of approved presentations</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Image size={16} className="text-slate-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-slate-900">Photo Gallery</span>
                </div>
                <p className="text-xs text-slate-600">Visual documentation of the event</p>
              </div>
            </div>
          </div>

          {/* Academic Indexing */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <FileCheck size={18} className="text-emerald-700" aria-hidden="true" />
              Academic Indexing
            </h3>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-600 mb-3">
                <strong>Conference Proceedings:</strong> Full book of abstracts and symposium materials available in the report.
              </p>
              <p className="text-sm text-slate-600 mb-3">
                <strong>Citation Information:</strong> This symposium can be cited as: "3rd International Symposium: Medical Home — An
                Innovative Approach to ADHD. Riyadh, Saudi Arabia, 7–11 November 2009. Organized by Saudi ADHD Support Group in
                partnership with American Academy of Pediatrics."
              </p>
              <p className="text-sm text-slate-600">
                <strong>Linked Publications:</strong> Research and findings from this symposium have informed subsequent publications
                and clinical practice guidelines in the region.
              </p>
            </div>
          </div>
        </section>
    </div>
  </div>
);

export default Conference2009MedicalHomePage;
