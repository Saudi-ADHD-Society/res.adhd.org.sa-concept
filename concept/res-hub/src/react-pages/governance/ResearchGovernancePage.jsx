import React from 'react';
import { Users, Flag, Award, Shield, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const ResearchGovernancePage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />
    
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-8 md:p-10">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-white">
          <Users size={24} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Research Governance</h1>
      </div>
      <p className="text-slate-700 text-lg max-w-3xl">
        Strategic frameworks, ethical guidelines, and funding mechanisms that support high-quality ADHD research in Saudi Arabia. Learn about research priorities, grant opportunities, and the research ethics review process.
      </p>
    </div>

    {/* Main Content Cards */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Research Priorities */}
      <a
        href={getHref('research-priorities', basePath)}
        className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
      >
        <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-700 group-hover:text-white transition-colors">
          <Flag size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
          Research Priorities
        </h2>
        <p className="text-slate-600 mb-4">
          Strategic ADHD research priorities for Saudi Arabia and the GCC. Defining the agenda for the next decade, moving away from ad-hoc studies to a strategic, consensus-based roadmap.
        </p>
        <div className="text-sm font-semibold text-slate-700 flex items-center group-hover:text-slate-800">
          View Priorities <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Grants & Funding */}
      <a
        href={getHref('ishraq-grant', basePath)}
        className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
      >
        <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
          <Award size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
          Grants & Funding
        </h2>
        <p className="text-slate-600 mb-4">
          Saudi ADHD Society research grant calls and funded projects. Funding innovative studies that address the specific needs of the ADHD community in Saudi Arabia.
        </p>
        <div className="text-sm font-semibold text-slate-700 flex items-center group-hover:text-slate-800">
          Learn About Grants <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      {/* Research Ethics & IRB */}
      <a
        href={getHref('irb', basePath)}
        className="group block text-left bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all md:col-span-2"
      >
        <div className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Shield size={32} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
              Research Ethics & IRB
            </h2>
            <p className="text-slate-600 mb-4">
              Local research ethics process and committee information. The Saudi ADHD Society's Institutional Review Board (IRB) is a permanent local Research Ethics Committee established to protect the rights, safety, and dignity of individuals with ADHD. It operates in line with Islamic teachings, local regulations and laws, and societal values.
            </p>
            <div className="text-sm font-semibold text-slate-700 flex items-center group-hover:text-slate-800">
              View IRB Information <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default ResearchGovernancePage;
