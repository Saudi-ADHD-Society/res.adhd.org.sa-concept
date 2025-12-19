import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Activity, Users, Search, Menu, X, Award, Stethoscope } from 'lucide-react';
import HomePage, { HomeHero } from './pages/HomePage.jsx';
import TopicGuidesPage from './pages/evidence-insights/TopicGuidesPage.jsx';
import TopicGuideWhatIsAdhdPage from './pages/evidence-insights/TopicGuideWhatIsAdhdPage.jsx';
import TopicGuideLifespanPage from './pages/evidence-insights/TopicGuideLifespanPage.jsx';
import TopicGuideHealthComorbidityPage from './pages/evidence-insights/TopicGuideHealthComorbidityPage.jsx';
import TopicGuideTreatmentsPage from './pages/evidence-insights/TopicGuideTreatmentsPage.jsx';
import TopicGuideDiagnosisPage from './pages/evidence-insights/TopicGuideDiagnosisPage.jsx';
import TopicGuideSocietyPage from './pages/evidence-insights/TopicGuideSocietyPage.jsx';
import ResearchBriefsPage from './pages/evidence-insights/ResearchBriefsPage.jsx';
import ResearchBriefAgreeIiPage from './pages/evidence-insights/ResearchBriefAgreeIiPage.jsx';
import ResearchBriefCpgAdaptationPage from './pages/evidence-insights/ResearchBriefCpgAdaptationPage.jsx';
import ResearchBriefArabWorldPage from './pages/evidence-insights/ResearchBriefArabWorldPage.jsx';
import CurrentResearchPage from './pages/research-projects/CurrentResearchPage.jsx';
import ResearchOutputPage from './pages/research-projects/ResearchOutputPage.jsx';
import CpgOverviewPage from './pages/research-projects/CpgOverviewPage.jsx';
import CpgContentPage from './pages/clinical-tools/CpgContentPage.jsx';
import CpgClinicalRecommendationsPage from './pages/clinical-tools/CpgClinicalRecommendationsPage.jsx';
import CpgStrengthOfRecommendationsPage from './pages/clinical-tools/CpgStrengthOfRecommendationsPage.jsx';
import CpgClinicalAlgorithmsPage from './pages/clinical-tools/CpgClinicalAlgorithmsPage.jsx';
import CpgMedicationTablesPage from './pages/clinical-tools/CpgMedicationTablesPage.jsx';
import CpgRatingScalesPage from './pages/clinical-tools/CpgRatingScalesPage.jsx';
import CpgTerminologyPage from './pages/clinical-tools/CpgTerminologyPage.jsx';
import CpgIcdCodesPage from './pages/clinical-tools/CpgIcdCodesPage.jsx';
import CpgQualityStandardsPage from './pages/clinical-tools/CpgQualityStandardsPage.jsx';
import CpgGuidelineUpdatesPage from './pages/clinical-tools/CpgGuidelineUpdatesPage.jsx';
import CpgAboutPage from './pages/clinical-tools/CpgAboutPage.jsx';
import CpgAboutDevelopmentPage from './pages/clinical-tools/CpgAboutDevelopmentPage.jsx';
import CpgAboutPublicationsPage from './pages/clinical-tools/CpgAboutPublicationsPage.jsx';
import CpgAboutAcknowledgementsPage from './pages/clinical-tools/CpgAboutAcknowledgementsPage.jsx';
import CpgAboutDisclaimerPage from './pages/clinical-tools/CpgAboutDisclaimerPage.jsx';
import CpgAboutCopyrightPage from './pages/clinical-tools/CpgAboutCopyrightPage.jsx';
import InteractiveScalesPage from './pages/clinical-tools/InteractiveScalesPage.jsx';
import FunctionalAssessmentPage from './pages/clinical-tools/FunctionalAssessmentPage.jsx';
import HcpResourcesPage from './pages/clinical-tools/HcpResourcesPage.jsx';
import ConsensusStatementPage from './pages/clinical-tools/ConsensusStatementPage.jsx';
import ResearchPrioritiesPage from './pages/governance/ResearchPrioritiesPage.jsx';
import GrantPage from './pages/governance/GrantPage.jsx';
import IrbPage from './pages/governance/IrbPage.jsx';
import IrbOverviewPage from './pages/governance/IrbOverviewPage.jsx';
import IrbRegulationsPage from './pages/governance/IrbRegulationsPage.jsx';
import IrbProcessPage from './pages/governance/IrbProcessPage.jsx';
import IrbGuidePage from './pages/governance/IrbGuidePage.jsx';

