import React from 'react';
import { Award } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const GrantPage = ({ basePath = '/res.adhd.org.sa-concept/' , locale = 'en'}) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} locale={locale} />
    <div className="bg-emerald-900 text-white p-10 rounded-2xl relative overflow-hidden">
      <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Saudi ADHD Society Research Grant 2024</h2>
          <p className="text-emerald-100 max-w-xl text-lg mb-8">
              Launched at the first Saudi ADHD Society Research Forum. We are funding innovative studies that address the specific needs of the ADHD community in Saudi Arabia.
          </p>
          <div className="flex gap-4">
              <button className="bg-white text-emerald-900 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors">Download Guidelines</button>
              <button className="bg-emerald-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors">Apply Now</button>
          </div>
      </div>
      <Award size={200} className="absolute -right-10 -bottom-10 text-emerald-800 opacity-50" />
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Eligibility</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Researchers affiliated with Saudi institutions.</li>
                <li>Proposals aligned with the National ADHD CPG priorities.</li>
                <li>Focus on local prevalence, cultural adaptation, or intervention efficacy.</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Dates</h3>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <div className="w-24 text-sm font-bold text-slate-500">Nov 20, 2024</div>
                    <div className="text-slate-900">Grant Announced</div>
                </li>
                <li className="flex items-center">
                    <div className="w-24 text-sm font-bold text-slate-500">Jan 15, 2025</div>
                    <div className="text-slate-900">Submission Deadline</div>
                </li>
            </ul>
        </div>
    </div>
  </div>
);

export default GrantPage;


