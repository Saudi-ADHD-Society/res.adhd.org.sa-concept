import React from 'react';
import { buildLocalizedPath } from '../utils/navigation';
import { t } from '../utils/i18n';

const BASE_PATH = '/res.adhd.org.sa-concept';

const Footer = ({ basePath = BASE_PATH, locale = 'en' }) => {
  const getFullPath = (href) => {
    if (href.startsWith('http')) return href;
    // Build locale-aware path
    const localizedPath = buildLocalizedPath(href, locale);
    // Ensure basePath has trailing slash
    const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
    if (localizedPath === '/') {
      return `${normalizedBase}${locale}/`;
    }
    // Remove leading slash from localizedPath if present, then combine
    const normalizedHref = localizedPath.startsWith('/') ? localizedPath.slice(1) : localizedPath;
    
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
            {t('footer.description', locale)}
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/adhdarabia" className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" target="_blank" rel="noopener noreferrer">{t('footer.linkedIn', locale)}</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">{t('footer.sections.quickLinks', locale)}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/library')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.library', locale)}</a></li>
            <li><a href={getFullPath('/topic-guides')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.topic-guides', locale)}</a></li>
            <li><a href={getFullPath('/research-briefs')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.research-briefs', locale)}</a></li>
            <li><a href={getFullPath('/current-research')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.current-research', locale)}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">{t('footer.sections.forResearchers', locale)}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/irb')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.irb', locale)}</a></li>
            <li><a href={getFullPath('/ishraq-grant')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.ishraq-grant', locale)}</a></li>
            <li><a href={getFullPath('/research-output')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.research-output', locale)}</a></li>
            <li><a href={getFullPath('/interactive-scales')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.interactive-scales', locale)}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">{t('footer.sections.resources', locale)}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/adhd-cpg')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.adhd-cpg', locale)}</a></li>
            <li><a href={getFullPath('/clinical-tools')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.clinical-tools', locale)}</a></li>
            <li><a href={getFullPath('/hcp-resources/consensus-statement')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.consensus-statement', locale)}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">{t('footer.sections.legalPolicy', locale)}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={getFullPath('/copyright')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.copyright', locale)}</a></li>
            <li><a href={getFullPath('/privacy-policy')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.privacy-policy', locale)}</a></li>
            <li><a href={getFullPath('/disclaimer')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">{t('footer.links.disclaimer', locale)}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; 2025{' '}
          <a href="https://adhd.org.sa/" className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" target="_blank" rel="noopener noreferrer">
            Saudi ADHD Society
          </a>
          . {t('footer.copyright', locale)}{' '}
          <a href={getFullPath('/copyright')} className="hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
            {t('footer.copyrightLink', locale)}
          </a>
          . Riyadh, KSA.
        </p>
        <p className="mt-2 md:mt-0">{t('footer.vision2030', locale)}</p>
      </div>
    </footer>
  );
};

export default Footer;