const DEFAULT_PAGE = 'home';
const BASE_PATH = '/res.adhd.org.sa-concept';

// Page hierarchy: maps sub-pages to their parent pages
const PAGE_HIERARCHY = {
  'consensus-statement': 'hcp-resources',
  'irb-overview': 'irb',
  'irb-regulations': 'irb',
  'irb-process': 'irb',
  'irb-guide': 'irb',
  'topic-guide-what-is-adhd': 'topic-guides',
  'topic-guide-lifespan': 'topic-guides',
  'topic-guide-health-comorbidity': 'topic-guides',
  'topic-guide-treatments': 'topic-guides',
  'topic-guide-diagnosis': 'topic-guides',
  'topic-guide-society': 'topic-guides',
  'research-brief-agree-ii': 'research-briefs',
  'research-brief-cpg-adaptation': 'research-briefs',
  'research-brief-arab-world': 'research-briefs',
  'cpg-overview': 'current-research',
  'cpg-clinical-recommendations': 'adhd-cpg',
  'cpg-strength-of-recommendations': 'adhd-cpg',
  'cpg-clinical-algorithms': 'adhd-cpg',
  'cpg-medication-tables': 'adhd-cpg',
  'cpg-rating-scales': 'adhd-cpg',
  'cpg-terminology': 'adhd-cpg',
  'cpg-icd-codes': 'adhd-cpg',
  'cpg-quality-standards': 'adhd-cpg',
  'cpg-guideline-updates': 'adhd-cpg',
  'adhd-cpg-about': 'adhd-cpg',
  'adhd-cpg-about-development': 'adhd-cpg-about',
  'adhd-cpg-about-publications': 'adhd-cpg-about',
  'adhd-cpg-about-acknowledgements': 'adhd-cpg-about',
  'adhd-cpg-about-disclaimer': 'adhd-cpg-about',
};

// Get full path for a page (including parent if it's a sub-page, handles 3-level nesting)
const getPagePath = (pageId) => {
  if (pageId === DEFAULT_PAGE) return '';
  
  // Handle 3-level paths for about pages
  if (pageId.startsWith('adhd-cpg-about-')) {
    // Convert 'adhd-cpg-about-development' to 'adhd-cpg/about/development'
    const segment = pageId.replace('adhd-cpg-about-', '');
    return `adhd-cpg/about/${segment}`;
  }
  
  if (pageId === 'adhd-cpg-about') {
    return 'adhd-cpg/about';
  }
  
  const parent = PAGE_HIERARCHY[pageId];
  if (parent) {
    const parentPath = getPagePath(parent);
    return `${parentPath}/${pageId}`;
  }
  
  return pageId;
};

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

