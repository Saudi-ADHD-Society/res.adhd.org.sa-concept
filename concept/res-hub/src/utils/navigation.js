const BASE_PATH = '/res.adhd.org.sa-concept';

// Map page IDs to their URL paths (based on actual Astro file structure)
export const getPagePath = (pageId) => {
  if (pageId === 'home') return '/';
  
  // Handle 3-level paths for about pages
  if (pageId.startsWith('adhd-cpg-about-')) {
    const segment = pageId.replace('adhd-cpg-about-', '');
    return `/adhd-cpg/about/${segment}`;
  }
  
  if (pageId === 'adhd-cpg-about') {
    return '/adhd-cpg/about';
  }
  
  // Map page IDs to actual Astro file-based routes
  const ROUTE_MAP = {
    // Top-level pages
    'evidence-insights': '/evidence-insights',
    'research-projects': '/research-projects',
    'clinical-tools': '/clinical-tools',
    'research-governance': '/research-governance',
    'library': '/library',
    
    // Topic guides (under /topic-guides/)
    'topic-guides': '/topic-guides',
    'topic-guide-what-is-adhd': '/topic-guides/topic-guide-what-is-adhd',
    'topic-guide-lifespan': '/topic-guides/topic-guide-lifespan',
    'topic-guide-health-comorbidity': '/topic-guides/topic-guide-health-comorbidity',
    'topic-guide-treatments': '/topic-guides/topic-guide-treatments',
    'topic-guide-diagnosis': '/topic-guides/topic-guide-diagnosis',
    'topic-guide-women-girls': '/topic-guides/topic-guide-women-girls',
    'topic-guide-disability': '/topic-guides/topic-guide-disability',
    'topic-guide-validity-utility': '/topic-guides/topic-guide-validity-utility',
    'topic-guide-saudi-arabia-knowledge': '/topic-guides/topic-guide-saudi-arabia-knowledge',
    'topic-guide-adhd-stigma': '/topic-guides/topic-guide-adhd-stigma',
    'topic-guide-universal-design-learning': '/topic-guides/topic-guide-universal-design-learning',
    'topic-guide-emotional-regulation': '/topic-guides/topic-guide-emotional-regulation',
    
    // Research briefs (under /research-briefs/)
    'research-briefs': '/research-briefs',
    'research-brief-agree-ii': '/research-briefs/research-brief-agree-ii',
    'research-brief-cpg-adaptation': '/research-briefs/research-brief-cpg-adaptation',
    'research-brief-arab-world': '/research-briefs/research-brief-arab-world',
    'research-brief-global-policy-access': '/research-briefs/research-brief-global-policy-access',
    'research-brief-lifespan-interventions': '/research-briefs/research-brief-lifespan-interventions',
    
    // Research projects (under their own paths)
    'current-research': '/current-research',
    'research-output': '/research-output',
    'cpg-overview': '/cpg-overview',
    
    // Conferences (under /conferences/)
    'conferences': '/conferences',
    'conference-2004-symposium': '/conferences/conference-2004-symposium',
    'conference-2008-symposium': '/conferences/conference-2008-symposium',
    'conference-2009-medical-home': '/conferences/conference-2009-medical-home',
    'conference-2012-pla-groups-1-2': '/conferences/conference-2012-pla-groups-1-2',
    'conference-2012-pla-group-3': '/conferences/conference-2012-pla-group-3',
    'conference-2014-pla-group-4': '/conferences/conference-2014-pla-group-4',
    'conference-2021-agree-rex-workshop': '/conferences/conference-2021-agree-rex-workshop',
    'conference-2024-research-forum': '/conferences/conference-2024-research-forum',
    'conference-2026-research-forum': '/conferences/conference-2026-research-forum',
    
    // CPG pages (under /adhd-cpg/)
    'adhd-cpg': '/adhd-cpg',
    'cpg-clinical-recommendations': '/adhd-cpg/cpg-clinical-recommendations',
    'cpg-strength-of-recommendations': '/adhd-cpg/cpg-strength-of-recommendations',
    'cpg-clinical-algorithms': '/adhd-cpg/cpg-clinical-algorithms',
    'cpg-medication-tables': '/adhd-cpg/cpg-medication-tables',
    'cpg-terminology': '/adhd-cpg/cpg-terminology',
    'cpg-icd-codes': '/adhd-cpg/cpg-icd-codes',
    'cpg-quality-standards': '/adhd-cpg/cpg-quality-standards',
    'cpg-guideline-updates': '/adhd-cpg/cpg-guideline-updates',
    
    // Clinical tools (under their own paths)
    'interactive-scales': '/interactive-scales',
    'functional-assessment': '/functional-assessment',
    'hcp-resources': '/hcp-resources',
    'consensus-statement': '/hcp-resources/consensus-statement',
    
    // Research governance (under their own paths)
    'research-priorities': '/research-priorities',
    'ishraq-grant': '/ishraq-grant',
    'irb': '/irb',
    'irb-overview': '/irb/irb-overview',
    'irb-regulations': '/irb/irb-regulations',
    'irb-process': '/irb/irb-process',
    'irb-guide': '/irb/irb-guide',
  };
  
  return ROUTE_MAP[pageId] || `/${pageId}`;
};

export const getFullPath = (pageId, basePath = BASE_PATH) => {
  const path = getPagePath(pageId);
  // Ensure basePath has trailing slash
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  if (path === '/') {
    return normalizedBase;
  }
  // Remove leading slash from path, then combine
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  // Add trailing slash for Astro's trailingSlash: 'always' config
  const finalPath = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
  return `${normalizedBase}${finalPath}`;
};

// Create a navigation function that works with Astro (for non-link navigation only)
export const createNavigate = (basePath = BASE_PATH) => {
  return (pageId) => {
    if (typeof window !== 'undefined') {
      const path = getFullPath(pageId, basePath);
      window.location.href = path;
    }
  };
};

// Get href for anchor tags (preferred method)
export const getHref = (pageId, basePath = BASE_PATH) => {
  return getFullPath(pageId, basePath);
};

// Get asset URL with base path (for images, PDFs, etc. in public folder)
export const getAssetUrl = (assetPath, basePath = BASE_PATH) => {
  // Ensure basePath has trailing slash
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  // Remove leading slash from assetPath if present
  const normalizedAsset = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${normalizedBase}${normalizedAsset}`;
};

// Get image URL (for Vite-imported images, ensures base path is included)
export const getImageUrl = (imageUrl, basePath = BASE_PATH) => {
  // Handle null/undefined
  if (!imageUrl) return imageUrl;
  
  // Convert to string if it's not already
  const url = String(imageUrl);
  
  // If imageUrl already includes the base path or is absolute, return as-is
  if (url.startsWith('http') || url.startsWith('//') || url.startsWith(basePath)) {
    return url;
  }
  // If it's a relative path starting with /, prepend base path
  if (url.startsWith('/')) {
    return getAssetUrl(url, basePath);
  }
  // For Vite-processed URLs (usually starting with /_astro/ or similar), check if base path is needed
  // Vite should handle base paths automatically, but if the URL doesn't start with base path, prepend it
  if (url.startsWith('/_astro/') || url.startsWith('/assets/')) {
    // Check if base path is already included
    if (!url.startsWith(basePath)) {
      const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
      const normalizedUrl = url.startsWith('/') ? url.slice(1) : url;
      return `${normalizedBase}${normalizedUrl}`;
    }
  }
  // Otherwise, assume Vite has already processed it correctly
  return url;
};
