import React, { useState, useEffect } from 'react';
import { BookOpen, Activity, Users, Search, Menu, X, Stethoscope } from 'lucide-react';

const BASE_PATH = '/res.adhd.org.sa-concept';

const navStructure = [
  {
    title: "Evidence & Insights",
    icon: BookOpen,
    sectionId: "evidence-insights",
    items: [
      {
        name: "Topic Guides",
        href: "/topic-guides",
        desc: "Synthesised guidance on core ADHD themes in the Saudi context."
      },
      {
        name: "Research Briefs",
        href: "/research-briefs",
        desc: "Plain-language summaries of key Saudi and global ADHD studies."
      },
      {
        name: "Research Library",
        href: "/library",
        desc: "Browse and search our comprehensive collection of Saudi ADHD research papers and publications."
      }
    ]
  },
  {
    title: "Research Projects",
    icon: Activity,
    sectionId: "research-projects",
    items: [
      {
        name: "Current Research",
        href: "/current-research",
        desc: "National survey, CPG update, rating scales phase 2, and more."
      },
      {
        name: "Research Output",
        href: "/research-output",
        desc: "Saudi ADHD Society's own peer-reviewed publications and outputs."
      },
      {
        name: "Conferences & Milestones",
        href: "/conferences",
        desc: "Two decades of scientific leadership: from the 2004 Symposium to upcoming forums."
      }
    ]
  },
  {
    title: "Clinical Tools & Resources",
    icon: Stethoscope,
    sectionId: "clinical-tools",
    items: [
      {
        name: "Saudi National ADHD CPG",
        href: "/adhd-cpg",
        desc: "The Saudi National ADHD Clinical Practice Guideline content."
      },
      {
        name: "Rating Scales & Assessment Tools",
        href: "/interactive-scales",
        desc: "Interactive Arabic rating scales and scoring."
      },
      {
        name: "ICF & Functional Assessment",
        href: "/functional-assessment",
        desc: "Translating ADHD into functioning and rights."
      },
      {
        name: "HCP Resources",
        href: "/hcp-resources",
        desc: "Key documents and references for clinicians."
      }
    ]
  },
  {
    title: "Research Governance",
    icon: Users,
    sectionId: "research-governance",
    items: [
      {
        name: "Research Priorities",
        href: "/research-priorities",
        desc: "Strategic ADHD research priorities for Saudi Arabia and the GCC."
      },
      {
        name: "Grants & Funding",
        href: "/ishraq-grant",
        desc: "Saudi ADHD Society research grant calls and funded projects."
      },
      {
        name: "Research Ethics & IRB",
        href: "/irb",
        desc: "Local research ethics process and committee information."
      }
    ]
  }
];

