import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { getHref } from '../utils/navigation';
import { t } from '../utils/i18n';

const BASE_PATH = '/res.adhd.org.sa-concept';

// Page hierarchy: maps sub-pages to their parent pages
const PAGE_HIERARCHY = {
  'consensus-statement': 'hcp-resources',
  'irb-overview': 'irb',
  'irb-regulations': 'irb',
  'irb-process': 'irb',
  'irb-guide': 'irb',
  'topic-guides': 'evidence-insights',
  'topic-guide-what-is-adhd': 'topic-guides',
  'topic-guide-lifespan': 'topic-guides',
  'topic-guide-health-comorbidity': 'topic-guides',
  'topic-guide-treatments': 'topic-guides',
  'topic-guide-diagnosis': 'topic-guides',
  'topic-guide-women-girls': 'topic-guides',
  'topic-guide-disability': 'topic-guides',
  'topic-guide-validity-utility': 'topic-guides',
  'topic-guide-saudi-arabia-knowledge': 'topic-guides',
  'topic-guide-adhd-stigma': 'topic-guides',
  'topic-guide-universal-design-learning': 'topic-guides',
  'research-briefs': 'evidence-insights',
  'library': 'evidence-insights',
  'research-brief-agree-ii': 'research-briefs',
  'research-brief-cpg-adaptation': 'research-briefs',
  'research-brief-arab-world': 'research-briefs',
  'research-brief-global-policy-access': 'research-briefs',
  'research-brief-lifespan-interventions': 'research-briefs',
  'current-research': 'research-projects',
  'research-output': 'research-projects',
  'cpg-overview': 'research-projects',
  'adhd-cpg': 'clinical-tools',
  'cpg-clinical-recommendations': 'adhd-cpg',
  'cpg-strength-of-recommendations': 'adhd-cpg',
  'cpg-clinical-algorithms': 'adhd-cpg',
  'cpg-medication-tables': 'adhd-cpg',
  'cpg-terminology': 'adhd-cpg',
  'cpg-icd-codes': 'adhd-cpg',
  'cpg-quality-standards': 'adhd-cpg',
  'cpg-guideline-updates': 'adhd-cpg',
  'adhd-cpg-about': 'adhd-cpg',
  'adhd-cpg-about-development': 'adhd-cpg-about',
  'adhd-cpg-about-publications': 'adhd-cpg-about',
  'adhd-cpg-about-acknowledgements': 'adhd-cpg-about',
  'adhd-cpg-about-disclaimer': 'adhd-cpg-about',
  'adhd-cpg-about-copyright': 'adhd-cpg-about',
  'interactive-scales': 'clinical-tools',
  'functional-assessment': 'clinical-tools',
  'hcp-resources': 'clinical-tools',
  'research-priorities': 'research-governance',
  'ishraq-grant': 'research-governance',
  'irb': 'research-governance',
};

// Navigation structure for section titles
const NAV_SECTIONS = {
  'evidence-insights': 'Evidence & Insights',
  'topic-guides': 'Evidence & Insights',
  'research-briefs': 'Evidence & Insights',
  'library': 'Evidence & Insights',
  'research-projects': 'Research Projects',
  'current-research': 'Research Projects',
  'research-output': 'Research Projects',
  'cpg-overview': 'Research Projects',
  'clinical-tools': 'Clinical Tools & Resources',
  'adhd-cpg': 'Clinical Tools & Resources',
  'interactive-scales': 'Clinical Tools & Resources',
  'functional-assessment': 'Clinical Tools & Resources',
  'hcp-resources': 'Clinical Tools & Resources',
  'consensus-statement': 'Clinical Tools & Resources',
  'research-governance': 'Research Governance',
  'research-priorities': 'Research Governance',
  'ishraq-grant': 'Research Governance',
  'irb': 'Research Governance',
  'irb-overview': 'Research Governance',
  'irb-regulations': 'Research Governance',
  'irb-process': 'Research Governance',
  'irb-guide': 'Research Governance',
};

