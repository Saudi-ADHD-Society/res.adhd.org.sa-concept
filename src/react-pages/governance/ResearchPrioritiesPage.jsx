import React from 'react';
import { Globe, Globe2, Flag } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const ResearchPrioritiesPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />
    <h2 className="text-3xl font-bold text-slate-900 mb-2">Research Priorities</h2>
    <p className="text-slate-500 max-w-2xl mb-8">
      Defining the agenda for the next decade. We are moving away from ad-hoc studies to a strategic, consensus-based roadmap
      for the GCC.
    </p>

    {/* Draft Research Themes */}
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center mb-4">
        <Flag className="w-8 h-8 text-emerald-600 mr-3" />
        <h3 className="text-xl font-bold text-slate-900">Draft Saudi ADHD Society Research Themes</h3>
      </div>
      <p className="text-slate-600 mb-6">
        These preliminary themes form the foundation for the Society’s national research priorities for 2025–2030.  
        They guide planning, funding, collaboration, and alignment with strategic national directions.
      </p>

      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            1
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Policy & Governance</h4>
            <p className="text-slate-700">Research on national and institutional policies, services, guidelines, standards, and governance related to ADHD.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            2
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Lifespan & Functioning</h4>
            <p className="text-slate-700">Research on ADHD across the lifespan and its impact on functional performance, quality of life, and psychological well-being.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            3
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Services & Integrated Care</h4>
            <p className="text-slate-700">Research on comprehensive services, integrated care, mental health, and quality of life for individuals with ADHD and their families.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            4
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Assessment Tools</h4>
            <p className="text-slate-700">Research on the development, translation, cultural adaptation, standardization, and psychometric validation of ADHD-related assessment tools.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            5
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Technology & Innovation</h4>
            <p className="text-slate-700">Research on modern and emerging technologies and digital information systems in the field of ADHD.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            6
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Interventions & Outcomes</h4>
            <p className="text-slate-700">Research on the effectiveness of clinical and community interventions and their short- and long-term outcomes.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            7
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Women & Underserved Groups</h4>
            <p className="text-slate-700">Research on ADHD among women and girls, and among high-risk or underserved groups experiencing disparities in diagnosis or access to services.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            8
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Culture & Lived Experience</h4>
            <p className="text-slate-700">Research on cultural, psychosocial, and phenomenological (lived experience) dimensions associated with ADHD.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            9
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Research Methodologies</h4>
            <p className="text-slate-700">Research employing quantitative, qualitative, and mixed-methods approaches in ADHD research.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            10
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Pharmacological Management</h4>
            <p className="text-slate-700">Research on the management of pharmacological treatment for ADHD within local clinical contexts.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            11
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Diagnostic Practice</h4>
            <p className="text-slate-700">Research on diagnostic evidence, professional standards, and methodologies for improving clinical practice quality.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            12
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Professional Development</h4>
            <p className="text-slate-700">Research on professional development, training, and strengthening the capacities of multidisciplinary teams working in ADHD.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            13
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Early Identification</h4>
            <p className="text-slate-700">Research on early diagnosis, early intervention, and reducing the negative outcomes associated with ADHD.</p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-3 shrink-0">
            14
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Health Economics</h4>
            <p className="text-slate-700">Research on health economics, economic impact, and administrative/organizational aspects related to ADHD.</p>
          </div>
        </li>
      </ul>
    </div>

    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center mb-6">
        <Globe className="w-8 h-8 text-amber-600 mr-4" />
        <h3 className="text-xl font-bold text-slate-900">The GCC Delphi Study</h3>
      </div>
      <p className="text-slate-600 mb-6">
        There is a paucity of ADHD research specifically tailored to the Gulf Cooperation Council (GCC) context. This ongoing
        study employs a <strong>Modified Delphi Technique</strong> to establish consensus among professionals across Bahrain,
        Kuwait, Oman, Qatar, Saudi Arabia, and the UAE.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4 shrink-0">1</div>
          <div>
            <h4 className="font-bold text-slate-900">Identification</h4>
            <p className="text-sm text-slate-500">Recruiting diverse panels: Psychiatrists, Pediatricians, Psychologists, and Educators.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4 shrink-0">2</div>
          <div>
            <h4 className="font-bold text-slate-900">Iteration</h4>
            <p className="text-sm text-slate-500">Rounds of open-ended questions followed by rating scales (Likert) to filter priorities.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold mr-4 shrink-0">3</div>
          <div>
            <h4 className="font-bold text-slate-900">Consensus</h4>
            <p className="text-sm text-slate-500">Defining regional priorities to guide funding allocation (e.g., adult ADHD, cultural adaptation of tools).</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center mb-6">
        <Globe2 className="w-8 h-8 text-sky-600 mr-4" />
        <h3 className="text-xl font-bold text-slate-900">International ADHD Research Priorities</h3>
      </div>
      <p className="text-slate-600 mb-4">
        Alongside our national and GCC work, the Saudi ADHD Society also contributed to an international Delphi study that
        identified ADHD research priorities from the perspective of professionals across major ADHD organizations worldwide.
        This project, led by Stephens et al. (2024), represents the largest and most systematic effort to date to map the global
        ADHD research agenda.
      </p>
      <p className="text-slate-600 mb-4">
        The study used a two-stage modified Delphi design. In Stage 1, professionals generated several hundred candidate
        research questions, which were synthesised into a refined list. In Stage 2, a larger international sample rated these
        questions for importance, producing a ranked list of priority topics for future research.
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <h4 className="font-semibold text-slate-900 mb-2">Key international priority areas</h4>
          <ul className="list-disc pl-4 space-y-1 text-slate-600">
            <li>ADHD in women and girls, including life-course outcomes and hormonal influences.</li>
            <li>Long-term benefits, risks, and side effects of pharmacological treatment.</li>
            <li>Development and optimisation of ADHD measurement and rating scales.</li>
            <li>Effectiveness and long-term outcomes of non-pharmacological interventions.</li>
            <li>Sleep, emotional regulation, and protective factors across the lifespan.</li>
          </ul>
        </div>
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <h4 className="font-semibold text-slate-900 mb-2">Our contribution</h4>
          <p className="text-slate-600 mb-3">
            The Saudi ADHD Society participated as one of the invited professional organizations, with members of our team
            serving on the steering committee and co-authoring the article. This ensures that perspectives from the Kingdom
            and the wider GCC region are represented in the global research agenda.
          </p>
          <p className="text-slate-600 mb-3">
            These international priorities complement our Saudi and GCC priorities. Together, they help us align local projects
            with global evidence gaps while still responding to the specific needs of families, clinicians, and policymakers in our context.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`${basePath}library/10.1177-10870547241307739/`}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800"
            >
              View article details
            </a>
            <a
              href="https://doi.org/10.1177/10870547241307739"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 text-xs sm:text-sm"
            >
              Open in Journal of Attention Disorders
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResearchPrioritiesPage;