const Navigation = ({ basePath = BASE_PATH }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [focusedDropdownIndex, setFocusedDropdownIndex] = useState(null);
  const mobileMenuRef = React.useRef(null);
  const previousFocusRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      // Store the element that had focus before opening menu
      previousFocusRef.current = document.activeElement;
      
      // Focus first focusable element in mobile menu
      const firstFocusable = mobileMenuRef.current.querySelector('a, button');
      if (firstFocusable) {
        firstFocusable.focus();
      }

      // Handle Escape key to close menu
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
          if (previousFocusRef.current) {
            previousFocusRef.current.focus();
          }
        }
      };

      // Trap focus within mobile menu
      const handleTab = (e) => {
        if (!mobileMenuRef.current) return;
        
        const focusableElements = mobileMenuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTab);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleTab);
      };
    } else if (!isMenuOpen && previousFocusRef.current) {
      // Return focus when menu closes
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isMenuOpen]);

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
    <>
      {/* Top Bar */}
      <div className="bg-emerald-900 text-emerald-50 text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <span className="opacity-80">The Scientific Arm of the Saudi ADHD Society</span>
        <div className="flex space-x-4">
          <a href="https://adhd.org.sa" className="hover:text-white transition-colors">Main Society Site</a>
          <button 
            className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
            aria-label="Switch to Arabic language"
            disabled
            aria-disabled="true"
            lang="ar"
          >
            عربي
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'}`}>
        <div className="w-full px-4 md:px-8">
          <div className="flex justify-between items-center">
            
            <a href={getFullPath('/')} className="flex items-center space-x-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded">
              <img 
                src={getFullPath('/images/saudi-adhd-society-logo-web.svg')} 
                alt="Saudi ADHD Society Logo" 
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div className="leading-tight">
                <span className="font-bold text-slate-900 text-lg tracking-tight block">Research Portal</span>
                <span className="text-xs text-slate-500 font-medium block">National ADHD Knowledge Hub</span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navStructure.map((section, idx) => {
                const Icon = section.icon;
                const dropdownId = `dropdown-${idx}`;
                const isOpen = activeDropdown === idx;
                const dropdownRef = React.useRef(null);
                
                const handleKeyDown = (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveDropdown(isOpen ? null : idx);
                    setFocusedDropdownIndex(isOpen ? null : idx);
                  } else if (e.key === 'Escape' && isOpen) {
                    setActiveDropdown(null);
                    setFocusedDropdownIndex(null);
                    e.currentTarget.focus();
                  } else if (e.key === 'ArrowDown' && !isOpen) {
                    e.preventDefault();
                    setActiveDropdown(idx);
                    setFocusedDropdownIndex(idx);
                    // Focus first item in dropdown
                    setTimeout(() => {
                      const firstItem = dropdownRef.current?.querySelector('a');
                      firstItem?.focus();
                    }, 0);
                  }
                };

                const handleDropdownKeyDown = (e) => {
                  if (e.key === 'Escape') {
                    setActiveDropdown(null);
                    setFocusedDropdownIndex(null);
                    // Return focus to trigger
                    const trigger = document.querySelector(`[data-dropdown-trigger="${idx}"]`);
                    trigger?.focus();
                  } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const items = Array.from(dropdownRef.current?.querySelectorAll('a') || []);
                    const currentIndex = items.indexOf(e.currentTarget);
                    const nextIndex = (currentIndex + 1) % items.length;
                    items[nextIndex]?.focus();
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const items = Array.from(dropdownRef.current?.querySelectorAll('a') || []);
                    const currentIndex = items.indexOf(e.currentTarget);
                    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
                    items[prevIndex]?.focus();
                  }
                };

                return (
                <div 
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => {
                    if (focusedDropdownIndex !== idx) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <a 
                    href={getFullPath(`/${section.sectionId}`)}
                    className="flex items-center space-x-1 py-2 font-medium text-slate-600 hover:text-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                    onKeyDown={handleKeyDown}
                    data-dropdown-trigger={idx}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={dropdownId}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span>{section.title}</span>
                  </a>
                  
                  <div 
                    id={dropdownId}
                    ref={dropdownRef}
                    className={`absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-200 origin-top-left ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                    role="menu"
                    aria-label={`${section.title} submenu`}
                  >
                    <div className="p-1">
                      {section.items.map((item, i) => (
                        item.external ? (
                          <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg group/item transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                            role="menuitem"
                            onKeyDown={handleDropdownKeyDown}
                            tabIndex={isOpen ? 0 : -1}
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover/item:text-emerald-800">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                          </a>
                        ) : (
                          <a
                            key={i}
                            href={getFullPath(item.href)}
                            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg group/item transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                            role="menuitem"
                            onKeyDown={handleDropdownKeyDown}
                            tabIndex={isOpen ? 0 : -1}
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover/item:text-emerald-800">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
                );
              })}
              
              <button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                aria-label="Search Evidence"
              >
                <Search size={16} aria-hidden="true" />
                <span>Search Evidence</span>
              </button>
            </div>

            <button 
              className="lg:hidden text-slate-600" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl h-[calc(100vh-80px)] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="p-4 space-y-6">
              {navStructure.map((section, idx) => {
                const Icon = section.icon;
                return (
                <div key={idx}>
                  <a
                    href={getFullPath(`/${section.sectionId}`)}
                    className="font-bold text-emerald-800 flex items-center space-x-2 mb-3 w-full text-left hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span>{section.title}</span>
                  </a>
                  <div className="pl-6 space-y-3">
                    {section.items.map((item, i) => (
                      item.external ? (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-left w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                        >
                          <div className="text-sm font-medium text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </a>
                      ) : (
                        <a
                          key={i}
                          href={getFullPath(item.href)}
                          className="block text-left w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                        >
                          <div className="text-sm font-medium text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </a>
                      )
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
