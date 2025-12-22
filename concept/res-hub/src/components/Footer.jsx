import React from 'react';

const BASE_PATH = '/res.adhd.org.sa-concept';

const Footer = ({ basePath = BASE_PATH }) => {
  const getFullPath = (href) => {
    if (href.startsWith('http')) return href;
    // Ensure basePath has trailing slash, href doesn't start with slash (except for root)
    const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
    if (href === '/') {
      return normalizedBase;
    }
    // Remove leading slash from href if present, then combine
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
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">R</div>
          <p className="text-sm leading-relaxed mb-6">
            The Research Unit of the Saudi ADHD Society. Supporting evidence-informed practice and policy through research, synthesis, and knowledge translation.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/adhdarabia" className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/library')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Research Library</a></li>
            <li><a href={getFullPath('/topic-guides')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Topic Guides</a></li>
            <li><a href={getFullPath('/research-briefs')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Research Briefs</a></li>
            <li><a href={getFullPath('/current-research')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Current Research</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">For Researchers</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/irb')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Research Ethics & IRB</a></li>
            <li><a href={getFullPath('/ishraq-grant')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Open Grants</a></li>
            <li><a href={getFullPath('/research-output')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Research Output</a></li>
            <li><a href={getFullPath('/interactive-scales')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Tools</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/adhd-cpg')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Saudi ADHD CPG</a></li>
            <li><a href={getFullPath('/clinical-tools')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Clinical Tools</a></li>
            <li><a href={getFullPath('/hcp-resources/consensus-statement')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">International Consensus Statement</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Legal & Policy</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/copyright')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Copyright Notice</a></li>
            <li><a href={getFullPath('/privacy-policy')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Privacy Policy</a></li>
            <li><a href={getFullPath('/disclaimer')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; 2025{' '}
          <a href="https://adhd.org.sa/" className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" target="_blank" rel="noopener noreferrer">
            Saudi ADHD Society
          </a>
          . Licensed under{' '}
          <a href={getFullPath('/copyright')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
            CC BY-NC-SA 4.0
          </a>
          . Riyadh, KSA.
        </p>
        <p className="mt-2 md:mt-0">Developed in alignment with Vision 2030 Healthcare Goals.</p>
      </div>
    </footer>
  );
};

export default Footer;
