import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getHref } from '../../utils/navigation';

const Conference2024ResearchForumPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => (
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
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Saudi ADHD Society Research Forum</h1>
          <div className="flex items-center text-slate-600 mt-2">
            <Calendar size={18} className="mr-2" aria-hidden="true" />
            <span className="font-medium">15 November 2024</span>
          </div>
        </div>
      </div>
      
      <p className="text-slate-600 max-w-3xl">
        Launched the first dedicated research forum and the Saudi ADHD Society Research Grant, marking a shift from dissemination to active knowledge creation.
      </p>
    </div>

    <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">About</h2>
      <p className="text-slate-600">
        Content to be added.
      </p>
    </div>

    <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Program</h2>
      <p className="text-slate-600">
        Content to be added.
      </p>
    </div>

    <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Resources</h2>
      <p className="text-slate-600">
        Content to be added.
      </p>
    </div>
  </div>
);

export default Conference2024ResearchForumPage;