// Get page display name using translations
const getPageName = (pageId, locale) => {
  if (pageId.startsWith('library/')) {
    const slug = pageId.slice('library/'.length);
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const breadcrumbKey = `breadcrumbs.${pageId}`;
  const translated = t(breadcrumbKey, locale);
  // If translation found (not the key itself), return it
  if (translated !== breadcrumbKey) {
    return translated;
  }
  // Fallback to a readable version of the pageId
  return pageId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Map page IDs to their URL paths
const getPagePath = (pageId) => {
  if (pageId === 'home') return '/';

  if (pageId.startsWith('library/')) {
    const slug = pageId.slice('library/'.length);
    return `/library/${slug}`;
  }
  
  // Handle 3-level paths for about pages
  if (pageId.startsWith('adhd-cpg-about-')) {
    const segment = pageId.replace('adhd-cpg-about-', '');
    return `/adhd-cpg/about/${segment}`;
  }
  
  if (pageId === 'adhd-cpg-about') {
    return '/adhd-cpg/about';
  }
  
  const parent = PAGE_HIERARCHY[pageId];
  if (parent) {
    const parentPath = getPagePath(parent);
    return `${parentPath}/${pageId}`;
  }
  
  return `/${pageId}`;
};

// Get section title for a page using translations
const getSectionTitle = (pageId, locale) => {
  const sectionKey = NAV_SECTIONS[pageId];
  if (!sectionKey) return null;
  // Map section keys to translation keys
  const translationKey = `breadcrumbs.${sectionKey}`;
  const translated = t(translationKey, locale);
  return translated !== translationKey ? translated : sectionKey;
};

// Build breadcrumb trail
const buildBreadcrumbTrail = (pageId, locale) => {
  if (pageId.startsWith('library/')) {
    const trail = [
      {
        id: 'library',
        name: getPageName('library', locale),
        path: getPagePath('library'),
      },
      {
        id: pageId,
        name: getPageName(pageId, locale),
        path: getPagePath(pageId),
      },
    ];

    const sectionTitle = getSectionTitle('library', locale);
    if (sectionTitle) {
      trail.unshift({
        id: 'library',
        name: sectionTitle,
        path: getPagePath('library'),
        isSection: true,
      });
    }

    return trail;
  }

  const trail = [];
  
  // Don't show breadcrumb on home page
  if (pageId === 'home') {
    return [];
  }
  
  // Build trail by following parent hierarchy
  let currentPageId = pageId;
  const visited = new Set();
  
  while (currentPageId && !visited.has(currentPageId)) {
    visited.add(currentPageId);
    
    const pageName = getPageName(currentPageId, locale);
    
    if (pageName) {
      trail.unshift({
        id: currentPageId,
        name: pageName,
        path: getPagePath(currentPageId),
      });
    }
    
    // Get parent
    currentPageId = PAGE_HIERARCHY[currentPageId];
  }
  
  // Add section title as the first item if we have a trail and it's not a top-level page
  if (trail.length > 0) {
    const sectionTitle = getSectionTitle(trail[0].id, locale);
    // Only add section title if it's different from the page name (i.e., not a top-level page)
    if (sectionTitle && sectionTitle !== trail[0].name) {
      trail.unshift({
        id: trail[0].id, // Link to the top-level page in the section
        name: sectionTitle,
        path: getPagePath(trail[0].id),
        isSection: true,
      });
    }
  }
  
  return trail;
};

// Get page ID from current URL path
const getPageIdFromPath = (pathname, basePath) => {
  let path = pathname.replace(basePath, '').replace(/^\/|\/$/g, '');
  
  if (!path) return 'home';
  
  const parts = path.split('/');
  
  // Handle 3-level paths like "adhd-cpg/about/development"
  if (parts.length === 3 && parts[0] === 'adhd-cpg' && parts[1] === 'about') {
    return `adhd-cpg-about-${parts[2]}`;
  }
  
  // Handle 3-level paths like "clinical-tools/hcp-resources/consensus-statement"
  if (parts.length === 3) {
    if (parts[1] === 'library') {
      return `library/${parts[2]}`;
    }
    return parts[2];
  }
  
  // Handle 2-level paths like "hcp-resources/consensus-statement" or "adhd-cpg/about"
  if (parts.length === 2) {
    if (parts[0] === 'adhd-cpg' && parts[1] === 'about') {
      return 'adhd-cpg-about';
    }
    return parts[1];
  }
  
  // It's a top-level page
  return path;
};

const Breadcrumb = ({ pageId: pageIdProp, basePath = BASE_PATH, locale = 'en' }) => {
  const [currentPageId, setCurrentPageId] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return getPageIdFromPath(window.location.pathname, basePath);
    }
    return pageIdProp || 'home';
  });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const updatePageId = () => {
      setCurrentPageId(getPageIdFromPath(window.location.pathname, basePath));
    };
    updatePageId(); // Set initial value on mount
    window.addEventListener('popstate', updatePageId);
    return () => window.removeEventListener('popstate', updatePageId);
  }, [basePath]);

  // Don't render during SSR
  if (!mounted) {
    return null;
  }

  // Don't show breadcrumb on home page
  if (currentPageId === 'home') {
    return null;
  }
  
  const trail = buildBreadcrumbTrail(currentPageId, locale);
  
  if (trail.length === 0) {
    return null;
  }

  return (
    <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <a
            href={getHref('home', basePath, locale)}
            className="hover:text-emerald-600 transition-colors flex items-center"
            aria-label={t('breadcrumbs.home', locale)}
          >
            <Home size={14} className="mr-1" />
            <span>{t('breadcrumbs.home', locale)}</span>
          </a>
        </li>
        {trail.map((item, index) => (
          <li key={item.id} className="flex items-center">
            <ChevronRight size={14} className="mx-2 text-slate-400" />
            {index === trail.length - 1 ? (
              <span className="text-slate-700 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <a
                href={getHref(item.id, basePath, locale)}
                className="hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
