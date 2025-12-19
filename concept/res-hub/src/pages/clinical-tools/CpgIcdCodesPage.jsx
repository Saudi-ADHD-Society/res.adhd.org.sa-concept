import React from 'react';

const CpgIcdCodesPage = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-3xl font-bold text-slate-900">ICD Codes</h2>
      <p className="text-slate-500 mt-2">
        International Classification of Diseases codes relevant to ADHD diagnosis and management.
      </p>
    </div>

    {/* ICD-10-AM */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">ICD-10-AM</h2>
      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Disturbance of activity and attention</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Hyperkinetic conduct disorder</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.1</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Other hyperkinetic disorders</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.8</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Hyperkinetic disorder, unspecified</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.9</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500 mt-4 italic">ICD-10-AM Codes (for ADHD in adults or in children)</p>
      </div>
    </div>

    {/* ICD-10-CM */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">ICD-10-CM</h2>
      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention deficit hyperactivity disorder</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, predominantly inattentive type</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.0</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, predominantly hyperactive type</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.1</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, combined type</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.2</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, other type</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.3</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, unspecified type</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">F90.4</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500 mt-4 italic">ICD-10-CM Codes (for ADHD in adults or in children)</p>
      </div>
    </div>

    {/* ICD-11 */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">ICD-11</h2>
      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention deficit hyperactivity disorder</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">6A05</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, predominantly inattentive presentation</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">6A05.0</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, predominantly hyperactive presentation</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">6A05.1</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, combined presentation</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">6A05.2</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, other specified presentation</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">6A05.Y</span>
                </td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-3 px-4 text-slate-700 font-medium">Attention-deficit hyperactivity disorder, unspecified presentation</td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-block bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-sm">6A05.Z</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500 mt-4 italic">ICD-11 Codes (for ADHD in adults or in children)</p>
      </div>
    </div>
  </div>
);

export default CpgIcdCodesPage;
