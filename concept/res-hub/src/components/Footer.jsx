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
    return `${normalizedBase}${normalizedHref}`;
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">R</div>
          <p className="text-sm leading-relaxed mb-6">
            The Research Unit of the Saudi ADHD Society. Dedicated to localizing knowledge and improving care standards through rigorous science.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/topic-guides')} className="hover:text-emerald-400">Topic Guides</a></li>
            <li><a href={getFullPath('/research-priorities')} className="hover:text-emerald-400">Research Priorities</a></li>
            <li><a href="#" className="hover:text-emerald-400">Volunteer with Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">For Researchers</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Submit a Proposal</a></li>
            <li><a href={getFullPath('/ishraq-grant')} className="hover:text-emerald-400">Open Grants</a></li>
            <li><a href={getFullPath('/interactive-scales')} className="hover:text-emerald-400">Tools</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Legal & Policy</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/copyright')} className="hover:text-emerald-400">Copyright Notice</a></li>
            <li><a href={getFullPath('/privacy-policy')} className="hover:text-emerald-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400">Data Sovereignty (KSA)</a></li>
            <li><a href="#" className="hover:text-emerald-400">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; 2025{' '}
          <a href="https://adhd.org.sa/" className="hover:text-emerald-400" target="_blank" rel="noopener noreferrer">
            Saudi ADHD Society
          </a>
          . Licensed under{' '}
          <a href={getFullPath('/copyright')} className="hover:text-emerald-400">
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
