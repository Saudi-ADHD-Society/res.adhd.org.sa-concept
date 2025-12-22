import React from 'react';
import { AlertTriangle, FileText, BookOpen, ExternalLink } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const DisclaimerPage = ({ basePath = '/res.adhd.org.sa-concept/' }) => {
  const getFullPath = (href) => {
    if (href.startsWith('http')) return href;
    const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
    if (href === '/') {
      return normalizedBase;
    }
    const normalizedHref = href.startsWith('/') ? href.slice(1) : href;
    
    // Check if this is a file path (has a file extension) - files shouldn't get trailing slashes
    const fileExtensionPattern = /\.(svg|png|jpg|jpeg|gif|webp|ico|pdf|json|xml|txt|css|js|woff|woff2|ttf|eot)$/i;
    
    // Handle hash fragments
    const hashIndex = normalizedHref.indexOf('#');
    const pathWithoutHash = hashIndex !== -1 ? normalizedHref.substring(0, hashIndex) : normalizedHref;
    const hashPart = hashIndex !== -1 ? normalizedHref.substring(hashIndex) : '';
    
    // If it's a file, don't add trailing slash
    if (fileExtensionPattern.test(pathWithoutHash)) {
      return `${normalizedBase}${normalizedHref}`;
    }
    
    // Add trailing slash for Astro's trailingSlash: 'always' config (only for directory paths)
    if (hashIndex !== -1) {
      const finalPath = pathWithoutHash.endsWith('/') ? pathWithoutHash : `${pathWithoutHash}/`;
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
        <div className="relative p-6 md:p-8">
          <div className="flex items-center gap-3 text-amber-700 mb-4">
            <AlertTriangle size={24} className="text-amber-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Disclaimer</h1>
          </div>
          <p className="text-slate-700 leading-relaxed max-w-3xl">
            Important information about the use of this Research Portal and its content.
          </p>
        </div>
      </div>

      {/* General Disclaimer */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <FileText size={24} className="text-indigo-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">General Disclaimer</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm md:text-base text-amber-900 font-semibold mb-2">
              This website is for informational and educational purposes only.
            </p>
            <p className="text-sm md:text-base text-amber-900">
              The content provided on this Research Portal is intended to support research, education, and knowledge sharing. It is not intended to be, and should not be construed as, medical advice, professional medical opinion, diagnosis, or treatment.
            </p>
          </div>

          <p className="text-sm md:text-base">
            <strong>Not a Substitute for Professional Medical Care:</strong> The information on this website is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions you may have regarding a medical condition or treatment. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </p>

          <p className="text-sm md:text-base">
            <strong>Research and Educational Content:</strong> This portal contains research papers, clinical guidelines, topic guides, and other educational materials. These materials are provided for research and educational purposes to support healthcare professionals, researchers, and interested individuals. They reflect the state of knowledge at the time of publication and may become outdated as new research emerges.
          </p>

          <p className="text-sm md:text-base">
            <strong>Accuracy and Currency:</strong> While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website. Information may contain technical inaccuracies or typographical errors and may be changed or updated without notice.
          </p>

          <p className="text-sm md:text-base">
            <strong>No Liability:</strong> The Saudi ADHD Society, its Research Unit, and its contributors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of, or inability to use, this website or its content. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
          </p>
        </div>
      </div>

      {/* Clinical Practice Guidelines Disclaimer */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen size={24} className="text-emerald-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Clinical Practice Guidelines</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            The <a href={getFullPath('/adhd-cpg')} className="text-emerald-700 hover:text-emerald-800 font-semibold underline">Saudi National ADHD Clinical Practice Guideline (CPG)</a> has its own specific disclaimer that applies to the use of that guideline. Please review the{' '}
            <a href={getFullPath('/adhd-cpg/about/disclaimer')} className="text-emerald-700 hover:text-emerald-800 font-semibold underline">
              CPG Disclaimer
            </a>{' '}
            before using the clinical practice guideline.
          </p>
          <p className="text-sm md:text-base">
            <strong>Important:</strong> CPGs are intended to serve as an aid to clinical judgment but are not a substitute for a medical professional's independent judgment. They should not be considered medical advice and are not intended to serve as a standard of medical care.
          </p>
        </div>
      </div>

      {/* External Links and Resources */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <ExternalLink size={24} className="text-slate-700" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">External Links and Resources</h2>
        </div>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            This website may contain links to external websites, research papers, journals, and other resources that are not operated or controlled by the Saudi ADHD Society. We have no control over the nature, content, and availability of those sites or resources.
          </p>
          <p className="text-sm md:text-base">
            The inclusion of any links or references does not necessarily imply a recommendation or endorse the views expressed within them. We are not responsible for the content, privacy practices, or accuracy of information on external websites.
          </p>
          <p className="text-sm md:text-base">
            Access to research papers, PDFs, and other documents linked from this site may be subject to the terms and conditions of the respective publishers, repositories, or hosting platforms.
          </p>
        </div>
      </div>

      {/* Use of Information */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Use of Information</h2>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p className="text-sm md:text-base">
            <strong>For Healthcare Professionals:</strong> The information on this website is intended to support healthcare professionals in their practice, research, and continuing education. However, clinical decisions must be made based on individual patient circumstances, local resources, and current best practices. Always exercise your professional judgment.
          </p>

          <p className="text-sm md:text-base">
            <strong>For Researchers:</strong> Research papers, data, and resources are provided to support academic and clinical research. Researchers are responsible for ensuring compliance with ethical guidelines, institutional review board requirements, and applicable regulations when using information from this site.
          </p>

          <p className="text-sm md:text-base">
            <strong>For General Public:</strong> If you are not a healthcare professional or researcher, we strongly encourage you to consult with qualified healthcare providers regarding any medical questions or concerns. This website is not intended to provide personal medical advice.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Questions?</h3>
          <p className="text-sm md:text-base">
            If you have questions about this disclaimer or the use of information on this website, please contact the Saudi ADHD Society Research Unit at{' '}
            <a 
              href="mailto:research@adhd.org.sa"
              className="text-amber-700 hover:text-amber-800 font-semibold underline"
            >
              research@adhd.org.sa
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;