// --- MAIN APP COMPONENT ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activePage, setActivePage] = useState(getPageFromPath());

  const navigateToPage = useCallback((pageId, options = {}) => {
    const { updatePath = true } = options;
    const targetPage = pageId || DEFAULT_PAGE;

    setActivePage(targetPage);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);

    if (updatePath && typeof window !== 'undefined') {
      const pagePath = getPagePath(targetPage);
      const newPath = targetPage === DEFAULT_PAGE 
        ? `${BASE_PATH}/`
        : `${BASE_PATH}/${pagePath}`;
      
      window.history.pushState({ page: targetPage }, '', newPath);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = (event) => {
      const pageId = getPageFromPath();
      navigateToPage(pageId, { updatePath: false });
      // Scroll to anchor if present
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    };

    const initialPage = getPageFromPath();
    navigateToPage(initialPage, { updatePath: false });
    
    // Scroll to anchor if present on initial load
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigateToPage]);

  const navStructure = [
    {
      title: "Evidence & Insights",
      icon: <BookOpen size={18} />,
      items: [
        {
          name: "Topic Guides",
          id: "topic-guides",
          desc: "Synthesised guidance on core ADHD themes in the Saudi context."
        },
        {
          name: "Research Briefs",
          id: "research-briefs",
          desc: "Plain-language summaries of key Saudi and global ADHD studies."
        },
        {
          name: "Saudi ADHD Research Library",
          external: true,
          href: "https://res.adhd.org.sa/en/saudi-adhd-research/",
          desc: "External national library of Saudi ADHD research outputs."
        }
      ]
    },
    {
      title: "Research Projects",
      icon: <Activity size={18} />,
      items: [
        {
          name: "Current Research",
          id: "current-research",
          desc: "National survey, CPG update, rating scales phase 2, and more."
        },
        {
          name: "Research Output",
          id: "research-output",
          desc: "Saudi ADHD Society’s own peer-reviewed publications and outputs."
        }
      ]
    },
    {
      title: "Clinical Tools & Resources",
      icon: <Stethoscope size={18} />,
      items: [
        {
          name: "Saudi National ADHD CPG",
          id: "adhd-cpg",
          desc: "The Saudi National ADHD Clinical Practice Guideline content."
        },
        {
          name: "Rating Scales & Assessment Tools",
          id: "interactive-scales",
          desc: "Interactive Arabic rating scales and scoring."
        },
        {
          name: "ICF & Functional Assessment",
          id: "functional-assessment",
          desc: "Translating ADHD into functioning and rights."
        },
        {
          name: "HCP Resources",
          id: "hcp-resources",
          desc: "Key documents and references for clinicians."
        }
      ]
    },
    {
      title: "Research Governance",
      icon: <Users size={18} />,
      items: [
        {
          name: "Research Priorities",
          id: "research-priorities",
          desc: "Strategic ADHD research priorities for Saudi Arabia and the GCC."
        },
        {
          name: "Grants & Funding",
          id: "ishraq-grant",
          desc: "Saudi ADHD Society research grant calls and funded projects."
        },
        {
          name: "Research Ethics & IRB",
          id: "irb",
          desc: "Local research ethics process and committee information."
        }
      ]
    }
  ];

  const handleNavClick = (pageId) => {
    navigateToPage(pageId, { updatePath: true });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavClick} />;
      case 'topic-guides':
        return <TopicGuidesPage onNavigate={handleNavClick} />;
      case 'topic-guide-what-is-adhd':
        return <TopicGuideWhatIsAdhdPage onNavigate={handleNavClick} />;
      case 'topic-guide-lifespan':
        return <TopicGuideLifespanPage onNavigate={handleNavClick} />;
      case 'topic-guide-health-comorbidity':
        return <TopicGuideHealthComorbidityPage onNavigate={handleNavClick} />;
      case 'topic-guide-treatments':
        return <TopicGuideTreatmentsPage onNavigate={handleNavClick} />;
      case 'topic-guide-diagnosis':
        return <TopicGuideDiagnosisPage onNavigate={handleNavClick} />;
      case 'topic-guide-society':
        return <TopicGuideSocietyPage onNavigate={handleNavClick} />;
      case 'research-briefs':
        return <ResearchBriefsPage onNavigate={handleNavClick} />;
      case 'research-brief-agree-ii':
        return <ResearchBriefAgreeIiPage onNavigate={handleNavClick} />;
      case 'research-brief-cpg-adaptation':
        return <ResearchBriefCpgAdaptationPage onNavigate={handleNavClick} />;
      case 'research-brief-arab-world':
        return <ResearchBriefArabWorldPage onNavigate={handleNavClick} />;
      case 'current-research':
        return <CurrentResearchPage onNavigate={handleNavClick} />;
      case 'cpg-overview':
        return <CpgOverviewPage onNavigate={handleNavClick} />;
      case 'research-output':
        return <ResearchOutputPage />;
      case 'adhd-cpg':
        return <CpgContentPage onNavigate={handleNavClick} />;
      case 'cpg-clinical-recommendations':
        return <CpgClinicalRecommendationsPage />;
      case 'cpg-strength-of-recommendations':
        return <CpgStrengthOfRecommendationsPage />;
      case 'cpg-clinical-algorithms':
        return <CpgClinicalAlgorithmsPage />;
      case 'cpg-medication-tables':
        return <CpgMedicationTablesPage />;
      case 'cpg-rating-scales':
        return <CpgRatingScalesPage />;
      case 'cpg-terminology':
        return <CpgTerminologyPage />;
      case 'cpg-icd-codes':
        return <CpgIcdCodesPage />;
      case 'cpg-quality-standards':
        return <CpgQualityStandardsPage />;
      case 'cpg-guideline-updates':
        return <CpgGuidelineUpdatesPage />;
      case 'adhd-cpg-about':
        return <CpgAboutPage onNavigate={handleNavClick} />;
      case 'adhd-cpg-about-development':
        return <CpgAboutDevelopmentPage onNavigate={handleNavClick} />;
      case 'adhd-cpg-about-publications':
        return <CpgAboutPublicationsPage onNavigate={handleNavClick} />;
      case 'adhd-cpg-about-acknowledgements':
        return <CpgAboutAcknowledgementsPage onNavigate={handleNavClick} />;
      case 'adhd-cpg-about-disclaimer':
        return <CpgAboutDisclaimerPage onNavigate={handleNavClick} />;
      case 'interactive-scales':
        return <InteractiveScalesPage />;
      case 'functional-assessment':
        return <FunctionalAssessmentPage />;
      case 'hcp-resources':
        return <HcpResourcesPage onNavigate={handleNavClick} />;
      case 'consensus-statement':
        return <ConsensusStatementPage onNavigate={handleNavClick} />;
      case 'research-priorities':
        return <ResearchPrioritiesPage />;
      case 'ishraq-grant':
        return <GrantPage />;
      case 'irb':
        return <IrbPage onNavigate={handleNavClick} />;
      case 'irb-overview':
        return <IrbOverviewPage onNavigate={handleNavClick} />;
      case 'irb-regulations':
        return <IrbRegulationsPage onNavigate={handleNavClick} />;
      case 'irb-process':
        return <IrbProcessPage onNavigate={handleNavClick} />;
      case 'irb-guide':
        return <IrbGuidePage onNavigate={handleNavClick} />;
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-300">Content Coming Soon</h2>
            <p className="text-slate-500 mt-2">This section is currently being populated with data.</p>
            <button
              onClick={() => handleNavClick('home')}
              className="mt-6 text-emerald-600 font-bold hover:underline"
            >
              Return Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Top Bar */}
      <div className="bg-emerald-900 text-emerald-50 text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <span className="opacity-80">The Scientific Arm of the Saudi ADHD Society</span>
        <div className="flex space-x-4">
          <a href="https://adhd.org.sa" className="hover:text-white transition-colors">Main Society Site</a>
          <a href="#" className="hover:text-white transition-colors">عربي</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'}`}>
        <div className="w-full px-4 md:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                R
              </div>
              <div className="leading-tight">
                <h1 className="font-bold text-slate-900 text-lg tracking-tight">Research Portal</h1>
                <p className="text-xs text-slate-500 font-medium">National ADHD Knowledge Hub</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navStructure.map((section, idx) => (
                <div 
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 py-2 font-medium text-slate-600 hover:text-emerald-700 transition-colors">
                    {section.icon}
                    <span>{section.title}</span>
                  </button>
                  
                  <div className={`absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-200 origin-top-left ${activeDropdown === idx ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="p-1">
                      {section.items.map((item, i) => (
                        item.external ? (
                          <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg group/item transition-colors"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover/item:text-emerald-800">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                          </a>
                        ) : (
                          <button
                            key={i}
                            onClick={() => handleNavClick(item.id)}
                            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg group/item transition-colors"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover/item:text-emerald-800">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                          </button>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2">
                <Search size={16} />
                <span>Search Evidence</span>
              </button>
            </div>

            <button className="lg:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-4 space-y-6">
              {navStructure.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-emerald-800 flex items-center space-x-2 mb-3">
                    {section.icon}
                    <span>{section.title}</span>
                  </h3>
                  <div className="pl-6 space-y-3">
                    {section.items.map((item, i) => (
                      item.external ? (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-left w-full"
                        >
                          <div className="text-sm font-medium text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </a>
                      ) : (
                        <button
                          key={i}
                          onClick={() => handleNavClick(item.id)}
                          className="block text-left w-full"
                        >
                          <div className="text-sm font-medium text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </button>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Full-width Home Hero */}
      {activePage === 'home' && <HomeHero onNavigate={handleNavClick} />}

      {/* Main Content Area (Dynamic) */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-[60vh]">
        {renderContent()}
      </main>

      {/* Footer */}
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
              <li><button onClick={() => handleNavClick('topic-guides')} className="hover:text-emerald-400">Topic Guides</button></li>
              <li><button onClick={() => handleNavClick('research-priorities')} className="hover:text-emerald-400">Research Priorities</button></li>
              <li><a href="#" className="hover:text-emerald-400">Volunteer with Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">For Researchers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400">Submit a Proposal</a></li>
              <li><button onClick={() => handleNavClick('ishraq-grant')} className="hover:text-emerald-400">Open Grants</button></li>
              <li><button onClick={() => handleNavClick('interactive-scales')} className="hover:text-emerald-400">Tools</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal & Policy</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400">Data Sovereignty (KSA)</a></li>
              <li><a href="#" className="hover:text-emerald-400">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Saudi ADHD Society. All rights reserved. Riyadh, KSA.</p>
          <p className="mt-2 md:mt-0">Developed in alignment with Vision 2030 Healthcare Goals.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
