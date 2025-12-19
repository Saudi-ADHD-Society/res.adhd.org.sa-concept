import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const DEFAULT_PAGE = 'home';
const BASE_PATH = '/res.adhd.org.sa-concept';

// Get page ID from full path (handles nested paths up to 3 levels)
const getPageFromPath = () => {
  if (typeof window === 'undefined') return DEFAULT_PAGE;
  const pathname = window.location.pathname;
  // Remove base path and leading/trailing slashes
  let path = pathname.replace(BASE_PATH, '').replace(/^\/|\/$/g, '');
  // If there's a hash anchor, extract just the path part (before #)
  const hashIndex = path.indexOf('#');
  if (hashIndex !== -1) {
    path = path.substring(0, hashIndex);
  }
  
  if (!path) return DEFAULT_PAGE;
  
  const parts = path.split('/');
  
  // Handle 3-level paths like "adhd-cpg/about/development"
  if (parts.length === 3 && parts[0] === 'adhd-cpg' && parts[1] === 'about') {
    const segment = parts[2];
    return `adhd-cpg-about-${segment}`;
  }
  
  // Handle 3-level paths like "clinical-tools/hcp-resources/consensus-statement"
  // The page ID is always the last segment
  if (parts.length === 3) {
    return parts[2];
  }
  
  // Handle 2-level paths like "hcp-resources/consensus-statement" or "adhd-cpg/about"
  if (parts.length === 2) {
    if (parts[0] === 'adhd-cpg' && parts[1] === 'about') {
      return 'adhd-cpg-about';
    }
    return parts[1]; // Return the sub-page ID
  }
  
  // It's a top-level page
  return path;
};

// Page hierarchy: maps sub-pages to their parent pages
// Keep this in sync with PAGE_HIERARCHY in App.jsx
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
  'topic-guide-society': 'topic-guides',
  'topic-guide-women-girls': 'topic-guides',
  'research-briefs': 'evidence-insights',
  'research-brief-agree-ii': 'research-briefs',
  'research-brief-cpg-adaptation': 'research-briefs',
  'research-brief-arab-world': 'research-briefs',
  'research-brief-global-policy-access': 'research-briefs',
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

// Page display names mapping
const PAGE_NAMES = {
  'home': 'Home',
  'evidence-insights': 'Evidence & Insights',
  'topic-guides': 'Topic Guides',
  'topic-guide-what-is-adhd': 'What is ADHD?',
  'topic-guide-lifespan': 'ADHD Across the Lifespan',
  'topic-guide-health-comorbidity': 'Health, Comorbidity & Risk',
  'topic-guide-treatments': 'Evidence-Based Treatments',
  'topic-guide-diagnosis': 'Diagnosis & Assessment',
  'topic-guide-society': 'ADHD & Society',
  'topic-guide-women-girls': 'Women & Girls with ADHD',
  'research-briefs': 'Research Briefs',
  'research-brief-agree-ii': 'AGREE II Quality Assessment',
  'research-brief-cpg-adaptation': 'CPG Adaptation Process',
  'research-brief-arab-world': 'ADHD in Saudi Arabia & Arab World',
  'research-brief-global-policy-access': 'Global Policy & Access',
  'research-projects': 'Research Projects',
  'current-research': 'Current Research',
  'cpg-overview': 'CPG Overview',
  'research-output': 'Research Output',
  'clinical-tools': 'Clinical Tools & Resources',
  'adhd-cpg': 'Saudi National ADHD CPG',
  'cpg-clinical-recommendations': 'Clinical Recommendations',
  'cpg-strength-of-recommendations': 'Strength of Recommendations',
  'cpg-clinical-algorithms': 'Clinical Algorithms',
  'cpg-medication-tables': 'Medication Tables',
  'cpg-terminology': 'Terminology',
  'cpg-icd-codes': 'ICD Codes',
  'cpg-quality-standards': 'Quality Standards',
  'cpg-guideline-updates': 'Guideline Updates',
  'adhd-cpg-about': 'About the Guideline',
  'adhd-cpg-about-development': 'Development',
  'adhd-cpg-about-publications': 'Publications',
  'adhd-cpg-about-acknowledgements': 'Acknowledgements',
  'adhd-cpg-about-disclaimer': 'Disclaimer',
  'adhd-cpg-about-copyright': 'Copyright',
  'interactive-scales': 'Rating Scales & Assessment Tools',
  'functional-assessment': 'ICF & Functional Assessment',
  'hcp-resources': 'HCP Resources',
  'consensus-statement': 'International Consensus Statement',
  'research-governance': 'Research Governance',
  'research-priorities': 'Research Priorities',
  'ishraq-grant': 'Grants & Funding',
  'irb': 'Research Ethics & IRB',
  'irb-overview': 'IRB Overview',
  'irb-regulations': 'IRB Regulations',
  'irb-process': 'IRB Process',
  'irb-guide': 'IRB Guide',
};

// Get section title for a page
const getSectionTitle = (pageId) => {
  return NAV_SECTIONS[pageId] || null;
};

// Build breadcrumb trail
const buildBreadcrumbTrail = (pageId) => {
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
    
    const pageName = PAGE_NAMES[currentPageId];
    
    if (pageName) {
      trail.unshift({
        id: currentPageId,
        name: pageName,
      });
    }
    
    // Get parent
    currentPageId = PAGE_HIERARCHY[currentPageId];
  }
  
  // Add section title as the first item if we have a trail and it's not a top-level page
  if (trail.length > 0) {
    const sectionTitle = getSectionTitle(trail[0].id);
    // Only add section title if it's different from the page name (i.e., not a top-level page)
    if (sectionTitle && sectionTitle !== trail[0].name) {
      trail.unshift({
        id: trail[0].id, // Link to the top-level page in the section
        name: sectionTitle,
        isSection: true,
      });
    }
  }
  
  return trail;
};

const Breadcrumb = ({ pageId: pageIdProp, onNavigate }) => {
  // Get pageId from prop or URL
  const pageId = pageIdProp || getPageFromPath();
  
  // Don't show breadcrumb on home page
  if (pageId === 'home') {
    return null;
  }
  
  const trail = buildBreadcrumbTrail(pageId);
  
  if (trail.length === 0) {
    return null;
  }
  
  return (
    <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-emerald-600 transition-colors flex items-center"
            aria-label="Home"
          >
            <Home size={14} className="mr-1" />
            <span>Home</span>
          </button>
        </li>
        {trail.map((item, index) => (
          <li key={item.id} className="flex items-center">
            <ChevronRight size={14} className="mx-2 text-slate-400" />
            {index === trail.length - 1 ? (
              <span className="text-slate-700 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(item.id)}
                className="hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
