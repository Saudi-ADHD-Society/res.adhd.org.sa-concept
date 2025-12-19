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
        name: "Saudi ADHD Research Library",
        external: true,
        href: "https://res.adhd.org.sa/en/saudi-adhd-research/",
        desc: "External national library of Saudi ADHD research outputs."
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
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
            
            <a href={getFullPath('/')} className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                R
              </div>
              <div className="leading-tight">
                <h1 className="font-bold text-slate-900 text-lg tracking-tight">Research Portal</h1>
                <p className="text-xs text-slate-500 font-medium">National ADHD Knowledge Hub</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navStructure.map((section, idx) => {
                const Icon = section.icon;
                return (
                <div 
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a 
                    href={getFullPath(`/${section.sectionId}`)}
                    className="flex items-center space-x-1 py-2 font-medium text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    <Icon size={18} />
                    <span>{section.title}</span>
                  </a>
                  
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
                          <a
                            key={i}
                            href={getFullPath(item.href)}
                            className="block w-full text-left p-3 hover:bg-emerald-50 rounded-lg group/item transition-colors"
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
              {navStructure.map((section, idx) => {
                const Icon = section.icon;
                return (
                <div key={idx}>
                  <a
                    href={getFullPath(`/${section.sectionId}`)}
                    className="font-bold text-emerald-800 flex items-center space-x-2 mb-3 w-full text-left hover:text-emerald-900"
                  >
                    <Icon size={18} />
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
                          className="block text-left w-full"
                        >
                          <div className="text-sm font-medium text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.desc}</div>
                        </a>
                      ) : (
                        <a
                          key={i}
                          href={getFullPath(item.href)}
                          className="block text-left w-full"
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
