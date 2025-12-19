import React from 'react';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const HcpResourcesPage = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb onNavigate={onNavigate} />
    <h2 className="text-3xl font-bold text-slate-900">HCP Resources</h2>
    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">World Federation of ADHD International Consensus Statement</h3>
        <p className="text-indigo-800 mb-6">
            We endorse and provide access to the 208 evidence-based conclusions about the disorder. This statement debunks myths
            and provides a solid foundation for clinical practice.
        </p>
        <button
          onClick={() => onNavigate('consensus-statement')}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
        >
            Read Consensus Statement <ArrowRight size={16} className="ml-2"/>
        </button>
    </div>
    {/* Placeholder for other resources */}
    <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 border rounded-lg shadow-sm">
            <h4 className="font-bold text-slate-800">Medication Tables</h4>
            <p className="text-xs text-slate-500 mt-2">Dosing guides for Saudi formulary.</p>
        </div>
        <div className="bg-white p-4 border rounded-lg shadow-sm">
            <h4 className="font-bold text-slate-800">Diagnostic Algorithms</h4>
            <p className="text-xs text-slate-500 mt-2">Flowcharts for complex cases.</p>
        </div>
    </div>
  </div>
);

export default HcpResourcesPage;


