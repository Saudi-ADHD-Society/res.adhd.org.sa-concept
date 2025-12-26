import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const Conference2026ResearchForumPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
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
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Saudi ADHD Society Research Forum 2026</h1>
          <div className="flex items-center text-slate-600 mt-2">
            <Calendar size={18} className="mr-2" aria-hidden="true" />
            <span className="font-medium">2026</span>
          </div>
        </div>
        <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
          Upcoming
        </span>
      </div>
      
      <p className="text-slate-600 max-w-3xl">
        Details coming soon.
      </p>
    </div>

    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border-2 border-emerald-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">About</h2>
      <p className="text-slate-600">
        Content to be added.
      </p>
    </div>

    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border-2 border-emerald-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Program</h2>
      <p className="text-slate-600">
        Content to be added.
      </p>
    </div>

    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border-2 border-emerald-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Resources</h2>
      <p className="text-slate-600">
        Content to be added.
      </p>
    </div>
  </div>
);

export default Conference2026ResearchForumPage;

