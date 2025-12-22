import React from 'react';
import { Copyright, FileText, Shield, AlertCircle } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const CopyrightPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => {
  const getFullPath = (href) => {
    if (href.startsWith('http')) return href;
    const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
    if (href === '/') {
      return normalizedBase;
    }
    const normalizedHref = href.startsWith('/') ? href.slice(1) : href;
    // Add trailing slash for Astro's trailingSlash: 'always' config
    // Handle hash fragments by adding slash before the hash
    const hashIndex = normalizedHref.indexOf('#');
    if (hashIndex !== -1) {
      const pathPart = normalizedHref.substring(0, hashIndex);
      const hashPart = normalizedHref.substring(hashIndex);
      const finalPath = pathPart.endsWith('/') ? pathPart : `${pathPart}/`;
      return `${normalizedBase}${finalPath}${hashPart}`;
    }
    const finalPath = normalizedHref.endsWith('/') ? normalizedHref : `${normalizedHref}/`;
    return `${normalizedBase}${finalPath}`;
  };

  return (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Breadcrumb basePath={basePath} />

    {/* Hero Section */}
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-indigo-50" />
      <div className="relative p-6 md:p-8">
        <div className="flex items-center gap-3 text-emerald-700 mb-4">
          <Copyright size={24} className="text-emerald-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Copyright Notice</h1>
        </div>
        <p className="text-slate-700 leading-relaxed max-w-3xl">
          This website and its content are licensed under a Creative Commons license. Learn about your rights and responsibilities when using materials from this site.
        </p>
      </div>
    </div>

    {/* Main License Notice */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 md:p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
          <div className="flex-1">
            <p className="text-blue-900 text-sm md:text-base leading-relaxed">
              This <span className="font-semibold">work</span> by{' '}
              <a 
                href="https://adhd.org.sa/" 
                className="text-blue-700 hover:text-blue-800 font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saudi ADHD Society
              </a>{' '}
              (Registered with Ministry of Human Resources & Social Development – License 474) is licensed under a{' '}
              <a 
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/" 
                className="text-blue-700 hover:text-blue-800 font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
              </a>
              . Permissions beyond the scope of this license may be listed below (if currently applicable).
            </p>
          </div>
        </div>
      </div>

      {/* Main License Description */}
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p className="text-sm md:text-base">
          Unless indicated otherwise for specific items or collections of content (either below or within specific items or collections), this copyright material is licensed for re-use under a{' '}
          <a 
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/" 
            className="text-emerald-700 hover:text-emerald-800 font-semibold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
          </a>
          . In essence, you are free to copy, distribute and adapt the material, as long as you attribute the work to Saudi ADHD Society, distribute any derivative works under the same license, and abide by the other licence terms.
        </p>
        <p className="text-sm md:text-base">
          Items such as Saudi ADHD Society branded PDFs downloaded from this website (i.e. items that contain the Saudi ADHD Society branding and logo as part of their design) need no additional written attribution as long as they are distributed as-is. This covers both the old (AFTA Society) and new (Saudi ADHD Society) logos and branded materials.
        </p>
      </div>
    </div>

    {/* Logos Section */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <Shield size={20} className="text-slate-700" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">Logos</h2>
      </div>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p className="text-sm md:text-base">
          This licence does not apply to any logos, emblems and trademarks on the website or to the website's design elements. Those specific items may not be re-used without express permission. In particular, neither the Saudi ADHD Society logo, nor the commercial typefaces in use on the website may be copied or used in any way.
        </p>
        <p className="text-sm md:text-base">
          Attribution of shared content or derivative works should be in written form and not by reproduction of the Saudi ADHD Society logo.
        </p>
      </div>
    </div>

    {/* Third Party Material Section */}
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <FileText size={20} className="text-slate-700" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">Third Party Material</h2>
      </div>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p className="text-sm md:text-base">
          The licence to reproduce Saudi ADHD Society copyright protected material does not extend to any material or trademark on this site that is identified as being the copyright of a third party. You must get authorisation to reproduce such material from the copyright holders concerned.
        </p>
        <p className="text-sm md:text-base">
          <strong>Note:</strong> The{' '}
          <a 
            href={getFullPath('/adhd-cpg/about/copyright')}
            className="text-emerald-700 hover:text-emerald-800 font-semibold underline"
          >
            Saudi National ADHD Clinical Practice Guideline (CPG)
          </a>{' '}
          is covered by a separate hybrid copyright and End User License Agreement (EULA), which differs from the general Creative Commons license applied to this website.
        </p>
      </div>
    </div>

    {/* License Summary Card */}
    <div className="bg-gradient-to-br from-emerald-50 to-indigo-50 border border-emerald-200 rounded-xl p-6 md:p-8 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-4">License Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 border border-emerald-100">
          <h4 className="font-semibold text-emerald-900 mb-2">You may:</h4>
          <ul className="space-y-1 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Copy and redistribute the material</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Adapt and remix the material</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Use for non-commercial purposes</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 border border-emerald-100">
          <h4 className="font-semibold text-emerald-900 mb-2">You must:</h4>
          <ul className="space-y-1 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Attribute to Saudi ADHD Society</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Share derivatives under the same license</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Use only for non-commercial purposes</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-emerald-200">
        <a 
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/" 
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about CC BY-NC-SA 4.0
          <span className="text-emerald-600">→</span>
        </a>
      </div>
    </div>
  </div>
  );
};

export default CopyrightPage;

